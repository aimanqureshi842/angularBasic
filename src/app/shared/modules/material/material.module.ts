import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


const matArr=[MatCardModule,MatButtonModule,MatIconModule,MatTableModule]
@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports:[...matArr]
})
export class MaterialModule { }
