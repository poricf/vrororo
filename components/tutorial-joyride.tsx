"use client"

import { useCallback } from "react"
import Joyride, { type CallBackProps, STATUS, type Step } from "react-joyride"

interface TutorialJoyrideProps {
  run: boolean
  onTutorialComplete: () => void
  onStepChange: (stepIndex: number) => void
  currentStep: number
}

const tutorialSteps: Step[] = [
  {
    target: "#extensions-button",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">Step 1: Access Extensions</h3>
        <p className="text-[#888888] mb-4">
          Click the extensions icon (puzzle piece) in your browser toolbar to view all installed extensions.
        </p>
        <div className="flex items-center space-x-2 text-[#ff6b35] text-sm">
          <div className="w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center text-black text-xs font-bold">
            1
          </div>
          <span>of 5 steps</span>
        </div>
      </div>
    ),
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: "#pin-extension-button",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">Step 2: Find Doom Blocker</h3>
        <p className="text-[#888888] mb-4">
          Great! Now locate the Doom Blocker extension in the list and click the "Pin" button to add it to your toolbar
          for quick access.
        </p>
        <div className="flex items-center space-x-2 text-[#ff6b35] text-sm">
          <div className="w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center text-black text-xs font-bold">
            2
          </div>
          <span>of 5 steps</span>
        </div>
      </div>
    ),
    placement: "left",
    disableBeacon: true,
  },
  {
    target: "#pinned-doom-blocker",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">Step 3: Extension Pinned!</h3>
        <p className="text-[#888888] mb-4">
          Perfect! The Doom Blocker extension is now pinned to your toolbar. You can see the orange "DB" icon. This
          makes it easily accessible whenever you need it.
        </p>
        <div className="flex items-center space-x-2 text-[#ff6b35] text-sm">
          <div className="w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center text-black text-xs font-bold">
            3
          </div>
          <span>of 5 steps</span>
        </div>
      </div>
    ),
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: "#pinned-doom-blocker",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">Step 4: Open Extension</h3>
        <p className="text-[#888888] mb-4">
          Now click on the pinned Doom Blocker icon to open the extension popup and access its configuration options.
        </p>
        <div className="flex items-center space-x-2 text-[#ff6b35] text-sm">
          <div className="w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center text-black text-xs font-bold">
            4
          </div>
          <span>of 5 steps</span>
        </div>
      </div>
    ),
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: "#doom-blocker-popup",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">Step 5: Configure Settings</h3>
        <p className="text-[#888888] mb-4">
          Excellent! Here you can configure which content categories to block (like Politics, Drama, Clickbait) and
          control YouTube features like Shorts and Home Feed blocking. Toggle the switches to customize your experience.
        </p>
        <div className="flex items-center space-x-2 text-[#ff6b35] text-sm mb-4">
          <div className="w-4 h-4 bg-[#ff6b35] rounded-full flex items-center justify-center text-black text-xs font-bold">
            5
          </div>
          <span>of 5 steps</span>
        </div>
        <div className="bg-[#2a2a2a] p-3 rounded-lg border border-[#ff6b35]/20">
          <p className="text-white text-sm font-medium mb-1">🎉 Tutorial Complete!</p>
          <p className="text-[#888888] text-xs">
            You now know how to install, pin, and configure Doom Blocker to block unwanted YouTube content.
          </p>
        </div>
      </div>
    ),
    placement: "left",
    disableBeacon: true,
  },
]

export default function TutorialJoyride({ run, onTutorialComplete, onStepChange, currentStep }: TutorialJoyrideProps) {
  const handleJoyrideCallback = useCallback(
    (data: CallBackProps) => {
      const { action, index, status, type } = data

      console.log("[v0] Joyride callback:", { action, index, status, type, currentStep })

      if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
        onTutorialComplete()
      } else if (type === "step:after" && action === "next") {
        const nextStep = index + 1
        console.log("[v0] Advancing to step:", nextStep)
        onStepChange(nextStep)
      } else if (type === "step:after" && action === "prev") {
        const prevStep = Math.max(0, index - 1)
        console.log("[v0] Going back to step:", prevStep)
        onStepChange(prevStep)
      }
    },
    [onTutorialComplete, onStepChange, currentStep],
  )

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous={true}
        run={run}
        scrollToFirstStep={true}
        showProgress={false}
        showSkipButton={true}
        steps={tutorialSteps}
        disableScrolling={false}
        stepIndex={currentStep}
        spotlightPadding={10}
        styles={{
          options: {
            primaryColor: "#ff6b35",
            backgroundColor: "#1a1a1a",
            textColor: "#ffffff",
            overlayColor: "rgba(0, 0, 0, 0.8)",
            arrowColor: "#1a1a1a",
            zIndex: 1000,
          },
          tooltip: {
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255, 107, 53, 0.3)",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "14px",
          },
          tooltipContent: {
            padding: 0,
          },
          buttonNext: {
            backgroundColor: "#ff6b35",
            color: "#000000",
            borderRadius: "6px",
            fontWeight: "600",
            padding: "8px 16px",
            border: "none",
            fontSize: "14px",
          },
          buttonBack: {
            color: "#888888",
            marginRight: "8px",
            backgroundColor: "transparent",
            border: "1px solid #888888",
            borderRadius: "6px",
            padding: "8px 16px",
            fontSize: "14px",
          },
          buttonSkip: {
            color: "#888888",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "14px",
          },
          beacon: {
            backgroundColor: "#ff6b35",
          },
          beaconInner: {
            backgroundColor: "#ff6b35",
          },
          spotlight: {
            backgroundColor: "transparent",
            border: "2px solid #ff6b35",
            borderRadius: "8px",
          },
        }}
        locale={{
          back: "Previous",
          close: "Close",
          last: "Finish Tutorial",
          next: "Next",
          skip: "Skip Tutorial",
        }}
      />
    </>
  )
}
