import React from 'react';
import './App.css';
import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";
import SelectWorkoutRandomly from "./containers/SelectWorkoutRandomly";
import AccountMenu from "./containers/AccountMenu";
import SignUpMenu from "./containers/SignUpMenu";
import CalendarMenu from "./components/CalendarMenu";

const parse = require('url-parse');
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
            return (<Calendar/>);
        } else if (pathname === '/my_account') {
            return (<MyAccount/>);
        } else if (pathname === '/sign_up') {
            return (<SignUp/>)
        }
    }
}

const SelectWorkout = () => (
    <div>
        <SelectWorkoutRandomly/>
    </div>
);

const WorkoutTodo = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

const MyAccount = () => (
    <div>
        <AccountMenu/>
    </div>
);

const SignUp = () => (
    <div>
        <SignUpMenu/>
    </div>
);

const Calendar = () => (
    <div>
        <CalendarMenu/>
    </div>
);


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
