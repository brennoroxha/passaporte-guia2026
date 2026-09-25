import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { OFICIAL, SITE } from "@/lib/site";

export function AvisoTopo() {
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-6 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <p className="leading-snug">
          Site informativo e independente. Não somos a Polícia Federal nem órgão do governo. A
          emissão do passaporte é feita exclusivamente e gratuitamente (exceto a taxa GRU) no site
          oficial gov.br/pf.
        </p>
        <a
          href={OFICIAL.passaporte}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md bg-background px-3 py-1.5 font-medium text-foreground transition-opacity hover:opacity-90"
        >
          Ir para o site oficial
        </a>
      </div>
    </div>
  );
}

export function Cabecalho() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-xl font-bold text-foreground">
          {SITE.nome}
        </Link>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Guia</Link>
          <Link to="/sobre" className="hover:text-foreground">Sobre</Link>
          <Link to="/contato" className="hover:text-foreground">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export function Rodape() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="font-serif text-lg font-bold text-foreground">{SITE.nome}</p>
        <p className="mt-1 text-sm text-muted-foreground">Responsável: {SITE.responsavel}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Conteúdo informativo e independente sobre documentação de viagem. Este site não possui
          vínculo com a Polícia Federal ou qualquer órgão do governo brasileiro.
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link to="/sobre" className="text-foreground hover:text-primary">Sobre</Link>
          <Link to="/contato" className="text-foreground hover:text-primary">Contato</Link>
          <Link to="/privacidade" className="text-foreground hover:text-primary">Privacidade</Link>
          <Link to="/termos" className="text-foreground hover:text-primary">Termos de uso</Link>
        </nav>
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 {SITE.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function PaginaSimples({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AvisoTopo />
      <Cabecalho />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="font-serif text-4xl font-bold text-foreground">{titulo}</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-foreground/90 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </main>
      <Rodape />
    </div>
  );
}
