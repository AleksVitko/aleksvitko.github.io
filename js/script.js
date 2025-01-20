function toggleSkillList(id) {
    // Получаем все элементы ul с классом hidden
    const allLists = document.querySelectorAll('.skill-list ul');
    
    // Закрываем все списки и возвращаем стрелки в исходное положение
    allLists.forEach(list => {
        if (list.id !== id) {
            list.classList.add('hidden');
            if (list.previousElementSibling) {
                list.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
            }
        }
    });

    // Получаем текущий список по id
    const currentList = document.getElementById(id);

    // Переключаем состояние текущего списка
    if (currentList.classList.contains('hidden')) {
        currentList.classList.remove('hidden');
        currentList.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(180deg)';
    } else {
        currentList.classList.add('hidden');
        currentList.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
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