import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import App from "../App";

describe("<App />", () => {

it('renders 1 <App /> component', ()=> {
  const component = shallow(<App />);
  expect(component).toHaveLength(1);
  expect(component.find('Provider')).toHaveLength(1);
})

 it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 
});
