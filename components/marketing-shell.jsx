import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";

export default function MarketingShell({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">{children}</div>
      <SiteFooter />
    </div>
  );
}
