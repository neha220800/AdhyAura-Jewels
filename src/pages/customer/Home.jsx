import Hero from "../../components/layout/Hero";
import About from "../../components/layout/About";
import ProductCatalog from "../../components/customer/ProductCatalog";
import ContactForm from "../../components/layout/ContactForm";

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