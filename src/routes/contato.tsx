import { createFileRoute } from "@tanstack/react-router";
import { PaginaSimples } from "@/components/SiteLayout";
import { OFICIAL, SITE } from "@/lib/site";

const desc = "Canais de contato do Guia do Passaporte, site informativo e independente.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Guia do Passaporte" },
      { name: "description", content: desc },
      { property: "og:title", content: "Contato do Guia do Passaporte" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PaginaSimples titulo="Contato">
      <p>Para sugestões, correções ou dúvidas sobre o conteúdo deste guia:</p>
      <ul>
        <li>Responsável: {SITE.responsavel}</li>
        <li>E-mail: {SITE.email}</li>
        <li>CNPJ: {SITE.cnpj}</li>
      </ul>
      <p>
        Não envie CPF, RG, dados de passaporte ou qualquer documento pessoal. Não temos acesso a
        pedidos, agendamentos ou status de passaportes. Para isso, use o{" "}
        <a href={OFICIAL.passaporte} target="_blank" rel="noopener noreferrer">site oficial da Polícia Federal</a>.
      </p>
    </PaginaSimples>
  ),
});
