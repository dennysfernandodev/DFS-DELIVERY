import { Controller, Get, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiTrainingModule } from './modules/ai-training/ai-training.module';
import { ConversationsModule } from './modules/conversations/conversations.module';

@Controller('health')
class HealthController {
  @Get()
  check(): { status: string; service: string } {
    return { status: 'ok', service: 'dfs-delivery-api' };
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AiTrainingModule,
    ConversationsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
