import React from 'react'
import Sidebar from '../../Admin/components/Sidebar'
import styles from '../../styles/admin/Learn.module.css'
const Learn = () => {

  const [learn, setLearn] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [addEvent, setAddEvent] = React.useState(false)

  const addeventhandler = () => {
    setAddEvent(true)
  }

  const closeeventhandler = () => {
    setAddEvent(false)
  }

  addEvent && console.log('add event')
  


  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className='px-10 '>
        <h1 className='flex justify-center text-center py-3 '>Learn </h1>
        <div>
          <h1 className='text-bold '>EVENT/ COURSES</h1>
          <div className='flex flex-col '>
            <div className='gap-3 flex flex-row py-4' >
              <input type="text" placeholder='' className='bg-[#F9E4E4] border-black border rounded-lg py-1 px-2' />
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Delete</button>
            </div>
            <div className='gap-3 flex flex-row py-4' >
              <input type="text" placeholder='' className='bg-[#F9E4E4] border-black border rounded-lg py-1 px-2' />
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-[#C7E1D0] gap-3  px-2 py-1 rounded-lg'>Delete</button>
            </div>
            <div className='gap-3 flex flex-row py-4' >
              <input type="text" placeholder='' className='bg-[#F9E4E4] border-black border rounded-lg py-1 px-2' />
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Delete</button>
            </div>
            <div className='gap-3 flex flex-row py-4' >
              <input type="text" placeholder='' className='bg-[#F9E4E4] border-black border rounded-lg  py-1 px-2' />
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-[#C7E1D0] px-2 py-1 rounded-lg'>Delete</button>
            </div>
            <div className='gap-3 flex flex-row py-4' >
              <input type="text" placeholder='' className='bg-[#F9E4E4] border-black border rounded-lg py-1 px-2' />
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg'>Delete</button>
            </div>

          </div>
          <div className='gap-3 flex flex-row justify-center' >
            <button onClick={()=> addEvent()} className='bg-gray-400 px-1 py-2 rounded-lg'>
              Add Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn