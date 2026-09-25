import { createFileRoute } from "@tanstack/react-router";
import { PaginaSimples } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

const desc = "Política de privacidade do Guia do Passaporte em conformidade com a LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Guia do Passaporte" },
      { name: "description", content: desc },
      { property: "og:title", content: "Política de Privacidade" },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <PaginaSimples titulo="Política de Privacidade">
      <p>Última atualização: {SITE.atualizadoEm}.</p>
      <p>
        Esta política segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD). O
        controlador dos dados é {SITE.responsavel}, contato: {SITE.email}.
      </p>
      <h2>Dados coletados</h2>
      <p>
        O site não possui cadastro nem formulários e não coleta CPF, RG, dados de passaporte ou
        documentos pessoais. Podem ser utilizados apenas cookies de análise de audiência e de
        publicidade, que registram dados técnicos anônimos ou pseudonimizados, como páginas
        visitadas, tipo de navegador e origem do acesso.
      </p>
      <h2>Finalidade</h2>
      <p>
        Esses dados servem para medir audiência, melhorar o conteúdo e exibir anúncios. Não são
        vendidos nem usados para alterar o conteúdo exibido a cada visitante.
      </p>
      <h2>Base legal e compartilhamento</h2>
      <p>
        O tratamento se baseia no consentimento e no legítimo interesse (art. 7º da LGPD). Dados
        podem ser processados por provedores de análise e publicidade, como o Google, conforme as
        políticas desses serviços.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode solicitar confirmação, acesso, correção ou exclusão de dados, e revogar o
        consentimento, pelo e-mail {SITE.email}. Também é possível bloquear ou apagar cookies nas
        configurações do navegador.
      </p>
    </PaginaSimples>
  ),
});
