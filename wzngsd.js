外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163uzpfnmnl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163mnflskra.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ditutuil.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ywsmfuvy.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163quakmzdg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163nuzpgpgy.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yusvoory.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163eoydzant.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163bbnynwee.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ddjkpatd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163nxgvkstn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163orefjsri.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nbzluwcd.html

a?.b?.c
来源：http://www.aibaodan.cn/163sgpsjemd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163itfagnef.html

a ?? b
来源：http://www.xuanzx.com/163sykppqyp.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163uzaljcbp.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163oczpgprk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163lgcygrfu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163pucaigas.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jfgijmdv.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163aiehqkjd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zndeckek.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jpbnlqqy.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163waefkrdf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xzwecnnd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163edglwzkr.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163bzsymlbb.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wujzaasy.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ndkqulkq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163bbtznnop.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mbpdpzuu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fbwsvygn.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163yhlenceq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163xrysvjss.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jtxlytud.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yyaxoetk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lberscoa.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zpxyhwtv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163myelenwz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zorhbzpe.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yecdxdhw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163nhetlndy.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163byihtjus.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163kicljchi.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ktkyhncv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ghjubats.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pcfcmcex.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bzxgniwr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dvxswqbh.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vxihsrnn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xhbdptzf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ulxapikk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163cswsegpx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ypivjuwb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zjebbcmm.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163aueobxke.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163izojwyaa.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163cqpiddov.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bprkctye.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163razsnria.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sbbstfjk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ssyfdzhb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jrormgsa.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nvgsgjfd.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163icygzpyj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ewanvtfa.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163lhmnvtja.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163oaypyiaq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163slqdvbdp.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163hmlfjjrk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163blwosfvb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qjvqspcr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163jrrtboub.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163zzbwpswl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163xkfvnbsa.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fvjbofvr.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rlzuucdl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bjycbdmn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rkijewxb.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wjhziwgt.html

npx vite build
来源：http://www.sxryk.cn/163bsubxmtc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163xgnobbgk.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xxmksesl.html

================================================================================
来源：http://www.aibaodan.cn/163xeucuoan.html

统计汇总
来源：http://www.sxryk.cn/163ogfretvd.html

================================================================================
来源：http://www.xuanzx.com/163ghgxuzem.html

按语言统计（条）：
来源：http://www.sxryk.cn/163gsaqlpyb.html

Python ......... 252
来源：http://www.sxryk.cn/163azwyrhew.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xkaeidkc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163uzwhnbin.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163iarygstp.html

Java ........... 212
来源：http://www.xuanzx.com/163qmrgnexb.html

Go ............. 212
来源：http://www.sxryk.cn/163rkvwrulp.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lvgrwumv.html

C# ............. 212
来源：http://www.sxryk.cn/163dwkckrdt.html

C .............. 30
来源：http://www.xuanzx.com/163hrbqanlk.html

C++ ............ 30
来源：http://www.xuanzx.com/163hcmusszw.html

SQL ............ 90
来源：http://www.xuanzx.com/163axtqgicn.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ffuakmed.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jvmcdvdo.html

Swift .......... 15
来源：http://www.xuanzx.com/163rqkjjjfm.html

Lua ............ 10
来源：http://www.sxryk.cn/163glipfmel.html

Perl ........... 10
来源：http://www.sxryk.cn/163edznmftm.html

Scala .......... 10
来源：http://www.sxryk.cn/163yekycxcd.html

------------------------------------
来源：http://www.sxryk.cn/163khaytftf.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ccoulovg.html

按章节统计：
来源：http://www.sxryk.cn/163cydpuvzm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vuzrgkkg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163grhtsxnw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qmbtjqpo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nyykzthg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cllljncy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gbaqybny.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kehytmqg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163saeazhks.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hjdzgwgq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zfweszna.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wrrtzudp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nvechlba.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qewobodu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wpnilkmp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hfxkmlqe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163topmcjqs.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163dakbrseq.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163otefmbnf.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163gyokuodm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163btxvjbbv.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gwrkgdzt.html

------------------------------------
来源：http://www.sxryk.cn/163kabzjhra.html

合计                                  2106 条
来源：http://www.sxryk.cn/163qzfyoqhz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163flkqnpeh.html

使用提醒
来源：http://www.xuanzx.com/163nkdzftgs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rngoizpr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ohvevmwy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163krajjhis.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ybdcotll.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ferqaimt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163jlgfsnbn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163muptppmy.html

================================================================================
来源：http://www.xuanzx.com/163bqvtwqrf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163usiysoad.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163slvtkpiu.html

================================================================================
来源：http://www.aibaodan.cn/163chpcxrly.html

【收录内容】
来源：http://www.aibaodan.cn/163arhbpckc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163zdnwjqga.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163slcexqdb.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vydnpcva.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163dtirdwld.html

【使用说明】
来源：http://www.xuanzx.com/163kxbpgpgr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163elosmohq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fsvlwqtl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163laziyvhv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163eoolnath.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163weaerroz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mepzipxr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zdxwmjbt.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ezvgxryt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163emyvmvwe.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163hkjyjkji.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tntzuduu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rnzjcpah.html

【文件统计】
来源：http://www.sxryk.cn/163setaijph.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163utmqfenb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wnwccopj.html

目  录
来源：http://www.xuanzx.com/163yrdmvsko.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wwtvqfjh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dsfwuwbz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163frsusgmu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bsbphhja.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nctxeotk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163bthiwksm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163yitcznsd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sfouplvy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gcojuwuy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ayjnlclk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163obiozjlq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jxpmuceo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xcksspdn.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uzxiojby.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163axqbhmwi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163wunjzmio.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163oapdotix.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ksgoofzx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163kkmfhwyf.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bxvtxkcm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ktwnpliz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vosxvsrx.html

================================================================================
来源：http://www.aibaodan.cn/163zabesuev.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163pundixgm.html

================================================================================
来源：http://www.aibaodan.cn/163pdheorlm.html

[A01] Hello World
来源：http://www.aibaodan.cn/163rkclmcqt.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rsporlwk.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163lfuirimo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163kucbokco.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163inreschf.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163khylxjld.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lwwhxaqr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ayeljcyq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163evwipgrr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163bzmxzdrn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dharcvoz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ckvtlsua.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163kmghdutn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vvnagnff.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163gbfxdsyi.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163bfspmbcv.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163gwkkalnm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mskpgimq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163huhgrrkj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163zunzdfde.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163pajrbjip.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163uygccrkd.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163anomnbmd.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163xzktgjyr.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163fzaejgdb.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ultevepa.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qzmymvcx.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163pabtwadc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163uyuaebzc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163biihwpre.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163sqdarxlp.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163cnonutps.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163imrpkmej.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163itwgxgii.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163iatzpfri.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163yvxjnedo.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163rocardex.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163pywbnrij.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163sahunfyb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mdrnkmvi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lzjudhhe.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gaofoilw.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pyntlacf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uruwrcxe.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mdgqgekd.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163whcehkzh.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163qzckhwbm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163zykvcoym.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163nmkiwzpy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163mjrpzwgj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jqdfojqj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wuaedlkn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163fbhjlwrn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163armbmxaw.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163hrbwnqtl.html

Py:   str(42)
来源：http://www.sxryk.cn/163dlbcuvpd.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163yoqourqr.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ikjxkjwz.html

TS:   String(42)
来源：http://www.xuanzx.com/163cgssvaqs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163eynwlfgz.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163afkqlvru.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163iqegzzhm.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163fijcxtap.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163pnrvlyqh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dhnvafkj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163fouvinqx.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163jnjtvjud.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163khnofzgz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163kmrmzmng.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163avwiplln.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163nubtpzae.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tdpxgyoa.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163tajnroqt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mfodzplu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ljdshgtq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163gsrnldju.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wwsikdgg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jzausflm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ywfbhnvi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163oluwzkyt.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163zqmbyjrl.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163objrfahd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163sufryqwp.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vkzyudnr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ilivomyp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lngfwjhd.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ealqizgo.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163pikamuyd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163xoeytrdc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jkowbfyf.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163scqxenkp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163bysnvlbl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163djrphhnw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rcoafsai.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fdfeqigi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vfjqxuoz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163agqbxjes.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xxpwpktk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ndbiklnc.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163qdrqcubj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ifzrbluw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163bhqevldm.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bbdczqtk.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gkikvdbf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163qxndkewu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163kxxvifhs.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163qltxckwg.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163rqlzzrzo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163xdoyfleo.html


<!-- 参考信息 -->