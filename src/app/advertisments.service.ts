import { Injectable } from '@angular/core';

	interface Adv {

  } <!--should here define each type of each data -->

@Injectable()
export class AdvertismentsService {

  getAll() : Adv[] {
  
  return[

  	{
  		"id":1,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img1",
  		"area":35

  	},
  	{
  		"id":2,
  		"type": "Kaufen",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img2",
  		"area":35
  	},
  	{
  		"id":3,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img3",
  		"area":35
  	},
  	{
  		"id":4,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img4",
  		"area":35
  	},
  	{
  		"id":5,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img5",
  		"area":355
  	},
  	{
  		"id":6,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img6",
  		"area":35
  	},
  	{
  		"id":7,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img1",
  		"area":35
  	},
  	{
  		"id":8,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img2",
  		"area":35
  	},
  	{
  		"id":9,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img3",
  		"area":35
  	},
  	{
  		"id":10,
  		"type": "mieten",
  		"detail":"Elf Wohnungen auf einmal - 5% Mie-trendite! MFH in Ettlingen - Scholl-",
  		"price":1.954,
  		"zimmer":3,
  		"image":"img6",
  		"area":35
  	}

  ]

  }

} <!--class tag ended -->
