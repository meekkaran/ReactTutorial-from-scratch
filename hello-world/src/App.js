import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline /> */}
        {/* <Stylesheets primary = {true}/> */}
        {/* <NameList />
        <UserGreeting /> */}
        {/*<ParentComponent />
        <EventBind />
        {/*<FunctionClick/>
        <ClassClick/>
        {/*<Counter/>*/}
        {/*<Greet name="jerop" heroName="karan">
        <p>This is children props</p>
        </Greet>
        <Greet name="karan" heroName="jerop">
          <button>Action</button>
    </Greet>
        <Greet name="badria" heroName="karan" />
       <Welcome name="jerop" heroName="karan" />
        {/*<Welcome name="karan" heroName="jerop" />
        <Welcome name="badria" heroName="karan" />
        {/*<Hello/>*/}
      </div>
    );
  }
}

export default App;