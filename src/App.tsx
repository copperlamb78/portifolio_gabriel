import "@radix-ui/themes/styles.css";
import { Box } from "@radix-ui/themes";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

export function App() {
  return (
    <div>
      <Navbar />

      {/* O pt="9" (padding-top) cria um espaço para a Navbar fixa */}
      <Box pt="9">
        <Services />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </Box>
    </div>
  );
}
