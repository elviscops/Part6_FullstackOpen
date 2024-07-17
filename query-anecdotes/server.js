import jsonServer from "json-server"
const server = jsonServer.create()
const router = jsonServer.router('./db.json')

const middlewares = jsonServer.defaults()

const validate = (request, response,next) => {
    const {content} = request.body

    if (request.method==='POST' && (!content || content.length<5) ) {
            return response.status(400).json({
                error: 'content too short, must be greater than 5'
            })  
    }
    else {
        next()
    }
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(validate)
server.use(router)


const port = 3001

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})