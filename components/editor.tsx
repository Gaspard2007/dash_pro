import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const Editor = (props: { placeholder: string }) => { // Typage explicite des propriétés attendues
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html: string) => {
        setEditorHtml(html);
    }

    return (
        <ReactQuill
            style={{
                height: '1200px',
                width: '1200px',
                backgroundColor: 'white',
            }}
            onChange={handleChange}
            value={editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            placeholder={props.placeholder}
        />
    );
}

Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        // Autres configurations de la barre d'outils...
    ],
    clipboard: {
        matchVisual: false,
    }
}

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

export default Editor;

