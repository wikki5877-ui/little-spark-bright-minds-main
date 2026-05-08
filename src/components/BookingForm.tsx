import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function BookingForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const text = String(data.get("text") || "");
    const msg = `Здрастуйте! Мене звати ${name}. Телефон: ${phone}. ${text}`;
    const url = `https://t.me/+380964805756?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    toast.success("Дякую! Я зв'яжусь з вами найближчим часом 💛");
    (e.target as HTMLFormElement).reset();
    setSending(false);
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="paper-card bg-white/95 shadow-card p-6 md:p-8 text-left grid gap-4 mt-10"
    >
      <h3 className="font-display text-3xl text-center">Записатись на консультацію</h3>
      <input
        name="name"
        required
        placeholder="Як вас звати?"
        className="w-full rounded-2xl border-2 border-primary/20 bg-white px-5 py-3 font-hand text-lg focus:border-primary outline-none transition"
      />
      <input
        name="phone"
        required
        type="tel"
        placeholder="Телефон для зв'язку"
        className="w-full rounded-2xl border-2 border-primary/20 bg-white px-5 py-3 font-hand text-lg focus:border-primary outline-none transition"
      />
      <textarea
        name="text"
        rows={3}
        placeholder="Розкажіть коротко про дитину (необов'язково)"
        className="w-full rounded-2xl border-2 border-primary/20 bg-white px-5 py-3 font-hand text-lg focus:border-primary outline-none transition resize-none"
      />
      <button
        type="submit"
        disabled={sending}
        className="px-8 py-4 rounded-full bg-gradient-ribbon text-primary-foreground font-bold text-lg shadow-soft hover:scale-[1.02] transition-transform disabled:opacity-60"
      >
        {sending ? "Надсилаю…" : "Залишити заявку 💌"}
      </button>
      <p className="font-hand text-sm text-foreground/50 text-center">
        ваші дані конфіденційні · я зв'яжусь протягом дня
      </p>
    </motion.form>
  );
}