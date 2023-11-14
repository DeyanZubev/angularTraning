import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondProjectComponent } from './components/second-project/second-project.component';
import { LessonOneSimpleWebsiteComponent } from './components/lesson-one-simple-website/lesson-one-simple-website.component';
import { CoolHoverAnimationComponent } from './components/cool-hover-animation/cool-hover-animation.component';
import { DynamicCSSChangesColorComponent } from './components/dynamic-csschanges-color/dynamic-csschanges-color.component';

// Import your library
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AddEditRowComponent } from './components/eos-matrix/modals/add-edit-row/add-edit-row.component';
// import { EosMatrixComponent } from './components/eos-matrix/eos-matrix.component';
import { EosMatrixModule } from './components/eos-matrix/eos-matrix.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondProjectComponent,
    LessonOneSimpleWebsiteComponent,
    CoolHoverAnimationComponent,
    DynamicCSSChangesColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    FormsModule,
    HttpClientModule,
    EosMatrixModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
