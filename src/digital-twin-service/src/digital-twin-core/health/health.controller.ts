import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthController {

    @Get('health')
    public healthStatus() {
        return { status: 'UP' };
    }

    @Get("/environment")
    public env() {
        return {
            "appName": process.env.APPLICATION_NAME,
            "platformUrl": process.env.C8Y_BASEURL,
            "microserviceIsolation": process.env.C8Y_MICROSERVICE_ISOLATION,
            "tenant": process.env.C8Y_BOOTSTRAP_TENANT,
            "bootstrapUser": process.env.C8Y_BOOTSTRAP_USER,
            "bootstrapPassword": process.env.C8Y_BOOTSTRAP_PASSWORD
        };
    }
}
