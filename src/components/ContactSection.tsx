import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/Reveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().max(20, "Telefone muito longo").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200, "Assunto muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(2000, "Mensagem muito longa"),
});

type ContactForm = z.infer<typeof contactSchema>;

const initialForm: ContactForm = { name: "", email: "", phone: "", subject: "", message: "" };

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { toast } = useToast();

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");

    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone || null,
      subject: result.data.subject,
      message: result.data.message,
    });

    if (error) {
      setStatus("idle");
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
      return;
    }

    setStatus("sent");
    setForm(initialForm);
    toast({ title: "Mensagem enviada!", description: "Retornaremos em breve." });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-primary-foreground/20 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors";

  const errorClass = "font-body text-[11px] text-destructive mt-1";

  return (
    <section id="contato" className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">
                Contato
              </p>
              <h2 className="heading-display text-3xl md:text-5xl text-primary-foreground mb-6">
                Fale<br />Conosco
              </h2>
              <p className="font-body text-sm text-primary-foreground/50 leading-relaxed mb-8">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis.
              </p>
              <div className="space-y-3 font-body text-sm text-primary-foreground/40">
                <p>Av. Paulista, 1000 — 15º andar</p>
                <p>São Paulo — SP, 01310-100</p>
                <p className="mt-4">contato@oliveiraadvogados.com.br</p>
                <p>(11) 3000-0000</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Nome completo *"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={inputClasses}
                      maxLength={100}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={inputClasses}
                      maxLength={255}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={inputClasses}
                      maxLength={20}
                    />
                    {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Assunto *"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className={inputClasses}
                      maxLength={200}
                    />
                    {errors.subject && <p className={errorClass}>{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Sua mensagem *"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClasses} resize-none min-h-[120px]`}
                    maxLength={2000}
                    rows={4}
                  />
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-golden-olive transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                  {status === "sent" && <Check size={16} />}
                  {status === "idle" && "Enviar Mensagem"}
                  {status === "sending" && "Enviando..."}
                  {status === "sent" && "Enviado!"}
                  {status === "idle" && <ArrowUpRight size={14} />}
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
