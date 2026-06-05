import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import PracticeNow from "./components/PracticeNow/PracticeNow";
import { OurPurpose } from "./components/OurPurpose/OurPurpose";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PracticeNow />
      <OurPurpose />
    </>
  );
}

export default App;