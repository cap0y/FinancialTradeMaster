import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bike, MapPin, Store, Clock, Calendar, Star, Utensils, ShoppingBag, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <Bike className="text-xl text-primary" />,
    title: "위치 기반 인기 음식점 자동 추천",
    description: "근처 상점과 배달 가능한 서비스를 위치 기반으로 빠르게 확인하고 이용할 수 있습니다.",
  },
  {
    icon: <MapPin className="text-xl text-primary" />,
    title: "실시간 배달 추적 및 예상 도착 시간 확인",
    description: "주문한 물품의 현재 위치와 예상 도착 시간을 실시간으로 확인할 수 있습니다.",
  },
  {
    icon: <Store className="text-xl text-primary" />,
    title: "간편 결제 및 할인 쿠폰, 포인트 적립 혜택",
    description: "다양한 결제 방식을 지원하며, 할인 쿠폰과 포인트 적립으로 더 저렴하게 이용할 수 있습니다.",
  },
  {
    icon: <Clock className="text-xl text-primary" />,
    title: "주문 내역 관리 및 재주문 기능",
    description: "과거 주문 내역을 손쉽게 확인하고 재주문할 수 있는 기능을 제공합니다.",
  },
];

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">주요 기능</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">
            바로배달 서비스
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            바로거래의 배달 서비스는 빠르고 편리한 배달서비스로 사용자 주변에서의 음식배달부터 물건배
            달까지 모두 가능한 종합 서비스입니다. 바로 가까운 곳의 금액 배달료를 가까운 곳부터 추천하며, 
            구입신청 배달 추적 가능을 통해 주문 물품의 배달 현황을 확인할 수 있는 서비스를 제공합니다.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-start feature-card transition-all duration-300"
              variants={itemAnimation}
            >
              <div className="mr-5 mt-1">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="md:w-1/2 p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              NEW
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
              바로거래 앱으로 <br />모든 서비스를 한 번에
            </h3>
            <p className="text-gray-600 mb-6">
              배달부터 중고거래, 서비스 연결까지 다양한 기능을 하나의 앱에서 편리하게 이용해보세요. 
              근거리 서비스에 최적화된 바로거래로 더 빠르고 편리한 경험을 만나보세요.
            </p>
            <Button
              variant="gradientPrimary"
              size="lg"
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
          <div className="md:w-1/2">
            <img
              src="/attached_assets/KakaoTalk_20250430_193529142_10.png"
              alt="바로거래 앱 사용 모습"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
