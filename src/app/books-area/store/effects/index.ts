import { MyBooksEffects } from './my-book-shelves.effects';
import { MyBookShelfEffects } from './my-book-shelf.effect';

export * from './my-book-shelves.effects';

export const effects: any[] = [MyBooksEffects, MyBookShelfEffects];
