import './App.css';
import Header from './components/Header';
import Appointment from './components/Appointment';
import Packages from './components/Packages';
import BookedTests from './components/BookedTests';
import LupinDiagnostics from './components/LupinDiagnostics';
import PeopleAboutus from './components/PeopleAboutus';
import LupindiagnosticsVideos from './components/LupindiagnosticsVideos';
import LatestArticles from './components/LatestArticles';
import FAQ from './components/FAQ';
import HealthPackages from './components/HealthPackages';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div>
      <Header />
      <Appointment />
      <Packages />
      <BookedTests />
      <LupinDiagnostics />
      <PeopleAboutus />
      <LupindiagnosticsVideos />
      < LatestArticles />
      <FAQ />
      <HealthPackages />
      <ContactUs />

    </div>
  );
}

export default App;