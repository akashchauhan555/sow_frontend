import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { SITE } from "@/constants/site";
import { NAV_LINKS, MEGA_MENU } from "@/constants/nav";
import logo from "@assets/images/logo.jpeg";

// Site-wide footer with sitemap, contact info and social links.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Story Of Walls" className="h-12 w-auto rounded mb-4 bg-white p-1" />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {SITE.tagline}. Crafting premium homes, interiors and commercial spaces since {SITE.foundedYear}.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-colors"
                aria-label="Social link"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {NAV_LINKS.filter((l) => l.label !== "More").map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            {MEGA_MENU[0].items.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <FaLocationDot className="text-primary mt-1 shrink-0" /> {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-primary" /> {SITE.phone}
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> {SITE.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
