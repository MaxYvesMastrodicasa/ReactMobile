export default async (req, res) => {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    const data = await response.json();
    res.status(200).json(data);
    console.log(data)
  };