import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { CursoService } from './curso.service';
import { AlunoService} from './aluno.service';
import { DisciplinaService } from './disciplina.service';
import { AlunoModule} from './aluno/aluno.module';
import { CursoModule} from './curso/curso.module';
import { DisciplinaModule} from './disciplina/disciplina.module';

import { InicioComponent } from './inicio/inicio.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule,AlunoModule,DisciplinaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule    
  ],
  providers: [CursoService, AlunoService, DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
