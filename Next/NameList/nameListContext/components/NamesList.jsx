import { useContext } from "react";
import NamesContext from "@/context/NamesContext";


const NamesList = () => {
  const { names } = useContext(NamesContext);
  const { deleteName } = useContext(NamesContext);
  const { editName } = useContext(NamesContext);

  return (
    <div>
      <h2>List of Names</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}<button onClick={() => deleteName(index)}>bin</button><button onClick={() => editName(index)}>edit</button></li>
        ))}
        
      </ul>
    </div>
  );
};

export default NamesList;
