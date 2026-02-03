---
title: Mark下DeepSeek
description: 一柒一汇 的公众号文章
source: https://mp.weixin.qq.com/s/UuE6Kv-tFujTh7bAd0xj_g
---

# Mark下DeepSeek

过年基本连续几天都在跟DeepSeek对话，包括但不限于讨论分析社会现象、学习、讨论书等。

非常非常惊喜。

昨天花了点时间补了下资讯及原理，饶是我这种从来不在公众号讨论工作相关的人，也要Mark一下留作记录。

世上方一日，Ai已千年。

**1）DeepSeek是什么**

DeepSeek是一家大模型公司，全称深度求索人工智能基础技术研究有限公司。成立于2023年7月17日，由知名私募巨头幻方量化孕育而生。

以下是DeepSeek大模型发布的关键时间点（仅取业内较大影响的发布时间）

  * 2024年1月5日，发布DeepSeek LLM（深度求索的第一个大模型）

  * 2024年3月11日，发布DeepSeek-VL（视觉-语言（VL）模型），开源

  * 2024年5月7日，发布第二代开源Mixture-of-Experts（MoE）模型——DeepSeek-V2。正式打响中国大模型价格战，当时新发布的 DeepSeek-V2 的API价格只有 GPT-4o 的 2.7%。随后一周时间，国产厂商全部跟进，字节、阿里、百度、腾讯全部降价。

  * 2024年12月26日晚，发布并开源DeepSeek-V3，整体模型评测能力媲美闭源模型，**只用了 500 多万美金的成本和2048块英伟达H800 GPU ，便完成了6710亿参数模型的训练（同等规模的GPT-4训练成本高达10亿美元）带来了不输 Claude 3.5 的成绩（基本是当时市面最好的模型）。**

  * 2025年1月20日，发布并开源DeepSeek-R1 推理模型，效果媲美OpenAI o1，同时API价格仅为OpenAI o1的3.7%，再一次震惊海外，霸榜全球，英伟达的神话都岌岌可危。

  * 2025年1月28日，发布并开源视觉多模态大模型Janus-Pro和JanusFlow。而且性能再次超越OpenAI的DALL-E 3等大模型。

  

同时在数据上，上线19天日活1909万，霸榜全球。

![](/images/wechat/Mark下DeepSeek_5c8cf9d6875e.jpg)

**2）Deep Seek为什么会火**

直接借鉴游戏科学创始人、CEO，《黑神话：悟空》制作人冯骥的话：“DeepSeek，可能是个国运级别的科技成果。”

![](/images/wechat/Mark下DeepSeek_f02d24a4ba03.jpg)

  
结果上的体现是，用更低廉的成本训练出了性能不错的模型。

但更在于技术创新——DeepSeek这次最亮眼的是证明了纯粹的RL能够直接把模型提到o1水平，在此之前前，业内所有人都认为需要prm （process reward model）才能做到这点，这已经是颠覆行业的发现了。

另外非常重要的是deepseek还发现了这种训练方式甚至能够让模型自己学会longer-chain reasoning以及reflection，他们所谓“aha moment”。相当于只训练LLM得到更准确的结果，LLM就能自己学会反思，思考到一半知道自己这样做下去会错，然后尝试自己纠错，这种模型“自我进化”的特性是业内仅次于GPT intelligence emergence的重大发现。

就结果而言，“用更少的卡训练出效果差不多的模型”可能不仅仅是节约成本这么简单，更是一种improvement of scaling law，意味着这种方法往上堆更多的卡有可能把模型能力再往上提升一个数量级，甚至直接达到AGI。

推荐链接：[一文读懂｜DeepSeek新模型大揭秘，为何它能震动全球AI圈](https://mp.weixin.qq.com/s?__biz=Mjc1NjM3MjY2MA==&mid=2691555190&idx=1&sn=ef787bf56ffddebb9e1a3203cd99f705&scene=21#wechat_redirect)

3）Deep Seek怎么训练出来的 

3.1 训练过程：DeepSeek团队做的第一件事，就是尝试“零监督”直接对基础模型进行大规模强化学习训练（即纯RL），得到了 DeepSeek-R1-Zero。但DeepSeek-R1-Zero的这种“自发行为”有时也带来缺点，比如文字可读性差、语言混乱等。**为了解决这一问题，他们设计了一个四阶段的流程，让模型从“能思考”到“会表达”，DeepSeek-R1也就此诞生。****具体而言，DeepSeek团队先收集了少量的高质量长链式推理数据（Long Chain-of-Thought），让模型在上面做一个初步的监督微调（SFT）作为冷启动；接着使用类似DeepSeek-R1-Zero的强化学习方法训练模型；得到通过RL训练后模型产出的较大规模推理数据和通用SFT数据后，通过“拒绝采样（Rejection Sampling）”的方法训练和微调DeepSeek-V3这一基座模型；最后再整体进行一次“全场景强化学习（Reinforcement Learning for all Scenarios）”，最终得到了DeepSeek R1。** 推荐链接：[DeepSeek-R1 是怎么训练的｜深度拆解](https://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247495493&idx=1&sn=75858d12c9c7c5146db60b2ec04dfc79&scene=21#wechat_redirect)[DeepSeek才是“真正的OpenAI”？｜甲子光年](https://mp.weixin.qq.com/s?__biz=MzU5OTI0NTc3Mg==&mid=2247540529&idx=2&sn=c2748f424b22d9919c9cfa3f3c7ba7c6&scene=21#wechat_redirect)另外补充两篇关于V3的推理介绍：[省钱也是技术活：解密DeepSeek的极致压榨术](https://mp.weixin.qq.com/s?__biz=Mjc1NjM3MjY2MA==&mid=2691554386&idx=1&sn=41ffc5d3a2438583dc89f64b0c83d70f&scene=21#wechat_redirect)[DeepSeek-V3 是怎么训练的｜深度拆解](https://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247494642&idx=1&sn=bb08acb35c778e0dcfc6fb85c82c5df8&scene=21#wechat_redirect)3.2 训练背后是怎样的一群人人物画像：天才年轻人——“都是一些Top高校的应届毕业生、没毕业的博四、博五实习生，还有一些毕业才几年的年轻人。”没有工作履历，DeepSeek衡量年轻毕业生“优秀”与否的标准，除了院校，还有竞赛成绩。基本都是ACM金奖、本科就发多篇顶会论文的神人。

如何管理：砸钱、给卡、扁平和学院派的管理方式。只要技术提案有潜力，给人才的算力不限，此外钱也是给到位的，不输字节“往上加价”。另一方面，DeepSeek每个成员不带团队，而是根据具体的目标，分成不同的研究小组。组内成员之间没有固定分工和上下级关系，“每个人都负责自己最擅长解决的部分，遇到困难就一起讨论，或者向其他组的专家讨教。”**  
**

**推荐链接：[ DeepSeek的用人观：学霸、年轻人、禁止赛马｜智涌分析](https://mp.weixin.qq.com/s?__biz=MzkwMDQ2NDU2Nw==&mid=2247509805&idx=1&sn=e4a92bebeb4d4eada2511c6a58192506&scene=21#wechat_redirect)**

**[ 4](https://mp.weixin.qq.com/s?__biz=MzkwMDQ2NDU2Nw==&mid=2247509805&idx=1&sn=e4a92bebeb4d4eada2511c6a58192506&scene=21#wechat_redirect)）Deep Seek有什么影响 **

**1\. 海外慌了： 各家轮番上阵研究且发言，而且感谢DeepSeek，OpenAI 的o3-mini发布且免费了。另外Dario Amodei的这篇檄文非常的有意思（令人跌破眼镜）强烈推荐看原文[Anthropic CEO 发万字檄文：DeepSeek 崛起，白宫应加码管制](https://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247495789&idx=1&sn=a3383f4655de75adf678abec522d5fea&scene=21#wechat_redirect)**

**[2](https://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247495789&idx=1&sn=a3383f4655de75adf678abec522d5fea&scene=21#wechat_redirect). 冲击英伟达：**R1模型通过重新设计训练流程，**在保持高准确性的同时显著降低了内存占用和计算开销，** 仅用了少量的低端GPU（以A100为主）就实现了高端GPU（以H100为代表）才有的性能。自然英伟达的冲击比较大，但一定程度上应该不会颠覆英伟达，中小企业可能会去拥抱开源模型和低端GPU，但是长期来看，引领还需要高端GPU。

> 高端芯片的统治力：预计2025年英伟达从Blackwell架构产品线获得的收入有可能会超过市场的预期，超过Hopper架构创造的记录，最多可达到2100亿美元的水平，而且大型云厂商的订单已覆盖未来数年产能。
> 
> CUDA生态壁垒：90%的AI开发者依赖CUDA平台，迁移成本极高。
> 
> 供应链控制：台积电CoWoS（一种先进的半导体封装技术）产能优先分配英伟达，2025年预计英伟达占据CoWoS总需求的63%，表明其在采用CoWoS技术方面的领导地位。
> 
> 王博 王艺，公众号：甲子光年[英伟达市值蒸发创纪录，DeepSeek掀起AI算力革命意味着什么？｜甲子光年](https://mp.weixin.qq.com/s/bEQLt_ti5sZDIsteDj1M3A)

3\. 长期来看，对AI模型厂商格局影响：底座模型由几个超级公司来做，更大更好，开源；各行业有丰富的行业数据，可以在底座模型之上做更个领域的垂类模型；具体到各个业务再依托落地场景，做定制化的微调和工程落地。如此，上下游有配合，算力卡脖子的问题也得到解决了。应用层的全栈是趋势：懂需求懂落地（简单的设计与前后端）懂营销。对于大多数人来说，相比研究更重要的是使用，开源社区从模型层到应用层的工程框架此起彼伏，研究速度远远赶不上开源速度；且另外一层面，当前不少工程架构是模型能力的补位——随着模型能力的不断增强，会带来技术的快速更新迭代。  

  1.   

**5）可以做什么****1\. 强烈推荐使用起来： 已经连续一周每天在使用DeepSeek了，此前对于kimi也没有这么重度的使用——大多数情况下，Kimi能帮助总结替代搜索，简单的生活和工作场景已经完全由kimi覆盖，包括好奇心搜索、知识补充、读药品说明书、翻译、润色总结、甚至讨论产品方案等。（不要问为什么不用豆包，豆包的语音实时交互能力还不错，u1s1）**2\. 推理过程：我个人非常enjoy R1的思考推理过程，看它的思考过程比看最后的答案输出更有趣——你可以关注到它是怎么想的，本质上是思维链的学习。整体的思考过程是一个产品需要去打磨的职业思维方式——先看用户的问题是什么，再看用户的需求是什么（为什么会有这个问题，希望得到什么），再看解决方案是什么，如何把解决方案更好的呈现给用户——妥妥的以用户为中心。3\. 使用技术：如上所述，用起来。某些时候觉得达到60分勉强可用的领域，随着模型能力的提升，未来一定会产生质变，典型场景如Cursor等，在23年5月算用着还可以，在Claude3.5在编程领域碾压后，Cursor能力有了巨大提升。使用最新的技术，一开始会有一些上手门槛，但随着技术的普及和成本的降低，最终上手门槛会降低，成为生活中密不可分的事物——一如蒸汽、电、互联网。4\. 多提问：是对自己的要求。大语言模型囊括了人类的经验，O1等推理模型学会了思维方式（就R1所体现的思考过程，其逻辑性和完善程度绝对超过99%的人）。而提问，问为什么，这一刻的动心起念，Ai还有漫长的路要走。  

