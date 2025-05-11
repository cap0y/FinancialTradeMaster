import { motion } from "framer-motion";
import { Handshake, Truck, Wallet } from "lucide-react";

const features = [
  {
    icon: <Handshake className="h-6 w-6 text-primary" />,
    title: "직거래 서비스",
    description: "원하는 물건을 동네에서 쉽고 빠르게 찾아 직거래할 수 있는 편리한 서비스",
  },
  {
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "바로배달 서비스",
    description: "위치 기반으로 근처 인기 음식점을 자동 추천하고 실시간 배달 추적 기능을 제공하는 서비스",
  },
  {
    icon: <Wallet className="h-6 w-6 text-primary" />,
    title: "알바 구인구직",
    description: "지역 기반 아르바이트 정보를 찾고 지원할 수 있는 통합 구인구직 플랫폼 서비스",
  },
];

const featureAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">바로거래로 시작하세요</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            언제 어디서나 편하게 동네 장터에서 알바도 구하고 직거래로 물건도 사고팔고
            배달 음식 주문도 하고 지금 시작하세요!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureAnimation}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
