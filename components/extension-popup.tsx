"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { X, Shield, Eye } from "lucide-react"

interface ExtensionPopupProps {
  isOpen: boolean
  onClose: () => void
  position?: { top: number; right: number }
}

export default function ExtensionPopup({ isOpen, onClose, position }: ExtensionPopupProps) {
  const [isEnabled, setIsEnabled] = useState(true)
  const [enableCustomization, setEnableCustomization] = useState(false)
  const [blockShorts, setBlockShorts] = useState(true)
  const [blockHomeFeed, setBlockHomeFeed] = useState(true)

  const categories = [
    "politics",
    "drama",
    "clickbait",
    "reaction",
    "exposed",
    "shocking",
    "gone wrong",
    "prank",
    "conspiracy",
    "gossip",
  ]

  if (!isOpen) return null

  const popupStyle = position ? { position: "absolute" as const, top: position.top, right: position.right } : {}

  return (
    <div
      className="w-80 bg-[#1a1a1a] border border-gray-600 rounded-lg shadow-2xl z-50"
      style={popupStyle}
      id="doom-blocker-popup"
    >
      <div className="bg-[#ff6b35] p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-black" />
            <div>
              <h3 className="text-black font-bold text-lg">Doom Blocker</h3>
              <p className="text-black/80 text-sm font-medium">ENABLED</p>
            </div>
          </div>
          <Button size="sm" variant="ghost" onClick={onClose} className="text-black hover:text-black hover:bg-black/10">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-700">
        <Button className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white border border-gray-600">
          <Eye className="w-4 h-4 mr-2" />
          SHOW HIDDEN CONTENT
        </Button>
      </div>

      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Enable Customization</span>
          <Switch
            checked={enableCustomization}
            onCheckedChange={setEnableCustomization}
            className="data-[state=checked]:bg-[#ff6b35]"
          />
        </div>
      </div>

      <div className="p-4 border-b border-gray-700">
        <div className="grid grid-cols-2 gap-2">
          <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold">BLOCK</Button>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 bg-transparent">
            KEEP
          </Button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-700">
        <h4 className="text-white font-medium mb-3">What do you want to remove?</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 text-sm rounded-full border border-gray-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-white font-bold mb-4">YOUTUBE FEATURES</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
              </div>
              <span className="text-white">Block Shorts</span>
            </div>
            <Switch
              checked={blockShorts}
              onCheckedChange={setBlockShorts}
              className="data-[state=checked]:bg-[#ff6b35]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-600 rounded-sm"></div>
              </div>
              <span className="text-white">Block Home Feed</span>
            </div>
            <Switch
              checked={blockHomeFeed}
              onCheckedChange={setBlockHomeFeed}
              className="data-[state=checked]:bg-[#ff6b35]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
