import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommuneComponent } from './components/commune/commune.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartementTableComponent } from './components/departement-table/departement-table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { FormsModule } from '@angular/forms';
import { CommuneTableComponent } from './components/commune-table/commune-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommuneGraphComponent } from './components/commune-graph/commune-graph.component';
import { TabsModule } from 'ngx-bootstrap/tabs'

@NgModule({
  declarations: [
    AppComponent,
    CommuneComponent,
    HeaderComponent,
    FooterComponent,
    DepartementTableComponent,
    CommuneTableComponent,
    CommuneGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule, // A ajouter manuellement pour récupérer les méthodes GET, POST, etc.
    PaginationModule, // A ajouter manuellement pour faire fonctionner le FormsModule
    FormsModule, // A ajouter obligatoirement pour la pagination
    ToastrModule.forRoot(),
    NgxChartsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
