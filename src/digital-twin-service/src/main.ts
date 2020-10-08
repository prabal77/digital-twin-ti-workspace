import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { Client, FetchClient, BasicAuth } = require("@c8y/client");

const baseUrl = process.env.C8Y_BASEURL;
let cachedUsers = [];

// Get the subscribed users
async function getUsers() {
	const {
		C8Y_BOOTSTRAP_TENANT: tenant,
		C8Y_BOOTSTRAP_USER: user,
		C8Y_BOOTSTRAP_PASSWORD: password
	} = process.env;

	const client = new FetchClient(new BasicAuth({ tenant, user, password }), baseUrl);
	const res = await client.fetch("/application/currentApplication/subscriptions");

	return res.json();
}


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = '';
	app.setGlobalPrefix(globalPrefix);
	const port = process.env.PORT || 80;
	const appName = process.env.APPLICATION || 'twin-local';
	await app.listen(port, () => {
		Logger.log(`Started "${appName}" application Listening at http://localhost:` + port + '/' + globalPrefix);
	});
}
bootstrap();
