// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl space-y-4">
      <h1 className="text-3xl font-bold text-green-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" className="input input-bordered w-full" value={form.name} onChange={handleChange} required/>
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" value={form.email} onChange={handleChange} required/>
        <textarea name="message" placeholder="Message" className="textarea textarea-bordered w-full" rows={5} value={form.message} onChange={handleChange} required/>
        <button className="btn bg-green-600 w-full text-white hover:bg-green-700">Send Message</button>
      </form>
    </div>
  );
}
