import React from 'react';
import s from './Persons.module.css';
import Person from '../Person/Person';


const Persons = (props) => {
   let personElements = props.person.map(p => <Person name={p.name} id={p.id} />);



   // let newPersonElement = React.createRef();

   // let onAddPerson = () => {
   //    props.addPerson();
   // }

   // let onPersonChange = (e) => {
   //    let text = e.target.value;
   //    props.updateNewPersonText(text);

   // }



   return (
      <div >
         {personElements}
      </div >
   );
}

export default Persons;