const testMovies = [
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '001',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '002',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '003',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '004',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '005',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '006',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '007',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '008',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '009',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '010',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '011',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '012',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '013',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '014',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
  {
    country: 'Великобритания, США',
    director: 'Гай Ричи',
    duration: '107',
    year: '2021',
    description: 'Экшн-триллер от короля криминального жанра Гая Ричи с Джейсоном Стэйтемом в главной роли '
    + 'ремейк французского фильма «Инкассатор». В крупную инкассаторскую компанию «Фортико» устраивается охранником '
    + 'немногословный мужчина по имени Патрик Хилл. Коллеги нарекают новичка Эйчем и вводят в курс дела.'
    + ' На одном из первых заданий на инкассаторскую машину нападают грабители, и Эйч не моргнув глазом расправляется с ними.'
    + ' Он становится примером для напарников и завоёвывает их доверие, однако никто из них даже не подозревает, кто же такой'
    + ' на самом деле Патрик Хилл и какую цель он преследует.',
    image: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    trailerLink: 'https://www.youtube.com/watch?v=YLw55x-zOSo',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/5/55/%D0%93%D0%BD%D0%B5%D0%B2_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.png',
    movieId: '015',
    nameRU: 'Гнев человеческий',
    nameEN: 'Wrath of Man',
  },
];

const MOVIES_PER_PAGE_1280 = 12;
const MOVIES_PER_PAGE_768 = 8;
const MOVIES_PER_PAGE_320 = 5;

export {
  testMovies, MOVIES_PER_PAGE_1280, MOVIES_PER_PAGE_768, MOVIES_PER_PAGE_320,
};
