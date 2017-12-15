import {CheckMyShelvesGuard} from './check-my-shelves.guard';
import {CheckBookSelfExistGuard} from './check-book-self-exist.guard';

export const BOOKS_AREA_GUARDS: any[] = [
  CheckMyShelvesGuard,
  CheckBookSelfExistGuard
];
