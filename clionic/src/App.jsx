import { Footer } from './Footer';
import { Header } from './Header';
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import logo from './images/logo.png';


function App() {
  return (
    <div>
        <div className="nk-app-root">
       
        <div className="nk-main ">
            
            <Sidebar   logo={logo}  />
           
            <div className="nk-wrap ">
                
                <Header     />
                <Content     />
                <Footer     />
              
            </div>
       
        </div>
     
    </div>
    </div>
  );
}

export default App;
