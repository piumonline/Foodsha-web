import './App.css';
import Header from './component/Header'
import Hero from './component/Hero'
import HorizontalCard from './component/HorizontalCard'
import Card from './component/Card';
import HowToWork from './component/HowToWork'
import Footer from './component/footer'



const App = () =>{
  return (
    <div className="Foodsha">
      <Header/>
      <Hero/>
      <HorizontalCard/>
      <HowToWork/>
      <Footer/>
    </div>
  );
}

export default App;
