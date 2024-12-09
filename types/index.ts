import { Node, Edge, Connection, NodeTypes, EdgeTypes } from 'reactflow'
import { IconType } from '../utils/iconMapping'

export interface ParsedItem {
  type: IconType | 'ellipse'
  text: string
  isSeparator?: boolean
  connection?: string
}

export interface Requirement {
  category: 'P' | 'S' | 'A' | 'U'
  content: string
}

export interface CustomNodeData {
  label: string
  items: ParsedItem[]
  requirements: Requirement[]
  showAllRequirements: boolean
}

export interface CustomNodeProps {
  id: string
  data: CustomNodeData
  onDisconnect?: (id: string) => void
}

export interface FlowPresentationProps {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: (changes: any) => void
  onEdgesChange: (changes: any) => void
  onConnect: (connection: Connection) => void
  input: string
  showAllRequirements: boolean
  handleInputChange: (value: string) => void
  handleGenerate: () => void
  handleExportPDF: () => void
  handleToggleAllRequirements: () => void
  reactFlowWrapper: React.RefObject<HTMLDivElement>
  flowRef: React.RefObject<HTMLDivElement>
  nodeTypes: NodeTypes
  edgeTypes: EdgeTypes
}

export interface FlowContainerProps {
  nodeTypes: NodeTypes
  edgeTypes: EdgeTypes
}

export interface InputAreaProps {
  value: string
  onChange: (value: string) => void
  onGenerate: () => void
  onExportPDF: () => void
  showAllRequirements: boolean
  onToggleAllRequirements: () => void
}

export interface PDFExportButtonPresentationProps {
  isGenerating: boolean
  onExportPDF: () => void
}

