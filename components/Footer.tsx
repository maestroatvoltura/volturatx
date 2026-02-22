import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-xl">V</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">
                  Voltura
                </span>
                <span className="block text-xs text-slate-400 tracking-widest uppercase">
                  Digital Assets
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Boutique digital real estate firm specializing in high-value,
              geo-targeted domain acquisitions in Texas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  The Firm
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Austin, Texas, USA</li>
              <li>
                <a
                  href="mailto:invest@voltura.com"
                  className="hover:text-white transition-colors"
                >
                  invest@voltura.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15125670000"
                  className="hover:text-white transition-colors"
                >
                  +1 (512) 567-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Voltura Digital Assets, LLC. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms of Transfer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
