import { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  TabNav,
  DropdownMenu,
  IconButton,
} from "@radix-ui/themes";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

export function Navbar() {
  // Estado para armazenar o link ativo (ex: #servicos)
  const [pathname, setPathname] = useState(window.location.hash || "#inicio");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleHashChange = () =>
      setPathname(window.location.hash || "#inicio");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Efeito para atualizar a posição da barrinha animada dinamicamente
  useEffect(() => {
    const updateIndicator = () => {
      const container = navRef.current;
      const activeTab = container?.querySelector(".active-tab") as HTMLElement;

      if (activeTab && container) {
        const activeRect = activeTab.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Só atualiza a posição se a aba estiver sendo exibida (no desktop)
        if (activeRect.width > 0) {
          setIndicatorStyle({
            left: activeRect.left - containerRect.left,
            top: activeRect.top - containerRect.top,
            width: activeRect.width,
            height: activeRect.height,
            opacity: 1,
          });
        } else {
          setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        }
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator); // Recalcula se o usuário redimensionar a tela
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      p="4"
      style={{ zIndex: 50 }}
    >
      {/* Removemos a barrinha de ativo nativa do Radix UI para usarmos a nossa customizada */}
      <style>{`
        .rt-TabNavLink::after {
          display: none !important;
        }
        .rt-TabNavRoot {
          box-shadow: none !important;
        }
        .rt-TabNavLink {
          z-index: 2;
          transition: color 0.3s ease;
        }
        .rt-TabNavLink:hover {
          background-color: transparent !important;
        }
        .theme-toggle-icon {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .theme-toggle-icon:hover {
          transform: rotate(30deg) scale(1.1);
        }
      `}</style>

      <Flex
        align="center"
        px="4"
        py="2"
        style={{
          width: "calc(100% - 2rem)",
          maxWidth: "900px",
          margin: "0 auto",
          background: "var(--gray-a2)", // Fundo translúcido
          backdropFilter: "blur(16px) saturate(200%)", // Efeito Glassmorphism mais suave
          WebkitBackdropFilter: "blur(16px) saturate(200%)",
          border: "1px solid var(--gray-a3)", // Borda super sutil
          borderRadius: "var(--radius-full)", // Acompanha o radius="full" do Theme
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)", // Sombra mais difusa
        }}
      >
        <Box style={{ flex: 1 }}>
          <a
            href="#inicio"
            style={{
              textDecoration: "none",
              color: "inherit",
              outline: "none",
            }}
            aria-label="Ir para o início"
          >
            <Text
              as="span"
              weight="bold"
              size="4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Antonio{" "}
              <Text as="span" color="mint">
                Gabriel
              </Text>
            </Text>
          </a>
        </Box>

        <Box
          display={{ initial: "none", md: "block" }}
          position="relative"
          ref={navRef}
          style={{ flexShrink: 0 }}
        >
          <TabNav.Root>
            <TabNav.Link
              asChild
              active={pathname === "#sobre"}
              className={pathname === "#sobre" ? "active-tab" : ""}
            >
              <a href="#sobre">Sobre mim</a>
            </TabNav.Link>
            <TabNav.Link
              asChild
              active={pathname === "#servicos"}
              className={pathname === "#servicos" ? "active-tab" : ""}
            >
              <a href="#servicos">Serviços</a>
            </TabNav.Link>
            <TabNav.Link
              asChild
              active={pathname === "#portfolio"}
              className={pathname === "#portfolio" ? "active-tab" : ""}
            >
              <a href="#portfolio">Portfólio</a>
            </TabNav.Link>
            <TabNav.Link
              asChild
              active={pathname === "#skills"}
              className={pathname === "#skills" ? "active-tab" : ""}
            >
              <a href="#skills">Skills</a>
            </TabNav.Link>
          </TabNav.Root>

          {/* Barrinha animada flutuante */}
          <Box
            style={{
              position: "absolute",
              top: indicatorStyle.top,
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
              opacity: indicatorStyle.opacity,
              backgroundColor: "var(--mint-a3)", // Fundo em forma de pílula translúcido
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // Transição mais elástica e natural
              borderRadius: "var(--radius-full)",
              zIndex: 0,
            }}
          />
        </Box>

        <Flex justify="end" align="center" gap="3" style={{ flex: 1 }}>
          {/* Botão de Alternância de Tema */}
          <IconButton
            variant="ghost"
            color="gray"
            radius="full"
            onClick={toggleTheme}
            style={{
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            aria-label={
              theme === "dark"
                ? "Mudar para modo claro"
                : "Mudar para modo escuro"
            }
          >
            {theme === "dark" ? (
              <FaSun size={20} className="theme-toggle-icon" />
            ) : (
              <FaMoon size={20} className="theme-toggle-icon" />
            )}
          </IconButton>

          <Button
            asChild
            variant="soft"
            color="mint"
            radius="full"
            style={{ cursor: "pointer" }}
          >
            <a href="#contato">Contato</a>
          </Button>

          {/* Menu Mobile Hambúrguer */}
          <Box display={{ initial: "block", md: "none" }}>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <IconButton
                  variant="soft"
                  color="gray"
                  radius="full"
                  style={{ cursor: "pointer" }}
                >
                  <FaBars />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content variant="soft" color="gray">
                <DropdownMenu.Item asChild>
                  <a href="#servicos" style={{ cursor: "pointer" }}>
                    Serviços
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a href="#portfolio" style={{ cursor: "pointer" }}>
                    Portfólio
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a href="#sobre" style={{ cursor: "pointer" }}>
                    Sobre mim
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a href="#skills" style={{ cursor: "pointer" }}>
                    Skills
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
