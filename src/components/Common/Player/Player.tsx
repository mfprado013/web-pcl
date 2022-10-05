export default function Player({ urlVideo }: { urlVideo: string }) {
  return (
    <video className='w-[720px] border-none' autoPlay controls>
      <source src={urlVideo} />
    </video>
  );
}
