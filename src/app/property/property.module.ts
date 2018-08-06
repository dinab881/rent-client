import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { PropertyComponent } from './property.component';
import {PropertyService} from './shared/property.service';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  { path: 'properties',
    component: PropertyComponent,
    children: [
      { path: ':id', component: PropertyDetailComponent },
      { path: '', component: PropertyListComponent}
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [
    PropertyListComponent,
    PropertyListItemComponent,
    PropertyComponent,
    PropertyDetailComponent],
  providers: [
    PropertyService
  ]
})
export class PropertyModule { }
