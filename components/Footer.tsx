import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 rounded-md overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Voltura Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-zinc-200 tracking-tight">
                  Voltura
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              Premium digital infrastructure firm specializing in strategic domain
              portfolio management for global enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium text-zinc-300 tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/#about"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#approach"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-medium text-zinc-300 tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:acquisitions@volturatx.com"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  acquisitions@volturatx.com
                </a>
              </li>
              <li className="text-zinc-600">
                Based in Texas, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {currentYear} Voltura. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
