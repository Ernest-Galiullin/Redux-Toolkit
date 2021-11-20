import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { AddPostsForm } from './features/posts/AddPostsForm.jsx'
import { EditPostForm } from './features/posts/EditPostForm.jsx'
import { PostsList } from './features/posts/PostsList.jsx'
import { SinglePostPage } from './features/posts/SinglePostPage.jsx'
import { UsersList } from './features/users/UsersList.jsx'
import { UserPage } from './features/users/UserPage.jsx'
import { NotificationsList } from './features/notifications/NotificationsList.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/notifications" component={NotificationsList} />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostsForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
