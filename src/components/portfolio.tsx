import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  Button,
  Badge,
  Dialog,
  Link,
} from "@radix-ui/themes";

// Importando a imagem diretamente para garantir que o Vite resolva o caminho e a otimize.
// Mova o arquivo "HomeMeuCaixa.png" para dentro da pasta "src/assets/".
import HomeMeuCaixaImg from "../assets/HomeMeuCaixa.png";

const projectsData = [
  {
    title: "Plataforma SaaS de Gestão Financeira",
    description:
      "Um sistema em nuvem completo para pequenas empresas controlarem seu fluxo de caixa, emissão de notas e conciliação bancária em tempo real.",
    type: "SaaS em Produção",
    highlights: [
      "Backend robusto estruturado em Node.js",
      "Autenticação de alto nível via JWT",
      "Banco de dados não relacional (MongoDB)",
      "Integração completa com API",
    ],
    featured: true,
    image: HomeMeuCaixaImg,
  },
];

export function Portfolio() {
  return (
    <Box
      id="portfolio"
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* CSS interno para cuidar das animações avançadas de Hover */}
      <style>{`
        .portfolio-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border: 1px solid var(--gray-a3) !important;
          background-color: var(--gray-a2) !important;
        }
        .portfolio-card:hover {
          border-color: var(--mint-8) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 40px -10px var(--mint-a3) !important;
        }
        .portfolio-img-wrapper {
          overflow: hidden;
          border-radius: var(--radius-3);
          background: linear-gradient(135deg, var(--gray-a3) 0%, var(--gray-a2) 100%);
        }
        .portfolio-img {
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.08);
        }
        @media (min-width: 768px) {
          .featured-card {
            grid-column: span 2;
          }
        }
      `}</style>

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
          Projetos que geram resultados
        </Heading>
        <Text
          size={{ initial: "3", md: "4" }}
          color="gray"
          style={{ maxWidth: "600px" }}
        >
          Alguns dos trabalhos desenvolvidos com foco total em performance,
          excelência de design e conversão.
        </Text>
      </Flex>

      <Grid
        columns={
          projectsData.length === 1 ? "1" : { initial: "1", md: "2", lg: "3" }
        }
        gap="5"
        style={{
          maxWidth: projectsData.length === 1 ? "800px" : "1100px",
          margin: "0 auto",
        }}
      >
        {projectsData.map((project, index) => (
          <Card
            key={index}
            size="3"
            className={`portfolio-card ${
              project.featured && projectsData.length > 1 ? "featured-card" : ""
            }`}
            style={{ height: "100%" }}
          >
            <Flex direction="column" gap="5" style={{ height: "100%" }}>
              {/* Área da Imagem / Placeholder */}
              <Box
                className="portfolio-img-wrapper"
                style={{
                  width: "100%",
                  height: project.featured ? "360px" : "180px",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot da ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="portfolio-img"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Flex
                    className="portfolio-img"
                    align="center"
                    justify="center"
                  >
                    <Text color="gray" size="2" weight="medium">
                      {project.featured
                        ? "Screenshot do Sistema"
                        : "Preview do Projeto"}
                    </Text>
                  </Flex>
                )}
              </Box>

              {/* Área de Conteúdo */}
              <Flex direction="column" style={{ flex: 1 }}>
                <Box mb="3">
                  <Badge
                    color={project.featured ? "mint" : "gray"}
                    variant="soft"
                    radius="full"
                    mb="3"
                  >
                    {project.type}
                  </Badge>
                  <Heading size="5" mb="2">
                    {project.title}
                  </Heading>
                  <Text size="2" color="gray" style={{ lineHeight: "1.6" }}>
                    {project.description}
                  </Text>
                </Box>

                <Flex direction="column" gap="2" mb="5" mt="auto">
                  {project.highlights.map((highlight, i) => (
                    <Flex gap="2" align="center" key={i}>
                      <Box
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "var(--mint-9)",
                        }}
                      />
                      <Text size="2" color="gray">
                        {highlight}
                      </Text>
                    </Flex>
                  ))}
                </Flex>

                {project.featured && (
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button
                        variant="solid"
                        color="mint"
                        style={{ cursor: "pointer", width: "fit-content" }}
                      >
                        Ver detalhes
                      </Button>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="450px">
                      <Dialog.Title>{project.title}</Dialog.Title>
                      <Dialog.Description size="2" mb="4" color="gray">
                        Acesse a plataforma de demonstração em tempo real
                        utilizando as credenciais abaixo.
                      </Dialog.Description>

                      <Flex direction="column" gap="3" mb="5">
                        <Box>
                          <Text as="div" size="2" weight="bold" mb="1">
                            Link de acesso:
                          </Text>
                          <Link
                            href="https://meu-caixa-neodevzone.vercel.app/"
                            target="_blank"
                            size="2"
                          >
                            https://meu-caixa-neodevzone.vercel.app/
                          </Link>
                        </Box>

                        <Flex gap="5">
                          <Box>
                            <Text as="div" size="2" weight="bold" mb="1">
                              E-mail:
                            </Text>
                            <Text as="div" size="2" color="gray">
                              test@gmail.com
                            </Text>
                          </Box>
                          <Box>
                            <Text as="div" size="2" weight="bold" mb="1">
                              Senha:
                            </Text>
                            <Text as="div" size="2" color="gray">
                              12345678
                            </Text>
                          </Box>
                        </Flex>
                      </Flex>

                      <Flex gap="3" justify="end">
                        <Dialog.Close>
                          <Button
                            variant="soft"
                            color="gray"
                            style={{ cursor: "pointer" }}
                          >
                            Fechar
                          </Button>
                        </Dialog.Close>
                        <Button
                          asChild
                          color="mint"
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            href="https://meu-caixa-neodevzone.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Acessar sistema
                          </a>
                        </Button>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                )}
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
