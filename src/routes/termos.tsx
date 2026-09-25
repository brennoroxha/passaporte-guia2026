import { createFileRoute } from "@tanstack/react-router";
import { PaginaSimples } from "@/components/SiteLayout";
import { OFICIAL, SITE } from "@/lib/site";

const desc = "Termos de uso do Guia do Passaporte, site informativo sem vínculo com o governo.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Guia do Passaporte" },
      { name: "description", content: desc },
      { property: "og:title", content: "Termos de Uso" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PaginaSimples titulo="Termos de Uso">
      <p>Última atualização: {SITE.atualizadoEm}.</p>
      <h2>Natureza do site</h2>
      <p>
        O {SITE.nome} é um site informativo e independente, mantido por {SITE.responsavel}. Não é
        órgão público, não tem vínculo com a Polícia Federal e não emite, agenda ou intermedeia
        passaportes.
      </p>
      <h2>Uso das informações</h2>
      <p>
        O conteúdo é gratuito e baseado em fontes oficiais públicas, mas pode ficar desatualizado.
        Antes de qualquer pagamento ou viagem, confirme as informações no{" "}
        <a href={OFICIAL.passaporte} target="_blank" rel="noopener noreferrer">site oficial</a>.
        Não nos responsabilizamos por decisões tomadas apenas com base neste guia.
      </p>
      <h2>Links externos</h2>
      <p>Links para sites oficiais abrem em nova aba e seguem as regras desses sites.</p>
      <h2>Propriedade intelectual</h2>
      <p>Os textos deste site não podem ser reproduzidos sem autorização.</p>
      <h2>Privacidade</h2>
      <p>O tratamento de dados está descrito na Política de Privacidade.</p>
      <h2>Contato</h2>
      <p>Dúvidas sobre estes termos: {SITE.email}.</p>
    </PaginaSimples>
  ),
});
