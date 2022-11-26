export function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        console.log('try again')
        return;
    }
    console.log(text)
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
export function linkOnClickHandler(link) {
    if (link.target === 'github') {
        window.open('https://github.com/Rashmil333?tab=repositories', '_blank');
    } else {
        copyTextToClipboard(link.value);
    }
}