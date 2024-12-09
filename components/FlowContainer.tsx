'use client'

import React, { useCallback, useRef } from 'react'
import { useReactFlow } from 'reactflow'
import { FlowPresentation } from '@/components/FlowPresentation'
import { useScreenFlow } from '@/hooks/useScreenFlow'
import { exportToPDF } from '@/utils/pdfExport'
import { nodeTypes } from '@/components/CustomNodes'

export function FlowContainer() {
  const {
    nodes,
    edges,
    input,
    showAllRequirements,
    onNodesChange,
    onEdgesChange,
    onConnect,
    handleInputChange,
    handleGenerate,
    handleToggleAllRequirements,
  } = useScreenFlow()

  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const flowRef = useRef<HTMLDivElement>(null)
  const { fitView, fitBounds, getNodes, getViewport } = useReactFlow()

  const handleExportPDF = useCallback(() => {
    console.log('Exporting PDF...')
    if (reactFlowWrapper.current) {
      exportToPDF(reactFlowWrapper, fitBounds, getNodes, getViewport, fitView)
        .then(() => console.log('PDF export completed'))
        .catch((error) => console.error('PDF export failed:', error))
    } else {
      console.error('reactFlowWrapper is null')
    }
  }, [fitBounds, getNodes, getViewport, fitView])

  return (
    <FlowPresentation
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      input={input}
      showAllRequirements={showAllRequirements}
      handleInputChange={handleInputChange}
      handleGenerate={handleGenerate}
      handleExportPDF={handleExportPDF}
      handleToggleAllRequirements={handleToggleAllRequirements}
      reactFlowWrapper={reactFlowWrapper}
      flowRef={flowRef}
      nodeTypes={nodeTypes}
    />
  )
}

