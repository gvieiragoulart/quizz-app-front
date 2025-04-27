'use client'

import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <>
      <div className="bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 p-5">
            Crie e compartilhe seu <span className="text-accent">Quizz</span>
          </h2>
          <p className="text-gray-600 mt-2 p-5">
            Com nosso app, criar quizzes divertidos e desafiadores nunca foi tão fácil. Inspire, desafie e compartilhe com o mundo!
          </p>
          <div className="p-5 flex flex-col md:flex-row gap-4">
            <button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
              onClick={() => router.push('/explore-quizzes')}
            >
              Explorar Quizzes →
            </button>
            <button
              className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800"
              onClick={() => router.push('/create-quiz')}
            >
              Criar Novo Quizz →
            </button>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Aqui você pode colocar uma imagem ilustrativa futuramente */}
        </div>
      </div>
    </>
  )
}
