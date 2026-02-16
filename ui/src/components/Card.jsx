import { Trash2, Calendar } from 'lucide-react';

const Card = ({ card, onDelete }) => {
  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-medium text-gray-900 flex-1">{card.title}</h4>
        <button
          onClick={() => onDelete(card._id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      
      {card.description && (
        <p className="text-sm text-gray-600 mb-3">{card.description}</p>
      )}
      
      {card.createdAt && (
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>{new Date(card.createdAt).toLocaleDateString()}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
