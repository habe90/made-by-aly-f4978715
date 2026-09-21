import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const A = import.meta.env.BASE_URL

function Arrow({left=false}) { return <span aria-hidden="true">{left ? '←' : '→'}</span> }
function BagIcon(){return <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>}
function SearchIcon(){return <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>}

function Header({menuOpen,setMenuOpen}){
 const [solid,setSolid]=useState(false)
 useEffect(()=>{const fn=()=>setSolid(scrollY>40); addEventListener('scroll',fn); return()=>removeEventListener('scroll',fn)},[])
 return <header className={solid?'solid':''}>
   <button className="menu-toggle" aria-label="Otvori meni" onClick={()=>setMenuOpen(!menuOpen)}><i/><i/></button>
   <nav className={menuOpen?'open':''}>
    <a href="#kolekcija" onClick={()=>setMenuOpen(false)}>KOLEKCIJA</a>
    <a href="#haljine" onClick={()=>setMenuOpen(false)}>HALJINE</a>
    <a href="#prica" onClick={()=>setMenuOpen(false)}>NAŠA PRIČA</a>
   </nav>
   <a className="logo" href="#top" aria-label="Početna"><span>MAISON</span><small>ATELIER</small></a>
   <div className="actions"><button aria-label="Pretraga"><SearchIcon/></button><button aria-label="Korpa"><BagIcon/><b>0</b></button></div>
 </header>
}

function App(){
 const [menuOpen,setMenuOpen]=useState(false)
 return <main id="top">
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <section className="hero">
    <img className="hero-img" src={A+'images/hero-fashion.png'} alt="Model u crnoj couture haljini"/>
    <div className="hero-shade"/>
    <div className="hero-copy"><p>NOVA KOLEKCIJA · 2025</p><h1>UMJETNOST<br/><em>ŽENSTVENOSTI</em></h1><a className="cta light" href="#kolekcija">OTKRIJ KOLEKCIJU <Arrow/></a></div>
    <div className="side-note">MADE WITH PURPOSE&nbsp;&nbsp; · &nbsp;&nbsp;DESIGNED TO ENDURE</div>
    <a href="#intro" className="scroll">SCROLL <span/></a>
   </section>

   <section className="intro" id="intro">
    <div className="eyebrow"><span>01</span> NOVA KOLEKCIJA</div>
    <h2>Tiha snaga.<br/>Vječna <em>elegancija.</em></h2>
    <div className="intro-grid">
      <p>KOLEKCIJA KOJA SLAVI ŽENU KROZ ČISTU LINIJU, PRECIZAN KROJ I TKANINE KOJE PRATE POKRET.</p>
      <p>Svaki komad nastaje kao susret savremene siluete i tradicionalnog zanata. Promišljeno, strpljivo i s razlogom.</p>
    </div>
   </section>

   <section className="editorial" id="kolekcija">
    <article className="ed-main"><img src={A+'images/editorial-gold.png'} alt="Zlatna večernja haljina"/><div className="ed-caption"><span>01 / 03</span><h3>ZLATNA<br/>TIŠINA</h3></div></article>
    <div className="ed-side">
      <div className="fabric"><img src={A+'images/detail-fabric.png'} alt="Detalj luksuzne tkanine"/><span>PRECISION IN EVERY DETAIL</span></div>
      <div className="side-copy"><p>OD VEČERNJIH SILUETA DO KOMADA ZA POSEBNE TRENUTKE.</p><a className="cta dark" href="#haljine">POGLEDAJ SVE <Arrow/></a></div>
    </div>
   </section>

   <section className="statement" id="haljine">
    <div className="statement-title"><span>02</span><h2>Stvoreno da<br/><em>ostavi trag.</em></h2></div>
    <div className="statement-image"><img src={A+'images/hero-fashion.png'} alt="Crna couture silueta"/></div>
    <div className="statement-copy"><p>Od prvog poteza olovke do posljednjeg ručno ušivenog detalja, vjerujemo u odjeću koja nije samo trenutak.</p><a className="text-link" href="#prica">ISTRAŽI HALJINE <Arrow/></a></div>
   </section>

   <section className="craft" id="prica">
    <div className="craft-image"><img src={A+'images/detail-fabric.png'} alt="Materijali u ateljeu"/></div>
    <div className="craft-copy"><div className="eyebrow"><span>03</span> ATELJE</div><h2>Ruke koje<br/>oblikuju <em>priču.</em></h2><p>Posvećeni smo sporom procesu stvaranja. Biramo materijale koji traju i sarađujemo sa majstorima koji razumiju vrijednost svakog šava.</p><a className="cta dark" href="#newsletter">NAŠA PRIČA <Arrow/></a></div>
   </section>

   <section className="newsletter" id="newsletter"><p>PRIVATNE NOVOSTI · NOVE KOLEKCIJE · PRIČE IZ ATELJEA</p><h2>Budite dio<br/><em>naše priče.</em></h2><form onSubmit={e=>{e.preventDefault(); e.currentTarget.classList.add('sent')}}><input type="email" required placeholder="VAŠA EMAIL ADRESA"/><button aria-label="Pošalji"><Arrow/></button><small>HVALA. USKORO SE ČITAMO.</small></form></section>
   <footer><a className="logo foot-logo" href="#top"><span>MAISON</span><small>ATELIER</small></a><div className="footer-links"><div><b>ISTRAŽITE</b><a href="#kolekcija">Kolekcija</a><a href="#haljine">Haljine</a><a href="#prica">Naša priča</a></div><div><b>POMOĆ</b><a href="mailto:studio@example.com">Kontakt</a><a href="#">Dostava i povrat</a><a href="#">Vodič veličina</a></div></div><div className="copyright">© 2025 MAISON ATELIER <span>SARAJEVO · BOSNA I HERCEGOVINA</span></div></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App />)
