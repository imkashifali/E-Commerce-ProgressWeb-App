import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Customers who viewed Logitech C920x Pro HD Webcam also viewed"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SY450_.jpg"
          />
          <Product
            id="2"
            title="Seagate Portable 2TB External Hard Drive Portable HDD"
            price={52}
            rating={3}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display "
            price={435}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Giga"
            price={323}
            rating={3}
            image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_UY218_.jpg"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={323}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB"
            price={323}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Logitech C920x Pro HD Webcam"
            price={1296}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SY450_.jpg"
          />
          <Product
            id="8"
            title="Ailun Glass Screen Protector for iPhone 11/iPhone XR 6."
            price={923}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81fjSKzFgeL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="10"
            title="Microsoft Xbox One S 1TB Forza Horizon 4 LEGO® Speed Champions Bundle, White, 234-01121 "
            price={422}
            rating={4}
            image="https://m.media-amazon.com/images/I/81kCyw2FHVL._AC_UY218_.jpg"
          />
          <Product
            id="11"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB,"
            price={1300}
            rating={6}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SY450_.jpg"
          />
          <Product
            id="12"
            title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung "
            price={54}
            rating={5}
            image="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY218_.jpg"
          />
          <Product
            id="13"
            title="Samsung Galaxy S20 Ultra 5G Factory Unlocked New Android Cell Phone US Version"
            price={554}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61gTQHNx4xL._AC_SY550_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Marmot Crane Creek Backpacking and Camping Tent For 2 person, 32 square foot"
            price={123}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81FJKQOwGlL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
