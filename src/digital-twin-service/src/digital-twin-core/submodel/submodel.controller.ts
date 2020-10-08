import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Submodel } from 'i40-aas-objects';
import { AasstoreService } from '../aasstore/aasstore.service';

@Controller('submodel')
export class SubmodelController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postSubmodel(obj: Submodel) {
        this.aasStoreService.addSubmodel(obj);
    }

    @Get()
    public getSubmodel(): { subModelList: Submodel[] } {
        return {
            subModelList: this.aasStoreService.getAllSubmodels()
        }
    }

    @Put(':id')
    public putSubmodel(@Param('id') id, obj: Submodel) {
        this.aasStoreService.updateSubmodelById(id, obj);
    }

    @Get(':id')
    public getSubmodelByID(@Param('id') id): Submodel {
        return this.aasStoreService.getSubmodelByID(id);
    }

    @Delete(':id')
    public deleteSubmodelByID(@Param('id') id) {
        this.aasStoreService.deleteSubmodelByID(id);
    }
}
