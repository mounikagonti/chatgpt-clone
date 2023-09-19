'use client'

import {db} from '@/firebase'
import {collection, orderBy, query} from 'firebase/firestore'
import {useSession} from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import {BsArrowDownCircle} from 'react-icons/bs'
import MessageText from '../messageText/MessageText'

type Props = {
  chatId: string
}

const Chat = ({chatId}: Props) => {
  const {data: session} = useSession()

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          'users',
          session?.user?.email!,
          'chats',
          chatId,
          'messages'
        ),
        orderBy('createdAt', 'asc')
      )
  )

  console.log({kiran: messages, session})

  return (
    <div className='chat_wrapper'>
      {messages?.empty && (
        <>
          <p className='prompt_text'>Type a prompt in below to get started!</p>
          <BsArrowDownCircle className='arrow_icon' />
        </>
      )}
      {messages?.docs.map((message) => (
        <MessageText key={message.id} message={message.data()} />
      ))}
    </div>
  )
}

export default Chat
