import { Injectable } from '@nestjs/common';

export type ConversationMode = 'AI_ACTIVE' | 'HUMAN_ACTIVE' | 'WAITING' | 'CLOSED';

@Injectable()
export class ConversationsService {
  private readonly modes = new Map<string, ConversationMode>();

  getMode(tenantId: string, conversationId: string): ConversationMode {
    return this.modes.get(`${tenantId}:${conversationId}`) ?? 'AI_ACTIVE';
  }

  setMode(tenantId: string, conversationId: string, mode: ConversationMode): object {
    this.modes.set(`${tenantId}:${conversationId}`, mode);
    return { tenantId, conversationId, mode, updatedAt: new Date().toISOString() };
  }

  canAiReply(tenantId: string, conversationId: string): boolean {
    return this.getMode(tenantId, conversationId) === 'AI_ACTIVE';
  }
}
