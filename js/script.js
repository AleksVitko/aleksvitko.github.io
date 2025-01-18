function toggleSkillList(id) {
    const list = document.getElementById(id);
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(180deg)';
    } else {
        list.classList.add('hidden');
        list.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: [0.5] });

    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
});