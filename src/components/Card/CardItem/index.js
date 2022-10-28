import { IconEye, IconCopy } from '@components/Share/Icons';
import copyToClipBoard from 'src/utils/copyToClipBoard';
import styled from 'styled-components';
import parse from 'html-react-parser';
import 'react-toastify/dist/ReactToastify.css';

const CardStyles = styled.div`
    ${(props) => props.css}
`;
function CardItem(props) {
    const { id, title, htmlCode, cssCode, filter, author = null, preview = false } = props;

    const handleClick = () => {
        // setIsShowCode(true);
        console.log('handleClick');
    };
    return (
        <div className="card">
            <div className="card__top d-flex align-items-center justify-content-between">
                <div className="card__top--author">
                    <span className="sub-name">Credit: </span>
                    <span className="name">{author}</span>
                </div>
                <div className="card__top--view" onClick={handleClick}>
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
