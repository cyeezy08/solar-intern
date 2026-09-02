export interface SolarCalculationResult {
  systemSize: number
  annualGen: number
  monthlySavings: number
  payback: number
  panelArea: number
}

/**
 * Calculate solar energy production and financial metrics based on roof space,
 * panel efficiency, sunlight profile, and the desired system capacity.
 *
 * The implementation keeps the model realistic by capping the recommended system
 * size to the roof area that is actually available for solar panels.
 */
export function calculateSolar(
  roofArea: number,
  panelEfficiency: number,
  sunHours: number,
  systemSize: number
): SolarCalculationResult {
  const safeRoofArea = Number.isFinite(roofArea) ? Math.max(roofArea, 0) : 0
  const safePanelEfficiency = Number.isFinite(panelEfficiency)
    ? Math.min(Math.max(panelEfficiency, 15), 25)
    : 20
  const safeSunHours = Number.isFinite(sunHours) ? Math.min(Math.max(sunHours, 3), 8) : 5
  const safeSystemSize = Number.isFinite(systemSize) ? Math.max(systemSize, 0) : 0

  const panelAreaPerKw = 7.5 * (20 / safePanelEfficiency)
  const maxSystemSizeFromRoof = safeRoofArea > 0 ? safeRoofArea / panelAreaPerKw : 0
  const adjustedSystemSize = Math.min(safeSystemSize, maxSystemSizeFromRoof)

  // Annual generation in kWh (accounting for 75% performance ratio)
  const annualGen = adjustedSystemSize * 365 * safeSunHours * 0.75

  // Monthly savings: assume 50% self-consumption at RM 1.0/kWh.
  const monthlySavings = (annualGen * 0.5) / 12

  // Cost is roughly RM 3,500 per kW and payback is measured in years.
  const estimatedCost = adjustedSystemSize * 3500
  const annualSavings = monthlySavings * 12
  const payback = annualSavings > 0 ? estimatedCost / annualSavings : 99

  return {
    systemSize: Number(adjustedSystemSize.toFixed(1)),
    annualGen: Math.round(annualGen),
    monthlySavings: Math.round(monthlySavings),
    payback: Math.round(payback * 10) / 10,
    panelArea: Math.round(adjustedSystemSize * panelAreaPerKw),
  }
}
