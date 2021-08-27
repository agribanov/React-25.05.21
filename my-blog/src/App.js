import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import PostDetailsPage from './modules/postDetails/PostDetailsPage';
import PostsListPage from './modules/postsList/PostsListPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/posts/:id" component={PostDetailsPage} />
                <Route path="/posts" component={PostsListPage} />
                <Route path="*">
                    <Redirect to="/posts" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
