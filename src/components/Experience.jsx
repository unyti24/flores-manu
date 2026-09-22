import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { flowers } from "../data/flowers";
import Particles from "./Particles";
import Ground from "./Ground";
import Sunflower from "./Sunflower";
import FlowerMessage from "./FlowerMessage";

export default function Experience() {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setRevealed(true)
      });

      tl.fromTo(".intro-copy", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" })
        .fromTo(".ground", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1.4, ease: "power2.out" }, "-=.5")
        .fromTo(".flower-unit", { opacity: 0 }, { opacity: 1, duration: .35, stagger: .16 }, "-=.7")
        .fromTo(".stem", { scaleY: 0, transformOrigin: "bottom center" }, {
          scaleY: 1, duration: 1.5, stagger: .18, ease: "power3.out"
        }, "-=.2")
        .fromTo(".leaf", { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: .55, stagger: .08, ease: "back.out(1.7)"
        }, "-=.8")
        .fromTo(".sunflower", { scale: 0, opacity: 0, rotation: -8 }, {
          scale: "var(--scale)", opacity: 1, rotation: "var(--rotation)",
          duration: .9, stagger: .17, ease: "back.out(1.6)"
        }, "-=.45")
        .fromTo(".flower-shine", { opacity: 0 }, { opacity: .8, duration: .7, stagger: .12 }, "-=.35");

      gsap.to(".leaf-left", { rotation: 5, yoyo: true, repeat: -1, duration: 2.6, ease: "sine.inOut", stagger: .3 });
      gsap.to(".leaf-right", { rotation: -5, yoyo: true, repeat: -1, duration: 3.1, ease: "sine.inOut", stagger: .25 });
      gsap.to(".particle", { y: -18, x: 8, yoyo: true, repeat: -1, duration: 3.5, ease: "sine.inOut", stagger: .11 });
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    gsap.to(".flower-unit", {
      y: "random(-2, 2)",
      rotation: "random(-1.2, 1.2)",
      duration: "random(2.8, 4.5)",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: .12
    });
  }, [revealed]);

  const openFlower = (flower) => {
    setSelected(flower);
    gsap.fromTo(".message-card", { scale: .88, opacity: 0, y: 18 }, {
      scale: 1, opacity: 1, y: 0, duration: .5, ease: "back.out(1.6)"
    });
  };

  return (
    <main className="scene" ref={sceneRef}>
      <div className="sky-orb orb-one" />
      <div className="sky-orb orb-two" />
      <Particles />

      <header className="intro-copy">
        <span className="eyebrow">FLORECITAS PARA MANU</span>
        <h1>Para que veas que te tengo presente <span>🌻</span></h1>
        <p>Espero te guste, o si no me dices para no pasar verguenza</p>
      </header>

      <section className="bouquet" aria-label="Ramo de flores">
        {flowers.map((flower, index) => (
          <Sunflower
            key={flower.id}
            flower={flower}
            index={index}
            revealed={revealed}
            selected={selected?.id === flower.id}
            onClick={() => openFlower(flower)}
          />
        ))}
      </section>

      <Ground />

      <div className={`interaction ${revealed ? "show" : ""}`}>
        <span>Toca una flor</span>
        <b>🌻</b>
      </div>

      <footer className="footer-note">Hecho con un poquito de cariño ✦</footer>

      <FlowerMessage flower={selected} onClose={() => setSelected(null)} />
    </main>
  );
}