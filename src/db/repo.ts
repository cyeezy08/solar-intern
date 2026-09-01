import { db } from './index'
import { calculatorResults, type CalculatorResult } from './schema'

export async function saveCalculation(result: CalculatorResult) {
  await db.insert(calculatorResults).values({
    ...result,
    createdAt: new Date().toISOString(),
  })
}

export async function getRecentCalculations(limit = 10) {
  return db
    .select()
    .from(calculatorResults)
    .orderBy(calculatorResults.id)
    .limit(limit)
}
