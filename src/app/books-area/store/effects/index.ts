import { MyBooksEffects } from './my-book-shelves.effects';
import { MyBookShelfEffects } from './my-book-shelf.effect';
import {SearchBooksEffects} from './search-books.effects';


export const effects: any[] = [
  MyBooksEffects,
  MyBookShelfEffects,
  SearchBooksEffects
];
