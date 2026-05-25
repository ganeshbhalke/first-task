const axios = require('axios')

// G API
async function fetchUsers() {
    try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

// API create data
async function createPost(post) {
    try {
        let res = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            post
        )

        console.log("Created :", res.data)
    } catch (error) {
        console.log(error.message)
    }
}

// API call to update
async function updatePost(id, updatedData) {
    try {
        let res = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            updatedData
        )

        console.log("Updated :", res.data)
    } catch (error) {
        console.log(error.message)
    }
}

// D API
async function deletePost(id) {
    try {
        let res = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        )

        console.log("Deleted :", res.data)
    } catch (error) {
        console.log(error.message)
    }
}


// Data export to app.js File
module.exports = {
    fetchUsers,
    createPost,
    updatePost,
    deletePost
}