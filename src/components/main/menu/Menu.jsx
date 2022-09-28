import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu__services">
      <div className="just__try">
        <div className="menu__title__wrap">
          <h1 >Browse our menu</h1>
        </div>

        <div className="menu__desc">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            porro fugit ipsum eligendi vero corporis?
          </p>
        </div>
      </div>

      <div className="menu__tabs">
        <button className="menu__button main">Burger</button>
        <button className="menu__button">Sides</button>
        <button className="menu__button">Drinks</button>
      </div>

      <div className="menu__row">
        <div className="menu__cards">
          <div className="menu__image">
            <img
              src="https://cdn.shopify.com/s/files/1/0244/1838/5975/products/burger-patties-grass-fed-organic-burger-australian-beef_600x.jpg?v=1639848416"
              alt=""
            />
          </div>
          <div className="menu__content">
            <div className="menu__name__price">
              <h1 className="menu__text">Big Chomp</h1>
              <h1 className="menu__price">$100.00</h1>
            </div>

            <p className="menu__desc">
              Easiliy adapt your menu using the webflow CMS and allow customers
              to browse your items
            </p>
            <div className="menu__cart">
              <input
                className="menu__counter"
                type="number"
                id="tentacles"
                name="tentacles"
                min="10"
                max="100"
                value="0"
              />
              <button className="menu__cart__button">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="menu__cards">
          <div className="menu__image">
            <img
              src="https://media.istockphoto.com/photos/closeup-of-a-veggie-burger-with-copy-space-picture-id1331109186?b=1&k=20&m=1331109186&s=170667a&w=0&h=CWqc2DNV-frmE_aqiQu4Q-SfCUmqJIp362drb4cSMZU="
              alt=""
            />
          </div>
          <div className="menu__content">
            <div className="menu__name__price">
              <h1 className="menu__text">Big Chomp</h1>
              <h1 className="menu__price">$100.00</h1>
            </div>
            <p className="menu__desc">
              Easiliy adapt your menu using the webflow CMS and allow customers
              to browse your items
            </p>
            <div className="menu__cart">
              <input
                className="menu__counter"
                type="number"
                id="tentacles"
                name="tentacles"
                min="10"
                max="100"
                value="0"
              />
              <button className="menu__cart__button">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="menu__cards">
          <div className="menu__image">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              alt=""
            />
          </div>
          <div className="menu__content">
            <div className="menu__name__price">
              <h1 className="menu__text">Big Chomp</h1>
              <h1 className="menu__price">$100.00</h1>
            </div>
            <p className="menu__desc">
              Easiliy adapt your menu using the webflow CMS and allow customers
              to browse your items
            </p>
            <div className="menu__cart">
              <input
                className="menu__counter"
                type="number"
                id="tentacles"
                name="tentacles"
                min="10"
                max="100"
                value="0"
              />
              <button className="menu__cart__button">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="menu__cards">
          <div className="menu__image">
            <img
              src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
              alt=""
            />
          </div>
          <div className="menu__content">
            <div className="menu__name__price">
              <h1 className="menu__text">Big Chomp</h1>
              <h1>$100.00</h1>
            </div>
            <p className="menu__desc">
              Easiliy adapt your menu using the webflow CMS and allow customers
              to browse your items
            </p>
            <div className="menu__cart">
              <input
                className="menu__counter"
                type="number"
                id="tentacles"
                name="tentacles"
                min="10"
                max="100"
                value="0"
              />
              <button className="menu__cart__button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="menu__button__section">
        <button className="menu__button">See full menu</button>
      </div>
    </div>
  );
};

export default Menu;
