function createChatbox() {
    const chatboxContainer = document.createElement('div');
    chatboxContainer.className = 'chatbox-container';

    const chatboxHeader = document.createElement('div');
    chatboxHeader.className = 'chatbox-header';
    chatboxHeader.textContent = 'Mental Health Chatbot';

    const chatboxBody = document.createElement('div');
    chatboxBody.className = 'chatbox-body';

    const chatboxInput = document.createElement('input');
    chatboxInput.className = 'chatbox-input';
    chatboxInput.placeholder = 'Type your message...';

    const chatboxSendButton = document.createElement('button');
    chatboxSendButton.className = 'chatbox-send-button';
    chatboxSendButton.textContent = 'Send';

    chatboxContainer.appendChild(chatboxHeader);
    chatboxContainer.appendChild(chatboxBody);
    chatboxContainer.appendChild(chatboxInput);
    chatboxContainer.appendChild(chatboxSendButton);

    document.querySelector('.container').appendChild(chatboxContainer);

    chatboxSendButton.addEventListener('click', () => {
        const userMessage = chatboxInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            chatboxInput.value = '';
            getBotResponse(userMessage);
        }
    });

    chatboxInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatboxSendButton.click();
        }
    });
}

function addMessage(sender, message) {
    const chatboxBody = document.querySelector('.chatbox-body');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;

    // Limit the chatbox to 3 messages
    if (chatboxBody.children.length > 6) { // 3 user + 3 bot messages
        chatboxBody.removeChild(chatboxBody.children[0]);
        chatboxBody.removeChild(chatboxBody.children[1]);
    }
}

// Function to get the voice list and pick a specific voice
function getVoiceByName(name) {
    const voices = speechSynthesis.getVoices();
    return voices.find(voice => voice.name.includes(name)) || voices[0]; // Fallback to default
}

// Speak text with a selected voice
function speakText(text, voiceName = "Microsoft Zira Desktop", delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            const voice = getVoiceByName(voiceName);
            if (voice) utterance.voice = voice;
            utterance.onend = resolve; // Resolve when the speaking ends
            speechSynthesis.speak(utterance);
        }, delay);
    });
}

function getBotResponse(userMessage) {
    const isTeacher = document.querySelector('body').classList.contains('teacher'); // Check if in teacher context

    const botResponses = isTeacher ? [
        "As a teacher, it's important to engage with your students. How can I assist you in your teaching today?",
        "Have you considered using the lesson planning tools available? They can help streamline your workflow.",
        "It's great to see you here! Are you looking for resources to enhance your teaching methods?",
        "Remember, you can track student progress using the features available in this platform."
    ] : [
        "I'm here to listen. How can I help you today?",
        "It's great to talk to you. What's on your mind?",
        "Sometimes just talking about things can make them feel better. How are you feeling right now?",
        "I'm here to support you. What would you like to discuss today?",
        "How are you feeling today? Is there anything specific you want to talk about?",
        "What's been the highlight of your day? Is there anything that's been bothering you?",
        "Is there anything specific you want to talk about? I'm here to listen.",
        "I'm here to listen. What's been on your mind lately? Is there anything you want to share?",
        "It's okay to feel the way you do. Would you like to talk more about it?",
        "I'm here to support you. How can I help you today?",
        "Sometimes just talking can make a big difference. What's been on your mind lately?",
        "It's important to take care of yourself. How are you feeling today?",
        "I'm here to listen and support you. What's been on your mind lately?",
        "It's okay to have ups and downs. How are you feeling today?",
        "I'm here to listen. What's been the most challenging part of your day?",
        "It's important to talk about your feelings. How are you feeling today?",
        "I'm here to support you. What's been the most difficult part of your day?",
        "It's okay to feel overwhelmed. How are you feeling today?",
        "I'm here to listen. What's been the most positive part of your day?",
        "It's important to take a moment for yourself. How are you feeling today?"
    ];

    const mentalHealthResponses = isTeacher ? [
        "I'm really sorry to hear that you're struggling. It's important to take care of yourself. Have you tried any of the features on this page? You can try the meditation or breathing exercises to help you relax.",
        "As a teacher, it's crucial to manage your mental health. Have you considered using the wellness resources available for educators?",
        "It's okay to feel overwhelmed. Remember to take breaks and utilize the support features designed for teachers."
    ] : [
        "I'm really sorry to hear that you're struggling. It's important to take care of yourself. Have you tried any of the features on this page? You can try the meditation or breathing exercises to help you relax.",
        "I'm here for you. If you're feeling overwhelmed, you might find the mood tracker or the journal helpful. They can help you monitor your feelings and reflect on your day.",
        "It's okay to feel this way. The mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful."
    ];

    let botMessage;
    if (userMessage.toLowerCase().includes('struggling') || userMessage.toLowerCase().includes('mental health') || userMessage.toLowerCase().includes('overwhelmed') || userMessage.toLowerCase().includes('sad') || userMessage.toLowerCase().includes('feeling down') || userMessage.toLowerCase().includes('anxiety') || userMessage.toLowerCase().includes('depression')) {
        const randomIndex = Math.floor(Math.random() * mentalHealthResponses.length);
        botMessage = mentalHealthResponses[randomIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        botMessage = botResponses[randomIndex];
    }
    addMessage('bot', botMessage);
    speakText(botMessage, "Microsoft Zira Desktop");
}

document.addEventListener('DOMContentLoaded', () => {
    createChatbox();
});
