import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app/app.routes';

import { initializeApp as firebaseInitializeApp } from 'firebase/app';
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics';
import {
  provideFirebaseApp,
  initializeApp as angularFireInitializeApp,
} from '@angular/fire/app';
import { provideFirestore, Firestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, Functions, getFunctions } from '@angular/fire/functions';
import { importProvidersFrom, ErrorHandler } from '@angular/core';






bootstrapApplication(AppComponent, {
  providers: [
    // Angular Modules
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes as Route[]),
    provideHttpClient(),
    provideClientHydration(),
    // Firebase and Firestore

    provideFirestore(() => getFirestore() as Firestore),
    provideFunctions(() => getFunctions() as Functions),
  ],
}).catch((err: Error) => console.error('Bootstrap application failed:', err));
