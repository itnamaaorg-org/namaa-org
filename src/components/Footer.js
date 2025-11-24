import React from 'react';
import Image from 'next/image';

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    aria-label={icon.replace('fa-', '')}
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
      title: 'عن نماء',
      links: [
        { label: 'من نحن', href: '/about' },
        { label: 'نادي نماء التطوعي', href: '/volunteer-club' },
        { label: 'تطوع معنا', href: '/volunteer' },
        { label: 'تواصل معنا', href: '/contact' },
      ],
    },
    activities: {
      title: 'نشاطاتنا',
      links: [
        { label: 'مشاريعنا', href: '/projects' },
        { label: 'برامجنا', href: '/programs' },
        { label: 'حاضنة المبادرات', href: '/initiatives-incubator' },
      ],
    },
    resources: {
      title: 'مصادر أخرى',
      links: [
        { label: 'أخبار الجمعية', href: '/news' },
        { label: 'نماء في الإعلام', href: '/media' },
      ],
    },
  };

  return (
    <div dir="rtl" className="font-sans bg-[#F8F9FA] min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="shadow-xl rounded-2xl overflow-hidden">
            <div
              className="bg-[#0A2337] text-white p-8 md:p-12 relative"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0d3a5f 0%, #0a2337 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBkPSJNIDQwIDAgQyA0MCAwLCAwIDQwLCAwIDQwIEwgNDAgNDAgWiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+CjxwYXRoIGQ9Ik0gNjAgMCBDIDYwIDAsIDEwMCA0MCwgMTAwIDQwIEwgNjAgNDAgWiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+CjxwYXRoIGQ9Ik0gNDAgMTAwIEMgNDAgMTAwLCAwIDYwLCAwIDYwIEwgNDAgNjAgWiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+CjxwYXRoIGQ9Ik0gNjAgMTAwIEMgNjAgMTAwLCAxMDAgNjAsIDEwMCA2MCBMIDYwIDYwIFoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIvPgo8L3N2Zz4=)',
                  backgroundRepeat: 'repeat',
                }}
              ></div>

              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
                  يسعدنا تواصلكم، تجدون بيانات الاتصال وأوقات العمل أدناه.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 text-right">
                  <div>
                    <h2 className="text-xl font-bold mb-4">زورونا</h2>
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-gray-300 mt-1.5 ml-3 flex-shrink-0"></i>
                      <p className="text-gray-300 leading-relaxed">
                        الزرقاء الجديدة - ش٣٦ - مجمع سامح - ط٢
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">أوقات العمل</h2>
                    <ul className="space-y-3 text-gray-300">
                      <li>الأحد - الخميس: 9:30 صباحاً - 4:00 مساءً</li>
                      <li>الجمعة: مغلق</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <i className="fas fa-phone-alt ml-3"></i>
                        <span>+966 12 345 6789</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-envelope ml-3"></i>
                        <span>username@email.ae</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.3680175832633!2d36.10104742369705!3d32.08633797396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b7002be089ffb%3A0x2c97b68de3b956a9!2z2KzZhdi52YrYqSDZhtmF2KfYoSDZhNmE2KrZhtmF2YrYqSDYp9mE2YXYrNiq2YXYudmK2Kk!5e0!3m2!1sar!2sjo!4v1762798192499!5m2!1sar!2sjo"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
              <p className="text-gray-300 mb-4">جمعية نماء</p>
              <div className="flex space-x-4 space-x-reverse">
                <SocialIcon icon="fa-facebook-f" />
                <SocialIcon icon="fa-twitter" />
                <SocialIcon icon="fa-instagram" />
                <SocialIcon icon="fa-linkedin-in" />
                <SocialIcon icon="fa-youtube" />
              </div>
            </div>

            <div className="w-full md:w-auto flex-grow grid grid-cols-1 sm:grid-cols-3 gap-8">
              <FooterLinkColumn title={footerLinks.about.title} links={footerLinks.about.links} />
              <FooterLinkColumn title={footerLinks.activities.title} links={footerLinks.activities.links} />
              <FooterLinkColumn title={footerLinks.resources.title} links={footerLinks.resources.links} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
