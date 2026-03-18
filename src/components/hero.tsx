import { Box, Flex, Heading, Text, Button } from "@radix-ui/themes";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá, vim pelo seu site e gostaria de saber mais sobre a criação de sites em Feira de Santana.",
  );
  const whatsappUrl = `https://wa.me/5575992197406?text=${whatsappMessage}`;

  return (
    <Box
      id="inicio"
      pt={{ initial: "9", md: "9" }}
      pb={{ initial: "7", md: "9" }}
      px="4"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        direction="column"
        align="center"
        style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
        gap="5"
      >
        <Heading
          as="h1"
          size={{ initial: "8", md: "9" }}
          weight="bold"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Criação de Sites e Sistemas Sob Medida em{" "}
          <Text color="mint">Feira de Santana</Text>
        </Heading>

        <Text
          size={{ initial: "5", md: "6" }}
          color="gray"
          style={{ maxWidth: "700px", lineHeight: 1.5 }}
        >
          Ajudo empresas a conquistarem mais clientes com sites rápidos,
          modernos e focados em resultado.
        </Text>

        <Text size="4" color="gray" style={{ maxWidth: "650px" }}>
          Landing pages, sites institucionais e sistemas web personalizados para
          o seu negócio crescer na Bahia e em todo o Brasil.
        </Text>

        <Flex gap="4" mt="4" wrap="wrap" justify="center">
          <Button
            asChild
            size="4"
            color="mint"
            variant="solid"
            style={{
              cursor: "pointer",
              height: "56px",
              padding: "0 32px",
              fontSize: "1.1rem",
            }}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} style={{ marginRight: "8px" }} />
              Falar no WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="4"
            color="gray"
            variant="soft"
            style={{
              cursor: "pointer",
              height: "56px",
              padding: "0 32px",
              fontSize: "1.1rem",
            }}
          >
            <a href="#portfolio">
              Ver Projetos
              <FaArrowRight style={{ marginLeft: "8px" }} />
            </a>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
