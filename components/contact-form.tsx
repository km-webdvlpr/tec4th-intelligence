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
        <span>Your name</span>
        <input name="name" required type="text" />
      </label>

      <label className="field">
        <span>Business name</span>
        <input name="businessName" required type="text" />
      </label>

      <label className="field">
        <span>Email address</span>
        <input name="email" required type="email" />
      </label>

      <label className="field field-full">
        <span>What does your team currently use to manage this work?</span>
        <textarea
          name="currentTools"
          placeholder="e.g. WhatsApp, spreadsheets, paper records..."
          required
          rows={5}
        />
      </label>

      <label className="field field-full">
        <span>What should the system replace or fix?</span>
        <textarea name="problemToFix" required rows={6} />
      </label>

      <div className="contact-form-actions">
        <button className="button button-primary" type="submit">
          SEND ENQUIRY
        </button>
        <p className="contact-form-note">
          Scoped builds from R15 000. Phased delivery and payment plans
          available.
        </p>
      </div>
    </form>
  );
}
