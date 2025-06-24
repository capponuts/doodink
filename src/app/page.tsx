'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Ghost
} from "lucide-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          className={styles.logo}
          src="/logo-doodink.png"
          alt="Logo DOOD'INK"
          width={320}
          height={320}
          priority
        />
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
          DOOD'INK - Salon de Tatouage Privé à Falleron
        </h1>
        <p style={{ marginTop: 24 }}>
          Bienvenue sur la page officielle de DOOD'INK, votre salon de tatouage privé à Falleron.<br /><br />
          Pour toute demande, contactez-moi en précisant vos coordonnées et en détaillant votre projet (taille, zone souhaitée, et quelques références appréciées).<br /><br />
          Pour un flash, joignez un screen du dessin désiré avec vos coordonnées.<br /><br />
          <span style={{ color: "var(--neon-blue)", fontWeight: 700 }}>Pas de piercing, ni de cover.</span><br /><br />
          <span style={{ color: "var(--neon-yellow)", fontWeight: 700 }}>Au plaisir de réaliser vos projets !</span>
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
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          className={styles["social-link"]}
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          className={styles["social-link"]}
          href="https://snapchat.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Snapchat"
        >
          <Ghost />
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
    </div>
  );
}
