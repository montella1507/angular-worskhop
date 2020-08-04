import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedLength = 1;
  products = [
    {
      "id": "product_84",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "hoodie",
      "imageUrl": "assets/images/woman.jpg",
      "name": " Knitted High Neck Sweater",
      "price": 32.99,
      "filters": {
        "category": "women",
        "subcategory": "dresses",
        "colors": ["blue", "red", "orange", "white"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/woman.jpg"
      ]
    },
  
    {
      "id": "product_84",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "hoodie",
      "imageUrl": "assets/images/woman.jpg",
      "name": " Knitted High Neck Sweater",
      "price": 32.99,
      "filters": {
        "category": "women",
        "subcategory": "dresses",
        "colors": ["blue", "red", "orange", "white"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
  
  
  
  
  
  
  
  
    {
      "id": "product_84",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "hoodie",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg",
      "name": "Hoodie",
      "price": 32.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue", "red", "orange", "white"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_85",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-jumper-grey-AdobeStock_255963415.jpg",
      "name": "Jumper",
      "price": 25.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
  
    {
      "id": "product_86",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "stripped-jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-stripped jumper-brown-AdobeStock_247210490.jpg",
      "name": " Stripped Jumper",
      "price": 78.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_87",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "zipped-high-neck-sweater",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-zipped high neck sweater-green-iStock-1161124398.jpg",
      "name": "Zipped High Neck Sweater",
      "price": 47.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_88",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-jumper-with-pocket",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-long sleeve jumper with pocket-ecru-iStock-907860680.jpg",
      "name": "Long Sleeve Jumper With Pocket",
      "price": 11.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_89",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "neck-sweater",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-high neck sweater-black-iStock-1080430468.jpg",
      "name": "   High Neck Sweater",
      "price": 95.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_90",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-long sleeve jumper-dark_blue-AdobeStock_256482162.jpg",
      "name": "Long Sleeve Jumper",
      "price": 81.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_91",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-sweatshirt",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-Sweaters-long sleeve sweatshirt-mint-AdobeStock_236183209.jpg",
      "name": "Long Sleeve Sweatshirt",
      "price": 89.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_92",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "man-basic-t-shirt",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Man Basic T Shirt",
      "price": 49.99,
      "filters": {
        "category": "men",
        "subcategory": "sweaters",
        "colors": ["blue"],
        "sizes": ["xl"],
        "lengths": ["midi", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-Sweaters-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_84",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "hoodie",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Hoodie",
      "price": 32.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue", "red", "orange", "white"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_85",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Jumper",
      "price": 25.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
  
    {
      "id": "product_86",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "stripped-jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": " Stripped Jumper",
      "price": 78.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_87",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "zipped-high-neck-sweater",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Zipped High Neck Sweater",
      "price": 47.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_88",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-jumper-with-pocket",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Long Sleeve Jumper With Pocket",
      "price": 11.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_89",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "neck-sweater",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "   High Neck Sweater",
      "price": 95.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_90",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-jumper",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Long Sleeve Jumper",
      "price": 81.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg",
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_91",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "long-sleeve-sweatshirt",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Long Sleeve Sweatshirt",
      "price": 89.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    },
    {
      "id": "product_92",
      "description": "Suscipit dolorem harum commodi quasi facere. Cumque voluptatibus et eos hic excepturi adipisci sunt. Corrupti praesentium et voluptatem iste ut.",
      "url": "man-basic-t-shirt",
      "imageUrl": "assets/images/db-seeds-photos-products-Men-T-shirts-basic%20t-shirt-white-AdobeStock_121795218.jpg",
      "name": "Man Basic T Shirt",
      "price": 49.99,
      "filters": {
        "category": "men",
        "subcategory": "t-shirts",
        "colors": ["blue"],
        "sizes": ["xl", "l", "s"],
        "lengths": ["midi", "macro", "nano", "maxi"]
      },
      "images": [
        "assets/images/db-seeds-photos-products-Men-t-shirts-hoodie-grey-AdobeStock_123227130.jpg"
      ]
    }
  ];
  

}
