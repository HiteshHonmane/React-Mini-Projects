import React from 'react'

function BMI() {
 
const handelSubmit=(e)=>{
   e.preventDefault()
}
    
  return (
   <>
   <main className='w-full h-screen flex flex-col justify-center items-center bg-slate-400 '>

   <h1>BMI Calculator</h1>
   <form className='rounded-2xl' onSubmit={handelSubmit}  action="">

    <div >
        <label htmlFor="Age">Age</label> <br />
        <input  className=' rounded-2xl border-2 h-[50px] border-gray-700 ' type="number" min={0} placeholder='Enter Your Age' />
    </div>
    <div>
        <label htmlFor="Weight">Weight</label> <br />
        <input type="number" min={0} placeholder='Enter Your Weight' />
    </div>
    <div>
        <label htmlFor="Height">Height</label> <br />
        <input type="number" min={0} placeholder='Height in cetimeter' />
    </div>
   </form>
   </main>


   </>
  )
}

export default BMI