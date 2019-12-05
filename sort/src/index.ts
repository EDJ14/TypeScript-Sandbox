import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const charactersCollection = new CharactersCollection('adfVERrsaD');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(10);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
