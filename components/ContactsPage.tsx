"use client";

import { useEffect } from "react";

export default function ContactPage() {
  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col justify-center items-center px-4 scroll-smooth">
      {/* Header / Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate text-center">
        Get in <span className="text-gray-400">Touch</span>
      </h1>

      {/* Contact Info */}
      <div className="max-w-xl text-center scroll-animate space-y-4 text-gray-400">
        <p className="text-sm md:text-base">
          Have questions, suggestions, or special requests? Reach out to us!
        </p>

        <p className="text-sm md:text-base">
          📞 Call / WhatsApp:{" "}
          <a href="tel:+8801843450902" className="underline hover:text-white">
            01843-450902
          </a>{" "}
          /{" "}
          <a href="tel:+8801314787430" className="underline hover:text-white">
            01314-787430
          </a>
        </p>

        <p className="text-sm md:text-base">
          📧 Email:{" "}
          <a href="mailto:support@rizqtray.com" className="underline hover:text-white">
            support@rizqtray.com
          </a>
        </p>

        <p className="text-sm md:text-base">
          🌐 Website:{" "}
          <a href="https://rizqtray.com" target="_blank" className="underline hover:text-white">
            rizqtray.com
          </a>
        </p>

        <p className="text-sm md:text-base">
          Follow us:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61580298200712"
            target="_blank"
            className="underline hover:text-white"
          >
            @RizqTray
          </a>{" "}
          on Facebook, Instagram, YouTube
        </p>
      </div>

     
    </div>
  );
}
