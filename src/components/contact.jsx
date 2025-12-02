const Contact = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/4.jpg"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      <h1 className="text-blue-500 text-center">Contact Component</h1>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>

        <form className="bg-transparent p-4 border-2 border-white rounded-lg space-y-6 w-full max-w-md">
          {['text', 'email', 'text'].map((type, index) => {
            const placeholders = ['Your Name', 'Your Email', 'Your Message'];
            const isTextarea = type === 'text' && index === 2;
            
            return (
              <div key={index}>
                {isTextarea ? (
                  <textarea
                    placeholder={placeholders[index]}
                    className="bg-transparent p-5 w-full border-2 border-white rounded-md resize-none"
                    rows={4}
                  />
                ) : (
                  <input
                    type={type}
                    placeholder={placeholders[index]}
                    className="bg-transparent p-5 w-full border-2 border-white rounded-md"
                  />
                )}
              </div>
            );
          })}
          <button 
            type="submit" 
            className="bg-black text-white py-3 px-4 rounded-md w-full hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;