import { useState } from 'react';
import { X } from 'lucide-react';

const CreateBoardModal = ({ isOpen, onClose, onCreateBoard }) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onCreateBoard(title);
      setTitle('');
      onClose();
    } catch (error) {
      console.error('Error creating board:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create New Board</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="board-title" className="block text-sm font-medium text-gray-700 mb-2">
              Board Title
            </label>
            <input
              id="board-title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
              placeholder="e.g., Marketing Campaign, Product Roadmap"
              autoFocus
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !title.trim()}
              className="flex-1 btn-primary"
            >
              {loading ? 'Creating...' : 'Create Board'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBoardModal;
