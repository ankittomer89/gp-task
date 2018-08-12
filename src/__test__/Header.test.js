import React from "react";
import ReactDOM from "react-dom";
import {mount, shallow } from 'enzyme';
import store from "../store/index";
import { Provider } from "react-redux";
import Header from "../components/Header"; 



let componentWrapper;


const props = {

    label: 'Departments'

};

function setup() {
  componentWrapper = shallow( < Provider store = {
      store
    } > < Header { ...props
    }
    /> </Provider > );

}
describe('ApplyAction', () => {
  beforeEach(() => {
    setup();
  });

  it('Wrapper should check', () => {
    expect(componentWrapper.props().className).toEqual(props.className);
    expect(componentWrapper.props().bsStyle).toEqual('primary');
    expect(componentWrapper).toBe(1);
  });
});
/* describe("<Header />", () => {

 it('renders 1 <Header /> component', ()=> {
  const component = shallow( mount( <Provider store={store}><Header /></Provider> ));
  expect(component).toHaveLength(1);
  expect(component.find('form')).toHaveLength(1);
})  

/*  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); */
 

