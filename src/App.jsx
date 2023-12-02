import { useState } from "react";
import Nav from "./components/Nav";
import {
  SpecialOffer,
  Subscribe,
  PopularProduct,
  Services,
  Footer,
  CustomerReview,
  Hero,
  SuperQuality,
} from "./sections";

export default function App() {
  return (
    <>
      <main className="relative ml-10">
        <Nav />
        <section className="xl:p-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="pl-5 pt-36">
          <PopularProduct />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />{" "}
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
