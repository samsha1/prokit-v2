"use client";

import { useState, useEffect } from "react";
import { formatDate } from "app/lib/utils";

interface Comment {
  id: string;
  slug: string;
  content: string;
  name: string;
  email: string | null;
  parent_id: string | null;
  is_admin: boolean;
  created_at: string;
  children?: Comment[];
}

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Admin State
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminSecret, setAdminSecret] = useState("");
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Reply State
  const [replyTo, setReplyTo] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?slug=${slug}`);
      if (res.ok) {
        const data: Comment[] = await res.json();
        const nested = buildCommentTree(data);
        setComments(nested);
      }
    } catch (error) {
      console.error("Failed to load comments", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buildCommentTree = (flatComments: Comment[]) => {
    const map: { [key: string]: Comment } = {};
    const roots: Comment[] = [];

    // Initialize map and children array
    flatComments.forEach((c) => {
      map[c.id] = { ...c, children: [] };
    });

    flatComments.forEach((c) => {
      if (c.parent_id && map[c.parent_id]) {
        map[c.parent_id].children?.push(map[c.id]);
      } else {
        roots.push(map[c.id]);
      }
    });

    return roots;
  };

  const handleAdminTrigger = () => {
     setShowAdminLogin((prev) => !prev);
  }

  return (
    <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <h3 className="text-2xl font-bold mb-8 text-black dark:text-white flex items-center gap-2">
        Comments
        <span onClick={handleAdminTrigger} className="opacity-0 hover:opacity-10 cursor-default text-xs">Admin</span>
      </h3>
      
      {/* Admin Login Box */}
      {showAdminLogin && !isAdminMode && (
          <div className="flex gap-2 items-center mb-6">
              <input 
                  type="password" 
                  placeholder="Admin Secret" 
                  className="p-2 rounded bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white w-32 text-sm"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
              />
              <button 
                  type="button" 
                  onClick={() => { if(adminSecret) setIsAdminMode(true); setShowAdminLogin(false); }}
                  className="text-xs bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded"
              >
                  Login
              </button>
          </div>
     )}

      {/* Main Comment Form */}
      <CommentForm 
        slug={slug} 
        onSuccess={fetchComments}
        isAdminMode={isAdminMode}
        adminSecret={adminSecret}
        onExitAdmin={() => setIsAdminMode(false)}
      />

      {/* Comment List */}
      {isLoading ? (
        <p className="text-neutral-500">Loading comments...</p>
      ) : (
        <div className="space-y-8 mt-12">
           {comments.map((comment) => (
             <CommentItem 
                key={comment.id} 
                comment={comment} 
                replyTo={replyTo}
                setReplyTo={setReplyTo}
                slug={slug}
                onSuccess={fetchComments}
                isAdminMode={isAdminMode}
                adminSecret={adminSecret}
             />
           ))}
           {comments.length === 0 && (
               <p className="text-neutral-500 italic">No comments yet. Be the first to share your thoughts!</p>
           )}
        </div>
      )}
    </div>
  );
}

function CommentItem({ 
    comment, 
    replyTo, 
    setReplyTo, 
    slug, 
    onSuccess, 
    isAdminMode, 
    adminSecret 
}: { 
    comment: Comment; 
    replyTo: string | null; 
    setReplyTo: (id: string | null) => void; 
    slug: string;
    onSuccess: () => void;
    isAdminMode: boolean;
    adminSecret: string;
}) {
    return (
        <div className="group">
             <div className="flex gap-3 items-start">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${comment.is_admin ? 'bg-blue-600 text-white' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'}`}>
                     {comment.is_admin ? 'S' : comment.name.charAt(0).toUpperCase()}
                 </div>
                 <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                         <span className={`font-semibold ${comment.is_admin ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}`}>
                             {comment.name}
                             {comment.is_admin && <span className="ml-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-1 rounded">Author</span>}
                         </span>
                         <span className="text-xs text-neutral-500">{formatDate(comment.created_at, true)}</span>
                     </div>
                     <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2 whitespace-pre-wrap">{comment.content}</p>
                     
                     <button 
                        onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)} 
                        className="text-sm text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                     >
                        Reply
                     </button>
                     
                     {/* Inline Reply Form */}
                     {replyTo === comment.id && (
                        <div className="mt-4">
                            <CommentForm 
                                slug={slug} 
                                onSuccess={() => { onSuccess(); setReplyTo(null); }} 
                                parentId={comment.id}
                                autoFocus={true}
                                isAdminMode={isAdminMode}
                                adminSecret={adminSecret}
                            />
                        </div>
                     )}
                 </div>
             </div>

             {/* Nested Replies */}
             {comment.children && comment.children.length > 0 && (
                 <div className="ml-11 mt-4 space-y-4 border-l-2 border-neutral-100 dark:border-neutral-800 pl-4">
                     {comment.children.map(child => (
                         <CommentItem 
                            key={child.id} 
                            comment={child} 
                            replyTo={replyTo} 
                            setReplyTo={setReplyTo} 
                            slug={slug}
                            onSuccess={onSuccess}
                            isAdminMode={isAdminMode}
                            adminSecret={adminSecret}
                         />
                     ))}
                 </div>
             )}
        </div>
    )
}

interface CommentFormProps {
    slug: string;
    onSuccess: () => void;
    parentId?: string;
    autoFocus?: boolean;
    isAdminMode: boolean;
    adminSecret: string;
    onExitAdmin?: () => void;
}

function CommentForm({ slug, onSuccess, parentId, autoFocus, isAdminMode, adminSecret, onExitAdmin }: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);

    try {
      const payload = {
        slug,
        content,
        name,
        email,
        parent_id: parentId,
        admin_secret: isAdminMode ? adminSecret : undefined,
      };

      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setContent("");
        setName("");
        setEmail("");
        onSuccess();
      } else {
        alert("Failed to post comment");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
            className="w-full p-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white mb-4"
            rows={parentId ? 2 : 4}
            placeholder={parentId ? "Write your reply..." : "Leave a comment..."}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            autoFocus={autoFocus}
        />
        
        <div className="flex flex-col sm:flex-row gap-4">
           {!isAdminMode ? (
               <>
                <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 p-2 rounded bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 p-2 rounded bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </>
           ) : (
                <div className="flex-1 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-sm flex items-center justify-between">
                     <span>Replying as <strong>Samrat Shakya (Admin)</strong></span>
                     {onExitAdmin && (
                        <button type="button" onClick={onExitAdmin} className="text-blue-600 dark:text-blue-400 hover:underline">Exit Admin</button>
                     )}
                </div>
           )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
  );
}
