const _0x417432 = _0x2f3a;
(function (_0x2a0cf5, _0x24d33) {
  const _0x303a80 = _0x2f3a,
    _0x4aac38 = _0x2a0cf5();
  while (!![]) {
    try {
      const _0x127d6b =
        parseInt(_0x303a80(0x1f3)) / 0x1 +
        (-parseInt(_0x303a80(0x20e)) / 0x2) *
          (parseInt(_0x303a80(0x20c)) / 0x3) +
        -parseInt(_0x303a80(0x201)) / 0x4 +
        parseInt(_0x303a80(0x1f1)) / 0x5 +
        (-parseInt(_0x303a80(0x212)) / 0x6) *
          (parseInt(_0x303a80(0x1f9)) / 0x7) +
        (-parseInt(_0x303a80(0x203)) / 0x8) *
          (-parseInt(_0x303a80(0x209)) / 0x9) +
        parseInt(_0x303a80(0x1f7)) / 0xa;
      if (_0x127d6b === _0x24d33) break;
      else _0x4aac38["push"](_0x4aac38["shift"]());
    } catch (_0x5c4198) {
      _0x4aac38["push"](_0x4aac38["shift"]());
    }
  }
})(_0x1be6, 0xe9ae5);
const questions = [
  {
    id: "q1",
    text: _0x417432(0x1f2),
    options: ["2", "3", "4", "5"],
    correct: "3",
  },
  {
    id: "q2",
    text: _0x417432(0x204),
    options: ["2", "3", "4", "5"],
    correct: "4",
  },
  {
    id: "q3",
    text: _0x417432(0x1fd),
    options: ["3", "4", "5", "6"],
    correct: "5",
  },
  {
    id: "q4",
    text: _0x417432(0x20d),
    options: ["1", "2", "3", "4"],
    correct: "2",
  },
  {
    id: "q5",
    text: "У\x20исполнителя\x20Увеличитель\x20две\x20команды:\x20Прибавь\x202;\x20Умножь\x20на\x203.\x20Первая\x20увеличивает\x20число\x20на\x202,\x20вторая\x20—\x20умножает\x20на\x203.\x20Программа\x20—\x20последовательность\x20команд.\x20Сколько\x20программ\x20преобразуют\x20число\x201\x20в\x2059?",
    options: ["4", "5", "6", "7"],
    correct: "4",
  },
];
function createQuestionElement(_0x5b9f52) {
  const _0x59f29f = _0x417432,
    _0x41f52f = document[_0x59f29f(0x200)](_0x59f29f(0x213));
  _0x41f52f["classList"]["add"](_0x59f29f(0x214)),
    (_0x41f52f["id"] = _0x5b9f52["id"]);
  const _0x5c08fe = document[_0x59f29f(0x200)]("p");
  _0x5c08fe[_0x59f29f(0x215)]["add"](_0x59f29f(0x1fc)),
    (_0x5c08fe["innerText"] = _0x5b9f52[_0x59f29f(0x1f8)]),
    _0x41f52f[_0x59f29f(0x207)](_0x5c08fe);
  const _0x251104 = document["createElement"](_0x59f29f(0x213));
  _0x251104[_0x59f29f(0x215)]["add"](_0x59f29f(0x1fb)),
    _0x5b9f52["options"][_0x59f29f(0x1fe)]((_0x47c42a) => {
      const _0x37683d = _0x59f29f,
        _0x4108fa = document[_0x37683d(0x200)](_0x37683d(0x1ee));
      _0x4108fa[_0x37683d(0x215)][_0x37683d(0x205)](_0x37683d(0x1f6)),
        (_0x4108fa["innerText"] = _0x47c42a),
        _0x251104[_0x37683d(0x207)](_0x4108fa);
    }),
    _0x41f52f[_0x59f29f(0x207)](_0x251104);
  const _0x23865d = document["createElement"](_0x59f29f(0x208));
  return (
    (_0x23865d["type"] = _0x59f29f(0x1f8)),
    _0x23865d[_0x59f29f(0x215)]["add"](_0x59f29f(0x20b), _0x59f29f(0x206)),
    (_0x23865d["id"] = "a" + _0x5b9f52["id"][_0x59f29f(0x1ff)](0x1)),
    (_0x23865d[_0x59f29f(0x202)] = "Ответ"),
    _0x41f52f[_0x59f29f(0x207)](_0x23865d),
    _0x41f52f
  );
}
questions[_0x417432(0x1fe)]((_0x5c1481) => {
  const _0x35c0d9 = _0x417432,
    _0x1311f6 = createQuestionElement(_0x5c1481);
  document[_0x35c0d9(0x20a)](_0x35c0d9(0x210))[_0x35c0d9(0x207)](_0x1311f6);
});
function _0x2f3a(_0x4faa99, _0x4c6f79) {
  const _0x1be655 = _0x1be6();
  return (
    (_0x2f3a = function (_0x2f3acb, _0x5a086b) {
      _0x2f3acb = _0x2f3acb - 0x1ee;
      let _0x48aaf2 = _0x1be655[_0x2f3acb];
      return _0x48aaf2;
    }),
    _0x2f3a(_0x4faa99, _0x4c6f79)
  );
}
function Check() {
  const _0x23dd06 = _0x417432,
    _0x5acecc = {};
  questions[_0x23dd06(0x1fe)](
    (_0x1b3af0) => (_0x5acecc[_0x1b3af0["id"]] = _0x1b3af0[_0x23dd06(0x1ef)])
  );
  for (
    let _0x15d1f0 = 0x1;
    _0x15d1f0 <= questions[_0x23dd06(0x1fa)];
    _0x15d1f0++
  ) {
    const _0x3012f7 = "q" + _0x15d1f0,
      _0x3f0728 = "a" + _0x15d1f0,
      _0x2fe3bb = document["getElementById"](_0x3012f7),
      _0x206c05 = document["getElementById"](_0x3f0728),
      _0x59c678 = _0x5acecc[_0x3012f7];
    _0x206c05 && _0x206c05[_0x23dd06(0x216)]["trim"]() == _0x59c678
      ? (_0x2fe3bb[_0x23dd06(0x1f0)][_0x23dd06(0x1f5)] = _0x23dd06(0x211))
      : (_0x2fe3bb[_0x23dd06(0x1f0)]["borderColor"] = _0x23dd06(0x20f)),
      (_0x206c05[_0x23dd06(0x1f4)] = !![]);
  }
}
function _0x1be6() {
  const _0x5a0660 = [
    "correct",
    "style",
    "4190995DezVqz",
    "У\x20исполнителя\x20Калькулятор\x20две\x20команды:\x20Умножь\x20на\x202;\x20Прибавь\x205.\x20Первая\x20команда\x20умножает\x20число\x20на\x202,\x20вторая\x20увеличивает\x20его\x20на\x205.\x20Программа\x20для\x20Калькулятора\x20—\x20это\x20последовательность\x20команд.\x20Сколько\x20есть\x20программ,\x20которые\x20число\x203\x20преобразуют\x20в\x20число\x2032?",
    "303319onMHbN",
    "disabled",
    "borderColor",
    "d-block",
    "7750730pefevA",
    "text",
    "119YaDhHL",
    "length",
    "mb-3",
    "question-text",
    "Система\x20команд\x20исполнителя\x20Вычислитель\x20состоит\x20из\x20двух\x20команд:\x20Плюс\x201;\x20Умножить\x20на\x202.\x20Первая\x20команда\x20увеличивает\x20текущее\x20число\x20на\x201,\x20вторая\x20—\x20увеличивает\x20текущее\x20число\x20в\x20два\x20раза.\x20Программа\x20для\x20Вычислителя\x20—\x20это\x20последовательность\x20таких\x20команд.\x20Сколько\x20существует\x20программ,\x20преобразующих\x20число\x201\x20в\x20число\x2020?",
    "forEach",
    "slice",
    "createElement",
    "2381784eDNjQr",
    "placeholder",
    "8ULyopq",
    "Система\x20команд\x20исполнителя\x20Вычислитель\x20состоит\x20из\x20двух\x20команд:\x20Плюс\x203;\x20Умножить\x20на\x203.\x20Первая\x20команда\x20увеличивает\x20текущее\x20число\x20на\x203,\x20вторая\x20—\x20увеличивает\x20текущее\x20число\x20в\x20три\x20раза.\x20Программа\x20для\x20Вычислителя\x20—\x20это\x20последовательность\x20таких\x20команд.\x20Сколько\x20существует\x20программ,\x20преобразующих\x20число\x203\x20в\x20число\x2093?",
    "add",
    "answer-input",
    "appendChild",
    "input",
    "16656039Xvtbvx",
    "getElementById",
    "form-control",
    "19452oysVCK",
    "У\x20исполнителя\x20Квадратик\x20две\x20команды:\x20Прибавь\x204;\x20Возведи\x20в\x20квадрат.\x20Первая\x20увеличивает\x20число\x20на\x204,\x20вторая\x20—\x20возводит\x20в\x20квадрат.\x20Программа\x20—\x20это\x20последовательность\x20команд.\x20Сколько\x20есть\x20программ,\x20которые\x20число\x208\x20преобразуют\x20в\x20число\x20100?",
    "554lCzwvo",
    "red",
    "questionsContainer",
    "green",
    "147738KmzALr",
    "div",
    "question-container",
    "classList",
    "value",
    "label",
  ];
  _0x1be6 = function () {
    return _0x5a0660;
  };
  return _0x1be6();
}
