import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { ConversationMode, ConversationsService } from './conversations.service';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly service: ConversationsService) {}

  @Get(':conversationId/mode')
  getMode(
    @Headers('x-tenant-id') tenantId: string,
    @Param('conversationId') conversationId: string,
  ): object {
    return {
      tenantId,
      conversationId,
      mode: this.service.getMode(tenantId, conversationId),
      canAiReply: this.service.canAiReply(tenantId, conversationId),
    };
  }

  @Post(':conversationId/mode')
  setMode(
    @Headers('x-tenant-id') tenantId: string,
    @Param('conversationId') conversationId: string,
    @Body() body: { mode: ConversationMode },
  ): object {
    return this.service.setMode(tenantId, conversationId, body.mode);
  }
}
