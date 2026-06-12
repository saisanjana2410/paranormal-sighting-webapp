import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData(){
    try{
        const data = await fs.readFile(path.join('data','data.json'),'utf-8')
        const parsedData = JSON.parse(data)
        return parsedData
    }catch(err){
        return []
    }
}