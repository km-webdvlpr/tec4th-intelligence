import { contactEmail } from "@/lib/site-data";

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${contactEmail}`}
      className="contact-form"
      method="POST"
    >
      <input name="_subject" type="hidden" value="Tec4th build enquiry" />
      <input name="_captcha" type="hidden" value="false" />
      <input name="_template" type="hidden" value="table" />

      <label className="field">
        <span>Name</span>
        <input name="name" required type="text" />
      </label>

      <label className="field">
        <span>Business Name</span>
        <input name="businessName" required type="text" />
      </label>

      <label className="field">
        <span>Email</span>
        <input name="email" required type="email" />
      </label>

      <label className="field field-full">
        <span>Brief description of the system needed</span>
        <textarea name="systemBrief" required rows={6} />
      </label>

      <button className="button button-primary" type="submit">
        SEND
      </button>
    </form>
  );
}
