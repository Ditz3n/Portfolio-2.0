import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    words,
    loop = true,
    typingSpeed = 150,
    deletingSpeed = 50,
}) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingInterval, setTypingInterval] = useState(typingSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
                setTypingInterval(deletingSpeed);
            } else {
                setText(currentWord.substring(0, text.length + 1));
                setTypingInterval(typingSpeed);
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingInterval);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, typingInterval, words, wordIndex, typingSpeed, deletingSpeed]);

    return <span>{text}</span>;
};

export default Typewriter;