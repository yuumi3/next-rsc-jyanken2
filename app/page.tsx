"use server";
import ScoreBox from './_components/ScoreBox';
import JyankenBox from './_components/JyankenBox';

export default  async function Jyanken () {
  console.log('- Jyanken');

  return (
    <>
      <h1>じゃんけん ポン！</h1>
      <JyankenBox />
      <ScoreBox />
    </>
  );
}
