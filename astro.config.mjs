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
  site: 'https://scintillance.github.io',
  
  base: '/for-all',
  
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, {
          macros: {
            "\\th": "\\theta",
            "\\V": "\\bm{\\color{de822b}#1}",
            "\\Vx": "{\\color{de822b}#1}",
            "\\B": "\\bm{#1}",
            "\\I": "\\emph{#1}",
            "\\Op": "{\\color{73deaa}#1}",
            "\\Hy": "{\\color{e659a6}#1}",
            "\\Ad": "{\\color{9480f4}#1}",
            "\\Opp": "\\text{\\Op{opposite}}",
            "\\Hyp": "\\text{\\Hy{hypotenuse}}",
            "\\Adj": "\\text{\\Ad{adjacent}}",
            "\\Deg": "^\\circ",
            "\\Y": "{\\color{e0bb6c}#1}",
          }
        }]
      ],
    }),
  },
  
  integrations: [AutoImport({
    imports: [
      
      { 
        './src/components/bits-comps/Horizontal-Bar.astro': [['default', 'Bar']],
        './src/components/bits-comps/Spacer.astro': [['default', 'Spa']],

        './src/components/pieces-comps/Diagram-Grid.astro': [['default', 'Diagram']],
        './src/components/pieces-comps/Diagram-Trans.astro': [['default', 'Diagram_T']],
        './src/components/pieces-comps/Right-Triangle-Trinket.astro': [['default', 'RightTriangleTrinket']],
        './src/components/pieces-comps/Tabber.astro': [['default', 'Tabber']],
        './src/components/pieces-comps/Unit-Circle-Trinket.astro': [['default', 'UnitCircleTrinket']],
        './src/components/pieces-comps/WIP.astro': [['default', 'WIP']],

        './src/components/text-bits-comps/Tooltip-Challenge.astro': [['default', 'Challenge']],
        './src/components/text-bits-comps/Tooltip-Formally.astro': [['default', 'Formally']],
        './src/components/text-bits-comps/Tooltip-Key.astro': [['default', 'Key']],
        './src/components/text-bits-comps/Tooltip-Note.astro': [['default', 'Note']],

        './src/components/text-block-comps/Askew.astro': [['default', 'ASK']],
        './src/components/text-block-comps/Askew2.astro': [['default', 'ASK2']],
        './src/components/text-block-comps/ByTheWay-R.astro': [['default', 'BTW_R']],
        './src/components/text-block-comps/Dropdown.astro': [['default', 'DRP']],
        './src/components/text-block-comps/Dropdown2.astro': [['default', 'DRP2']],
        './src/components/text-block-comps/Rectangled.astro': [['default', 'RCT']],
        './src/components/text-block-comps/Hint.astro': [['default', 'HNT']],
        './src/components/text-block-comps/Point-Arrow.astro': [['default', 'PNT_A']],
        './src/components/text-block-comps/Point.astro': [['default', 'PNT']],
        './src/components/text-block-comps/Problem.astro': [['default', 'PRB']],
        './src/components/text-block-comps/Quote.astro': [['default', 'QUO']],
        './src/components/text-block-comps/Rainbowed.astro': [['default', 'RBW']],
        './src/components/text-block-comps/Solution.astro': [['default', 'SOL']],

        './src/components/text-inline-comps/Cartouche.astro': [['default', "C"]],
        './src/components/text-inline-comps/Highlight.astro': [['default', "H"]],
        './src/components/text-inline-comps/Label-Purple.astro': [['default', "Ad"]],
        './src/components/text-inline-comps/Label-Green.astro': [['default', "Op"]],
        './src/components/text-inline-comps/Label-Red.astro': [['default', "Hy"]],
        './src/components/text-inline-comps/Mini-Heading.astro': [['default', 'M']],
        './src/components/text-inline-comps/Mini-Heading2.astro': [['default', 'M2']],
        './src/components/text-inline-comps/Pullout.astro': [['default', 'P']],
        './src/components/text-inline-comps/Start-Italic.astro': [['default', 'Si']],
        './src/components/text-inline-comps/Start.astro': [['default', 'St']],
        './src/components/text-inline-comps/Subdued.astro': [['default', 'S']],
        './src/components/text-inline-comps/Tooltip.astro': [['default', 'T']],
        './src/components/text-inline-comps/Tooltip-new.astro': [['default', 'Tn']],
        './src/components/text-inline-comps/Vocab-Plain.astro': [['default', 'Vx']],
        './src/components/text-inline-comps/Vocab.astro': [['default', 'V']],

      }
    ],
  }), mdx()],
});