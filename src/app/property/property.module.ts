import { NgModule } from '@angular/core';
import {CommonModule, UpperCasePipe} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import{ MapModule} from '../common/map/map.module';

import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { PropertyComponent } from './property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

import {PropertyService} from './shared/property.service';



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
     RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule],
  declarations: [
    PropertyListComponent,
    PropertyListItemComponent,
    PropertyComponent,
    PropertyDetailComponent
  ],
  providers: [
    PropertyService
  ]
})
export class PropertyModule { }
