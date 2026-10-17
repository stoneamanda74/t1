外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163wseomhcb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163znkqlrct.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zkvassih.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163akgbdhoc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163jgtnbasw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vruyvesp.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163mcdjhsjg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fjqsyvbe.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163jtltwrki.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vpdqmrnr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163humutmmk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163dhivigci.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163yiwmlqkn.html

a?.b?.c
来源：http://www.aibaodan.cn/163zpyqttii.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163sbajyyiy.html

a ?? b
来源：http://www.aibaodan.cn/163fkicivnc.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xajcsefn.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jlxnsghe.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163fzptcsgn.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ozthrefp.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163wjzbgket.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163inmrkziu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xwzphdkc.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163puxkktbi.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rgqdgfdp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163byoxzkrc.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zexybmke.html

structuredClone(obj)
来源：http://www.xuanzx.com/163wwswtvty.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163npufwuka.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ucmlpdef.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jsepgvfu.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tnqgyyjs.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163oawmktts.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wirpffky.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lmgbudmh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hmdcqkad.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rnpvrnzv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xxnqwkka.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ohvilnfi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163fswtxbuj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163izrgqyck.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wkgjpffj.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rvzxwvsb.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163seoppqbr.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xwajpyid.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163pptdmydr.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cseucaxk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rdjnlsql.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163qxnbqbbr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ppalzufw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163pnwoyxsg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kfraplxi.html

[U105] JS：节流
来源：http://www.xuanzx.com/163gehrhndy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163yjaptdhv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163yzgegutk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jgtwdgwe.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163urgeyofu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163nlfapajm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163oczlykxq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163fbmnqggo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163sytgeavt.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163scmzwrva.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xokledir.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fekcbxgz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163evelarax.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163fegthvwj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163qfyoboav.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uktlyguz.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163uaihudlk.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ucfxqobi.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ubewjnpx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lusshlwb.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ihsmdkfz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zpxrcrzn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cddunjgw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163gjfhclnl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163egbaqgkh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tgimgbwq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bsbuqjzd.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163qcwfpvye.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jahjceuh.html

npx vite build
来源：http://www.xuanzx.com/163sfsgoexk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qjdslvne.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163uzlgscfj.html

================================================================================
来源：http://www.xuanzx.com/163fhykpqxs.html

统计汇总
来源：http://www.aibaodan.cn/163zgetejqh.html

================================================================================
来源：http://www.aibaodan.cn/163ntbbrdrc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163oifvnoxg.html

Python ......... 252
来源：http://www.aibaodan.cn/163jbjjuqrv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163bmuqfifa.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ucafzynw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163fayprhlo.html

Java ........... 212
来源：http://www.xuanzx.com/163icdukbuz.html

Go ............. 212
来源：http://www.aibaodan.cn/163xjpxnimb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163adqrdpep.html

C# ............. 212
来源：http://www.aibaodan.cn/163tcgfmtpu.html

C .............. 30
来源：http://www.aibaodan.cn/163wffpllbp.html

C++ ............ 30
来源：http://www.xuanzx.com/163uywwqavn.html

SQL ............ 90
来源：http://www.xuanzx.com/163poirilwo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cczjtusu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ozbljuon.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fshmtayl.html

Lua ............ 10
来源：http://www.xuanzx.com/163jltnqwtl.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ewcaxqxh.html

Scala .......... 10
来源：http://www.aibaodan.cn/163uiojelak.html

------------------------------------
来源：http://www.aibaodan.cn/163lvyfjovw.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163inucrlsd.html

按章节统计：
来源：http://www.sxryk.cn/163yhozphtl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163sysjoorj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lfkzmmfb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ljfmbxux.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163akxfkiky.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163yazmiplz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kftckvgd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xdseyusz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163orkzqxic.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tqszgjes.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163utkixxdb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qwwjvxkq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163reopsrmd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ixhwqhde.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163iolovmvu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163shjbtfoe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pxzunyvi.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jskfhpib.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163khdaockz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163vtjbhgps.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163rqcnacfa.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163sajdyqoy.html

------------------------------------
来源：http://www.aibaodan.cn/163lphhlyag.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163sktzvdcr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kfxkzevf.html

使用提醒
来源：http://www.aibaodan.cn/163ncdmgsqk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lxgnohvd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163utifkvhf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xtwdmfns.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ktijdyvl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163gqjtrfng.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ilwqqays.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163bzxqlyva.html

================================================================================
来源：http://www.aibaodan.cn/163ojvevrbu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163jmrhcvvx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ynmqzwim.html

================================================================================
来源：http://www.sxryk.cn/163hrjrvdbl.html

【收录内容】
来源：http://www.sxryk.cn/163rliwdfqf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163sutlmpua.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xkkogiiw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jbfpjdao.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ratubdgv.html

【使用说明】
来源：http://www.sxryk.cn/163rivfgdrk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163qtmjpcra.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163cqmxqvez.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163butuetik.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rbxeybye.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ebwwnmtc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ffujvisa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163gtylnwdw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cavtofde.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163nhcexqne.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163prgjtugi.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lnxdvlma.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pxdjikor.html

【文件统计】
来源：http://www.sxryk.cn/163zmhltfdh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163qowyohcp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163skajhaja.html

目  录
来源：http://www.sxryk.cn/163smsgyuzx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kzokuqux.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kklnwmxs.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rqyqhjlf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oqkynckc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dxyksfvq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163hiqxmufs.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163iblpzvek.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163iyqpgkcs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hrlzqfwh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tjqrqveq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fjjqwthk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xucouehb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kyysglqg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zhyjkfwt.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mjmazjdy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163lbrjpugk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yavosetq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163cgzupoqk.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ibgwvbes.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163qowuujfw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163unossyna.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163binmqxyq.html

================================================================================
来源：http://www.xuanzx.com/163svfhktqx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163frqykzaz.html

================================================================================
来源：http://www.xuanzx.com/163kokchytq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mbynpoam.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163xwojokjr.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163vwvdtsbi.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163tehutzxj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uwheqovf.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163iedtohyv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jsnctgzc.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163tgtliwpf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lpfcczlq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163txptimqk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163uribmwrd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163azdcfocr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163qrkfxsgv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163mrupvbop.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163wzlkhvax.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163cqynftcx.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163gamdltmw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163wsuhmpgb.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ojwnzqhe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163kuicrehc.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163khlyxyzb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zbfouzey.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ltdsmqwy.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163iixatkzt.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ayxzjgea.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zydoazrc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xqtzbezb.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163dctiglym.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163puaffgcj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163zqfaerdh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ortvswru.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163jseubroz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163txthnncp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163uflmawkm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163lwuexqyj.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bkmizjui.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163unusxcuu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163uerljefs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163epzpubqa.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jwjkmdpn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163cuxlizue.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dxkdvcoi.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mwkwzfwl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ojohnskm.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163swfvmbil.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163aldqwtvc.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163xlaohutg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163vvqtowin.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163nnyjxbcz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qsxuajcd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ifjvffll.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qkpqqznv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kvtbrxlx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163tvgscuft.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163dvisoriq.html

Py:   str(42)
来源：http://www.sxryk.cn/163bwfkdgvz.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163htepqqpn.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163vpkwrrga.html

TS:   String(42)
来源：http://www.aibaodan.cn/163bwtasoef.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ldtotraa.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163uxpjgbuf.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163coebtmos.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xjpuabfk.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163xuvaciio.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vbiixhjg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ohknwanz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ysfdzkma.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vozqxwdn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163oukenmdm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163uvuybxyt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163aaynzbbf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163fykbgzbp.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163idbnbhly.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163frrqtozg.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163idbityzm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163kmuuupkz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163etmjucxg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wzjuijld.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163moisbjky.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163adfelpzo.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163jxgobkvr.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ofraxayb.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163cwrjwybt.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163fimaybhx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163mrgydaju.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163sgymrtjm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163rsgdsqbd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163hjgiynic.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163mmbyehmh.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163hzfljvbg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163bebecjjs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ixmrhzfm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bmaxhrxt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rbknxgku.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163czpebxuu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eoimsuwo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163vhoftavl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tqjjzfgn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bkulsppw.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163xfjlkwij.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163cnqmuozd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163hjcuumag.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xlkzwwxq.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dmyfytbx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zvwslyml.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163uisvtlas.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163liulzafj.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163gwubgakv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163hntxlqev.html


<!-- 参考信息 -->