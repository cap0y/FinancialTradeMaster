import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Users, MessageCircle, Shield, Search, Gift } from "lucide-react";

const marketFeatures = [
  {
    icon: <ShoppingBag className="text-xl text-primary" />,
    title: "상세한 상품 정보",
    description: "다각도 고화질 상품 이미지와 상품 컨디션, 사용 기간, 구매 이력 등 상세 정보를 확인할 수 있습니다.",
  },
  {
    icon: <Search className="text-xl text-primary" />,
    title: "지역 기반 필터링",
    description: "사용자 위치 기반으로 지역 상품을 자동 필터링하여 가까운 거래부터 보여줍니다.",
  },
  {
    icon: <Users className="text-xl text-primary" />,
    title: "지역 커뮤니티",
    description: "지역 기반의 커뮤니티 게시판, 동네 소식, 지역 이벤트 정보를 확인할 수 있습니다.",
  },
  {
    icon: <MessageCircle className="text-xl text-primary" />,
    title: "실시간 채팅",
    description: "판매자와 구매자 간 실시간 채팅으로 쉽고 빠르게 거래를 협의할 수 있습니다.",
  },
  {
    icon: <Gift className="text-xl text-primary" />,
    title: "알바 구인구직",
    description: "지역 기반 아르바이트 정보를 제공하며, 간편한 지원 시스템으로 일자리를 구할 수 있습니다.",
  },
  {
    icon: <Shield className="text-xl text-primary" />,
    title: "종합 리뷰 시스템",
    description: "거래 완료 후 상대방에 대한 정직한 평가로 신뢰도 높은 거래 환경을 제공합니다.",
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

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">장터 기능</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">
            직관적인 장터 서비스
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            사용자 경험을 최적화한 직관적인 메인 화면 구성으로 필요한 모든 정보를 한눈에 확인할 수 있습니다.
            위치 설정과 검색 기능으로 빠르게 원하는 상품을 찾을 수 있으며, 중요 기능들은 쉽게 조작할 수 있게 배치했습니다.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row items-center mb-16">
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 md:mr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-900">간편한 등록과 모임 관리</h3>
            <p className="text-gray-600 mb-6">
              상품 등록 과정을 최대한 간소화했으며, 이미지 인식 기반으로 자동 카테고리 및 키워드를 추천합니다.
              비슷한 상품의 가격 정보를 제공하여 적정 가격 책정을 도와줍니다. 또한 동네에서 취미, 운동, 스터디 등
              다양한 모임을 개설하거나 참여할 수 있는 '동네 모임' 기능도 제공합니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                </div>
                <p className="text-gray-600">이미지 인식 기반 자동 카테고리 및 키워드 추천</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                </div>
                <p className="text-gray-600">비슷한 상품 가격 정보 제공으로 적정 가격 책정 도움</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <p className="text-gray-600">취미, 운동, 스터디 등 다양한 모임 개설 및 참여</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/attached_assets/KakaoTalk_20250430_193529142_06.png"
              alt="바로거래 앱 상품 등록 화면"
              className="rounded-xl shadow-xl w-full"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {marketFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-start feature-card transition-all duration-300 hover:shadow-lg"
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
      </div>
    </section>
  );
}