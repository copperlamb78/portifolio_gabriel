import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  Separator,
} from "@radix-ui/themes";
import {
  FaChartLine,
  FaMobileAlt,
  FaGoogle,
  FaLock,
  FaTachometerAlt,
  FaHandshake,
} from "react-icons/fa";

const benefitsData = [
  {
    category: "Vendas e Conversão",
    icon: FaChartLine,
    description:
      "Sites estruturados estrategicamente para guiar o visitante até o contato ou a compra, funcionando como um vendedor 24h por dia.",
  },
  {
    category: "Velocidade e Performance",
    icon: FaTachometerAlt,
    description:
      "Páginas com carregamento ultra-rápido para garantir que seu cliente não desista de acessar e melhorar seu SEO no Google.",
  },
  {
    category: "Design Responsivo (Mobile)",
    icon: FaMobileAlt,
    description:
      "A maioria dos seus clientes acessa pelo celular. Seu site será perfeitamente adaptado para oferecer a melhor experiência em qualquer tela.",
  },
  {
    category: "Otimização para o Google (SEO)",
    icon: FaGoogle,
    description:
      "Aplicação das melhores práticas para que sua empresa seja encontrada facilmente quando clientes buscarem por seus serviços na sua região.",
  },
  {
    category: "Segurança e Estabilidade",
    icon: FaLock,
    description:
      "Sistemas desenvolvidos com os mais altos padrões de segurança, garantindo a proteção dos dados da sua empresa e dos seus clientes.",
  },
  {
    category: "Parceria e Suporte",
    icon: FaHandshake,
    description:
      "Comunicação direta e sem termos técnicos complicados. Você terá todo o suporte necessário antes, durante e após a entrega do projeto.",
  },
];

export function Skills() {
  return (
    <Box
      id="beneficios"
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* CSS interno para animações de hover */}
      <style>{`
        .skill-group-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border: 1px solid var(--gray-a3) !important;
          background-color: var(--gray-a2) !important;
          border-radius: var(--radius-4) !important; /* Bordas arredondadas (2xl) */
        }
        .skill-group-card:hover {
          transform: translateY(-4px);
          border-color: var(--mint-7) !important;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px var(--mint-a3) !important;
        }
        .skill-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--gray-11);
          cursor: default;
        }
        .skill-item:hover {
          transform: scale(1.15);
          /* Glow suave com a cor primária de destaque do tema (mint) */
          filter: drop-shadow(0 0 8px var(--mint-a6));
        }
        /* Ajuste de cor para que o ícone pegue sua cor original no hover caso a classe específica seja adicionada */
        .skill-item:hover .icon-svg {
          color: inherit; 
        }
      `}</style>

      {/* Cabeçalho da Seção */}
      <Flex
        direction="column"
        align="center"
        mb={{ initial: "6", md: "8" }}
        style={{ textAlign: "center" }}
      >
        <Heading
          size={{ initial: "7", md: "8" }}
          weight="bold"
          mb="3"
          style={{ letterSpacing: "-0.02em" }}
        >
          O que sua empresa ganha
        </Heading>
        <Text
          size={{ initial: "3", md: "4" }}
          color="gray"
          style={{ maxWidth: "600px" }}
        >
          Benefícios reais de ter um site profissional focado em conversão e
          crescimento.
        </Text>
      </Flex>

      {/* Grid Responsivo de Categorias */}
      <Grid
        columns={{ initial: "1", sm: "2", lg: "3" }}
        gap="5"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {benefitsData.map((benefit, index) => (
          <Card key={index} size="3" className="skill-group-card">
            <Flex direction="column" gap="4">
              <Flex align="center" gap="3">
                <Box style={{ color: "var(--mint-9)" }}>
                  <benefit.icon size={28} />
                </Box>
                <Heading size="4" color="mint" weight="bold">
                  {benefit.category}
                </Heading>
              </Flex>

              <Separator
                size="4"
                style={{ backgroundColor: "var(--gray-a4)" }}
              />

              <Text size="2" color="gray" style={{ lineHeight: 1.6 }}>
                {benefit.description}
              </Text>
            </Flex>
          </Card>
        ))}
      </Grid>

      {/* Frase Extra de Diferencial */}
      <Flex justify="center" mt={{ initial: "7", md: "9" }}>
        <Box
          px="5"
          py="3"
          style={{
            backgroundColor: "var(--mint-a2)",
            border: "1px solid var(--mint-a4)",
            borderRadius: "var(--radius-full)",
          }}
        >
          <Flex gap="2" align="center">
            <Text color="mint" weight="bold" size="3">
              ✨
            </Text>
            <Text size="2" color="gray" weight="medium">
              Foco total em trazer mais resultados para o seu negócio através da
              internet.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
