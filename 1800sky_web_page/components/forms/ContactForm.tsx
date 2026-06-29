"use client"

import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/send-email";

const ContactFormSchema = z.object({
  username: z
    .string()
    .trim()
    .min(5, "Name must be at least 5 characters.")
    .max(30, "Name must be at most 30 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  description: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(500, "Message must be at most 500 characters."),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    reset,
    getValues,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const result = await sendContactEmail(data);

      if (!result.success) {
        toast.error(result.error ?? "Failed to send message.");
        return;
      }

      toast.success("Thank you for your message!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Unexpected error. Please try again.");
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = getValues();
    const parsed = ContactFormSchema.safeParse(values);

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];

        if (typeof fieldName === "string") {
          setError(fieldName as keyof ContactFormData, {
            type: "validation",
            message: issue.message,
          });
        }
      });

      toast.error("Please complete all fields correctly before sending.");
      return;
    }

    await onSubmit(parsed.data);
  };

  return (
    <form onSubmit={handleFormSubmit} id="contact-sky-form" className="w-full">
      <FieldGroup className="flex w-full flex-col gap-6">
        <Field data-invalid={Boolean(errors.username)} className="flex w-full flex-col gap-1">
          <FieldLabel htmlFor="username" className="text-sm font-medium font-sans text-white">
            Name:
          </FieldLabel>
          <Input
            {...register("username")}
            id="username"
            aria-invalid={Boolean(errors.username)}
            placeholder="Pietro Schiavo"
            className="h-11 w-full rounded-md border border-input/50 px-4 text-foreground transition-all placeholder:text-muted-foreground focus-visible:border-red-600 focus-visible:ring-2 focus-visible:ring-red-600"
            autoComplete="off"
            disabled={isSubmitting}
          />
          {errors.username && (
            <FieldError className="mt-1 text-xs font-sans text-red-500">
              {errors.username.message}
            </FieldError>
          )}
        </Field>

        <Field data-invalid={Boolean(errors.email)} className="flex w-full flex-col gap-1">
          <FieldLabel htmlFor="email" className="text-sm font-medium font-sans text-white">
            Email:
          </FieldLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            placeholder="pietro.schiavo@example.com"
            className="h-11 w-full rounded-md border border-input/50 px-4 text-foreground transition-all placeholder:text-muted-foreground focus-visible:border-red-600 focus-visible:ring-2 focus-visible:ring-red-600"
            autoComplete="off"
            disabled={isSubmitting}
          />
          {errors.email && (
            <FieldError className="mt-1 text-xs font-sans text-red-500">
              {errors.email.message}
            </FieldError>
          )}
        </Field>

        <Field data-invalid={Boolean(errors.description)} className="flex w-full flex-col gap-1">
          <FieldLabel htmlFor="description" className="text-sm font-medium font-sans text-white">
            Your message:
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              {...register("description")}
              id="description"
              aria-invalid={Boolean(errors.description)}
              rows={4}
              placeholder="Type your message here"
              className="min-h-24 resize-none p-4 text-foreground placeholder:text-muted-foreground"
              autoComplete="off"
              disabled={isSubmitting}
            />
          </InputGroup>
          {errors.description && (
            <FieldError className="mt-1 text-xs font-sans text-red-500">
              {errors.description.message}
            </FieldError>
          )}
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-12 w-full rounded-md border-0 bg-red-700 text-sm font-medium font-sans text-white transition-all hover:bg-red-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </FieldGroup>
    </form>
  );
}

