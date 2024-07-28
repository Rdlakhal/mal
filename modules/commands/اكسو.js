const gameData = {
  Board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  player_a: null,
  player_a_name: null,
  player_b: null,
  player_b_name: null,
  positions: [],
  turn: null
};

function checkWin(player) {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (const combo of winCombos) {
    const [a, b, c] = combo;
    if (gameData.Board[a] === player && gameData.Board[b] === player && gameData.Board[c] === player) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameData.Board.some((cell) => !isNaN(cell));
}

function updateBoard(position, player) {
  if (gameData.Board[position - 1] !== '❎' && gameData.Board[position - 1] !== '🅾️') {
    gameData.Board[position - 1] = player;
    gameData.positions.push({ position, player });
    return true;
  }
  return false;
}

module.exports = {
  config: {
    name: "اكسو",
    aliases: ["xo"],
    version: "1.0",
    price: 0,
    author: "Allou Mohamed",
    countDown: 0,
    role: 0,
    shortDescription: "لعبة إكس أو",
    category: "الألعاب",
    inbox: true,
  },

  atCall: async function ({ message, event, commandName, usersData }) {
    if (args[0] == 'إنهاء') {
      resetGame();
      message.reply('✅ | 🌝🏹 تم ✓');
      return;
    }

    if (!gameData.player_a) {
      gameData.player_a = event.senderID;
      gameData.player_a_name = await usersData.getName(event.senderID);
      message.reply(`انضم أول لاعب (${gameData.player_a_name}), أنت الرمز '❎'. ليكتب اللاعب الثاني xo...`);
      gameData.turn = event.senderID;
    } else if (!gameData.player_b) {
      gameData.player_b = event.senderID;
      gameData.player_b_name = await usersData.getName(event.senderID);
      message.reply(`انضم اللاعب الثاني (${gameData.player_b_name}), أنت الرمز '🅾️'. بدأت اللعبة!`);
      renderGameBoard(message, event, commandName, gameData.Board, gameData.player_a_name);
    } else {
      message.reply("الناس تلعب حاليا انتظر دورك 🌝.");
    }
  },

  atReply: async function ({ message, event, Reply, usersData }) {
    if (gameData.player_a === event.senderID || gameData.player_b === event.senderID) {
      const currentPlayer = gameData.player_a === event.senderID ? '❎' : '🅾️';
      const otherPlayer = gameData.player_a === event.senderID ? '🅾️' : '❎';

      if (gameData.turn !== event.senderID) {
        message.reply("ليس دورك الآن 🌝🏹");
        return;
      }

      let turnName = otherPlayer === '❎' ? gameData.player_a_name : gameData.player_b_name;

      if (!checkWin(currentPlayer) && !checkDraw()) {
        const move = parseInt(event.body);

        if (isNaN(move) || move < 1 || move > 9) {
          message.reply("تمزح ولا أعمى؟ 🌝🏹");
        } else {
          if (updateBoard(move, currentPlayer)) {
            renderGameBoard(message, event, Reply.commandName, gameData.Board, turnName);

            if (checkWin(currentPlayer)) {
              const winnerName = currentPlayer === '❎' ? gameData.player_a_name : gameData.player_b_name;
              message.reply(`${winnerName} فاز! اللعبة انتهت.`);
              resetGame();
            } else if (checkDraw()) {
              message.reply("تعادل! الجميع يخرج 🌝🏹.\nمش مصدق؟ شوف النص أدناه 🌝❎");
              resetGame();
            }

            gameData.turn = gameData.turn === gameData.player_a ? gameData.player_b : gameData.player_a;
          } else {
            message.reply("خطأ، اختر مكانًا آخر 🌝🏹.");
          }
        }
      } else {
        message.reply(`اللعبة انتهت 🌝. ${otherPlayer} فاز!`);
        resetGame();
      }
    }
  },
};

function resetGame() {
  gameData.player_a = null;
  gameData.player_b = null;
  gameData.positions = [];
  gameData.turn = null;
  gameData.Board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
}

function renderGameBoard(message, event, commandName, boardArray, name) {
  let boardRepresentation = '';
  for (let i = 0; i < 3; i++) {
    boardRepresentation += boardArray.slice(i * 3, (i + 1) * 3).join(' ') + '\n';
  }
  message.reply(`إنه دور اللاعب:\n${name}\n\n${boardRepresentation}`, (err, info) => {
    global.YukiBot.atReply.set(info.messageID, {
      commandName
    });
  });
}
