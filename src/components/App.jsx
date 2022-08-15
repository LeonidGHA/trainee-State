import css from './App.module.css';

import AccordionItem from './AccordionItem/AccordionItem';
import AccordionListItem from './AccordionListItem/AccordionListItem';

export const App = () => {
  return (
    <div className={css.rootStylization}>
      <AccordionItem />
      <AccordionListItem />
    </div>
  );
};
