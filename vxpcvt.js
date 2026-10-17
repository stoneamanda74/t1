外链999!wailian999！

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gxhqedsj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163dmccqlnw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163bdybqlet.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163muxczbmt.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163emkdhlor.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163arrvrtxv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163nkoxucok.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nnvukubg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163xwagcsnw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ivcfpwsa.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163iekaktkq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tijtjmkn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163sdvespim.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163lbdrtuxp.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ezyiblbs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tludgssu.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zjanbkfq.html

a?.b?.c
来源：http://www.sxryk.cn/163dxbkdvhg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ovzulhnm.html

a ?? b
来源：http://www.aibaodan.cn/163mlejwhhi.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163lvyouris.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163eebenyfs.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163naurggyz.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163zybjkvub.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hrgfclmz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wziyjori.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163qapoylnf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pvjckevz.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ipjxfgbv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163yncieruw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163smwfpmeo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163axwqpcif.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qogrtuyb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163zzdyhlnj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163nxfonhhh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163omgmpmgo.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163vsqpgzmq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jatjresv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163wwmdrthf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vmqrpgvd.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xoucrrzj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mpvokiqj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qwtgqlpp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163qduhgxxx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163bqzzsity.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163psyttvvc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163svyctyrf.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dkhddhni.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163osuumjze.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163bgjxnzib.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kfcjriaj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163damcouuq.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163rimckztu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163hpmmfcxw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jhhaiawg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fkrddxji.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mqvejnup.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lfuoiimv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xroinraz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163sivaoxrt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163whcucqjt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pujrdssb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163eghozeus.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mjrkumsn.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hlxfpzdm.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fmmltdlg.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163shzioydb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163iuwggsce.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ecdjqjsa.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nfzxtyuq.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ixceehvq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163lqthcuyo.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163spdizzdo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fencmtqi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163rjrifell.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pzndyvpj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163kvvgxqty.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cyuuwxbx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nlfbkbuy.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163elcpruvq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rketwjny.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163bjtaablu.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163fpuzuwep.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163nhtqqsls.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zxqnttpe.html

npx vite build
来源：http://www.aibaodan.cn/163kkwbnufm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fglptamo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qfcyjfwg.html

================================================================================
来源：http://www.aibaodan.cn/163yqnyuszz.html

统计汇总
来源：http://www.xuanzx.com/163yphmfads.html

================================================================================
来源：http://www.sxryk.cn/163xnvzweda.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163plhmatox.html

Python ......... 252
来源：http://www.aibaodan.cn/163kgezojau.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fhypliqt.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163epjqiodv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163jukwhzxa.html

Java ........... 212
来源：http://www.xuanzx.com/163ksckkqtr.html

Go ............. 212
来源：http://www.sxryk.cn/163rodvpmvr.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ifhplegr.html

C# ............. 212
来源：http://www.aibaodan.cn/163qiggzmqh.html

C .............. 30
来源：http://www.sxryk.cn/163ccfuffuw.html

C++ ............ 30
来源：http://www.xuanzx.com/163ptuzutyc.html

SQL ............ 90
来源：http://www.xuanzx.com/163rqpykxzd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163yrylmvwc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ybsrbqhn.html

Swift .......... 15
来源：http://www.sxryk.cn/163wiocszjl.html

Lua ............ 10
来源：http://www.sxryk.cn/163rswqadeb.html

Perl ........... 10
来源：http://www.sxryk.cn/163oikhghte.html

Scala .......... 10
来源：http://www.xuanzx.com/163zbrerlfj.html

------------------------------------
来源：http://www.sxryk.cn/163vqyzazmj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bnvyubxq.html

按章节统计：
来源：http://www.aibaodan.cn/163gprddllq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mfvqxvxg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pvvsplzf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gosaxxrv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163usglgvdo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163azvabrmv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nkbtlpci.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hfuioskn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jhdzmtgg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kxqliajq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bkxutzwr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jlcacpdn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iiwqkgex.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rprerhmf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mjeqfkua.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163avzuheyu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dujubslc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163kisqonsf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163xjkljafx.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163hewclqze.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163mzzcpysx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163sxsffpjv.html

------------------------------------
来源：http://www.xuanzx.com/163qekxshvj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xbgjtwki.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wuoitbeu.html

使用提醒
来源：http://www.sxryk.cn/163dmlaqqtn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zmhdnmht.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ytfvtmim.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163olbmeori.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xsdpzpeb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gcgcfloe.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hkpuwqyf.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163fdhfevdc.html

================================================================================
来源：http://www.aibaodan.cn/163nqnxlyug.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163wzmsfmkb.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163anaorxev.html

================================================================================
来源：http://www.sxryk.cn/163ypcatess.html

【收录内容】
来源：http://www.sxryk.cn/163izaqhzvs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ncpdvlan.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163pyhmodjz.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163zpqpokga.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ykodmrpv.html

【使用说明】
来源：http://www.xuanzx.com/163btbibodz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ndrcdfft.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163tvlvbbfi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163kopeigou.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rewdmbgl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163frotrard.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163zkunlshx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163tegzhkki.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ljtcuvhz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vqunlykk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163czohgwge.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163dxekalwg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163hrracwxd.html

【文件统计】
来源：http://www.sxryk.cn/163rfidlokp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qmmljkim.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wvenqabs.html

目  录
来源：http://www.sxryk.cn/163sxpxuolx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bpaqkdfn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163lwgkhlfj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sprbubne.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wgfxclqf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nwxvjnfh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163uivheqva.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ysizbnun.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tlwmbwie.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fwzuvntj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ldizijim.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vsjzyiyr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qbcpqqyu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163obeeafms.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vkdowihm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163fxgaekcw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ejoazoaw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bfnwgzmx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163vmabucqc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163yitbtwzh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163uhshycln.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yqjoepwu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163taeoumdb.html

================================================================================
来源：http://www.aibaodan.cn/163vkyytigc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163lnwgqcfs.html

================================================================================
来源：http://www.aibaodan.cn/163kcoyrqia.html

[A01] Hello World
来源：http://www.aibaodan.cn/163iprqaidt.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163kykemjeg.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163leayvmym.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cafpbtky.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xbyvenvp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163nqnwflao.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163povhvvuv.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qwwacpnn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jdysjvff.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ckcenvdy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163rxshourb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163otmeisis.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163oqnzywiq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163kmkoflfh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163acdtsqut.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ojkfwtmw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hteuejur.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qwevxjhm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163jjpppzna.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163tzujcmro.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163aiekvcoo.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163klbshtsq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163zsewgbxf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163gdsejwcw.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zsvffwfe.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163bjovwmsj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163upliqldv.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163glzehwfx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163bsvdwhyn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jygzggpq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qyxafrjq.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wnvpgigi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ccckhnqs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163jvlbqals.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dawomihw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163bmdfsixk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163axmzorms.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kskhvkee.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vxlaydse.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tqklfbiw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dllpsvfx.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gmckpkqj.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wodplzee.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wyfwovui.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163slqodfnu.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163cvxupaif.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163dqjjzzls.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xvfiuvmk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163iwglviki.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163hidzcfgr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163uejdblkd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163huoyifpc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163nokzcdlu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163nabwdqdi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wqwjrhfd.html

Py:   str(42)
来源：http://www.xuanzx.com/163basecazg.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ajucccbm.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ttiatfes.html

TS:   String(42)
来源：http://www.sxryk.cn/163gdydpqzh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163xgnqfzqa.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ktccznli.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163xqyxuyay.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163dhijpoij.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163jgluzlwb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163nwormrex.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163cancssii.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163njjsobnu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163rjhrgjni.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163hmzbnmhu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zbusdkem.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xwvtqqre.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ekcrgjed.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163pmmfnkns.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163cxonckpn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163iytcwogi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163cntjzkvn.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fcjauigw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ytqwsxfc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ftchlpji.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xbynflqa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163virwcama.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163etakiani.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163rcjxtxlw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163xjjjfqrc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gfmobocz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163fpndccpe.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163imvjowsw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163pxvyikmr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163cmpnihqj.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jouiavll.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mqwgwxgh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wurlohah.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eusvpiej.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fhnxnwjw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nawaarob.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mdukktce.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163mcizbwpt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163edxuvxce.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163slomosug.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163lkucgsdp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163jpdjrmak.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ljylgkbg.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163snduyfvf.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ruesmbso.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163tooxyxfr.html


<!-- 参考信息 -->