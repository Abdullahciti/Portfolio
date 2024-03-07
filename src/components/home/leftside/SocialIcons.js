import { FaGithub, FaInstagram, FaFacebook, FaMessage, FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const SocialIcons = () => {
  return (
    <div className="w-fit mx-auto social-icons mb-5">
      <ul className="flex gap-2">
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#6f42c1] hover:text-[#161b22]" href="https://github.com/Abdullahciti" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#0e76a8]" href="https://www.linkedin.com/in/abdullah-a-757463264/" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a></li>
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#c13584]" href="https://www.instagram.com/citizenx___2/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#1877F2]" href="https://www.facebook.com/ArafaAbdullah0" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#1da1f2]" href="https://twitter.com/Abd0llahB" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        <li><a className="text-2xl w-[40px] h-[40px] flex justify-center items-center rounded-md hover:bg-[#0088cc]" href="mailto:abullahciti@gmx.de" target="_blank" rel="noopener noreferrer"><FaMessage /></a></li>
      </ul>
    </div>
  );
}

export default SocialIcons;
