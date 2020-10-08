import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Submodel } from 'i40-aas-objects';
import { KindEnum } from 'i40-aas-objects/dist/src/types/KindEnum';
import { AasstoreService } from '../aasstore/aasstore.service';

@Controller('submodel')
export class SubmodelController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postSubmodel(@Body() obj: any) {
        console.log('POST SUBMODEL2:', obj);
        this.aasStoreService.addSubmodel(obj);
    }

    @Get()
    public getSubmodel(): { subModelList: Submodel[] } {
        return {
            subModelList: this.aasStoreService.getAllSubmodels()
        }
    }

    @Put(':id')
    public putSubmodel(@Param('id') id, @Body() obj: Submodel) {
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
