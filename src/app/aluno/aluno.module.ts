import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';

import { AlunoRoutingModule } from './aluno-routing.module';
import { ListaAlunoComponent } from './lista/lista.component';
import { CrudAlunoComponent } from './crud/crud.component';
import { DetalheAlunoComponent } from './detalhe/detalhe.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, PanelModule,
    AlunoRoutingModule, BrowserAnimationsModule, AccordionModule,
    GrowlModule, DataListModule, ToolbarModule, 
    ButtonModule, SplitButtonModule, DataTableModule, 
    SharedModule, InputTextModule, AutoCompleteModule
  ],
  declarations: [
    ListaAlunoComponent, 
    CrudAlunoComponent, 
    DetalheAlunoComponent
  ]
})
export class AlunoModule { }
