import Link from "next/link";
import Logo from "./logo";
import { FooterColumn, FooterLink } from "../shared/footer-components";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Properties", href: "/properties" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#FCFBF8] text-[#1E1E1E]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="border-t border-[#E4DED3] py-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10">
            <div className="max-w-[340px]">
              <Logo colored />
              <p className="mt-6 max-w-[300px] text-[13px] leading-[1.9] text-[#6B6B6B]">
                Thoughtfully selected properties for refined living, meaningful
                investment, and a place you can truly call home.
              </p>
              <Link
                href="/properties"
                className="group mt-7 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[2px] text-[#0F6B65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F6B65]"
              >
                Explore Properties
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <FooterColumn title="Explore">
              {navigation.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              <FooterLink href="mailto:hello@serzameen.com">
                hello@serzameen.com
              </FooterLink>
              <FooterLink href="tel:+971000000000">
                +971 00 000 0000
              </FooterLink>
              <p className="max-w-[180px] text-[13px] leading-6 text-[#6B6B6B]">
                Dubai,
                <br />
                United Arab Emirates
              </p>
            </FooterColumn>

            <FooterColumn title="Follow">
              {socialLinks.map((social) => (
                <FooterLink key={social.label} href={social.href}>
                  {social.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E4DED3] py-6 text-[10px] uppercase tracking-[1.5px] text-[#999] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Serzameen Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#0F6B65]">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#0F6B65]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
