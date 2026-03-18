import { Box, Flex, Grid, Text, Separator } from "@radix-ui/themes";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      role="contentinfo"
      py={{ initial: "6", md: "8" }}
      px="4"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderTop: "1px solid var(--gray-a3)",
      }}
    >
      <style>{`
        .footer-email {
          color: var(--gray-11);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-email:hover {
          color: var(--mint-11);
        }
      `}</style>

      <Flex
        direction="column"
        gap={{ initial: "6", md: "7" }}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <Grid columns={{ initial: "1", md: "2" }} gap="6">
          {/* Lado Esquerdo: Identidade e Descrição */}
          <Flex direction="column" gap="2">
            <Text weight="bold" size="5" style={{ letterSpacing: "-0.02em" }}>
              Antonio Gabriel
            </Text>
            <Text
              size="2"
              color="gray"
              style={{ lineHeight: "1.6", maxWidth: "420px" }}
            >
              Desenvolvedor de sites e sistemas sob medida, focado em criar
              soluções modernas, rápidas e orientadas a resultado.
            </Text>
          </Flex>

          {/* Lado Direito: Contato e Tecnologias */}
          <Flex
            direction="column"
            gap="1"
            align={{ initial: "start", md: "end" }}
          >
            <a
              href="mailto:nascimentogabriel.2004@gmail.com"
              className="footer-email"
            >
              <Text size="3" weight="medium">
                nascimentogabriel.2004@gmail.com
              </Text>
            </a>
            <Box
              mt={{ initial: "3", md: "4" }}
              style={{ textAlign: "inherit" }}
            >
              <Text as="div" size="1" color="gray" mb="1">
                Tecnologias utilizadas neste site:
              </Text>
              <Text as="div" size="1" color="gray" weight="medium">
                React, TypeScript, Tailwind CSS, Radix UI e Vite
              </Text>
            </Box>
          </Flex>
        </Grid>

        {/* Linha Final: Direitos Autorais */}
        <Flex direction="column" gap="4">
          <Separator size="4" style={{ backgroundColor: "var(--gray-a4)" }} />
          <Flex
            direction={{ initial: "column", md: "row" }}
            justify="between"
            align={{ initial: "start", md: "center" }}
            gap="3"
          >
            <Text size="1" color="gray">
              &copy; {currentYear} Antonio Gabriel. Todos os direitos
              reservados.
            </Text>
            <Text size="1" color="gray">
              Desenvolvido por Antonio Gabriel
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
