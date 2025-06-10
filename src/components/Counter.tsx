import React from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { increment, decrement, reset } from '../store/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold text-white mb-2">Counter App</h1>
        <p className="text-white/80 text-lg">Simple Redux state management</p>
        
        <div className="relative">
          <div className="text-8xl font-bold text-white mb-8 tabular-nums tracking-tight">
            {count}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="group bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            <Minus className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="group bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="group bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            <Plus className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
          </button>
        </div>

        <div className="text-white/60 text-sm">
          <p>Click the buttons to increment, decrement, or reset the counter</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;