
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

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

    render() {
        console.log(this.props)

        const { posts } = this.props;
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
            );
        return (
            <div>
                <div className='container home' >
                    <h4 className='center'>Home</h4>
                    {postList}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}



export default connect(mapStateToProps)(Home);