import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Card,
  Button,
  Badge,
  TextField,
  TextArea,
  Separator,
  Callout,
} from "@radix-ui/themes";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Olá, vim pelo seu portfólio e gostaria de um orçamento.",
  );
  const whatsappUrl = `https://wa.me/5575992197406?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    if (message.trim().length < 10) {
      setError("Sua mensagem precisa ter pelo menos 10 caracteres.");
      return;
    }

    setIsSubmitting(true);

    // Simulando um pequeno delay para UX do botão "preparando..."
    setTimeout(() => {
      const subject = encodeURIComponent(
        `Novo contato via Portfólio - ${name}`,
      );
      const body = encodeURIComponent(
        `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      );

      window.location.href = `mailto:nascimentogabriel.2004@gmail.com?subject=${subject}&body=${body}`;

      setSuccess(true);
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  };

  return (
    <Box
      id="contato"
      py={{ initial: "7", md: "9" }}
      px="4"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* CSS interno para as animações dos botões e glow */}
      <style>{`
        .contact-btn {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          width: 100%;
          justify-content: flex-start !important;
        }
        .contact-btn:hover {
          transform: translateY(-4px) scale(1.02);
        }
        .whatsapp-btn {
          background-color: #25D366 !important;
          color: #fff !important;
          border: none !important;
        }
        .whatsapp-btn:hover {
          /* Glow simulando a cor principal com um brilho intenso */
          box-shadow: 0 10px 40px -10px rgba(37, 211, 102, 0.6), 0 0 20px -5px var(--mint-a6) !important;
        }
        .social-btn {
          background-color: var(--gray-a2) !important;
          border: 1px solid var(--gray-a3) !important;
          color: var(--gray-11) !important;
        }
        .social-btn:hover {
          border-color: var(--mint-7) !important;
          color: var(--mint-11) !important;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px var(--mint-a3) !important;
        }
      `}</style>

      <Grid
        columns={{ initial: "1", md: "2" }}
        gap={{ initial: "7", md: "9" }}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Lado Esquerdo: Textos e Botões de CTA */}
        <Flex direction="column" gap="5">
          <Box>
            <Heading
              as="h2"
              size={{ initial: "8", md: "9" }}
              weight="bold"
              mb="3"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Vamos tirar sua ideia do <Text color="mint">papel?</Text>
            </Heading>
            <Text size="4" color="gray" style={{ lineHeight: "1.6" }}>
              Precisa de um site profissional em Feira de Santana para
              impulsionar seu negócio? Me chama para conversarmos. Solicite a
              criação de site na Bahia, seja uma landing page de alta conversão
              ou um sistema web totalmente personalizado.
            </Text>
          </Box>

          <Box
            py="4"
            style={{
              borderLeft: "4px solid var(--mint-9)",
              paddingLeft: "1rem",
            }}
          >
            <Text size="3" color="gray" style={{ fontStyle: "italic" }}>
              "Eu mesmo vou analisar seu projeto e te responder o mais rápido
              possível, sem intermediários e sem enrolação."
            </Text>
          </Box>

          <Flex direction="column" gap="3" mt="2">
            {/* Botão Principal de WhatsApp */}
            <Button
              asChild
              size="4"
              className="contact-btn whatsapp-btn"
              style={{ height: "60px", fontSize: "1.1rem", cursor: "pointer" }}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} style={{ marginRight: "8px" }} />
                Falar com desenvolvedor web
              </a>
            </Button>

            {/* Grid com outros contatos */}
            <Grid columns="2" gap="3">
              <Button asChild size="3" className="contact-btn social-btn">
                <a href="mailto:nascimentogabriel.2004@gmail.com">
                  <FaEnvelope size={18} style={{ color: "var(--gray-9)" }} />
                  E-mail
                </a>
              </Button>
              <Button asChild size="3" className="contact-btn social-btn">
                <a
                  href="https://www.linkedin.com/in/antoniofalcaonascimento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={18} style={{ color: "#0A66C2" }} />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                size="3"
                className="contact-btn social-btn"
                style={{ gridColumn: "span 2" }}
              >
                <a
                  href="https://github.com/copperlamb78"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={18} />
                  GitHub - @copperlamb78
                </a>
              </Button>
            </Grid>
          </Flex>
        </Flex>

        {/* Lado Direito: Info Card e Formulário */}
        <Flex direction="column" justify="center">
          <Card
            size="4"
            style={{
              backgroundColor: "var(--gray-a2)",
              border: "1px solid var(--gray-a3)",
              borderRadius: "var(--radius-5)",
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
            }}
          >
            <Flex direction="column" gap="4">
              <Flex gap="3" wrap="wrap">
                <Badge color="mint" radius="full" size="2" variant="soft">
                  <FaCheckCircle /> Disponível para novos projetos
                </Badge>
                <Badge color="gray" radius="full" size="2" variant="surface">
                  <FaClock /> Respondo em até 24h
                </Badge>
              </Flex>

              <Separator
                size="4"
                style={{ backgroundColor: "var(--gray-a4)" }}
              />

              <Heading as="h3" size="4" mb="1">
                Ou me envie uma mensagem
              </Heading>

              <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="3">
                  {error && (
                    <Callout.Root color="red" size="1">
                      <Callout.Icon>
                        <FaExclamationCircle />
                      </Callout.Icon>
                      <Callout.Text>{error}</Callout.Text>
                    </Callout.Root>
                  )}

                  {success && (
                    <Callout.Root color="green" size="1">
                      <Callout.Icon>
                        <FaCheckCircle />
                      </Callout.Icon>
                      <Callout.Text>
                        Tudo pronto! Seu cliente de e-mail padrão será aberto.
                      </Callout.Text>
                    </Callout.Root>
                  )}

                  <Box>
                    <Text as="div" size="2" mb="1" weight="medium" color="gray">
                      Seu nome
                    </Text>
                    <TextField.Root
                      size="3"
                      placeholder="Como posso te chamar?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Box>
                    <Text as="div" size="2" mb="1" weight="medium" color="gray">
                      Seu e-mail
                    </Text>
                    <TextField.Root
                      size="3"
                      type="email"
                      placeholder="Qual o seu melhor e-mail?"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Box>
                    <Text as="div" size="2" mb="1" weight="medium" color="gray">
                      Detalhes do projeto
                    </Text>
                    <TextArea
                      size="3"
                      placeholder="Me conte um pouco sobre sua ideia..."
                      style={{ minHeight: "100px", resize: "vertical" }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Button
                    type="submit"
                    size="3"
                    color="mint"
                    variant="soft"
                    mt="2"
                    disabled={isSubmitting}
                    style={{
                      cursor: isSubmitting ? "wait" : "pointer",
                      width: "100%",
                    }}
                  >
                    <FaEnvelope />{" "}
                    {isSubmitting ? "Preparando..." : "Iniciar conversa"}
                  </Button>
                </Flex>
              </form>
            </Flex>
          </Card>
        </Flex>
      </Grid>

      {/* Frase Final Estratégica */}
      <Flex justify="center" mt={{ initial: "8", md: "9" }} pt="5">
        <Text
          size={{ initial: "4", md: "5" }}
          weight="medium"
          color="gray"
          align="center"
        >
          Quanto antes você começar, antes seu projeto começa a gerar{" "}
          <Text color="mint">resultado.</Text>
        </Text>
      </Flex>
    </Box>
  );
}
