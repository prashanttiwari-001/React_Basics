// ReactDOM is a global variable
// ReactDOM.render() -> it is used to render something to the screen.
// 1. what to render on the screen. 
// 2. where do you want to render it.

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

// ReactDOM.render(<button>click</button>,document.querySelector("#root"));
// ReactDOM.render(<p>Hi, my name is Prashant!</p>, document.querySelector("#root"));
// ReactDOM.render(
//     <ul>
//         <li>element 1</li>
//         <li>element2</li>
//     </ul>,
//     document.querySelector("#root"))


// In reat function ka name hamesha uppercase se start hoga

// function Navbar(){
//     return(
//         <div>
//             <h1>Heading</h1>
//         </div>
//     )
// }

// function MainContent(){
//     return(
//         <h2>
//             I am prashant!
//         </h2>
//     )
// }

// ReactDOM.render(
//     <div>
//       <Navbar/>
//         <MainContent/>
//     </div>,
//     document.getElementById("root")
// )

// JSX
// const element = <h1>This is JSX</h1>
// const element = <a href="https://www.reactjs.org"> link </a>;

// hm ek se jada element declare kr sakte bs unko niche array main all karna hota hai
// hm element aur function sabko ek array main call karna hota hai
// const element = (
//     <div className ="header">
//       <h1 className ="bold">Hello!</h1>
//       <h2>Good to see you here.</h2>
//     </div>
//   )
//   const page = (
//     <div >
//     <p>
//       hyy my name is prashant!
//     </p>
//     </div>
//   )
//   function MainContent(){
//     return(
//         <h2>
//             I am prashant!
//         </h2>
//     )
//   }
//ReactDOM.render([element, page, <MainContent/>],document.querySelector("#root"))

// Creating Navbar
// const navbar =(
//   <nav>
//     <h1>
//       Welcome
//     </h1>
//     <ul>
//       <li>Menu</li>
//       <li>Home</li>
//       <li>About</li>
//     </ul>
//   </nav>
// )
// ReactDOM.render(navbar,document.querySelector("#root"))

// const page = (
//   <div>
//     <h1>
//       This is My React!
//     </h1>
//     <h3>Here how we learn React</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's Declerative</li>
//       <li>It's a heriable skill</li>
//       <li>It's actively mantained by skilled peoples</li>
//     </ol>
//   </div>
// )
// ReactDOM.render(page,document.querySelector("#root"))
