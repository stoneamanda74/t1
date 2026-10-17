外链999!wailian999！

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163yzctkter.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163gawyejsa.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tjetzqgq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163sdzljupz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qhgeiobs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163vgrvwysp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fclqnsfn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vrjyuibn.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163kflwdpxm.html

a?.b?.c
来源：http://www.sxryk.cn/163vwjgauxr.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yirlosuq.html

a ?? b
来源：http://www.aibaodan.cn/163pjibajfj.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163nsxnrece.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qiaqgzsm.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163eihvwlcl.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wpwfsbgt.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163xobkliab.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163wwbppyrx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bcbyzfvb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gpjgapth.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163mvwfjibl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ivrqleoh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163yvjagfsi.html

structuredClone(obj)
来源：http://www.sxryk.cn/163cworqsvc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163poucbmvn.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zkzsvwtf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mcmxwthp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kbrmndkb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163buypmcbb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wndxkkmh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ctouyahk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sswxacwf.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lxolxyen.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163afwxaztr.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163gyhkudmx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163zuowstcs.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kupsjvkd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jmjwpvsq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ymsocunx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163wljbrthk.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kflbgaxp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pyzlqqex.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uswesjco.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xbzvehda.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163rtijrmuj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163rghpwpeh.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163rpdxuzkn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vdgjlbxu.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jgysyrst.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dkgxpive.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kpkufpbo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lmmaqqcs.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ubevkkkc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163evhahlkp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163yzzlcruo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ziznqmro.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rszdbosc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163supkjplr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163rakbkdep.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163axpvveci.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wpccvhoh.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kuzxydxq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fbznssps.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163laoixpyt.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163iyqygdoe.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ssrpxdpv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163erhlktlp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163srwzjhaq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163vvrqzarb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jydnyezm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163cdhbxknu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wtgxmazy.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163owayaqtp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lejqnwfu.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tiiicfvo.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163guvkrmax.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163lbeckoph.html

npx vite build
来源：http://www.aibaodan.cn/163jkdvkldm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163likztrdb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ikciblyv.html

================================================================================
来源：http://www.xuanzx.com/163opcbskdw.html

统计汇总
来源：http://www.xuanzx.com/163fkvyfsbw.html

================================================================================
来源：http://www.sxryk.cn/163fxwkkzef.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ykxutjog.html

Python ......... 252
来源：http://www.sxryk.cn/163vrhmxkcw.html

PHP ............ 252
来源：http://www.sxryk.cn/163kzymwetx.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kmhmolfg.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bfvcltzz.html

Java ........... 212
来源：http://www.aibaodan.cn/163aflzmspu.html

Go ............. 212
来源：http://www.aibaodan.cn/163rbceawkg.html

Ruby ........... 212
来源：http://www.sxryk.cn/163fpvqchpr.html

C# ............. 212
来源：http://www.xuanzx.com/163exdknhae.html

C .............. 30
来源：http://www.aibaodan.cn/163ctmnqacn.html

C++ ............ 30
来源：http://www.sxryk.cn/163faxnskgn.html

SQL ............ 90
来源：http://www.sxryk.cn/163ahzokxzq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163iokotzix.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163sobpnmgx.html

Swift .......... 15
来源：http://www.sxryk.cn/163vzzrafpk.html

Lua ............ 10
来源：http://www.aibaodan.cn/163fdficcwp.html

Perl ........... 10
来源：http://www.aibaodan.cn/163artyojqe.html

Scala .......... 10
来源：http://www.xuanzx.com/163ywyayfbf.html

------------------------------------
来源：http://www.aibaodan.cn/163mntjnvvj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xxfewnwv.html

按章节统计：
来源：http://www.aibaodan.cn/163cczdqvsq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ptkafltu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tiugznlh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ottsedze.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nqfrmkus.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xamycjxs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oracrygq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tgpnjmns.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ajlaoayz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dswzmcsb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163oxnreuoi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jsibwhfg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bdkbmzlb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ztbnbshq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ipzneqvs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163uppodemq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rgogxltm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163nakaqrdq.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163qkpgutym.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bajehwst.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163oydzxget.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163xmtaxuha.html

------------------------------------
来源：http://www.sxryk.cn/163gfixpgvk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zxmyegik.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kujpbsmr.html

使用提醒
来源：http://www.xuanzx.com/163afngsdzh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yawbwgmb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163fymrzqlo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163sjctqheb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163mubvfldl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163sfhrjoxt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163chtalhyj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163omurqnxo.html

================================================================================
来源：http://www.xuanzx.com/163qlcfynjj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vkvsmxdo.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163bkozkccv.html

================================================================================
来源：http://www.sxryk.cn/163xutoropb.html

【收录内容】
来源：http://www.xuanzx.com/163yiqovjqu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lxvoqzuf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163vkelobrg.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vtzjbbph.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163gzzskdxa.html

【使用说明】
来源：http://www.aibaodan.cn/163qzhnelyw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163egguxdyc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xuxgdotq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ulyhqxoe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163xskjkuod.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jtqzyltc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nolkxhge.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zyhkqkxf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163geohghxm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ikrfvnrm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163gircbgba.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163aitdqmmt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163haltjkix.html

【文件统计】
来源：http://www.sxryk.cn/163rhmspoow.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163holnqvhg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qitmdpzb.html

目  录
来源：http://www.sxryk.cn/163npvyweec.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163olssupph.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pbbodheb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jaugkzdh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qxdacoia.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vcmindxj.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163sbgeavyh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163btmhpukx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gflbptuq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rshkqpnx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pudfeexc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163esivayck.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wumqodvl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fxzjighj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163abqgxnkp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ymvitwbk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xxfniadd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mzzlntgs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ubwnuvle.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mqzryihi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163ekeadiid.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wptjjlgg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eelduuqv.html

================================================================================
来源：http://www.sxryk.cn/163linrfghx.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yjpijkvz.html

================================================================================
来源：http://www.aibaodan.cn/163vvdpklmt.html

[A01] Hello World
来源：http://www.xuanzx.com/163cekmqsqj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163rzmjwtia.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163pnyrfpmd.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ewlnpkna.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hdubviop.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163xdtwjnym.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163srlhcbbv.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ipklbbxy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ygjwcfwx.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163kpjhqjcg.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163crmwwwne.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kwlbgigu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163vrcdpawo.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163yateutfh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163goryqmes.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163xsewflqq.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163vyhpwbbe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ucxdyzou.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163zfoapsxh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wvxlhclc.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163kkgxrfim.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163fmaohyqo.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ciqsjeqo.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163aghgetny.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qfbbnxal.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vlndnkbm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163aazrjfct.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163yhuqmkvb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163xymvioaj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ujylovzt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163funvmrql.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uslxmpix.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163qgprpeip.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163pcqftldc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zwqxafix.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163cyrcqkaj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163qnavpeol.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tdaampcn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163qwkkcphz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zueroypk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xqtxfgvu.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wjmlkype.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vudtgnue.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gcchosgy.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jujxurxu.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ldorojfp.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ywpxdddb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163kscjsliq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163getwxfeg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163opubaibt.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163clewprlh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163plrsolxq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163dqwbbqzq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163sthbxqqt.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163zzskcvof.html

Py:   str(42)
来源：http://www.aibaodan.cn/163gifpzmko.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163deccuove.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ocvifqlh.html

TS:   String(42)
来源：http://www.aibaodan.cn/163jymrdydh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163kaqzfpav.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163twcjoytx.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163czspcwco.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163uofutbts.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zyvkqngs.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163knvhpjkf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163mhoqxwwi.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163nxfytpgv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163hyvkzkhr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163jkasfxmf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hwxaupow.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163mselgccm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163agdiujie.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kigyslnq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ypnlaevi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wdouwdnz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163eorqkimf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163agvhfbno.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ntgzodtu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163mcbbvgmh.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163akpaqvoc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163emcekzcp.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163bsklhpeq.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163zkfahrhv.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163hgocbsai.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xkotmvuy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gyyjvdlt.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163dfyhgzvy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dxcqtrsr.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163vuoqaktg.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163echkwbrr.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ozaryxka.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163meypmwgx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jcbhethz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uuztqzyh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kkusqvhm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yhrkrlis.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163fwxczgbd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163avudjpst.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wgvwrchu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163drjqpkrr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dcbvafgo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dkyiyzvi.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kqraomgu.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163jnkwntuc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163rukteafd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163nqllkrtu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tkpetlme.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163kqgdpzha.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rqedvmay.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gapexnal.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163hokwtquj.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tqqrxtdx.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163htanldyd.html


<!-- 参考信息 -->