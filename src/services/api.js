import * as I from "../assets/img";
import * as H from "../assets/img/hoteis";
import { filterTypes } from "../components/Filter";

const pais = "Brasil";

export const cards = [
  {
    id: 1,
    description:
      "Vai viajar? Veja as melhores opções do que fazer com seu gato",
    image: I.pet1,
  },
  {
    id: 2,
    description: "O Guia completo para viajar com o dog de avião",
    image: I.pet2,
  },
  {
    id: 3,
    description: "Arrumando os Docs para voar com seu cachorro",
    image: I.pet3,
  },
  {
    id: 4,
    description: "Partiu! Veja 12 hotéis no Brasil para levar seu pet",
    image: I.pet4,
  },
  {
    id: 5,
    description:
      "Quais vacinas meu Pet precisa tomar para viajar com segurança?",
    image: I.pet5,
  },
  {
    id: 6,
    description: "Veja dicas de como levar seu pet para o intercâmbio",
    image: I.pet6,
  },
  {
    id: 7,
    description:
      "Vai viajar? Veja as melhores opções do que fazer com seu gato",
    image: I.pet7,
  },
  {
    id: 8,
    description: "Arrumando os Docs para voar com seu cachorro",
    image: I.pet8,
  },
];

export const allBusiness = [
  {
    id: 1,
    name: "Belmond Copacabana",
    image: H.hotel1,
    nota: "5.0",
    price: "R$ 1559,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.HOT_PET,
      filterTypes.REST_PET,
      filterTypes.CLIN_VET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua José Martins Pereira Filho 23",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 2,
    name: "Ibbis Copacabana",
    image: H.hotel2,
    nota: "4,7",
    price: "R$ 203,00",
    categoria: [filterTypes.HOT_FRIENDLY, filterTypes.REST_PET],
    uf: "RJ",
    municipio: "Rio Bonito",
    endereco: "Rua Doutor Francisco de Souza 187",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 3,
    name: "L'Homme de Rio...",
    image: H.hotel3,
    nota: "3,9",
    price: "R$ 440,00",
    categoria: [filterTypes.HOT_PET, filterTypes.CLIN_VET],
    uf: "RJ",
    municipio: "Seropédica",
    endereco: "Rua Oito 9",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 4,
    name: "Selina Copacabana",
    image: H.hotel4,
    nota: "3,7",
    price: "R$ 120,00",
    categoria: [filterTypes.HOT_PET, filterTypes.PET_PARK],
    uf: "RJ",
    municipio: "Itaboraí",
    endereco: "Avenida Virgínia Paula dos Santos Alves 179",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 5,
    name: "Ritz Leblon ",
    image: H.hotel5,
    nota: "3,5",
    price: "R$ 581,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Guapimirim",
    endereco: "Rua Dona Del Carmem 89",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 6,
    name: "Mirasol Copacabana",
    image: H.hotel6,
    nota: "3,5",
    price: "R$ 231,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.HOT_PET,
      filterTypes.REST_PET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Duque de Caxias",
    endereco: "Rua Costa Paes 34",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 7,
    name: "Promenade Palladium",
    image: H.hotel7,
    nota: "3,5",
    price: "R$ 604,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.REST_PET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Cabo Frio",
    endereco: "Avenida Caminho de Búzios 45",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 8,
    name: "Miramar Hotel",
    image: H.hotel8,
    nota: "3,5",
    price: "R$ 540,00",
    categoria: [filterTypes.HOT_FRIENDLY, filterTypes.PET_PARK],
    uf: "RJ",
    municipio: "Campos dos Goytacazes",
    endereco: "Rua Professor Castro 90",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 9,
    name: "Americas Copacabana",
    image: H.hotel9,
    nota: "3,3",
    price: "R$ 187,00",
    categoria: [
      filterTypes.HOT_PET,
      filterTypes.CLIN_VET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Cabo Frio",
    endereco: "Rua Suíça 66",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
  {
    id: 10,
    name: "Real Palace Hotel",
    image: H.hotel10,
    nota: "3,3",
    price: "R$ 174,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Angra dos Reis",
    endereco: "Rua Paulo Sodré da Nóbrega 93",
    pais,

    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
  },
];
