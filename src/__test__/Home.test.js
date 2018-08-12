import React from 'react';
import {
  shallow
} from 'enzyme';
import {
  Provider
} from "react-redux";
import store from "../store";
import Home from '../containers/Home';

/*describe('<Home />', () => {

  it('should render an Home', () => {
    const component = shallow(  <Home /> );
    expect(component.find('Fabric')).toHaveLength(1);
  });

});*/
let componentWrapper;


const props = {

  className: 'loading'

};

function setup() {
  componentWrapper = shallow( < Provider store = {
      store
    } > < Home { ...props
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