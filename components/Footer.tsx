import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16 px-6 md:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo.svg"
                alt="9th Pay"
                width={120}
                height={40}
                className="w-32 h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering the Next Billion through Africa's most reliable
              financial ecosystem.
            </p>
            <p className="text-gray-500 text-xs">RC No. 9302102</p>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Smart POS Terminal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Agency Banking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Merchant Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Socials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@9thpay.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  hello@9thpay.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.9thpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  www.9thpay.com
                </a>
              </li>
              <li className="text-gray-400 text-sm leading-relaxed">
                Suite 301c, Bahamas Plaza
                <br />
                1080 Joseph Gomwalk St,
                <br />
                Abuja
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2026 9th Pay Ltd. — A subsidiary of 9TH Tech Ltd.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            RC NO. 9302102 · PCI-DSS Level 1 · NDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
