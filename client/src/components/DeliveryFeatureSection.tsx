import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Star, Users, MessageCircle, Clock, ShoppingBag } from "lucide-react";

const additionalFeatures = [
  {
    icon: <Calendar className="text-xl text-primary" />,
    title: "시간 예약 배달 서비스",
    description: "원하는 시간에 정확히 음식을 받을 수 있도록 예약 배달 서비스를 제공합니다.",
  },
  {
    icon: <Utensils className="text-xl text-primary" />,
    title: "여러 음식점 통합 주문",
    description: "다양한 메뉴를 한 번에 주문하여 여러 음식점의 음식을 한 번에 배달받을 수 있습니다.",
  },
  {
    icon: <Star className="text-xl text-primary" />,
    title: "정직한 리뷰 시스템",
    description: "실제 주문 고객만 작성 가능한 진짜 리뷰로 맛, 양, 배달 속도, 포장 상태 등 세부 평가가 가능합니다.",
  },
  {
    icon: <Users className="text-xl text-primary" />,
    title: "공유 주문 시스템",
    description: "친구나 가족과 메뉴 선택부터 결제까지 실시간으로 협업할 수 있는 주문 공유 기능을 제공합니다.",
  },
  {
    icon: <MessageCircle className="text-xl text-primary" />,
    title: "사장님 소통 채널",
    description: "음식점 사장님과 직접 소통하여 주문 요청사항을 상세히 전달할 수 있습니다.",
  },
  {
    icon: <ShoppingBag className="text-xl text-primary" />,
    title: "동네 장터 연계",
    description: "배달 서비스와 동네 장터를 함께 이용하며 포인트도 통합 적립할 수 있습니다.",
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

export default function DeliveryFeatureSection() {
  return (
    <section id="delivery-features" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">배달 서비스 특징</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">
            맞춤형 배달 옵션
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            바로배달은 단순한 음식 주문을 넘어 사용자에게 다양한 옵션과 특별한 경험을 제공합니다. 
            원하는 시간에 배달 예약을 할 수 있고, 여러 음식점의 메뉴를 한 번에 주문할 수 있는 통합 주문 서비스를 제공합니다.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start feature-card transition-all duration-300 hover:shadow-lg"
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
          className="flex flex-col md:flex-row items-center bg-primary bg-opacity-5 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="md:w-1/2">
            <img
              src="/attached_assets/KakaoTalk_20250430_193529142_09.png"
              alt="바로거래 앱 배달 리뷰 시스템"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              NEW
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
              정직한 리뷰 시스템
            </h3>
            <p className="text-gray-600 mb-6">
              바로배달의 리뷰 시스템은 실제 주문한 고객의 솔직한 평가만을 반영합니다. 
              AI 분석 기술로 허위 리뷰를 필터링하고, 상세한 평가 항목(맛, 양, 배달 속도, 포장 상태 등)을 
              통해 정확한 정보를 제공합니다.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Star className="text-primary mr-2 h-5 w-5" />
                <span className="text-gray-700">실제 주문 고객만 작성 가능한 진짜 리뷰</span>
              </div>
              <div className="flex items-center">
                <Star className="text-primary mr-2 h-5 w-5" />
                <span className="text-gray-700">맛, 양, 배달 속도, 포장 상태 등 세부 평가</span>
              </div>
              <div className="flex items-center">
                <Star className="text-primary mr-2 h-5 w-5" />
                <span className="text-gray-700">음식 사진과 함께 실제 메뉴 상태 확인 가능</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}