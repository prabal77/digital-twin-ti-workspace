import { AasstoreService } from '../aasstore/aasstore.service';
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConceptDescription } from 'i40-aas-objects';


@Controller('cds')
export class ConceptDescriptionController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postConceptDescription(obj: ConceptDescription) {
        this.aasStoreService.addConceptDescription(obj);
    }

    @Get()
    public getConceptDescription(): { subModelList: ConceptDescription[] } {
        return {
            subModelList: this.aasStoreService.getAllConceptDescriptions()
        }
    }

    @Put(':id')
    public putConceptDescription(@Param('id') id, obj: ConceptDescription) {
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
