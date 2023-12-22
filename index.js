import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'
import * as dotenv from 'dotenv'
import { timeStamp } from 'console'
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const speechFile = path.resolve(`./output_${timeStamp}.mp3`)

async function main () {
    const mp3 = await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'nova',
        
        input: "Hola, cómo estás? Soy el profesor virtual de Efdi, estás listo para comenzar la preparación para tu examen de Motores de Turbinas?",
        // 1000 characters 0,015
    })

    console.log(speechFile)

    const buffer = Buffer.from(await mp3.arrayBuffer())

    await fs.promises.writeFile(speechFile, buffer)
}

main()

