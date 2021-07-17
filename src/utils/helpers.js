export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleDateString('en-US');

    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}