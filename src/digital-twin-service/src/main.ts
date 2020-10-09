import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = '';
	app.setGlobalPrefix(globalPrefix);
	const port = process.env.PORT || 80;
	const appName = process.env.APPLICATION_NAME || 'twin-local';
	await app.listen(port, () => {
		Logger.log(`Started "${appName}" application Listening at http://localhost:` + port + '/' + globalPrefix);
	});
}
bootstrap();
