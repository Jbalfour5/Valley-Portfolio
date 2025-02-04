import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1842d118-7375-4ede-aca5-3092772dafef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-8 bg-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-zinc-50 mb-6  flex justify-center">Contact Me</h2>
        <form onSubmit={onSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-zinc-800 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-zinc-800 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-zinc-800 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-600 text-zinc-50 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Submit Form
          </button>
          <span className="block mt-4 text-center text-zinc-400">{result}</span>
        </form>
      </div>
    </div>
  );
}