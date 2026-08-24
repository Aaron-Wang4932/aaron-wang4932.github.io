import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectLog from "./components/ProjectLog.jsx";
import Footer from './components/Footer'
import Beams from './components/Beams'

function App() {
    return (
        <div className="relative isolate min-h-screen bg-base overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-25">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#c5d0ed"
                    speed={5}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={67}
                />
            </div>

            <nav className="w-full bg-base/70 border-b border-line">
                <div className="px-10 py-4">
                    <Navbar />
                </div>
            </nav>

            <div className="relative px-10 py-12 max-w-2xl mx-auto">
                <div className="relative">
                    <div className="absolute -top-10 left-0 w-72 h-72 bg-accent/20 blur-3xl rounded-full -z-10"></div>
                    <Hero />
                </div>
                <ProjectLog />
                <Footer />
            </div>
        </div>
    );
}

export default App
