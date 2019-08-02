import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { AddTestDetailsComponent } from './add-test-details/add-test-details.component';
import { EditTestDetailsComponent } from './edit-test-details/edit-test-details.component';
import { DeleteTestDetailsComponent } from './delete-test-details/delete-test-details.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { AddAthleteComponent } from './add-athlete/add-athlete.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CreateTestComponent,
    TestDetailsComponent,
    AddTestDetailsComponent,
    EditTestDetailsComponent,
    DeleteTestDetailsComponent,
    DeleteTestComponent,
    AddAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
