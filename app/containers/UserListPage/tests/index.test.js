import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import UserListPage from '../index';
import messages from '../messages';

describe('<UserListPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <UserListPage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
