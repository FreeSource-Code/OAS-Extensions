function _0x3d54(_0x27930a, _0x182930) {
  var _0x40e8e5 = _0x40e8();
  return (
    (_0x3d54 = function (_0x3d54a9, _0x14ed9f) {
      _0x3d54a9 = _0x3d54a9 - 0xdd;
      var _0x1c079b = _0x40e8e5[_0x3d54a9];
      return _0x1c079b;
    }),
    _0x3d54(_0x27930a, _0x182930)
  );
}
var _0x563a80 = _0x3d54;
function _0x40e8() {
  var _0x16f9ae = [
    "optionCol",
    "452BIMANQ",
    "message",
    "\x0a\x0a\x20Only\x20return\x20the\x20correct\x20option/answer\x20for\x20the\x20above\x20question!",
    "innerHTML",
    "addEventListener",
    "11610WbPGSc",
    "textContent",
    "19726jFFrMr",
    "QuestionRow",
    "7101JLlBvm",
    "2976xwLbQr",
    "forEach",
    "4gpVsJQ",
    "https://codeai-k7wq.onrender.com/message?input=",
    "1202378MlkVeX",
    "7662594yCblrX",
    "log",
    "then",
    "getElementById",
    "5459487TUcQBD",
    "18012aXVVyZ",
    "trim",
    "2024585jkNzXX",
  ];
  _0x40e8 = function () {
    return _0x16f9ae;
  };
  return _0x40e8();
}
(function (_0xa08a8d, _0x3206fd) {
  var _0x50cab5 = _0x3d54,
    _0x182ccd = _0xa08a8d();
  while (!![]) {
    try {
      var _0x1660cf =
        parseInt(_0x50cab5(0xe2)) / 0x1 +
        (parseInt(_0x50cab5(0xec)) / 0x2) * (parseInt(_0x50cab5(0xe8)) / 0x3) +
        (-parseInt(_0x50cab5(0xe0)) / 0x4) * (parseInt(_0x50cab5(0xea)) / 0x5) +
        parseInt(_0x50cab5(0xe3)) / 0x6 +
        (parseInt(_0x50cab5(0xf3)) / 0x7) * (-parseInt(_0x50cab5(0xde)) / 0x8) +
        (parseInt(_0x50cab5(0xdd)) / 0x9) * (-parseInt(_0x50cab5(0xf1)) / 0xa) +
        -parseInt(_0x50cab5(0xe7)) / 0xb;
      if (_0x1660cf === _0x3206fd) break;
      else _0x182ccd["push"](_0x182ccd["shift"]());
    } catch (_0xa17bb5) {
      _0x182ccd["push"](_0x182ccd["shift"]());
    }
  }
})(_0x40e8, 0xed046);
function extractText(_0x261bd7) {
  var _0x369535 = _0x3d54;
  let _0x4120ca = "";
  const _0x29aaab = _0x261bd7["querySelectorAll"]("div");
  return (
    _0x29aaab[_0x369535(0xdf)]((_0x1682c8) => {
      var _0x3f5f00 = _0x369535;
      _0x4120ca += _0x1682c8[_0x3f5f00(0xf2)][_0x3f5f00(0xe9)]() + "\x0a";
    }),
    _0x4120ca
  );
}
function getAns() {
  var _0x567cdb = _0x3d54,
    _0x2486a3 = document[_0x567cdb(0xe6)](_0x567cdb(0xf4)),
    _0x50a4fe = document[_0x567cdb(0xe6)](_0x567cdb(0xeb))["innerText"],
    _0x5d4f4e = extractText(_0x2486a3),
    _0x2f507d = _0x5d4f4e + _0x50a4fe;
  const _0x20c181 = _0x567cdb(0xee);
  console["log"](_0x2f507d);
  const _0x421a6e = _0x2f507d + _0x20c181,
    _0x9d5795 = _0x567cdb(0xe1) + encodeURIComponent(_0x421a6e);
  fetch(_0x9d5795)
    [_0x567cdb(0xe5)]((_0x3ddd33) => {
      if (!_0x3ddd33["ok"])
        throw new Error("Network\x20response\x20was\x20not\x20ok");
      return _0x3ddd33["json"]();
    })
    [_0x567cdb(0xe5)]((_0x2ff5cc) => {
      var _0x17a1e3 = _0x567cdb;
      console[_0x17a1e3(0xe4)](_0x2ff5cc);
      var _0x224e6a = _0x2ff5cc[_0x17a1e3(0xed)];
      
      // Create answer container
      const answerContainer = document.createElement('div');
      answerContainer.style.cssText = 'margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 4px;';
      answerContainer.innerHTML = makeStrong(_0x224e6a);
      
      // Add to page
      _0x2486a3.appendChild(answerContainer);
      
      // Auto-select the answer text
      const range = document.createRange();
      range.selectNodeContents(answerContainer);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    })
    ["catch"]((_0x126ca2) => {
      console["error"](
        "There\x20was\x20a\x20problem\x20with\x20the\x20fetch\x20operation:",
        _0x126ca2
      );
    });
}
function handleKeyDown(_0x1a6801) {
  _0x1a6801["key"] === "F2" && getAns();
}
document[_0x563a80(0xf0)]("keydown", handleKeyDown);
function makeStrong(text) {
  return "<strong style='color: #4CAF50;'>" + text + "</strong>";
}
