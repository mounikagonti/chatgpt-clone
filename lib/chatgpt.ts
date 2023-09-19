import {Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
})

const openai = new OpenAIApi(configuration)

export default openai
