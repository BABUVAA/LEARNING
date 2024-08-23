import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*

  <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tournaments/:id" component={TournamentPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Footer />
    </Router>
*/ 