import React,{ Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/monokai';

import './../css/Editor.css'
function onChange(newValue) {
  console.log('change',newValue);
}

class Editor extends Component{
	render(){
		return(
				<div className="Editor_Window">
				  <AceEditor
					  mode="python"
					  theme="monokai"
					  name="blah2"
					  onLoad={this.onLoad}
					  onChange={this.onChange}
					  fontSize={12}
					  showPrintMargin={false}
					  showGutter={true}
					  highlightActiveLine={true}
					  value={``}
					  setOptions={{
					  enableBasicAutocompletion: true,
					  enableLiveAutocompletion: true,
					  enableSnippets: false,
					  showLineNumbers: true,
					  tabSize: 2,
					  }}/>
				</div>

);}
}
export default Editor;