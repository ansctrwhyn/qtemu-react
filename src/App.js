import './App.css';
import NavbarComponent from './components/templates/NavbarComponent';
import MainComponent from './components/templates/MainComponent';
import FooterComponent from './components/templates/FooterComponent';
// import FormLogin from './components/FormLoginComponent';
// import PokemonComponent from './components/PokemonComponent';
// import HeaderFunctionComponent from './HeaderFunctionComponent';
// import MainFunctionComponent from './MainFunctionComponent';
// import FooterFunctionComponent from './FooterFunctionComponent';
// import PokemonHookComponent from './components/PokemonHookComponent';
// import CurrencyComponent from './components/CurrencyComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainComponent />
      <FooterComponent />

      {/* <FormLogin /> */}
      {/* <PokemonComponent /> */}

      {/* <HeaderFunctionComponent />
      <MainFunctionComponent />
      <FooterFunctionComponent /> */}

      {/* <PokemonHookComponent /> */}
      {/* <CurrencyComponent /> */}
    </div>
  );
}

export default App;
