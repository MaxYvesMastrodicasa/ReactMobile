export default async (req, res) => {
    const response = await fetch('https://kaamelott.chaudie.re/api/random');
    const data = await response.json();
    res.status(200).json(data);
  };