import Hero from "../components/Hero";
import About from "../components/About";
import ProductCatalog from "../components/ProductCatalog";
import ContactForm from "../components/ContactForm";

export default function Home(){
    return (
        <>
              <Hero/>
              <About/>
             <ProductCatalog/>
              <ContactForm/>

        </>
    );
}