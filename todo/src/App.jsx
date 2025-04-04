import HomePage from './pages/home_page.jsx'
import Nav from './pages/navigation_bar.jsx'
import LandingPage from './pages/landing_page.jsx'
import LaptopsPage from './pages/laptops_page.jsx'
const App = () => {
  return (
    <>
      <Nav />
      <LandingPage />
      < HomePage />
      <br />
      < LaptopsPage />
    </>
  );
}
export default App; 