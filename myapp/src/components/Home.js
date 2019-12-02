/* eslint-disable no-undef */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

const styles = {
    image: {
        position: 'absolute',
        
        left: -100,
        opacity: 0.6,
    },
    article: {
        overflow: 'hidden',
        paddingLeft: 130,
    },
};


class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }


    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id} style={styles.article}>
                        <img src={Pokeball} alt="A pokeball"
                            style={styles.image}
                        />
                        <div className='card-content'>
                            <Link to={'/' + post.id}>
                                <span className='card-title blue-text'>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>

                    </div>)
            })
        ) : (
                <div className="center">No posts yet</div>
            )
        return (
            <div className='container' >
                <h4 className='center'>Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;