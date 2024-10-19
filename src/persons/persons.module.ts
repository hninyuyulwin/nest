import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

@Module({
  controllers: [PersonsController],
  providers: [
    {
      provide : 'PERSON_SERVICE',
      useClass : PersonsService
    },
  ],
})
export class PersonsModule {}
