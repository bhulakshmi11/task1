import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        ]
      },
      activeRows: [] 
    }; 
  }
  viewSeatsClick(id) {
    this.setState({ activeRows: id });
}
deleteUser = (index, e) => {
    console.log(this.nextUniqueId())
    //const users = [...this.state.users];
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users});
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <div className="box1">
        <div className="heading1">Intial‑Task</div>
        <div className="heading2">PROTOTYPE ● May 23, 2018 3:55 AM</div>
        </div>
        <div className="block1">
        <span>
                    <button className="contentpage" onClick={() => document.getElementById('id01').style.display = 'block'}><i class="fa fa-plus-circle"></i></button>
                    <div id="id01" class="modal">
                        <form class="modal-content animate" action="/action_page.php">
                            <div class="imgcontainer">
                                <span onClick={() => document.getElementById('id01').style.display = 'none'} class="close" title="Close Modal">&times;</span>
                                <img className="user2" src={require('./img/user1.svg')}></img>
                               <div><span className="name1">Name</span><input type="text" className="text1"></input></div> 
                               <div><span className="name2">id</span><input type="text" className="text2"></input></div>
                               <div><span className="textarea">Description</span><textarea class="f2" rows="6" cols="20" name="comment" form="usrform"></textarea></div> 
                               <button className="cancel">Cancel</button><button className="adduser">Add user</button>
                            </div>
                            
                           
                        </form>
                    </div>
                </span>
        
        <div className="block2">
        <span className="sideblock">
        <input className="checkbox" type="checkbox"></input><span className="people">People</span><img className="recycle" src={require('./img/recycle.svg')}></img>
        {this.state.data.People.map((e) => {
          return <div> 
        <button className="button1" onClick={() => this.viewSeatsClick(e.id)}><input className="checkbox1" type="checkbox"></input><img className="icon1" src={require('./img/user.svg')}></img><span className="user">{e.name}</span></button>
        <div className={`block3 ${this.state.activeRows == e.id ? 'activeRowClass' : ''}`}>
        <div className="display1">
        <img className="user1" src={require('./img/user1.svg')}></img>
        <div className="name">Name&emsp;&emsp;<span className="namedesign">{e.name}</span></div>
        <div className="id">id<span className="identification">{e.id}</span></div>
        <div className="data">Description&emsp;&emsp; <span className="datades">{e.Description}</span></div>
        {/* <button className="close1" title="Close" onClick={() => this.viewSeatsClick(e.id)}><i class='far fa-times-circle'></i></button> */}
        </div>
        </div>
        
        </div>
        })}
        </span>
        </div>
        </div> 
        </div>
      </div>
    );
  }
}

export default App;
