import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.json())
app.get('/api/health', (_req,res)=>res.json({status:'ok'}))
app.use(express.static(path.join(__dirname,'dist')))
app.get('*', (_req,res)=>res.sendFile(path.join(__dirname,'dist','index.html')))
const port = parseInt(process.env.PORT || '3000',10)
app.listen(port,'0.0.0.0',()=>console.log(`Server running on ${port}`))
