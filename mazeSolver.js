let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(maze,column,row){
  // console.log(column,row)
  if(maze[column][row] === 'e'){
    return '\nMaze solved'
  }else if(maze[column][row] == ' '){
    maze[column][row] = 'P'

    if(row < maze[column].length -1){
      process.stdout.write('R')
      // console.log(maze)
      return mazeSolver(maze,column,row+1)
    }
    if(column < maze.length -1){
      process.stdout.write('D')
      // console.log(maze)
      return mazeSolver(maze,column+1,row)
    }
  }else{
    if(column > 0){
      process.stdout.write('UR')
      // console.log(maze)
      return mazeSolver(maze,column-1,row+1)
    }
    if(row > 0){
      process.stdout.write('LD')
      // console.log(maze)
      return mazeSolver(maze,column+1,row-1)
    }
  }
}

console.log(mazeSolver(mySmallMaze,0,0))
console.log(mazeSolver(maze,0,0))