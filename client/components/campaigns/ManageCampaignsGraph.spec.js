import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ManageCampaignsGraph from './ManageCampaignsGraph';

const mockProps = ( overrides) => ({ // eslint-disable-line no-unused-vars
  data: [],
  ...overrides
});

const wrapper = shallow(<ManageCampaignsGraph {...mockProps()} />);

describe('(Component) ManageCampaignsGraph', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});