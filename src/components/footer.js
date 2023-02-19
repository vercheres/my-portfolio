import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

export default function Footer() {
    return (
        <footer class="p-4 bg-[#0077b6] sm:p-2">
            <div class=" px-4 py-6">
                <span>Manh Anh Tuan, Nguyen. {new Date().getFullYear()} &middot; Built with {``} 
                <a href="https://www.gatsbyjs.com">Gatsby</a> & <a href="https://tailwindcss.com">Tailwind CSS</a></span>
            </div>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://www.linkedin.com/in/anhtuannguyen14/" class="hover:text-gray-500 sm:text-center"><FaLinkedin/></a>
                <a href="https://github.com/vercheres" class="hover:text-gray-500 sm:text-center"><FaGithub/></a>
            </div>
        </footer>
    )
}