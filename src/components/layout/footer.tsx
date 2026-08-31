import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./logo";
import { FooterColumn, FooterLink } from "../shared/footer-components";
import CtaButton from "../shared/cta-button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Properties", href: "/properties" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
];

export function Footer() {
  return (
    <footer className="bg-[#FCFBF8] text-[#1E1E1E]">
      <div className="mx-auto max-w-300 px-6">
        <div className="border-t border-[#E4DED3] py-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10">
            <div className="max-w-85">
              <Logo colored />
              <p className="mt-6 max-w-75 text-[13px] leading-[1.9] text-[#6B6B6B]">
                Thoughtfully selected properties for refined living, meaningful
                investment, and a place you can truly call home.
              </p>
              <CtaButton
                label="Explore Properties"
                href="/properties"
              />
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
              <p className="max-w-45 text-[13px] leading-6 text-[#6B6B6B]">
                Dubai,
                <br />
                United Arab Emirates
              </p>
            </FooterColumn>

            <FooterColumn title="Follow">
              <div className="flex flex-row items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-[#E4DED3] text-[#555] transition-all duration-300 hover:border-[#0F6B65] hover:bg-[#0F6B65] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F6B65]"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </Link>
                  );
                })}
              </div>
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
