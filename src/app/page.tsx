import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
    <main className="flex justify-center items-center min-h-screen">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Entrar</h1>
          <p className="text-gray-500 dark:text-gray-400">Estamos usando NextJS e Auth.js para autenticação.</p>
        </div>
        <div>
          <div className="space-y-4">
            <Button className="w-full" type="submit" onClick={redirect('/auth')}>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
