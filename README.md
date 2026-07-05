# 🌍 Wanderlust – Travel Listing & Booking Platform

Wanderlust is a full-stack travel accommodation web application inspired by Airbnb. It allows users to explore unique stays, create and manage property listings, upload images, leave reviews, and discover destinations through a clean and responsive interface.

## 🚀 Live Demo

🔗 https://wanderlust-rz6g.onrender.com/listings

## ✨ Features

* 🔐 User Authentication & Authorization
* 🏡 Create, Edit, and Delete Listings
* 📷 Image Uploads with Cloudinary
* ⭐ Ratings and Reviews System
* 🔍 Search Listings by Destination
* 🗂️ Category-based Filtering
* 📍 Interactive Maps Integration
* 📱 Responsive Design
* 🛡️ Secure Sessions and Flash Messages
* ☁️ Deployed on Render

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Express Session

### Cloud Services

* Cloudinary
* Multer

### Deployment

* Render

## 📂 Project Structure

```
Wanderlust/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── app.js
├── cloudConfig.js
├── package.json
└── README.md
```

## ▶️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/Wanderlust.git
```

### Install Dependencies

```bash
npm install
```

### Create a `.env` File

Add the following environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run the Project

```bash
npm start
```

Visit:

```
http://localhost:8080/listings
```

## 📚 What I Learned

* Building RESTful applications using Express.js
* Authentication with Passport.js
* MongoDB CRUD operations using Mongoose
* File uploads with Multer and Cloudinary
* Server-side rendering with EJS
* Deploying full-stack applications on Render
* MVC Architecture and middleware implementation

## 👨‍💻 Author

**Arpit Srivastava**

If you found this project helpful, consider giving it a ⭐ on GitHub!
