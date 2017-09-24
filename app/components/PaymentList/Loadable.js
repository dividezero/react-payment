/**
 *
 * Asynchronously loads the component for PaymentList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
