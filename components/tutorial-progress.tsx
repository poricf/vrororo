"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

interface TutorialProgressProps {
  currentStep: number
  totalSteps: number
  steps: string[]
}

export default function TutorialProgress({ currentStep, totalSteps, steps }: TutorialProgressProps) {
  return (
    <Card className="bg-[#1a1a1a] border-[#ff6b35]/30 p-6 mb-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Tutorial Progress</h3>
        <div className="text-[#888888] text-sm">
          Step {Math.min(currentStep + 1, totalSteps)} of {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full mb-6">
        <div className="w-full bg-[#2a2a2a] rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#ff6b35] h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(((currentStep + 1) / totalSteps) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Step List */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            {index <= currentStep ? (
              <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-[#888888] flex-shrink-0" />
            )}
            <span
              className={`text-sm ${
                index <= currentStep ? "text-white" : "text-[#888888]"
              } ${index === currentStep ? "font-medium" : ""}`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
