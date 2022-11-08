import ReactModal from 'react-modal';
import './ModalViewCode.scss';
import { globalStore } from 'src/store/global-store';
import shallow from 'zustand/shallow';
import CodeEditorBlock from '@components/CodeEditorBlock';
import ModalClose from '../ModalClose';
import Label from '@components/Label';

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
                <Label>HTML</Label>
                <CodeEditorBlock code={htmlCodeView} name="htmlCodeView" language="html">
                    {htmlCodeView}
                </CodeEditorBlock>
            </div>
            <div className="flex flex-col mb-5 gap-y-3">
                <Label>CSS</Label>
                <CodeEditorBlock code={cssCodeView} name="cssCodeView" language="css">
                    {cssCodeView}
                </CodeEditorBlock>
            </div>
        </ReactModal>
    );
}

export default ModalViewCode;
