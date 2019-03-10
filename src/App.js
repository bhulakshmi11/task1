import React, { Component } from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data :  {
        "People": [
          {
            id : "S123011",
            "name": "Andrew Amernante",
            "rating": 3,
            "img": "http://www.fillmurray.com/200/200",
            "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
            "Likes": [
              "Dogs",
              "Long walks on the beach",
              "Chopin",
              "Tacos"
            ],
            "Dislikes": [
              "Birds",
              "Red things",
              "Danish food",
              "Dead Batteries"
            ]
          },
          {
            id: "S123012",
            "name": "Frank Wang",
            "rating": 5,
            "img": "http://www.fillmurray.com/200/200",
            "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
            "Likes": [
              "Frank",
              "Manchester United",
              "Football",
              "Programming"
            ],
            "Dislikes": [
              "Dogs",
              "Long walks on the beach",
              "Chopin",
              "Tacos"
            ]
          },
          {
            id: "S123013",
            "name": "Sissi Chen",
            "rating": 5,
            "img": "http://www.fillmurray.com/200/200",
            "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
            "Likes": [
              "Cats",
              "the beach",
              "Chopin",
              "Blue things"
            ],
            "Dislikes": [
              "Birds"
            ]
          },
          {
            id: "S123014",
            "name": "Diego Garcia",
            "rating": 2,
            "img": "http://www.fillmurray.com/200/200",
            "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
            "Likes": [
              "Talking Spanish",
              "Spanish food",
              "Spanish things",
              "Football"
            ],
            "Dislikes": [
              "Not talking spanish",
              "Chopin"
            ]
          },
          {
            id:"S123015",
            "name": "Fuad Rashid",
            "rating": 4,
            "img": "http://www.fillmurray.com/200/200",
            "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
            "Likes": [
              "Dogs",
              "Long walks on the beach",
              "Chopin",
              "Tacos"
            ],
            "Dislikes": [
              "Birds",
              "Red things",
              "Danish food",
              "Dead Batteries"
            ]
          }
        ],
      },
      selectedUser: null ,
      delete: []
    }; 
  }
  itemClick(user) {
    this.setState({ selectedUser: user });
  }
  deleteUser(val, id) {
    let arr = this.state.delete;
    if (val) {
      arr.push(id);
    } else {
      arr.splice(arr.indexOf(id), 1);
    }
    this.setState({ delete: arr });
  }
  deleteClick() {
    let people = this.state.data.People;
    let arr = people.filter(e => {
      return this.state.delete.indexOf(e.id) == -1;
    });
    let data = {
      People: arr
    };
    this.setState({ delete: [], data, selectedUser: null });
  }
  onSubmit = model => {
    JSON.stringify(model);
    let data = {
      People: [model, ...this.state.data.People]
    };
    this.setState({
      data: data
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
        <div className="box1">
        <div className="heading1">Intial‑Task</div>
        <div className="heading2">PROTOTYPE ● May 23, 2018 3:55 AM</div>
        </div>
        <div className="block1">
        <DynamicForm
        model={[
            {key: "name", label: "Name", props: {required: true}},
            {key: "id",label: "id"},
            {key: "Description",label: "Description",props: {required: true}},
        ]}
        onSubmit = {(model) => {this.onSubmit(model)}}
        />
        <div className="block2">
        <span className="sideblock">
        <input className="checkbox" type="checkbox"></input><span className="people">People</span><img alt="remove" src=""onClick={() => { this.deleteClick();}}className="recycle" src={require('./img/recycle.svg')}></img>
        <div>
        {this.state.data.People.map((e) => {
          return <div> 
        <button className="button1" onClick={() => {this.itemClick(e);}}><input name={"chk" + e.id} onClick={ev => {this.deleteUser(ev.target.checked, e.id);}}  className="checkbox1" type="checkbox"></input><img className="icon1" src={require('./img/user.svg')}></img><span className="user">{e.name}</span></button>
       
        </div>
        })}
        
         <div className="content">{this.state.selectedUser != null ? (
           <div>
           <img className="user1" src={require('./img/user1.svg')}></img>
           <div className="name">Name&emsp;&emsp;<span className="namedesign">{this.state.selectedUser.name}</span></div>
           <div className="id">id<span className="identification">{this.state.selectedUser.id}</span></div>
           <div className="data">Description&emsp;&emsp; <span className="datades">{this.state.selectedUser.Description}</span></div>
           </div>
          ) : (
            ""
          )}
        </div>
        </div>
 
        </span>
        
        </div>
        </div> 
        </div>
      </div>
    );
  }
}

export default App;
