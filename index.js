const express = require('express');
const bodyParser = require('body-parser');
const listings = require('./listings');
const hosts = require('./hosts');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to get all properties with filtering
app.get('/properties', (req, res) => {
  let filteredListings = [...listings]; // Copy original listings array

  // Apply filters based on query parameters
  Object.keys(req.query).forEach(key => {
    if (key === 'delay') {
      return filteredListings;
    }
    const value = req.query?.[key];
    filteredListings = filteredListings?.filter(listing => {
      if (Array.isArray(listing?.[key])) {
        return (
          listing?.[key]?.includes(value) ||
          listing?.[key]?.includes(value?.toLowerCase()) ||
          listing?.[key]?.includes(value?.toUpperCase())
        );
      }
      return (
        listing?.[key]?.toString().toLowerCase() ===
        value?.toString().toLowerCase()
      );
    });
  });
  //To simulate the delay
  setTimeout(
    () => {
      res.json(filteredListings);
    },
    req.query?.delay === 'false' ? 0 : 500
  );
});

// Route to get a single property by id
app.get('/properties/:id', (req, res) => {
  const propertyId = req.params.id;
  const property = listings.find(listing => listing.id === propertyId);

  if (!property) {
    return res.status(404).json({ error: 'Property not found' });
  }

  //To simulate the delay
  setTimeout(
    () => {
      res.json(property);
    },
    req.query?.delay === 'false' ? 0 : 500
  );
});

// Route to get a single host by id
app.get('/hosts/:id', (req, res) => {
  const hostId = req.params.id;
  const host = hosts.find(host => host.id === Number(hostId));

  if (!host) {
    return res.status(404).json({ error: 'Host not found' });
  }

  //To simulate the delay
  setTimeout(
    () => {
      res.json(host);
    },
    req.query?.delay === 'false' ? 0 : 500
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
