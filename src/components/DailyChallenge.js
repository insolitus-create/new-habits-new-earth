import React, { useState } from 'react';
import { Leaf, ArrowLeft } from 'lucide-react';

const DailyEcoChallenge = ({ goBack }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [completed, setCompleted] = useState(false);

  // Lists of tips and challenges
  const tips = [
    "Turning off the lights saves energy and money.",
    "Bringing your own lunchbox reduces plastic waste.",
    "Turning off the tap while brushing your teeth saves up to 6 liters of water.",
    "Reusable bags help reduce plastic pollution.",
    "Walking or biking is eco-friendly and good for your health.",
    "Charging devices overnight wastes energy.",
    "Recycling helps reduce the need for new raw materials.",
    "Single-use plastics pollute the planet.",
    "One meat-free meal helps reduce carbon emissions.",
    "Sharing your habits can inspire others.",
    "Leaving electronic devices on standby wastes energy.",
    "Printed handouts often go to waste.",
    "Many materials can be reused creatively.",
    "Buying local products means less transportation emissions.",
    "Plants help clean the air.",
    "Every small change matters.",
    "Fast fashion harms the planet.",
    "Carrying your own bottle helps avoid plastic waste.",
    "Recycling paper saves trees.",
    "Commuting together reduces pollution.",
    "Eco-friendly actions help you feel empowered.",
    "Digital clutter wastes server energy.",
    "Many small steps create big change.",
    "Talking about sustainability spreads awareness."
  ];

  const challenges = [
    "Turn off the lights every time you leave a room today.",
    "Use a lunchbox today instead of plastic or foil wrap.",
    "Don't let water run while brushing your teeth today.",
    "Bring a reusable bag with you when shopping today.",
    "Walk or bike instead of using a car today.",
    "Unplug your phone charger when not in use today.",
    "Separate and recycle at least one item today.",
    "Avoid using any single-use plastic items today.",
    "Eat only vegetarian meals today.",
    "Talk to a friend about one eco-action you're doing today.",
    "Turn off your devices completely when not using them.",
    "Use digital notes instead of printing anything today.",
    "Reuse something today instead of throwing it away.",
    "Choose something local when shopping today.",
    "Water or take care of a plant today.",
    "Choose one new eco habit and try it today.",
    "Wear something second-hand today.",
    "Use a reusable water bottle today.",
    "Collect old paper today for recycling.",
    "Share a ride, or take public transport today.",
    "Choose one action today that makes you proud.",
    "Clean up your email inbox or files today.",
    "Write down 3 small eco-goals for this week.",
    "Post a green tip or photo to your social media today."
  ];

  // Choose a random tip or challenge
  const generateRandomItem = () => {
    // Reset completed state if selecting a new item
    setCompleted(false);
    
    // 50/50 chance for tip or challenge
    const isTip = Math.random() > 0.5;
    const list = isTip ? tips : challenges;
    const randomIndex = Math.floor(Math.random() * list.length);
    
    setSelectedItem({
      type: isTip ? 'tip' : 'challenge',
      text: list[randomIndex]
    });
  };

  // Handle completion
  const handleComplete = () => {
    setCompleted(!completed);
  };

  // Go to next challenge
  const handleNext = () => {
    generateRandomItem();
  };

  const handleBack = () => {
    goBack();
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-green-700 flex items-center justify-center mb-2">
          <Leaf className="mr-2" size={24} />
          Your Daily Eco Tip & Challenge
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {!selectedItem ? (
            <>
          <button 
            onClick={generateRandomItem}
            className="w-full py-3 mb-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors"
            >
            Choose my eco tip or challenge for today
          </button>
          <button
              onClick={handleBack}
              className="flex w-full items-center justify-center py-2 px-4 rounded-md border border-green-600 text-green-700 hover:bg-green-100 mb-4"
              >
              <ArrowLeft size={18} className="mr-1" />
              Back to main menu
            </button>
              </>
        ) : (
          <div className="flex flex-col">
            <div className={`p-4 rounded-md mb-4 ${completed ? 'bg-green-100' : 'bg-white border border-green-200'}`}>
              <div className="flex items-start">
                <span className="text-xl mr-2">
                  {selectedItem.type === 'tip' ? '🌿' : '✅'}
                </span>
                <p className="text-gray-800">
                  {selectedItem.text}
                </p>
              </div>
            </div>

            <div className="mb-4">
              {selectedItem.type === 'tip' ? (
                <button
                  onClick={handleComplete}
                  className={`w-full py-2 px-4 rounded-md ${
                    completed 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {completed ? "Got it! ✓" : "I understand this tip"}
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  disabled={completed}
                  className={`w-full py-2 px-4 rounded-md ${
                    completed 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {completed ? "Challenge completed! ✓" : "Complete this challenge"}
                </button>
              )}
            </div>

            <button
                onClick={handleNext}
                className="flex items-center justify-center py-2 px-4 rounded-md border border-green-600 text-green-700 hover:bg-green-100 mb-4"
            >
            Another one?
            </button>
            <button
              onClick={handleBack}
              className="flex items-center justify-center py-2 px-4 rounded-md border border-green-600 text-green-700 hover:bg-green-100 mb-4"
              >
              <ArrowLeft size={18} className="mr-1" />
              Back to main menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyEcoChallenge;