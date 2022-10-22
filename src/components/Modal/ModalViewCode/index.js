import { useState } from 'react';
import ReactModal from 'react-modal';
import ModalClose from './ModalClose';
function ModalViewCode() {
    const [isShowCode, setIsShowCode] = useState(true);
    return (
        <ReactModal
            isOpen={isShowCode}
            overlayClassName="bg-black bg-opacity-40 fixed inset-0 z-[99] flex items-center justify-center cursor-pointer"
            className="max-w-2xl p-5 rounded-lg bg-slate-800 max-h-[80vh] overflow-y-auto w-full relative scrollbar-style"
            onRequestClose={() => setIsShowCode(false)}
        >
            <ModalClose onClick={() => setIsShowCode(false)}></ModalClose>
            <h2>ádsads</h2>
        </ReactModal>
    );
}

export default ModalViewCode;
