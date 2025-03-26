const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_ACCESS_TOKEN = process.env.EMAILJS_ACCESS_TOKEN;

interface EmailParams {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const { firstName, lastName, email, message }: EmailParams = await req.json();

  if (!firstName || !lastName || !email || !message)
    return Response.json({ message: "Invalid parameters" }, { status: 400 });

  try {
    const body = {
      service_id: EMAILJS_SERVICE_ID,
      user_id: EMAILJS_USER_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      accessToken: EMAILJS_ACCESS_TOKEN,
      template_params: {
        first_name: firstName,
        last_name: lastName,
        user_email: email,
        message: message,
      },
    };

    const emailJsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "*",
      },
      body: JSON.stringify(body),
    });

    const text = emailJsRes.text();

    Response.json({
      result: text,
      message: "Email sent",
    });
  } catch (e) {
    console.log(e);
    Response.json({}, { status: 500 });
  }
}
