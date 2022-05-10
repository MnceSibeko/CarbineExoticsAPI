export interface Car {
  car_id: number;
  carunique_id: string;
  car_make: string;
  car_model: string;
  car_price: number;
  car_mileage: number;
  car_color: string;
  car_image: string;
  car_year: number;
  car_transmission: string;
  car_about: string;
  category_id: number;
}

// dbCars.Car_ID = request.Car_ID;
//             dbCars.CarUnique_ID = request.CarUnique_ID;
//             dbCars.Car_Make = request.Car_Make;
//             dbCars.Car_Model = request.Car_Model;
//             dbCars.Car_Price = request.Car_Price;
//             dbCars.Car_Mileage = request.Car_Mileage;
//             dbCars.Car_Color = request.Car_Color;
//             dbCars.Car_Image = request.Car_Image;
//             dbCars.Car_Year = request.Car_Year;
//             dbCars.Car_Transmission = request.Car_Transmission;
//             dbCars.Car_About = request.Car_About;
//             dbCars.Category_ID = request.Category_ID;

export const cars: Car[] = [
  {
    car_id: 3,
    carunique_id: 'R8001',
    category_id: 3,
    car_year: 2020,
    car_make: 'Audi',
    car_model: 'R8 Spyder',
    car_color: 'Nardo Gray',
    car_about: 'V10 naturally aspirated engine: power comes from the heart.It will grab the attention of your eyes and ears – the character of the Audi R8 Spyder V10 performance quattro is sharpened by unbridled power: the 5.2 FSI engine provides a maximum of 560 Nm of torque at 6500 rpm. Thanks to the dry sump lubrication, the mid-positioned engine has a particularly low installation position. In turn, this has a major influence on how precisely you can steer the R8 in any situation. The special ignition sequence for the 10 cylinders finally turns into an utterly characteristic sound: a throaty hissing and roaring noise. It will be the soundtrack of your driving, particularly if you have the top down.',
    car_price: 3795100,
    car_mileage: 778,
    car_image: 'https://www.audi.co.za/content/dam/nemo/models/r8/r8-spyder-v10-performance-quattro/my-2019/1920x1080-feature-gallery/1920x1080-AR8_181016.jpg?output-format=webp&downsize=1439px:*',
    car_transmission: 'Automatic'
  },
  {
    car_id: 4,
    carunique_id: '720s001',
    category_id: 3,
    car_year: 2017,
    car_make: 'Mclaren',
    car_model: '720s',
    car_color: 'Race Livery',
    car_about: 'The McLaren 720S is purposeful and radical. With apex predator responses. It accelerates from 0-60mph in an incredible 2.8 seconds when provoked. And can cover a quarter of a mile in 10.4 seconds. From a standing start. But raw figures don’t reveal the whole story. There is pure driver engagement and contemporary luxury here too. In depth. A thrilling, accessible, natural balance. Evolution in full flight.',
    car_price: 7450000,
    car_mileage: 856,
    car_image: 'https://pbs.twimg.com/media/FODlKtAaIAIBTxG?format=jpg&name=small',
    car_transmission: 'Automatic'
  },
  {
    car_id: 6,
    carunique_id : 'M4002',
    category_id : 1,
    car_year: 2016,
    car_make: 'BMW',
    car_model: 'M4 Club Sport',
    car_color: 'Lime Rock Gray',
    car_about: 'The new BMW M4 CS is a special model of the BMW M GmbH in a tradition of unique high-performance automobiles. Sporty dynamics of the highest level, outstanding performance and surprising everyday comfort. The high-performance engine in combination with the aerodynamic lightweight carbon-fibre body propels this extreme sportsman to a Nordschleife lap time of a remarkable 7:38 minutes. Time for a new legend: the BMW M4 CS',
    car_price: 1700000,
    car_mileage: 5647,
    car_image: 'https://cdn.bmwblog.com/wp-content/uploads/2017/05/BMW-M4-CS-LIME-ROCK-GREY-10.jpg',
    car_transmission: 'Automatic'
  },
  {
    car_id: 7,
    carunique_id: '7R021',
    category_id: 1,
    car_year: 2019,
    car_make: 'Volkswagen',
    car_model: 'Golf 7R',
    car_color: 'Gold',
    car_about: 'string',
    car_price: 778000,
    car_mileage: 12005,
    car_image: 'https://www.carmag.co.za/wp-content/uploads/2017/01/vw-golf-facelift-with-r-line-package.jpg',
    car_transmission: 'Automatic'
  },
  {
    car_id: 8,
    carunique_id: 'GTR850',
    category_id: 2,
    car_year: 2009,
    car_make: 'Nissan',
    car_model: 'GT-R Nismo',
    car_color: 'Grey',
    car_about:'Since 2007 the Nissan GT-R Car has helped Nissan earn the respect and adulation of the racing world thanks to its fastest production car lap time record set at the Nürburgring. Since then the Nissan GT-R has not once slowed down and thanks to its revolutionary Twin Turbo V6 it can do 0 – 100km/h in under 3 seconds.',
    car_price: 2701900,
    car_mileage: 80540,
    car_image: 'https://www.carmag.co.za/wp-content/uploads/2021/04/Nissan-GT-R-Nismo-gets-new-special-edition-treatment-for-2022-4-800x480.jpg',
    car_transmission: 'Automatic'
  }
];
