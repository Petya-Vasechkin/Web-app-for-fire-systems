import React, { useState } from 'react';
import './PuzzleGrid.css';
import PuzzleClear from '../Puzzles/0/PuzzleClear';
import PuzzleOne from '../Puzzles/1/PuzzleOne';
import PuzzleTwo from '../Puzzles/2/PuzzleTwo';
import PuzzleThree from '../Puzzles/3/PuzzleThree';
import PuzzleFour from '../Puzzles/4/PuzzleFour';
import PuzzleFive from '../Puzzles/5/PuzzleFive';
import PuzzleSix from '../Puzzles/6/PuzzleSix';
import PuzzleSeven from '../Puzzles/7/PuzzleSeven';
import PuzzleEight from '../Puzzles/8/PuzzleEight';
import PuzzleNine from '../Puzzles/9/PuzzleNine';
import PuzzleTen from '../Puzzles/10/PuzzleTen';

const PuzzleGrid = () => {
  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(13);
  const [puzzles, setPuzzles] = useState([
    { id: 1, positions: [], component: <PuzzleClear /> },
    { id: 2, positions: [], component: <PuzzleOne /> },
    { id: 3, positions: [], component: <PuzzleTwo /> },
    { id: 4, positions: [], component: <PuzzleThree /> },
    { id: 5, positions: [], component: <PuzzleFour /> },
    { id: 6, positions: [], component: <PuzzleFive /> },
    { id: 7, positions: [], component: <PuzzleSix /> },
    { id: 8, positions: [], component: <PuzzleSeven /> },
    { id: 9, positions: [], component: <PuzzleEight /> },
    { id: 10, positions: [], component: <PuzzleNine /> },
    { id: 11, positions: [], component: <PuzzleTen /> },
  ]);



  const [currentFloor, setCurrentFloor] = useState(1);
  // const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [totalFloors, setTotalFloors] = useState(1); // начальное значение 1
  const floors = Array.from({ length: totalFloors }, (_, i) => i + 1);



  // Новое состояние для названия здания
  const [buildingName, setBuildingName] = useState('');

  // Функция для сохранения пазла как здания
  const saveBuilding = () => {
    if (buildingName.trim() !== '') {
      // Здесь реализация логики сохранения, например, отправку на сервер
      console.log(`Saving building named: ${buildingName}`);
      // Обнуляем имя здания после сохранения
      setBuildingName('');
    }
    else {
      // Обработка случая, когда имя здания не введено
      console.error('Building name is required');
    }
  };



  //Ограничение рядов и столбцов
  const minRows = 7;
  const minColumns = 13;

  const updateRows = (newRows) => {
    if (newRows >= minRows) {
      setRows(newRows);
    }
  };

  const updateColumns = (newColumns) => {
    if (newColumns >= minColumns) {
      setColumns(newColumns);
    }
  };



  //Сетка
  const [isGridActive, setIsGridActive] = useState(true);
  // Функция переключения отображения сетки
  const toggleGrid = () => {
    setIsGridActive(!isGridActive);
  };
  // Стили для сетки в зависимости от состояния isGridActive
  const gridStyle = isGridActive ? {
    gap: '1px',
    borderColor: '#ccc', // Или любой другой цвет рамки, который вы используете
    borderWidth: '1px',
    borderStyle: 'solid'
  } : {
    borderColor: 'transparent', // Сделаем границу прозрачной
    borderWidth: '0', // или использовать 'none'
    backgroundColor: '#fff', // Только белый фон без границ и промежутков
  };



  // Функция обработки отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    // Логика для создания или обновления сетки на основе введенных размеров, пока что она пуста
    // При необходимости здесь можно добавить дополнительную логику, например, очистку текущих позиций пазлов
    console.log('Обновляем размеры сетки:', rows, columns);
  };



  // Текущий выбранный пазл
  const selectPuzzle = (puzzleId) => {
    setSelectedPuzzleId(puzzleId);
  };

  const [selectedPuzzleId, setSelectedPuzzleId] = useState(null);

  const placePuzzle = (row, column) => {
    if (selectedPuzzleId !== null) {
      setPuzzles(prevPuzzles => prevPuzzles.map(puzzle => {
        // Удаляем эту позицию у всех пазлов, кроме выбранного
        const updatedPositions = puzzle.positions.filter(pos => pos.row !== row || pos.column !== column || pos.floor !== currentFloor);
        // Добавляем эту позицию к выбранному пазлу
        if (puzzle.id === selectedPuzzleId) {
          updatedPositions.push({ row, column, floor: currentFloor });
        }
        return { ...puzzle, positions: updatedPositions };
      }));
    }
  };



  // Генерация сетки
  const grid = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const puzzlePosition = puzzles
        .flatMap(puzzle =>
          puzzle.positions
            .filter(pos => pos.floor === currentFloor && pos.row === row && pos.column === column)
            .map(() => puzzle.component)
        );
      const puzzleComponent = puzzlePosition.length > 0 ? React.cloneElement(puzzlePosition[0], { key: `${row}-${column}-${currentFloor}` }) : null;
      // const puzzle = puzzles.find(puzzle => puzzle.positions.some(pos => pos.row === row && pos.column === column));
      grid.push(
        <div className="grid-cell" key={`${row}-${column}`} onClick={() => placePuzzle(row, column)}>
          {puzzleComponent}
        </div>
      );
    }
  }

  // Кнопки для выбора этажей
  const floorButtons = floors.map(floor =>
    <button className='floor-controls-buttons' key={floor} onClick={() => setCurrentFloor(floor)} disabled={currentFloor === floor}>
      Patro {floor}
    </button>
  );

  return (
    <>
      {/* Кнопки управления этажами  */}
      <div className="floor-controls">{floorButtons}</div>



      <div className='parent-of-the-grid-container'>
        <div className="grid-container" style={{ gridTemplateRows: `repeat(${rows}, 50px)`, gridTemplateColumns: `repeat(${columns}, 50px)`, ...gridStyle }}>
          {grid}
        </div>
      </div>



      <div className='grid-manage-panel'>
        <form className='puzzle-grid-form' onSubmit={handleSubmit}>
          <label htmlFor="rows">Řádky: </label>
          <input type="number" name='rows' value={rows} onChange={(e) => updateRows(Number(e.target.value))} min={minRows} />
          <label htmlFor="columns">Sloupce: </label>
          <input type="number" name='columns' value={columns} onChange={(e) => updateColumns(Number(e.target.value))} min={minColumns} />
          {/* <button type="submit">Создать сетку</button> */}
          <label htmlFor="totalFloors">Počet pater:</label>
          <input type="number" id="totalFloors" min="1" value={totalFloors} onChange={e => setTotalFloors(Number(e.target.value))} />
        </form>



        <div className='grid-buttons-manage-panel'>
          {/* Форма для названия здания и кнопки сохранения */}
          <div className='grid-building-form'>
            <button className='active-notactive-grid-button' onClick={toggleGrid}>
              {isGridActive ? 'Skrýt mřížku' : 'Zobrazit mřížku'}
            </button>
            <input type="text" placeholder="Název budovy" value={buildingName} onChange={(e) => setBuildingName(e.target.value)} />
            <button type="button" onClick={saveBuilding}>Uložit jako budovu</button>
          </div>
        </div>



        <div className="puzzle-area">
          {puzzles.map(puzzle => (
            <div key={puzzle.id} className="puzzle" onClick={() => selectPuzzle(puzzle.id)}>
              {puzzle.component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PuzzleGrid;
