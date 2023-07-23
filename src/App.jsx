import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import ObjectArrayDisplay from "./utils/ObjectArrayDisplay";
import ObjectDisplay from "./utils/ObjectDisplay";
import XMLParser from 'react-xml-parser';
import parseCherryTreeXml from "./utils/XMLParser";
import FileUploadAndRead from "./components/helper/FileUploadAndRead";

function App() {

  // TODO: remove this dummy data
  const cherryTreeXml = `
    <cherrytree>
      <node>
        <heading>Root Node</heading>
        <content>
          <![CDATA[<p>This is the root node content.</p>]]>
        </content>
        <node>
          <heading>Child Node 1</heading>
          <content>
            <![CDATA[<p>This is the content of child node 1.</p>]]>
          </content>
        </node>
        <node>
          <heading>Child Node 2</heading>
          <content>
            <![CDATA[<p>This is the content of child node 2.</p>]]>
          </content>
        </node>
      </node>
    </cherrytree>
    `;

  // Parse the XML data
  var xml = new XMLParser().parseFromString(cherryTreeXml);    // Assume xmlText contains the example XML

  return <>
  <FileUploadAndRead/>
    <ObjectDisplay data={xml}/>
  </>;
}

export default App;
