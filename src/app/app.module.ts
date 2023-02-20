import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StarRatingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
