import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          Solar Calculator
        </h1>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Roof & System Sizing</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2">
                Roof Area (m²)
              </label>
              <input
                type="number"
                min="10"
                max="500"
                value="100"
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Panel Efficiency (%)
              </label>
              <input
                type="number"
                min="15"
                max="25"
                value="20"
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium mb-2">
                Avg Sun Hours/Day
              </label>
              <input
                type="number"
                min="3"
                max="8"
                value="5"
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                System Size (kW)
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value="5"
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Estimated Daily Gen (kWh)
              </label>
              <input
                readOnly
                value="20"
                className="w-full rounded border px-3 py-2 bg-muted focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <Button className="w-full">
            Calculate System Size
          </Button>
        </Card>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Connect with our team for a personalized proposal
          </p>
        </div>
      </div>
    </main>
  )
}
