import { useState, useEffect } from 'react';
import { HiOutlineUserCircle, HiOutlineLibrary, HiOutlineDocumentDuplicate, HiOutlineMail } from "react-icons/hi";

export default function Header() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Copenhagen', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [hours, minutes, seconds] = currentTime.split(':');

    return (
        <>
            <header className="fixed top-0 left-0 w-[calc(100%+8px)] flex bg-[#FFFCF2] border-b-[1px] items-center p-5 text-[14px] z-50 shadow-xs">
                <div className='flex items-center gap-1 w-[150px]'>
                    <span>Denmark</span>
                    <span>/</span>
                    <a href='https://da.wikipedia.org/wiki/Aarhus' target='_blank' className='text-[#EB5E28]'>Aarhus</a>
                </div>
                <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 text-[#252422]">
                    <a href="#about" className="flex items-center gap-1 group">
                        <span className='text-lg text-[#EB5E28] group-hover:text-black transition-colors duration-150'><HiOutlineUserCircle /></span>
                        <span className='text-black group-hover:text-[#EB5E28] transition-colors duration-150'>About</span>
                    </a>
                    <a href="#experience" className="flex items-center gap-1 group">
                        <span className='text-lg text-[#EB5E28] group-hover:text-black transition-colors duration-150'><HiOutlineLibrary /></span>
                        <span className='text-black group-hover:text-[#EB5E28] transition-colors duration-150'>Experience</span>
                    </a>
                    <a href="#projects" className="flex items-center gap-1 group">
                        <span className='text-lg text-[#EB5E28] group-hover:text-black transition-colors duration-150'><HiOutlineDocumentDuplicate /></span>
                        <span className='text-black group-hover:text-[#EB5E28] transition-colors duration-150'>Projects</span>
                    </a>
                    <a href="#contact" className="flex items-center gap-1 group">
                        <span className='text-lg text-[#EB5E28] group-hover:text-black transition-colors duration-150'><HiOutlineMail /></span>
                        <span className='text-black group-hover:text-[#EB5E28] transition-colors duration-150'>Contact</span>
                    </a>
                </nav>
                <a href="https://www.timeanddate.com/worldclock/denmark/aarhus" target="_blank" className="w-[80px] text-right ml-auto">
                    <span className="text-[#EB5E28]">{hours}</span>
                    <span>:{minutes}:{seconds}</span>
                </a>
            </header>
        </>
    );
}