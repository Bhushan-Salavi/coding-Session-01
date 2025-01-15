//NestedObjectDestructuring.js

const user = {
    id: 123,
    profile: {
      name: "Bhushan",
      address: {
        city: "Kolhapur",
        zipcode: "90001"
      }
    }
  };

  console.log(user?.profile?.address?.state ||"Info Not available")