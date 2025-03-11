
import { useEffect } from "react";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Me</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
