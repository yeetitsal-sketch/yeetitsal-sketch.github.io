/* console crib · slide: s6-data · indicator 7 · typed live in the Console of
   stage-7-5a-data/index.html. Not loaded by any page. */

dishes                            /* (2) [{…}, {…}] — an array: a list, in order */
dishes.length                     /* 2 */
dishes[0]                         /* {name: 'Falafel', description: …, price: 10, …} — counting starts at 0 */
dishes[0].name                    /* 'Falafel' — an object: named values, read with a dot */
dishes[1].price                   /* 12 — a number, so it can be added up */
dishes[0].price + dishes[1].price /* 22 */
priceLabel(dishes[1].price)       /* '$12' — the dollar sign is added only for display */
