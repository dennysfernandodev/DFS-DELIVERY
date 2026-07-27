export type KnowledgeType =
  | 'INSTRUCTION'
  | 'FAQ'
  | 'POLICY'
  | 'RESPONSE_EXAMPLE'
  | 'DOCUMENT';

export interface AiProfileInput {
  assistantName: string;
  tone: string;
  welcomeMessage?: string;
  fallbackMessage?: string;
  humanHandoffText?: string;
  systemInstructions: string;
  model?: string;
  temperature?: number;
  enabled?: boolean;
}

export interface KnowledgeInput {
  type: KnowledgeType;
  title: string;
  content: string;
  priority?: number;
  active?: boolean;
}

export interface TenantAiContext {
  tenantId: string;
  profile: AiProfileInput;
  knowledge: KnowledgeInput[];
}
