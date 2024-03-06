"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

type Props = {};

const ScrollProgress = (props: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col justify-center p-4 gap-8">
      <motion.div
        className="fixed top-0 bg-red-700 left-0 h-2 right-0 origin-top-left"
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="text-center text-2xl">
        <code>useScroll</code> demo
      </h1>
      <article className="h-80 text-lg text-white leading-relaxed w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae
        aliquid enim eos cumque totam. Laudantium corrupti sint, unde temporibus
        possimus reiciendis eos iure nobis minima deserunt culpa nemo? Expedita
        aliquid blanditiis saepe, explicabo temporibus modi tenetur rem. Facilis
        illum maiores fugit ab, aspernatur amet et. Earum aliquam ullam quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique
        tenetur est voluptates, mollitia iste ipsum harum, magni, aperiam
        ratione corrupti quidem reiciendis minima tempore fuga qui aut
        reprehenderit? Molestias aut esse nesciunt doloremque magni, fugit a et
        voluptatem animi iste ea dolorem eveniet eligendi porro provident
        pariatur soluta at! Dolores impedit eligendi eveniet quos quis itaque
        voluptatibus architecto exercitationem porro consequuntur fugit,
        perferendis vitae asperiores, ea explicabo ipsum enim voluptate est illo
        sit fugiat? Molestias dolor consequatur ab animi, commodi quibusdam
        cumque quos. Molestias amet molestiae repellat, blanditiis soluta quod.
        Rerum sit similique nesciunt deleniti neque natus error suscipit. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quo repellendus
        veritatis animi cum iure eos, error at veniam corrupti! Corporis eaque
        alias assumenda, quae provident maxime vitae quam nesciunt mollitia in
        odit. Exercitationem magnam molestiae id, culpa pariatur deleniti. Autem
        sit quo blanditiis, quod et corporis, quasi, labore ut quas voluptates
        ducimus nihil quisquam. Aliquid excepturi quisquam nobis, assumenda,
        architecto fuga tenetur ipsum quam qui sit voluptate asperiores
        reiciendis omnis quia. Dolorem eum repellat dolore totam, deserunt
        aspernatur similique fugit quaerat quisquam facere ipsa eius ad eveniet
        alias laboriosam ea reprehenderit tempora at praesentium excepturi! Fuga
        atque saepe obcaecati molestias doloribus nobis, vel beatae. Eligendi
        quo illum ea sed sit, illo perspiciatis explicabo, nemo culpa autem
        natus assumenda ex! Fuga laudantium provident voluptate, non iusto minus
        ex dignissimos quia quo soluta perferendis culpa eos natus ratione harum
        itaque corporis impedit commodi! Temporibus ipsam dolores voluptas iste
        illum, at aspernatur sapiente perspiciatis. Alias, perferendis.
        Repellendus quaerat ipsum eligendi maiores nemo non libero ex,
        exercitationem porro perferendis eum aperiam quas repudiandae numquam!
        Facere minus reiciendis veniam cupiditate beatae sed aut enim nisi modi
        aspernatur explicabo distinctio impedit, quisquam delectus in nihil
        fugit est perferendis at. Rerum obcaecati, officia voluptatum nostrum
        harum placeat est mollitia minus animi vel! Laborum reiciendis
        distinctio maiores molestias cupiditate accusantium assumenda
        exercitationem explicabo quo minus at eaque, fugit impedit facilis odit
        in harum, doloremque possimus magnam, id pariatur commodi. Ab iure
        incidunt dolore, ad facilis, ratione illum commodi velit similique
        deserunt ut qui rerum! Blanditiis voluptatibus deserunt autem expedita
        itaque? Voluptates atque consequuntur saepe iusto sequi pariatur!
        Inventore nesciunt libero est quod a repellendus incidunt? Enim
        recusandae quas esse nihil. Ratione sapiente consectetur fugit veritatis
        nesciunt. Dignissimos, dolore repellendus! Omnis, nulla ratione a neque
        architecto veniam. Aliquid reiciendis sit et officiis, atque sint minus,
        ex minima ipsum totam qui nihil laboriosam eveniet explicabo doloremque
        rem exercitationem. Rem deserunt repudiandae reprehenderit consectetur
        veritatis reiciendis! Maiores dolores velit tempore earum minus
        voluptatem commodi placeat illo, sint omnis necessitatibus animi rem
        quibusdam cumque ducimus! Voluptatem ea quo voluptatibus blanditiis
        quos. Iusto optio hic debitis, vero velit quo aliquam excepturi officiis
        harum nemo voluptas. Quidem mollitia repellendus illo obcaecati
        consequuntur eaque eum eos beatae natus, dicta sed, dolor temporibus
        odit impedit aut expedita maxime corrupti inventore illum, aperiam
        ducimus repudiandae quis modi nisi? Ducimus eligendi praesentium,
        molestias, laudantium dicta corporis placeat, omnis rem sint fuga minus
        repellendus tempore iste sunt voluptatibus! Optio id sint tempora
        tempore suscipit. Nostrum eaque necessitatibus sed! Debitis nulla, sit
        soluta suscipit consectetur id veniam itaque minus iure cum quibusdam
        eveniet, possimus nesciunt impedit perferendis facilis optio eaque enim,
        quos autem officiis incidunt. Eaque facilis quo, ullam id distinctio,
        quos tempora perferendis mollitia non magni minus veritatis a neque,
        molestias aliquam consectetur molestiae? Molestias adipisci unde est
        illo ipsum doloribus vel soluta porro aspernatur tempore, eligendi odit.
        Ducimus esse, quidem officia voluptas ratione numquam cumque quisquam,
        odio suscipit error odit culpa accusamus unde pariatur, earum adipisci?
        Ut cupiditate quaerat voluptatibus animi quam quia nemo, quod
        consequatur repellat corrupti?
      </article>
    </div>
  );
};

export default ScrollProgress;
