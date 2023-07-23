export default function parseCherryTreeXml(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const nodes = xmlDoc.getElementsByTagName("node");
    
    console.log(xmlDoc)

    const parsedData = [];
  
    function parseNode(nodeElement) {
      const heading = nodeElement.getElementsByTagName("heading")[0].textContent;
      const contentCData = nodeElement.getElementsByTagName("content")[0].textContent;
      const parser = new DOMParser();
      const contentDoc = parser.parseFromString(contentCData, "text/xml");
      const content = contentDoc.firstChild.textContent.trim();
  
      return { heading, content };
    }
  
    for (let i = 0; i < nodes.length; i++) {
      parsedData.push(parseNode(nodes[i]));
    }
  
    return parsedData;
  }

  // ===================================
  // test

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
const parsedCherryTreeData = parseCherryTreeXml(cherryTreeXml);

// Output the parsed data
console.log("============================================");
console.log(parsedCherryTreeData);