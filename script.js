document.addEventListener("DOMContentLoaded", () => {
    console.log("PÃ¡gina cargada correctamente");
});
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.menu a');
    const activities = document.querySelectorAll('.activity');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const actividad = e.target.innerText.split(' ')[1]; // "Actividad 1" -> "1"
            activities.forEach(activity => {
                activity.style.display = 'none'; // Ocultar todas las actividades
            });
            const selectedActivity = document.getElementById(`actividad${actividad}`);
            if (selectedActivity) {
                selectedActivity.style.display = 'block'; // Mostrar la actividad seleccionada
            }
        });
    });
});
