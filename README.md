
# WebCryptGen

WebCryptGen is a web application that generates cryptographically secure random tokens by utilizing video entropy from a user's webcam. This project is built using Next.js, React, and Tailwind CSS. The tokens generated can be used as one-time passwords (OTPs) or for other secure identification purposes. The application includes an "Enter Key" feature where users can enter a key to access secure pages, mimicking an OTP authentication flow.



## Features

- **Random Token Generation**: Utilizes video entropy from a user's webcam to generate secure, unpredictable tokens.
- **Copy to Clipboard**: Easily copy the generated token with a single click, complete with a popup notification.
- **Enter Key Authentication**: Users can enter a generated key to access a secure page, with feedback for invalid keys.
- **Responsive Design**: The application is styled using Tailwind CSS, ensuring a responsive and clean UI.
- **Client-Side Navigation**: Smooth page transitions using Next.js' built-in Link component.


## Tech Stack

- Next.js: Framework for building server-rendered React applications.
- React: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static typing.
- Tailwind CSS: Utility-first CSS framework for styling.
- HTML5 Video API: Used to capture video data for generating entropy.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
 git clone https://github.com/your-username/entropy-key.git
 cd entropy-key
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
    
## Usage

### Generating a Token

1. Navigate  to the "Entropy Page" by clicking on the corresponding link in the navbar.
2. Click the "Generate Token" button. The application will use your webcam to gather entropy and generate a token.
3. Copy the token using the "Copy Token" button, and you'll see a popup notification confirming the copy.

### Entering a Key
1. Navigate to the "Enter Key Page" by clicking on the corresponding link in the navbar.
2. Enter the previously generated token into the input field.
3. Click "Submit". If the key matches, you will be redirected to the secured page. If not, you'll receive a notification that the key is invalid.