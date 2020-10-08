import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Injectable()
export class Dbconnection implements OnModuleDestroy, OnModuleInit {
    private connection: Db;
    private client: MongoClient;

    constructor() { }

    async onModuleInit() {
        // Connection URL
        const url = 'mongodb://localhost:27017';
        // Database Name
        const dbName = 'digital_twin_db';
        // Create a new MongoClient
        // this.client = new MongoClient(url);
        // await this.client.connect();
        // this.connection = this.client.db(dbName);
    }

    async onModuleDestroy() {
        // await this.client.close()
    }

    public getCollection(collectionName: string) {
        // return this.connection.collection(collectionName);
    }
}
