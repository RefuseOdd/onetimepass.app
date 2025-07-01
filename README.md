# OneTimePass.app | TOTP Generator

A modern, secure Time-based One-Time Password (TOTP) generator built with Vue 3, TypeScript, and Vite. Generate 2FA tokens entirely in your browser with no data transmission to external servers.


## ✨ Features

- 🔒 **Completely Secure**: All computations performed locally in your browser
- 🌙 **Dark/Light Theme**: Beautiful themes with smooth transitions
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast & Modern**: Built with Vue 3, TypeScript, and Vite
- 🎯 **Standards Compliant**: Supports RFC 6238 TOTP standard
- 🔧 **Configurable**: Support for different algorithms, digits, and periods
- 📋 **Easy Copy**: One-click token copying to clipboard
- 🔗 **URL Parameters**: Pre-fill settings via URL parameters

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RefuseOdd/onetimepass.app.git
cd totp-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Usage

### Basic Usage

1. Enter your secret key (base-32 format)
2. Configure digits, period, and algorithm if needed
3. Your TOTP token will be generated automatically
4. Click the copy button to copy the token to your clipboard

### URL Parameters

You can pre-fill the form using URL parameters:

```
https://yoursite.com/?key=JBSWY3DPEHPK3PXP&digits=6&period=30&algorithm=SHA1
```

Supported parameters:
- `key`: Secret key (base-32 format)
- `digits`: Number of digits (6-8)
- `period`: Token period in seconds (15-300)
- `algorithm`: Hash algorithm (SHA1, SHA256, SHA512)

### Supported Algorithms

- SHA-1 (default)
- SHA-256
- SHA-512

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🧪 Development

### Project Structure

```
src/
├── components/          # Vue components
│   ├── icons/          # SVG icon components
│   ├── AppHeader.vue   # Application header
│   ├── TOTPGenerator.vue # Main TOTP generator
│   └── ...
├── composables/        # Vue composables
│   ├── useTOTP.ts     # TOTP logic
│   ├── useTheme.ts    # Theme management
│   └── ...
├── styles/            # Global styles
└── main.ts           # Application entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔒 Security

This application prioritizes security:

- **No Network Requests**: All TOTP generation happens locally
- **No Data Storage**: No sensitive data is stored or transmitted
- **Modern Crypto**: Uses the battle-tested OTPAuth library
- **Secure Defaults**: Follows security best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OTPAuth](https://github.com/hectorm/otpauth) - Excellent TOTP/HOTP library
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Inter Font](https://rsms.me/inter/) - Beautiful typography
- [JetBrains Mono](https://www.jetbrains.com/mono/) - Monospace font for code

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**⚠️ Security Notice**: This tool generates TOTP tokens locally in your browser. Never share your secret keys or use this tool on untrusted devices.
