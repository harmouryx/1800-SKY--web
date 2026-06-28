"use client"

import * as z from "zod";
import {zodResolver}  from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form"
import {Field,
        FieldError,
        FieldGroup,
        FieldLabel,
} from"@/components/ui/field";
import { Card, 
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle, 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

    //ZOD VALIDATION    
    const ContactFormSchema = z.object({
        username:z
            .string()
            .min(5, "Name must be at least 5 characters.")
            .max(20, "Name must be must at most 20 characters."),
        email: z
            .email("Please enter a valid email address."),
        description: z
            .string()
            .min(20, "Description must be at least 20 characters.")
            .max(100, "Description must be at most 100 characters."),
    })


export default function ContactForm (){

    const contactForm = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        mode: "onChange",
        defaultValues: {
            username : "",
            email: "",
            description:"",
        },
    })

    function onSubmit(data: z.infer<typeof ContactFormSchema>){
        console.log("Form data:", data) 
        toast("Thank you for you message!", {
            description: <p> You can either follow the official social links to keep in contact </p>
            }
        )
    }
    return(
        <Card>
            <CardHeader>
                <CardTitle> Keep in touch with me </CardTitle>
                <CardDescription>
                    Type your requirement here
                </CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={contactForm.handleSubmit(onSubmit)}>
                <FieldGroup >
                    <Controller 
                    name="username"
                    control={contactForm.control}
                    render={({field, fieldState})=> (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="username-as-name">Name</FieldLabel>
                        <Input {...field}
                        id="username-as-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="John Doe"
                        autoComplete="off"
                        />
                        {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                        )}
                    />
                    <Controller 
                    name="email"
                    control={contactForm.control}
                    render={({field, fieldState})=> (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input {...field}
                        id="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="example@domain.com"
                        autoComplete="off"
                        />
                        {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                        )}
                    />
                    <Controller 
                    name="description"
                    control={contactForm.control}
                    render={({field, fieldState})=> (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">Description</FieldLabel>
                        <InputGroup>
                            <InputGroupTextarea {...field}
                                id="email"
                                aria-invalid={fieldState.invalid}
                                rows={4}
                                placeholder="Message"
                                                      className="min-h-24 resize-none"
                                autoComplete="off"
                            />
                            <InputGroupAddon>
                                <InputGroupText className="tabular-nums">
                                {field.value.length}/100 characters
                                </InputGroupText>
                            </InputGroupAddon> 
                        </InputGroup>
                        
                        {fieldState.invalid && (<FieldError errors={[fieldState.error]}/>)}
                        </Field>
                        )}
                    />

                </FieldGroup>
                </form>
                </CardContent>
                <CardFooter>
                        <Field orientation="horizontal">
                        <Button type="button" variant="outline" onClick={() => contactForm.reset()}>
                            Reset
                        </Button>
                        <Button type="submit" form="form-rhf-demo">
                            Submit
                        </Button>
                        </Field>
                </CardFooter>
        </Card>
    );
} 