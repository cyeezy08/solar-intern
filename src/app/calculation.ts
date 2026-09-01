export function calculateSolar(
  roofArea: number,
  panelEfficiency: number,
  sunHours: number,
  systemSize: number
) {
  const panelAreaPerKw = 7.5 // m² per kW at 20% efficiency
  const adjustedPanelArea = systemSize * panelAreaPerKw * (20 / panelEfficiency)
  const capacityFactor = sunHours / 5 // normalize to 5 sun hours
  const annualGen = systemSize * 365 * sunHours * 0.75 // kWh
  const monthlySavings = annualGen * 0.50 / 12 // assume 50% self-consumption, RM 1/kWh
  const payback = 8 - systemSize * 0.3 // rough payback in years

  return {
    systemSize,
    annualGen: Math.round(annualGen),
    monthlySavings: Math.round(monthlySavings),
    payback: Math.round(payback * 10) / 10,
    panelArea: Math.round(adjustedPanelArea),
  }
}
