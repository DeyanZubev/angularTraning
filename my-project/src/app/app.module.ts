import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondProjectComponent } from './components/second-project/second-project.component';
import { LessonOneSimpleWebsiteComponent } from './components/lesson-one-simple-website/lesson-one-simple-website.component';
import { CoolHoverAnimationComponent } from './components/cool-hover-animation/cool-hover-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondProjectComponent,
    LessonOneSimpleWebsiteComponent,
    CoolHoverAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
