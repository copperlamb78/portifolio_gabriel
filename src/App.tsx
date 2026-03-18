import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { SeoSection } from "./components/seo-section";
import { useTheme } from "./ThemeContext";
import { Footer } from "./components/footer";

export function App() {
  const { theme } = useTheme();

  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
      appearance={theme}
    >
      {/* Adicionando estilo global para rolagem suave */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body, .radix-themes {
          transition: background-color 0.4s ease, color 0.4s ease;
        }
      `}</style>

      <Navbar />

      {/* O pt="9" (padding-top) cria um espaço para a Navbar fixa */}
      <Box pt="9">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <SeoSection />
        <Contact />
        <Footer />
      </Box>
    </Theme>
  );
}
