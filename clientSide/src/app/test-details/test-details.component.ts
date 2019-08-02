import { Component, OnInit, Output } from '@angular/core';
import { TestDetails } from '../Models/TestDetails';
import { TestDetailsService } from '../test-details.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  public TestDetails : TestDetails[];
  public Id :number;
  constructor(private _testDetailService : TestDetailsService ,
              private route : ActivatedRoute,
            ) { }

  ngOnInit() {
    this.getAllTestDetails();
  }

  getAllTestDetails(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.Id = id;
    this._testDetailService.getTestDetails(id).subscribe(testDetails => 
      {
        this.TestDetails = testDetails;
      });
  }

  
}
