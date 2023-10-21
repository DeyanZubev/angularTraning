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


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondProjectComponent,
    LessonOneSimpleWebsiteComponent,
    CoolHoverAnimationComponent,
    DynamicCSSChangesColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
