import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { appStoreLinks } from "@/lib/utils";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function DownloadSection() {
  const { toast } = useToast();
  const [downloadStats, setDownloadStats] = useState<{ ios: number, android: number } | null>(null);
  
  useEffect(() => {
    // Fetch download statistics when component mounts
    const fetchDownloadStats = async () => {
      try {
        const response = await fetch('/api/download-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch download statistics');
        }
        const data = await response.json();
        setDownloadStats(data.data);
      } catch (error) {
        console.error('Error fetching download stats:', error);
      }
    };
    
    fetchDownloadStats();
  }, []);
  
  // Function to track app downloads
  const trackDownload = async (platform: 'ios' | 'android') => {
    try {
      // Send download tracking data to API
      const response = await fetch('/api/download-tracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to track ${platform} download`);
      }
      
      // Update local download stats
      if (downloadStats) {
        setDownloadStats({
          ...downloadStats,
          [platform]: downloadStats[platform] + 1,
        });
      }
      
      // Show success toast
      toast({
        title: "다운로드 시작",
        description: "바로거래 앱 다운로드를 시작합니다.",
      });
      
      // Open the actual app store link
      window.open(platform === 'ios' ? appStoreLinks.appStore : appStoreLinks.googlePlay, '_blank');
    } catch (error) {
      console.error(`Error tracking ${platform} download:`, error);
      toast({
        title: "오류 발생",
        description: "다운로드 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="download" className="gradient-bg py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">바로거래 앱 다운로드</h2>
          <p className="text-white text-lg mb-8">
            지금 바로 바로거래 앱을 다운로드하고 편리한 서비스를 이용해보세요.
            App Store와 Google Play에서 무료로 다운로드 가능합니다.
          </p>

          {downloadStats && (
            <div className="mb-6 bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-white text-sm mb-2">현재 다운로드 수</p>
              <div className="flex justify-center gap-8">
                <div>
                  <FaApple className="text-white text-xl inline-block mr-2" />
                  <span className="text-white font-bold">{downloadStats.ios.toLocaleString()}</span>
                </div>
                <div>
                  <FaGooglePlay className="text-white text-xl inline-block mr-2" />
                  <span className="text-white font-bold">{downloadStats.android.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="download"
                size="lg"
                className="w-full h-auto py-3 px-6"
                onClick={() => trackDownload('ios')}
              >
                <FaApple className="text-2xl mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
            </motion.div>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="download"
                size="lg"
                className="w-full h-auto py-3 px-6"
                onClick={() => trackDownload('android')}
              >
                <FaGooglePlay className="text-2xl mr-3" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
              <img
                src="/attached_assets/KakaoTalk_20250430_193529142_05.png"
                alt="바로거래 앱 스크린샷 1"
                className="rounded-xl shadow-xl w-full md:w-1/3 h-auto"
              />
              <img
                src="/attached_assets/KakaoTalk_20250430_193529142_07.png"
                alt="바로거래 앱 스크린샷 2"
                className="rounded-xl shadow-xl w-full md:w-1/3 h-auto"
              />
              <img
                src="/attached_assets/KakaoTalk_20250430_193529142_02.png"
                alt="바로거래 앱 스크린샷 3"
                className="rounded-xl shadow-xl w-full md:w-1/3 h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
