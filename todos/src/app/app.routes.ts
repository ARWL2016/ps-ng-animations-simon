import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component'; 
import { HowtoComponent } from './howto/howto.component'; 
import { ExamplesComponent } from './examples/examples.component'; 

export const router: Routes = [
  { path: 'howto', component: HowtoComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '', redirectTo: 'howto', pathMatch: 'full'}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router); 