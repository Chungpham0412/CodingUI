import './Card.scss';
import React, { useEffect, useState } from 'react';
import * as CardService from 'src/services/CardService';
import CardItem from './CardItem';
import { globalStore } from 'src/store/global-store';
import shallow from 'zustand/shallow';

function Card() {
    const [cardResult, setCardResult] = useState([]);

    const { filterId } = globalStore(
        (state) => ({
            filterId: state.filterId,
        }),
        shallow,
    );

    useEffect(() => {
        const fetchData = async () => {
            let result = [];
            if (filterId === 0 || filterId === '') {
                result = await CardService.getCards();
            } else {
                result = await CardService.getCardByFilterId(filterId);
            }
            setCardResult(result);
        };
        fetchData();
    }, [filterId]);
    return (
        <div className="card-list">
            {cardResult.map((card) => {
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
