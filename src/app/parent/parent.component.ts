import { CardsService } from './../services/cards.srvice';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  active: boolean;
  caregory: string;
  cards: Card[] = [];
  categoryName: string;

  constructor(private route: ActivatedRoute, private cardService: CardsService) { 
    this.route.params.subscribe(params => {
      if (params) {
        this.caregory = params.category;
        this.fetchCategoryById(this.caregory);
        localStorage.setItem('category', params.category);
      } else if (localStorage.getItem('category')) {
        this.fetchCategoryById(localStorage.getItem('category'))
      }

    })
   }

  ngOnInit() {
    
  }

  fetchCategoryById(id) {
    this.cardService.fetchCardsByCategoryId(id).subscribe(cards => {
      this.cards = cards;
      switch (id) {
        case '4b20aa37-9e1a-4155-82e0-386d171cb1f0': 
          this.categoryName = "Pets";
          break;
        case 'b0e78282-d457-4790-97f0-d5c0642bee4d': 
          this.categoryName = "Food";
          break;
        case '10a827d5-13b5-4cd6-a2d0-9f22dd7738d1': 
          this.categoryName = "Plants";
          break;
        default: 
          this.categoryName = "Pets";
      }
    })
  }


}
