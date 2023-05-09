import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { join } from 'path';
import { TodoModule } from './modules/todo/todo.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MONGO_SERVER } from './config';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(MONGO_SERVER, {
      connectTimeoutMS: 10000,
      user: '',
      pass: '',
      dbName: 'demo',
      autoCreate: true,
      keepAlive: true,
      keepAliveInitialDelay: 300000,
      retryAttempts: 10,
      retryDelay: 5000,
      family: 4,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: true,
    }),
    TodoModule,
  ],
  providers: [AppService],
})
export class AppModule {}
