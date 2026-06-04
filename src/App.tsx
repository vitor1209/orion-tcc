import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import PracticeNow from "./components/PracticeNow/PracticeNow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PracticeNow />
    </>
  );
}

export default App;