const cl = console.log


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
