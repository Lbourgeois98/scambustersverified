import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Shield, 
  Megaphone, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Target,
  Zap
} from 'lucide-react';
import { Link } from '../components/Link';

const AgentBenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-16">
      <div className="container mx-auto px-3 md:px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex justify-center items-center p-2 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mb-4">
            <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Join the <span className="text-gold-500">Elite</span> Network of 
            <span className="text-red-600"> Verified</span> Agents
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-lg px-4">
            Unlock exclusive benefits, increase your revenue by up to 400%, and gain the trust 
            of thousands of players worldwide. Join ScamBusters' verified agent program today.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
          <div className="dark-box p-3 md:p-6 rounded-lg text-center">
            <div className="text-xl md:text-3xl font-bold text-gold-500 mb-1 md:mb-2">400%</div>
            <div className="text-xs md:text-sm text-gray-300">Revenue Increase</div>
          </div>
          <div className="dark-box p-3 md:p-6 rounded-lg text-center">
            <div className="text-xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">50K+</div>
            <div className="text-xs md:text-sm text-gray-300">Active Players</div>
          </div>
          <div className="dark-box p-3 md:p-6 rounded-lg text-center">
            <div className="text-xl md:text-3xl font-bold text-gold-500 mb-1 md:mb-2">98%</div>
            <div className="text-xs md:text-sm text-gray-300">Player Trust Rate</div>
          </div>
          <div className="dark-box p-3 md:p-6 rounded-lg text-center">
            <div className="text-xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">24/7</div>
            <div className="text-xs md:text-sm text-gray-300">Support Access</div>
          </div>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-green-500/20 p-3 rounded-full inline-block mb-4 border border-green-500/30">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Massive Revenue Boost</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Verified agents see an average 400% increase in player deposits and 300% more sign-ups 
              within the first 30 days of verification.
            </p>
            <div className="text-green-400 text-sm font-medium">
              ✓ Higher conversion rates ✓ Premium player access ✓ Increased trust
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-4 border border-blue-500/30">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Exclusive Player Network</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Get access to our network of 50,000+ active players who specifically seek out 
              verified agents for their gaming needs.
            </p>
            <div className="text-blue-400 text-sm font-medium">
              ✓ High-value players ✓ Regular depositors ✓ Long-term customers
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-purple-500/20 p-3 rounded-full inline-block mb-4 border border-purple-500/30">
              <Megaphone className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Free Marketing & Promotion</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Featured placement in our directory, social media promotion, and professional 
              marketing materials - all included at no extra cost.
            </p>
            <div className="text-purple-400 text-sm font-medium">
              ✓ Directory listing ✓ Social media posts ✓ Marketing badges
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-4 border border-gold-400/30">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Industry Recognition</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Join the elite circle of verified agents recognized across the industry as 
              trustworthy and professional gaming operators.
            </p>
            <div className="text-gold-400 text-sm font-medium">
              ✓ Verified badge ✓ Industry credibility ✓ Professional status
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-red-500/20 p-3 rounded-full inline-block mb-4 border border-red-500/30">
              <Globe className="h-6 w-6 md:h-8 md:w-8 text-red-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Global Exposure</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Reach players worldwide through our international network and gain credibility 
              in global gaming communities.
            </p>
            <div className="text-red-400 text-sm font-medium">
              ✓ International reach ✓ Global credibility ✓ Worldwide recognition
            </div>
          </div>

          <div className="dark-box p-4 md:p-6 rounded-lg transition-transform hover:transform hover:scale-105">
            <div className="bg-cyan-500/20 p-3 rounded-full inline-block mb-4 border border-cyan-500/30">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Priority Support</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Get 24/7 priority customer support, dispute resolution assistance, and 
              dedicated account management for your business.
            </p>
            <div className="text-cyan-400 text-sm font-medium">
              ✓ 24/7 support ✓ Dispute resolution ✓ Account manager
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white">
            Success Stories from <span className="text-gold-500">Verified Agents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="dark-box-light p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-green-500 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center mr-3 md:mr-4">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Lucky Ace Gaming</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Verified Agent</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                "After getting verified with ScamBusters, my player base grew by 250% in just 2 months. 
                The trust factor is incredible!"
              </p>
              <div className="text-green-400 text-xs md:text-sm font-medium">
                +250% Player Growth • +400% Revenue
              </div>
            </div>

            <div className="dark-box-light p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-blue-500 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center mr-3 md:mr-4">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Tiger Sweepstakes</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Verified Agent</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                "The verification badge alone increased my conversion rate by 300%. Players trust 
                verified agents more than anyone else."
              </p>
              <div className="text-blue-400 text-xs md:text-sm font-medium">
                +300% Conversion Rate • Premium Players
              </div>
            </div>

            <div className="dark-box-light p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-purple-500 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center mr-3 md:mr-4">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">Mega Money</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Verified Agent</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                "ScamBusters verification opened doors to high-value players I never had access to before. 
                My monthly revenue tripled!"
              </p>
              <div className="text-purple-400 text-xs md:text-sm font-medium">
                +300% Monthly Revenue • VIP Access
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Benefits List */}
        <div className="dark-box p-6 md:p-8 rounded-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white text-center">
            Exclusive Benefits for <span className="text-gold-500">Verified Agents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Priority 24/7 customer support access
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Monthly business review consultations
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Networking with other verified agents
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Professional marketing materials & badges
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Industry insights and market reports
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Referral bonus program participation
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Featured placement in agent directory
            </div>
            <div className="flex items-center text-gray-300 text-sm md:text-base">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 md:mr-3 flex-shrink-0" />
              Social media promotion and exposure
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="dark-box p-6 md:p-8 rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
              Ready to <span className="text-gold-500">Transform</span> Your Business?
            </h2>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Join hundreds of successful agents who have already boosted their revenue and gained player trust through ScamBusters verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                href="/apply" 
                className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center font-medium text-sm md:text-base"
              >
                Apply for Verification
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/agents" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all border border-white/20 hover:border-white/40 flex items-center justify-center font-medium text-sm md:text-base"
              >
                View Verified Agents
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBenefitsPage;