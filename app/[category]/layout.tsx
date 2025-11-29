import type React from "react"

export const generateStaticParams = () => {
  // Generate params for common categories
  const categories = [
    "fintech",
    "edtech",
    "ecommerce",
    "e-commerce",
    "bengaluru",
    "bangalore",
    "mumbai",
    "unicorn",
    "unicorns",
    "high-funded",
  ]

  return categories.map((category) => ({
    category,
  }))
}

export const dynamicParams = true

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
