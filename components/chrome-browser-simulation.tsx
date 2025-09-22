"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Star,
  Lock,
  Search,
  User,
  Grid3X3,
  Settings,
  Download,
  Bookmark,
  Menu,
  Play,
  MoreVertical,
  Pin,
  Shield,
  Eye,
  Zap,
  Camera,
  Globe,
} from "lucide-react"
import ExtensionPopup from "./extension-popup"

interface ChromeBrowserSimulationProps {
  showExtensionsDropdown?: boolean
  onExtensionsClick?: () => void
  extensionsPinned?: boolean
  onPinExtension?: () => void
  showExtensionPopup?: boolean
  onExtensionPopupToggle?: (isOpen: boolean) => void
}

export default function ChromeBrowserSimulation({
  showExtensionsDropdown = false,
  onExtensionsClick,
  extensionsPinned = false,
  onPinExtension,
  showExtensionPopup = false,
  onExtensionPopupToggle,
}: ChromeBrowserSimulationProps) {
  const [currentUrl, setCurrentUrl] = useState("https://youtube.com")

  const handlePinClick = () => {
    if (onPinExtension) {
      onPinExtension()
    }
  }

  const handlePinnedExtensionClick = () => {
    const newState = !showExtensionPopup
    if (onExtensionPopupToggle) {
      onExtensionPopupToggle(newState)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Browser Window */}
      <Card className="bg-[#2a2a2a] border-[#ff6b35]/30 overflow-hidden tutorial-shadow">
        {/* Browser Top Bar */}
        <div className="bg-[#1a1a1a] border-b border-[#ff6b35]/20 p-2">
          <div className="flex items-center justify-between">
            {/* Window Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Tab */}
            <div className="flex-1 mx-4">
              <div className="bg-[#2a2a2a] border border-[#ff6b35]/20 rounded-t-lg px-4 py-2 max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                    <Play className="w-2 h-2 text-white fill-white" />
                  </div>
                  <span className="text-sm text-white truncate">YouTube</span>
                  <button className="text-[#888888] hover:text-white">×</button>
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        {/* Browser Toolbar */}
        <div className="bg-[#1a1a1a] border-b border-[#ff6b35]/20 p-3">
          <div className="flex items-center space-x-3">
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-1">
              <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]">
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Address Bar */}
            <div className="flex-1 flex items-center bg-[#2a2a2a] border border-[#ff6b35]/20 rounded-full px-4 py-2">
              <Lock className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-white text-sm flex-1">{currentUrl}</span>
              <Star className="w-4 h-4 text-[#888888] ml-2" />
            </div>

            {/* Browser Actions */}
            <div className="flex items-center space-x-1">
              <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]">
                <Download className="w-4 h-4" />
              </Button>

              {/* Extensions Button - Tutorial Target */}
              <div className="relative">
                <Button
                  size="sm"
                  variant="ghost"
                  className={`text-[#888888] hover:text-white hover:bg-[#2a2a2a] ${showExtensionsDropdown ? "tutorial-glow" : ""}`}
                  onClick={onExtensionsClick}
                  id="extensions-button"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>

                {/* Extensions Dropdown */}
                {showExtensionsDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-[#1a1a1a] border border-[#ff6b35]/30 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Extensions</h3>
                        <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Extension List */}
                      <div className="space-y-3">
                        {/* Doom Blocker Extension */}
                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg border border-[#ff6b35]/20">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                              <img src="/doom-blocker-icon.png" alt="Doom Blocker" className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Doom Blocker</div>
                              <div className="text-[#888888] text-xs">Block unwanted content</div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-[#ff6b35] hover:bg-[#e55a2b] text-black"
                            id="pin-extension-button"
                            onClick={handlePinClick}
                          >
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                              <Bookmark className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Bookmark Manager</div>
                              <div className="text-[#888888] text-xs">Organize bookmarks</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                              <Search className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Search Helper</div>
                              <div className="text-[#888888] text-xs">Enhanced search</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                              <img src="/extension-icon.svg" alt="Extension" className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Puzzle Extension</div>
                              <div className="text-[#888888] text-xs">Custom functionality</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                              <Shield className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Privacy Guard</div>
                              <div className="text-[#888888] text-xs">Protect your privacy</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                              <Eye className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Ad Blocker Plus</div>
                              <div className="text-[#888888] text-xs">Block advertisements</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Speed Booster</div>
                              <div className="text-[#888888] text-xs">Optimize page loading</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                              <Camera className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Screenshot Tool</div>
                              <div className="text-[#888888] text-xs">Capture web pages</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                              <Globe className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">Language Translator</div>
                              <div className="text-[#888888] text-xs">Translate web pages</div>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white">
                            <Pin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pinned Extension (shows after pinning) */}
              {extensionsPinned && (
                <div className="relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-[#ff6b35] hover:text-white hover:bg-[#2a2a2a] tutorial-pulse"
                    id="pinned-doom-blocker"
                    onClick={handlePinnedExtensionClick}
                  >
                    <div className="w-4 h-4 bg-[#ff6b35] rounded flex items-center justify-center">
                      <img src="/doom-blocker-icon.png" alt="Doom Blocker" className="w-3 h-3" />
                    </div>
                  </Button>

                  {/* Extension Popup */}
                  {showExtensionPopup && (
                    <div className="absolute top-full right-0 mt-2 z-50">
                      <ExtensionPopup
                        isOpen={showExtensionPopup}
                        onClose={() => onExtensionPopupToggle && onExtensionPopupToggle(false)}
                      />
                    </div>
                  )}
                </div>
              )}

              <Button size="sm" variant="ghost" className="text-[#888888] hover:text-white hover:bg-[#2a2a2a]">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* YouTube Content */}
        <div className="bg-[#0f0f0f] min-h-[600px]">
          {/* YouTube Header */}
          <div className="bg-[#0f0f0f] border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
                  <Menu className="w-5 h-5" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-white text-xl font-semibold">YouTube</span>
                </div>
              </div>

              <div className="flex-1 max-w-2xl mx-8">
                <div className="flex items-center bg-[#121212] border border-gray-600 rounded-full">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 bg-transparent text-white px-4 py-2 outline-none"
                  />
                  <Button size="sm" className="bg-[#222222] hover:bg-[#333333] rounded-r-full">
                    <Search className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-gray-800">
                  <Grid3X3 className="w-5 h-5" />
                </Button>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Content Area */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Sample YouTube Videos */}
              {[
                {
                  title: "The Weeknd - Starboy (Live From The Victoria's Secret Fashion Show 2016 in Paris)",
                  channel: "The Weeknd",
                  views: "241M views",
                  time: "8 years ago",
                  duration: "3:27",
                  thumbnail: "/thumbnails/weekend.png",
                  blocked: false,
                },
                {
                  title: "Reborn as a FIRE ELEMENTAL in Minecraft!",
                  channel: "Johnny Minecraft",
                  views: "476K views",
                  time: "3 days ago",
                  duration: "23:54",
                  thumbnail: "/thumbnails/minecraft.png",
                  blocked: false,
                },
                {
                  title: "Samsung Galaxy S25/Ultra Impressions: What Happened?",
                  channel: "Marques Brownlee",
                  views: "5.9M views",
                  time: "7 months ago",
                  duration: "16:04",
                  thumbnail: "/thumbnails/marques.png",
                  blocked: false,
                },
                {
                  title: "Shakira - Waka Waka (This Time for Africa)",
                  channel: "Shakira",
                  views: "4.6M views",
                  time: "15 years ago",
                  duration: "3:30",
                  thumbnail: "/thumbnails/shakira.png",
                  blocked: false,
                },
                {
                  title: "20 System Design Concepts Explained in 10 Minutes",
                  channel: "NeetCode",
                  views: "23K views",
                  time: "10 days ago",
                  duration: "10:00",
                  thumbnail: "/thumbnails/neetcode.png",
                  blocked: false,
                },
                {
                  title: "Luis Fonsi - Despacito ft. Daddy Yankee",
                  channel: "Luis Fonsi",
                  views: "8.82B views",
                  time: "8 years ago",
                  duration: "4:41",
                  thumbnail: "/thumbnails/despacito.png",
                  blocked: false,
                },
                {
                  title: "brother may I have some oats",
                  channel: "burialgoods",
                  views: "11M views",
                  time: "1 year ago",
                  duration: "2:57",
                  thumbnail: "/thumbnails/oats-meme.png",
                  blocked: false,
                },
                {
                  title: "University Life: A Day in the Life",
                  channel: "CHAGKY SUSSEX",
                  views: "892K views",
                  time: "2 weeks ago",
                  duration: "8:45",
                  thumbnail: "/thumbnails/chagky-sussex.png",
                  blocked: false,
                },
                {
                  title: "5 Rules to Attack Correctly - Chess Strategy",
                  channel: "Ajedrez con Concepto",
                  views: "1.2M views",
                  time: "3 months ago",
                  duration: "12:45",
                  thumbnail: "/thumbnails/chess-tutorial.png",
                  blocked: false,
                },
              ].map((video, index) => (
                <Card
                  key={index}
                  className={`${video.blocked ? "bg-[#1a1a1a] opacity-50" : "bg-[#1a1a1a]"} border-gray-800 overflow-hidden hover:bg-[#222222] transition-colors relative`}
                >
                  {video.blocked && (
                    <div className="absolute inset-0 bg-[#ff6b35]/20 flex items-center justify-center z-10">
                      <div className="bg-[#ff6b35] text-black px-2 py-1 rounded text-xs font-bold">BLOCKED</div>
                    </div>
                  )}
                  <div className="aspect-video bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                    {typeof video.thumbnail === "string" && video.thumbnail.startsWith("/") ? (
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-4xl">{video.thumbnail}</div>
                    )}
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-xs mb-1">{video.channel}</p>
                    <p className="text-gray-400 text-xs">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
