import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  constructor(private router:Router){

  }
filterData:any = {region:'',area:''}
// @Output()
// filterChanged:EventEmitter<any> = new EventEmitter<any>()

filter(){
this.router.navigate(['jobs',this.filterData.region, this.filterData.area])
}

}
