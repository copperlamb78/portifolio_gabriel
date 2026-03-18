import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  Button,
  Separator,
} from "@radix-ui/themes";
import {
  FaRocket,
  FaBolt,
  FaMobileAlt,
  FaSearch,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Landing Page Profissional",
    description:
      "Página criada para gerar clientes todos os dias para o seu negócio.",
    target: "Negócios que querem vender ou captar leads",
    benefits: [
      "Carregamento ultra rápido",
      "Foco total em conversão",
      "Design responsivo e moderno",
    ],
    price: "A partir de R$ 1000",
    highlight: false,
  },
  {
    title: "Site Institucional Completo",
    description:
      "Um site completo para sua empresa transmitir confiança e ser encontrada no Google.",
    target: "Empresas, profissionais liberais e negócios locais",
    benefits: [
      "Múltiplas páginas estruturadas",
      "Design profissional e exclusivo",
      "Otimização para o Google (SEO local)",
    ],
    price: "A partir de R$ 3000",
    highlight: true, // Este card receberá um destaque visual
  },
  {
    title: "Sistema Web Sob Medida",
    description:
      "Soluções personalizadas para automatizar processos e aumentar a produtividade da sua empresa.",
    target: "Empresas que precisam de soluções tecnológicas específicas",
    benefits: [
      "Plataformas exclusivas e seguras",
      "Integração com outras ferramentas",
      "Automação de tarefas manuais",
    ],
    price: "Sob consulta",
    highlight: false,
  },
];

const resultsData = [
  {
    title: "Mais clientes entrando em contato",
    description:
      "Landing pages otimizadas para conversão e geração de leads de forma contínua.",
    icon: FaRocket,
  },
  {
    title: "Site rápido e otimizado",
    description:
      "Carregamento ultra-rápido para reter visitantes e melhorar sua pontuação no Google.",
    icon: FaBolt,
  },
  {
    title: "Experiência perfeita no celular",
    description:
      "Layout totalmente responsivo que se adapta e funciona em qualquer dispositivo.",
    icon: FaMobileAlt,
  },
  {
    title: "Melhor presença no Google",
    description:
      "Estrutura técnica e semântica de SEO implementada do zero pensando em buscas orgânicas.",
    icon: FaSearch,
  },
  {
    title: "Sistema pensado no seu negócio",
    description:
      "Ferramentas exclusivas desenhadas para resolver os problemas reais da sua empresa.",
    icon: FaBrain,
  },
  {
    title: "Pronto para crescer",
    description:
      "Sistemas desenvolvidos de forma escalável para acompanhar o crescimento das suas vendas.",
    icon: FaCode,
  },
];

export function Services() {
  return (
    <Box
      id="servicos"
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{ scrollMarginTop: "80px" }}
    >
      <style>{`
        .result-card {
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          background-color: var(--gray-a2) !important;
          border: 1px solid var(--gray-a3) !important;
          border-radius: var(--radius-4) !important;
        }
        .result-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: var(--mint-7) !important;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px var(--mint-a3) !important;
        }
      `}</style>

      <Flex
        direction="column"
        align="center"
        mb={{ initial: "6", md: "8" }}
        style={{ textAlign: "center" }}
      >
        <Heading
          as="h2"
          size={{ initial: "7", md: "8" }}
          weight="bold"
          mb="3"
          style={{ letterSpacing: "-0.02em" }}
        >
          Criação de sites profissionais na Bahia
        </Heading>
        <Text
          size={{ initial: "3", md: "4" }}
          color="gray"
          style={{ maxWidth: "600px" }}
        >
          Ofereço soluções completas focadas em aumentar suas vendas, captar
          leads e destacar sua marca na internet.
        </Text>
      </Flex>

      <Grid
        columns={{ initial: "1", sm: "2", md: "3" }}
        gap="5"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {servicesData.map((service, index) => (
          <Card
            key={index}
            size="4"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // Faz com que todos os cards tenham a mesma altura
              position: "relative",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: service.highlight
                ? "0 0 0 2px var(--mint-9), var(--shadow-4)" // Destaque para o card do meio
                : "var(--shadow-3)",
              backgroundColor: service.highlight
                ? "var(--mint-a2)"
                : "var(--gray-a2)",
              borderRadius: "var(--radius-4)",
            }}
          >
            <Flex direction="column" style={{ flex: 1 }}>
              <Heading as="h3" size="5" mb="2">
                {service.title}
              </Heading>
              <Text size="2" color="gray" mb="4" style={{ lineHeight: "1.5" }}>
                {service.description}
              </Text>

              <Box mb="4">
                <Text size="1" weight="bold" color="mint" mb="1">
                  PARA QUEM É:{" "}
                </Text>
                <Text size="2" color="gray">
                  {service.target}
                </Text>
              </Box>

              <Separator size="4" mb="4" />

              <Flex direction="column" gap="3" mb="6">
                {service.benefits.map((benefit, i) => (
                  <Flex gap="2" align="start" key={i}>
                    <Text color="mint" weight="bold">
                      ✓
                    </Text>
                    <Text size="2">{benefit}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Box mt="auto">
              <Text size="4" weight="bold" mb="4">
                {service.price}
              </Text>
              <Button
                asChild
                size="3"
                variant={service.highlight ? "solid" : "soft"}
                color={service.highlight ? "mint" : "gray"}
                style={{
                  width: "100%",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <a
                  href="https://wa.me/5575992197406?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </Box>
          </Card>
        ))}
      </Grid>

      {/* --- SEÇÃO DE RESULTADOS --- */}
      <Box mt={{ initial: "8", md: "9" }} pt={{ initial: "4", md: "6" }}>
        <Flex
          direction="column"
          align="center"
          mb="7"
          style={{ textAlign: "center" }}
        >
          <Heading
            as="h2"
            size={{ initial: "6", md: "7" }}
            weight="bold"
            mb="2"
          >
            Resultados que você pode esperar
          </Heading>
          <Text
            size={{ initial: "3", md: "4" }}
            color="gray"
            style={{ maxWidth: "600px" }}
          >
            Projetos desenvolvidos com foco em performance, conversão e
            crescimento do seu negócio.
          </Text>
        </Flex>

        <Grid
          columns={{ initial: "1", sm: "2", md: "3" }}
          gap="5"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {resultsData.map((result, index) => (
            <Card key={index} size="3" className="result-card">
              <Flex direction="column" gap="3">
                <Box style={{ color: "var(--mint-9)", marginBottom: "4px" }}>
                  <result.icon size={28} />
                </Box>
                <Heading as="h3" size="4" weight="bold">
                  {result.title}
                </Heading>
                <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                  {result.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
