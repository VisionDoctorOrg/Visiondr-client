import React from 'react';

// Utility function to add bold styling in the middle of a string
function formatText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/); // Splits by **bold text**

  return parts.map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

const ArticleRenderer = ({ content }) => {
  return (
    <div className="prose max-w-none">
      {content.map((section, index) => {
        switch (section.type) {
          case 'Heading1':
            return (
              <h1 key={index} className="text-2xl font-bold my-4">
                {formatText(section.content)}
              </h1>
            );
          case 'Heading2':
            return (
              <h2 key={index} className="text-xl font-semibold my-3">
                {formatText(section.content)}
              </h2>
            );
          case 'Heading3':
            return (
              <h3 key={index} className="text-lg font-medium my-2">
                {formatText(section.content)}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={index} className="text-sm font-normal leading-[16.80px] my-2">
                {formatText(section.content)}
              </p>
            );
          case 'orderedList':
            return (
              <ol key={index} className="list-decimal list-inside text-sm my-2">
                {section.items.map((item, i) => (
                  <li key={i}>{formatText(item)}</li>
                ))}
              </ol>
            );
          case 'unorderedList':
            return (
              <ul key={index} className="list-disc list-inside my-2 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>{formatText(item)}</li>
                ))}
              </ul>
            );
          case 'blockquote':
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-500 italic pl-4 my-2 text-gray-600"
              >
                {formatText(section.content)}
              </blockquote>
            );
          case 'codeBlock':
            return (
              <pre key={index} className="bg-gray-100 p-3 rounded my-2">
                <code className="text-sm text-gray-800">{section.content}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleRenderer;
