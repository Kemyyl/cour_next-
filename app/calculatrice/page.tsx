'use client'

import { useCalculatrice } from "@/hooks/useCalculatrice"
import { Card } from "@/components/ui/card"

export default function CalculatricePage() {
    const { num1, setNum1, num2, setNum2, result, add, subtract, multiply, divide, reset } = useCalculatrice()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-lg">
                <div className="p-8 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-center text-slate-900">Calculatrice</h1>
                        <p className="text-center text-slate-500 text-sm mt-2">Effectuez des opérations simples</p>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Nombre 1</label>
                            <input
                                type="number"
                                value={num1}
                                onChange={(e) => setNum1(Number(e.target.value))}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Entrez le premier nombre"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Nombre 2</label>
                            <input
                                type="number"
                                value={num2}
                                onChange={(e) => setNum2(Number(e.target.value))}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Entrez le deuxième nombre"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={add}
                            className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            <span className="text-lg">+</span>
                        </button>
                        <button
                            onClick={subtract}
                            className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            <span className="text-lg">−</span>
                        </button>
                        <button
                            onClick={multiply}
                            className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            <span className="text-lg">×</span>
                        </button>
                        <button
                            onClick={divide}
                            className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            <span className="text-lg">÷</span>
                        </button>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                        <p className="text-slate-600 text-sm mb-1">Résultat</p>
                        <p className="text-4xl font-bold text-blue-600">{result}</p>
                        <p className="text-xs text-slate-500 mt-2">{num1} {result === num1 + num2 ? '+' : result === num1 - num2 ? '−' : result === num1 * num2 ? '×' : '÷'} {num2}</p>
                    </div>

                    <button
                        onClick={reset}
                        className="w-full bg-red-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-red-700 active:scale-95 transition-all"
                    >
                        Réinitialiser
                    </button>
                </div>
            </Card>
        </div>
    )
}