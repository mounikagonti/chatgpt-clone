'use client'
import React, {useRef} from 'react'
import {db} from '@/firebase'
import {GoPaperAirplane} from 'react-icons/go'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {useSession} from 'next-auth/react'
import {FormEvent, useState} from 'react'
import {toast} from 'react-hot-toast'
import useSWR from 'swr'
import ModelSelection from '../modelSelection/ModelSelection'


type Props = {
  chatId: string
}

const ChatInput = ({chatId}: Props) => {
  const [prompt, setPrompt] = useState('')
  const {data: session} = useSession()

  const {data: model} = useSWR('model', {
    fallbackData: 'text-davinci-003',
  })

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return

    const input = prompt.trim()
    setPrompt('')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    }

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    )

    // Toast notification to say Loading
    const notification = toast.loading('ChatGPT is thinking...')
    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast notification to say successful!
      toast.success('ChatGPT has responded!', {
        id: notification,
      })
    })
  }

  return (
    <div className='chatInput_wrapper'>
      <form onSubmit={sendMessage} className='form'>
        <input
          className='f_input'
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          placeholder='type your message here...'
        />
        <button disabled={!prompt || !session} type='submit' className='s_btn'>
          <GoPaperAirplane className='goPaperAir_icon' />
        </button>
      </form>
      <div className='modelSelection'>
        <ModelSelection />
      </div>
    </div>
  )
}

export default ChatInput
