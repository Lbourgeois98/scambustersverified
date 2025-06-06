import React, { useState } from 'react';
import { Search, ExternalLink, Gamepad2 } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  description: string;
}

const games: Game[] = [
  {
    id: '1',
    name: 'Chumba Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://chumbacasino.com/',
    category: 'Sweepstakes Casino',
    description: 'Popular sweepstakes casino with slots and table games'
  },
  {
    id: '2',
    name: 'LuckyLand Slots',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://luckyland.com/',
    category: 'Sweepstakes Casino',
    description: 'Exciting slot games and sweepstakes prizes'
  },
  {
    id: '3',
    name: 'Global Poker',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://globalpoker.com/',
    category: 'Poker',
    description: 'Social poker platform with cash prizes'
  },
  {
    id: '4',
    name: 'Pulsz Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://pulsz.com/',
    category: 'Sweepstakes Casino',
    description: 'Modern sweepstakes casino experience'
  },
  {
    id: '5',
    name: 'High 5 Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://high5casino.com/',
    category: 'Social Casino',
    description: 'Premium slot games and social features'
  },
  {
    id: '6',
    name: 'WOW Vegas',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://wowvegas.com/',
    category: 'Sweepstakes Casino',
    description: 'Vegas-style gaming with sweepstakes'
  },
  {
    id: '7',
    name: 'Stake.us',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://stake.us/',
    category: 'Sweepstakes Casino',
    description: 'Crypto-friendly sweepstakes platform'
  },
  {
    id: '8',
    name: 'McLuck Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://mcluck.com/',
    category: 'Sweepstakes Casino',
    description: 'Irish-themed sweepstakes casino'
  },
  {
    id: '9',
    name: 'Fortune Coins',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://fortunecoins.com/',
    category: 'Sweepstakes Casino',
    description: 'Classic casino games with modern twist'
  },
  {
    id: '10',
    name: 'Funzpoints',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://funzpoints.com/',
    category: 'Sweepstakes Casino',
    description: 'Fun and engaging sweepstakes experience'
  },
  {
    id: '11',
    name: 'SweepSlots',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://sweepslots.com/',
    category: 'Sweepstakes Casino',
    description: 'Premium slot gaming experience'
  },
  {
    id: '12',
    name: 'NoLimitCoins',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://nolimitcoins.com/',
    category: 'Sweepstakes Casino',
    description: 'No limit fun with sweepstakes games'
  },
  {
    id: '13',
    name: 'Crown Coins',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://crowncoins.com/',
    category: 'Sweepstakes Casino',
    description: 'Royal treatment in sweepstakes gaming'
  },
  {
    id: '14',
    name: 'Zula Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://zulacasino.com/',
    category: 'Sweepstakes Casino',
    description: 'Exciting sweepstakes casino platform'
  },
  {
    id: '15',
    name: 'Moonspin',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://moonspin.us/',
    category: 'Sweepstakes Casino',
    description: 'Lunar-themed gaming experience'
  },
  {
    id: '16',
    name: 'Modo Casino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://modocasino.com/',
    category: 'Sweepstakes Casino',
    description: 'Modern approach to sweepstakes gaming'
  },
  {
    id: '17',
    name: 'Real Prize',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://realprize.com/',
    category: 'Sweepstakes Casino',
    description: 'Real prizes in sweepstakes format'
  },
  {
    id: '18',
    name: 'Sportzino',
    logo: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=200',
    url: 'https://sportzino.com/',
    category: 'Sports Betting',
    description: 'Sports betting with sweepstakes model'
  }
];

const GameLinksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(games.map(game => game.category)))];
  
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' ? true : game.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex justify-center items-center p-2 bg-red-600 rounded-full mb-4">
            <Gamepad2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Game Links</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the best sweepstakes casinos and social gaming platforms. All games listed here are legitimate and verified.
          </p>
        </div>

        <div className="dark-box rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
                className="w-full px-4 py-2 pl-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full md:w-auto px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
            
            {filteredGames.length === 0 && (
              <div className="col-span-full dark-box-light p-8 rounded-lg text-center">
                <p className="text-gray-300">No games found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>

        <div className="dark-box-light p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-white">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-lg mb-2 text-white">Sweepstakes Gaming</h3>
              <p className="text-gray-300 text-sm">
                Sweepstakes casinos operate under promotional laws, allowing players to win real prizes through a dual-currency system.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-white">Age Requirement</h3>
              <p className="text-gray-300 text-sm">
                All platforms require players to be 18+ years old. Some states may have additional restrictions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-white">Responsible Gaming</h3>
              <p className="text-gray-300 text-sm">
                Always play responsibly and within your means. Set limits and take breaks when needed.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-white">Verification</h3>
              <p className="text-gray-300 text-sm">
                Only play on verified platforms. Check with ScamBusters if you're unsure about a platform's legitimacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="dark-box-light rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="aspect-video bg-gradient-to-br from-red-600/20 to-gold-500/20 flex items-center justify-center p-4">
        <img 
          src={game.logo} 
          alt={`${game.name} logo`}
          className="w-16 h-16 rounded-lg object-cover border-2 border-white/20"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white truncate">{game.name}</h3>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 ml-2 flex-shrink-0">
            {game.category}
          </span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{game.description}</p>
        
        <a 
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-2 px-4 rounded-lg transition-all text-center flex items-center justify-center"
        >
          Visit Site
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default GameLinksPage;