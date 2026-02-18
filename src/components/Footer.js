import React from "react";
import Image from "next/image";

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={icon.replace("fa-", "")}
    className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#0A2337] transition-colors"
  >
    <i className={`fab ${icon}`}></i>
  </a>
);

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="font-bold text-lg mb-4 text-white">{title}</h3>
    <ul className="space-y-2 text-gray-300">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerLinks = {
    about: {
      title: "عن نماء",
      links: [
        { label: "من نحن", href: "/about" },
        { label: "نادي نماء التطوعي", href: "/volunteer-club" },
        { label: "تطوع معنا", href: "/volunteer" },
        { label: "تواصل معنا", href: "/contact" },
      ],
    },
    activities: {
      title: "نشاطاتنا",
      links: [
        { label: "مشاريعنا", href: "/projects" },
        { label: "برامجنا", href: "/programs" },
        { label: "حاضنة المبادرات", href: "/initiatives-incubator" },
      ],
    },
    resources: {
      title: "مصادر أخرى",
      links: [
        { label: "أخبار الجمعية", href: "/news" },
        { label: "نماء في الإعلام", href: "/media" },
      ],
    },
  };

  
  const NAMAA_MAPS_URL =
    "https://www.google.com/maps?q=32.08633797396,36.10104742369705";

  return (
    <div
      dir="rtl"
      className="font-sans bg-[#F8F9FA] min-h-screen flex flex-col"
    >
      <main className="flex-grow py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="shadow-xl rounded-2xl overflow-hidden">
           
            <div
              className="text-white p-8 md:p-12 relative"
              style={{
                backgroundImage: "url('/images/BG1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0A2337",
              }}
            >
              <div className="absolute inset-0 bg-[#0A2337]/50"></div>

              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
                  يسعدنا تواصلكم، تجدون بيانات الاتصال وأوقات العمل أدناه.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 text-right">
                  <div>
                    <h2 className="text-xl font-bold mb-4">زورونا</h2>
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-gray-300 mt-1.5 ml-3 flex-shrink-0"></i>
                      <p className="text-gray-200 leading-relaxed">
                        الزرقاء الجديدة - ش٣٦ - مجمع سامح - ط٢
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">أوقات العمل</h2>
                    <ul className="space-y-3 text-gray-200">
                      <li>الأحد - الخميس: 9:00 صباحاً - 4:00 مساءً</li>
                      <li>الجمعة: مغلق</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
                    <ul className="space-y-3 text-gray-200">
                      <li className="flex items-center">
                        <i className="fas fa-phone-alt ml-3"></i>
                        <span style={{ direction: "ltr" }}>(05) 3851335</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-envelope ml-3"></i>
                        <a
                          href="mailto:info@namaa-ngo.org"
                          className="hover:underline"
                        >
                          info@namaa-ngo.org
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <a
                href={NAMAA_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open Nama'a location on Google Maps"
              />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.3680175832633!2d36.10104742369705!3d32.08633797396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b7002be089ffb%3A0x2c97b68de3b956a9!2z2KzZhdi52YrYqSDZhtmF2KfYoSDZhNmE2KrZhtmF2YrYqSDYp9mE2YXYrNiq2YXYudmK2Kk!5e0!3m2!1sar!2sjo!4v1762798192499!5m2!1sar!2sjo"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0A2337] text-white w-full">
        <div className="container mx-auto py-12 px-6">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start text-center md:text-right gap-10">
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <Image
                src="/nama-logo.png"
                alt="شعار نماء"
                width={120}
                height={40}
                className="mb-4"
              />
              <div className="flex gap-3">
                <SocialIcon
                  icon="fa-facebook-f"
                  href="https://www.facebook.com/namaa.society?_rdc=1&_rdr#"
                />
                <SocialIcon
                  icon="fa-x-twitter"
                  href="https://x.com/i/flow/login?redirect_after_login=%2FNamaaSociety"
                />
                <SocialIcon
                  icon="fa-instagram"
                  href="https://www.instagram.com/namaasociety/"
                />
                <SocialIcon
                  icon="fa-linkedin-in"
                  href="https://www.linkedin.com/company/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D9%86%D9%85%D8%A7%D8%A1/about/"
                />
                <SocialIcon
                  icon="fa-youtube"
                  href="https://www.youtube.com/@namaasociety"
                />
              </div>
            </div>

            <div className="w-full md:w-auto flex-grow grid grid-cols-1 sm:grid-cols-3 gap-8">
              <FooterLinkColumn
                title={footerLinks.about.title}
                links={footerLinks.about.links}
              />
              <FooterLinkColumn
                title={footerLinks.activities.title}
                links={footerLinks.activities.links}
              />
              <FooterLinkColumn
                title={footerLinks.resources.title}
                links={footerLinks.resources.links}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
