import React, { PureComponent } from 'react'

import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import Table from 'braft-extensions/dist/table'

import 'prismjs/components/prism-python'
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/color-picker.css'
import 'braft-extensions/dist/code-highlighter.css'
import 'braft-extensions/dist/table.css'

const Language = [{
  name:'JavaScript',
  syntax:'javascript'
},{
  name:'HTML',
  syntax:'html'
},{
  name:'CSS',
  syntax:'css'
},{
  name:'Python',
  syntax:'py'
}]

BraftEditor.use(ColorPicker({
  includeEditors: ['editor-with-color-picker'],
}));

BraftEditor.use(CodeHighlighter({
  syntaxs:Language
}));

const tableOptions = {
  defaultColumns:3,
  defaultRows:3,
  withDropdown:false,
  exportAttrString:''
};
BraftEditor.use(Table(tableOptions));

export class RichTextEditor extends PureComponent {
  state={
    editorState:BraftEditor.createEditorState(null)
  }
  componentDidMount() {
    
  }
  handleChange= editorState =>{
    this.setState({editorState})
  }
  preview = ()=>{
    console.log('preview')
  }
  render() {
    const extendControls = [{
      key:'custom-button',
      type:'button',
      text:'预览',
      onClick:this.preview
    }]
    return (
      <div>
        <BraftEditor
          id="editor-with-color-picker"
          value={this.state.editorState}
          onChange={this.handleChange}
          extendControls={extendControls}
        />
      </div>
    )
  }
}

export default RichTextEditor

