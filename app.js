
const cl=console.log
// let math=require('./sum')



// cl(math) //it will return function ka defination    

// console.log(sum(30,40));




// let math=require('./math')
// let {sum,prod}=require('./math')


// cl(module.children)
// cl(sum)
// cl(prod)


// cl(math)
// cl(math.prod(30,40))
// cl(math.sum(30,40))

// let {sum,prod}=math
// cl(math)


const {
    fetchUsers,
    createPost,
    updatePost,
    deletePost
} = require('./user')


fetchUsers()


createPost({
    title: "Angular",
    body: "NODE CRUD",
    userId: 1
})


updatePost(1, {
    title: " Angular 14",
    body: "NODE CRUD Data",
    userId: 1
})


deletePost(1)