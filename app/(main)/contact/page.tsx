"use client";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
  });
  const [submitStatus, setSubmitStatus] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        await Swal.fire({
          icon: "success",
          title: "Thanks for Believing in Us",
          text: "Our Team will Contact you soon.",
          confirmButtonText: "OK",
        });
        setFormData({ name: "", email: "", phone: "", message: "", location:"" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      location:""
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="We'd love to hear about your project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-amber-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FiMapPin className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-1 text-amber-700">
                    Our Studio
                  </h4>
                  <p className="text-gray-700">
                    Chitrakoot
                    <br />
                    Vaishali Nagar, Jaipur - 302021
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-700">
                  <FiPhone className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-1 text-amber-700">
                    Phone
                  </h4>
                  <p className="text-gray-700">+91 9079472171</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FiMail className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-1 text-amber-700">
                    Email
                  </h4>
                  <p className="text-gray-700">rahul.jangid@khatiscape.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 mb-2">
                  Your Location ?
                </label>
                <input
                  type="location"
                  id="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : <>Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
