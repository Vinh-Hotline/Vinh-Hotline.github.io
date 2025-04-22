// Tạo lá rơi
function createLeaves() {
    const existingLeaves = document.querySelectorAll('.leaf');
    if (existingLeaves.length > 0) return; // Tránh tạo lại nếu đã có lá

    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = Math.random() * 3 + 5 + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(leaf);
    }
}

// Tạo mây
function createClouds() {
    const existingClouds = document.querySelectorAll('.cloud');
    if (existingClouds.length > 0) return; // Tránh tạo lại nếu đã có mây

    const cloudShapes = [
        { w: 120, h: 40, r: '30px' },
        { w: 80, h: 30, r: '20px' },
        { w: 150, h: 50, r: '40px' },
    ];

    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        const style = cloudShapes[Math.floor(Math.random() * cloudShapes.length)];
        Object.assign(cloud.style, {
            width: style.w + 'px',
            height: style.h + 'px',
            borderRadius: style.r,
            top: Math.random() * 80 + '%',
            animationDelay: Math.random() * 20 + 's',
        });
        cloud.className = 'cloud';
        document.body.appendChild(cloud);
    }
}

// Khởi tạo
createLeaves();
createClouds();