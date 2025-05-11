import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, Search, ShoppingBag, MessageSquare, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// 앱의 다양한 화면 정의
const appScreens = [
  {
    id: "main",
    image: "/attached_assets/KakaoTalk_20250430_193529142_09.png",
    title: "메인 화면",
    description: "바로거래 앱의 메인 화면입니다. 다양한 카테고리와 인기 상품을 확인할 수 있습니다."
  },
  {
    id: "delivery",
    image: "/attached_assets/KakaoTalk_20250430_193529142_08.png",
    title: "배달 서비스",
    description: "다양한 음식점의 메뉴를 검색하고 주문할 수 있습니다."
  },
  {
    id: "chat",
    image: "/attached_assets/KakaoTalk_20250430_193529142_04.png",
    title: "채팅",
    description: "판매자와 실시간 채팅으로 거래 조건을 협의하세요."
  },
  {
    id: "profile",
    image: "/attached_assets/KakaoTalk_20250430_193529142_01.png",
    title: "내 정보",
    description: "포인트 적립 현황과 계정 정보를 관리할 수 있습니다."
  },
  {
    id: "market",
    image: "/attached_assets/KakaoTalk_20250430_193529142_06.png",
    title: "장터",
    description: "다양한 중고 물품을 카테고리별로 확인할 수 있습니다."
  }
];

export default function InteractiveAppPreview() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  // 현재 화면 찾기
  const currentScreenData = appScreens.find(screen => screen.id === currentScreen) || appScreens[0];

  // 화면 전환 함수
  const changeScreen = (screenId: string) => {
    setCurrentScreen(screenId);
  };

  // 기능 설명 모달 열기
  const openFeatureModal = (screenId: string) => {
    setSelectedFeature(screenId);
    setModalOpen(true);
  };

  return (
    <section id="interactive-demo" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">앱 미리보기</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">
            바로거래 앱 체험하기
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            다운로드 전에 바로거래 앱의 주요 기능을 미리 체험해보세요.
            아래 화면을 클릭하여 다양한 기능을 살펴볼 수 있습니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* 앱 미리보기 화면 (왼쪽) */}
          <motion.div
            className="relative w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] bg-gray-800 rounded-[32px] p-2 shadow-xl border-[8px] border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[18px] bg-gray-800 rounded-b-lg z-10"></div>
              <div className="h-full w-full relative overflow-hidden rounded-[18px] bg-white">
                {/* 앱 상단 상태바 */}
                <div className="absolute top-0 left-0 w-full px-4 py-2 flex justify-between items-center bg-gradient-to-r from-primary/80 to-primary text-white z-10">
                  <span className="text-xs">9:41</span>
                  <div className="flex space-x-1">
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋</span>
                  </div>
                </div>

                {/* 앱 화면 내용 */}
                <div className="h-full w-full pt-8 relative">
                  {/* 헤더 부분 */}
                  <div className="px-3 py-2 flex justify-between items-center border-b">
                    {currentScreen !== "main" && (
                      <button 
                        className="text-gray-500"
                        onClick={() => changeScreen("main")}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                    )}
                    {currentScreen === "main" && <div className="w-5"></div>}
                    <h3 className="text-sm font-medium">{currentScreenData.title}</h3>
                    <div className="w-5"></div>
                  </div>

                  {/* 화면 콘텐츠 */}
                  <div className="h-[calc(100%-80px)] overflow-hidden">
                    <img 
                      src={currentScreenData.image} 
                      alt={`바로거래 앱 ${currentScreenData.title} 화면`} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 하단 내비게이션 바 */}
                  <div className="absolute bottom-0 left-0 w-full px-2 py-3 bg-white border-t flex justify-between items-center">
                    <button 
                      className={`flex flex-col items-center ${currentScreen === "main" ? "text-primary" : "text-gray-500"}`}
                      onClick={() => changeScreen("main")}
                    >
                      <Home className="h-5 w-5" />
                      <span className="text-[10px]">홈</span>
                    </button>
                    <button 
                      className={`flex flex-col items-center ${currentScreen === "delivery" ? "text-primary" : "text-gray-500"}`}
                      onClick={() => changeScreen("delivery")}
                    >
                      <Search className="h-5 w-5" />
                      <span className="text-[10px]">배달</span>
                    </button>
                    <button 
                      className={`flex flex-col items-center ${currentScreen === "market" ? "text-primary" : "text-gray-500"}`}
                      onClick={() => changeScreen("market")}
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span className="text-[10px]">장터</span>
                    </button>
                    <button 
                      className={`flex flex-col items-center ${currentScreen === "chat" ? "text-primary" : "text-gray-500"}`}
                      onClick={() => changeScreen("chat")}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-[10px]">채팅</span>
                    </button>
                    <button 
                      className={`flex flex-col items-center ${currentScreen === "profile" ? "text-primary" : "text-gray-500"}`}
                      onClick={() => changeScreen("profile")}
                    >
                      <User className="h-5 w-5" />
                      <span className="text-[10px]">내정보</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 기능 설명 (오른쪽) */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{currentScreenData.title}</h3>
            <p className="text-gray-600 mb-6">{currentScreenData.description}</p>
            
            <h4 className="font-semibold text-blue-900 mb-3">주요 기능 둘러보기</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {appScreens.map((screen) => (
                <Button
                  key={screen.id}
                  variant={currentScreen === screen.id ? "default" : "outline"}
                  onClick={() => changeScreen(screen.id)}
                  className="flex justify-start"
                >
                  <span className="truncate">{screen.title}</span>
                </Button>
              ))}
            </div>

            <div className="mt-auto">
              <Button
                variant="gradientPrimary" 
                size="lg"
                className="w-full"
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
                앱 다운로드
              </Button>
            </div>
          </motion.div>
        </div>

        {/* 기능 설명 모달 */}
        {modalOpen && selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-lg w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  {appScreens.find(s => s.id === selectedFeature)?.title || "기능 설명"}
                </h3>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-4">
                <img 
                  src={appScreens.find(s => s.id === selectedFeature)?.image || ""} 
                  alt="기능 스크린샷" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                {appScreens.find(s => s.id === selectedFeature)?.description || ""}
              </p>
              <Button
                variant="default"
                onClick={() => setModalOpen(false)}
                className="w-full"
              >
                닫기
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}