
import { useReducedMotion, motion } from "framer-motion";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import DeliveryCheck from "../components/DeliveryCheck";

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <title>Amrit Jal | Drinking Water & Water Jar Delivery</title>

      <meta
        name="description"
        content="Explore Amrit Jal drinking water bottles and 20L water jars. Contact us to enquire about orders and delivery availability in Barhog."
      />

      <meta name="robots" content="index, follow" />

      <main>
        <section aria-label="Amrit Jal introduction">
          <Hero />
        </section>

        <section aria-label="Why choose Amrit Jal">
          <WhyUs />
        </section>

        <section aria-label="Customer feedback">
          <Testimonials />
        </section>

        <section aria-label="How ordering works">
          <Process />
        </section>

        <section aria-label="Check delivery availability">
          <DeliveryCheck />
        </section>
      </main>
    </>
  );
}
