import React from "react";
import Link from "next/link";

const FooterBar = () => {
  return (
    <footer className="w-full border-t mt-20 py-8 text-sm text-center text-muted-foreground">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} PivotLink. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
