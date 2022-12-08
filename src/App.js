import Layout from "./Layout/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
