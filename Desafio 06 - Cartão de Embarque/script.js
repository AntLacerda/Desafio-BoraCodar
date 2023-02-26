const qrCode = document.querySelector("#qrcode");
const qrCodeText = 'https://antlacerda.github.io/portfolio/';

window.addEventListener("load", () => {
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeText}`;
});