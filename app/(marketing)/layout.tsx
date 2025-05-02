import Footer from "@components/footer-bar";
import NavigationBar from "@components/navigation-bar";
import React from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div>
      <NavigationBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
