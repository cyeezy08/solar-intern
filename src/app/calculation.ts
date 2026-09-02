interface SolarCalculationResult {
  systemSize: number
  annualGen: number
  monthlySavings: number
  payback: number
  panelArea: number
}

/**
 * Calculate solar energy production and financial metrics
 * Based on Malaysian climate data and current electricity rates
 * 
 * @param roofArea - Available roof area in m²
 * @param panelEfficiency - Solar panel efficiency percentage (15-25%)
 * @param sunHours - Average daily sun hours
 * @param systemSize - Desired system size in kW
 * @returns Calculation results including annual generation and payback period
 */
export function calculateSolar(
  roofArea: number,
  panelEfficiency: number,
  sunHours: number,
  systemSize: number
): SolarCalculationResult {
  const panelAreaPerKw = 7.5 // m² per kW at 20% efficiency
  const adjustedPanelArea = systemSize * panelAreaPerKw * (20 / panelEfficiency)
  
  // Future: use for capacity factor normalization
  // const _sunHourFactor = Math.min(sunHours / 5, 1)
  
  // Annual generation in kWh (accounting for 75% performance ratio)
  const annualGen = systemSize * 365 * sunHours * 0.75
  
  // Monthly savings: assume 50% self-consumption at RM 1.0/kWh (Malaysian rate)
  const monthlySavings = (annualGen * 0.50) / 12
  
  // Payback period: cost ~RM 3-4 per watt, savings scale with system size
  const estimatedCost = systemSize * 3500 // RM/kW
  const annualSavings = monthlySavings * 12
  const payback = annualSavings > 0 ? estimatedCost / annualSavings : 99

  return {
    systemSize,
    annualGen: Math.round(annualGen),
    monthlySavings: Math.round(monthlySavings),
    payback: Math.round(payback * 10) / 10,
    panelArea: Math.round(adjustedPanelArea),
  }
}
