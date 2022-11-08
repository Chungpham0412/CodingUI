import { IconEye, IconCopy } from '@components/Share/Icons';
import copyToClipBoard from 'src/utils/copyToClipBoard';
import styled from 'styled-components';
import parse from 'html-react-parser';
import 'react-toastify/dist/ReactToastify.css';
import shallow from 'zustand/shallow';
import { globalStore } from 'src/store/global-store';
import pretty from 'pretty';
import cssbeautify from 'cssbeautify';
import { useEffect, useState } from 'react';

const CardStyles = styled.div`
    ${(props) => props.css}
`;
function CardItem(props) {
    const { title, htmlCode, cssCode, author = null, preview = false } = props;
    const [htmlSourceCode, setHtmlSourceCode] = useState(htmlCode);
    const [cssSourceCode, setCssSourceCode] = useState(cssCode);

    useEffect(() => {
        setHtmlSourceCode(htmlCode);
        setCssSourceCode(cssCode);
    }, [htmlCode, cssCode, preview]);
    const { setIsShowCode, setHtmlCodeView, setCssCodeView } = globalStore(
        (state) => ({
            setIsShowCode: state.setIsShowCode,
            setHtmlCodeView: state.setHtmlCodeView,
            setCssCodeView: state.setCssCodeView,
        }),
        shallow,
    );

    const handleViewCode = () => {
        setIsShowCode(true);
        setHtmlCodeView(pretty(htmlSourceCode, { ocd: true }));
        setCssCodeView(
            cssbeautify(cssSourceCode, {
                indent: `  `,
                autosemicolon: true,
            }),
        );
    };
    return (
        <div className="card">
            <div className="card__top d-flex align-items-center justify-content-between">
                <div className="card__top--author">
                    <span className="sub-name">Credit: </span>
                    <span className="name">{author}</span>
                </div>
                <div className="card__top--view" onClick={handleViewCode}>
                    <button className="btn">
                        <IconEye />
                    </button>
                </div>
            </div>
            <div className="card__body">
                <div className="card__body--style">
                    <CardStyles css={cssCode}>
                        <>{parse(htmlCode)}</>
                    </CardStyles>
                </div>
            </div>
            <div className="card__footer d-flex align-items-center justify-content-between">
                <h3 className="card__footer--name">{title}</h3>
                <div className="card__footer--button d-flex align-items-center">
                    <button
                        className="btn btn--orange d-flex align-items-center"
                        onClick={() => copyToClipBoard(cssCode)}
                    >
                        <IconCopy /> <span>CSS</span>
                    </button>
                    <button
                        className="btn btn--blue d-flex align-items-center"
                        onClick={() => copyToClipBoard(htmlCode)}
                    >
                        <IconCopy /> <span>HTML</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
