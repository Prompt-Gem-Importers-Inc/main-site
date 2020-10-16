import React, { useState } from "react";
import "../style/body.scss";
import "../style/bios.scss";
import "../style/logoAndHeader.scss";

function App() {
  return (
    <div>
      <div className="logo">
        <img
          src="../pics/Logo.png"
          alt="Prompt Gem Logo"
          width="400"
          height="300"
        />
      </div>

      <p className="header">
        <h2>
          <b>About Us</b>
        </h2>
        With over 40 years of experience serving European, American and Asian
        markets, Prompt Gem Importers, Inc. specializes in colourless and
        natural fancy colour diamonds and high-end gemstones. If their customers
        desire, Prompt can create hand-crafted, fine jewellery for any gemstone
        purchase. Prompt's diamond assortment includes every carat size, and
        ranges from GIA-certified stones to diamond with Old World faceting
        styles reminiscent of a bygone era. Prompt has always been a
        well-stocked source of yellow diamonds of every size and cut, from Fancy
        Light to Fancy Vivid. CEO, Shailesh Jhalani, adds, "Recently we have
        been offering a number of diamonds in various shades of pink and blue,
        and we currently have an assortment from one to ten carats. Of course,
        all of our fancy colored diamonds are certified natural. And our
        inventory of fine, colored gemstones include important, unheated rubies
        from Burma; unheated sapphires from Burma, Ceylon and Kashmir; and,
        untreated emeralds from Columbia. From the usual to the unusual, we are
        proud to carry the finest quality gemstones that make for happy and
        loyal customers. " Prompt also supplies a variety of briolettes, beads,
        rose cuts, layouts, calibrated sets and melee in a variety of sizes and
        colours. Mr. Jhalani offers,"Whatever you gemstone needs, please contact
        us. We would be grateful for the opportunity to present you with the
        finest quality and the highest level of customer service at competitive
        prices.
        <br />
        <br />
        <b id="slogam">
          As our name suggests, 'prompt' service and client satisfaction are our
          top priority.
        </b>
      </p>
      <br />
      <br />
    
      <h2 id="ourteam">Our Team</h2>
      <br/>
      <div className="bios">
        <div className="bios1">
          <img src="../pics/kj.jpg" alt="SJ Pic" width="350" height="300" />
          <p>
            <h2>Mr. Kailash Jhalani</h2>
            <h4>President</h4>
            In October 1974 Mr. Jhalani along with his wife Lalita arrived in
            New York and decided to open a business in the city, which was one
            of the leading diamond centers of the world. In 1975, he opened a
            new company called <b>PROMPT GEM IMPORTERS</b>
            INC and began doing business in the precious and semi – precious
            stones market. He was determined to succedd and did not shy away
            from hard work. He brought all his entrepreneurial skills and
            developed the company slowly but surely and today Prompt Gem
            Importers Inc. is a well respected diamond, colored stone and
            jewellery Company in New York City.
          </p>
        </div>
        <div className="bios2">
          <img src="../pics/sj.jpeg" alt="SJ Pic" width="350" height="300" />
          <h2>Mr. Shailesh Jhalani</h2>
          <h4>Vice President</h4>
          <p>
            Mr. Jhalani’s son, shailesh is his partner and a senior executive in
            the firm. For the past 10 years they have focused mainly on the
            diamond and fine jewelry sector of the business. Today the company
            is known for dealing in rare collectable gemstones like Blue
            Diamond, Red Diamond, Pink Diamond, Orange Diamond and Vivid Yellow
            Diamonds. Also Gem quality Ruby, Emerald and Sapphires. Mr. Jhalani
            recently sold the World Largest Natural Blue Sapphire weighing
            around 5000 carats.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
