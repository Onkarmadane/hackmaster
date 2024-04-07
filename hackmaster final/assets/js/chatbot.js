const faq = {
    "What types of events does HACKMASTER ORG organize?": "HACKMASTER ORG specializes in organizing a variety of tech events, including hackathons, workshops, conferences, and networking sessions.",
    "How can I participate in your events?": "To participate in our events, you can visit our website and register for the upcoming events. We provide detailed information and registration options for each event.",
    "Do you provide internships?": "Yes, we offer internship opportunities in collaboration with tech companies. Visit our internship section on the website to find more details about available positions and application procedures.",
    "Can I get web/tech solutions from HACKMASTER ORG?": "Absolutely! HACKMASTER ORG provides web and tech solutions tailored to your needs. Whether it's website development, software solutions, or technical consultancy, we have you covered. Reach out to us through our website for more information.",
    "How can I partner with HACKMASTER ORG for an event or collaboration?": "If you're interested in partnering with us for an event or collaboration, please contact our partnership team through the provided contact information on our website. We are open to discussing mutually beneficial partnerships.",
    "How can I contact HACKMASTER ORG for further inquiries?": "You can contact us through the contact form on our website or reach out to us via email or phone. Our contact information is available on the Contact Us page.",
    "What kind of support do you provide during your events?": "We offer comprehensive support during our events, including mentorship, technical assistance, and resources. Our goal is to ensure participants have a fulfilling and enriching experience."
};

const chatContainer = document.getElementById("chat-container");
const chatMessages = document.getElementById("chat-messages");

function toggleChat() {
    chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
}

function askQuestion(question) {
    const message = document.createElement("div");
    message.classList.add("message-container");
    message.innerHTML = `
        <div class="message-you">You: ${question}</div>
    `;
    chatMessages.appendChild(message);

    if (faq.hasOwnProperty(question)) {
        setTimeout(() => {
            const reply = document.createElement("div");
            reply.classList.add("message-container", "bot-message", "fade-in");
            reply.innerHTML = `
                <div class="message">Hackmaster: ${faq[question]}</div>
            `;
            chatMessages.appendChild(reply);
        }, 500); // Delay for animation
    } else {
        setTimeout(() => {
            const reply = document.createElement("div");
            reply.classList.add("message-container", "bot-message", "fade-in");
            reply.innerHTML = `
                <div class="message">Bot: Sorry, I don't have an answer to that question.</div>
            `;
            chatMessages.appendChild(reply);
        }, 500); // Delay for animation
    }
}