import React,{Component} from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
const categories=[
    {label:"Electronics",value:"1"},
    {label:"Grocery",value:"2"},
    {label:"Cloths",value:"3"},
    {label:"Foods",value:"4"},
    {label:"General",value:"5"}
];
class App extends Component{
    constructor(props){
        super(props);
        this.state={ selectedOption:null }
    }
    
    handleChange=selectedOption1=>{
        this.setState({selectedOption:selectedOption1.label});
    }
    render(){
        
        //const {selectedOption}=this.state.selectedOption;
        let header="";
        if(this.state.selectedOption){
            header=<h1>You Selected {this.state.selectedOption}</h1>
        }else{
            header="";
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Select options={categories} onChange={this.handleChange} value={this.state.selectedOption} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                {header}
            </div>
        )
    }
}
export default App;