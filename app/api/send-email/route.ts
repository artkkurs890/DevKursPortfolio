import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, projectType, message } = data

    // Validate the data
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can change this to your verified domain later
      to: "rudikartem7@gmail.com",
      subject: `New Project Request: ${projectType} from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Project Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email with Resend:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      messageId: emailData?.id,
    })
  } catch (error) {
    console.error("Error in email API route:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

