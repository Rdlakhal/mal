 module.exports.config = {
  name: "foto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "gilgamesh",
  description: "",
  commandCategory: "صور",
  usages: "foto",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/d1ZQsczb/7a511197ed688246ede1ceceb9fe0f3c.jpg",

"https://i.postimg.cc/jS8JCKF2/82caf91be9fac2851e08a87f0c3884b9.jpg",

"https://i.postimg.cc/qq9khDdN/8379f207aaa0d118482626cb5e5a1273.gif",

"https://i.postimg.cc/Y0Xrr2dz/853fecc90c613f6ab0b12d8267090ef0.jpg",

"https://i.postimg.cc/MTC41CvJ/8aa9519b3fd8811e50bfb4df3015831b.jpg",

"https://i.postimg.cc/qMbsY8xz/8c754eec1c6a926824d5ebdfb61d4e2d.jpg",

"https://i.postimg.cc/SK5csqvq/8d16d48fd0c6ddd7eca3d9c74ee3042b.jpg",

"https://i.postimg.cc/YCd15QNv/8e1c8738a4fdae41f0b0882edf4154ac.jpg",

"https://i.postimg.cc/tTqfk3z2/90b42e88f69a7f613389db4fc2b8c7ed.jpg",

"https://i.postimg.cc/WbnrZ0H5/92b962c9baaf274eba3276ccae2075e1.jpg",

"https://i.postimg.cc/YSSx0d2N/94fead8795b44fafccad0ed756a087fe.jpg",

"https://i.postimg.cc/TwVh668t/95cdcc00300c3e7144622950b98ee23a.gif",

"https://i.postimg.cc/ZKttNddv/9766ffc42e30f5ee32a7c58e9e8a7293.jpg",

"https://i.postimg.cc/FR3kHSSg/9903752ffb61a572858ce153a240b939.jpg",

"https://i.postimg.cc/CKLV1pfv/a2ce1948b6acb332a2a6d04c635b1970.jpg",

"https://i.postimg.cc/7Z45Khpf/a2f8b6a941a88092833639be1d5a83f5.jpg",

"https://i.postimg.cc/vmz241d9/ad351ec5eacd88cd9c5c9de55a1ee5ea.jpg",

"https://i.postimg.cc/1XTz05D5/af9950d39d0db2ff3016bed7d3b4c27b.jpg",

"https://i.postimg.cc/jdw1Mdz0/b15c4dd922d1b3f8a3ef0e16222c07b0.jpg",

"https://i.postimg.cc/L8GsgX2y/bf690857ed4d86ebd952684b2d214176.jpg",

"https://i.postimg.cc/SRGBqZx0/c0b2e71bf43320871ae0c658266714c8.jpg",

"https://i.postimg.cc/hG9MHXG6/c145c096d48a61f36e3d8e82dfa97008.jpg",

"https://i.postimg.cc/CMHTjKHv/c311fea92b7e5fa64a26ddd57557333e.jpg",

"https://i.postimg.cc/PrPhbj60/c36ad061a15d75a367af3c8c7e30ea3e.jpg",

"https://i.postimg.cc/9QNjrNtC/c4067d01fde0eef3deb33bca8f0dac92.gif",

"https://i.postimg.cc/HkkM9VGd/c4e8a484bef244968bffb3cbf8ca292d.gif",

"https://i.postimg.cc/4Nd48t3L/c7087a37615d5aa02b3c594575831685.jpg",

"https://i.postimg.cc/YSVyw5NL/c94b057ded4e7fc49cc582efe819e1b0.jpg",

"https://i.postimg.cc/g0B12XpJ/d316307d5a9ae45186ac77185a707d14.jpg",

"https://i.postimg.cc/Lsn2DM6J/d72ad1d830c78c2aa3ce2dc995ea534b.jpg",

"https://i.postimg.cc/kgkqTpVw/dd3382ccbd92d7789aeba77043cd6fd8.gif",

"https://i.postimg.cc/Fs64KBxm/e29817912748a2eb2cbd25a6f39a57b6.jpg",

"https://i.postimg.cc/B6076xyJ/e4ce4531f69b9d2f602ffbc27221c2cd.jpg",

"https://i.postimg.cc/Nfm4yy6M/f7d23b7f96b0a1ea592d0c2de60f33b2.gif",

"https://i.postimg.cc/tJHs8gYS/fa9cb3a309f81e3a147207ed56ad68dc.jpg",

"https://i.postimg.cc/YCFHVxB3/fd4c15f202c5dff91ad985c23fe60ead.gif",

"https://i.postimg.cc/LX34W3f7/ff19c15898adb6477787c460310c1dc0.jpg",

"https://i.postimg.cc/prvCWRmr/Graphics-Crate-Sky-Background-Texture-09-prev-sm.png",

"https://i.postimg.cc/d0znf8v8/Graphics-Crate-Sky-Extension-4-prev-sm.png",

"https://i.postimg.cc/XvQxVTwk/images-1.jpg",

"https://i.postimg.cc/7Y2Bgtkq/images-2.jpg",

"https://i.postimg.cc/4yrBDVzC/images-3.jpg",

"https://i.postimg.cc/3wRmZWv2/tumblr-ph026cr-IFg1xqepp2o1-640-gif.webp",

"https://i.postimg.cc/3JWCvmNj/00269c8843aecdc67e200926e0001317.jpg",

"https://i.postimg.cc/PrcbzJvg/01115234f32f687c7211809133ccfc42.jpg",

"https://i.postimg.cc/g2ZVMpvn/02b59bce2b502e881ff65d8113d61f00.jpg",

"https://i.postimg.cc/CKCjg4r0/03302ac433ec15bd0059ca2f073cbb7b.jpg",

"https://i.postimg.cc/Jn1j4BSk/0397a104a77535ac8c62bc8df534db7d.jpg",

"https://i.postimg.cc/TwCgy3XH/041756970cfccd4976379e9d3595011e.jpg",

"https://i.postimg.cc/prr8KMWV/0504e1235a329d141059ac222ee1c10a.jpg",

"https://i.postimg.cc/zvQhj2vC/066483f0a484f88844d9a29fedea0bdf.jpg",

"https://i.postimg.cc/CMrbS57R/0753541113d9954d33f9e194eb028477.jpg",

"https://i.postimg.cc/SNXCs41D/08793c6e569b11dbf5f91aa166f85a18.jpg",

"https://i.postimg.cc/4NrtH0rZ/092ba30e5921ae8161ae4a6fadf0c144.jpg",

"https://i.postimg.cc/XvWCQCjz/0978a2fdea9694fa4d3a56bb1d97c2f4.jpg",

"https://i.postimg.cc/VNFbTk5L/09f9150ffe39ac654b57d53bf23fddba.jpg",

"https://i.postimg.cc/0Q2Jq1JG/0a019c27970e2826c1a3040049f3cd3f.jpg",

"https://i.postimg.cc/vT4gc7hc/0a0d22105b297013a5d93a8649ae9968.jpg",

"https://i.postimg.cc/wMntJt4F/0a6c673f270928604b233598f8586c6c.jpg",

"https://i.postimg.cc/pVS537V8/0b713097eedcc689b03f321822e3387d.jpg",

"https://i.postimg.cc/zGZbGggG/0cdace5cb8e9990182f424179d8677f7.jpg",

"https://i.postimg.cc/g2VwX2Vq/0d66057b18ef2bd8db0c3a16a94196d4.jpg",

"https://i.postimg.cc/xd9XKVgr/0f2027dbc8308067c2c1c7e01431609a.jpg",

"https://i.postimg.cc/RFDq56m9/12276e31eac4ab634290f9814075a4f7.jpg",

"https://i.postimg.cc/wMRM6qxN/12433148eb0894d75d370285cd6a04fb.jpg",

"https://i.postimg.cc/WpdwD0hG/1497d251b25f85241a6f20df1be85785.jpg",

"https://i.postimg.cc/GhYPKrP9/1530504bbcf05f79b949e29292102a3e.jpg",

"https://i.postimg.cc/7Zk3QcX9/15ecc4588a6b695770c3b589ebd881c6.jpg",

"https://i.postimg.cc/T3JV8946/17162d7cc33190363634f8c9d4509977.jpg",

"https://i.postimg.cc/Pq61JqHV/18f9f2718643f75c3a76acc896267eff.jpg",

"https://i.postimg.cc/TwpgDXYd/1ff6a9bf6c6aaea81a23c31284eebd11.jpg",

"https://i.postimg.cc/4dqtvFmz/205f143e84091929fc2c2f0576b7cb14.jpg",

"https://i.postimg.cc/xTrMchrQ/207c07b93a32c0ace0cc4b6c6c760080.jpg",

"https://i.postimg.cc/SNW88dqM/218e8d51ced89f0294bcbae71a213395.jpg",

"https://i.postimg.cc/JzMXQX4d/23debfc03bd322d870fcbf5b580487d5.jpg",

"https://i.postimg.cc/K8fMpY1c/23f46cfd70e580517225573c16161fff.jpg",

"https://i.postimg.cc/YSSm5wF6/24e11e9046fc7a9f0044fe6b0fffa009.jpg",

"https://i.postimg.cc/1tnVzcJ4/2562ef33e96c18f1752b011ea1a471b6.jpg",

"https://i.postimg.cc/SsB2Y2vd/268602a44bd8a51e522797c9b32af539.jpg",

"https://i.postimg.cc/NFRy6Ghc/274ea45b1667ca40ef0b83e41382ba26.jpg",

"https://i.postimg.cc/RCtn5dWD/28b7725d03d2d5fb3fe88f4fdd683fd9.jpg",

"https://i.postimg.cc/Hs4cjL40/2ad382daa1999439c5e3584240284497.jpg",

"https://i.postimg.cc/Gp9HMx0z/2b58cfef4d481967d1047b14d8c3c854.jpg",

"https://i.postimg.cc/qqcRtmnB/2b601ffe89090bfc557896d4855c7913.jpg",

"https://i.postimg.cc/ncZM8JbX/2be29eb4e9a5249ab09e165ed5b95657.jpg",

"https://i.postimg.cc/4xxddQ3Z/2d36d038008d9a37cee8e2dd19af0132.jpg",

"https://i.postimg.cc/43rNWCQN/2d3ba03d3e29ee62ef8294345e5e6928.jpg",

"https://i.postimg.cc/ZnmYhrQG/2d5ebfe8d45c98842a38830f9e81ee76.jpg",

"https://i.postimg.cc/HW0s9hcd/2e994bd88e7b4f4a694dddffd9e47768.jpg",

"https://i.postimg.cc/qMjJ96xF/30b6034baa68ebb5faa814104b38cd4a.jpg",

"https://i.postimg.cc/P57tqGcz/31d073844e1bc57ee6af47ce681ae0ca.jpg",

"https://i.postimg.cc/XvynGH6M/32d04104b8be06694881650169c36d16.jpg",

"https://i.postimg.cc/XJf3xrvQ/333e213855041448eee3c22de70e4c9b.jpg",

"https://i.postimg.cc/BvRRr4zk/33bf0ef19edd60d8868c935bdc8e797c.jpg",

"https://i.postimg.cc/brLPc4kn/33fae1972aeea65fef5f62122af65a31.jpg",

"https://i.postimg.cc/VsFmC0pN/344f2dbc6824f52b46253960bf32821d.jpg",

"https://i.postimg.cc/RVsmP5M5/349f83b4d7a4c92a34f33cc8f97c9a2d.jpg",

"https://i.postimg.cc/qvWTTsh1/35ff4ec89355b8b41b8a2084880cbc1d.jpg",

"https://i.postimg.cc/j5bYWRhN/36ac34d2e77e93670cb47cf96f0069bb.jpg",

"https://i.postimg.cc/pTJbz30S/39251abd77045697eddb0fadcde5477e.jpg",

"https://i.postimg.cc/1XRxHM23/3aaceb03eee44ec4eb3b8c7d94c40ea9.jpg",

"https://i.postimg.cc/dQnc1PZk/3b4c8d5a47a13c4dac05773c18d121a1.jpg",

"https://i.postimg.cc/8P5QfKLy/3c242eb786d1eae1ac53ed1713794e30.jpg",

"https://i.postimg.cc/Cx3WtwXt/3e22508df2aa5b313ac62c844a12b53f.jpg",

"https://i.postimg.cc/fLZ1zBwf/3e7c640fa1c5327d17310c7e27cf3028.jpg",

"https://i.postimg.cc/vTZj9Tx1/4184efa306e948f22d0830231abc40ce.jpg",

"https://i.postimg.cc/MH3LYw19/4249e6b1758ff71e0afdb83079904d85.jpg",

"https://i.postimg.cc/283MSqfM/4318f78febb5178fe1cb13b51c5a260b.jpg",

"https://i.postimg.cc/TYSSLRdw/438cc85a480c66135108fb1773fcc8ef.jpg",

"https://i.postimg.cc/7LrW9mTr/43e84b302324bc727099e6683620f485.jpg",

"https://i.postimg.cc/yxxQxG2c/44720f7f36a855cd4cb32cb7b2706526.jpg",

"https://i.postimg.cc/gcttQY6D/4506eb9fad709deea396e722b98ffc97.jpg",

"https://i.postimg.cc/13wW8w7C/4580707b273efc259467d9f8f7e287b6.jpg",

"https://i.postimg.cc/8CGZMcq1/4710b348f6335ed9d583cc476f605a5d.jpg",

"https://i.postimg.cc/Y9q8DVrZ/47e973b6a53188c780979e012452c7d8.jpg",

"https://i.postimg.cc/Vv2R6kqP/49a9288b0cc6bad86c6042ee439d96c2.jpg",

"https://i.postimg.cc/YqmRPQ7r/49bcc0804e225bf8607ca3649c7a1c41.jpg",

"https://i.postimg.cc/d0J9DXy3/4b01c7eeb4d6dba6eb8085bd8d198aac.jpg",

"https://i.postimg.cc/ZRRFxdjh/4b64be0618e2b593eddf43c8ea303fba.jpg",

"https://i.postimg.cc/qR5cbvZ6/4d6c35760cc4fb4d7f0855e1d3899f65.jpg",

"https://i.postimg.cc/yWqmKrKV/4db234c2a3c7e1a197450d755f9d3adc.jpg",

"https://i.postimg.cc/h4N6hDPG/4e86e6f2c3f7fbc33d7061eea522a2c4.jpg",

"https://i.postimg.cc/8zSYBZvQ/4ef57e614a14fd19c18f848af4652e67.jpg",

"https://i.postimg.cc/434FjnwW/4f2de3338f1f2ed55a87c4acef18c406.jpg",

"https://i.postimg.cc/QtHYxP25/4f5b508a67fa7ee6ce9c1f93b4166365.jpg",

"https://i.postimg.cc/yxy539NC/4f5b79f806ee12fee2ec657b9d085d60.jpg",

"https://i.postimg.cc/fTM1nHHz/4fe113f2b326c5be8426a4867b32a3d1.jpg",

"https://i.postimg.cc/cH29KhWz/4ff6e1d188038aa73abc489b9dc3621e.jpg",

"https://i.postimg.cc/xjNpwwyV/5188648870e90885271d436f82c59902.jpg",

"https://i.postimg.cc/9F1KWGSG/5327e0f363d23adf44ddb6b392b9a1d3.jpg",

"https://i.postimg.cc/pXDGTK60/5474939429ede6aba0d77ada5082dfe6.jpg",

"https://i.postimg.cc/13Bv0sPw/5495f349a11becc6b3dd7cf64746a939.jpg",

"https://i.postimg.cc/ZqDjgHWq/54aa45886da12a51f99864906232bfe5.jpg",

"https://i.postimg.cc/63kc6QLJ/54eb47a695e20618018056710a2619b5.jpg",

"https://i.postimg.cc/v80tT3YH/54ffcc8d3d91ce0029c5db166637ac20.jpg",

"https://i.postimg.cc/tJF5sH21/560c3eb108adf49585c38670355c9b75.jpg",

"https://i.postimg.cc/43HSbj35/58b73179d2f34e2e23bec57aaad63b0a.jpg",

"https://i.postimg.cc/YqfRkMvZ/59337b5f88443ac8fb03e5115aa7f1e0.jpg",

"https://i.postimg.cc/GmXj8KJj/59b18b3702a28d41de68053b67de566d.jpg",

"https://i.postimg.cc/LX1kWpdy/5c5d660e9f05c0d64ba509ff3faf828f.jpg",

"https://i.postimg.cc/XqKfVkYd/5caede67e89873ff7b01669e8fecb0f8.jpg",

"https://i.postimg.cc/28md0M0w/5de9367516394cae632dbadf40ee0ee0.jpg",

"https://i.postimg.cc/sggYrSdG/5eec92878212d945deb74404e9d9c3e3.jpg",

"https://i.postimg.cc/wvLJVQJZ/5f968b5b21edb9ad0192d65952d9f86c.jpg",

"https://i.postimg.cc/SQLCYVmz/6094999cc132ec029422332e7454b532.jpg",

"https://i.postimg.cc/VLDtD6rf/60a8bbf1d29ce867d631bb02bd7b760b.jpg",

"https://i.postimg.cc/NM69Tfvw/6272575bd89bc60574a24606bbc377d6.jpg",

"https://i.postimg.cc/4ywYLL3L/6278eee477554051ca5a302b10619473.jpg",

"https://i.postimg.cc/ZK796M20/656ef83546eaed4d6e1f32e8ed124583.jpg",

"https://i.postimg.cc/RFBqM56p/65a2b6de980d851e5e94131726ba29e4.jpg",

"https://i.postimg.cc/hj1vvyVD/65d79f5ef2ac83c3a460ad9e454257c0.jpg",

"https://i.postimg.cc/HxQvF5X8/65fc1e5844662d4edc2d01b8049b43ae.jpg",

"https://i.postimg.cc/T12wDVcr/665d553bfe6542e3829ba2da685a6fcd.jpg",

"https://i.postimg.cc/j28jQD8B/66e1631fcbcba99a634727ee9db6bf53.jpg",

"https://i.postimg.cc/8kwsVY1w/67f77e99b3885c9f08c3c6e81a5e0bca.jpg",

"https://i.postimg.cc/tCTJRzJb/683a389f9ee613879a2fdcb573be8cc1.jpg",

"https://i.postimg.cc/JzHhZ4jd/6871f436b8b0eae0b9f1ef8c0f564b31.jpg",

"https://i.postimg.cc/5tc23d39/68cbf726cc53e61b67b0b6d65455d90f.jpg",

"https://i.postimg.cc/Zn4smRx7/698e8886258c85602dfc1ddfd8978a3e.jpg",

"https://i.postimg.cc/C17MSZVd/6c03d60efaa0add91b2ccab6f93c6573.jpg",

"https://i.postimg.cc/QCM8tXXm/6de69929f42d617fc979d8bc38eb437d.jpg",

"https://i.postimg.cc/7hQxJphk/6e902f47da103bb62ce9ca39a1feee85.jpg",

"https://i.postimg.cc/jq8q1JXF/6eaa0b68635971365e304127b393c63a.jpg",

"https://i.postimg.cc/VLdsPLZL/6fb2a86d6937d33d57023e9327492c6d.jpg",

"https://i.postimg.cc/J4vrrVS3/70989863686f3d7c05d0814c8e75a3dd.jpg",

"https://i.postimg.cc/8zv1sXV2/711940be58e4b968ca6fc9fdccc108f4.jpg",

"https://i.postimg.cc/ZqhJNPbC/748f6551f04ae19c86a1b1bea9066d29.jpg",

"https://i.postimg.cc/8CBNmFcw/7542a66ab5b6e83c84a0f0d89c0f48f9.jpg",

"https://i.postimg.cc/V6f1GYbw/7585f62d15c3cc3fd195d6f9af25b41b.jpg",

"https://i.postimg.cc/FRTvw2jL/75e2aaaf048611c1c763f1588e6d4168.jpg",

"https://i.postimg.cc/T1hxxC9H/760da2ecd70556192cc33080299f2589.jpg",

"https://i.postimg.cc/2yJDSh9j/761b78b3feb3423c18310c9d9e0a476f.jpg",

"https://i.postimg.cc/jqkKcYqV/763c2c920c25d836ec43a3485e866121.jpg",

"https://i.postimg.cc/7YG4Qtb5/78251d604543cd329a6fe135525bd252.jpg",

"https://i.postimg.cc/Nf3th8rp/7884d9c17bbc9991bfc589db524469a4.jpg",

"https://i.postimg.cc/C5rG2LPf/78d227afa1e5f067e77116b4da2cfc2b.jpg",

"https://i.postimg.cc/htVBKJLg/794f6fc955cb5b18fa5e89336bfda56c.jpg",

"https://i.postimg.cc/25mfyzGW/7a40bd04d5394b1bfd535d5ddb2d4e65.jpg",

"https://i.postimg.cc/HL217fvh/7b3053b364d5f83c5aebb31f5f1f005d.jpg",

"https://i.postimg.cc/d1VPR4zt/7bbade81bf4f4495f214a8bff3f037a2.jpg",

"https://i.postimg.cc/QtYLfc3g/7c3652a2dcf3187bc20139eb15022d41.jpg",

"https://i.postimg.cc/hvXk6hDk/7da25eea3895f42645fd3581b6aa1a14.jpg",

"https://i.postimg.cc/J0SfLmtG/7de5ba3dd5d1ecc9e7f9128c62b788df.jpg",

"https://i.postimg.cc/44Mktvws/7f3d6b7081440b9cce50a2108c70fe09.jpg",

"https://i.postimg.cc/kXbryVh8/802aa3827a4d5215770331182a5295f7.jpg",

"https://i.postimg.cc/fWfgKcM6/80349fcf015d01d7c2265c8d86827bf9.jpg",

"https://i.postimg.cc/XYSR1VTP/813339735ee93b8dab95edc622db0a96.jpg",

"https://i.postimg.cc/Nj6WW3tj/81a19ef9554e31e564f7ce10c5c2e281.jpg",

"https://i.postimg.cc/N0bZ0R5h/8224889406af4796f09e28c55c4652fe.jpg",

"https://i.postimg.cc/L5gWv7vR/840958b6563ef4a265adddd6c44f2c6e.jpg",

"https://i.postimg.cc/t70Mc5m6/85e348c64c9ffc1728f1adc6f1cac327.jpg",

"https://i.postimg.cc/FFfF2HBF/879ec9d948d56dca10caea1ebfaa7b2e.jpg",

"https://i.postimg.cc/28hkSXYP/8ad88007e57aa5940346608b63598706.jpg",

"https://i.postimg.cc/P5HtpzrN/8dea930c50bbdfc34e09a787d2c6fba4.jpg",

"https://i.postimg.cc/638wJMzb/8fbc7bbbaca5941fb2113fc46a225637.jpg",

"https://i.postimg.cc/hjNnSV5D/8fbe4bd466b398d794c85ad820f18b00.jpg",

"https://i.postimg.cc/fW0Z8gVJ/8fcb29fa823b2ccafb1871408440bac2.jpg",

"https://i.postimg.cc/Hswmgc4m/923c05fdc67fd5776b8de1c6628e298d.jpg",

"https://i.postimg.cc/7ZqkYHm2/92448a90342cf41944edc4838e310ea4.jpg",

"https://i.postimg.cc/4xwTYDSF/927d04111fa1ca070db2f7b7720147fe.jpg",

"https://i.postimg.cc/xdCVMsrj/9380fe7a24c9fd588a5cb1b07422c6cd.jpg",

"https://i.postimg.cc/PqRs4mhW/9499fa9d338a3f7404376d90fe3d74b3.jpg",

"https://i.postimg.cc/gJL9Bnkf/960fb7435e707546235daa626b81bd08.jpg",

"https://i.postimg.cc/Fz0MN8Sp/96663a2a96b03591e582e492abd18859.jpg",

"https://i.postimg.cc/3xtP8gks/967d69ffacd92256a0e652a71a47c549.jpg",

"https://i.postimg.cc/Kv9pXmkf/97b4b7a5cd019d86564af494b2098846.jpg",

"https://i.postimg.cc/6QSgRtLz/9822bd7c3b4d15b320dcac073328d6e1.jpg",

"https://i.postimg.cc/8563m9ZG/98ed86dd5df7e4e0fdeb9c06a1f45092.jpg",

"https://i.postimg.cc/J0329Jwd/993f2c8964d898dec989da524508033f.jpg",

"https://i.postimg.cc/Df1HJVWd/99692d30b9dcf3b5a1895cbfcfadb521.jpg",

"https://i.postimg.cc/NfYVRNmh/9a3909e15ca608fc2072358cb378d489.jpg",

"https://i.postimg.cc/133jjfvJ/9a5fb10c006e9fe79e05fd73f32ba21f.jpg",

"https://i.postimg.cc/mgp5fBqR/9ca57ea6641263d249502bd907e6365a.jpg",

"https://i.postimg.cc/yNwpxnsb/9e4177cb96dbf90ffdaf4d2a24a0b724.jpg",

"https://i.postimg.cc/3RmSvpwJ/9ed1e3acd10396c6382782ef6940fa81.jpg",

"https://i.postimg.cc/7hNKBk7F/9f79eccfd1d0908e4990828910134373.jpg",

"https://i.postimg.cc/L4kQ4z7x/a04f37d94aca9671135c34841be3d675.jpg",

"https://i.postimg.cc/028Wzz1P/a0c0c2a4988059569b92bb4d9e9428fa.jpg",

"https://i.postimg.cc/52ysmDtr/a0d252ae9b5cf9b04bcfd66881d57ff5.jpg",

"https://i.postimg.cc/qvFjDQhv/a171e5dc5e3408f11a55557abf97ae34.jpg",

"https://i.postimg.cc/QtGShtqL/a1900adeb2596139c265abc4277472b8.jpg",

"https://i.postimg.cc/wvX2vpW1/a1dc54aec3f9b9bd05bba8efa01c9c5d.jpg",

"https://i.postimg.cc/MHtY7YJx/a45360812b1b4fc950b6fe8ccb2e39cb.jpg",

"https://i.postimg.cc/nV1Tfnj5/a62fc3ddc16609449b00c664be401835.jpg",

"https://i.postimg.cc/Dyy62R1z/a637031bc5a91e2df53cf4549c5e841f.jpg",

"https://i.postimg.cc/y8DTR9Q4/a6568bb31039c97f68b10f4d741d81b6.jpg",

"https://i.postimg.cc/K8CDDzwK/a7a49fdbb68906d36134f5a08f5a1fb2.jpg",

"https://i.postimg.cc/jjNQgTYM/a7bf16b7ffcd7de816def984d676725d.jpg",

"https://i.postimg.cc/vBt7yvB9/a8a15321d06c344767b6d7f8626a65a5.jpg",

"https://i.postimg.cc/qqBsvChF/a99116a7ecf2dcedd0b101380c672f11.jpg",

"https://i.postimg.cc/hvC9zPVt/a9b7833fbbb1875371d0730815a98dc7.jpg",

"https://i.postimg.cc/RCG1bG2x/aaf1593d0b6486f8bbfb0371613e0ba8.jpg",

"https://i.postimg.cc/DyZQVLKJ/ab0d09b70b79f28884861f0847635d71.jpg",

"https://i.postimg.cc/28KQCyzH/ab81dcbc626fb66af42d1bf61e7a7681.jpg",

"https://i.postimg.cc/JzHb080R/abe4a7118bbd4bfcb248fcb7de71cedd.jpg",

"https://i.postimg.cc/VNyXbh0n/ac4757a8be53102b675770dedb089a86.jpg",

"https://i.postimg.cc/TPrgjcnS/accab55e7a67ed599202a31317dae78a.jpg",

"https://i.postimg.cc/ZRHN2K7x/af3762188bfa581612353714930000cc.jpg",

"https://i.postimg.cc/0jNSsRhR/afa1ba17864e3da376d66993f9130134.jpg",

"https://i.postimg.cc/nhCRpNqJ/b0bd306d0a13c292139918457970b1bb.jpg",

"https://i.postimg.cc/Y0yW2Dw4/b20678c712492ad0a4371dbe17b8ee4f.jpg",

"https://i.postimg.cc/fWHXvy0w/b46a5280645201974fb5ea06cf6bf45b.jpg",

"https://i.postimg.cc/TYpbNxrn/b589acff6d2170c02ea0f0fb83605ef3.jpg",

"https://i.postimg.cc/TPbtWmkN/b5ea0fe7ba57a594f9abde60597d088a.jpg",

"https://i.postimg.cc/MKNQhLDN/b74eb709bd3ed9d6b7ca2ac8478c2178.jpg",

"https://i.postimg.cc/jSf7Kh35/ba34f4ac644a211e9af61feb37c5e19c.jpg",

"https://i.postimg.cc/jjrJjJBh/baf896d6d694fc4ee56459dcc0b0e2ac.jpg",

"https://i.postimg.cc/Dzd44wT3/bcca3c68c8e1855e6c1d260a52ebda70.jpg",

"https://i.postimg.cc/pTWhfMWh/bd1af16819e8c7fbafc85e651869a41a.jpg",

"https://i.postimg.cc/9ML41g0x/be0936aa352d0717e40fda6d777110e1.jpg",

"https://i.postimg.cc/5yjXr5Ff/be221574126c3269d0501df1cca1a9fb.jpg",

"https://i.postimg.cc/6qS8x7dn/be2c0f1777c809ad52d320e685d6dd0b.jpg",

"https://i.postimg.cc/7PQG2Rph/bf065a1ec9d235a5abf275c6ae13d89a.jpg",

"https://i.postimg.cc/KvkKrN2N/c0b57c4576f43a2f46b51177ba8cc141.jpg",

"https://i.postimg.cc/L6cJy14M/c34d707a4c440b4f479e55a791002b2a.jpg",

"https://i.postimg.cc/7ZSfjZbJ/c47cdb64cdffdb6c2d4964b43d0214e5.jpg",

"https://i.postimg.cc/YSkh7Bmn/c52c07b5936cd764c22541054a92844d.jpg",

"https://i.postimg.cc/QtdCBgmc/c7b058dd13d95b06156e0586ea329690.jpg",

"https://i.postimg.cc/sXHX5BHq/c80877bf6af2a811ac8c2f31e0302cb1.jpg",

"https://i.postimg.cc/VvSNgY36/c80d95ab80cce03244afb868ac0ee061.jpg",

"https://i.postimg.cc/Kjd8s625/c90f5a0f24de2c8fd10cce3b2187e200.jpg",

"https://i.postimg.cc/44Myd99h/c9238c92c7a9c2ca276e342d058c06b2.jpg",

"https://i.postimg.cc/Wbk3J1GY/ca33b877bb32bf0e5f3c6849fa009ee5.jpg",

"https://i.postimg.cc/52Wt5Wp4/cbdcbe31c05105a0e9fbfe94f3333aca.jpg",

"https://i.postimg.cc/CxCxmr6j/ccd67d2398409778b407f8b38c9e46fa.jpg",

"https://i.postimg.cc/YSpqVNJT/cd74b43207c7b8149beff753d0f46eb2.jpg",

"https://i.postimg.cc/2528fbYy/ce4ce3c02e39d6704704c60bdc04e612.jpg",

"https://i.postimg.cc/wvMxxqxV/cf9dd30ce10417d2364a3b3c095c7c0f.jpg",

"https://i.postimg.cc/85Ypj2jV/d256c6c03d5d4754d57d99ae708aae74.jpg",

"https://i.postimg.cc/d3Tqd5yZ/d323948a846596ce6859de4ff8d4c3a9.jpg",

"https://i.postimg.cc/sxTmRJXx/d330f334783afa0bb09387e930cd6170.jpg",

"https://i.postimg.cc/5jdfm8B7/d4c67464ab0df4a4a51ac6e91e9860cf.jpg",

"https://i.postimg.cc/QNB50sg1/d58174188de2a748417f48b16111166a.jpg",

"https://i.postimg.cc/mZ09nqVq/d6913bed652f7eaa6af7f5bcd803cb94.jpg",

"https://i.postimg.cc/66cYRB0K/d8c26903bab680cba346f8b36aad7a22.jpg",

"https://i.postimg.cc/4NVcR5S3/d8f273c772f36e1d837a179c53a48ff8.jpg",

"https://i.postimg.cc/VLN4W2GC/d918a708650e03dc3b035aef95a986d2.jpg",

"https://i.postimg.cc/cLWnxnpB/d9d8d6906b3d776c2e7be937e9851e7e.jpg",

"https://i.postimg.cc/zGkRVf5Z/da15dcb60c649ea691c9a680cd97d5ae.jpg",

"https://i.postimg.cc/d0tZdKt7/db46de8616140484884fbf606ccd1712.jpg",

"https://i.postimg.cc/261qcFWr/dcaf543883d1c30f09cbdcb4492e786b.jpg",

"https://i.postimg.cc/DZRStJQs/dd165e09da9688fb0dff293da5300435.jpg",

"https://i.postimg.cc/4ytYZfw0/e21dbd92bfc575584eb146a05a36750f.jpg",

"https://i.postimg.cc/QNW9cmsq/e2d0fde4dec83828b74b3039a95efe88.jpg",

"https://i.postimg.cc/65J7cZpx/e3ef8babc159a269470612d85b9d31e4.jpg",

"https://i.postimg.cc/htzrHTq4/e46b7d6ee85b8ef8593c9b3daae10109.jpg",

"https://i.postimg.cc/QxQFyMF9/e6f36e7069dc2fcf5b2eca6853e6b014.jpg",

"https://i.postimg.cc/52fXdMzP/e7cc9a0e46db419705c36fbcb72f4950.jpg",

"https://i.postimg.cc/bwLsqFHq/e85ff35e0e619d0354a2f2eedd2c2a8f.jpg",

"https://i.postimg.cc/BnrgsbqT/e8a8f9d4be2d2cba81a7516d3c4ec979.jpg",

"https://i.postimg.cc/Gp29tJqG/ec2710c878f9f40e37e0b6a9a5e6bbc1.jpg",

"https://i.postimg.cc/cJfcJWHV/ed21e9e0af945a684e2afeec71de8cad.jpg",

"https://i.postimg.cc/N0zFH9zV/ed4f5ff113fd39de281b705e3bcef80b.jpg",

"https://i.postimg.cc/j5n5QqVj/ee57471e5d32a46f3f0918cee79496dd.jpg",

"https://i.postimg.cc/ZnkqfkZx/eebf92c26eb6823a309a6f69b5abe03c.jpg",

"https://i.postimg.cc/sXy4QLG1/f1cca27bfcc2950ab338f615007ff7d8.jpg",

"https://i.postimg.cc/FzjH8PH5/f34827771cbc7c66adc83d4f33923109.jpg",

"https://i.postimg.cc/m2sDCGmb/f367a3d8084639ff7dcbdbec555555f9.jpg",

"https://i.postimg.cc/sD42J0L5/f387a56c355fd2d28b8990b99b1e37d5.jpg",

"https://i.postimg.cc/9QxF6wCM/f3a3081788c21fc500fc0ff13a2e0c5e.jpg",

"https://i.postimg.cc/HLVsdWkt/f41e0f382d82f0cc9b531ad7b9bcf6db.jpg",

"https://i.postimg.cc/Ss9SYZ82/f4bbfc8da15e8f33cd899124f36928c1.jpg",

"https://i.postimg.cc/J0W1NbcT/f52a3c1616d111eb89cb79019e27af62.jpg",

"https://i.postimg.cc/KcncZHxC/f59b1af3d9ed0e7135d79862cb0841ad.jpg",

"https://i.postimg.cc/WzjvFsTC/f6925cd7d5fb24d3060037624d98827f.jpg",

"https://i.postimg.cc/Y2fkcLxH/f6dc2d4e8d9fdd1359c336aa2ebae834.jpg",

"https://i.postimg.cc/65WKB6HG/f756706277a385b04fd85e8760c566bd.jpg",

"https://i.postimg.cc/65MXqsSb/f7604c7c16f287996547efae774c27a4.jpg",

"https://i.postimg.cc/LXTBzVjD/f856f7b3ababbfe1c6aebd55cd6c5360.jpg",

"https://i.postimg.cc/cLjG7RdQ/f977c1d340c3148bbcce47ac45d26137.jpg",

"https://i.postimg.cc/zvqsDpk1/fa583eaf0a6346cbef7e485ffe64be06.jpg",

"https://i.postimg.cc/RCRrp5MC/fb18bf5eb99508eaae5f8025a7cbf4ff.jpg",

"https://i.postimg.cc/25vM4gcD/fb3256775227a0941f679f1375f5c31c.jpg",

"https://i.postimg.cc/50SrrLWK/fbdb7d02e005ebb3c429d22662b5d021.jpg",

"https://i.postimg.cc/zvdczNBn/fc9c55e9dec18054be54d010d8fbb939.jpg",

"https://i.postimg.cc/9FMkxD81/fcfc924e061ca713ddcaa42d1815ed1c.jpg",

"https://i.postimg.cc/WbHHxsxV/ff8a5889ee7923df48ebd7d8285d7ea0.jpg",

"https://i.postimg.cc/XqYKxy8b/image.jpg",

"https://i.postimg.cc/sgGNrtRh/IMG-20220926-164457.jpg",

"https://i.postimg.cc/26rcnyLQ/IMG-20220926-164528.jpg",

"https://i.postimg.cc/vBhPhy5p/IMG-20220926-164603.jpg",

"https://i.postimg.cc/dtLW2z3x/IMG-20220926-164849.jpg",

"https://i.postimg.cc/MG8d8HDC/IMG-20230219-133431.jpg",

"https://i.postimg.cc/3R81dqz9/Screenshot-2022-08-28-05-20-55-471-air-com-lunime-gachalife.jpg",

"https://i.postimg.cc/gjrKKZzZ/Screenshot-2022-08-29-03-15-33-352-air-com-lunime-gachalife.jpg",

"https://i.postimg.cc/9XNbQJbt/Screenshot-2022-09-10-14-58-39-601-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/RVkTchjW/Screenshot-2022-09-10-14-59-00-311-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/jjKQF9qK/Screenshot-2022-09-10-14-59-14-422-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/0NfdRfrS/Screenshot-2022-09-10-14-59-23-324-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/MTp0WQjF/Screenshot-2022-09-10-15-00-26-809-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/bYM0hdYm/Screenshot-2022-11-03-14-24-21-116-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/VkPjJTCM/Screenshot-2022-11-03-17-49-50-256-air-com-lunime-gachalife.jpg",

"https://i.postimg.cc/Mp01VD7L/Screenshot-2023-02-07-00-39-46-402-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/wvMJKYCK/Screenshot-2023-02-07-00-40-05-358-air-com-lunime-gachaclub.jpg",

"https://i.postimg.cc/vDF66gcM/Screenshot-2023-02-08-05-06-49-253-air-com-lunime-gachalife.jpg",

"https://i.postimg.cc/DftCcxGf/Screenshot-2023-02-08-05-08-10-271-air-com-lunime-gachalife.jpg",

"https://i.postimg.cc/VkwDx543/Screenshot-2023-02-10-05-40-10-842-air-com-lunime-gachaclub.jpg",

    "https://i.postimg.cc/CKBpDHmD/01dbf0734e271a4c21b0d632d36aca8e.jpg",
"https://i.postimg.cc/Df1ptYSm/052deeee24cc7e0abb93c018516a9e58.jpg",
"https://i.postimg.cc/2yqWNtwy/05c54bd7c14e86e8303678be220ee78c.jpg",
"https://i.postimg.cc/gJ2S8YY7/0963c88a1783980323f744e6f5ecb5e8.jpg",
"https://i.postimg.cc/mrR718bp/097787b5a4131bd56919a5403ae500ae.jpg",
"https://i.postimg.cc/d3ShW9cF/0de4670fe59fd15cd801bf1806c70ab8.jpg",
"https://i.postimg.cc/dtpB32kg/0fd75dc97f7df7fbfa017e9a472a3b32.jpg",
"https://i.postimg.cc/ZYyz0cCh/15c23ffc0eb058579dbb137ad9dc1588.jpg",
"https://i.postimg.cc/0y7BqWWV/1733933feb20b209a83baec826d505ae.jpg",
"https://i.postimg.cc/MZctS3X1/18044d4c2ef9c92c02fe70ba53173e44.gif",
"https://i.postimg.cc/vZwYGKzj/19d99525c026cdcf367396b2f3b8b9aa.jpg",
"https://i.postimg.cc/tTD0GSgK/1a57f20f8437216c2124b19fd05b991c.gif",
"https://i.postimg.cc/c4xqTNFd/1db5777d4b5f5bc448614259718652c5.jpg",
"https://i.postimg.cc/Pr2gRF7Y/1f3601380df6adcc750591894de7b069.jpg",
"https://i.postimg.cc/YqnP3L4x/216e9dbd0a25a21cba294ffdc017e9e6.gif",
"https://i.postimg.cc/BnCXks0N/218f28a7d54b4e7ee3c80b25774c549c.jpg",
"https://i.postimg.cc/4NyGsgVB/2bae89fda06aac78cb1b6e2657a40a1e.jpg",
"https://i.postimg.cc/9fWc7qsY/324d7328db16e150b12a46d111d3056b.jpg",
"https://i.postimg.cc/CLLtksK1/32bfb4756ccfedd52f407c74cab08648.jpg",
"https://i.postimg.cc/d0dV2Y0J/33875e5102f54391c112a3594f328f24.jpg",
"https://i.postimg.cc/nLTvtBvs/37e78c11345edf2eaba3aac037d3daa3.jpg",
"https://i.postimg.cc/L4yg6mYW/392db69b64175e0d7cb5b2bae35742e4.gif",
"https://i.postimg.cc/DZH6t1Tr/3aa8d798cfa674e4daa1eece76899ada.jpg",
"https://i.postimg.cc/ZqkV78J6/3aac9bab9342f85982e5dd8e4419763e.gif",
"https://i.postimg.cc/23R1RSy9/3ab1e1deec89ce489d5df67639248faa.jpg",
"https://i.postimg.cc/T1QVTm8N/4375fb2dfe87320eb6eabf7d298950d3.jpg",
"https://i.postimg.cc/WpDTgVYC/4aa62637bf6daf8c81c44b3cb29f6bcf.jpg",
"https://i.postimg.cc/rwtLRNh4/4e5bfcdf863de3edca6621a3b44b42b0.jpg",
"https://i.postimg.cc/MGjv9B92/4ef679c12f05c73c186d4ee2ec37d67f.gif",
"https://i.postimg.cc/FF2psbJ8/4f918d13119973941ad6b13d0760bf8b.jpg",
"https://i.postimg.cc/c4Zw6FXK/56aec110e52bcd309d6ea9c2aa35926f.jpg",
"https://i.postimg.cc/fRS9r1br/59078b7b1e4e37481e80bcaf1d768913.jpg",
"https://i.postimg.cc/1zypTJNh/5ca9c94db9d4e2e8c6a279092d729b0f.jpg",
"https://i.postimg.cc/NM5bJpWG/60a78b08affe055aa18bd8df83fef67a.jpg",
"https://i.postimg.cc/3NQpX1hc/6272ba276caa561191d418ebb7b6ba53.jpg",
"https://i.postimg.cc/Yqzrq3sC/667223904c02ee99c377bb9ef9d68338.gif",
"https://i.postimg.cc/BvswZTR4/67d22b3085cf0587b29e4655ea94613f.jpg",
"https://i.postimg.cc/bdX62kVy/697fd7324e85c1fe5ffdb6d6a6e922a9.jpg",
"https://i.postimg.cc/sfnsZXJp/69fd004d5996eb9ad97b7bd8d657feb2.jpg",
"https://i.postimg.cc/qMXYCZrW/6a930fa62afad08f3ea46270af8de526.jpg",
"https://i.postimg.cc/rsRWWH7W/7465122fc3ec5fef5598bce1889aa4fb.jpg",
"https://i.postimg.cc/XqnKMLPy/756a4fe7eec0db30e5ee864cf3fa643c.jpg",
"https://i.postimg.cc/C1RCwdMw/7a3ee0b5535be443bbc49a590bde6f9a.gif", 
  
  ];
  var max = Math.floor(Math.random() * 382);  
var min = Math.floor(Math.random() * 1);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("5000$ dear friend",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => 
   api.sendMessage({body:`Costs: 5000$`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);
              api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
