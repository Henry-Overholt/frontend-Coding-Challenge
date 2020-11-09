import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { EditEnrolleeComponent } from './edit-enrollee/edit-enrollee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'enrollee', component: EnrolleeComponent },
  { path: 'enrollee/edit', component: EditEnrolleeComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
