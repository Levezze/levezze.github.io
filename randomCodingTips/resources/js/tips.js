const codingTips = {
    HTML: {
        "Structure & Semantics": [
            'Use <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;aside&gt;</code> for clear structure.',
            'Use <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> for page or section headers and footers.',
            'Always use semantic tags like <code>&lt;main&gt;</code> and <code>&lt;nav&gt;</code> to improve accessibility.',
            'Use <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> to group images with captions.',
            'Avoid excessive <code>&lt;div&gt;</code> usage; use semantic elements instead.'
        ],
        "Forms & Inputs": [
            'Use <code>&lt;label&gt;</code> for every input element for accessibility.',
            'Use <code>required</code> and <code>pattern</code> attributes for basic form validation.',
            'Group related inputs using <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.',
            'Use <code>placeholder</code> to give hints for inputs but not as a substitute for labels.',
            'Use appropriate input types like <code>type="email"</code> and <code>type="tel"</code>.'
        ],
        "Accessibility": [
            'Always include <code>alt</code> attributes for images.',
            'Use descriptive text in links, like "Learn more about pricing" instead of "Click here."',
            'Use <code>aria-*</code> attributes for dynamic or complex UI elements.',
            'Ensure proper heading structure using <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc. for easy navigation.',
            'Use keyboard-friendly features like <code>tabindex</code> and <code>accesskey</code>.'
        ],
        "Media & Images": [
            'Use <code>srcset</code> for responsive images that adapt to different screen sizes.',
            'Use the <code>&lt;picture&gt;</code> element for art direction across devices.',
            'Compress images before uploading to improve load times.',
            'Use SVGs for icons and logos for better scalability.',
            'Use lazy loading with <code>loading="lazy"</code> for images to improve performance.'
        ],
        "Links & Navigation": [
            'Use <code>&lt;nav&gt;</code> to wrap navigational links.',
            'Use <code>rel="noopener"</code> when opening links in new tabs (<code>target="_blank"</code>).',
            'Avoid empty links like <code>href="#"</code>; use proper targets.',
            'Use anchor links with <code>href="#section-id"</code> for smooth scrolling to sections.',
            'Use breadcrumbs for easier site navigation.'
        ]
    },
    CSS: {
        "Layout & Positioning": [
            'Use Flexbox for one-dimensional layouts (rows/columns).',
            'Use Grid for complex two-dimensional layouts.',
            'Use <code>position: sticky;</code> for headers that stick when scrolling.',
            'Avoid using <code>float</code> for layout; use Flexbox or Grid instead.',
            'Use <code>min-width</code> and <code>max-width</code> for responsive design.'
        ],
        "Responsive Design": [
            'Use <code>@media</code> queries for adapting layouts to different screen sizes.',
            'Use <code>rem</code> and <code>em</code> units for scalable typography and spacing.',
            'Use <code>vh</code> and <code>vw</code> for full-screen elements that adjust with window size.',
            'Avoid fixed widths; use percentages for fluid designs.',
            'Test responsiveness on both mobile and desktop.'
        ],
        "Typography": [
            'Use <code>line-height</code> for better readability, typically around 1.5.',
            'Use font-family fallback stacks like <code>Arial, sans-serif</code>.',
            'Avoid too many font sizes; keep a consistent typographic hierarchy.',
            'Use <code>text-transform</code> for automatic capitalization.',
            'Use web fonts efficiently, loading only necessary weights and styles.'
        ],
        "Animations & Transitions": [
            'Use <code>transition</code> for smooth state changes (hover, focus).',
            'Use <code>@keyframes</code> to create custom animations.',
            'Limit animation duration to avoid sluggish performance.',
            'Use <code>will-change</code> to optimize animation performance.',
            'Animate only <code>opacity</code> and <code>transform</code> for better rendering performance.'
        ],
        "Colors & Gradients": [
            'Use <code>rgba()</code> for colors with transparency.',
            'Use CSS variables like <code>--primary-color</code> for easier theme management.',
            'Use gradients sparingly; too many can overwhelm the design.',
            'Use <code>background-blend-mode</code> for blending background images and colors.',
            'Ensure sufficient contrast between text and background for readability.'
        ]
    },
    JavaScript: {
        "DOM Manipulation": [
            'Use <code>document.querySelector</code> to grab elements efficiently.',
            'Avoid direct manipulation of the DOM too often; use <code>document fragments</code> for better performance.',
            'Use <code>event delegation</code> to handle events more efficiently.',
            'Always <code>removeEventListener</code> when you no longer need an event listener.',
            'Use <code>innerHTML</code> with caution to avoid security risks like XSS.'
        ],
        "Functions & Variables": [
            'Use <code>let</code> and <code>const</code> instead of <code>var</code> to avoid scope issues.',
            'Write small, single-purpose functions for maintainability.',
            'Use arrow functions (<code>=></code>) for concise syntax and to avoid <code>this</code> binding issues.',
            'Use default parameters to simplify function calls.',
            'Use template literals (<code>`Hello, ${name}`</code>) instead of string concatenation.'
        ],
        "Asynchronous Code": [
            'Use <code>async/await</code> for cleaner asynchronous code.',
            'Handle promise rejections with <code>.catch()</code> or <code>try-catch</code> blocks.',
            'Use <code>Promise.all</code> to handle multiple asynchronous tasks in parallel.',
            'Use <code>fetch()</code> instead of <code>XMLHttpRequest</code> for easier network requests.',
            'Avoid callback hell by chaining promises or using <code>async/await</code>.'
        ],
        "Error Handling": [
            'Use <code>try-catch</code> for handling errors in asynchronous code.',
            'Throw custom errors for more informative error messages.',
            'Log errors properly using <code>console.error()</code> for better debugging.',
            'Use <code>finally</code> in promises to handle cleanup actions.',
            'Avoid swallowing errors silently by always handling them.'
        ],
        "Performance Optimization": [
            'Minimize DOM manipulation by updating it in batches.',
            'Use <code>debounce</code> or <code>throttle</code> for functions triggered by user input (e.g., scroll or resize).',
            'Avoid memory leaks by cleaning up event listeners and DOM references.',
            'Use <code>requestAnimationFrame</code> for smoother animations.',
            'Lazy load heavy resources, like images and scripts, to improve performance.'
        ]
    }
}

// Export Module (CommonJS)
// module.exports = codingTips; // This is for Node.JS only
