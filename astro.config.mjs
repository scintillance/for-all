// // @ts-check
// import { defineConfig } from 'astro/config';

// import mdx from '@astrojs/mdx';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';

// // https://astro.build/config
// export default defineConfig({
//     integrations: [
//         mdx({
//             remarkPlugins: [remarkMath],
//             rehypePlugins: [rehypeKatex],
//         }),
//     ],
// });


import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';

import AutoImport from 'astro-auto-import';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, {
          macros: {
            "\\th": "\\theta"
          }
        }]
      ],
    }),
  },
  
  integrations: [
    AutoImport({
      imports: [
        { 
          './src/components/bits-comps/Horizontal-Bar.astro': [['default', 'Bar']],

          './src/components/text-bits-comps/Tooltip-Challenge.astro': [['default', 'Challenge']],
          './src/components/text-bits-comps/Tooltip-Formally.astro': [['default', 'Formally']],
          './src/components/text-bits-comps/Tooltip-Key.astro': [['default', 'Key']],
          './src/components/text-bits-comps/Tooltip-Note.astro': [['default', 'Note']],

          './src/components/text-block-comps/Dropdown.astro': [['default', 'DRP']],
          './src/components/text-block-comps/Hint.astro': [['default', 'HNT']],
          './src/components/text-block-comps/Problem.astro': [['default', 'PRB']],
          './src/components/text-block-comps/Quote.astro': [['default', 'QUO']],
          './src/components/text-block-comps/Rainbowed.astro': [['default', 'RBW']],
          './src/components/text-block-comps/Solution.astro': [['default', 'SOL']],
          
          './src/components/text-inline-comps/Pullout.astro': [['default', 'P']],
          './src/components/text-inline-comps/Subdued.astro': [['default', 'S']],
          './src/components/text-inline-comps/Tooltip.astro': [['default', 'T']],
          './src/components/text-inline-comps/Tooltip-new.astro': [['default', 'Tn']],
          './src/components/text-inline-comps/Vocab.astro': [['default', 'V']],
          
        }
      ],
    }),
    
    mdx(),
  ],
});
