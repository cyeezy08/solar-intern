"use client"

import { useState } from "react"
import { calculateSolar } from "@/app/calculation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type CalcResult = {
  systemSize: number
  annualGen: number
  monthlySavings: number
  payback: number
  panelArea: number
}

export function SolarCalculator() {
  const [inputs, setInputs] = useState({
    roofArea: 100,
    panelEfficiency: 20,
    sunHours: 5,
    systemSize: 5,
  })
  const [result, setResult] = useState<CalcResult | null>(null)

  const handleSubmit = () => {
    const r = calculateSolar(
      inputs.roofArea,
      inputs.panelEfficiency,
      inputs.sunHours,
      inputs.systemSize
    )
    setResult(r as CalcResult)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: Number(value) })
  }

  return (
    <main className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          Solar Calculator
        </h1>

        <Card className="p-6 space-y-4">
          <form
            onSubmit={e => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Roof Area (m²)
                <input
                  type="number"
                  name="roofArea"
                  min="10"
                  max="500"
                  value={inputs.roofArea}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium mb-2">
                Panel Efficiency (%)
                <input
                  type="number"
                  name="panelEfficiency"
                  min="15"
                  max="25"
                  value={inputs.panelEfficiency}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium mb-2">
                Avg Sun Hours/Day
                <input
                  type="number"
                  name="sunHours"
                  min="3"
                  max="8"
                  value={inputs.sunHours}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>

              <label className="block text-sm font-medium mb-2">
                Desired System Size (kW)
                <input
                  type="number"
                  name="systemSize"
                  min="1"
                  max="20"
                  value={inputs.systemSize}
                  onChange={handleInputChange}
                  className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </label>

              <Button type="submit" className="w-full">
                Calculate System Size
              </Button>
            </div>
          </form>

          {result && (
            <div id="result" className="mt-4 pt-4 border-t">
              <h3 className="text-lg font-medium mb-3">Recommended System</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-sm text-muted-foreground">Est. Annual Production</div>
                  <div className="text-2xl font-bold">{result.annualGen} kWh</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Est. Monthly Savings</div>
                  <div className="text-2xl font-bold">RM {result.monthlySavings}</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm text-muted-foreground">Payback Period</div>
                <div className="text-xl font-bold">{result.payback} years</div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
  )
}
