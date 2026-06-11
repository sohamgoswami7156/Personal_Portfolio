import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

const BOARD = {
  width: 720,
  height: 420,
  paddleWidth: 14,
  paddleHeight: 82,
  ballSize: 14,
};

const INITIAL_STATE = {
  playerY: 169,
  cpuY: 169,
  ballX: 353,
  ballY: 203,
  ballVX: 4,
  ballVY: 3,
  playerScore: 0,
  cpuScore: 0,
  running: false,
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function resetBall(direction = 1) {
  return {
    ballX: BOARD.width / 2 - BOARD.ballSize / 2,
    ballY: BOARD.height / 2 - BOARD.ballSize / 2,
    ballVX: 4 * direction,
    ballVY: Math.random() > 0.5 ? 3 : -3,
  };
}

function Pong() {
  const [game, setGame] = useState(INITIAL_STATE);
  const gameRef = useRef(game);
  const keysRef = useRef({ up: false, down: false });
  const boardRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
        keysRef.current.up = true;
      }
      if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        keysRef.current.down = true;
      }
      if (event.code === "Space") {
        event.preventDefault();
        setGame((current) => ({ ...current, running: !current.running }));
      }
    }

    function handleKeyUp(event) {
      if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
        keysRef.current.up = false;
      }
      if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        keysRef.current.down = false;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    function tick() {
      const current = gameRef.current;

      if (current.running) {
        setGame((previous) => {
          let playerY = previous.playerY;

          if (keysRef.current.up) {
            playerY -= 7;
          }
          if (keysRef.current.down) {
            playerY += 7;
          }

          playerY = clamp(playerY, 0, BOARD.height - BOARD.paddleHeight);

          const cpuCenter = previous.cpuY + BOARD.paddleHeight / 2;
          const ballCenter = previous.ballY + BOARD.ballSize / 2;
          const cpuY = clamp(
            previous.cpuY + clamp(ballCenter - cpuCenter, -4.3, 4.3),
            0,
            BOARD.height - BOARD.paddleHeight
          );

          let ballX = previous.ballX + previous.ballVX;
          let ballY = previous.ballY + previous.ballVY;
          let ballVX = previous.ballVX;
          let ballVY = previous.ballVY;
          let playerScore = previous.playerScore;
          let cpuScore = previous.cpuScore;

          if (ballY <= 0 || ballY + BOARD.ballSize >= BOARD.height) {
            ballVY = -ballVY;
            ballY = clamp(ballY, 0, BOARD.height - BOARD.ballSize);
          }

          const hitsPlayer =
            ballX <= 34 + BOARD.paddleWidth &&
            ballX >= 34 &&
            ballY + BOARD.ballSize >= playerY &&
            ballY <= playerY + BOARD.paddleHeight;

          const hitsCpu =
            ballX + BOARD.ballSize >= BOARD.width - 48 &&
            ballX <= BOARD.width - 48 + BOARD.paddleWidth &&
            ballY + BOARD.ballSize >= cpuY &&
            ballY <= cpuY + BOARD.paddleHeight;

          if (hitsPlayer && ballVX < 0) {
            ballVX = Math.abs(ballVX) + 0.25;
            ballVY += (ballCenter - (playerY + BOARD.paddleHeight / 2)) * 0.06;
          }

          if (hitsCpu && ballVX > 0) {
            ballVX = -Math.abs(ballVX) - 0.25;
            ballVY += (ballCenter - (cpuY + BOARD.paddleHeight / 2)) * 0.05;
          }

          if (ballX < -BOARD.ballSize) {
            cpuScore += 1;
            return {
              ...previous,
              ...resetBall(-1),
              playerY,
              cpuY,
              cpuScore,
              running: playerScore < 7 && cpuScore < 7,
            };
          }

          if (ballX > BOARD.width) {
            playerScore += 1;
            return {
              ...previous,
              ...resetBall(1),
              playerY,
              cpuY,
              playerScore,
              running: playerScore < 7 && cpuScore < 7,
            };
          }

          return {
            ...previous,
            playerY,
            cpuY,
            ballX,
            ballY,
            ballVX,
            ballVY: clamp(ballVY, -7, 7),
            playerScore,
            cpuScore,
          };
        });
      }

      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  function movePlayer(clientY) {
    const board = boardRef.current;
    if (!board) {
      return;
    }

    const rect = board.getBoundingClientRect();
    const y = ((clientY - rect.top) / rect.height) * BOARD.height;
    setGame((current) => ({
      ...current,
      playerY: clamp(y - BOARD.paddleHeight / 2, 0, BOARD.height - BOARD.paddleHeight),
    }));
  }

  function resetGame() {
    setGame(INITIAL_STATE);
  }

  const winner =
    game.playerScore >= 7 ? "Player wins" : game.cpuScore >= 7 ? "CPU wins" : null;

  return (
    <Container fluid className="pong-section">
      <Container className="pong-shell">
        <div className="pong-topbar">
          <h1 className="project-heading">Pong</h1>
          <div className="pong-actions">
            <button
              className="pong-button"
              type="button"
              onClick={() => setGame((current) => ({ ...current, running: !current.running }))}
            >
              {game.running ? "Pause" : "Start"}
            </button>
            <button className="pong-button" type="button" onClick={resetGame}>
              Reset
            </button>
          </div>
        </div>

        <div className="pong-score" aria-live="polite">
          <span>{game.playerScore}</span>
          <span>{winner || "First to 7"}</span>
          <span>{game.cpuScore}</span>
        </div>

        <div
          className="pong-board"
          ref={boardRef}
          onMouseMove={(event) => movePlayer(event.clientY)}
          onTouchMove={(event) => {
            event.preventDefault();
            movePlayer(event.touches[0].clientY);
          }}
        >
          <div className="pong-net" />
          <div
            className="pong-paddle pong-paddle--player"
            style={{ top: `${(game.playerY / BOARD.height) * 100}%` }}
          />
          <div
            className="pong-paddle pong-paddle--cpu"
            style={{ top: `${(game.cpuY / BOARD.height) * 100}%` }}
          />
          <div
            className="pong-ball"
            style={{
              left: `${(game.ballX / BOARD.width) * 100}%`,
              top: `${(game.ballY / BOARD.height) * 100}%`,
            }}
          />
        </div>
      </Container>
    </Container>
  );
}

export default Pong;
