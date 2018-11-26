import React from "react";

import {
  BlockAimg,
  BlockAimgdiv,
  BlockAimgdivtwoT,
  BlockAimgpopriot,
  BlockAimgdivtwo,
  BlockAimgfall,
  BlockAimgrectangle32,
  BlockAimgdenimeye,
  BlockAimgdenimeyekidscoll
} from "./BlockAStyle";

function BlockA() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />
      <BlockAimg>
        <BlockAimgdiv>
          <BlockAimgpopriot>
            POP RIOT
            <br /> IS A STYLE
            <br /> EXPLOSION
            <br /> F/W ‘16
          </BlockAimgpopriot>
        </BlockAimgdiv>

        <BlockAimgdivtwo>
          <BlockAimgfall>FALL WINTER ’16 PREVIEW DENIM</BlockAimgfall>
          <BlockAimgrectangle32 />
        </BlockAimgdivtwo>

        <BlockAimgdiv>
          <BlockAimgdenimeye>
            #DENIMEYE
            <br /> ON <br /> TOUR
          </BlockAimgdenimeye>
        </BlockAimgdiv>

        <BlockAimgdivtwoT>
          <BlockAimgdenimeyekidscoll>
            KIDS
            <br /> COLLECTION
            <br /> F/W ‘16
          </BlockAimgdenimeyekidscoll>
        </BlockAimgdivtwoT>
      </BlockAimg>
    </div>
  );
}

export default BlockA;
