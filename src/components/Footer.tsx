import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <div className="flex bg-[#FFFCF2] border-t-[1px] items-center justify-center p-5 space-x-128 text-[14px]">
                <div className="flex space-x-1">
                    <span>&copy; 2025 / Mads Villadsen / Built with</span>
                    <a href="https://reactjs.org/" target="_blank" className="hover:text-[#EB5E28] transition-colors duration-150">React</a>
                    <span>and</span>
                    <a href="https://tailwindcss.com/" target="_blank" className="hover:text-[#EB5E28] transition-colors duration-150">Tailwind CSS</a>
                </div>
                <div className="flex space-x-4 text-[#252422] text-[20px]">
                    <a href="https://github.com/Ditz3n" target="_blank" className="hover:text-[#EB5E28] transition-colors duration-150"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ditz3n/" target="_blank" className="hover:text-[#EB5E28] transition-colors duration-150"><FaLinkedin /></a>
                    <a href="mailto:mvmads@gmail.com" className="hover:text-[#EB5E28] transition-colors duration-150"><MdMail /></a>
                </div>
            </div>
        </footer>
    )
}