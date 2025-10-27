import { useEffect, useState } from 'react';
import faqsData from '../asset/faqs.json'; // 🔹 import trực tiếp JSON

export default function useFAQs(keyword) {
  const [faqs, setFaqs] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | success | empty | error

  useEffect(() => {
    try {
      if (!keyword.trim()) {
        setFaqs([]);
        setStatus('idle');
        return;
      }

      setStatus('loading');

      // 🔍 Lọc kết quả theo keyword
      const filtered = faqsData.filter(
        (item) =>
          item.topic.toLowerCase().includes(keyword.toLowerCase()) ||
          item.question.toLowerCase().includes(keyword.toLowerCase()) ||
          item.answer.toLowerCase().includes(keyword.toLowerCase())
      );

      if (filtered.length === 0) {
        setFaqs([]);
        setStatus('empty');
      } else {
        setFaqs(filtered.slice(0, 3)); // chỉ hiển thị top-3
        setStatus('success');
      }
    } catch (err) {
      console.error('Error loading FAQs:', err);
      setStatus('error');
    }
  }, [keyword]);

  return { faqs, status };
}
