import React from "react";

import BlockA from './BlockA';
import BlockB from './BlockB';
import BlockC from './BlockC';
import BlockD from './BlockD';
import MediaQuery from "react-responsive";
import Contentdev from './Contentdev';
import ContentBdiv from './ContentBdiv';
import ContentCdiv from './ContentCdiv';
import ContentDdiv from './ContentDdiv';
import ContentCdivTwo from './ContentCdivTwo'
function Content() {
  return (
  <div>

      <MediaQuery query="(min-width: 1201px)">
        <BlockA />
     
  
      </MediaQuery>

      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <Contentdev />
      </MediaQuery>

      <MediaQuery query="(min-width: 1201px)">
        <BlockB />

      </MediaQuery>

      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        <ContentBdiv />
      </MediaQuery>
    
      <MediaQuery query="(min-width: 1201px)">
        <BlockC />

      </MediaQuery>
      <MediaQuery query="(min-width: 640px) and (max-width: 640px)">
        < ContentCdiv />
      </MediaQuery>
      <MediaQuery query="(min-width: 768px) and (max-width: 768px)">
        < ContentCdivTwo />
      </MediaQuery>
      <MediaQuery query="(min-width: 200px) and (max-width: 1200px)">
        < ContentDdiv />
      </MediaQuery>
      <MediaQuery query="(min-width: 1201px)">
        <BlockD />

      </MediaQuery>
     
  </div>
  );
}

export default Content;
