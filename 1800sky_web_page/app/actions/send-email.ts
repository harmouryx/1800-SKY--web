"use server"

import { Resend } from "resend";


export async function sendContactEmail(formData: {
    username: string;
    email: string;
    description: string;
}) {
    const { username, email, description } = formData;

    const domainEmail = process.env.NEXT_PUBLIC__EMAIL; 
   
    if (!username || !email || !description) {
        return { success: false, error: "Please complete all required fields." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("Server Error: RESEND_API_KEY no está configurada en el archivo .env.local");
    }

    try {
        const resend = new Resend(apiKey);
       
        const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: `${domainEmail}`,
        subject: `New contact message from ${username}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                <h2 style="color: #333; border-bottom: 2px solid #991b1b; padding-bottom: 10px;">New Contact Message</h2>
                <p><strong>Name:</strong> ${username}</p>
                <p><strong>Email:</strong> ${email}</p>
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #991b1b; border-radius: 4px;">
                    <p style="margin: 0; font-weight: bold; color: #555;">Message:</p>
                    <p style="margin: 10px 0 0 0; white-space: pre-wrap; color: #333;">${description}</p>
                </div>
            </div>
        `,
    });  

    if (error) {
        return { 
                success: false, 
                error: "Resend failed to send the email. Check server logs." 
        };
        }
    
        return { success: true, data };

    } catch (err) {
        /* OPERADOR TERNARY PARA ERROR EXCEPTIONS */
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
        return { success: false, error: errorMessage };
    }

}
