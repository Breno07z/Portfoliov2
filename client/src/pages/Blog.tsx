import Navigation from "@/components/Navigation";
import BlogSection from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
