function _0xe101() {
  const _0x1cc672 = [
    "6qNbaWj",
    "813002yTjFHR",
    "getElementById",
    "d-none",
    "floor",
    "Ваше\x20число\x20больше\x20загаданного.",
    "9959245VKUuKK",
    "classList",
    "127498gqBran",
    "6Dzojhz",
    "textContent",
    "Поздравляю!\x20Вы\x20угадали\x20число\x20",
    "\x20за\x20",
    "\x20попыток.\x20Загаданное\x20число\x20было\x20",
    "2173080UNGdnK",
    "userInput",
    "submitBtn",
    "Пожалуйста,\x20введите\x20число\x20от\x201\x20до\x20100.",
    "disabled",
    "45ikkUVz",
    "попытку",
    "restartBtn",
    "output",
    "remove",
    "location",
    "733343kDZysa",
    "Извините,\x20вы\x20использовали\x20все\x20",
    "value",
    "885128TnYahU",
    "25324970oDmdZi",
    "random",
  ];
  _0xe101 = function () {
    return _0x1cc672;
  };
  return _0xe101();
}
const _0x5b53a4 = _0x561f;
function _0x561f(_0x176935, _0x15920a) {
  const _0xe10169 = _0xe101();
  return (
    (_0x561f = function (_0x561f13, _0x153ef0) {
      _0x561f13 = _0x561f13 - 0xed;
      let _0x2c9b97 = _0xe10169[_0x561f13];
      return _0x2c9b97;
    }),
    _0x561f(_0x176935, _0x15920a)
  );
}
(function (_0x148027, _0x351175) {
  const _0x12ca07 = _0x561f,
    _0x74c3b8 = _0x148027();
  while (!![]) {
    try {
      const _0x569fe6 =
        parseInt(_0x12ca07(0xfb)) / 0x1 +
        (-parseInt(_0x12ca07(0x102)) / 0x2) *
          (-parseInt(_0x12ca07(0x101)) / 0x3) +
        -parseInt(_0x12ca07(0xf0)) / 0x4 +
        (-parseInt(_0x12ca07(0x107)) / 0x5) *
          (-parseInt(_0x12ca07(0x10a)) / 0x6) +
        -parseInt(_0x12ca07(0x109)) / 0x7 +
        (-parseInt(_0x12ca07(0xfe)) / 0x8) *
          (-parseInt(_0x12ca07(0xf5)) / 0x9) +
        -parseInt(_0x12ca07(0xff)) / 0xa;
      if (_0x569fe6 === _0x351175) break;
      else _0x74c3b8["push"](_0x74c3b8["shift"]());
    } catch (_0x5bf29e) {
      _0x74c3b8["push"](_0x74c3b8["shift"]());
    }
  }
})(_0xe101, 0xf382a);
const secretNumber =
  Math[_0x5b53a4(0x105)](Math[_0x5b53a4(0x100)]() * 0x64) + 0x1;
let attempts = 0x0;
const maxAttempts = 0xa;
function Guess() {
  const _0x43d8a0 = _0x5b53a4,
    _0x390da9 = document["getElementById"](_0x43d8a0(0xf8)),
    _0x24f3fb = document[_0x43d8a0(0x103)](_0x43d8a0(0xf1)),
    _0x1691b6 = parseInt(_0x24f3fb[_0x43d8a0(0xfd)]);
  if (isNaN(_0x1691b6) || _0x1691b6 < 0x1 || _0x1691b6 > 0x64) {
    _0x390da9[_0x43d8a0(0x10b)] = _0x43d8a0(0xf3);
    return;
  }
  attempts++;
  if (_0x1691b6 === secretNumber)
    (_0x390da9["textContent"] =
      _0x43d8a0(0xed) +
      secretNumber +
      _0x43d8a0(0xee) +
      attempts +
      "\x20" +
      (attempts === 0x1 ? _0x43d8a0(0xf6) : "попытки") +
      "."),
      (_0x24f3fb["disabled"] = !![]),
      (document[_0x43d8a0(0x103)](_0x43d8a0(0xf2))[_0x43d8a0(0xf4)] = !![]),
      document[_0x43d8a0(0x103)](_0x43d8a0(0xf7))[_0x43d8a0(0x108)][
        _0x43d8a0(0xf9)
      ](_0x43d8a0(0x104));
  else
    _0x1691b6 < secretNumber
      ? (_0x390da9[_0x43d8a0(0x10b)] =
          "Ваше\x20число\x20меньше\x20загаданного.")
      : (_0x390da9["textContent"] = _0x43d8a0(0x106));
  attempts === maxAttempts &&
    ((_0x390da9["textContent"] =
      _0x43d8a0(0xfc) + maxAttempts + _0x43d8a0(0xef) + secretNumber + "."),
    (_0x24f3fb[_0x43d8a0(0xf4)] = !![]),
    (document[_0x43d8a0(0x103)](_0x43d8a0(0xf2))[_0x43d8a0(0xf4)] = !![]),
    document[_0x43d8a0(0x103)](_0x43d8a0(0xf7))[_0x43d8a0(0x108)][
      _0x43d8a0(0xf9)
    ]("d-none")),
    (_0x24f3fb["value"] = "");
}
function Restart() {
  const _0x1ed623 = _0x5b53a4;
  window[_0x1ed623(0xfa)]["reload"]();
}
document[_0x5b53a4(0x103)](_0x5b53a4(0xf7))[_0x5b53a4(0x108)]["add"](
  _0x5b53a4(0x104)
);
