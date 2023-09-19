import {DocumentData} from 'firebase/firestore'
import Image from 'next/image'

type Props = {
  message: DocumentData
}

const MessageText = ({message}: Props) => {
  const isChatGPT = message.user.name === 'ChatGPT'
  return (
    <div
      className={`messageText_wrapper ${
        isChatGPT && 'bg-custom'
      }`}
    >
      <div className='user_wrapper'>
        <Image src={message.user.avatar} alt='' width={30} height={30} />
        <p className='text_wrapper'>{message.text}</p>
      </div>
    </div>
  )
}

export default MessageText
