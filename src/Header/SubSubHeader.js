import React from "react";

import { SubsuBcontaine, SubsuBtext, SubsuBtext1, SubsuBtext2, SubsuBtextblanc, SubsuBtestbarra } from './SubSubHeaderStyle'

function SubSubHeader() {
  return (
 <div>
<SubsuBcontaine>

<SubsuBtext>

<SubsuBtextblanc>
   10%       &nbsp;                                   
</SubsuBtextblanc>

<SubsuBtestbarra>
    <span>STUDENT DISCOUNT</span>&nbsp;  &nbsp; &#10095;                                         
</SubsuBtestbarra>
</SubsuBtext>

<SubsuBtext>
<SubsuBtextblanc>
   $&nbsp; &nbsp;&nbsp;9.95     &nbsp;                                   
</SubsuBtextblanc>
<SubsuBtestbarra>
                      <span> UNLIMITED NEXT DAY DELIVERY FOR 1 YEAR</span>&nbsp;  &nbsp;&nbsp; &#10095;                                         
</SubsuBtestbarra>
</SubsuBtext>

<SubsuBtext2>
<SubsuBtestbarra>
                      <span> FREE DELIVERY WORLDWIDE</span>&nbsp;  &nbsp;&nbsp; &#10095;                                         
</SubsuBtestbarra>
</SubsuBtext2>
</SubsuBcontaine>
 </div>
  );
}

export default SubSubHeader;
