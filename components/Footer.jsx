import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Image src="/trexmate-logo.png" alt="Trexmate" width={120} height={20} className="h-5 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Building digital excellence through innovation, strategy, and bold design.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Who We Are", path: "/who-we-are" },
              { label: "Services", path: "/services" },
              { label: "Our Work", path: "/our-work" },
              { label: "Awards", path: "/awards" },
              { label: "Newsroom", path: "/newsroom" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </h4>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>trexmate@gmail.com</p>
            <p>+92 3151065019</p>
            <p>Karachi</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Trexmate. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
