"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const info = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "+55 11 99100 7079",
    href: "https://wa.me/5511991007079/",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    description: "arielspencer.log@gmail.com",
    href: "mailto:arielspencer.log@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Brasil",
    description: "São Paulo/SP",
    href: "",
  },
]

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: firstName,
      company: company,
      email: email,
      phone: phone,
      service: service,
      message: message,
    }

    emailjs.send('service_2td4316', 'template_h7boeyc', templateParams, 'dkMvJ_Mm6jXkEKkIu')
      .then((result) => {
        setSuccessMessageVisible(true);
        setFirstName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Vamos Transformar Ideias!</h3>
              <p className="text-white/80">Me conte sobre seu projeto no campo mensagem:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  minLength="3"
                  required
                />
                <Input
                  type="text"
                  placeholder="empresa"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  minLength="3"
                />
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  minLength="5"
                  required
                />
                <Input
                  type="text"
                  placeholder="whatsapp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  minLength="10"
                  maxLength="18"
                  required
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setService(value)}
                value={service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione o serviço desejado:</SelectLabel>
                    <SelectItem value="webdev">Web Developer</SelectItem>
                    <SelectItem value="ux">UI/UX Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="mkt">Marketing Digital</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength="3"
                required
              />
              <div
                className="flex flex-row justify-left items-center gap-[30px]"
              >
                <Button
                  size="md"
                  className="max-w-40"
                >
                  Enviar
                </Button>
                <p className={successMessageVisible ? "text-sm" : "hidden"}>Mensagem enviada com sucesso! <br />Em breve estrarei em contato.</p>
              </div>

            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-accent/80">{item.title}</p>
                      <a
                        href="{item.href}"
                        className={`text-xl ${item.href != "" ? 'hover:text-accent cursor-pointer' : 'pointer-events-none cursor-default'}`}
                      >
                        {item.description}
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section >
  )
}

export default Contact;