import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { appStoreLinks, socialLinks } from "@/lib/utils";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" className="bg-white rounded p-1">
                <rect width="24" height="24" rx="4" fill="hsl(var(--primary))" />
                <path d="M7 12H17M12 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xl font-bold">바로거래</span>
            </div>
            <p className="text-gray-300 mb-4">
              간에 어디서나 원하는 물건 인근에서 판매자 구하고 직거래로 물건도 사고팔고 배달 음식 주문도 할 수 있는 서비스
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.facebook} className="text-white hover:text-primary transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href={socialLinks.twitter} className="text-white hover:text-primary transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href={socialLinks.instagram} className="text-white hover:text-primary transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href={socialLinks.youtube} className="text-white hover:text-primary transition">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">서비스 소개</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-white transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#features");
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - 70,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  바로배달 서비스
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  바로거래 마켓
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  가까운 상점 찾기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  배달 추적 시스템
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#contact");
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - 70,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">앱 다운로드</h3>
            <p className="text-gray-300 mb-4">
              지금 바로 바로거래 앱을 다운로드하고 편리한 서비스를 이용해보세요.
            </p>
            <div className="flex flex-col space-y-3">
              <a href={appStoreLinks.appStore}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-blue-900 hover:bg-gray-200 transition flex items-center justify-center"
                >
                  <FaApple className="text-lg mr-2" /> App Store
                </Button>
              </a>
              <a href={appStoreLinks.googlePlay}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-blue-900 hover:bg-gray-200 transition flex items-center justify-center"
                >
                  <FaGooglePlay className="text-lg mr-2" /> Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 바로거래. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
