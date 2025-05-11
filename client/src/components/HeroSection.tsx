import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Info, Download } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg pt-28 pb-16 md:pt-36 md:pb-24 px-4 relative overflow-hidden">
      <BackgroundAnimation />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">바로거래</h1>
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              언제 어디서나 편하게 동네 장터에서 알바도 구하고 직거래로 물건도 사고팔고
              <br className="hidden md:block" />
              배달 음식 주문도 하고 지금 시작하세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  const element = document.querySelector("#download");
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.pageYOffset - 70,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <Download className="mr-2 h-5 w-5" /> 앱 다운로드
              </Button>
              <Button 
                variant="whiteOutline" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#features");
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.pageYOffset - 70,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <Info className="mr-2 h-5 w-5" /> 서비스 소개
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/attached_assets/KakaoTalk_20250430_193529142.png" 
                alt="바로거래 앱 화면" 
                className="rounded-xl custom-shadow h-auto max-w-xs md:max-w-md" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
