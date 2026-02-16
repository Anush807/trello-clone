import { LayoutGrid, Users, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BoardCard = ({ board }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${board._id}`);
  };

  return (
    <div onClick={handleClick} className="board-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-brand-100 p-2 rounded-lg">
            <LayoutGrid className="h-6 w-6 text-brand-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{board.title}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{board.members?.length || 0} members</span>
          </div>
          {board.createdAt && (
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(board.createdAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
