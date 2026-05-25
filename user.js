const cl = console.log

// GET API
async function fetchUsers() {
    try {
        let res = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )

        cl(res.data)

    } catch (error) {
        cl(error.message)
    }
}


// CREATE API
async function createPost(post) {
    try {
        let res = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            post
        )

        cl("Created :", res.data)

    } catch (error) {
        cl(error.message)
    }
}


// UPDATE API
async function updatePost(id, updatedData) {
    try {
        let res = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            updatedData
        )

        cl("Updated :", res.data)

    } catch (error) {
        cl(error.message)
    }
}


// DELETE API
async function deletePost(id) {
    try {
        let res = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        )

        cl("Deleted :", res.data)

    } catch (error) { 
        cl(error.message)
    }
}