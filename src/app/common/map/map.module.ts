import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6yZ3SckVA1fNf9R0QmZQXa6i5SVgHRU0'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [ MapService, CamelizePipe]
})
export class MapModule { }
