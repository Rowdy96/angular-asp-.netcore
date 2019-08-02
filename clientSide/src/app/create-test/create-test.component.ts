import { Component, OnInit } from '@angular/core';
import { Test } from '../Models/Test';
import { TestService } from '../test.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  testForm = new FormGroup({
  testType : new FormControl(''),
  date: new FormControl('')
  });

  test : Test = new Test();
  constructor(private _testService : TestService,private _route: Router ) { }

  ngOnInit() {
    this.test.testId = 0;
    this.test.date = null;
    this.test.numOfParticipants = 0;
    this.test.testType="";

  }

  onSubmit(){
    this.test.date=this.testForm.value.date;
    this.test.testType=this.testForm.value.testType;
    console.log(this.test);
    this.AddTest(this.test);
  }

  AddTest(test : Test):void {
    this._testService.AddNewTest(test).subscribe(test =>{
    });
  }



}
