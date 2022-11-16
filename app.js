console.log("Marker")        
        
        // To get the root element from the HTML document
        const rootElement = document.querySelector('.root')

        // JSX element
        const jsxElement = <h1>Hello World</h1>




        //APP
        class App extends React.Component{
            render(){
                return(
                    <div className="notificationsFrame">
                        <div className="panel">
                            {/* Content */}    
                        </div>
                    </div>
                )
            }
        }


        // HEADER
        class Header extends React.Component{
            render(){
                return(
                    <div className="header">Hello Sim</div>
                )
            }
        }






        // we render the JSX element using the ReactDOM package
        // ReactDOM has the render method and the render method takes two arguments
        ReactDOM.render(<Header />, rootElement)