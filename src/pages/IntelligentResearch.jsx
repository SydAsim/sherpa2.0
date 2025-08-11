import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Layout/Navbar';
import Sidebar from '@/components/Layout/Sidebar';
import ResearchTab from '@/components/research/ResearchTab';
import ThreatIntelligenceTab from '@/components/research/ThreatIntelligenceTab';
import AIAnalysisTab from '@/components/research/AIAnalysisTab';

const IntelligentResearch = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Intelligent Research - SHERPA AI Vulnerability Management</title>
        <meta name="description" content="Access comprehensive security research, threat intelligence, and vulnerability analysis with SHERPA's AI-powered research platform." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar showMenu onMenuClick={() => setIsSidebarOpen(true)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <div className="pt-16 md:ml-64">
          <div className="px-4 py-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-8 gap-3 flex-wrap">
                <div className="min-w-[200px]">
                  <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Search className="h-8 w-8 text-primary" />
                    Intelligent Research
                  </h1>
                  <p className="text-muted-foreground">
                    AI-powered security research and threat intelligence
                  </p>
                </div>
              </div>

              <Tabs defaultValue="research" className="space-y-6">
                <div className="w-full overflow-x-auto">
                  <TabsList className="inline-flex min-w-max gap-2">
                  <TabsTrigger value="research">Security Research</TabsTrigger>
                  <TabsTrigger value="intelligence">Threat Intelligence</TabsTrigger>
                  <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="research" className="space-y-6">
                  <ResearchTab />
                </TabsContent>

                <TabsContent value="intelligence" className="space-y-6">
                  <ThreatIntelligenceTab />
                </TabsContent>

                <TabsContent value="analysis" className="space-y-6">
                  <AIAnalysisTab />
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntelligentResearch;