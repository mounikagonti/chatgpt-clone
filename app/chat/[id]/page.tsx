import ChatInput from '@/modules/chatInput/ChatInput'
import Chat from '@/modules/nChat/Chat'

type Props = {
  params: {
    id: string
  }
}

const ChatPage = ({params: {id}}: Props) => {
  return (
    <div className='chatPage'>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage
