"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Play } from "lucide-react"
import ChromeBrowserSimulation from "@/components/chrome-browser-simulation"
import TutorialJoyride from "@/components/tutorial-joyride"
import TutorialProgress from "@/components/tutorial-progress"

const tutorialSteps = [
  "Click the extensions icon in your browser toolbar",
  "Find Doom Blocker in the extensions list",
  "Pin the extension to your toolbar",
  "Click the pinned extension icon",
  "Configure blocking settings and categories",
]

export default function DoomBlockerTutorial() {
  const [tutorialStarted, setTutorialStarted] = useState(false)
  const [showExtensionsDropdown, setShowExtensionsDropdown] = useState(false)
  const [extensionsPinned, setExtensionsPinned] = useState(false)
  const [showExtensionPopup, setShowExtensionPopup] = useState(false)
  const [runJoyride, setRunJoyride] = useState(false)
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0)

  useEffect(() => {
    if (tutorialStarted) {
      setRunJoyride(true)
    }
  }, [tutorialStarted])

  const startTutorial = () => {
    setTutorialStarted(true)
    setCurrentTutorialStep(0)
    setShowExtensionsDropdown(false)
    setExtensionsPinned(false)
    setShowExtensionPopup(false)
    setRunJoyride(true)
  }

  const handleExtensionsClick = () => {
    setShowExtensionsDropdown(!showExtensionsDropdown)
  }

  const handlePinExtension = () => {
    setExtensionsPinned(!extensionsPinned)
    setShowExtensionsDropdown(false)
  }

  const handleExtensionPopupToggle = (isOpen: boolean) => {
    setShowExtensionPopup(isOpen)
  }

  const handleTutorialComplete = () => {
    setRunJoyride(false)
    setCurrentTutorialStep(5)
  }

  const handleStepChange = (stepIndex: number) => {
    setCurrentTutorialStep(stepIndex)

    if (stepIndex === 1 && !showExtensionsDropdown) {
      setShowExtensionsDropdown(true)
    }
    if (stepIndex >= 2 && !extensionsPinned) {
      setExtensionsPinned(true)
      setShowExtensionsDropdown(false)
    }
    if (stepIndex === 4 && !showExtensionPopup) {
      setShowExtensionPopup(true)
    }
  }

  const resetTutorial = () => {
    setTutorialStarted(false)
    setShowExtensionsDropdown(false)
    setExtensionsPinned(false)
    setShowExtensionPopup(false)
    setRunJoyride(false)
    setCurrentTutorialStep(0)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#ff6b35]/30 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#ff6b35] rounded-lg flex items-center justify-center font-bold text-black">
                DB
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Doom Blocker Tutorial</h1>
                <p className="text-[#888888] text-sm">Learn to install and configure the extension</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {!tutorialStarted ? (
                <Button onClick={startTutorial} className="bg-[#ff6b35] hover:bg-[#e55a2b] text-black font-semibold">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </Button>
              ) : (
                <Button onClick={resetTutorial} className="bg-[#ff6b35] hover:bg-[#e55a2b] text-black font-semibold">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart Tutorial
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {tutorialStarted && (
            <div className="max-w-4xl mx-auto">
              <TutorialProgress
                currentStep={currentTutorialStep}
                totalSteps={tutorialSteps.length}
                steps={tutorialSteps}
              />
            </div>
          )}

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-white">Interactive Browser Tutorial</h2>
            <p className="text-[#888888]">
              {!tutorialStarted && "Click 'Start Tutorial' to begin learning how to use Doom Blocker"}
              {tutorialStarted &&
                currentTutorialStep === 0 &&
                "Click the extensions icon in the browser toolbar to begin"}
              {tutorialStarted && currentTutorialStep === 1 && "Great! Now find and pin the Doom Blocker extension"}
              {tutorialStarted && currentTutorialStep === 2 && "Perfect! The extension is now pinned to your toolbar"}
              {tutorialStarted &&
                currentTutorialStep === 3 &&
                "Excellent! Now click the pinned extension to configure it"}
              {tutorialStarted && currentTutorialStep === 4 && "Amazing! Configure your content blocking preferences"}
              {tutorialStarted &&
                currentTutorialStep >= 5 &&
                "🎉 Tutorial completed! You're now ready to use Doom Blocker"}
            </p>
          </div>

          <ChromeBrowserSimulation
            showExtensionsDropdown={showExtensionsDropdown}
            onExtensionsClick={handleExtensionsClick}
            extensionsPinned={extensionsPinned}
            onPinExtension={handlePinExtension}
            showExtensionPopup={showExtensionPopup}
            onExtensionPopupToggle={handleExtensionPopupToggle}
          />
        </div>
      </main>

      {tutorialStarted && (
        <TutorialJoyride
          run={runJoyride}
          onTutorialComplete={handleTutorialComplete}
          onStepChange={handleStepChange}
          currentStep={currentTutorialStep}
        />
      )}
    </div>
  )
}
