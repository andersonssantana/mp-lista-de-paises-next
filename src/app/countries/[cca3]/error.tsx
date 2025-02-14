'use client';
import Link from 'next/link';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="max-w-7xl mx-auto p-8 text-red-500">
      <h2 className="text-2xl font-bold mb-4">Erro ao carregar país</h2>
      <p className="mb-4">Detalhes: {error.message}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        ← Voltar para a lista
      </Link>
    </div>
  );
}
