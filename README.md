# Assignment_2: IT6035 Mobile Development

Welcome to the Assignment_2 repository for the IT6035 Mobile Development course. This project is a React Native application built with Expo, designed for managing a toy shopping experience. It features navigation across multiple screens, cart management using React Context, and asset integration for a polished look and feel.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Landing Page**: Welcome screen for users.
- **Toys Page**: Browse available toys.
- **Toy Details Page**: View detailed information about selected toys.
- **Shopping Cart Page**: Add and manage toys in your shopping cart.
- **Global Cart Management**: Uses React Context for easy cart state management across screens.
- **Responsive Navigation**: Powered by React Navigation's stack navigator.
- **Asset Integration**: Includes custom icons and splash screens for a professional appearance.

## Screenshots

> _Add screenshots of your app in the `assets/` folder and reference them here if available._(Not available)

---

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) >= 14
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yhcfh/IT6035_Mobile_Development.git
   cd IT6035_Mobile_Development
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npx expo start
   ```
   You can now open the app in an emulator or on your physical device using the Expo Go app.

---

## Project Structure

```
IT6035_Mobile_Development/
│
├── assets/                 # App images and icons (icon, splash, favicon, adaptive icons)
├── components/             # Reusable UI components
├── data/                   # Data files (e.g., toy information)
├── screens/                # Main screens (LandingPage, ToysPage, ToyDetailsPage, ShoppingCartPage)
├── App.js                  # Main app file with navigation and cart context
├── app.json                # Expo project configuration
├── .gitignore              # Git ignore file
└── ...                     # Other config and system files
```

---

## Tech Stack

- **React Native**: Mobile app framework
- **Expo**: Development and build toolchain
- **React Navigation**: Navigation between screens
- **React Context API**: Global state management for shopping cart
- **JavaScript (ES6+)**

---

## Usage

- Start the app and navigate through the toy shopping experience.
- Add toys to your cart, view cart details, and manage your selections.
- All cart actions are managed globally through React Context.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is intended for educational purposes as part of the IT6035 Mobile Development course.

---

## Contact

For any questions or issues, please contact the repository owner via GitHub: [Yhcfh](https://github.com/Yhcfh)
