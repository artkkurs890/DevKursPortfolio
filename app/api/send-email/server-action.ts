"use server"

// This is an alternative implementation using Server Actions
// You can use this instead of the API route if you prefer

export async function sendEmail(formData: {
  name: string
  email: string
  projectType: string
  message: string
}) {
  try {
    const { name, email, projectType, message } = formData

    // Validate the data
    if (!name || !email || !projectType || !message) {
      return {
        success: false,
        error: "Missing required fields",
      }
    }

    // In a production environment, you would use a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - Amazon SES

    // For demonstration, log the data that would be sent
    console.log("Email would be sent to: rudikartem7@gmail.com")
    console.log("From:", email)
    console.log("Name:", name)
    console.log("Project Type:", projectType)
    console.log("Message:", message)

    // Example of how you would send with a service like Resend
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     from: 'Your Portfolio <noreply@yourdomain.com>',
    //     to: 'rudikartem7@gmail.com',
    //     subject: `New Project Request: ${projectType} from ${name}`,
    //     html: `
    //       <h2>New Project Request</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Project Type:</strong> ${projectType}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message}</p>
    //     `
    //   })
    // });

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send email",
    }
  }
}

