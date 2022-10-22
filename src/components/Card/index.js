import './Card.scss';
import React from 'react';
import CardItem from './CardItem';

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
        htmlCode: '<button class="button">Evondev is awesome</button>',
        cssCode: '',
    },
    {
        id: 3,
        author: 'Chungdz 2',
        title: 'Dots Flasing',
        filter: '',
        htmlCode: '<button class="button">Evondev is awesome</button>',
        cssCode: '',
    },
    {
        id: 4,
        author: 'Chungdz 3',
        title: 'Dots Flasing',
        filter: '',
        htmlCode: '<button class="button">Evondev is awesome</button>',
        cssCode: '',
    },
    {
        id: 5,
        author: 'Chungdz 4',
        title: 'Dots Flasing',
        htmlCode: '<button class="button">Evondev is awesome</button>',
        cssCode: '',
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
