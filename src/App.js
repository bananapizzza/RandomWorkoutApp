import React from 'react';
import './App.css';
import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList"
import SelectWorkoutRandomly from "./containers/SelectWorkoutRandomly"

const parse = require('url-parse')
const url = parse(window.location.href, true);
const pathname = url.pathname;
console.log(pathname);




function Header() {
    return (
        <h1><a href="/">Random Workout</a></h1>
    );
}

function List() {
    return (
        <ul>
            <li>
                <a
                    href='/select_workout'
                >
                    Select Workout
                </a>
            </li>
            <li>
                <a
                    href='/workout_todo'
                >
                    Workout To-Do
                </a>
            </li>
            <li>
                <a
                    href='/calendar'
                >
                    Calendar
                </a>
            </li>
            <li>
                <a
                    href='/my_account'
                >
                    My Account
                </a>
            </li>
        </ul>
    );
}

class MenuBody extends React.Component {
    render() {
        if (pathname === '/') {
            return 'Random Workout';
        } else if (pathname === '/select_workout') {
            return (<SelectWorkout/>);
        } else if (pathname === '/workout_todo') {
            return (<WorkoutTodo/>);
        } else if (pathname === '/calendar') {
            return 'Calendar';
        } else if (pathname === '/my_account') {
            return 'My Account';
        }
    }
}

const WorkoutTodo = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)

const SelectWorkout = () => (
    <div>
        <SelectWorkoutRandomly/>
    </div>
)

// class SelectWorkout extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isWorkoutSelected: false,
//             selectedWorkout: null
//         };
//         this.selectButtonClick = this.selectButtonClick.bind(this);
//     }
//
//     selectButtonClick() {
//         this.setState(state => ({
//             isWorkoutSelected: true,
//             selectedWorkout: workoutArray[Math.floor(Math.random() * workoutArray.length)]
//         }));
//     }
//
//     render() {
//         let workout = this.state.selectedWorkout;
//         return (
//             <div>
//                 <button onClick={this.selectButtonClick}>
//                     {this.state.isWorkoutSelected ? 'Select Again' : 'Select Workout Randomly'}
//                 </button>
//                 <p>
//                     {workout}
//                 </p>
//             </div>
//         );
//     }
// }


class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <div>
                    <header className="App-header">
                        <Header/>
                        <List/>
                    </header>
                </div>
                <div>
                    <MenuBody/>
                </div>
            </div>
        );
    }
}


export default App;
