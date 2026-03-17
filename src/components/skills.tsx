import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  Tooltip,
  Separator,
} from "@radix-ui/themes";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiRadixui,
  SiStyledcomponents,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJsonwebtokens,
  SiPm2,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiSelenium,
  SiKotlin,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import {
  FaRobot,
  FaDatabase,
  FaCss3Alt,
  FaJava,
  FaVial,
  FaClock,
  FaSpider,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
      { name: "Radix UI", icon: SiRadixui, color: "#161618" },
      { name: "Styled Comp.", icon: SiStyledcomponents, color: "#DB7093" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#FF0000" },
      { name: "PM2", icon: SiPm2, color: "#2B037A" },
      { name: "Cron Jobs", icon: FaClock, color: "#A0AEC0" },
    ],
  },
  {
    category: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: FaDatabase, color: "#F29111" },
    ],
  },
  {
    category: "Automação & Scraping",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
      { name: "Playwright", icon: FaVial, color: "#2EAD33" },
      { name: "Web Scraping", icon: FaSpider, color: "#A0AEC0" },
      { name: "Automação", icon: FaRobot, color: "#A0AEC0" },
    ],
  },
  {
    category: "Outras Linguagens",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    category: "Ferramentas & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export function Skills() {
  return (
    <Box
      id="skills"
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
          Tecnologias que utilizo
        </Heading>
        <Text
          size={{ initial: "3", md: "4" }}
          color="gray"
          style={{ maxWidth: "600px" }}
        >
          Ferramentas e tecnologias que utilizo para construir soluções rápidas,
          escaláveis e de alta performance.
        </Text>
      </Flex>

      {/* Grid Responsivo de Categorias */}
      <Grid
        columns={{ initial: "1", sm: "2", lg: "3" }}
        gap="5"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {skillsData.map((category, index) => (
          <Card key={index} size="3" className="skill-group-card">
            <Heading size="4" mb="4" color="mint" weight="medium">
              {category.category}
            </Heading>

            <Separator
              size="4"
              mb="5"
              style={{ backgroundColor: "var(--gray-a4)" }}
            />

            {/* Grid de Ícones de Habilidades */}
            <Grid columns="3" gap="4" justify="center">
              {category.skills.map((skill, i) => (
                <Tooltip
                  key={i}
                  content={skill.name}
                  side="bottom"
                  delayDuration={100}
                >
                  <Flex
                    direction="column"
                    align="center"
                    gap="2"
                    className="skill-item"
                    style={{ color: "var(--gray-11)" }}
                    /* Usando onMouseEnter e onMouseLeave para ativar as cores originais dinamicamente é outra opção, mas preferimos usar apenas o Mint glow por limpeza visual */
                  >
                    <skill.icon size={36} className="icon-svg" />
                    <Text
                      size="1"
                      weight="medium"
                      style={{
                        textAlign: "center",
                        lineHeight: 1.2,
                        opacity: 0.8,
                      }}
                    >
                      {skill.name}
                    </Text>
                  </Flex>
                </Tooltip>
              ))}
            </Grid>
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
              Estou sempre aprendendo novas tecnologias para entregar as
              melhores soluções possíveis.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
