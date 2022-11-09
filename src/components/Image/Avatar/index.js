const colors = ['#ffa400', '#fc6c8f', '#6a5af9', '#d66efd'];
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
function Avatar() {
    const newName = 'C';
    const color = getRandomColor();
    return (
        <div className="header__info--avatar" style={{ backgroundColor: color }}>
            {newName}
        </div>
    );
}

export default Avatar;
