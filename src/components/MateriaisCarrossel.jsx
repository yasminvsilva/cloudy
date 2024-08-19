import { motion } from 'framer-motion';
import arduino from '../assets/materiais/arduino.svg'
import arduino2 from '../assets/materiais/arduino.svg'
import arduino3 from '../assets/materiais/arduino.svg'
import arduino4 from '../assets/materiais/arduino.svg'

const cards = [
  { id: 1, img: 'image1.jpg', title: 'Card 1', description: 'Description 1' },
  { id: 2, img: 'image2.jpg', title: 'Card 2', description: 'Description 2' },
  { id: 3, img: 'image3.jpg', title: 'Card 3', description: 'Description 3' },
  { id: 4, img: 'image4.jpg', title: 'Card 4', description: 'Description 4' },
  { id: 5, img: {arduino4}, title: 'Card 5', description: 'Description 5' }
];

const MateriaisCarrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-full flex-shrink-0 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={card.img} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg"
      >
        Anterior
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg"
      >
        Próximo
      </button>
    </div>
  );
};

export default MateriaisCarrossel;
