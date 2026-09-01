"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// JobPosting schema.org structured data
const jobPosting = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Solar Software Engineering Intern",
  "company": "Trexon",
  "location": "Kuala Lumpur / Remote",
  "description": "Ship features to trexon.my — solar calculator, proposal engine, BD command center, customer portal. Write production-grade TypeScript with Kysely (PostgreSQL) and Tailwind v4. Own at least one end-to-end feature from spec to deploy on Cloud Run.",
  "identifier": "RM 1,500 / month",
  "datePosted": new Date().toISOString(),
  "application": {
    "@type": "ApplyAction",
    "name": "Apply for Role",
    "target": "https://trexon.my/careers"
  }
}

export default function JobPostingPage() {
  // Inject JobPosting JSON-LD
  useEffect(() => {
    // Remove existing if present
    const existing = document.querySelector('script[type="application/ld+json"]')
    if (existing) existing.remove()
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jobPosting)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/trexon-logo.svg"
          alt="Trexon"
          width={150}
          height={150}
          className="mx-auto d-block mb-6"
        />
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          Solar Software Engineering Intern
        </h1>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-lg font-medium">Location: </span>
          <span className="text-muted-foreground">Kuala Lumpur / Remote</span>
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          <div>Stipend: <span className="font-medium">RM 1,500 / month</span></div>
          <div>Duration: <span className="font-medium">3-6 months</span></div>
        </div>

        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">About the Role</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Ship features to trexon.my — solar calculator, proposal engine, BD command center, customer portal</li>
            <li>Write production-grade TypeScript with Kysely (PostgreSQL) and Tailwind v4</li>
            <li>Own at least one end-to-end feature from spec to deploy on Cloud Run</li>
            <li>Add JobPosting schema, GA4 events, and observability to everything you ship</li>
            <li>Pair with founder during weekly product reviews</li>
            <li>Outcomes by month 3: Merge at least 12 PRs, ship 2 user-facing features, write launch post</li>
          </ul>

          <h2 className="text-xl font-medium mt-4">Your Profile</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>Year 2+ undergraduate in Computer Science, Software Engineering, or equivalent self-taught</li>
            <li>Fluent in TypeScript or strong JavaScript + willingness to learn TS</li>
            <li>Has shipped at least one personal project — a deployed URL, a repo, anything real</li>
            <li>Comfortable in a Git + GitHub + PR-review workflow</li>
          </ul>

          <Button
            onClick={() => window.location.href = 'https://trexon.my/careers'}
            className="w-full"
          >
            Apply for this role
          </Button>
        </Card>
      </div>
    </main>
  )
}
