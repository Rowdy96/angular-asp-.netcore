import { Component, OnInit } from '@angular/core';
import { Test } from '../Models/Test';
import { TestService } from '../test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  private _router : Router;
  private _testService : TestService;
  public TestList : Test[];

  constructor(testService : TestService ,router : Router) {
    this._testService = testService;
    this._router = router;
  }

  ngOnInit() {
    this.getTests();
   
  }

  onClick(id : number){
    
    this._router.navigate[`./testDetails/${id}`];
    alert(id);
  }

  getTests()  : void{
    this._testService.getAllTest().subscribe(testList => 
      {
        this.TestList = testList;
      });

  }
}
