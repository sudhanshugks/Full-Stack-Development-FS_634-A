# Realtime-Chat-Web

Realtime-Chat Web is a platform where users can chat to each other in real-time.

Live Link: https://realtime-chat-Web-gdsx.onrender.com

## ✨ Features

*   **Realtime Chat**: User can message each other in real-time, implemented via sockets.
*   **Online user indicator**: Shows which users are online.
*   **User Profiles**: Profiles of user showing personal info.

## 🛠️ Tech Stack

*   **Framework**: [React.js](https://react.dev/) 
*   **Language**: [JavaScript](https://devdocs.io/javascript/), [Node.js](https://nodejs.org/en)
*   **Server**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/)
*   **Styling**: [Tailwind](https://tailwindcss.com/)
*   **Form Handling**: [React Hook Form](https://react-hook-form.com/)

## 📂 Project Structure

The project follows a standard Next.js structure with some key directories:

```
dakshh0827-blogs/
├── frontend/                      # Frontend logic
|   ├── public/                    # Static files and data
|   ├── src/                       # Frontend source directory
|   |   ├── assets/                # Static file
|   |   ├── components/            # Reusable components of react
|   |   ├── constants/             # Constant components
|   |   ├── lib/                   # Configuration and utility files
|   |   ├── pages/                 # Pages of the site
|   |   ├── store/                 # API call logic stores
├── backend/                       # Backend logic
|   ├── src/                       # Backend source directory
|   |   ├── controllers/           # APIs 
|   |   ├── lib/                   # Configuration files
|   |   ├── middlewares/           # Middlewares for verification 
|   |   ├── models/                # Database models(MongoDB Atlas)
|   |   ├── routes/                # Routes definition 


```

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dakshh0827/Realtime-Chat-Web.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```

    ```env
      MONGODB_URI = ""

      PORT = 5001
      
      JWT_KEY = ""
      
      
      CLOUDINARY_CLOUD_NAME = ""
      CLOUDINARY_API_KEY = ""
      CLOUDINARY_API_SECRET = ""
      
      NODE_ENV = "development"
    ```

4.  **Run the development server in backend:**
    ```bash
    cd backend
    npm run dev
    # or
    yarn dev
    ```
5.  **Run the development server in frontend:**
    ```bash
    cd frontend
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:5001](http://localhost:5001) with your browser to see the result.





*Thankyou*
