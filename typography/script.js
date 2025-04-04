// Get DOM elements
const editorText = document.getElementById('editorText');
const fontSizeInput = document.getElementById('fontSize');
const letterSpacingInput = document.getElementById('letterSpacing');
const lineHeightInput = document.getElementById('lineHeight');
const textAlignInput = document.getElementById('textAlign');
const fontFamilyInput = document.getElementById('fontFamily');

// Get value display elements
const fontSizeValue = document.getElementById('fontSizeValue');
const letterSpacingValue = document.getElementById('letterSpacingValue');
const lineHeightValue = document.getElementById('lineHeightValue');

// Update font size
fontSizeInput.addEventListener('input', (e) => {
    const size = e.target.value;
    editorText.style.fontSize = `${size}px`;
    fontSizeValue.textContent = `${size}px`;
});

// Update letter spacing
letterSpacingInput.addEventListener('input', (e) => {
    const spacing = e.target.value;
    editorText.style.letterSpacing = `${spacing}px`;
    letterSpacingValue.textContent = `${spacing}px`;
});

// Update line height
lineHeightInput.addEventListener('input', (e) => {
    const height = e.target.value;
    editorText.style.lineHeight = height;
    lineHeightValue.textContent = height;
});

// Update text alignment
textAlignInput.addEventListener('change', (e) => {
    editorText.style.textAlign = e.target.value;
});

// Update font family
fontFamilyInput.addEventListener('change', (e) => {
    editorText.style.fontFamily = e.target.value;
});

// Initialize values
editorText.style.fontSize = `${fontSizeInput.value}px`;
editorText.style.letterSpacing = `${letterSpacingInput.value}px`;
editorText.style.lineHeight = lineHeightInput.value;
editorText.style.textAlign = textAlignInput.value;
editorText.style.fontFamily = fontFamilyInput.value;

// Add smooth transitions
editorText.style.transition = 'all 0.3s ease';

// Add hover effect to font items
document.querySelectorAll('.font-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
}); 