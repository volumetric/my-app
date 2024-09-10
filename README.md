# Asimov AI - Team Assistant and Coach

Asimov AI is a socially intelligent team assistant and coach designed for high-performing teams. This Next.js application showcases the features and capabilities of Asimov AI, including an AI-powered image generation feature.

## Features


- Responsive landing page with information about Asimov AI
- Pricing page with toggle between monthly and annual plans
- About page detailing the company's mission and values
- Contact form with email notification
- AI-powered image generation using DALL-E 2 and DALL-E 3 models
- Dark theme with vibrant purple and green accents

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Nodemailer for email notifications

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- OpenAI API key
- SendGrid API key (for email notifications)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/asimov-ai.git
   cd asimov-ai
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

Make sure to add the environment variables (OPENAI_API_KEY and SENDGRID_API_KEY) in your Vercel project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
