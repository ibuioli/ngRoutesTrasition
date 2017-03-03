import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';

export const router: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'section', component: SectionComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
