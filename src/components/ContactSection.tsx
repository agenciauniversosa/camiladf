import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
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
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
      toast({ title: "Erro ao enviar", description: "Tente novamente em instantes.", variant: "destructive" });
      return;
    }

    // Send email notification
    supabase.functions.invoke("send-contact-email", {
      body: {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        subject: result.data.subject,
        message: result.data.message,
      },
    }).catch((err) => console.error("Email notification error:", err));

    setStatus("sent");
    setForm(initialForm);
    toast({ title: "Mensagem enviada!", description: "Retornaremos em breve." });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputCls =
    "w-full bg-muted/50 rounded-lg px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all";

  return (
    <section id="contato" className="section-gap bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <div>
              <p className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-primary-foreground/40 mb-3">Contato</p>
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-10">
                <h2 className="font-display text-4xl md:text-5xl font-medium text-primary-foreground leading-tight tracking-tight">
                  Vamos conversar?
                </h2>
                <p className="body-md text-primary-foreground/60 max-w-sm md:pb-1">
                  Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis.
                </p>
              </div>
              <div className="space-y-2 body-sm text-primary-foreground/40">
                
                
                <p className="mt-3">camila@diasfrazao.com.br</p>
                
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Nome completo" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputCls} maxLength={100} />
                  {errors.name && <p className="text-destructive text-[11px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={inputCls} maxLength={255} />
                  {errors.email && <p className="text-destructive text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input type="tel" placeholder="Telefone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputCls} maxLength={20} />
                </div>
                <div>
                  <input type="text" placeholder="Assunto" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} className={inputCls} maxLength={200} />
                  {errors.subject && <p className="text-destructive text-[11px] mt-1">{errors.subject}</p>}
                </div>
              </div>
              <div>
                <textarea placeholder="Sua mensagem" value={form.message} onChange={(e) => handleChange("message", e.target.value)} className={`${inputCls} resize-none min-h-[130px]`} maxLength={2000} rows={5} />
                {errors.message && <p className="text-destructive text-[11px] mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body text-[13px] font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "sending" && <Loader2 size={15} className="animate-spin" />}
                {status === "sent" && <Check size={15} />}
                {status === "idle" && "Enviar Mensagem"}
                {status === "sending" && "Enviando..."}
                {status === "sent" && "Enviado!"}
                {status === "idle" && <ArrowRight size={14} />}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
