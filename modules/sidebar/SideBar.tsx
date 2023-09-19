'use client'
import Image from 'next/image'
import NewChat from '../newChat/NewChat'
import {signOut, useSession} from 'next-auth/react'
import {collection, orderBy, query} from 'firebase/firestore'
import {useCollection} from 'react-firebase-hooks/firestore'
import {db} from '@/firebase'
import ChatRow from '../chatRow/ChatRow'
import ModelSelection from '../modelSelection/ModelSelection'

const SideBar = () => {
  const {data: session} = useSession()
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  )
  console.log(chats)
  return (
    <div className='sidebar_wrapper'>
      <div className='sidebar_newChat_wrapper'>
        <div className='newChat'>
          <NewChat />
          <div className='modelSelection'>
            <ModelSelection />
          </div>
          <div className='chat_loading_wrapper'>
            {loading && (
              <div className='loading'>
                <p>Loading chats...</p>
              </div>
            )}

            {/* map through the chat */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <Image
          onClick={() => signOut({callbackUrl: '/'})}
          src={session.user?.image!}
          alt='Profile pic'
          height={50}
          width={50}
          className='profile_pic'
        />
      )}
    </div>
  )
}

export default SideBar
