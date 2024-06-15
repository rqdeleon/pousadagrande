import Header from "@/components/sections/header";
import Services from "@/components/sections/aboutus";
import Features from "@/components/sections/features";
import Testimony from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Features />
      <Testimony />
      <Gallery />
      <Footer />
    </>
  );
}
