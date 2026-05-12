"use server";

export type EnquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !phone || !service) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  // TODO: wire up email delivery here (e.g. Resend, Nodemailer, or SendGrid)
  // Example with Resend:
  //   await resend.emails.send({
  //     from: 'noreply@awtrees.co.uk',
  //     to: 'info@awtrees.co.uk',
  //     subject: `New enquiry from ${name}`,
  //     text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
  //   })

  console.log("New enquiry:", { name, phone, service, message });

  return { status: "success" };
}
