import Image from "next/image";
import facebook from '../../../public/resources/facebook.svg';
import twitter from '../../../public/resources/twitter.svg';
import linkedin from '../../../public/resources/linkedin.svg';
import instagram from '../../../public/resources/instagram.svg';
import file from '../../../public/resources/file.svg';
import home from '../../../public/resources/home-footer.svg';
import mail from '../../../public/resources/mail-footer.svg';
import phone from '../../../public/resources/phone-footer.svg';
import www from '../../../public/resources/www-footer.svg';

export default function Footer() {
  return (
    <footer>
        <div className="bg-[#233545] h-[460px] flex flex-row justify-around items-start">

            <div className="w-[330px] pt-24">
                <p className="text-[#FFFFFF] text-[20px]">Logo</p>
                <p className="text-[#7A8793] text-[15px] py-5"> Search for will uncover many web sites
                    variables onto of passages of lorem ipsum
                    available but the majority the words all
                    predefined humour to met chunks recently
                    with desktop.
                </p>
                <ol className="flex space-x-3">
                    <li><Image src={facebook} alt="facebook" /></li>
                    <li><Image src={twitter} alt="twitter" /></li>
                    <li><Image src={linkedin} alt="linkedin" /></li>
                    <li><Image src={instagram} alt="instagram" /></li>
                </ol>
            </div>

            <div className="w-[330px] pt-24">
                <p className="text-[#FFFFFF] text-[20px]">Quick Links</p>
                <ol className="text-[#7A8793] text-[16px] space-y-3 pt-5">
                    <li className="flex"><Image src={file} alt="file" /> About Us</li>
                    <li className="flex"><Image src={file} alt="file" /> Our Services</li>
                    <li className="flex"><Image src={file} alt="file" /> Featured Blog</li>
                    <li className="flex"><Image src={file} alt="file" /> Car Fleet</li>
                    <li className="flex"><Image src={file} alt="file" /> FAQ</li>
                </ol>
            </div>

            <div className="w-[330px] pt-24">
                <p className="text-[#ffffff] text-[20px]">Contact Info</p>
                <ol className="text-[#7A8793] text-[16px] space-y-3 pt-5">
                    <li className="flex"><Image src={home} alt="home" />10A, San Andreno, USA</li>
                    <li className="flex"><Image src={mail} alt="mail" />example@booking.com</li>
                    <li className="flex"><Image src={phone} alt="phone" />+1-333-444-555</li>
                    <li className="flex"><Image src={www} alt="www" />www.example.com</li>
                </ol>
            </div>

        </div>

        <div className="bg-[#1F303F] h-[80px] flex flex-row justify-start items-center pl-10">
            <div className="text-[#7A8793] text-[16px]">© Copyrights 2023 Logo. All Rights Reserved</div>
        </div>
    </footer>
  )
}
