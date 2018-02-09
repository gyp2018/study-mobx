import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { WishList } from "./models.4/WishList";

const wishList = WishList.create({
  items: [
    {
      name: 'Switch',
      price: 350.00,
      image: 'https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fwww.nintendo.com%2Fswitch%2FetRgxnAu0zRX4bmWnt9K628wG7YQUI6t%2Fimages%2Fswitch%2Fcta%2Fswitch-angle-mob.png&imgrefurl=https%3A%2F%2Fwww.nintendo.com%2Fswitch%2F&docid=hOPcZUB0YQx4_M&tbnid=5DTB10VdWMk5dM%3A&vet=10ahUKEwjIkcaKx5jZAhUDoZQKHd60AcMQMwg4KAEwAQ..i&w=342&h=220&bih=983&biw=1885&q=switch&ved=0ahUKEwjIkcaKx5jZAhUDoZQKHd60AcMQMwg4KAEwAQ&iact=mrc&uact=8'
    },
    {
      name: 'Lego Techinc',
      price: 349.99,
      image: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/videos/technic/thumbnails/towtruckrecommended720x405.jpg?l.r2=656650977'
    }
  ]
})

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));

setInterval(() => {
  wishList.items[0].changePrice(wishList.items[0].price + 1);
}, 1000);
