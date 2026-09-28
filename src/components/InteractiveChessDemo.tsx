import React, { useState } from 'react';
import { X, RotateCcw, Play, Terminal, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface InteractiveChessDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

// Simple 8x8 initial setup demo
export const InteractiveChessDemo: React.FC<InteractiveChessDemoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Selected square state
  const [selectedSquare, setSelectedSquare] = useState<string | null>('e2');
  const [activeTab, setActiveTab] = useState<'board' | 'code'>('board');
  const [evalScore, setEvalScore] = useState<number>(0.45);

  // Suggested moves for e2 pawn
  const legalMovesMap: Record<string, string[]> = {
    'e2': ['e3', 'e4'],
    'e7': ['e6', 'e5'],
    'g1': ['f3', 'h3'],
    'b1': ['a3', 'c3'],
    'd2': ['d3', 'd4'],
  };

  const currentLegalMoves = selectedSquare ? legalMovesMap[selectedSquare] || [] : [];

  const handleSquareClick = (squareId: string) => {
    if (selectedSquare && currentLegalMoves.includes(squareId)) {
      // simulate move
      setSelectedSquare(null);
      setEvalScore((prev) => +(prev + 0.15).toFixed(2));
    } else {
      setSelectedSquare(squareId);
    }
  };

  // 8x8 rank & files
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  // Basic representation of key pieces
  const pieces: Record<string, string> = {
    'e1': '♔', 'd1': '♕', 'a1': '♖', 'h1': '♖', 'c1': '♗', 'f1': '♗', 'b1': '♘', 'g1': '♘',
    'e2': '♙', 'd2': '♙', 'c2': '♙', 'f2': '♙', 'a2': '♙', 'b2': '♙', 'g2': '♙', 'h2': '♙',
    'e8': '♚', 'd8': '♛', 'a8': '♜', 'h8': '♜', 'c8': '♝', 'f8': '♝', 'b8': '♞', 'g8': '♞',
    'e7': '♟', 'd7': '♟', 'c7': '♟', 'f7': '♟', 'a7': '♟', 'b7': '♟', 'g7': '♟', 'h7': '♟',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121218] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161620]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#DC0000]/20 border border-[#DC0000]/40 flex items-center justify-center text-[#FF2800]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white">
                Python Chess Engine & Logika Bidak
              </h3>
              <p className="text-xs text-zinc-400">
                Eksplorasi Algoritma Validasi Gerak & Posisi Evaluasi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex p-1 bg-black/40 rounded-lg border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('board')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'board' ? 'bg-[#DC0000] text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Papan Interaktif
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'code' ? 'bg-[#DC0000] text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Python Snippet
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'board' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Chessboard (7 cols) */}
              <div className="md:col-span-7 flex flex-col items-center">
                <div className="bg-[#181822] p-3 rounded-xl border border-white/10 shadow-xl inline-block">
                  <div className="grid grid-cols-8 border border-white/20 rounded overflow-hidden w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
                    {ranks.map((rank, rIdx) =>
                      files.map((file, fIdx) => {
                        const squareId = `${file}${rank}`;
                        const isDark = (rIdx + fIdx) % 2 === 1;
                        const isSelected = selectedSquare === squareId;
                        const isLegal = currentLegalMoves.includes(squareId);
                        const piece = pieces[squareId];

                        return (
                          <button
                            key={squareId}
                            onClick={() => handleSquareClick(squareId)}
                            className={`relative flex items-center justify-center text-xl sm:text-2xl font-bold select-none transition-all ${
                              isDark ? 'bg-[#22222d]' : 'bg-[#323242]'
                            } ${
                              isSelected
                                ? '!bg-[#DC0000]/60 ring-2 ring-[#FF2800]'
                                : ''
                            } ${
                              isLegal
                                ? '!bg-amber-500/30'
                                : ''
                            } hover:opacity-90`}
                          >
                            {isLegal && !piece && (
                              <div className="w-3 h-3 rounded-full bg-[#FF2800] shadow-sm shadow-[#FF2800]" />
                            )}
                            {piece && (
                              <span
                                className={`drop-shadow-sm ${
                                  rank === '1' || rank === '2'
                                    ? 'text-white'
                                    : 'text-zinc-300'
                                }`}
                              >
                                {piece}
                              </span>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                  {/* File labels */}
                  <div className="flex justify-between px-2 pt-2 text-[10px] font-mono text-zinc-500 uppercase">
                    {files.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2 text-center">
                  Klik bidak pion putih <strong>e2</strong> atau kuda <strong>g1</strong> untuk melihat kalkulasi jalur langkah legal!
                </p>
              </div>

              {/* Status & Algorithms (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-2">
                  <div className="text-xs font-mono text-zinc-400">STATUS LOGIKA ENGINE</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Pilihan Bidak:</span>
                    <span className="font-mono text-xs font-bold text-[#FF2800]">
                      {selectedSquare ? selectedSquare.toUpperCase() : 'NONE'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Langkah Valid:</span>
                    <span className="font-mono text-xs text-white">
                      {currentLegalMoves.length > 0
                        ? currentLegalMoves.map((m) => m.toUpperCase()).join(', ')
                        : 'Pilih bidak aktif'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Evaluasi Posisi:</span>
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      +{evalScore} CP (White Advantage)
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
                  <div className="text-xs font-mono text-[#FF2800]">FOKUS LOGIKA PYTHON:</div>
                  <ul className="text-xs text-zinc-300 space-y-1.5 list-disc pl-4">
                    <li>Validasi Raycasting untuk Bishop & Rook</li>
                    <li>Aturan En Passant & Promosi Pion</li>
                    <li>Minimax dengan Alpha-Beta Pruning (Kedalaman 4 Ply)</li>
                    <li>Piece-Square Tables untuk evaluasi posisi</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedSquare('e2');
                    setEvalScore(0.45);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-zinc-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Simulasi Posisi</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#0b0b0f] p-4 rounded-xl border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto">
              <pre className="text-zinc-300 leading-relaxed">{`# Esa Sanjaya - Python Chess Engine Core Logic
# Proyek Eksplorasi Struktur Data & Algoritma Keputusan

class ChessBoard:
    def __init__(self):
        self.board = self.init_board()
        self.white_to_move = True
        self.move_log = []

    def get_pawn_moves(self, row: int, col: int) -> list:
        moves = []
        direction = -1 if self.white_to_move else 1
        start_row = 6 if self.white_to_move else 1

        # 1 square advance
        if self.board[row + direction][col] == "--":
            moves.append((row + direction, col))
            # 2 square advance on initial row
            if row == start_row and self.board[row + 2 * direction][col] == "--":
                moves.append((row + 2 * direction, col))

        # Diagonal captures
        for dc in [-1, 1]:
            target_c = col + dc
            if 0 <= target_c < 8:
                target_p = self.board[row + direction][target_c]
                if target_p != "--" and (target_p[0] == ('b' if self.white_to_move else 'w')):
                    moves.append((row + direction, target_c))
        return moves

    def evaluate_position(self) -> float:
        # Menghitung bobot material dan keunggulan ruang
        material_weights = {'P': 1.0, 'N': 3.2, 'B': 3.3, 'R': 5.0, 'Q': 9.0, 'K': 1000.0}
        score = sum(self.tally_material(color='w')) - sum(self.tally_material(color='b'))
        return score
`}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
