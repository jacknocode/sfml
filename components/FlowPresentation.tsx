'use client'

import React from 'react'
import ReactFlow, { 
  Controls, 
  MiniMap, 
  Background, 
  Panel,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { InputArea } from '@/components/InputArea'
import { FlowPresentationProps } from '@/types'

const defaultEdgeOptions = {
  type: 'smoothstep',
  style: { stroke: '#9CA3AF', strokeWidth: 2 },
  markerEnd: {
    type: 'arrowclosed',
    width: 20,
    height: 20,
    color: '#9CA3AF',
  },
}

export const FlowPresentation: React.FC<FlowPresentationProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  input,
  showAllRequirements,
  handleInputChange,
  handleGenerate,
  handleExportPDF,
  handleToggleAllRequirements,
  reactFlowWrapper,
  flowRef,
  nodeTypes,
}) => {
  return (
    <div className="w-full h-full" ref={reactFlowWrapper} style={{ height: '100vh' }}>
      <div ref={flowRef} className="w-full h-full" style={{ height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          style={{ height: '100%' }}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} color="#E5E7EB" />
          <Panel position="bottom-center" className="bg-transparent p-2 mb-2 w-full max-w-3xl">
            <InputArea 
              value={input} 
              onChange={handleInputChange}
              onGenerate={handleGenerate}
              onExportPDF={handleExportPDF}
              showAllRequirements={showAllRequirements}
              onToggleAllRequirements={handleToggleAllRequirements}
            />
          </Panel>
        </ReactFlow>
      </div>
    </div>
  )
}

