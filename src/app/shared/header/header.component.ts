import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo: 'https://cdn0.iconfinder.com/data/icons/sports-70/60/Mintie_-_Color_-28_-_Weight-512.png',
    items: [
      {icone: 'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/home-alt-256.png', texto: 'inicio', link: '/home'}, 
      {icone: 'https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/info_information_about_help-2-256.png', texto: 'sobre',link: '/sobre'},
      {icone: 'https://cdn4.iconfinder.com/data/icons/essentials-74/24/006_-_Image-256.png', texto: 'galeria', link: '/galeria'},
      {icone: 'https://cdn4.iconfinder.com/data/icons/leto-devices-1/64/phone_telephone_contact-256.png', texto: 'contato', link: '/contato'}
    ]
  }

  constructor() { }

  ngOnInit() {}

}
