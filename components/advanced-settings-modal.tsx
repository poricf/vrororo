"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X, Save, RotateCcw, AlertTriangle, Clock, Bell, Database, Shield, Zap } from "lucide-react"

interface AdvancedSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdvancedSettingsModal({ isOpen, onClose }: AdvancedSettingsModalProps) {
  const [customKeywords, setCustomKeywords] = useState(["scandal", "breaking", "shocking"])
  const [newKeyword, setNewKeyword] = useState("")
  const [sensitivity, setSensitivity] = useState([75])
  const [notifications, setNotifications] = useState(true)
  const [soundEffects, setSoundEffects] = useState(false)
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [dataCollection, setDataCollection] = useState(false)
  const [blockingDelay, setBlockingDelay] = useState([500])

  const addKeyword = () => {
    if (newKeyword.trim() && !customKeywords.includes(newKeyword.trim().toLowerCase())) {
      setCustomKeywords([...customKeywords, newKeyword.trim().toLowerCase()])
      setNewKeyword("")
    }
  }

  const removeKeyword = (keyword: string) => {
    setCustomKeywords(customKeywords.filter((k) => k !== keyword))
  }

  const resetToDefaults = () => {
    setCustomKeywords(["scandal", "breaking", "shocking"])
    setSensitivity([75])
    setNotifications(true)
    setSoundEffects(false)
    setAutoUpdate(true)
    setDataCollection(false)
    setBlockingDelay([500])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-4">
      <Card className="bg-[#1a1a1a] border-[#ff6b35]/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#ff6b35]/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#ff6b35] rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Advanced Settings</h2>
              <p className="text-[#888888] text-sm">Fine-tune your content blocking experience</p>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Custom Keywords */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-[#ff6b35]" />
              <h3 className="text-white font-semibold">Custom Keywords</h3>
            </div>
            <p className="text-[#888888] text-sm">
              Add custom words or phrases to block content containing these terms.
            </p>

            <div className="flex space-x-2">
              <Input
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Enter keyword..."
                className="flex-1 bg-[#2a2a2a] border-[#ff6b35]/20 text-white"
                onKeyPress={(e) => e.key === "Enter" && addKeyword()}
              />
              <Button onClick={addKeyword} className="bg-[#ff6b35] hover:bg-[#e55a2b] text-black">
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {customKeywords.map((keyword) => (
                <Badge
                  key={keyword}
                  className="bg-[#ff6b35] text-black hover:bg-[#e55a2b] cursor-pointer"
                  onClick={() => removeKeyword(keyword)}
                >
                  {keyword} ×
                </Badge>
              ))}
            </div>
          </div>

          {/* Detection Sensitivity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#ff6b35]" />
              <h3 className="text-white font-semibold">Detection Sensitivity</h3>
            </div>
            <p className="text-[#888888] text-sm">
              Adjust how aggressively content is filtered. Higher values block more content.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#888888]">Conservative</span>
                <span className="text-white font-medium">{sensitivity[0]}%</span>
                <span className="text-[#888888]">Aggressive</span>
              </div>
              <Slider
                value={sensitivity}
                onValueChange={setSensitivity}
                max={100}
                min={0}
                step={5}
                className="w-full"
              />
            </div>
          </div>

          {/* Blocking Delay */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#ff6b35]" />
              <h3 className="text-white font-semibold">Blocking Delay</h3>
            </div>
            <p className="text-[#888888] text-sm">
              Time delay before content is blocked (in milliseconds). Lower values block faster.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#888888]">Instant</span>
                <span className="text-white font-medium">{blockingDelay[0]}ms</span>
                <span className="text-[#888888]">Delayed</span>
              </div>
              <Slider
                value={blockingDelay}
                onValueChange={setBlockingDelay}
                max={2000}
                min={0}
                step={100}
                className="w-full"
              />
            </div>
          </div>

          {/* Notifications & Feedback */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-[#ff6b35]" />
              <h3 className="text-white font-semibold">Notifications & Feedback</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white font-medium">Show Notifications</Label>
                  <p className="text-[#888888] text-xs">Get notified when content is blocked</p>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  className="data-[state=checked]:bg-[#ff6b35]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white font-medium">Sound Effects</Label>
                  <p className="text-[#888888] text-xs">Play sound when blocking content</p>
                </div>
                <Switch
                  checked={soundEffects}
                  onCheckedChange={setSoundEffects}
                  className="data-[state=checked]:bg-[#ff6b35]"
                />
              </div>
            </div>
          </div>

          {/* System Settings */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-[#ff6b35]" />
              <h3 className="text-white font-semibold">System Settings</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white font-medium">Auto-Update Filters</Label>
                  <p className="text-[#888888] text-xs">Automatically update content filters</p>
                </div>
                <Switch
                  checked={autoUpdate}
                  onCheckedChange={setAutoUpdate}
                  className="data-[state=checked]:bg-[#ff6b35]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white font-medium">Anonymous Usage Data</Label>
                  <p className="text-[#888888] text-xs">
                    Help improve Doom Blocker by sharing anonymous usage statistics
                  </p>
                </div>
                <Switch
                  checked={dataCollection}
                  onCheckedChange={setDataCollection}
                  className="data-[state=checked]:bg-[#ff6b35]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t border-[#ff6b35]/20">
            <Button
              onClick={resetToDefaults}
              variant="outline"
              className="flex-1 border-[#ff6b35]/30 text-[#ff6b35] hover:bg-[#ff6b35]/10 bg-transparent"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
            <Button onClick={onClose} className="flex-1 bg-[#ff6b35] hover:bg-[#e55a2b] text-black">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
