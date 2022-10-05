import ProgressBar from '@ramonak/react-progress-bar';
export default function Progress({ rate }: { rate: any }) {
  const ProgressBar = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background: #e8eef4;
    margin-top: 20px;
    position: relative;

    div {
      width: ${({ percentage }) => `${percentage}%`};
      transition: width 1s;
      height: 100%;
      background: #f17d7d;
    }
  `;

  const Count = styled.p`
    font-size: 20px;
    margin-left: 50px;
  `;
  return (
    <ProgressBar
      percentage={percentage}
      className='w-full h-[5px] rounded-md bg-slate-50 mt-[20px] relative '
    ></ProgressBar>
  );
}
