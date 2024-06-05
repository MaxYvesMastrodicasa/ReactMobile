import { useState, useContext } from 'react';
import NamesContext from '../context/NamesContext';

const AddName = () => {
  const [name, setName] = useState('');
  const { addName } = useContext(NamesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input

        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a name"
      />
      <button type="submit">Add Name</button>
    </form>
  );
};

export default AddName;
