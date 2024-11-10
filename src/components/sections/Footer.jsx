import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex gap-8 md:text-xl items-center border-t border-t-1 border-t-solid border-t-secondary uppercase w-full py-4'>
        <Link className="after:absolute after:w-[0%] hover:after:w-[100%] after:h-[1px] after:transition-all relative after:bg-secondary after:top-1/2 after:left-0" target='_blank' href={"https://drive.google.com/file/d/1A8VBHFBG_Sonz6x4vbCpd0Z6ok-AGHeF/view"}>Resume</Link>
        <Link className="after:absolute after:w-[0%] hover:after:w-[100%] after:h-[1px] after:transition-all relative after:bg-secondary after:top-1/2 after:left-0" target='_blank' href={"https://www.linkedin.com/in/ziaddalii/"}>Linkedin</Link>
        <Link className="after:absolute after:w-[0%] hover:after:w-[100%] after:h-[1px] after:transition-all relative after:bg-secondary after:top-1/2 after:left-0" target='_blank' href={"https://github.com/ziaddalii"}>Github</Link>
    </footer>
  )
}

export default Footer