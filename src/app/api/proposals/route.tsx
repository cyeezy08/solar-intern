import { db } from '@/db/index'
import { calculatorResults } from '@/db/schema'

interface ProposalRequest {
  roofArea: number
  panelEfficiency: number
  sunHours: number
  systemSize: number
  annualGen: number
  monthlySavings: number
  payback: number
  panelArea: number
}

/**
 * Validate proposal request payload
 */
function validateProposal(data: unknown): data is ProposalRequest {
  if (typeof data !== 'object' || data === null) return false
  const p = data as Record<string, unknown>
  return (
    typeof p.roofArea === 'number' &&
    typeof p.panelEfficiency === 'number' &&
    typeof p.sunHours === 'number' &&
    typeof p.systemSize === 'number' &&
    typeof p.annualGen === 'number' &&
    typeof p.monthlySavings === 'number' &&
    typeof p.payback === 'number' &&
    typeof p.panelArea === 'number'
  )
}

/**
 * GET /api/proposals
 * Retrieve the 20 most recent proposals
 */
export async function GET() {
  try {
    const results = await db
      .select()
      .from(calculatorResults)
      .orderBy(calculatorResults.id)
      .limit(20)
    return Response.json(results)
  } catch (error) {
    console.error('Failed to fetch proposals:', error)
    return Response.json(
      { error: 'Failed to fetch proposals' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/proposals
 * Create a new solar calculator proposal
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request payload
    if (!validateProposal(body)) {
      return Response.json(
        { error: 'Invalid proposal data' },
        { status: 400 }
      )
    }

    const { roofArea, panelEfficiency, sunHours, systemSize, annualGen, monthlySavings, payback, panelArea } = body

    // Insert proposal into database
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

    return Response.json(result, { status: 201 })
  } catch (error) {
    console.error('Failed to create proposal:', error)
    return Response.json(
      { error: 'Failed to create proposal' },
      { status: 500 }
    )
  }
}
