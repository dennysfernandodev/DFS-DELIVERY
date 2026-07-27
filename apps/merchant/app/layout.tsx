import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'DFS DELIVERY | Painel do Comércio',
  description: 'Atendimento inteligente, catálogo e pedidos.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
