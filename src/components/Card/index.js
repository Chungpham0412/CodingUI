import './Card.scss';
import React, { useEffect, useState } from 'react';
import * as CardService from 'src/services/CardService';
import CardItem from './CardItem';

function Card() {
    const [cardResult, setCardResult] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await CardService.getCards();
            setCardResult(result);
        };
        return () => {
            fetchApi();
        };
    }, []);
    return (
        <div className="card-list">
            {cardResult.map((card, index) => {
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
