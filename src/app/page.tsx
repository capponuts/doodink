'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Flower2,
  PenLine,
  Sparkles,
  Star,
  Feather,
  Brush
} from "lucide-react";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const confettiLeft = useRef(null);
  const confettiRight = useRef(null);

  useEffect(() => {
    // Confettis néon jaune et bleu émeraude sur la gauche
    if (confettiLeft.current) {
      confetti.create(confettiLeft.current, { resize: true, useWorker: true })({
        particleCount: 60,
        angle: 120,
        spread: 80,
        origin: { x: 0, y: 0.5 },
        colors: ["#ffe600", "#00ffe7"],
        scalar: 1.2,
        ticks: 200,
        shapes: ["circle"],
        zIndex: 100,
      });
    }
    // Confettis néon jaune et bleu émeraude sur la droite
    if (confettiRight.current) {
      confetti.create(confettiRight.current, { resize: true, useWorker: true })({
        particleCount: 60,
        angle: 60,
        spread: 80,
        origin: { x: 1, y: 0.5 },
        colors: ["#ffe600", "#00ffe7"],
        scalar: 1.2,
        ticks: 200,
        shapes: ["circle"],
        zIndex: 100,
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      {/* Canvas confettis gauche */}
      <canvas ref={confettiLeft} style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "20vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
        mixBlendMode: "screen"
      }} />
      {/* Canvas confettis droite */}
      <canvas ref={confettiRight} style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "20vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
        mixBlendMode: "screen"
      }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles["logo-neon"]}>
          <Image
            className={styles.logo}
            src="/logo-doodink.png"
            alt="Logo DOOD&#39;INK"
            width={320}
            height={320}
            priority
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <h1 style={{
          color: "var(--neon-yellow)",
          textShadow: "var(--neon-shadow-yellow)",
          fontWeight: 900,
          letterSpacing: 2
        }}>
          DOOD&#39;INK<br/>
          <span style={{fontSize:'1.1rem', fontWeight:600}}>Salon de Tatouage Privé à Falleron</span>
        </h1>
        <div style={{ margin: "18px 0 28px 0", fontWeight: 600, color: "var(--neon-blue)", fontSize: "1.1rem", textShadow: "var(--neon-shadow-blue)" }}>
          20 rue nationale<br />
          85670 Falleron
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{
            borderRadius: 18,
            boxShadow: '0 0 16px #ffe600, 0 0 32px #00ffe7',
            overflow: 'hidden',
            border: '2px solid var(--neon-blue)',
            maxWidth: 420,
            width: '90vw',
            height: 260
          }}>
            <iframe
              title="Carte DOOD'INK"
              src="https://www.google.com/maps?q=20+rue+nationale+85670+Falleron&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Grille de styles */}
        <div className={styles["styles-grid"]}>
          <div className={styles["style-card"]}><Flower2 className={styles["style-icon"]} color="#ffe600" /><span>Floral</span></div>
          <div className={styles["style-card"]}><Feather className={styles["style-icon"]} color="#00ffe7" /><span>Ornemental</span></div>
          <div className={styles["style-card"]}><Star className={styles["style-icon"]} color="#ffe600" /><span>Flash</span></div>
          <div className={styles["style-card"]}><Brush className={styles["style-icon"]} color="#00ffe7" /><span>Projet perso</span></div>
          <div className={styles["style-card"]}><Sparkles className={styles["style-icon"]} color="#ffe600" /><span>Cartoon</span></div>
          <div className={styles["style-card"]}><PenLine className={styles["style-icon"]} color="#00ffe7" /><span>Lettrage</span></div>
        </div>
        <p style={{ marginTop: 0 }}>
          <span style={{fontSize:'1.2em'}}>👋</span> Bienvenue sur la page officielle de DOOD&#39;INK, votre salon de tatouage privé à Falleron.<br /><br />
          Pour toute demande, contactez-moi en précisant vos coordonnées et en détaillant votre projet (taille, zone souhaitée, et quelques références appréciées).<br /><br />
          Pour un flash, joignez un screen du dessin désiré avec vos coordonnées.<br /><br />
          <span style={{ color: "var(--neon-blue)", fontWeight: 700 }}>Pas de piercing, ni de cover.</span><br /><br />
          <span style={{ color: "var(--neon-yellow)", fontWeight: 700 }}>Au plaisir de réaliser vos projets !</span> <span style={{fontSize:'1.2em'}}>🌟</span>
        </p>
      </motion.div>
      <motion.div
        className={styles.socials}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <a
          className={styles["social-link"]}
          href="https://www.facebook.com/p/Doodink-100093254133040/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          className={styles["social-link"]}
          href="https://www.instagram.com/doodink44/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          className={styles["social-link"]}
          href="mailto:contact@doodink.fr"
          aria-label="Mail"
        >
          <Mail />
        </a>
        <a
          className={styles["social-link"]}
          href="https://wa.me/33600000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <MessageCircle />
        </a>
      </motion.div>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} DOOD&#39;INK. Tous droits réservés.</span>
        <span>|</span>
        <span>Site créé par <a href="https://kapinfo.fr" target="_blank" rel="noopener noreferrer">Kapinfo</a></span>
      </footer>
    </div>
  );
}
