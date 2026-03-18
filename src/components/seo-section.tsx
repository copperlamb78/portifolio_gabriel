import { Box, Flex, Heading, Text, Button } from "@radix-ui/themes";
import { FaWhatsapp } from "react-icons/fa";

export function SeoSection() {
  return (
    <Box
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderTop: "1px solid var(--gray-a3)",
        borderBottom: "1px solid var(--gray-a3)",
      }}
    >
      <Flex
        direction="column"
        align="center"
        gap="5"
        style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
      >
        <Heading as="h2" size={{ initial: "6", md: "8" }} weight="bold">
          Criar Site em Feira de Santana: Como aumentar seus clientes com um
          site profissional
        </Heading>

        <Text
          size="4"
          color="gray"
          style={{ lineHeight: "1.7", textAlign: "left", width: "100%" }}
        >
          Ter uma presença online forte deixou de ser apenas um diferencial. A{" "}
          <strong>criação de sites em Feira de Santana</strong> permite que
          empresas e profissionais locais sejam encontrados por novos clientes
          24 horas por dia, 7 dias por semana.
        </Text>

        <Text
          size="4"
          color="gray"
          style={{ lineHeight: "1.7", textAlign: "left", width: "100%" }}
        >
          Ao investir em um <strong>site profissional</strong>, você transmite
          mais confiança, destaca seus serviços no Google e facilita o contato
          de quem já está buscando ativamente pelo que você oferece. Como
          desenvolvedor web na Bahia, desenvolvo soluções com design fluido
          (responsivo para celular), rápido e focado 100% em conversão.
        </Text>

        <Button
          asChild
          size="4"
          color="mint"
          mt="2"
          variant="soft"
          style={{ cursor: "pointer" }}
        >
          {/* Link interno otimizado apontando para a seção de contato */}
          <a href="#contato">
            <FaWhatsapp style={{ marginRight: "8px" }} />
            Solicite um site profissional em Feira de Santana
          </a>
        </Button>
      </Flex>
    </Box>
  );
}
