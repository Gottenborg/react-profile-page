import { createContext, useContext, useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profileImage: string | null;
  birthday: string;
  interests: string[];
}

interface UserContextType {
  user: User;
  invalidInput: keyof User | null
  updateUser: (property: keyof User, value: string) => void;
  saveFile: (file: File ) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  
  const initialUser: User = {
    firstName: 'Angus',
    lastName: 'Ward',
    email: 'angus-ward862@hessel-greenfelder.dk',
    phoneNumber: '+4510203040',
    profileImage: null,
    birthday: '1990-10-09',
    interests: ['Soccer', 'Beer brewing', 'Bicycling', 'Wine'],
  };

  const [user, setUser] = useState<User>(initialUser);
  const [invalidInput, setInvalidInput] = useState<keyof User | null>(null);

  const updateUser = (property: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [property]: value,
    }));
    if(!isInputValid(property, value)) {
      setInvalidInput(property)
    } else {
      setInvalidInput(null)
    }
  };

  const isInputValid = (property: keyof User, value: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    console.log(property === 'email' && !emailRegex.test(value), invalidInput)
    if(value.length === 0 || property === 'email' && !emailRegex.test(value)) {
      return false
    } else {
      return true
    }
    

  }

  const saveFile = (file:File) => {
    // TODO Write function that saves it to a S3 bucket, the server, or another file storage.
      // Then save the URL of this image in the user object and refresh the page so they can see their new profile picture.
      // the functions should not be written in this component but imported from a 'methods' folder, or even via the context
    console.log(file)
  }


  return (
    <UserContext.Provider value={{ user, updateUser, invalidInput, saveFile }}>
      {children}
    </UserContext.Provider>
  );
  
}
