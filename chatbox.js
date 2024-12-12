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

function getBotResponse(userMessage) {
    const botResponses = [
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

    const mentalHealthResponses = [
        "I'm really sorry to hear that you're struggling. It's important to take care of yourself. Have you tried any of the features on this page? You can try the meditation or breathing exercises to help you relax.",
        "I'm here for you. If you're feeling overwhelmed, you might find the mood tracker or the journal helpful. They can help you monitor your feelings and reflect on your day.",
        "It's okay to feel this way. The mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "I'm here to support you. If you're feeling down, the mood boosting music and the breathing exercises can be really helpful. You can also try the journal to express your thoughts.",
        "I understand that you're feeling anxious. The guided meditations and breathing exercises on this page can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings.",
        "I'm here to support you. If you're feeling depressed, the mood boosting music and the breathing exercises can be really helpful. You can also try the journal to express your thoughts.",
        "It's important to take care of yourself. The mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "I'm here for you. If you're feeling overwhelmed, the guided meditations and breathing exercises can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings.",
        "I understand that you're feeling anxious. The mood boosting music and the breathing exercises can be very helpful. You can also try the journal to express your thoughts.",
        "I'm here to support you. If you're feeling depressed, the mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "It's important to take care of yourself. The guided meditations and breathing exercises can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings.",
        "I'm here for you. If you're feeling overwhelmed, the mood boosting music and the breathing exercises can be really helpful. You can also try the journal to express your thoughts.",
        "I understand that you're feeling anxious. The mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "I'm here to support you. If you're feeling depressed, the guided meditations and breathing exercises can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings.",
        "It's important to take care of yourself. The mood boosting music and the breathing exercises can be very helpful. You can also try the journal to express your thoughts.",
        "I'm here for you. If you're feeling overwhelmed, the mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "I understand that you're feeling anxious. The guided meditations and breathing exercises can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings.",
        "I'm here to support you. If you're feeling depressed, the mood boosting music and the breathing exercises can be really helpful. You can also try the journal to express your thoughts.",
        "It's important to take care of yourself. The mood boosting games and the wellness quests can be a fun way to lift your spirits. You might also find the reflection questions and the journal useful.",
        "I'm here for you. If you're feeling overwhelmed, the guided meditations and breathing exercises can be very soothing. You might also find the mood tracker and journal helpful for tracking your feelings."
    ];

    if (userMessage.toLowerCase().includes('struggling') || userMessage.toLowerCase().includes('mental health') || userMessage.toLowerCase().includes('overwhelmed') || userMessage.toLowerCase().includes('sad') || userMessage.toLowerCase().includes('feeling down') || userMessage.toLowerCase().includes('anxiety') || userMessage.toLowerCase().includes('depression')) {
        const randomIndex = Math.floor(Math.random() * mentalHealthResponses.length);
        addMessage('bot', mentalHealthResponses[randomIndex]);
    } else {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        addMessage('bot', botResponses[randomIndex]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createChatbox();
});