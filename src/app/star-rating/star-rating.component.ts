import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  stars: number[] = [0, 0, 0, 0, 0]; //five empty stars

  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    if (changes) {
      this.fillStars();
    }
  }

  ngOnInit() {}

  // 0.25 - 0.75 - 0.5
  // 0.75 - 1.25 - 1
  // 1.25 - 1.75 -1.5
  // 1.75 - 2.25 - 2
  // 2.25 - 2.75 -2.5
  // > 2.75 <= 3.25 - 3
  // > 3.25 <= 3.75 - 3.5
  // > 3.75 <=  4.25 - 4
  // > 4.25 <= 4.75 - 4.5
  // > 4.75 <= 5 - 5

  fillStars() {
    var starsToFill = this.rating; //round to nearest 0.5
    console.log('s', starsToFill);
    var i = 0;
    while (starsToFill > 0.5) {
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if (starsToFill === 0.5) {
      this.stars[i] = 0.5;
    }
  }
}
