import './Card.scss';
import React from 'react';
import CardItem from './CardItem';
console.log(process.env);
console.log(process.env.BASE_URL);
const cards = [
    {
        id: 1,
        author: 'Chungdz',
        title: 'Dots Flasing',
        filter: '',
        htmlCode: '<button class="button">Evondev is awesome</button>',
        cssCode: `.button {
            --color: #6a5af9;
            font-family: "Poppins", sans-serif;
            color: white;
            padding: 15px 30px;
            border-radius: 4px;
            background-color: transparent;
            cursor: pointer;
            font-weight: 500;
            outline: none;
            border: none;
            font-size: 16px;
            position: relative;
            isolation: isolate;
          }
          
          .button:before {
            content: "";
            height: 100%;
            width: 0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            background-color: var(--color);
            z-index: -1;
            transition: width 0.25s ease-in;
          }
          
          .button:hover:before {
            width: 100%;
          }`,
    },
    {
        id: 2,
        author: 'Chungdz 1 ',
        title: 'Animate Button Border',
        filter: '',
        type: 'button',
        htmlCode: `
        <div class="loader"></div>
        `,
        cssCode: `.loader {
            border: 16px solid #f3f3f3;
           /* Light grey */
            border-top: 16px solid #3498db;
           /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }`,
    },
    {
        id: 3,
        author: 'Chungdz 2',
        title: 'Dots Flasing',
        filter: '',
        htmlCode: `
        <a href="#" class="button">Learn more</a>
        `,
        cssCode: `.button {
            display: inline-block;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            outline: 2px solid #fff;
            padding: 20px 60px;
            position: relative;
            overflow: hidden;
            transition: color 1s;
          }
          
          .button:hover {
            color: #fff;
          }
          
          .button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -50px;
            width: 150%;
            height: 100%;
            background-color: #6a5af9;
            transform: scaleX(0) skewX(35deg);
            transform-origin: left;
            z-index: -1;
            transition: transform 1s;
          }
          
          .button:hover::before {
            transform: scaleX(1) skewX(35deg);
          }`,
    },
    {
        id: 4,
        author: 'Chungdz 3',
        title: 'Dots Flasing',
        filter: '',
        htmlCode: `<div class="square-loading">
        </div>`,
        cssCode: `.square-loading {
            width: 100px;
            height: 100px;
            background-color: #6a5af9;
            border-radius: 8px;
            animation: flip 1.2s ease-in-out infinite;
          }
          
          @keyframes flip {
            0% {
              transform: perspective(200px) rotateX(0) rotateY(0);
            }
          
            50% {
              transform: perspective(200px) rotateX(180deg) rotateY(0);
            }
          
            100% {
              transform: perspective(200px) rotateX(180deg) rotateY(180deg);
            }
          }`,
    },
    {
        id: 5,
        author: 'Chungdz 4',
        title: 'Dots Flasing',
        htmlCode: `<div class="music-waves-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`,
        cssCode: `.music-waves-2 {
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .music-waves-2 > span {
            display: block;
            position: relative;
            background: #000;
            height: 100%;
            width: 1rem;
            border-radius: 1rem;
            margin: 0 0.2rem;
            animation: waves-2 1.2s linear infinite;
          }
          
          .music-waves-2 > span:nth-child(1) {
            animation-delay: 0s;
            background: #ff8c00;
          }
          
          .music-waves-2 > span:nth-child(2) {
            animation-delay: 0.3s;
            background: #ffff00;
          }
          
          .music-waves-2 > span:nth-child(3) {
            animation-delay: 0.6s;
            background: #26d53a;
          }
          
          .music-waves-2 > span:nth-child(4) {
            animation-delay: 0.9s;
            background: #26e6a3;
          }
          
          .music-waves-2 > span:nth-child(5) {
            animation-delay: 0.6s;
            background: #1da8e2;
          }
          
          .music-waves-2 > span:nth-child(6) {
            animation-delay: 0.3s;
            background: #5916ba;
          }
          
          .music-waves-2 > span:nth-child(7) {
            animation-delay: 0s;
            background: #d418d9;
          }
          
          @keyframes waves-2 {
            50% {
              height: 20%;
            }
          
            100% {
              height: 100%;
            }
          }`,
    },
];
{
    console.log(cards);
}
function Card() {
    return (
        <div className="card-list">
            {cards.map((card, index) => {
                return (
                    <CardItem
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        filter={card.filter}
                        htmlCode={card.htmlCode}
                        cssCode={card.cssCode}
                        author={card.author}
                    ></CardItem>
                );
            })}
        </div>
    );
}

export default Card;
