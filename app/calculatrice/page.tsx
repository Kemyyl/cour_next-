'use client'

import { useCalculatrice } from "@/hooks/useCalculatrice"
import { Card } from "@/components/ui/card"

export default function CalculatricePage() {
    const { display, inputNumber, inputDecimal, clear, performOperation, equals, percentage, toggleSign } = useCalculatrice()

    const buttonClass = "h-16 text-xl font-semibold rounded-lg active:scale-95 transition-all"
    const numberButton = `${buttonClass} bg-slate-700 hover:bg-slate-600 text-white`
    const operationButton = `${buttonClass} bg-orange-500 hover:bg-orange-600 text-white`
    const functionButton = `${buttonClass} bg-slate-400 hover:bg-slate-500 text-slate-900`

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
            <Card className="w-full max-w-sm shadow-2xl bg-black">
                <div className="p-6 space-y-4">
                    {/* Display */}
                    <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-700">
                        <div className="text-right">
                            <div className="text-5xl font-light text-white break-all">
                                {display}
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-4 gap-3">
                        {/* Row 1 */}
                        <button onClick={clear} className={functionButton}>C</button>
                        <button onClick={toggleSign} className={functionButton}>+/-</button>
                        <button onClick={percentage} className={functionButton}>%</button>
                        <button onClick={() => performOperation('/')} className={operationButton}>÷</button>

                        {/* Row 2 */}
                        <button onClick={() => inputNumber('7')} className={numberButton}>7</button>
                        <button onClick={() => inputNumber('8')} className={numberButton}>8</button>
                        <button onClick={() => inputNumber('9')} className={numberButton}>9</button>
                        <button onClick={() => performOperation('*')} className={operationButton}>×</button>

                        {/* Row 3 */}
                        <button onClick={() => inputNumber('4')} className={numberButton}>4</button>
                        <button onClick={() => inputNumber('5')} className={numberButton}>5</button>
                        <button onClick={() => inputNumber('6')} className={numberButton}>6</button>
                        <button onClick={() => performOperation('-')} className={operationButton}>−</button>

                        {/* Row 4 */}
                        <button onClick={() => inputNumber('1')} className={numberButton}>1</button>
                        <button onClick={() => inputNumber('2')} className={numberButton}>2</button>
                        <button onClick={() => inputNumber('3')} className={numberButton}>3</button>
                        <button onClick={() => performOperation('+')} className={operationButton}>+</button>

                        {/* Row 5 */}
                        <button onClick={() => inputNumber('0')} className={`${numberButton} col-span-2`}>0</button>
                        <button onClick={inputDecimal} className={numberButton}>.</button>
                        <button onClick={equals} className={operationButton}>=</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}