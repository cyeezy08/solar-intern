import { pgTable, serial, integer, numeric, timestamp } from 'drizzle-orm/pg-core'

export const calculatorResults = pgTable('calculator_results', {
  id: serial('id').primaryKey(),
  roofArea: integer('roof_area').notNull(),
  panelEfficiency: integer('panel_efficiency').notNull(),
  sunHours: integer('sun_hours').notNull(),
  systemSize: integer('system_size').notNull(),
  annualGen: numeric('annual_gen').notNull(),
  monthlySavings: numeric('monthly_savings').notNull(),
  payback: numeric('payback').notNull(),
  panelArea: numeric('panel_area').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
})

export type CalculatorResult = typeof calculatorResults.$inferSelect
