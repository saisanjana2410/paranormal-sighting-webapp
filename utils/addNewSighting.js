import { getData } from "./getData.js";
import fs from "node:fs/promises"
import path from 'node:path'

export async function addNewSighting(newSighting){
    try {
        let data = await getData()
        data.push(newSighting)
        fs.writeFile(path.join('data','data.json'), JSON.stringify(data, null, 2), 'utf-8')
    } catch (err) {
        throw new Error(err)
    }
}