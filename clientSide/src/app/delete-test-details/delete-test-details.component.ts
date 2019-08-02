import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestDetailsComponent } from '../test-details/test-details.component';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';
import { TestDetailsService } from '../test-details.service';

@Component({
  selector: 'app-delete-test-details',
  templateUrl: './delete-test-details.component.html',
  styleUrls: ['./delete-test-details.component.css']
})
export class DeleteTestDetailsComponent implements OnInit {

  constructor(private location : Location, private _testDetailsService : TestDetailsService,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  onClick(){
    const id = +this.route.snapshot.paramMap.get('id');
    debugger;
    this._testDetailsService.deleteDetails(id).subscribe();
  }
}
