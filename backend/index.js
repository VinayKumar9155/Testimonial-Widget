const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const testimonials = [
  { id: 1, name: 'Dharmesh', text: 'This product is amazing! If you do the job badly enough, sometimes you dont get asked to do it again.' },
  { id: 2, name: 'Shaw', text: 'I love this service! If you do the job badly enough, sometimes you dont get asked to do it again.' },
  { id: 3, name: 'Vinay Kumar Gupta', text: 'I love this service! If you do the job badly enough, sometimes you dont get asked to do it again.' },
];

const jsonResponse = JSON.stringify(testimonials);

app.get('/testimonials', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.send(jsonResponse);
});

app.listen(5000, () => {
  console.log('API server is running on port 5000');
});
