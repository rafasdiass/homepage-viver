// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    // Angular Modules
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes as Route[]),
    provideHttpClient(),
    provideClientHydration()
  ],
}).catch((err: Error) => console.error('Bootstrap application failed:', err));

