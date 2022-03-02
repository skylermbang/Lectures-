
// 1   Before React  

// 1.1  add following script tag for the react and react dom
//     < script src = "https://unpkg.com/react@17.0.2/umd/react.production.min.js" ></script >
//         <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
//     you can check from browser console  type react

// 2 After React 

// 2.2  React vs React DOM
//  react dom let you render in the html 
//  const span = React.createElement("html tag", { property },{ content} );
// react js can control the html ( the client side) which mean we dont need to make html and grab it and update
// react can finish everything only using the javascript to update the html

// 2.3 
// const container = React.createElement("div", null, [span, button]);
// ReactDOM.render(container, root);
// you can make two component in the div and make the div. 

//  ReactDOM.render(container, root);   make sure DOM is CAPITALIZED LETTER
// 2.4 Recap :
// in NOT react we make html and grab it by document.getElement and update it 
// but in react  we just make the  react component? (createElement ) and we can set the properties or 
// can even define the onClick recall function to update the HTML

// should know the difference of react vs reactDOM

// 2.5 JSX (how to replace createElement 
//  JSX is syntax  

// let button = <button>  shit shit </button> 
// almost same as html but your broswer cant understand
// you have to install babel to let your broweser understand the JSX

// make sure you import the babel to run the JSX in your browser as following code:
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
// <script type="text/babel">  your code comes here</script>


// 2.6  JSX II 

// component make like this
// const Button = () => {
//     return (
//       <button
//         style={{ backgroundColor: "tomato" }}
//         onClick={() => console.log("shit you clicked it ")}
//       >
//         Click here
//       </button>
//     );
//   };

// and put them in to the container with your OWN TAG
//   const Container = (
//     <div>
//     <Title />
//     <Button />
//   </div>
// );
//  make sure your tag has to be upper case  other wise  IDE think this is from html
// this is
//     () => {
//     return (
//         blah
//     )
// }

// ===
//     same as following
// () => ()

// 3 
// 3.0  State 

//how to send the variable to JSX
// function called render should be called everytime the counter updated 

// 3.1  setState 
//const data = React.useState(0);
//if you console.log = >  [0, f]
//  0 => default value  f=> function to change the data 

// if  x = ['tomato', 'potato']
// you can do this
// const [x, y] = ['tomato', 'potato']
// console.log(x) === console.log(x[0])

// therefore 
// we can do const[counter, modifier] = useState(0)

//3.2 modifier 

// modifier will do whatever you want + lerender the changed vlueagain

//3.3 Recap

// rerender can be done by usting modifier function from the useState
// when you modifiy  rerender(recreated) with the whole component with new data 


// //3.4 Antoher way to update the state 
// 1. setCounter(newValue)
// setCounter(counter + 1);

// 2. state function  =>  you want to set the new value based on the current value ? 
//  setCounter((current) => {
//     current + 1;
// });

//       there are same but 2nd way is more safe 

//3.5  Input 

// make sure we are not playing with HTML
// it is JSX and some small things are different like
// class => className
// for => htmlFor

// function App() {
//     const [minutes, setMinutes] = React.useState();
//     const onChange = (current) => {
//       console.log("somebody change the input value : ", current.target.value);
//       setMinutes(current.target.value);
//     };

//     return (
//       <div>
//         <h1 className="title"> Super Converter </h1>
//         <label htmlFor="minute"> Minutes</label>
//         <input
//           value={minutes}  // connecting input value
//           id="minutue"
//           placeholder="Minutes"
//           type="number"
//           onChange={onChange} // need for the updating value and getting value from the input value
//         />
//         <h4> you want to convert : {minutes}</h4>
//         <label htmlFor="hours"> Hours</label>
//         <input id="hours" placeholder="Hours" type="number" />
//       </div>
//     );
//   }


// 4.0 Property 
// isolate one logic to one seperate file 
// each of compoenent  seperated 
// 

// you see function argument call props  contains the 
// stuff you put itin Btn banana. 
// you can access them props.banana



// function Btn(props) {
//     return (
//       <button
//         style={{
//           backgroundColor: "tomato",
//           color: "white",
//           borderRadius: 10,
//           padding: "10px 20px",
//         }}
//       >
//         {props.banana}
//       </button>
//     );
//   }
//   function App() {
//     return (
//       <div>
//         <Btn banana="Save Changes" />
//         <Btn banana="Fuck off" />
//       </div>
//     );
//   }


// in this we can reuse the component



// props :  you can send the data from the jsx to the its original function?


//4.1 memo

// whatever you write in the <Btn {everyhing here are all properties}> 
// you can send value, function all that stuff but 
// you have to use the property in the Btn({here fucker})


// you can modify the status of parent but the one that excuting the changing is from the child
// minute value is updated via onChange  (current.target.value)

// app () => status changed and rerendering everything.
//    const MemorizeBtn = React.memo(Btn);
// if you use this then you can memorize the status and 
// there is no need to rerender if there is nothing changed

// memo will save your resource and time by not reredering the old part

//4.2 Prop Types

// install prop types 

// you can write "schema " for the each props


//5.0 Create app 
//npx create-react-app my-app-name
// pre configured react app

// 5.1
// css module
// xx.module.css

// import styles from "./src/Name.module.css"
// className = {styles.xx}
//  it will generate the randome class name and you dont need to memorize all the name yahoo
//this modulizing will keep the component isolated 
// style can be moduler => 


// 6.0 effect 
// only want the compoenent to render at the first
// like you call api -> and the if the state changed you dont want call again same api
// so you want to change the part that only realate with the state and some part you dont want to chagne 
// some code only run in the first time render
// *** when the state change it will give the whole app() thingy again

//6.1 useEffect
// only run the code at the first render
// we have another wepon we can decide when to run the code and when to not
// when chosen state change, do something by useEffect 
//  useEffect(() => { console.log("I run when the keyword chagnes) }, [keywords])
//  useEffect(() => { console.log("I run when the counter chagnes) }, [counter])

//6.4 clean up function 
// 7.0 building  to do list 
// 7.5
//react-router-dom


{/* <Routeer>
    <Switch>
        <Route path="/movie">
            <Detail />
        </Route>
        <Roue path="/">
            <Home />
        </Roue>
    </Switch>
</Router > */}
//7.6
// <link to=> </link>
// react-router-dom
//  7.7 
// const{paramName}=useParams()