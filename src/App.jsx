import Header from "./components/Header/Header";
import css from "./styles/app.module.scss"

const App = () => {
  
  return(
        <header className={`bg-primary ${css.container}`}>
            <Header/>
        </header>
    ) 
  
};

export default App;
