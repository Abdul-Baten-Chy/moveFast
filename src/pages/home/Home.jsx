import { Suspense } from "react";
import Baner from "./Baner";
import Brands from "./Brands";
import Feature from "./Feature";
import HowItWorks from "./HowItWorks";
import Marchent from "./Marchent";
import Ourservice from "./Ourservice";
import Reviews from "./Review/Reviews";

function Home() {
  return (
    <>
      <Baner />
      <HowItWorks />
      <Ourservice />
      <Brands />
      <Feature />
      <Marchent />
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
    </>
  );
}

export default Home;
