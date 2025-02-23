import type { ReviewContent } from "../store/Types";

export const apiCallForReviews = async (): Promise<ReviewContent[]> => new Promise((resolve, reject) => {
  // Simular una operación asíncrona, como una llamada a una API
  const success = true; // Cambia esto a false para simular un error

  setTimeout(() => {
    if (success) {
      resolve([{
        name: 'Pepe',
        text: 'I had a wonderful experience at this place. The service was impeccable from the moment we walked in. I ordered the seafood pasta, and it was delicious; the flavors were fresh and perfectly balanced. The atmosphere is cozy and perfect for a romantic dinner. I will definitely be back soon.',
        img: 'https://coderthemes.com/yum/assets/avatar1-25906796.png',
        stars: Math.round(5)
      },
      {
        name: 'Juan',
        text: 'Este restaurante nunca decepciona. La hamburguesa que probé estaba jugosa y llena de sabor, acompañada de unas papas fritas crujientes que complementaron perfectamente la comida. El servicio fue rápido y amable, aunque el lugar estaba bastante lleno. Un gran sitio para disfrutar de una buena comida con amigos.',
        img: 'https://coderthemes.com/yum/assets/avatar2-189b0d01.png',
        stars: Math.round(4.4)
      },
      {
        name: 'Maria',
        text: '¡Qué joya de restaurante! La variedad en el menú es impresionante. Opté por el risotto de setas y fue una de las mejores decisiones que he tomado. La textura y el sabor eran excepcionales. Además, el personal fue muy atento y nos recomendó un vino que maridó a la perfección. Definitivamente, un lugar al que regresaré.',
        img: 'https://coderthemes.com/yum/assets/avatar3-2bbdc0fd.png',
        stars: Math.round(4.8)
      },
      {
        name: 'Claudia',
        text: 'I went for dinner, and while the food was good, I felt that the service could improve. I ordered a salad that was fresh and well-presented, but the wait time was a bit long. The atmosphere is nice, but I would like them to be quicker in attending to customers. Still, I think it’s worth giving it another chance.',
        img: 'https://coderthemes.com/yum/assets/avatar4-85475652.png',
        stars: Math.round(3.3)
      }
      ]);
    } else {
      reject([{}]);
    }
  }, 500); // Simula un retraso de 2 segundos
});