import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss']
})
export class PropertyListItemComponent implements OnInit {

  @Input() property: any;

  constructor() { }

  ngOnInit() {
  }

}
