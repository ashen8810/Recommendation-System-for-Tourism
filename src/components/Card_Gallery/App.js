
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Accomodation from './pages/accomodation/accomodation';
import contents from './components/placelist';
import content from './components/accomodationList';
import Places from './pages/places/places';
import MyHotels from './pages/myHotels/myHotels';
import MediaCard from './components/MediaCard';

function App() {
  
  return (
    <div className="App">
     <MediaCard/>
      {/* {content.map(contents => (
            <Accomodation
              key = {content.id}
              image = {content.image}
              name = {content.name}
              rating = {content.rating}
            />
          ))} 

      {contents.map(contents => (
            <Places
              key = {contents.id}
              image = {contents.image}
              name = {contents.name}
              rating = {contents.rating}
            />
          ))}  */}
      
    </div>
  );
}

export default App;
