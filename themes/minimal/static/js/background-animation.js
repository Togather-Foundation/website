/**
 * Togather Background Animation
 * A cellular automata-inspired animation representing the open ecosystem
 * Lightweight, monochrome, organic connections
 */

class TogatherBackground {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: true });
    this.cells = [];
    this.gridSize = 40;
    this.cols = 0;
    this.rows = 0;
    this.time = 0;
    this.animationId = null;
    this.isResizing = false;
    
    // Color palette - subtle earth tones
    this.colors = {
      bg: 'rgba(26, 32, 38, 0.18)',
      active: 'rgba(100, 80, 60, 0.35)',
      pulse: 'rgba(180, 140, 100, 0.45)',
      connection: 'rgba(100, 80, 60, 0.18)'
    };
    
    this.init();
    this.setupResizeHandler();
  }
  
  init() {
    this.resize();
    this.seedCells();
    this.animate();
    
    // Fade in canvas after initialization
    setTimeout(() => {
      this.canvas.classList.add('loaded');
    }, 300);
  }
  
  resize() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    
    // Reset transform and apply device pixel ratio scaling
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
    
    this.cols = Math.ceil(width / this.gridSize);
    this.rows = Math.ceil(height / this.gridSize);
    this.width = width;
    this.height = height;
  }
  
  setupResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      this.isResizing = true;
      
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.resize();
        this.seedCells();
        this.isResizing = false;
      }, 250);
    });
  }
  
  seedCells() {
    this.cells = [];
    
    for (let i = 0; i < this.cols; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        const alive = Math.random() < 0.1;
        this.cells[i][j] = {
          alive: alive,
          age: 0,
          energy: alive ? 0.3 + Math.random() * 0.3 : 0
        };
      }
    }
  }
  
  countNeighbors(x, y) {
    let count = 0;
    let totalEnergy = 0;
    
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        
        const col = (x + i + this.cols) % this.cols;
        const row = (y + j + this.rows) % this.rows;
        
        if (this.cells[col] && this.cells[col][row] && this.cells[col][row].alive) {
          count++;
          totalEnergy += this.cells[col][row].energy;
        }
      }
    }
    
    return { count, avgEnergy: count > 0 ? totalEnergy / count : 0 };
  }
  
  update() {
    const newCells = [];
    
    for (let i = 0; i < this.cols; i++) {
      newCells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        const cell = this.cells[i][j];
        const { count, avgEnergy } = this.countNeighbors(i, j);
        
        let newCell = { ...cell };
        
        // Modified Game of Life rules for organic feel
        if (cell.alive) {
          if (count < 2 || count > 3) {
            newCell.alive = false;
            newCell.energy = 0;
          } else {
            newCell.age += 1;
            newCell.energy = 0.3 + Math.sin(this.time * 0.02 + i * 0.1 + j * 0.1) * 0.2 + avgEnergy * 0.3;
          }
        } else {
          // Birth with exactly 3 neighbors, small random chance for spontaneity
          if (count === 3 || (count === 2 && Math.random() < 0.01)) {
            newCell.alive = true;
            newCell.age = 0;
            newCell.energy = avgEnergy;
          }
        }
        
        newCells[i][j] = newCell;
      }
    }
    
    this.cells = newCells;
    this.time++;
  }
  
  draw() {
    // Semi-transparent fill creates trail effect
    this.ctx.fillStyle = this.colors.bg;
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    this.drawConnections();
    
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.cells[i][j];
        if (!cell.alive) continue;
        
        const x = i * this.gridSize + this.gridSize / 2;
        const y = j * this.gridSize + this.gridSize / 2;
        
        // Pulse size based on age and energy
        const baseSize = this.gridSize * 0.3;
        const pulse = Math.sin(cell.age * 0.1) * 0.2 + 0.8;
        const size = baseSize * cell.energy * pulse;
        
        // Draw cell
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        const opacity = 0.35 + cell.energy * 0.25;
        this.ctx.fillStyle = `rgba(100, 80, 60, ${opacity})`;
        this.ctx.fill();
        
        // Add glow for high-energy cells
        if (cell.energy > 0.7) {
          this.ctx.beginPath();
          this.ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
          this.ctx.fillStyle = this.colors.pulse;
          this.ctx.fill();
        }
      }
    }
  }
  
  drawConnections() {
    this.ctx.strokeStyle = this.colors.connection;
    this.ctx.lineWidth = 1;
    
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const cell = this.cells[i][j];
        if (!cell.alive) continue;
        
        const x1 = i * this.gridSize + this.gridSize / 2;
        const y1 = j * this.gridSize + this.gridSize / 2;
        
        // Check right and down neighbors to avoid double drawing
        const neighbors = [
          { dx: 1, dy: 0 },
          { dx: 0, dy: 1 },
          { dx: 1, dy: 1 }
        ];
        
        for (const { dx, dy } of neighbors) {
          const ni = i + dx;
          const nj = j + dy;
          
          if (ni < this.cols && nj < this.rows && 
              this.cells[ni] && this.cells[ni][nj] && 
              this.cells[ni][nj].alive) {
            
            const x2 = ni * this.gridSize + this.gridSize / 2;
            const y2 = nj * this.gridSize + this.gridSize / 2;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
          }
        }
      }
    }
  }
  
  animate() {
    if (this.isResizing) {
      this.animationId = requestAnimationFrame(() => this.animate());
      return;
    }
    
    // Update every 24 frames for slower, organic movement
    if (this.time % 24 === 0) {
      this.update();
    }
    
    this.draw();
    this.time++;
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}

function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    new TogatherBackground(canvas);
  }
}
