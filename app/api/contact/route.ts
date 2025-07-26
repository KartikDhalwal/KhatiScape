import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import nodemailer from 'nodemailer';
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Must parse JSON manually in App Router

    const { name, email, phone, message, location } = body;

    const client = await clientPromise;
    const db = client.db("khatiScape");
    const collection = db.collection("enquiries");

    await collection.insertOne({
      name,
      email,
      phone,
      message,location,
      createdAt: new Date(),
    });
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    await transporter.sendMail({
      from: `"Enquiry Mail" <${process.env.EMAIL_USER}>`,
      to: 'rahul.jangid@khatiscape.com',
      subject: '📩 New Enquiry Received',
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); padding: 20px; color: #ffffff;">
        <h2 style="margin: 0; font-size: 24px;">🔔 New Enquiry Received</h2>
      </div>
      <div style="padding: 20px; color: #333333;">
        <p style="font-size: 16px;">Hello Team,</p>
        <p style="font-size: 16px;">You have received a new enquiry. Here are the details:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f4f6f8;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f4f6f8;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f4f6f8;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f4f6f8;">Location</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f4f6f8;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 20px; font-size: 14px; color: #555;">Please follow up with the sender as soon as possible.</p>
      </div>
      <div style="background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #777;">
        © ${new Date().getFullYear()} Khatiscape Enquiry System
      </div>
    </div>
  </div>
  `,
    });
    const imagePath = path.join(process.cwd(), 'public', 'logo-05.png');
    await transporter.sendMail({
      from: `"Khatiscape Team" <rahul.jangid@khatiscape.com>`,
      to: email, // e.g. data.email
      subject: '✅ We’ve received your enquiry!',
      html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color:#f9f9f9; padding:0; margin:0;">
    <div style="max-width:600px; margin:30px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe); padding:30px; text-align:center; color:#fff;">
        <h1 style="margin:0; font-size:28px;">💙 Thank You, ${name}!</h1>
        <p style="margin:8px 0 0; font-size:16px;">We’ve received your enquiry</p>
      </div>

      <!-- Animated Banner -->
     <div style="text-align:center; padding:20px;">
        <img src="cid:khatiScapeLogo" alt="Thank you" style="max-width:100%; border-radius:8px;">
      </div>

      <!-- Body -->
      <div style="padding:20px 30px; color:#333;">
        <p style="font-size:18px; font-weight:500;">Hello ${name},</p>
        <p style="font-size:16px; line-height:1.6;">
          Thank you for reaching out to us! Your enquiry has been successfully received and our team is already looking into it.  
          We’ll get back to you shortly with more details.
        </p>

        <div style="margin:20px 0; padding:15px; background:#f4f8fb; border-left:4px solid #4facfe; border-radius:8px;">
          <p style="margin:0; font-size:16px;"><strong>Your submitted details:</strong></p>
          <ul style="margin:10px 0 0; padding-left:20px; font-size:15px; line-height:1.6;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
        </div>

        <p style="font-size:16px; line-height:1.6;">If you have any further queries, feel free to reply to this email or Contact us at 9079472171. We’re happy to help! ✨</p>
        <p style="font-size:16px; margin-top:30px;">Warm Regards,<br><strong>The Khatiscape Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:13px; color:#777;">
        © ${new Date().getFullYear()} Khatiscape. All rights reserved.
      </div>
    </div>
  </div>
  `,
   attachments: [
    {
      filename: 'logo-05.png',      
      path: imagePath,
      cid: 'khatiScapeLogo'            
    }
  ]
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error saving contact form:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
