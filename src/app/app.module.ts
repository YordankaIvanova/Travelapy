import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { HomeModule } from '@modules/home/home.module';
import { MaterialModule } from './material.module';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { SearchModule } from '@modules/search/search.module';
import { TravelJournalModule } from './modules/travel-journal/travel-journal.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    SearchModule,
    ReactiveFormsModule,
    FormsModule,
    TravelJournalModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
