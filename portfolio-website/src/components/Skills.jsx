import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Skills() {
  const data = {
    labels: ['React', 'JavaScript', 'CSS/Tailwind', 'UI/UX', 'Node.js', 'TypeScript'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 75, 70, 65],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <Radar data={data} options={options} />
        </div>
      </div>
    </section>
  );
}