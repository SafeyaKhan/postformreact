import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Postform() {
    const [userId, setUserId] = useState(null);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);


    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const post = { title: 'React Hooks POST Request Example', body: 'bbbbbbbbbb' };
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => setUserId(response.data.id));
        console.log(post);
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {userId}
            </div>
         </div>
    //     <form onSubmit={handleSubmit}>
    //     <div>
    //         <input type="text" name="userId" value={userId} onChange={this.handleChange} />
    //     </div>
    //     <div>
    //         <input type="text" name="title" value={title} onChange={this.handleChange} />
    //     </div>
    //     <div>
    //         <input type="text" name="body" value={body} onChange={this.handleChange} />
    //     </div>
    //     <button type='submit'>Submit</button>
    // </form>
    );
}

export default  Postform