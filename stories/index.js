
import React from 'react';
import { setAddon,storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import '@storybook/addon-notes/register';
import { withScreenshot } from 'storybook-chrome-screenshot';
import { withKnobs } from '@storybook/addon-knobs';
import PropTypes from 'prop-types'; 
import { checkA11y } from "@storybook/addon-a11y";
import { Button } from '@storybook/react/demo';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import Header from "../src/Header";
import SubHeader from "../src/SubHeader";
import BlockA from "../src/BlockA";
import BlockB from "../src/BlockB";
import BlockC from "../src/BlockC";
import App from "../src/index";
import Footer from "../src/Footer";
import SubFooter from "../src/SubFooter";
import Card from "../src/Card";
import BlockBDynamique from "../src/BlockBDynamique";
import CardDiscount from "../src/CardDiscount";
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withStorySource } from '@storybook/addon-storysource';
import HeaderTest from '../src/HeaderTest';
import README from '../README.md';
import JSXAddon from 'storybook-addon-jsx';
import styles from "@sambego/storybook-styles";

import { withState } from '@dump247/storybook-state';

storiesOf('Buttonscre', module).add('with text', withScreenshot()(() => <button>Text</button>));




setAddon(JSXAddon);
HeaderTest.propTypes = {
  Country: PropTypes.string,
  Menu1: PropTypes.string,
  Menu2: PropTypes.string,
  Menu3: PropTypes.string,
  Menu4: PropTypes.string,
  Price: PropTypes.string,
};
Card.propTypes = {
  name: PropTypes.string,
  Color: PropTypes.string,
  price: PropTypes.string,
  imgsrc: PropTypes.string,
};

BlockBDynamique.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
};

CardDiscount.propTypes = {
  discount: PropTypes.string,
  Name: PropTypes.string,
  discription: PropTypes.string,
  Montant1: PropTypes.string,
  Montant2: PropTypes.string,
  imgsrc:PropTypes.string,
};

storiesOf("ButtonStyle", module)
  .addDecorator(styles({
    fontFamily: 'Helvetica, Arial, sans-serif',
    background: '#e1ecfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
  }))
  .add("with text", () => <button>Click me</button>);




  storiesOf('Checkbox', module)
  .add('with check', withState({ checked: true })(({ store }) => (
    <checkbox {...store.state}
              label="Test Checkbox"
              onChange={(checked) => store.set({ checked })}/>
  )));


storiesOf('Button', module)
  .addDecorator(checkA11y)
  .addDecorator(
    withBackgrounds([
      { name: 'twitter', value: '#00acdd', default: true },
      { name: 'facebook', value: '#3b5998' },
    ])
  )
  .addDecorator(withStorySource("import React from 'react'\nimport { storiesOf } from '@storybook/react';\nimport { withStorySource } from '@storybook/addon-storysource'\n\nstoriesOf('Button', module)\n  .add('with some emoji', () => (\n    <Button>😀 😎 👍 💯</Button>\n  ));"))
  .addWithJSX('with text', withScreenshot()(() => <Button onClick={action('clicked')}>Hello Button</Button>))
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
  //index 
  storiesOf("Index", module)

  .add("App", () => <App />,{
    notes: { markdown: README },
  });

// Header 
storiesOf("Header", module)
.addDecorator(withSmartKnobs)
.addDecorator(withKnobs)
.addWithJSX("Header dd Dynamique", () => <HeaderTest Country="USA"  Menu1="A" Menu2="B" Menu3="C" Menu4="D" Price="1.3" />, {
  notes: 'A Header component',
})
  .addWithJSX("Header", () => <Header />, {
    notes: 'A Header component',
  })
  .add("SubHeader", () => <SubHeader />, {
    notes: 'A SubHeader component',
  })
  .add("SubApp", () => <App />);

  // Content
storiesOf("Content", module)
.add("BlockA", () => <BlockA />,{
  notes: 'A Content A component',
})
  .add("BlockB", () => <BlockB />,{
    notes: 'A Content B component',
  })
  .add("BlockC", () => <BlockC />,{
    notes: 'A Content C component',
  });

  //Footer
  storiesOf("Footer", module)
.add("Footer", () => <Footer />,{
  notes: 'A Footer component',
})
.add("SubFooter", ()=><SubFooter />,{
  notes: 'A Subfooter component',
})
;

storiesOf("Card", module)
.addDecorator(withSmartKnobs)
.addDecorator(withKnobs)
.add("Card", () => <Card name="Simple" Color="black" price="$ dede" imgsrc="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/oIrY-Bitmap%20(5).png" />,{
  notes: 'A Card component',
})
.add("CardDiscount", () => <CardDiscount discount="30" Name="ED-55 RELAXED TAPERED" discription="CS Compact Blue - Sonic Mid Used" Montant1="300" Montant2="150" imgsrc="https://uploads.codesandbox.io/uploads/user/27849c50-097b-4336-bd17-9bdf58adc822/TkeR-Bitmap%20(14).png" />,{
  notes: 'A frf component',
})
;

storiesOf("ContentB Dynamiqye", module)
.addDecorator(withSmartKnobs)
.addDecorator(withKnobs)
.add("BlockBDynamique", () => <BlockBDynamique text1="Simple" text2="black" text3="black"  text4="black"   text5="black"  text6="black"  text7="black" text8="black"  text9="black"  text10="black"  />,{
  notes: 'A Card component',
})

;


