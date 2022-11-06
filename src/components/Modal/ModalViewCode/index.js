import ReactModal from 'react-modal';
import ModalClose from './ModalClose';
import './ModalViewCode.scss';
import { globalStore } from 'src/store/global-store';
import shallow from 'zustand/shallow';
import CodeEditorBlock from '@components/CodeEditorBlock';

function ModalViewCode() {
    const { isShowCode, setIsShowCode, htmlCodeView, cssCodeView } = globalStore(
        (state) => ({
            isShowCode: state.isShowCode,
            setIsShowCode: state.setIsShowCode,
            htmlCodeView: state.htmlCodeView,
            cssCodeView: state.cssCodeView,
        }),
        shallow,
    );
    console.log('isShowCode', isShowCode);
    return (
        <ReactModal
            isOpen={isShowCode}
            overlayClassName="modal-content"
            className="ModalViewCode scrollbar-style"
            onRequestClose={() => setIsShowCode(false)}
        >
            <ModalClose onClick={() => setIsShowCode(false)}></ModalClose>

            <div className="mt-10"></div>
            <div className="flex flex-col mb-5 gap-y-3">
                <label>HTML</label>
                <CodeEditorBlock code={htmlCodeView} name="htmlCodeView" language="html">
                    {htmlCodeView}
                </CodeEditorBlock>
            </div>
            <div className="flex flex-col mb-5 gap-y-3">
                <label>CSS</label>
                <CodeEditorBlock code={cssCodeView} name="cssCodeView" language="css">
                    {cssCodeView}
                </CodeEditorBlock>
            </div>
        </ReactModal>
    );
}

export default ModalViewCode;
