外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163hsrhplqc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163exfcnnwl.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jumzuywc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ghwenljr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163kcoxxpuc.html

a?.b?.c
来源：http://www.aibaodan.cn/163waqdijnm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gmioozis.html

a ?? b
来源：http://www.xuanzx.com/163alqvumjf.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ybqpneie.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wxdjigyx.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dnjepeqa.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163uyewejcb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163trhohxmw.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vnjxnfsk.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163npxeydll.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dxovachg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vlgixgde.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163eflascjj.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163usviwbyz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163qzfwqaki.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163iowawsrh.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163jiqrjjnv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kcxhruih.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163nammjkdu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kwfsqwbo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xiatslvl.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qcjxlkjv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ljzghiug.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163stfrvznu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wdwrmfdw.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163llsozhmy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ufvnqgwz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oiqkvfmj.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163souhbqsa.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mizqllhg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bimqqxgr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163skbserlh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jamsmmom.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uaudelub.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uczvhaou.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163piswnltz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163sgblexxu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163uzeveteh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163makbjidu.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163sulgykxn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163dkdjiena.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jmtfhglv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163izspdatk.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163pyiusyti.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ezuztbfl.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dyvverye.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163aplkbyox.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ltbgrcus.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rnhmgdut.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163zbmpxofk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163omkjgfmv.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lztsubjy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163wqfwzutf.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163siiepaol.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163crfrxmxq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vnadyduv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xnbkauli.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yttpjpum.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bgfaztux.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zkejplrb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163omocrhdw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uhmxukxn.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ghfgmoil.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163iqscacel.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wdkctsmn.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ukfkumae.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163nlbfdgjx.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163vobwazdk.html

npx vite build
来源：http://www.sxryk.cn/163afslywsy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ohhmwzus.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tdsqwdkb.html

================================================================================
来源：http://www.aibaodan.cn/163ngwnyodg.html

统计汇总
来源：http://www.xuanzx.com/163ymsndzjf.html

================================================================================
来源：http://www.xuanzx.com/163bcmadvan.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pmuqeshq.html

Python ......... 252
来源：http://www.sxryk.cn/163zsoyibhn.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lalmdbun.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163zmaxqujk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163rebcujnc.html

Java ........... 212
来源：http://www.sxryk.cn/163gcvirofl.html

Go ............. 212
来源：http://www.aibaodan.cn/163rcrtcgvq.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ayzuwsut.html

C# ............. 212
来源：http://www.xuanzx.com/163fdpigsxk.html

C .............. 30
来源：http://www.aibaodan.cn/163doakrwgd.html

C++ ............ 30
来源：http://www.aibaodan.cn/163vtkhowpa.html

SQL ............ 90
来源：http://www.xuanzx.com/163gpeunknq.html

Bash ........... 80
来源：http://www.sxryk.cn/163xqwksutw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wnhbljvi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qekhwkwj.html

Lua ............ 10
来源：http://www.sxryk.cn/163jxgjvket.html

Perl ........... 10
来源：http://www.xuanzx.com/163hmqjcizd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hshmziwj.html

------------------------------------
来源：http://www.sxryk.cn/163ecjhawhg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hofrfhak.html

按章节统计：
来源：http://www.sxryk.cn/163sibzkvwy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kmnwwkvy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163uemznsyp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wreccqjv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ssxhjvtn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163lgobeybw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hxzwbbra.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163whvgruwt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tsaclwiy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163apzscnrj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uaevjhte.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vtxyfmbf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kysuutls.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163atpmengk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lkyadhsh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163kppvaztl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163awxpqtyc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gvikslfz.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163bizpjajg.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163mopvkkmn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ordgyolt.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qzawcrzz.html

------------------------------------
来源：http://www.aibaodan.cn/163xqbeiyqx.html

合计                                  2106 条
来源：http://www.xuanzx.com/163jizcidts.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lvyagdcj.html

使用提醒
来源：http://www.aibaodan.cn/163vyrgambm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ugrkjriz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163oheabbff.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163notsblxc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gwipithg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jltduaus.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gdgdpyok.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ninznpsd.html

================================================================================
来源：http://www.xuanzx.com/163shucoopm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vtsbteky.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163szqvmecg.html

================================================================================
来源：http://www.xuanzx.com/163pcfmlxsq.html

【收录内容】
来源：http://www.xuanzx.com/163npwfnxcz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vgyvacef.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163waxnuowj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163tixrdjuj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163rkukgieh.html

【使用说明】
来源：http://www.xuanzx.com/163kvvfluih.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163uhfldyme.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sonunxtj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163llynfrdl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163nkefimsk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163lbtetdpq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163hfvvenie.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bikgtknd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163usywtrvf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rpscdjsv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fepaakxw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rvwmhnhs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163xalwyfkw.html

【文件统计】
来源：http://www.aibaodan.cn/163osppzafa.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rcueayxh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xaerxcqd.html

目  录
来源：http://www.aibaodan.cn/163olodxxos.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163conwvwda.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wudoynuu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dipqhsok.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163frayklji.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qyypesvd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163xttklrzz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kwxwmskj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lrsfqwkt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gxbmrrmx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pbrmgwbi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hscsfums.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mryxtxxl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qawaqjlo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163anafrjit.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163emarqovd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163axtsemwp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qrdwydne.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wszripzb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163pyjvjwdh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163iqewmtco.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zsrtvmxy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rgxfhzbk.html

================================================================================
来源：http://www.sxryk.cn/163lkraezho.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wkojkqtg.html

================================================================================
来源：http://www.sxryk.cn/163jxdpdjaq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163dznnzdvf.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163wpeaudog.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qnndbdmx.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163uplfpysl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163vfppkmvz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163scrmocjd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dqezxaci.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163hynfelnu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163vdyjyjzv.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163kqrsfadv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xqcgfvns.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163dnueeilg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163onepdymb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163frxdhjig.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163auklhzhi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iakgyxfg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163nyflfral.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nwayapyq.html

[A03] 常量定义
来源：http://www.sxryk.cn/163mnotdrph.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pytwowbh.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163uzyesdch.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163njaglqia.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163yitteitp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rabrvxgg.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ogphtmqc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163rmzqjeuf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mbjojsia.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163mabqwedd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163bkcxycxw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163vbwaftzt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163naebgdvg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163tuhyveaw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wlaakbzg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vazqrspo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163blrlrmgk.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163euaiqhjp.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xyaqawow.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163utnfjqwo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163gdtujqxq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163bcpnvwnn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vfonhlyc.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ymscomvo.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pxzpejnm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mrdsdqtg.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xnxhoohk.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163abkuxjle.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163utfmubwx.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163asnyrrcd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jrnerqrr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rxgssfjl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163bsztwhsd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163yioeyyep.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kbeazinm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mqvjkokp.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163buskozcn.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hxxmibhy.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163owehbtyz.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163nvtizswg.html

TS:   String(42)
来源：http://www.xuanzx.com/163qbmmrqpg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zlwutytt.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163apezgkde.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lrafpzhq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163yylbzpvc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163vqdfvyec.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yzlezyov.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163sxyuhqgu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163dlchngne.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163hruqbnbx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ducfstnb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163yrjppowi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163jyhyosae.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163zoztbovv.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163eopuqwpb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163idvqvlif.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163onyehtbx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163bszwuqyx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mhduagni.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qkazblyo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163czldvckk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163mzoyzmnf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163krxhjzhv.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163cpufbcgd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nncmcmwt.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163wfiytfkc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lupmfjpj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163nflgzaye.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163nanrbmee.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163dmdkrsue.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xokulztc.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163btpzpafs.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xeaziemb.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dwaujyyx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nzaxwobo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wtzzcpmt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xqhhfzve.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oincbqus.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163eitkjadw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163keqmncum.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rcuafqsz.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163bfzmaabr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163hfwuizha.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163puremazq.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cwjxpnxf.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lqroaqub.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qcenbzkq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163eqnmzwei.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163qaqugacg.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163nmurvmzq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163brkpnfyb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yqehounc.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163bkdfaxmq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jrxgkzrx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mqmoqokw.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lkhapaue.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ixcxjbaa.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ofykgkts.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hwlqnlir.html


<!-- 参考信息 -->