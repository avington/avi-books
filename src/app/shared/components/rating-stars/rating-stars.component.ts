import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'avi-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  @Input() averageRating: number;

  star1: string;
  star2: string;
  star3: string;
  star4: string;
  star5: string;

  private starO = 'fa-star-o';
  private starHalfO = 'fa-star-half-o';
  private star = 'fa-star';

  constructor() {
  }

  ngOnInit() {
    if (this.averageRating < 0.5) {
      this.addClasses(this.starO, this.starO, this.starO, this.starO, this.starO);
    }
    if (this.averageRating >= 0.5 && this.averageRating <= 0.99) {
      this.addClasses(this.starHalfO, this.starO, this.starO, this.starO, this.starO);
    }
    if (this.averageRating >= 1 && this.averageRating <= 1.49) {
      this.addClasses(this.star, this.starO, this.starO, this.starO, this.starO);
    }
    if (this.averageRating >= 1.5 && this.averageRating <= 1.99) {
      this.addClasses(this.star, this.starHalfO, this.starO, this.starO, this.starO);
    }
    if (this.averageRating >= 2.0 && this.averageRating < 2.49) {
      this.addClasses(this.star, this.star, this.starO, this.starO, this.starO);
    }
    if (this.averageRating >= 2.5 && this.averageRating <= 2.99) {
      this.addClasses(this.star, this.star, this.starHalfO, this.starO, this.starO);
    }
    if (this.averageRating >= 3.0 && this.averageRating <= 3.49) {
      this.addClasses(this.star, this.star, this.star, this.starO, this.starO);
    }
    if (this.averageRating >= 3.5 && this.averageRating <= 3.99) {
      this.addClasses(this.star, this.star, this.star, this.starHalfO, this.starO);
    }
    if (this.averageRating >= 4.0 && this.averageRating <= 4.49) {
      this.addClasses(this.star, this.star, this.star, this.star, this.starO);
    }
    if (this.averageRating >= 4.5 && this.averageRating <= 4.99) {
      this.addClasses(this.star, this.star, this.star, this.star, this.starHalfO);
    }
    if (this.averageRating === 5.0) {
      this.addClasses(this.star, this.star, this.star, this.star, this.star);
    }
  }

  private addClasses(star1: string, star2: string, star3: string, star4: string, star5: string) {
    this.star1 = star1;
    this.star2 = star2;
    this.star3 = star3;
    this.star4 = star4;
    this.star5 = star5;

  }
}
