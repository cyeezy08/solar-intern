"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { useState } from 'react'

export default function ProposalsPage() {
  const [loading, setLoading] = useState(false)
  const [proposals, setProposals] = useState([])

  const loadProposals = async () => {
    setLoading(true)
    try {
      const resp = await fetch('/api/proposals')
      const data = await resp.json()
      setProposals(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          Proposal Center
        </h1>

        <Card className="mb-6 p-6">
          <h2 className="text-xl font-medium mb-4">Recent Proposals</h2>
          {loading ? (
            <p>Loading proposals...</p>
          ) : proposals.length === 0 ? (
            <p className="text-muted-foreground">
              No proposals yet. Be the first to submit a solar calculation!
            </p>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>System Size</th>
                  <th>Annual Gen</th>
                  <th>Monthly Savings</th>
                  <th>Payback</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((p: any) => (
                  <tr key={p.id}>
                    <td>{p.system_size} kW</td>
                    <td>{p.annual_gen} kWh</td>
                    <td>RM {p.monthly_savings}</td>
                    <td>{p.payback} years</td>
                    <td>{new Date(p.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>

        <div>
          <Button onClick={loadProposals}>
            Refresh Proposals
          </Button>
        </div>
      </div>
    </main>
  )
}
