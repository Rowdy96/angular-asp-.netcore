import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../test-details.service';
import { ActivatedRoute } from '@angular/router';
import { TestDetails } from '../Models/TestDetails';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-test-details',
  templateUrl: './edit-test-details.component.html',
  styleUrls: ['./edit-test-details.component.css']
})
export class EditTestDetailsComponent implements OnInit {

  private _testDetailService : TestDetailsService;
  private _route : ActivatedRoute;
  testDetails : TestDetails = new TestDetails();
  detailsId:number;

  EditForm = new FormGroup({
    athleteName : new FormControl(),
    distance : new FormControl()
  });

  constructor(testDetailService : TestDetailsService,route: ActivatedRoute) {
    this._testDetailService = testDetailService;
    this._route = route;

   }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._testDetailService.getTestDetailsById(id).subscribe(testDetails =>
      {
        this.testDetails = testDetails;
      });
  }

  update(){
    this.testDetails.athleteName = this.EditForm.value.athleteName;
    this.testDetails.distance = this.EditForm.value.distance;
    console.log(this.testDetails);
    debugger;
    this._testDetailService.updateDetails(this.testDetails.athleteId,this.testDetails).subscribe(res =>{
     alert("updated succesfully");
    });
  }

  

}
