import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),


    CommonModule,

    FormsModule,
    
    DatePipe,
    BrowserAnimationsModule,


    BrowserModule,
    HttpClient,
    ReactiveFormsModule,
    provideHttpClient(withInterceptorsFromDi()),
 
  ]
};