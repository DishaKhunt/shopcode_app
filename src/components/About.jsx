import React from 'react';
import Layout from './Layout';

export default function About() {
  return (
    <div>
      <Layout>
        <div className="container p-4 mx-auto md:w-10/12">
          <h1 className="mb-6 text-4xl font-bold">About Us</h1>
          
          <div className="p-6 mb-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Our Story" 
                className="object-cover w-24 h-24 mr-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold">Our Story</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Welcome to FashionCo! Founded in 2020, we are dedicated to bringing you the latest trends in fashion at affordable prices. Our journey began with a simple idea: to create a one-stop shop where you can find stylish and high-quality clothing without breaking the bank.
            </p>
            <p className="mb-4 text-gray-700">
              Our team of passionate fashion experts is always on the lookout for the newest styles and must-have pieces. We carefully curate our collection to ensure that we offer something for everyone, whether you're looking for casual wear, business attire, or something for a special occasion.
            </p>
            <p className="text-gray-700">
              At FashionCo, we believe that everyone deserves to feel confident and stylish. That's why we are committed to providing excellent customer service, easy returns, and a shopping experience that you'll love. Thank you for choosing us as your fashion destination!
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Our Values" 
                className="object-cover w-24 h-24 mr-4 rounded-full"
              />
              <h2 className="text-2xl font-semibold">Our Values</h2>
            </div>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><strong>Quality:</strong> We source our products from trusted suppliers to ensure the best quality.</li>
              <li><strong>Affordability:</strong> We strive to keep our prices competitive while maintaining high standards.</li>
              <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We aim to exceed your expectations.</li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
