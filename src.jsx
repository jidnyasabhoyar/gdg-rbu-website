import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MapPin, Mail, Instagram, Linkedin, ChevronDown, Search, ArrowUpRight, CheckCircle2} from 'lucide-react';
import './style.css';

const faqs = [
 ['What is GDG RBU?','GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.'],
 ['How to join GDG?','Join our campus community by following our social channels and participating in our upcoming events and workshops.'],
 ['What does a GDG Lead do?','A GDG Lead helps build the community, organises learning opportunities, and connects students with developer technologies.'],
 ['How is GDG related to Google?','Google Developer Groups are community-led groups for people interested in Google technologies and developer tools.'],
 ['How to reach us?','You can reach us through gdsc@rknec.edu or connect with us through our social media links.']
];
//function Logo(){return <div className="gdg-logo" aria-label="Google Developer Groups logo"><i className="piece red"/><i className="piece blue"/><i className="piece yellow"/><i className="piece green"/></div>}
 function Logo() {
  return (
    <img
      src="/gdg-logo.png"
      alt="Google Developer Groups"
      className="gdg-logo-img"
    />
  );
}
//function App(){const [open,setOpen]=useState(0);
 function App(){
const [open,setOpen]=useState(0);
const [dark,setDark]=useState(false);
 useEffect(()=>{const nodes=[...document.querySelectorAll('.reveal')]; if(!('IntersectionObserver' in window)){nodes.forEach(n=>n.classList.add('is-visible'));return;} const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:0.12,rootMargin:'0px 0px -35px 0px'});nodes.forEach(n=>observer.observe(n));return ()=>observer.disconnect();},[]);return <div className={dark ? "page dark" : "page"}>
<header className="nav"><a href="#top" className="brand"><Logo/></a><nav>{[['Home','#top','blue'],['Team','#team','red'],['Events','#events','yellow'],['Gallery','#team','green'],['Portfolio','#team','purple'],['More','#faqs','blue']].map(([t,h,c])=><a className={'nav-btn '+c} href={h} key={t}>{t}</a>)}</nav><button
  className="theme-toggle"
  onClick={() => setDark(!dark)}
  aria-label="Toggle light and dark mode"
>
  {dark ? "☀ Light" : "☾ Dark"}
</button><div className="profile"><a href="#join-us" className="nav-join-btn">
  Join Us <span></span>
</a><ChevronDown size={12}/></div></header>
<main id="top">
<section className="hero wrap reveal"><div className="hero-copy"><h1>GOOGLE DEVELOPER<br/>GROUPS, RBU</h1><p>Empowering students with<br className="desktop"/> cutting-edge tech skills,<br className="desktop"/> community, and resources<br className="desktop"/> for a future in<br className="desktop"/> technology</p><div className="hero-actions"><a className="tiny-btn" href="#events">LEARN MORE</a><a className="tiny-btn" href="#team">PROFILE</a></div><span className="mini-tag">GDG · RBU</span></div><div className="search-art"><div className="search-pill"><Search size={12}/><span>gdgr</span></div></div></section>
<section id="events" className="events wrap reveal"><h2>Upcoming Event</h2><div className="event-grid"><article className="event-feature"><div className="event-label">GDG ORIENTATION</div><span className="status">UPCOMING</span><div className="event-description"><h3>GDG ORIENTATION</h3><p>Google Developer Groups (GDG) – Student Chapter is a community of students passionate about technology, innovation, and learning. We bring students together to learn, build, and grow through technical workshops, hands-on sessions, hackathons, projects, and networking.</p></div><a href="#footer" className="round-arrow" aria-label="Learn about event"><ArrowUpRight size={15}/></a></article><article className="event-new"><h3>New<br/>Event</h3><div className="event-date"><b>DATE &amp; TIME</b><strong>Oct 7, 2026</strong><strong>3:00 PM</strong></div><a className="register" href="mailto:gdsc@rknec.edu?subject=GDG%20RBU%20Event%20Registration">Register Now</a></article></div></section>
<section id="team" className="team wrap reveal"><div className="team-copy"><h2>Meet the<br/>Google<br/>Developer<br/>Group Team</h2><p>Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.</p><div className="feature"><CheckCircle2 size={14}/><div><b>Passionate Community Leaders</b><p>Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.</p></div></div><div className="feature"><CheckCircle2 size={14}/><div><b>Empowering Developers</b><p>We host meetups and codelabs to help developers stay current with modern tools and best practices.</p></div></div></div><img src="/team-photo.png" alt="GDG RBU student team"/></section>
<section id="faqs" className="faqs reveal"><h2>FAQs</h2><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown size={17} className={open===i?'rotated':''}/></button>{open===i&&<div className="answer">{a}</div>}</div>)}</div></section>
</main>
<footer id="footer" className="footer-shell reveal"><div className="footer-card"><div className="footer-head"><img
  src="/gdg-logo.png"
  alt="Google Developer Groups logo"
  style={{
    width: "64px",
    height: "40px",
    objectFit: "contain"
  }}
/><h2>Google Developer Groups</h2><p>On Campus · Ramdeobaba University</p></div><div className="dashes">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div><div className="footer-info"><div className="footer-left"><div className="info-box address"><MapPin size={20}/><b>Ramdeobaba University<br/>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013</b></div><div className="info-box email"><Mail size={20}/><b>gdsc@rknec.edu</b></div></div><div className="social-box"><b>Follow Us:</b><div><a className="social insta" href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a className="social linked" href="https://linkedin.com" aria-label="LinkedIn"><Linkedin/></a><a className="social x" href="https://x.com" aria-label="X">X</a></div></div></div></div><div className="shapes"><span className="s1"/><span className="s2"/><span className="s3"/><span className="s4"/><span className="s5"/><span className="s6"/><span className="s7"/><span className="s8"/><span className="s9"/><span className="s10"/></div></footer>
</div>}

createRoot(document.getElementById('root')).render(<App/>);
