'use client'

import React from 'react'
import { ArrowUp, FileDown, Minimize2, Maximize2, ToggleLeft, ToggleRight } from 'lucide-react'
import { InputAreaProps } from '@/types'

export const InputArea: React.FC<InputAreaProps> = ({ 
  value, 
  onChange, 
  onGenerate, 
  onExportPDF, 
  showAllRequirements, 
  onToggleAllRequirements 
}) => {
  const [isMinimized, setIsMinimized] = React.useState(false)

  return (
    <div className={`w-full bg-white border border-[#E5E7EB] rounded-lg p-2 shadow-sm transition-all duration-300 ${isMinimized ? 'h-12' : 'h-40'}`}>
      {!isMinimized && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-24 p-2 text-sm bg-transparent resize-none focus:outline-none border border-[#E5E7EB] rounded mb-2 text-[#1F2937]"
          placeholder="Enter screen flow description..."
        />
      )}
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-2">
          <button
            onClick={onExportPDF}
            className="p-2 bg-white text-[#3B82F6] border border-[#3B82F6] rounded-lg hover:bg-[#EBF5FF] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
            title="Export PDF"
          >
            <FileDown size={16} />
          </button>
          <button
            onClick={onToggleAllRequirements}
            className="p-2 bg-white text-[#3B82F6] border border-[#3B82F6] rounded-lg hover:bg-[#EBF5FF] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
            title={showAllRequirements ? "Hide all requirements" : "Show all requirements"}
          >
            {showAllRequirements ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onGenerate}
            className="p-2 bg-[#3B82F6] text-white border border-[#3B82F6] rounded-lg hover:bg-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
            title="Generate"
          >
            <ArrowUp size={16} />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 bg-white text-[#4B5563] border border-[#4B5563] rounded-lg hover:bg-[#F3F4F6] focus:outline-none focus:ring-1 focus:ring-[#4B5563]"
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}

