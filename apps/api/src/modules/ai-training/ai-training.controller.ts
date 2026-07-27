import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AiTrainingService } from './ai-training.service';
import { AiProfileInput, KnowledgeInput, TenantAiContext } from './ai-training.types';

@Controller('ai-training')
export class AiTrainingController {
  constructor(private readonly service: AiTrainingService) {}

  @Get('capabilities')
  capabilities(): object {
    return {
      profile: true,
      instructions: true,
      faq: true,
      policies: true,
      responseExamples: true,
      documents: true,
      isolatedByTenant: true,
    };
  }

  @Post('validate-profile')
  validateProfile(
    @Headers('x-tenant-id') tenantId: string,
    @Body() profile: AiProfileInput,
  ): object {
    return { tenantId, valid: this.service.validateProfile(profile).length === 0, errors: this.service.validateProfile(profile) };
  }

  @Post('validate-knowledge')
  validateKnowledge(
    @Headers('x-tenant-id') tenantId: string,
    @Body() item: KnowledgeInput,
  ): object {
    return { tenantId, valid: this.service.validateKnowledge(item).length === 0, errors: this.service.validateKnowledge(item) };
  }

  @Post('preview-prompt')
  previewPrompt(
    @Headers('x-tenant-id') tenantId: string,
    @Body() body: Omit<TenantAiContext, 'tenantId'>,
  ): object {
    return { tenantId, prompt: this.service.buildSystemPrompt({ tenantId, ...body }) };
  }
}
