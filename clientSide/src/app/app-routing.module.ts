import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { TestDetailsComponent } from './test-details/test-details.component';
import { EditTestDetailsComponent } from './edit-test-details/edit-test-details.component';
import { DeleteTestDetailsComponent } from './delete-test-details/delete-test-details.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';


const routes: Routes = [
  {path:'' ,component:TestComponent ,pathMatch : "full"},
  {path:'create',component:CreateTestComponent},
  {path:'addAthlete/:id',component:AddAthleteComponent},
  {path:'alltestDetails/:id',component:TestDetailsComponent},
  {path:'delete/:id' ,component:DeleteTestComponent},
  {path:'alltestDetails/:testId/testDetails/:id',component:EditTestDetailsComponent},
  {path:'deleteAthlete/:id',component:DeleteTestDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
