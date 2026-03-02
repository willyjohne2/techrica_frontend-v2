import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageSquare, Send, User, ShieldCheck } from "lucide-react";
import "./contact.css"; // Reusing some base styles

const Conversation = () => {
  const { threadId } = useParams();
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, [threadId]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/api/contact/thread/${threadId}/`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError("Conversation not found or has been removed.");
      }
    } catch (err) {
      setError("Failed to load conversation.");
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (e) => {
    e.preventDefault();
    if (!reply.trim()) return;

    setSending(true);
    try {
      const response = await fetch(`/api/contact/thread/${threadId}/reply/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: reply }),
      });
      if (response.ok) {
        setReply("");
        fetchMessages(); // Refresh thread
      } else {
        alert("Failed to send reply.");
      }
    } catch (err) {
      alert("Error sending reply.");
    } finally {
      setSending(false);
    }
  };

  if (loading) return <div className="loading-container">Loading conversation...</div>;
  if (error) return <div className="error-container">{error}</div>;

  return (
    <div className="conversation-page">
      <section className="contact-hero chat-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Secure Conversation Hub</h1>
            <p>Direct communication thread with the Techrica support team.</p>
          </div>
        </div>
      </section>

      <section className="conversation-container">
        <div className="chat-window">
          <div className="chat-header">
            <ShieldCheck size={20} className="secure-icon" />
            <span>End-to-End Secure Support Thread</span>
          </div>

          <div className="messages-list">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message-bubble ${msg.is_admin_reply ? "admin" : "user"}`}
              >
                <div className="message-info">
                  <span className="sender-name">
                    {msg.is_admin_reply ? "Techrica Support" : "You"}
                  </span>
                  <span className="message-time">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="message-content">{msg.message}</div>
              </div>
            ))}
          </div>

          <form className="reply-form" onSubmit={handleReply}>
            <textarea
              placeholder="Type your reply here..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              required
            ></textarea>
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Reply"}
              <Send size={18} style={{ marginLeft: 8 }} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Conversation;
