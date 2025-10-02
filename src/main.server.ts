import { renderModule } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { config } from './app/app.config.server'; // Certifique-se de que isso exporta 'config'
import { AppComponent } from './app/app.component';
import { StaticProvider } from '@angular/core';
import { Request, Response } from 'express'; // Importando as interfaces corretas do Express

const bootstrap = (req: Request, res: Response) => {
  // Adiciona o caminho base e quaisquer outros providers que sejam necessários para a renderização
  const extraProviders: StaticProvider[] = [
    { provide: APP_BASE_HREF, useValue: req.baseUrl },
    ...(config.providers || []) as StaticProvider[], // Certifique-se de que config.providers existe e está correto
  ];

  return renderModule(AppComponent, {
    document: '<app-root></app-root>',
    url: req.url,
    extraProviders
  }).then(html => {
    // Verifique se há erros e envie a resposta HTML corretamente
    if (html) {
      res.status(200).send(html);
    } else {
      res.status(500).send('Erro ao renderizar o módulo.');
    }
  })
  .catch(err => {
    console.error('Erro durante a renderização:', err);
    res.status(500).send('Erro interno no servidor.');
  });
};

export default bootstrap;
