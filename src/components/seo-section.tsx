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
          Presença digital forte: Como aumentar seus clientes com um site
          profissional
        </Heading>

        <Text
          size="4"
          color="gray"
          style={{ lineHeight: "1.7", textAlign: "left", width: "100%" }}
        >
          Ter um site hoje em dia deixou de ser apenas um diferencial. A criação
          de um <strong>site profissional</strong> permite que sua empresa e
          seus serviços sejam encontrados por novos clientes 24 horas por dia, 7
          dias por semana, em qualquer lugar do país.
        </Text>

        <Text
          size="4"
          color="gray"
          style={{ lineHeight: "1.7", textAlign: "left", width: "100%" }}
        >
          Ofereço atendimento online completo para empresas de{" "}
          <strong>todo o Brasil</strong>. Desenvolvo soluções com design fluido
          (responsivo para celular), ultrarrápidas e com estrutura 100% focada
          em captar leads e alavancar vendas.
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
            Solicitar orçamento
          </a>
        </Button>
      </Flex>
    </Box>
  );
}
