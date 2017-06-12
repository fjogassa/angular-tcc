import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule, GrowlModule, DataListModule} from 'primeng/primeng';
import { ToolbarModule, ButtonModule, SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursoComponent } from './lista/lista.component';
import { DetalheCursoComponent } from './detalhe/detalhe.component';
import { CrudCursoComponent } from './crud/crud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    CursoRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,
    DataTableModule,SharedModule,InputTextModule
  ],
  declarations: [
    CrudCursoComponent,
    ListaCursoComponent,
    DetalheCursoComponent
  ]
})
export class CursoModule { 

  constructor() {
     console.log("CursoModule");
  }
}
