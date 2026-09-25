import { createFileRoute } from "@tanstack/react-router";
import { PaginaSimples } from "@/components/SiteLayout";
import { OFICIAL, SITE } from "@/lib/site";

const desc = "Quem mantém o Guia do Passaporte, objetivo do site e como o conteúdo é produzido a partir de fontes oficiais.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Guia do Passaporte" },
      { name: "description", content: desc },
      { property: "og:title", content: "Sobre o Guia do Passaporte" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PaginaSimples titulo="Sobre este site">
      <h2>Quem mantém</h2>
      <p>O {SITE.nome} é mantido por {SITE.responsavel}, de forma independente.</p>
      <h2>Objetivo</h2>
      <p>
        Ajudar pessoas a entender o processo oficial de emissão do passaporte brasileiro, explicando
        documentos, taxas, prazos e etapas em linguagem simples.
      </p>
      <h2>Como o conteúdo é produzido</h2>
      <p>
        As informações são compiladas a partir de fontes oficiais públicas, principalmente o{" "}
        <a href={OFICIAL.passaporte} target="_blank" rel="noopener noreferrer">site da Polícia Federal</a>{" "}
        e o portal gov.br, e revisadas periodicamente. Em caso de divergência, vale sempre a
        informação do site oficial.
      </p>
      <h2>O que não fazemos</h2>
      <ul>
        <li>Não cobramos nada pelo acesso ao conteúdo.</li>
        <li>Não vendemos serviços.</li>
        <li>Não intermediamos emissão, agendamento ou pagamento de passaportes.</li>
        <li>Não temos vínculo com a Polícia Federal nem com qualquer órgão do governo.</li>
      </ul>
    </PaginaSimples>
  ),
});
