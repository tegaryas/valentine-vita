export function timeEllapsed() {
  const now = new Date("2023-09-26");
  const start = new Date();

  const remainingTime = start.getTime() - now.getTime();

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}
