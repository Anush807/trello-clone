import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import BoardCard from '../components/BoardCard';
import CreateBoardModal from '../components/CreateBoardModal';
import Navbar from '../components/Navbar';
import { boardService } from '../services/api';

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const data = await boardService.getBoards();
      setBoards(data);
    } catch (error) {
      console.error('Error fetching boards:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBoard = async (title) => {
    try {
      const newBoard = await boardService.createBoard(title);
      setBoards([...boards, newBoard]);
    } catch (error) {
      console.error('Error creating board:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Boards</h1>
            <p className="text-gray-600 mt-1">Manage all your projects in one place</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create Board</span>
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
          </div>
        ) : boards.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-md mx-auto">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No boards yet</h3>
              <p className="text-gray-600 mb-6">
                Create your first board to start organizing your tasks
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Create Your First Board
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boards.map((board) => (
              <BoardCard key={board._id} board={board} />
            ))}
          </div>
        )}
      </div>

      <CreateBoardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateBoard={handleCreateBoard}
      />
    </div>
  );
};

export default Dashboard;
