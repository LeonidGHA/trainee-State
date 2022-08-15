import css from './App.module.css';

import AccordionItem from './AccordionItem/AccordionItem';
import AccordionListItem from './AccordionListItem/AccordionListItem';
import ListPersonSerial from './ListPersonSerial/ListPersonSerial';

import person from 'Data/person.json';

export const App = () => {
  return (
    <div className={css.rootStylization}>
      <AccordionItem />
      <AccordionListItem />
      <ListPersonSerial persons={person} />
    </div>
  );
};
