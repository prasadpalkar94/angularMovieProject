import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialComponents =[MatIconModule,MatCardModule,MatButtonModule,MatButtonToggleModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
