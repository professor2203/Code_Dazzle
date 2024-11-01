const FAQSection = () => {
    const faqs = [
      {
        question: "What type of services do Xeven Solutions offer?",
        answer: "We offer a comprehensive range of services including AI development, chatbot solutions, and custom software development tailored to your business needs."
      },
      {
        question: "Do Xeven Solutions offer post-development support?",
        answer: "Yes, we provide extensive post-development support to ensure your solutions continue to operate efficiently and effectively."
      },
      {
        question: "Can AI technology help us make better decisions?",
        answer: "Yes, AI can analyze large amounts of data to provide insights and recommendations, helping you make more informed business decisions."
      },
      {
        question: "How do I choose the right AI Chatbot development company for my business?",
        answer: "Look for companies with proven experience, strong technical expertise, good communication, and a track record of successful implementations."
      },
      {
        question: "Why choose Xeven Solutions as your AI development company?",
        answer: "We combine technical expertise with industry experience to deliver innovative, scalable AI solutions that drive business growth."
      },
      {
        question: "How are Xeven Solutions developers different?",
        answer: "Our developers bring a unique blend of technical skills, industry knowledge, and commitment to delivering high-quality solutions."
      }
    ];
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-gray-500 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <svg className="h-5 w-5 text-gray-500 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQSection;