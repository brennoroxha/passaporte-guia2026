import { createFileRoute } from "@tanstack/react-router";
import { AvisoTopo, Cabecalho, Rodape } from "@/components/SiteLayout";
import { OFICIAL, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Como Tirar Passaporte: Guia Completo 2026 | Guia do Passaporte" },
      {
        name: "description",
        content:
          "Guia completo e atualizado sobre como emitir o passaporte brasileiro: documentos necessários, taxas, agendamento na Polícia Federal, prazos, validade e respostas para as principais dúvidas.",
      },
      { property: "og:title", content: "Como Tirar Passaporte: Guia Completo 2026" },
      {
        property: "og:description",
        content:
          "Passo a passo oficial para emitir o passaporte brasileiro: documentos, taxa GRU, agendamento, prazos e dúvidas frequentes.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const secoes = [
  { id: "o-que-e", label: "O que é o passaporte" },
  { id: "quem-pode", label: "Quem pode solicitar" },
  { id: "documentos", label: "Documentos necessários" },
  { id: "passo-a-passo", label: "Passo a passo" },
  { id: "taxas", label: "Taxas e valores" },
  { id: "prazos", label: "Prazos de entrega" },
  { id: "validade", label: "Validade" },
  { id: "menores", label: "Passaporte para menores" },
  { id: "perda-roubo", label: "Perda, roubo ou furto" },
  { id: "duvidas", label: "Dúvidas frequentes" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AvisoTopo />
      <Cabecalho />

      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Guia atualizado · 2026
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Como tirar o passaporte brasileiro: guia completo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tudo o que você precisa saber para emitir, renovar ou recuperar o seu
            passaporte: documentos, taxas, agendamento na Polícia Federal, prazos e
            respostas para as dúvidas mais comuns.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Conteúdo informativo baseado nas orientações oficiais da Polícia Federal.
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-5xl gap-10 px-6 py-12">
        {/* Sumário lateral */}
        <aside className="sticky top-8 hidden h-fit w-64 shrink-0 lg:block">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Neste guia
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {secoes.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Conteúdo */}
        <article className="max-w-3xl space-y-14">
          <p className="text-sm text-muted-foreground">
            Por {SITE.responsavel} · Atualizado em {SITE.atualizadoEm}
          </p>
          <section id="o-que-e">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              O que é o passaporte
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              O passaporte é o documento oficial de identidade do cidadão brasileiro no
              exterior. Ele é emitido pela Polícia Federal e comprova a nacionalidade e a
              identidade do portador perante autoridades de outros países. Para a maioria
              dos destinos internacionais, o passaporte é obrigatório; em países do
              Mercosul, como Argentina, Uruguai, Paraguai e Chile, é possível viajar
              apenas com a carteira de identidade (RG) em bom estado e emitida há menos
              de dez anos.
            </p>
          </section>

          <section id="quem-pode">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Quem pode solicitar
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Qualquer cidadão brasileiro, nato ou naturalizado, pode solicitar o
              passaporte, incluindo recém-nascidos e menores de idade (neste caso, com
              autorização dos pais ou responsáveis legais). Não existe idade mínima.
              Estrangeiros não podem obter passaporte brasileiro, salvo após
              naturalização.
            </p>
          </section>

          <section id="documentos">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Documentos necessários
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Para dar entrada no pedido, você precisará apresentar originais e, em
              alguns postos, cópias dos seguintes documentos:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
              <li>
                Documento de identidade válido com foto: RG, carteira de motorista
                (CNH), carteira de trabalho ou carteira de categoria profissional.
              </li>
              <li>Certidão de nascimento ou de casamento (quando aplicável).</li>
              <li>CPF (o número consta na maioria dos documentos de identidade).</li>
              <li>
                Título de eleitor, para maiores de 18 anos, ou comprovante de
                quitação eleitoral.
              </li>
              <li>
                Comprovante de quitação com o serviço militar, para homens entre 18 e
                45 anos.
              </li>
              <li>
                Passaporte anterior, se houver (mesmo vencido, para renovação).
              </li>
              <li>
                Comprovante de pagamento da taxa GRU (Guia de Recolhimento da União).
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Em caso de passaporte perdido, roubado ou furtado, é necessário
              apresentar também o boletim de ocorrência.
            </p>
          </section>

          <section id="passo-a-passo">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Passo a passo para emitir o passaporte
            </h2>
            <ol className="mt-4 space-y-6">
              {[
                {
                  t: "1. Preencha o formulário online",
                  d: "Acesse o site oficial da Polícia Federal (gov.br/pf) e preencha o requerimento de passaporte com seus dados pessoais. Ao final, o sistema gera um protocolo.",
                },
                {
                  t: "2. Pague a taxa GRU",
                  d: "O sistema emite a Guia de Recolhimento da União. O pagamento pode ser feito em bancos, lotéricas ou via internet banking. Guarde o comprovante.",
                },
                {
                  t: "3. Agende o atendimento",
                  d: "Após a compensação do pagamento (que pode levar até 3 dias úteis), agende data e horário no posto da Polícia Federal mais próximo pelo próprio site.",
                },
                {
                  t: "4. Compareça ao posto no dia agendado",
                  d: "Leve todos os documentos originais e o comprovante de pagamento. No local, serão coletadas sua foto, impressões digitais e assinatura.",
                },
                {
                  t: "5. Retire o passaporte",
                  d: "Acompanhe o status do pedido pelo site da Polícia Federal. Quando estiver pronto, retire o documento no posto onde fez o atendimento, apresentando um documento de identidade.",
                },
              ].map((passo, i) => (
                <li key={passo.t} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">{passo.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{passo.d}</p>
                  <a
                    href={[OFICIAL.servico, OFICIAL.gru, OFICIAL.agendamento, OFICIAL.passaporte, OFICIAL.acompanhamento][i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-primary underline"
                  >
                    {["Página oficial do requerimento (gov.br)", "Taxas e GRU no site oficial", "Agendamento no site oficial", "Orientações oficiais para o atendimento", "Acompanhar pedido no site oficial"][i]}
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <section id="taxas">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Taxas e valores
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              A taxa de emissão do passaporte comum é de <strong>R$ 257,25</strong>,
              paga por meio da GRU. Em caso de segunda via por perda, roubo ou furto, o
              valor é dobrado: <strong>R$ 514,50</strong>. Os valores podem ser
              reajustados por portaria, por isso confira sempre o valor vigente no site
              oficial da Polícia Federal antes de pagar.
            </p>
            <div className="mt-4 rounded-lg border border-border bg-muted p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Atenção: a GRU tem validade. Se o pagamento não for feito dentro do
                prazo, será necessário gerar uma nova guia. Pagamentos não são
                reembolsáveis após o início do processamento do pedido.
              </p>
            </div>
          </section>

          <section id="prazos">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Prazos de entrega
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              O prazo oficial informado pela Polícia Federal é de até 6 dias úteis após
              o atendimento, podendo variar conforme a demanda do posto e a região. Em
              períodos de alta temporada (férias e feriados prolongados), o prazo pode
              ser maior. O ideal é solicitar o passaporte com pelo menos 30 dias de
              antecedência da viagem. Em situações de emergência comprovada (como
              tratamento de saúde ou falecimento de familiar no exterior), existe a
              possibilidade de emissão emergencial, analisada caso a caso.
            </p>
          </section>

          <section id="validade">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Validade do passaporte
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
              <li>Adultos (18 anos ou mais): 10 anos.</li>
              <li>Menores de 4 a 17 anos: 5 anos.</li>
              <li>Crianças de 1 a 3 anos: 3 anos.</li>
              <li>Bebês de até 1 ano: 1 ano.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Muitos países exigem que o passaporte tenha validade mínima de 6 meses a
              partir da data de entrada. Verifique sempre a exigência do destino antes
              de viajar.
            </p>
          </section>

          <section id="menores">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Passaporte para menores de idade
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Menores de 18 anos precisam de autorização de ambos os pais ou
              responsáveis legais. A autorização pode ser dada de três formas:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
              <li>
                Presencialmente: ambos os pais comparecem ao posto no dia do
                atendimento.
              </li>
              <li>
                Por formulário de autorização com firma reconhecida em cartório.
              </li>
              <li>
                Por autorização eletrônica, quando disponível no sistema da Polícia
                Federal.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Para viagem internacional desacompanhada ou acompanhada de apenas um dos
              pais, também é exigida autorização de viagem, conforme as regras do
              Estatuto da Criança e do Adolescente (ECA).
            </p>
          </section>

          <section id="perda-roubo">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Perda, roubo ou furto do passaporte
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/90">
              Se o passaporte for perdido, roubado ou furtado, registre um boletim de
              ocorrência (pode ser feito online em muitos estados) e comunique a
              Polícia Federal. Para solicitar a segunda via, o processo é o mesmo da
              emissão, porém com taxa em dobro e apresentação do boletim de ocorrência.
              Se a perda acontecer no exterior, procure o consulado ou embaixada
              brasileira mais próxima, que poderá emitir uma Autorização de Retorno ao
              Brasil (ARB).
            </p>
          </section>

          <section id="duvidas">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Dúvidas frequentes
            </h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  q: "Posso viajar com o passaporte vencido?",
                  a: "Não. O passaporte precisa estar dentro da validade, e muitos países exigem validade mínima de 6 meses a partir da data de entrada. Renove antes de comprar passagens.",
                },
                {
                  q: "Preciso de passaporte para viajar dentro da América do Sul?",
                  a: "Para países do Mercosul e associados (Argentina, Uruguai, Paraguai, Chile, Bolívia, Peru, Colômbia, Equador), é possível viajar com o RG original em bom estado, emitido há menos de 10 anos. A CNH não é aceita como documento de viagem.",
                },
                {
                  q: "O passaporte garante entrada em qualquer país?",
                  a: "Não. O passaporte é o documento de identidade, mas muitos países exigem visto, autorização eletrônica (como o ESTA dos Estados Unidos ou o ETIAS da Europa) ou comprovação de vacinas. Verifique as exigências do destino no site do Itamaraty.",
                },
                {
                  q: "Posso agendar o atendimento em outra cidade?",
                  a: "Sim. O agendamento pode ser feito em qualquer posto da Polícia Federal habilitado a emitir passaportes, independentemente da sua cidade de residência.",
                },
                {
                  q: "O que acontece se eu não retirar o passaporte?",
                  a: "O documento fica disponível no posto por um prazo determinado. Após esse período, pode ser cancelado e destruído, sendo necessário iniciar um novo pedido com novo pagamento de taxa.",
                },
                {
                  q: "Casei e mudei de nome. Preciso trocar o passaporte?",
                  a: "Não é obrigatório, mas é recomendado. Divergências entre o nome no passaporte e nos demais documentos podem causar problemas na emissão de vistos e no embarque. Para alterar, solicite um novo passaporte apresentando a certidão de casamento.",
                },
                {
                  q: "Posso pagar a taxa com cartão de crédito?",
                  a: "A GRU é paga tradicionalmente por boleto, em bancos ou lotéricas. Alguns canais do gov.br permitem pagamento via PIX. Consulte as opções disponíveis no momento da emissão da guia.",
                },
                {
                  q: "Passaporte tem número de páginas limitado?",
                  a: "O passaporte comum brasileiro possui páginas suficientes para o uso típico de 10 anos. Se as páginas de visto acabarem antes da validade, é necessário solicitar um novo passaporte.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-lg border border-border bg-card"
                >
                  <summary className="cursor-pointer list-none p-5 font-semibold text-foreground transition-colors group-open:text-primary">
                    {item.q}
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section id="fontes">
            <h2 className="font-serif text-2xl font-bold text-foreground">Fontes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
              {([
                ["Polícia Federal: Passaporte", OFICIAL.passaporte],
                ["gov.br: Obter passaporte comum para brasileiro", OFICIAL.servico],
                ["Polícia Federal: Taxas do passaporte", OFICIAL.gru],
                ["Ministério das Relações Exteriores (Itamaraty)", OFICIAL.itamaraty],
              ] as const).map(([t, u]) => (
                <li key={u + t}>
                  <a href={u} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Aviso */}
          <section className="rounded-lg border border-border bg-muted p-6">
            <h2 className="font-serif text-lg font-bold text-foreground">
              Aviso importante
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Este guia tem caráter exclusivamente informativo e educacional. Não somos
              um órgão governamental e não realizamos emissão, agendamento ou
              intermediação de passaportes. As informações foram compiladas a partir de
              fontes públicas oficiais e podem sofrer alterações. Para dados oficiais e
              atualizados, consulte sempre o site da Polícia Federal (gov.br/pf) e o
              portal gov.br.
            </p>
          </section>
        </article>
      </div>

      <Rodape />
    </div>
  );
}
