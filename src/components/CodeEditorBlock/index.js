import './CodeEditorBlock.scss';
import CodeEditor from '@uiw/react-textarea-code-editor';
function CodeEditorBlock(props) {
    const { language = 'css', placeholder = '', name, code, onChange } = props;
    return (
        <div className="w-full wrapper-code scrollbar-style">
            <CodeEditor
                name={name}
                value={code}
                language={language}
                placeholder={placeholder}
                onChange={onChange}
                padding={15}
            />
        </div>
    );
}

export default CodeEditorBlock;
