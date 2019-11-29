import React, { Component } from 'react';


class Ninjas extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="ninja">
                <div> Name:30</div>
                <div> Age:30</div>
                <div> Belt:Black</div>
            </div>
        )
    }
}
export default Ninjas;