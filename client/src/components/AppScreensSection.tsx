import { motion } from "framer-motion";

const screens = [
  {
    image: "/attached_assets/KakaoTalk_20250430_193529142_01.png",
    title: "포인트 화면",
    description: "적립된 포인트를 확인하고 관리할 수 있는 화면",
  },
  {
    image: "/attached_assets/KakaoTalk_20250430_193529142_03.png",
    title: "모임 관리",
    description: "동네 모임 참여와 예약 현황을 확인할 수 있는 화면",
  },
  {
    image: "/attached_assets/KakaoTalk_20250430_193529142_08.png",
    title: "배달 주문",
    description: "다양한 메뉴를 검색하고 배달 주문할 수 있는 화면",
  },
  {
    image: "/attached_assets/KakaoTalk_20250430_193529142_06.png",
    title: "장터 화면",
    description: "다양한 물품을 카테고리별로 검색하고 거래할 수 있는 화면",
  },
];

export default function AppScreensSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">앱 화면</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">바로거래 앱 살펴보기</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            직관적이고 사용하기 쉬운 바로거래 앱 인터페이스를 미리 살펴보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={screen.image}
                alt={`바로거래 앱 화면 - ${screen.title}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-blue-900">{screen.title}</h3>
                <p className="text-gray-600 text-sm">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
