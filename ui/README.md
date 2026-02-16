# TaskFlow - Modern Task Management Frontend

A beautiful, responsive frontend for a Trello-like task management application built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern UI** - Clean, professional design inspired by Cal.com
- 📱 **Responsive** - Works perfectly on all devices
- 🔐 **Authentication** - Secure login and registration
- 📋 **Board Management** - Create and manage multiple boards
- 📝 **Card System** - Add, view, and delete task cards
- ⚡ **Fast** - Built with Vite for lightning-fast development
- 🎯 **User-Friendly** - Intuitive interface and smooth interactions

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Beautiful icon set

## Prerequisites

- Node.js 16+ and npm
- Backend API running (see backend setup)

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   cd trello-frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your backend API URL:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
trello-frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── BoardCard.jsx
│   │   ├── Card.jsx
│   │   ├── CreateBoardModal.jsx
│   │   └── CreateCardModal.jsx
│   ├── pages/              # Page components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Board.jsx
│   ├── context/            # React context
│   │   └── AuthContext.jsx
│   ├── services/           # API services
│   │   └── api.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies
```

## Key Features Explained

### Authentication
- User registration with name, email, and password
- Secure login with JWT tokens
- Protected routes requiring authentication
- Persistent login state

### Dashboard
- View all your boards
- Create new boards with custom titles
- Click on any board to view its cards
- Empty state with call-to-action

### Board View
- View all cards in a board
- Create new cards with title and description
- Delete cards
- Navigate back to dashboard
- Responsive card grid layout

## Color Palette (Cal.com Inspired)

- **Primary (Brand)**: Purple shades (#8b5cf6, #7c3aed, #6d28d9)
- **Neutral (Gray)**: Comprehensive gray scale
- **Background**: Light gray (#f9fafb)
- **Accents**: Subtle purple highlights

## Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        // Your custom colors
      }
    }
  }
}
```

### Changing API URL
Update the `VITE_API_URL` in your `.env` file.

## Backend API Requirements

The frontend expects the following API endpoints:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/signin` - Login user

### Boards
- `GET /api/boards` - Get all boards
- `POST /api/boards` - Create board
- `GET /api/boards/:id` - Get single board

### Cards
- `GET /api/cards?boardId=:id` - Get cards for a board
- `POST /api/cards` - Create card
- `DELETE /api/cards/:id` - Delete card

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
