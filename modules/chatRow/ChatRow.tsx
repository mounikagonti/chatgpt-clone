import {BsChatLeft, BsTrash} from 'react-icons/bs'

import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import {collection, query, orderBy, deleteDoc, doc} from 'firebase/firestore'
import {db} from '@/firebase'

type Props = {
  id: string
}

const ChatRow = ({id}: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const {data: session} = useSession()
  const [active, setActive] = useState(false)

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  )

  useEffect(() => {
    if (!pathname) return
    setActive(pathname.includes(id))
  }, [pathname, id])

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    router.replace('/')
  }

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow_wrapper ${active ? 'active-bg' : ''}`}
    >
      <BsChatLeft className='chatLeft_icon' />
      <p className='chatRow_msg'>
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
      </p>
      <BsTrash onClick={removeChat} className='trash_icon' />
    </Link>
  )
}

export default ChatRow
