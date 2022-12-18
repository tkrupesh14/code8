import React from 'react'
import Sidebar from '../../Admin/components/Sidebar'
import styles from "../../styles/admin/Community.module.css";
const CommunityAdd = () => {
  return (
    <div className={styles.wrapper}>
            <div>
                <Sidebar />
            </div>
            <div className='px-10 '>
                <h1 className='flex justify-center text-center py-3 '>Community </h1>
                <div>
                    <h1 className='text-bold '>Event Name</h1>
                    <div className='flex flex-col gap-2' type='form'>
                        <label htmlFor="course">
                            <input type="text" placeholder='Course Name' className='bg-transparent border-black border rounded-[2px] px-2 py-1'/>
                        </label>

                        <label htmlFor="course details">
                            <textarea name="" id="" cols="30" rows="10" className='bg-transparent border-black border rounded-[2px] px-2 py-1'>
                                Event Details
                            </textarea>
                        </label>
                        <label htmlFor="addfile">
                            <input type="file" className='bg-transparent border-black border rounded-[2px] px-2 py-1'/>

                        </label>
                        <div className='flex flex-row gap-3'>
                            <label htmlFor="discord group">
                            <input type="text" placeholder='Discord Group' className='bg-transparent border-black border rounded-[2px] px-2 py-1' />
                        </label>
                        <label htmlFor="Registration link">
                            <input type="text" placeholder='Registration Link' className='bg-transparent border-black border rounded-[2px] px-2 py-1' />
                        </label>
                        </div>
                        
                    </div>

                    <div className='flex flex-row gap-3 py-4 justify-center'>
                        <button className='bg-transparent border-black border rounded-[2px] px-2 py-1'>
                            Save
                        </button>

                        <button className='bg-transparent border-black border rounded-[2px] px-2 py-1'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CommunityAdd