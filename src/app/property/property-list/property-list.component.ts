import { Component, OnInit } from '@angular/core';
import { PropertyService} from '../shared/property.service';
import {Property} from '../property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  propertyList: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
   this.propertyService.getPropertyList().subscribe((properties: Property[]) => this.propertyList = properties );
  }

}
