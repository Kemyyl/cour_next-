'use client'

import { useState } from "react"

export default function CalculatricePage() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Calculatrice</h1>
            <div className="flex gap-4">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                    className="border p-2 rounded"
                    placeholder="Enter number"
                />
                
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                    className="border p-2 rounded"
                    placeholder="Enter number"
                />
            </div>
            <button
                onClick={() => setResult(num1 + num2)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
                Add
            </button>
            <p className="text-xl font-medium">Result: {result}</p>
        </div>
    )
}