"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function HomePage() {
  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".parallax-section").forEach(section => {
        const bg = section.querySelector<HTMLElement>(".parallax-bg");
        if (!bg) return;
        const scrollPosition = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop - window.innerHeight && scrollPosition <= sectionTop + sectionHeight) {
          const parallaxOffset = (scrollPosition - sectionTop) * 0.3;
          bg.style.transform = `translateY(${parallaxOffset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll animation observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const pathname = usePathname();


  return (
    <div className="bg-black text-white font-sans scroll-smooth transition ">
      {/* Navbar */}
      <header className="flex justify-around md:justify-between md:px-40 gap-2.5 items-center  py-3 border-b border-gray-800 ">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Rizq<span className="text-gray-400">Tray</span>
        </h1>
        <nav className=" md:flex space-x-6 font-bold text-base">
 

  <Link
    href="/contact"
    className={`transition ${pathname === "/contact" ? "text-white" : "text-gray-400 hover:text-white"}`}
  >
    Contact
  </Link>

  
</nav>

      </header>

      {/* Hero Section */}
      <section className="parallax-section flex flex-col items-center text-center px-4 py-8 relative overflow-hidden">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/90 transform transition-transform duration-700 ease-out" />
        <div className="parallax-content scroll-animate relative z-10">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {["HALAL", "FRESH", "ORGANIC", "HYGIENIC"].map((tag) => (
              <span key={tag} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs md:text-sm">{tag}</span>
            ))}
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-3">
            HALAL, Healthy & Hygienic<br />
            <span className="text-gray-400">Meal Delivery</span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-md md:max-w-2xl mb-6 leading-relaxed">
            Enjoy fresh, organic, home-style cooked meals delivered to your doorstep with RizqTray — crafted with care,
            halal certified, and affordably priced.
          </p>

          <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-lg border border-gray-800 mx-auto">
            <div className="text-center mb-4">
              <p className="text-xl md:text-2xl font-bold text-gray-400 mb-1">Regular Package</p>
              <p className="text-2xl md:text-3xl font-bold">
                ৳90<span className="text-base md:text-lg text-gray-400">/Meal</span>
              </p>
            </div>

            <div className="space-y-2 mb-3">
              {[
                "5 days non-veg (Beef, Chicken, Fish, Egg)",
                "2 days fresh vegetable dishes",
                "Rice + Daal included",
                "Free home delivery",
              ].map((line, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-300 text-sm md:text-base">{line}</span>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm text-gray-300 mb-4">
              Customize your monthly menu, select or remove dishes, and order extra meals via our website at{" "}
              <a href="https://rizqtray.com" className="underline hover:text-white">rizqtray.com</a>.
            </p>
            <button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 md:py-4 rounded-lg transition duration-300 transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 scroll-animate">
            Why Choose <span className="text-gray-400"><span className="text-white">Rizq</span>Tray?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "حلال", title: "Halal & Organic", text: "Our meals are prepared with 100% halal, organic ingredients, ensuring quality and purity in every bite." },
              { icon: "🧼", title: "Hygienic Preparation", text: "Cooked in a clean, controlled environment, our meals are served in neat, hygienic lunch boxes." },
              { icon: "💸", title: "Affordable & Special Requests", text: "Starting at just ৳90 per meal. We offer monthly subscriptions only. For short-term plans (e.g., 7 days), contact us in advance at 01843-450902 or support@rizqtray.com." },
              { icon: "🍱", title: "Customizable Menu", text: "Select or remove dishes through our website. Don't like fish? Choose chicken or beef instead." },
              { icon: "🚚", title: "Timely Free Home Delivery", text: "Lunch: 12:45-1:45 PM • Dinner: 8:45-9:45 PM • Served in neat, hygienic lunch boxes." },
              { icon: "💳", title: "Flexible Payment", text: "Pay ৳4000 upfront or ৳2700 initially + remaining ৳2700 within 15 days." },
            ].map(({ icon, title, text }, i) => (
              <div key={i} className="bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-800 hover:border-green-500 transition scroll-animate">
                <div className="text-green-400 text-2xl md:text-3xl mb-3">{icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="parallax-section px-4 py-8 border-t border-gray-800 relative overflow-hidden">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/90" />
        <div className="parallax-content max-w-lg md:max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 scroll-animate">
            Get in <span className="text-gray-400">Touch</span>
          </h3>

          <div className="text-gray-400 text-sm md:text-base scroll-animate">
            <p className="mb-3">Have questions or special requests? Reach out to us!</p>
            <p className="mb-2">📞 Call/WhatsApp: <a href="tel:+8801843450902" className="underline hover:text-white">01843-450902</a> / <a href="tel:+8801314787430" className="underline hover:text-white">01314-787430</a></p>
            <p className="mb-2">📧 Email: <a href="mailto:support@rizqtray.com" className="underline hover:text-white">support@rizqtray.com</a></p>
            <p className="mb-3">🌐 Website: <a rel="noopener" href="https://rizqtray.com" target="_blank" className="underline hover:text-white">rizqtray.com</a></p>
            <p>Follow us: <a href="https://www.facebook.com/profile.php?id=61580298200712" className="underline hover:text-white">@RizqTray</a> on Facebook, Instagram, YouTube</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-lg md:max-w-4xl mx-auto text-center">
          <div className="mb-3 scroll-animate">
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              Rizq<span className="text-gray-400">Tray</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-1">Halal, Healthy & Hygienic Meal Delivery</p>
          </div>
          <div className="text-gray-500 text-xs md:text-sm space-y-1 scroll-animate">
            <p>© 2025 RizqTray. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
