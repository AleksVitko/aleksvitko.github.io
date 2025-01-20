function toggleSkillList(id) {
    // �������� ��� �������� ul � ������� hidden
    const allLists = document.querySelectorAll('.skill-list ul');
    
    // ��������� ��� ������ � ���������� ������� � �������� ���������
    allLists.forEach(list => {
        if (list.id !== id) {
            list.classList.add('hidden');
            if (list.previousElementSibling) {
                list.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
            }
        }
    });

    // �������� ������� ������ �� id
    const currentList = document.getElementById(id);

    // ����������� ��������� �������� ������
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