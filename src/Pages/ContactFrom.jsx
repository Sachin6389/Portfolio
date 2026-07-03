import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {

      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("project", formData.project);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwR7U6teZSZQlZ6YnyO4qMZ27le9kHu_uqKOjlVHuKt43f1p39-zS3R5bLZr3sxmvz2/exec",
        {
          method: "POST",
          body: data
        }
      );

      

      if (response.ok) {

        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          project: ""
        });

      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <p className="text-center lg:text-left text-base sm:text-lg text-charcoal dark:text-lightgray">
        Tell us about your project. We’ll get back within 24 hours.
      </p>

      <input
        className="w-full p-3 border rounded border-black bg-gray-300 text-black"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="w-full p-3 border rounded border-black bg-gray-300 text-black"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="w-full p-3 border rounded border-black bg-gray-300 text-black"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <textarea
        className="w-full p-3 border rounded border-black bg-gray-300 text-black"
        name="project"
        placeholder="write message"
        value={formData.project}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-blue-400 hover:bg-green-600 px-6 py-3 text-black rounded font-semibold transition"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium">
          ✅ Message sent successfully! We will get back to you within 24 hours.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-medium">
          ❌ Something went wrong. Please try again.
        </p>
      )}

    </form>
  );
}