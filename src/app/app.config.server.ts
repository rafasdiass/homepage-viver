import { mergeApplicationConfig, ApplicationConfig, StaticProvider } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Define o serverConfig
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// Mescla a configuração da aplicação com a configuração do servidor
const mergedConfig = mergeApplicationConfig(appConfig, serverConfig);

// Converte os providers para StaticProvider[], se necessário
export const config: { providers: StaticProvider[] } = {
  providers: mergedConfig.providers as StaticProvider[],
};
