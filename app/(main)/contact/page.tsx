"use client";

import FullPageLoader from "@/app/components/ui/FullPageLoader";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useEffect, useState } from "react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔒 Lock scroll when loader active
  useEffect(() => {
    document.body.style.overflow = isSubmitting ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSubmitting]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Promise.all([
        // 🔹 API CALL
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (!res.ok) throw new Error("Failed");
        }),

        // 🔹 FORCE 5s SPINNER
        new Promise((resolve) => setTimeout(resolve, 5000)),
      ]);
      setIsSubmitting(false);

      await Swal.fire({
        icon: "success",
        title: "Thanks for Believing in Us",
        text: "Our Team will Contact you soon.",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        location: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && (
        <FullPageLoader text="Sending your message..." />
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear about your project"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT INFO */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-amber-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                <InfoItem
                  icon={<FiMapPin />}
                  title="Our Studio"
                  text={
                    <>
                      Chitrakoot <br />
                      Vaishali Nagar, Jaipur - 302021
                    </>
                  }
                />
                <InfoItem
                  icon={<FiPhone />}
                  title="Phone"
                  text="+91 9079472171"
                />
                <InfoItem
                  icon={<FiMail />}
                  title="Email"
                  text="rahul.jangid@khatiscape.com"
                />
              </div>
            </div>

            {/* FORM */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                <Input label="Your Location ?" name="location" value={formData.location} onChange={handleChange} />

                <div>
                  <label className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition w-full disabled:opacity-60"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* 🔹 Reusable Components */

function Input({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
  );
}

function InfoItem({ icon, title, text }: any) {
  return (
    <div className="flex items-start">
      <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
        {icon}
      </div>
      <div>
        <h4 className="font-serif font-semibold mb-1 text-amber-700">
          {title}
        </h4>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}
