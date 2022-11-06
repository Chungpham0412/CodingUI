import './Card.scss';
import React, { useEffect, useState } from 'react';
import * as CardService from 'src/services/CardService';
import CardItem from './CardItem';
import { useStore } from 'src/store';
function Card() {
    const [cardResult, setCardResult] = useState([]);
    const [state, dispatch] = useStore();

    useEffect(() => {
        const fetchApi = async () => {
            let result = [];
            if (state.filter === 0 || state.filter === '') {
                result = await CardService.getCards();
            } else {
                result = await CardService.getCardByFilterId(state.filter);
            }
            setCardResult(result);
        };

        fetchApi();
    }, [state]);
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
