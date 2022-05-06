import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';

// app.module bundles all our services and modules together
@Module({
  imports: [

    // @forRoot -> Loads 'dynamic modules'
    ConfigModule.forRoot({isGlobal: true}),
    
    // ORM basically allows access to database from OOP language
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRESSS_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // TODO: Don't use in production

    }),
    
    FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
