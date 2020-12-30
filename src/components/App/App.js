import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyles';
import ReactHelmet from '../ReactHelmet/ReactHelmet';
import {
  Main,
  SubPageDiscount,
  SubPageOne,
  SubPageThreeRegular,
  SubPageThreeSet,
  SubPageForm,
  SubPageFinal
} from '../index';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import FormContextProvider from '../../contexts/FormContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormContextProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/subpagefinal'>
              <SubPageFinal />
            </Route>
            <Route path='/subpagethreeset'>
              <SubPageThreeSet />
            </Route>
            <Route path='/subpagethreeregular'>
              <SubPageThreeRegular />
            </Route>
            <Route path='/subpageform'>
              <SubPageForm />
            </Route>
            <Route path='/subpageone'>
              <SubPageOne />
            </Route>
            <Route path='/discount'>
              <SubPageDiscount />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </Router>
        <ReactHelmet />
      </FormContextProvider>
    </ThemeProvider>
  );
};

export default App;
