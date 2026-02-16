import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CreateCardModal from '../components/CreateCardModal';
import { boardService, cardService } from '../services/api';

const Board = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchBoardData();
  }, [id]);

  const fetchBoardData = async () => {
    try {
      const [boardData, cardsData] = await Promise.all([
        boardService.getBoard(id),
        cardService.getCards(id),
      ]);
      setBoard(boardData);
      setCards(cardsData.cards || cardsData || []);
    } catch (error) {
      console.error('Error fetching board data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCard = async (cardData) => {
    try {
      const newCard = await cardService.createCard(cardData);
      setCards([...cards, newCard.card || newCard]);
    } catch (error) {
      console.error('Error creating card:', error);
      throw error;
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await cardService.deleteCard(cardId);
      setCards(cards.filter((card) => card._id !== cardId));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Boards</span>
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{board?.title}</h1>
              <p className="text-gray-600 mt-1">{cards.length} tasks</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Card</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {cards.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No cards yet</h3>
              <p className="text-gray-600 mb-6">
                Add your first card to start tracking tasks
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Add Your First Card
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card) => (
                <Card key={card._id} card={card} onDelete={handleDeleteCard} />
              ))}
            </div>
          )}
        </div>
      </div>

      <CreateCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateCard={handleCreateCard}
        boardId={id}
      />
    </div>
  );
};

export default Board;
