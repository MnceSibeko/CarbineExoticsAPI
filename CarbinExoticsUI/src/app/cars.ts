export interface Car {
  car_ID: number;
  carunique_id: string;
  car_Make: string;
  car_Model: string;
  car_Price: number;
  car_Mileage: number;
  car_Color: string;
  car_Image: string;
  car_Year: number;
  car_Transmission: string;
  car_About: string;
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
    car_ID: 3,
    carunique_id: 'R8001',
    category_id: 3,
    car_Year: 2020,
    car_Make: 'Audi',
    car_Model: 'R8 Spyder',
    car_Color: 'Nardo Gray',
    car_About: 'V10 naturally aspirated engine: power comes from the heart.It will grab the attention of your eyes and ears – the character of the Audi R8 Spyder V10 performance quattro is sharpened by unbridled power: the 5.2 FSI engine provides a maximum of 560 Nm of torque at 6500 rpm. Thanks to the dry sump lubrication, the mid-positioned engine has a particularly low installation position. In turn, this has a major influence on how precisely you can steer the R8 in any situation. The special ignition sequence for the 10 cylinders finally turns into an utterly characteristic sound: a throaty hissing and roaring noise. It will be the soundtrack of your driving, particularly if you have the top down.',
    car_Price: 3795100,
    car_Mileage: 778,
    car_Image: 'https://www.audi.co.za/content/dam/nemo/models/r8/r8-spyder-v10-performance-quattro/my-2019/1920x1080-feature-gallery/1920x1080-AR8_181016.jpg?output-format=webp&downsize=1439px:*',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 4,
    carunique_id: '720s001',
    category_id: 3,
    car_Year: 2017,
    car_Make: 'Mclaren',
    car_Model: '720s',
    car_Color: 'Race Livery',
    car_About: 'The McLaren 720S is purposeful and radical. With apex predator responses. It accelerates from 0-60mph in an incredible 2.8 seconds when provoked. And can cover a quarter of a mile in 10.4 seconds. From a standing start. But raw figures don’t reveal the whole story. There is pure driver engagement and contemporary luxury here too. In depth. A thrilling, accessible, natural balance. Evolution in full flight.',
    car_Price: 7450000,
    car_Mileage: 856,
    car_Image: 'https://pbs.twimg.com/media/FODlKtAaIAIBTxG?format=jpg&name=small',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 6,
    carunique_id : 'M4002',
    category_id : 1,
    car_Year: 2016,
    car_Make: 'BMW',
    car_Model: 'M4 Club Sport',
    car_Color: 'Lime Rock Gray',
    car_About: 'The new BMW M4 CS is a special model of the BMW M GmbH in a tradition of unique high-performance automobiles. Sporty dynamics of the highest level, outstanding performance and surprising everyday comfort. The high-performance engine in combination with the aerodynamic lightweight carbon-fibre body propels this extreme sportsman to a Nordschleife lap time of a remarkable 7:38 minutes. Time for a new legend: the BMW M4 CS',
    car_Price: 1700000,
    car_Mileage: 5647,
    car_Image: 'https://cdn.bmwblog.com/wp-content/uploads/2017/05/BMW-M4-CS-LIME-ROCK-GREY-10.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 7,
    carunique_id: '7R021',
    category_id: 1,
    car_Year: 2019,
    car_Make: 'Volkswagen',
    car_Model: 'Golf 7R',
    car_Color: 'Gold',
    car_About: 'With its 2.0 TSI engine, the performance hatch delivers an impressive 180 kW that hurtles you from 0 to 100 km/h in just 6.4 seconds – and enables you to reach a top speed of 250 km/h (regulated). This amount of power is not just fun on straight roads, but on windy roads, too. Here, you’ll also receive a helping hand from the front differential lock, which stabilises your Golf GTI if it slips and helps you to keep control in the process. Wherever you are heading, you can make the most of this powerful engine.',
    car_Price: 778000,
    car_Mileage: 12005,
    car_Image: 'https://www.carmag.co.za/wp-content/uploads/2017/01/vw-golf-facelift-with-r-line-package.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 8,
    carunique_id: 'GTR850',
    category_id: 2,
    car_Year: 2009,
    car_Make: 'Nissan',
    car_Model: 'GT-R Nismo',
    car_Color: 'Grey',
    car_About:'Since 2007 the Nissan GT-R Car has helped Nissan earn the respect and adulation of the racing world thanks to its fastest production car lap time record set at the Nürburgring. Since then the Nissan GT-R has not once slowed down and thanks to its revolutionary Twin Turbo V6 it can do 0 – 100km/h in under 3 seconds.',
    car_Price: 2701900,
    car_Mileage: 80540,
    car_Image: 'https://www.carmag.co.za/wp-content/uploads/2021/04/Nissan-GT-R-Nismo-gets-new-special-edition-treatment-for-2022-4-800x480.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 2,
    carunique_id: 'SVJ001',
    category_id: 3,
    car_Year: 2019,
    car_Make: 'Lamborghini',
    car_Model: 'Aventador SVJ',
    car_Color: 'Satin Orange',
    car_About: 'Lamborghini created the Aventador SVJ to embrace challenges head-on, combining cutting-edge technology with extraordinary design, while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. But in the future shaped by Lamborghini, this won’t be left behind, because there will always be a driver behind the wheel.',
    car_Price: 9965400,
    car_Mileage: 365,
    car_Image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_overview.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 5,
    carunique_id: 'P1001',
    category_id: 4,
    car_Year: 2020,
    car_Make: 'Mclaren',
    car_Model: 'P1',
    car_Color: 'Azure Blue',
    car_About: 'The McLaren P1™ was built to deliver a sub-seven-minute lap of the Nordschleife. For perspective, 7:06.5 was quick enough for James Hunt to secure pole position in his McLaren M23 at the last Formula 1™ race to be held at the track in 1976. For our engineering team, successfully meeting the challenge would mean both validation of their work, and confirmation of performance icon status for the McLaren P1.',
    car_Price: 21000000,
    car_Mileage: 300,
    car_Image: 'https://autoartmodels.de/wp-content/uploads/2020/04/76061w-scaled.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 9,
    carunique_id: 'S3001',
    category_id: 1,
    car_Year: 2017,
    car_Make: 'Audi',
    car_Model: 'S3',
    car_Color: 'Rock Grey',
    car_About: 'It is a potent, high-quality alternative to the many other hot hatches on the market. And although it is not quite on a par with the best-handling cars available, it is still pretty fun, with styling that is not exciting enough for some tastes, the S3 is still a force to be reckoned with.',
    car_Price: 389950,
    car_Mileage: 67000,
    car_Image: 'https://mcdn.wallpapersafari.com/medium/38/28/brEwA6.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 10,
    carunique_id: 'HUR01',
    category_id: 4,
    car_Year: 2020,
    car_Make: 'Lamborghini',
    car_Model: 'LP580-2 Huracan',
    car_Color: 'Bright Red',
    car_About: 'Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications.',
    car_Price: 4499000,
    car_Mileage: 300,
    car_Image: 'https://cdn.motor1.com/images/mgl/zvGYE/s1/2016-lamborghini-huracan-lp-580-2-first-drive.jpg',
    car_Transmission: 'Automatic'
  },
  {
    car_ID: 11,
    carunique_id: 'Lp6402',
    category_id: 4,
    car_Year: 2009,
    car_Make: 'Lamborghini',
    car_Model: 'LP580-2 Murcielago',
    car_Color: 'Giallo Yellow',
    car_About: 'Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications.',
    car_Price: 3399500,
    car_Mileage: 85640,
    car_Image: 'https://www.alainclass.com/wp-content/uploads/2020/02/2008-Lamborghini-Murcielago-Orange-03274-18.jpg',
    car_Transmission: 'Manual'
  },
  {
    car_ID: 12,
    carunique_id: 'F4002',
    category_id: 4,
    car_Year: 1987,
    car_Make: 'Ferrari',
    car_Model: 'F40',
    car_Color: 'Red',
    car_About: 'Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications.',
    car_Price: 8850600,
    car_Mileage: 125900,
    car_Image: 'https://robbreport.com/wp-content/uploads/2021/12/f4001.jpg?w=1000',
    car_Transmission: 'Automatic'
  },
];
