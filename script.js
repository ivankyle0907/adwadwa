// Check if viewing a card (via URL params)
const urlParams = new URLSearchParams(window.location.search);
const message = decodeURIComponent(urlParams.get('msg') || '');
const theme = urlParams.get('theme') || '';

if (message && theme) {
    // Show viewer if params exist
    document.getElementById('creator').style.display = 'none';
    document.getElementById('viewer').style.display = 'block';
    document.getElementById('romanticMessage').textContent = message;
    document.getElementById('viewer').classList.add(theme);
} else {
    // Show creator by default
    document.getElementById('creator').style.display = 'block';
    document.getElementById('viewer').style.display = 'none';
}

// Generate link (appends params to current pen URL)
document.getElementById('generateBtn').addEventListener('click', function() {
    const msg = encodeURIComponent(document.getElementById('message').value);
    const thm = document.querySelector('input[name="theme"]:checked').value;
    const currentUrl = window.location.href.split('?')[0]; // Remove existing params
    const shareLink = `${currentUrl}?msg=${msg}&theme=${thm}`;
    
    document.getElementById('shareLink').value = shareLink;
    document.getElementById('linkOutput').style.display = 'block';
});

function copyLink() {
    const linkInput = document.getElementById('shareLink');
    linkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
}

function backToCreator() {
    // Reload without params to go back
    window.location.href = window.location.href.split('?')[0];
}