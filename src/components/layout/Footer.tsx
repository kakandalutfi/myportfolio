import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-xl font-bold font-heading text-gradient">
            PORTFOLIO.
          </Link>
          <p className="text-sm text-foreground/60 mt-2">
            UI Creator & Frontend Developer.
          </p>
        </div>
        
        <div className="flex space-x-8 text-sm text-foreground/60">
          <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#products" className="hover:text-primary transition-colors">Products</Link>
          <Link href="#profile" className="hover:text-primary transition-colors">Profile</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="mt-6 md:mt-0 text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
