import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import BorderCollieInfoPage from 'pages/bordercollie';
import 'styles/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Layout from 'layouts/Layout';
import BordercollieInfoPage from 'pages/bordercollie';



function App() {
  return (
    <div className="App">
      <Router>
          <Layout>
            <Switch>
              <Route path='/rhodesian'>
                <RhodesianInfoPage />
              </Route>

              <Route path='/bordercollie'>
                <BorderCollieInfoPage />
              </Route>

              <Route path='/'>
                <Index />
              </Route>
              </Switch>
          </Layout>

                 
      </Router>
        
    </div>
  );
}

export default App;