import React, { useState } from 'react';
import { FileQuestion, Leaf, Info, Globe, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import DailyEcoChallenge from './components/DailyChallenge';
import AboutProject from './components/About';

const ErasmusEcoApp = () => {
  // State management
  const [screen, setScreen] = useState('home');
  const [quizCategory, setQuizCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);


  // Quiz data
  const quizData = {
    "eco-friendly": {
      title: "Eco-friendly Materials",
      icon: <Leaf className="text-green-600" />,
      questions: [
        {
          question: "What does the word 'biodegradable' mean?",
          options: [
            "Can be broken down by natural processes",
            "Made from plastic",
            "Made in factories",
            "Can be used many times"
          ],
          correctAnswer: 0
        },
        {
          question: "Which of the following is a reusable item?",
          options: [
            "Paper cup",
            "Reusable shopping bag",
            "Styrofoam container",
            "Plastic bottle"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the main advantage of using bamboo over plastic?",
          options: [
            "Bamboo is more expensive",
            "Bamboo is biodegradable and grows quickly",
            "Bamboo is made of plastic",
            "Bamboo doesn't last as long as plastic"
          ],
          correctAnswer: 1
        },
        {
          question: "Which of the following is considered a sustainable material?",
          options: [
            "Plastic bags",
            "Bamboo products",
            "Aluminum foil",
            "Styrofoam"
          ],
          correctAnswer: 1
        },
        {
          question: "What is recycled paper made from?",
          options: [
            "New, freshly produced paper",
            "Paper that has been reused and processed",
            "Plastic",
            "Glass"
          ],
          correctAnswer: 1
        },
        {
          question: "What does the term eco-friendly packaging mean?",
          options: [
            "Packaging that is harmful to the environment",
            "Packaging made from recyclable or biodegradable materials",
            "Packaging made from plastic only",
            "Packaging with no label"
          ],
          correctAnswer: 1
        }
      ]
    },
    "waste-recycling": {
      title: "Waste and Recycling Vocabulary",
      icon: <FileQuestion className="text-green-600" />,
      questions: [
        {
          question: "Where should you put plastic bottles for recycling?",
          options: [
            "In the compost bin",
            "In the paper bin",
            "In the recycling bin",
            "In the landfill"
          ],
          correctAnswer: 2
        },
        {
          question: "What is composting?",
          options: [
            "Throwing food waste into the trash",
            "Breaking down organic material to create fertilizer",
            "Burning waste",
            "Using chemicals to clean waste"
          ],
          correctAnswer: 1
        },
        {
          question: "Which of these materials is non-recyclable?",
          options: [
            "Glass",
            "Paper",
            "Aluminum",
            "Plastic bags"
          ],
          correctAnswer: 3
        },
        {
          question: "What is a landfill?",
          options: [
            "A place to grow plants",
            "A place where trash is buried",
            "A place to recycle materials",
            "A factory that produces plastic"
          ],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a recycling symbol?",
          options: [
            "A blue circle with a leaf",
            "A triangle with arrows",
            "A picture of a trash can",
            "A green bottle"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of waste sorting?",
          options: [
            "To mix all waste together",
            "To separate recyclable and non-recyclable materials",
            "To burn the waste",
            "To store it in a landfill"
          ],
          correctAnswer: 1
        }
      ]
    },
    "energy-resources": {
      title: "Energy and Resources Vocabulary",
      icon: <Leaf className="text-yellow-500" />,
      questions: [
        {
          question: "What is solar energy?",
          options: [
            "Energy produced from wind",
            "Energy produced by burning fossil fuels",
            "Energy produced from sunlight",
            "Energy produced by water"
          ],
          correctAnswer: 2
        },
        {
          question: "What does energy efficiency mean?",
          options: [
            "Using more energy than needed",
            "Using energy in the most effective way to reduce waste",
            "Wasting as much energy as possible",
            "Using fossil fuels"
          ],
          correctAnswer: 1
        },
        {
          question: "What is a carbon footprint?",
          options: [
            "The amount of energy used by a country",
            "The impact of human activities on the environment, measured in CO2 emissions",
            "The weight of materials used for packaging",
            "The amount of food wasted"
          ],
          correctAnswer: 1
        },
        {
          question: "What does wind energy use to generate power?",
          options: [
            "Water",
            "Sunlight",
            "Wind turbines",
            "Fossil fuels"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the main disadvantage of using fossil fuels?",
          options: [
            "They are unlimited",
            "They contribute to air pollution and global warming",
            "They are free",
            "They do not need to be transported"
          ],
          correctAnswer: 1
        },
        {
          question: "What is geothermal energy?",
          options: [
            "Energy from the Earth's heat",
            "Energy from sunlight",
            "Energy from fossil fuels",
            "Energy from water"
          ],
          correctAnswer: 0
        }
      ]
    },
    "climate-change": {
      title: "Climate Change Vocabulary",
      icon: <Globe className="text-blue-500" />,
      questions: [
        {
          question: "What is global warming?",
          options: [
            "The Earth cooling down",
            "The gradual increase in the Earth's temperature due to human activities",
            "The reduction of pollution",
            "A temporary change in weather"
          ],
          correctAnswer: 1
        },
        {
          question: "What is a greenhouse gas?",
          options: [
            "A gas that cools the Earth",
            "A gas that traps heat in the Earth's atmosphere",
            "A gas used in manufacturing",
            "A gas released by trees"
          ],
          correctAnswer: 1
        },
        {
          question: "What are the effects of climate change?",
          options: [
            "Decrease in sea levels",
            "Rise in sea levels and extreme weather events",
            "Decrease in rainfall everywhere",
            "More stable weather"
          ],
          correctAnswer: 1
        },
        {
          question: "What is carbon emission?",
          options: [
            "The process of recycling carbon",
            "The release of carbon dioxide into the atmosphere from burning fossil fuels",
            "The amount of carbon in plants",
            "The process of reducing CO2 emissions"
          ],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a consequence of climate change?",
          options: [
            "Fewer trees",
            "Rising sea levels",
            "Lower temperatures everywhere",
            "More rainfall"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of climate action?",
          options: [
            "To promote the use of fossil fuels",
            "To reduce the impact of climate change and limit global warming",
            "To increase carbon emissions",
            "To stop recycling"
          ],
          correctAnswer: 1
        }
      ]
    },
    "sustainable-living": {
      title: "Sustainable Living Vocabulary",
      icon: <Leaf className="text-blue-500" />,
      questions: [
        {
          question: "What does zero waste mean?",
          options: [
            "Producing as little waste as possible",
            "Using plastic waste",
            "Recycling everything",
            "Throwing away everything you don't need"
          ],
          correctAnswer: 0
        },
        {
          question: "What is ethical consumption?",
          options: [
            "Buying items only based on price",
            "Buying products that are produced sustainably and fairly",
            "Purchasing disposable items",
            "Buying from the nearest store"
          ],
          correctAnswer: 1
        },
        {
          question: "What is a sustainable lifestyle?",
          options: [
            "Living without any environmental impact",
            "Making choices that do not harm the environment and conserve resources",
            "Using as many resources as possible",
            "Living without waste"
          ],
          correctAnswer: 1
        },
        {
          question: "What is eco-conscious living?",
          options: [
            "Not thinking about the environment",
            "Making choices that are good for the environment",
            "Only buying organic food",
            "Avoiding all modern technology"
          ],
          correctAnswer: 1
        },
        {
          question: "What are local products?",
          options: [
            "Products made in other countries",
            "Products grown or made near where you live",
            "Products with long shelf life",
            "Imported products"
          ],
          correctAnswer: 1
        },
        {
          question: "What is organic food?",
          options: [
            "Food that is grown using pesticides",
            "Food that is grown without harmful chemicals",
            "Food that is processed with artificial ingredients",
            "Food that has no taste"
          ],
          correctAnswer: 1
        }
      ]
    },
    "general-eco": {
      title: "General Eco English",
      icon: <Globe className="text-green-600" />,
      questions: [
        {
          question: "What does 'environmentally friendly' mean?",
          options: [
            "Something that costs a lot of money",
            "Something that does not harm the environment",
            "Something that is made overseas",
            "Something that is difficult to use"
          ],
          correctAnswer: 1
        },
        {
          question: "What does the 'three Rs' stand for in environmental context?",
          options: [
            "Read, Write, Research",
            "Reduce, Reuse, Recycle",
            "Restore, Rebuild, Renew",
            "Refresh, Restart, Reboot"
          ],
          correctAnswer: 1
        },
        {
          question: "What is an 'eco-system'?",
          options: [
            "A type of computer system",
            "A community of living organisms and their environment",
            "A system for sorting recycling",
            "A new economic system"
          ],
          correctAnswer: 1
        },
        {
          question: "What does 'sustainability' mean?",
          options: [
            "The ability to maintain something at a certain rate or level",
            "The ability to destroy natural resources",
            "The practice of growing food",
            "The process of recycling plastic"
          ],
          correctAnswer: 0
        },
        {
          question: "What is 'conservation'?",
          options: [
            "A political belief",
            "Prevention of wasteful use of a resource",
            "A type of conversation",
            "A mathematical term"
          ],
          correctAnswer: 1
        },
        {
          question: "What does 'disposable' mean?",
          options: [
            "Something that can be reused many times",
            "Something designed to be thrown away after use",
            "Something made of natural materials",
            "Something very expensive"
          ],
          correctAnswer: 1
        }
      ]
    }
  };
  
  // Handle quiz answer selection
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    if (answerIndex === quizData[quizCategory].questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < quizData[quizCategory].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz completed
      setScreen('quizComplete');
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setScreen('quizCategories');
  };
  
  // Reset quiz
  const tryAgainQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScreen('quiz');
    setScore(0);
  };

  // Render home screen
  const renderHomeScreen = () => (
    <div className="min-h-screen bg-green-50 flex flex-col items-center">
      <div className="w-full max-w-md px-4 py-6">
        {/* Header with Image */}
        <div className="text-center mb-6">
          <img 
            src={`${process.env.PUBLIC_URL}/new.jpg`}
            alt="New Habits New Earth" 
            className="w-full max-w-sm mx-auto rounded-lg shadow-md mb-4"
          />
          
        </div>
        
        {/* Navigation Cards */}
        <div className="space-y-4 mb-8">
          <div 
            className="bg-white rounded-xl shadow-md p-4 flex items-center cursor-pointer hover:bg-green-50 transition-colors"
            onClick={() => setScreen('quizCategories')}
          >
            <div className="p-2 bg-green-100 rounded-full mr-4">
              <FileQuestion className="text-green-700 w-8 h-8" />
            </div>
            <span className="text-xl font-semibold text-gray-800">Eco English Quiz</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center cursor-pointer hover:bg-green-50 transition-colors"
            onClick={() => setScreen('dailyChallenge')}
          >
            <div className="p-2 bg-green-100 rounded-full mr-4">
              <Leaf className="text-green-700 w-8 h-8" />
            </div>
            <span className="text-xl font-semibold text-gray-800">Daily Eco Challenge</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center cursor-pointer hover:bg-green-50 transition-colors"
            onClick={() => setScreen('about')}
          >
            <div className="p-2 bg-green-100 rounded-full mr-4">
              <Info className="text-green-700 w-8 h-8" />
            </div>
            <span className="text-xl font-semibold text-gray-800">About the Project</span>
          </div>
        </div>
        
        {/* EU Funding */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/eu.png`}
            alt="co funded by the European Union" 
          />
        </div>
      </div>
    </div>
  );

  // Render quiz categories screen
  const renderQuizCategoriesScreen = () => (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">Eco English Quiz</h2>
          <p className="text-gray-700 text-center mb-4">Select a topic to begin the quiz</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(quizData).map(([key, category]) => (
            <div 
              key={key}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition-colors h-32"
              onClick={() => {
                setQuizCategory(key);
                setScreen('quiz');
              }}
            >
              <div className="p-2 mb-2">
                {category.icon}
              </div>
              <span className="text-md font-medium text-center text-gray-800">{category.title}</span>
            </div>
          ))}
        </div>
        
        <button 
          className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg w-full hover:bg-green-700 transition-colors"
          onClick={() => setScreen('home')}
        >
          Back to main menu
        </button>
      </div>
    </div>
  );

  // Render quiz screen
  const renderQuizScreen = () => {
    if (!quizCategory) return null;
    
    const currentQuizData = quizData[quizCategory];
    const question = currentQuizData.questions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-green-50 p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold text-green-800 mb-1 text-center">{currentQuizData.title}</h2>
            <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
              <div 
                className="h-2 bg-green-600 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / currentQuizData.questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-800 font-medium text-center mb-4">
              Question {currentQuestion + 1} of {currentQuizData.questions.length}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div 
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                    selectedAnswer === index 
                      ? (index === question.correctAnswer 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-red-100 border-red-500')
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => !showFeedback && handleAnswerSelect(index)}
                >
                  <span className="flex-grow">{option}</span>
                  {showFeedback && index === selectedAnswer && (
                    index === question.correctAnswer 
                      ? <CheckCircle className="text-green-500 ml-2" />
                      : <XCircle className="text-red-500 ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => setScreen('quizCategories')}
            >
              Back
            </button>
            
            {showFeedback && (
              <button 
                className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-700 transition-colors"
                onClick={handleNextQuestion}
              >
                Next <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render quiz complete screen
  const renderQuizCompleteScreen = () => (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-4 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Quiz Complete!</h2>
          
          <div className="bg-green-100 rounded-lg p-4 mb-6">
            <p className="text-green-800 text-lg font-medium">
              Your score: {score} / {quizData[quizCategory].questions.length}
            </p>
            <p className="text-green-700 mt-2">
              {score === quizData[quizCategory].questions.length 
                ? 'Perfect! You are an eco-expert!' 
                : score >= quizData[quizCategory].questions.length / 2 
                  ? 'Good job! You know a lot about eco-vocabulary!' 
                  : 'Keep learning about eco-vocabulary!'}
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={tryAgainQuiz}
            >
              Try Again
            </button>

            <button 
              className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={resetQuiz}
            >
              Try Another Category
            </button>
            
            <button 
              className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setScreen('home')}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Conditional rendering based on current screen
  switch (screen) {
    case 'home':
      return renderHomeScreen();
    case 'quizCategories':
      return renderQuizCategoriesScreen();
    case 'quiz':
      return renderQuizScreen();
    case 'quizComplete':
      return renderQuizCompleteScreen();
      case 'dailyChallenge':
        return <DailyEcoChallenge goBack={() => setScreen("home")}/>;
        case 'about':
          return <AboutProject goBack={() => setScreen("home")} />
    default:
      return renderHomeScreen();
  }
};

export default ErasmusEcoApp;