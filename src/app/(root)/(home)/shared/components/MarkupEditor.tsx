import { Editor } from '@tinymce/tinymce-react';
import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Editor> {
  onChange: (...events: any[]) => void;
  disabled?: boolean;
}
export default function MarkupEditor({ disabled, ...props }: Props) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY}
      onInit={props.onInit}
      disabled={disabled}
      onEditorChange={props.onChange}
      init={{
        height: 400,
        menubar: false,
        content_css: 'bg-red-400',
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'codesample',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
        ],
        toolbar:
          'undo redo | ' +
          'codesample | bold italic backcolor | alignleft aligncenter |' +
          'alignright alignjustify | bullist numlist',
        content_style: 'body {font-family:Inter;font-size:16px;}',
      }}
    />
  );
}
