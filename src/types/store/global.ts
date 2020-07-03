import { EntryCollection } from 'contentful';

export interface IGlobal {
  data: EntryCollection<unknown> | null;
}
