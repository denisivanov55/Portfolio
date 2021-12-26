function clock() {
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');

    // ход секундной стрелки 6 градусов (360/60)
    // ход часовой стрелки 30 градусов (360/12)
    // ход минутной стрелки 6 градусов (360/60)
    const deg = 6;

    setInterval(() => {
      const day = new Date();

      const hours = day.getHours() * 30;
      const minutes = day.getMinutes() * deg;
      const seconds = day.getSeconds() * deg;

      hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
      minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
      secondsArrow.style.transform = `rotateZ(${seconds}deg)`;

    }, 0)
}
clock()