import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "앱 다운로드",
    description: "App Store 또는 Google Play에서 바로거래 앱을 다운로드하세요.",
  },
  {
    number: "2",
    title: "회원가입",
    description: "간단한 정보를 입력하여 회원가입을 완료하세요.",
  },
  {
    number: "3",
    title: "서비스 선택",
    description: "원하는 서비스(배달, 직거래 등)를 선택하세요.",
  },
  {
    number: "4",
    title: "이용 시작",
    description: "원하는 물건을 주문하거나 판매하여 바로거래를 시작하세요.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">이용 방법</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-blue-900">
            바로거래 이용 방법
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            간편한 몇 단계로 바로거래 서비스를 이용해보세요.
            쉽고 빠르게 원하는 물건을 거래하고 배달 서비스도 이용할 수 있습니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => {
            return (
              <div key={step.number} className="flex items-center">
                <motion.div
                  className="bg-gray-50 rounded-lg p-6 text-center w-full md:w-full transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-blue-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block text-primary ml-4">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
