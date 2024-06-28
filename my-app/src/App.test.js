import { render, screen } from '@testing-library/react';
import App from './App';
import SearchZone from './containers/searchZone';

test('renders learn react link', () => {
  const sampleShopItem = [
    {
      "type": "Bicostti",
      "item":[
        {
          "name": "Bicossti Trà Xanh"
        }
      ]
    },
    { 
      "type": "Bánh Quy" ,
      "item":[
        {
          "name": "Bánh Quy Cacao"
        }
      ]
    },
    { 
      "type": "Bánh Dứa" ,
      "item":[
        {
          "name": "Bánh Dứa Dừa"
        }
      ]
    }
  ]
  render(<SearchZone items={sampleShopItem.map(e=>e["type"])} setResult={()=>{}}/>);

});
