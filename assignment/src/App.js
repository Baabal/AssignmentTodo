import UserList from './components/UserList';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
        <div >
          <UserContextProvider>
            <UserList />
          </UserContextProvider>
      </div>

  );
}

export default App;
