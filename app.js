// To get the root element from the HTML document
const rootElement = document.querySelector('.root')

// JSX element
const jsxElement = <h1>Hello World</h1>

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
ReactDOM.render(jsxElement, rootElement)