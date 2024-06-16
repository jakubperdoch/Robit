# Robit Mobile App

## Introduction

Welcome to the Robit Mobile App, an control interface for a WiFi-controlled robotic arm using a Raspberry Pi 4. This application was developed as part of a competition hosted by Scheidt & Bachmann, where it was awarded for being the most challenging project to implement.

## Project Overview

### Purpose

The Robit app is designed to control a robotic arm through a mobile interface, providing a real-time interaction experience. This solution demonstrates the practical application of combining modern mobile technologies with robotic hardware.

### Technologies

- **React Native Expo**: Provides the framework for the mobile app, ensuring cross-platform compatibility.
- **Express.js**: Manages backend services, hosted on Vercel.
- **MongoDB Atlas**: Stores and manages data in the cloud, ensuring data persistence and security.

## Environment Setup

### Recommended IDE Setup

- **Visual Studio Code (VSCode)**
  - Install VSCode as the primary development environment.
  - Recommended Extensions:
    - React Native Tools
    - Expo Tools

### Installation

1. **Pre-requisites**:
   - Install Node.js and npm: [Download Node.js](https://nodejs.org/)
   - Install Expo CLI globally:
     ```bash
     npm install -g expo-cli
     ```

2. **Clone and Set Up**:
   - Clone the repository and install dependencies:
     ```bash
     git clone https://github.com/yourgithubusername/robit.git
     cd robit/app
     npm install
     ```

## Development

### Running the Application

- **Start the App**:
  - Launch the application using Expo:
    ```bash
    expo start
    ```
  - This will open Expo Developer Tools in your browser. From there, you can run the app on Android, iOS, or a web simulator.

### Build Commands

- **Building the App**:
  - To prepare your app for deployment, build it using the appropriate command based on your target platform:
    ```bash
    expo build:android
    expo build:ios
    expo build:web
    ```

## Visuals

### Example Screenshot

![Screenshot 2024-06-17 at 00 56 55](https://github.com/jakubperdoch/Robit/assets/65115839/06c8ca74-0d4a-44c7-be69-6c3692356cdc)



