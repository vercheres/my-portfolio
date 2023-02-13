import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../style/site.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => {
  return (
    <Layout>
        <SEO title="About"/>
        <SEO title="projects"/>
        <nav class="flex items-center sm:px-4 px-2 py-2.5">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                  <Link to="/" class="block py-2 pl-3 pr-4 md:p-0">Home</Link>
              </li>
              <li>
                  <Link to="/about/" class="block py-2 pl-3 pr-4 md:p-0">About Me</Link>
              </li>
              <li>
                  <Link to="/projects/" class="block py-2 pl-3 pr-4 md:p-0">Projects</Link>
              </li>
              <li>
                  <Link to="/hobbies/" class="block py-2 pl-3 pr-4 md:p-0">Hobbies</Link>
              </li>
              <li>
                  <Link to="/contact/" class="block py-2 pl-3 pr-4 md:p-0">Contact</Link>
              </li>
            </ul>
            </div>
            </div>
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

    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>
