import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkExperience from './components/WorkExperience';
import ToolsSection from './components/ToolsSection';
import CertificatesSection from './components/CertificatesSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-display transition-colors duration-300 min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <WorkExperience />
          <ToolsSection />
          <CertificatesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
