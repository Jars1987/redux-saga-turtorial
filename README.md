# Setting up our Redux Saga

![reduxSaga] ('./public/reduxSaga1.jpeg)

### - Action Creators

We need 2 action creators, 1 to provide to our watcher function and make him
triger a handler. Example we dispatch Get_Joke from the component the watcher
function that is always running will be watching for all actions will see this
action and will triger the Handler.

### - handlers

Handler is a function generator that will use diferent function generator
methods provided by Saga effects like the effect Call that will make the request
to the API and get a response. The effect Put will allow us to call another
action creator and pass the response like the setJoke() where we pass our
response from the API.

### - watcherSaga

The watcher will be continuously watching for Actions and if the action type is
not under the wactherSaga function it will let it pass to the reducer and
procede as we do in normal Redux.
