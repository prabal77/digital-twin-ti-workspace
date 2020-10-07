import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Asset } from 'i40-aas-objects';
import { AasstoreService } from 'src/aasstore/aasstore.service';

@Controller('asset')
export class AssetController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postAsset(obj: Asset) {
        this.aasStoreService.addAsset(obj);
    }

    @Get()
    public getAsset(): { subModelList: Asset[] } {
        return {
            subModelList: this.aasStoreService.getAllAssets()
        }
    }

    @Put(':id')
    public putAsset(@Param('id') id, obj: Asset) {
        this.aasStoreService.updateAssetById(id, obj);
    }

    @Get(':id')
    public getAssetByID(@Param('id') id): Asset {
        return this.aasStoreService.getAssetByID(id);
    }

    @Delete(':id')
    public deleteAssetByID(@Param('id') id) {
        this.aasStoreService.deleteAssetByID(id);
    }
}
