import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ProcessPage from './pages/ProcessPage'
import ResumePage from './pages/ResumePage'
import CaseStudyPage from './pages/CaseStudyPage'
import PasswordGate from './components/PasswordGate'

function Layout({ children, showFooter = true }: { children: React.ReactNode; showFooter?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <main style={{ flex: '1 0 auto' }}>{children}</main>
      {showFooter && <SiteFooter />}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <WorkPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/process"
          element={
            <Layout>
              <ProcessPage />
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              <ResumePage />
            </Layout>
          }
        />
        {/* Case studies use their own footer */}
        <Route
          path="/work/:slug"
          element={
            <Layout showFooter={false}>
              <PasswordGate>
                <CaseStudyPage />
              </PasswordGate>
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  )
}
