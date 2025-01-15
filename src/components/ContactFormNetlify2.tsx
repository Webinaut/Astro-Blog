import { useState } from "preact/hooks";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/contactform.html", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form
      name="maverick contact form"
      id="contact-form"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      data-astro-reload
      novalidate
      onSubmit={submit}
    >
      <input
        type="hidden"
        name="maverick contact form"
        data-remove-prefix
        value="Contact Form from themaverick.net.au"
      />
      <label>
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label>
        Email
        <input type="email" id="email" name="email" required />
      </label>
      <label>
        Message
        <textarea id="message" name="message" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
