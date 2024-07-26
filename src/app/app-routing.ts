import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './all-components/all-components';
import './avatars-images/avatars-images';
import './calendar/calendar';
import './cards/cards';
import './charts/charts';
import './forms/forms';
import './lists/lists';
import './mouse-events/mouse-events';
import './radiogroup/radiogroup';
import './stepper/stepper';

export const routes: Route[] = [
  { path: '', component: 'app-all-components', name: 'AllComponents' },
  { path: 'all-components', component: 'app-all-components', name: 'AllComponents' },
  { path: 'avatars-images', component: 'app-avatars-images', name: 'Avatars-Images' },
  { path: 'calendar', component: 'app-calendar', name: 'Calendar' },
  { path: 'cards', component: 'app-cards', name: 'Cards' },
  { path: 'charts', component: 'app-charts', name: 'Charts' },
  { path: 'forms', component: 'app-forms', name: 'Forms' },
  { path: 'lists', component: 'app-lists', name: 'Lists' },
  { path: 'mouse-events', component: 'app-mouse-events', name: 'Mouse Events' },
  { path: 'radiogroup', component: 'app-radiogroup', name: 'Radiogroup' },
  { path: 'stepper', component: 'app-stepper', name: 'Stepper' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
