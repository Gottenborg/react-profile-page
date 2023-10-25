import "./App.css";
import { UserProvider } from "./contexts/UserContext"
import ProfilePage from "./pages/profilePage"

function App() {
  return (
    <UserProvider>
      <main className="flex flex-col items-center">
        <ProfilePage/>
      </main>
    </UserProvider>
  );
}

export default App;
