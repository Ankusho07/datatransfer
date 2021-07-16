import React, { Component } from 'react'
import Childcomp from './components/Childcomp'

class Parentcomp extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName:'this is react training'
    }

   // this.greetParent = this.greetParent.bind(this) 

}

greetParent = (childname)=>{

alert(`hello ${this.state.parentName} from ${childname}`)
}



    render() {
        return (
            <div>
                <Childcomp greethandler = {this.greetParent} />   
            </div>                                              
        )
    }
}

export default Parentcomp
