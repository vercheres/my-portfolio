import * as React from "react";
import { Link } from "gatsby";
import "../style/site.scss";

const ContactPage = () => {
  return (
    <main>
      <div className="indexHeader">
        <nav class="flex items-center justify-between">
          <ul class="flex items-center justify-between">
            <li class="mr-7">
              <Link to="/">Home</Link>
            </li>
            <li class="mr-7">
              <Link to="/about/">About Me</Link>
            </li>
            <li class="mr-7">
              <Link to="/projects/">Projects</Link>
            </li>
            <li class="mr-7">
              <Link to="/hobbies/">Hobbies</Link>
            </li>
            <li class="mr-7">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <h1 class="font-black">LET'S GET IN TOUCH</h1>
        <form class="w-full max-w-lg" method="post" action="https://getform.io/f/71dc70f1-2cc4-41bf-90aa-bdb768b516e6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2" for="grid-name">
                Name
              </label>
            </div>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white font-bold" id="grid-first-name" type="text" name="name"/>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2" for="grid-email">
                Email
              </label>
              <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-bold" id="grid-email" type="email"/>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label>
                    Subject
                 </label>
            </div>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-bold" id="grid-subject" type="text" name="name" />
          </div>
          <label>
                Message
            <input type="message" name="emailmessage" id="messageInput" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </main>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>
