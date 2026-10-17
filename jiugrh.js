外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fwnkylnp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163naennsuf.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163qghprbck.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163oxlydidh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163oqimqete.html

a?.b?.c
来源：http://www.aibaodan.cn/163owajfeef.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163thvddvnk.html

a ?? b
来源：http://www.xuanzx.com/163bxuzqfbl.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xuujrfds.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163tkryrptg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163otpwfptk.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xytdhzvp.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163neezyfkl.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163lyuhuqts.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163omdcofex.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nwamnjmm.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cclqbbzp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zthaisxg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xyijkaxh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163iuplqvhz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163csfnauxw.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163kxwfsuja.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163urbtuijg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163uudzznlq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163vypnvdwp.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163lksxssdp.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ooatvbgg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ifxeeaix.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xftumspj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hpjbezkd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kazchlpi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163magnckka.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nkduuwdf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gxvhunzd.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ozfhqyof.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fwrqbnsb.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163gfomqxgu.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163sdacinsf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163tmxitqqk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rtjccuzw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163xlxcieet.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ozbdwlzg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mkpkbqpu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cshmgudo.html

[U105] JS：节流
来源：http://www.xuanzx.com/163nedkyhfu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uvjiesun.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163bcedcxzc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163okdhwarq.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163aueoymka.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xvhptnhw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163eroubwhc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nwzqcfvm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163tljqrdlj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mmerbhog.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gtlrcixa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163jogsvpbo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xqtvibqw.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hcwiqgnq.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163glkqrbis.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uqgioiyw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ebxyfcau.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fwvitdzt.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163mttdbsat.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vmtrlxwx.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163oywvkxiy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163fgovkewo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rxizbmek.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163lvsnbpte.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zkgnewtr.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163kfciknzt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ujwsbphi.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163keoajfki.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bkokbmzd.html

npx vite build
来源：http://www.xuanzx.com/163fpxjrhmy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jzyomijr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163priryupa.html

================================================================================
来源：http://www.xuanzx.com/163mdsdgzzd.html

统计汇总
来源：http://www.sxryk.cn/163nvixrcua.html

================================================================================
来源：http://www.xuanzx.com/163kyengexi.html

按语言统计（条）：
来源：http://www.xuanzx.com/163noytrfks.html

Python ......... 252
来源：http://www.aibaodan.cn/163oaobetos.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vxgjqdsw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zkmfltji.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163lqbvtcaw.html

Java ........... 212
来源：http://www.xuanzx.com/163eljofbca.html

Go ............. 212
来源：http://www.xuanzx.com/163ggiecavf.html

Ruby ........... 212
来源：http://www.xuanzx.com/163upmymlqr.html

C# ............. 212
来源：http://www.sxryk.cn/163udieiysa.html

C .............. 30
来源：http://www.aibaodan.cn/163xqrwbuuu.html

C++ ............ 30
来源：http://www.xuanzx.com/163avasddbv.html

SQL ............ 90
来源：http://www.sxryk.cn/163foggzzad.html

Bash ........... 80
来源：http://www.xuanzx.com/163lwexturb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gnggtsmf.html

Swift .......... 15
来源：http://www.sxryk.cn/163inxgeqew.html

Lua ............ 10
来源：http://www.xuanzx.com/163gsdjjiua.html

Perl ........... 10
来源：http://www.aibaodan.cn/163earxbwoz.html

Scala .......... 10
来源：http://www.xuanzx.com/163lcywdcfx.html

------------------------------------
来源：http://www.aibaodan.cn/163gfjdrful.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163olrwultn.html

按章节统计：
来源：http://www.sxryk.cn/163kaczjtlj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kwpwuvvq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wzhtfjcp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ovvsslhj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aexhplsx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tkpnhpwd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vdofxpul.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qblhjxnb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tqwymisg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uenbclze.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gjoadqgm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dogrzsfy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163itlmpkww.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qshqihgm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gqhzbdag.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163danbponu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163civknsmn.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163svtnosch.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qqaeqzep.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163omigvpyn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xzcoebxx.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163nuxkscdz.html

------------------------------------
来源：http://www.xuanzx.com/163kztpmkax.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163gjjkcsvp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163upvtntue.html

使用提醒
来源：http://www.xuanzx.com/163baeeqkji.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mumrgytk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wweklqtk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gvdnlbgs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163dbrrjjns.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163amjoelsi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163vjppimor.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163uvgfwjch.html

================================================================================
来源：http://www.sxryk.cn/163rixznbvp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163pfhytapu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163foklnxyz.html

================================================================================
来源：http://www.sxryk.cn/163kujngbli.html

【收录内容】
来源：http://www.sxryk.cn/163fiawwsky.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ouxvszmo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163iwxswytk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qruvroqa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163fikxyifw.html

【使用说明】
来源：http://www.xuanzx.com/163rnynyxrk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163nejbwuut.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163uqznbxkr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163baeyigwg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kinsrbea.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jhnfrqed.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163lcbmnruf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163irmmacse.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cpsyasam.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163diapehbx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zprgfmvf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rrtawcsi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163xjoawxgd.html

【文件统计】
来源：http://www.sxryk.cn/163anrcufad.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ivzzboql.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sjiuerhu.html

目  录
来源：http://www.aibaodan.cn/163rhquitmm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rmlfmajk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163cuuxyvrm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xzaerfdr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dxrhbupu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qlwhroui.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163umwfnjcf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163athmrgma.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tjiacpyd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tqqzwlth.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hddqbdcf.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zwwdnget.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gudpyrxu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qoqgommx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wrjszyzq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pwvdzzye.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163rcljryko.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rjldkoeh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163icvtztdd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163xssmalnk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tojvjpdp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rozuuwhe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dfqwqnou.html

================================================================================
来源：http://www.sxryk.cn/163qzmdbrcu.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163tmhblgyd.html

================================================================================
来源：http://www.aibaodan.cn/163ajrfdczx.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mdyqdjqu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163iswaqqmi.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163xyrvntei.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ufqmyweg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163rnqqkskk.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jfbyulgo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lxszbtvq.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vqophhav.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163wyksyeai.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163gwxkbulc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163iuyprasl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163btrigfmj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163kxtngzjn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163xpiyujhn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rmlbdmzx.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163iiqvsnvu.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163xkbostoj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163uhcqcmaj.html

[A03] 常量定义
来源：http://www.sxryk.cn/163thboieze.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163jelruiwr.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rjvjfcyf.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163hzocdmxd.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hzaddqlp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163igskahxc.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163eakevben.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163gukxcwca.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163llvhyvhv.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ntevslqa.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tcwjznsq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163pcddctxa.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163nlylnfrg.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163aqdnpzbk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163jvuvkzgr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163twliseig.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163uhwxbuiy.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163mbqwvdkw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qpkuthoo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163aapmobxp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ruquhbcf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vwzlmnvt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xnurxdle.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163itrdmihj.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163snylgqij.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gfayfbya.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dinanwnl.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163mwzfmcti.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163yntrzohd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163laazidaj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163cydzoccb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163trcaejhx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ikrqpigj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163fqnjyxjw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163qtfiempb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163vymkmjxt.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163nlycbvgf.html

Py:   str(42)
来源：http://www.aibaodan.cn/163vufkfawj.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bzumpvez.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163vmicwcop.html

TS:   String(42)
来源：http://www.sxryk.cn/163ochwsfuh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163seqfriva.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163idbsfmdi.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163czwdffnr.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xlvidrfl.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163wqiqddvr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dljrwyzu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163rcxkuumj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163bfernuqn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163vmqenaez.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163hflypans.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163wjwseehn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163bxkksnby.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163miywwdrg.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ksirjmju.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163aqetzrml.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xkhgsnnr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163jbsjzegx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163schuvbav.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163erdazmvw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163lqorbhtj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163lpyhygrh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163vgpktzog.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163amvqwemn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nblqsnzo.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163szmkjsqi.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163uyormdeh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163bshmbfyi.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163aizzpzpt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163lbcmunoi.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163djvooqrw.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163xxaohucf.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ytbdyjlf.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163vsygwcna.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163luwnycaq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vzykxqxi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rkksiuia.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ctfmvsnj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163gszblnld.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rnrknnco.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zbczbouz.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163tzpkgnjj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163pibrotnm.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163zugdenwy.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tjbodacp.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cwsbouei.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163albzymbb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163brcglmjr.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ahmavvxd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163onpminbb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vwhkphnm.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fxuiastj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163jyoopams.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ncxraphn.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vdyinbfm.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ywccdoiu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163koyjxams.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163vgyjhdlq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dxrtcfir.html


<!-- 参考信息 -->