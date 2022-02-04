import { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage'
import Message from './Message'

// Only show messages from the last 15 minutes.
const MINS_DURATION = 15

function Messages() {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query.ascending('createdAt').greaterThan(
        // if created is greater than 15 mins ago. Dont show it. Only show chat from the last 15 minutes.
        'createdAt',
        new Date(Date.now() - 1000 * 60 * MINS_DURATION)
      ),
    [],
    {
      live: true,
    }
  )

  console.log(data)

  return (
    <div className="pb-56">
      <div className="my-5">
        {/* places 'powered by moralis.io's logo  */}
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div className='space-y-10 p-4'>
        {/* EACH MESSAGE */}
        {data.map((message) => (
          <Message key={message.id} message ={message}/>
        ))}
      </div>
      <div className="flex justify-center">
        {/* SEND MESSAGE */}
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-400">
        <p>Your're up to date {user.getUsername()}</p>
      </div>
    </div>
  )
}

export default Messages
