import "./App.css";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import useToken from "./utils/useToken";
import { requests } from "./apiCalls/api";
function App() {
  const { token, setToken } = useToken();
  const [tokenValidated, setTokenValidated] = useState(false);
  const isAuthenticated = async () => (await requests.get("/")).status === 201;
  useEffect(() => {
    if (!tokenValidated) {
      isAuthenticated().then((res) => {
        setTokenValidated(res);
      });
    }
  }, []);
  return (
    <div className="App">
      {token && tokenValidated ? <Main /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;
