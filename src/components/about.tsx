import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";

import MinhaImg from "../assets/minhaImg.jpeg";

// --- DADOS DA SEÇÃO ---
const differentiators = [
  "Sites otimizados para atrair e converter mais clientes",
  "Design moderno que transmite confiança e profissionalismo",
  "Comunicação clara e objetiva, sem enrolação",
  "Soluções focadas no crescimento do seu negócio",
];

// --- COMPONENTES INTERNOS ---

// Placeholder para a sua foto.
const DevPhotoPlaceholder = () => (
  <Box
    style={{
      position: "relative",
      width: "100%",
      paddingBottom: "125%", // Proporção de imagem vertical (altura 125% da largura)
      background:
        "linear-gradient(135deg, var(--gray-a4) 0%, var(--gray-a3) 100%)",
      borderRadius: "var(--radius-5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <Avatar fallback="AG" size="9" radius="full" color="mint" highContrast />
    <img
      src={MinhaImg}
      alt="Foto de Antonio Gabriel, Desenvolvedor Web em Feira de Santana"
      loading="lazy"
      decoding="async"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>
);

// --- COMPONENTE PRINCIPAL ---
export function About() {
  return (
    <Box
      id="sobre"
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{ scrollMarginTop: "100px" }} // Garante que o título não fique atrás da navbar ao navegar
    >
      {/* Estilos para animação e efeitos visuais */}
      <style>{`
        .dev-photo-wrapper {
            position: relative;
            animation: fadeIn 0.8s 0.2s ease-out forwards;
            opacity: 0;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Grid
        columns={{ initial: "1", md: "2" }}
        gap={{ initial: "7", md: "9" }}
        align="center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Coluna Esquerda: Imagem */}
        <Box
          className="dev-photo-wrapper"
          style={{ maxWidth: "380px", margin: "0 auto", width: "100%" }}
        >
          {/* Efeito de Glow (brilho) atrás da imagem */}
          <Box
            style={{
              position: "absolute",
              inset: "0",
              background:
                "radial-gradient(circle at center, var(--mint-a5), transparent 60%)",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />
          <Box
            style={{
              position: "relative",
              zIndex: 1,
              boxShadow: "0 10px 30px -10px var(--black-a11)",
              borderRadius: "var(--radius-5)", // Bordas bem arredondadas
            }}
          >
            <DevPhotoPlaceholder />
          </Box>
        </Box>

        {/* Coluna Direita: Conteúdo Textual */}
        <Flex direction="column" gap="4">
          <Box>
            <Text size="2" weight="bold" color="mint" mb="2" as="p">
              SOBRE MIM
            </Text>
            <Heading
              as="h2"
              size={{ initial: "8", md: "9" }}
              style={{ letterSpacing: "-0.02em" }}
            >
              Desenvolvedor web focado no seu crescimento
            </Heading>
          </Box>

          <Text
            as="p"
            size={{ initial: "4", md: "4" }}
            color="gray"
            style={{ lineHeight: "1.7" }}
          >
            Olá! Sou Antonio Gabriel, desenvolvedor web de Feira de Santana,
            Bahia, com atendimento online para projetos em todo o Brasil. Ajudo
            empresas e profissionais liberais a conquistarem uma presença
            digital forte para escalar seus negócios. Minha missão é entregar
            soluções de alta performance — sites rápidos, modernos e otimizados
            — que funcionem como uma verdadeira máquina de vendas para sua
            empresa.
          </Text>

          {/* Diferenciais */}
          <Flex direction="column" gap="3" my="3">
            {differentiators.map((text, i) => (
              <Flex key={i} gap="3" align="center">
                <Text color="mint" weight="bold" size="4">
                  ✓
                </Text>
                <Text size="2" color="gray">
                  {text}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Button
            asChild
            size="4"
            mt="4"
            style={{ cursor: "pointer", width: "fit-content" }}
            color="mint"
            variant="soft"
          >
            <a
              href="https://wa.me/5575992197406?text=Ol%C3%A1,%20gostaria%20de%20falar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site."
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Falar no WhatsApp
            </a>
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
}
