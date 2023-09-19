import {db} from '@/firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {AiOutlinePlus} from 'react-icons/ai'

const NewChat = () => {
  const router = useRouter()
  const {data: session} = useSession()

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    )
    router.push(`/chat/${doc.id}`)
  }
  return (
    <div onClick={createNewChat} className='newChat_wrapper chatRow'>
      <AiOutlinePlus className='plus_icon' />
      <p className='newChat_text'>New Chat</p>
    </div>
  )
}

export default NewChat
