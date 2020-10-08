import { AasstoreService } from '../aasstore/aasstore.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConceptDescription } from 'i40-aas-objects';


@Controller('cds')
export class ConceptDescriptionController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postConceptDescription(@Body() obj: ConceptDescription) {
        this.aasStoreService.addConceptDescription(obj);
    }

    @Get()
    public getConceptDescription(): { conceptDescriptionList: ConceptDescription[] } {
        return {
            conceptDescriptionList: this.aasStoreService.getAllConceptDescriptions()
        }
    }

    @Put(':id')
    public putConceptDescription(@Param('id') id, @Body() obj: ConceptDescription) {
        this.aasStoreService.updateConceptDescriptionById(id, obj);
    }

    @Get(':id')
    public getConceptDescriptionByID(@Param('id') id): ConceptDescription {
        return this.aasStoreService.getConceptDescriptionByID(id);
    }

    @Delete(':id')
    public deleteConceptDescriptionByID(@Param('id') id) {
        this.aasStoreService.deleteConceptDescriptionByID(id);
    }
}
