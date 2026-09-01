import { db } from '@/db/index'
import { calculatorResults } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET() {
  const results = await db
    .select()
    .from(calculatorResults)
    .orderBy(calculatorResults.id)
    .limit(20)
  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { roofArea, panelEfficiency, sunHours, systemSize, annualGen, monthlySavings, payback, panelArea } = body

  const [result] = await db.insert(calculatorResults).values({
    roofArea,
    panelEfficiency,
    sunHours,
    systemSize,
    annualGen: annualGen.toString(),
    monthlySavings: monthlySavings.toString(),
    payback: payback.toString(),
    panelArea: panelArea.toString(),
  }).returning()

  // Log GA4 event
  const logGAEvent = (name: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({ event: name, ...params })
    }
  }
  
  logGAEvent('solar_calculator_submit', {
    system_size: systemSize,
    annual_gen: annualGen,
    monthly_savings: monthlySavings,
    payback_years: payback,
  })

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
