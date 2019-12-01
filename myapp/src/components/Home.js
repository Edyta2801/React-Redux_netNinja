import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            })
    }


    render() {
        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates, dolore omnis vero doloremque id iusto quo possimus eveniet, sapiente ut labore animi exercitationem. Molestias doloremque ipsum vero quaerat obcaecati.</p>

            </div>
        )
    }
}
export default Home;