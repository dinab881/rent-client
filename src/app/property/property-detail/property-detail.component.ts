import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PropertyService} from '../shared/property.service';
import {Property} from '../property.model';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  property: Property;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getProperty(params['id']);
    });
  }

  getProperty(id: string) {
    this.propertyService.getPropertyById(id).subscribe( (property: Property) => {
      this.property = property;
    });
  }

}
