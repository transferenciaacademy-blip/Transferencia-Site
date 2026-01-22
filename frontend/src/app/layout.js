import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Transferência Academy - Conquiste sua vaga em Medicina',
  description: 'A maior plataforma especializada em preparação para transferências de Medicina do Brasil. 500+ alunos aprovados nas melhores universidades.',
  keywords: 'transferência medicina, preparatório medicina, transferência externa, universidade medicina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
