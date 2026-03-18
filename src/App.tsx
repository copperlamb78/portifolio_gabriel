import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Portfolio } from "./components/portfolio";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { useTheme } from "./ThemeContext";

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
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </Box>
    </Theme>
  );
}
