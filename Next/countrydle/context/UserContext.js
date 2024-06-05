import { createContext, useState } from 'react';
// Créer le context
const UserContext = createContext();

// Créer le provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const isConnect = () => {
    return user != undefined;
  };

  const connection = async (token) => {
    const reponse = await fetch("/api/player", {
        method: "POST",
        body : JSON.stringify({
            token: token
        })
    })
    const player = await reponse.json()
    setUser(player.user)
  }

  return (
    <UserContext.Provider value={{ user, isConnect, connection }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
