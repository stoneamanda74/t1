外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163wdwtnjhw.html

composer require psr/container
来源：http://www.xuanzx.com/163qpvtiltj.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163qxkofydc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kajgykzq.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wcbllyht.html

composer require twig/twig
来源：http://www.sxryk.cn/163jxxkfxdd.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163alvkcyfv.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163llbfayls.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163olqxtswu.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163pcvoqwuc.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kzumbtnd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163msvkdibm.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dkcmriai.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ltaqfamq.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163bbooykky.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jfpdzocf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ozfsfbpa.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zoqspjoh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163rvsgdgxl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ljfxujxv.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163stynmetd.html

a?.b?.c
来源：http://www.sxryk.cn/163giirqoat.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hyxnzjfd.html

a ?? b
来源：http://www.sxryk.cn/163ojwcduvz.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wwfwxary.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163beqtnhgk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rosksenp.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nklkvkuj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163khtcdhiv.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163sliwfbev.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163uztbirtx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wkmqszme.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163dpclwpro.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163mrygncnt.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ljyfjmfz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vfxstlqf.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rnmymoea.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163bmcucstg.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gffybpjx.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163rthnuoel.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zpoyfenx.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163plqtiwpv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kqzgfmpt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ukmzuyji.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cashpuqf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qknywoff.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163egandeyu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bovgdxsg.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163guwivgia.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163sckqfmbi.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163sfkvbjny.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fwhrvjwx.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163tdgpwpna.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lhueehbl.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uupzoyhg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uvxpttmv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163zzwwujdm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jxtglisa.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163urygjalo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mobmpieb.html

[U105] JS：节流
来源：http://www.xuanzx.com/163aoboxqez.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163yhgwlmrt.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tnfoichf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163twbpoghv.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163legvesuy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163kxrelujw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wjqgudcm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ummnjxzw.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163hmbvgkmq.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pihhvicd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163sxvmrmix.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163rzcjkpkh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jdvzscah.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163omvjduwv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163anyrhlpj.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163jvoxmyuo.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jdbiyrru.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zapiktwl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163sakbalip.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aojiqdnq.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fpeslmwl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zjqckbkm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163twaqqxid.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163imhgmtif.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163junfncqu.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163lyfhjptk.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163lasmagnq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ntsgdree.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bornhvfc.html

npx vite build
来源：http://www.xuanzx.com/163jkyrlvdb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hahqfndm.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bwcaarct.html

================================================================================
来源：http://www.sxryk.cn/163afqazpeq.html

统计汇总
来源：http://www.aibaodan.cn/163ppeimmxz.html

================================================================================
来源：http://www.sxryk.cn/163tuudfvdx.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qgkigguu.html

Python ......... 252
来源：http://www.aibaodan.cn/163iicysfas.html

PHP ............ 252
来源：http://www.sxryk.cn/163shdezeqc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163dyfplsrz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ywfejtiy.html

Java ........... 212
来源：http://www.aibaodan.cn/163cafgekhe.html

Go ............. 212
来源：http://www.sxryk.cn/163xijiqtkq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ibftqtdq.html

C# ............. 212
来源：http://www.xuanzx.com/163cliqojwq.html

C .............. 30
来源：http://www.aibaodan.cn/163zupybfaa.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kbtljocq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163hmmbcaue.html

Bash ........... 80
来源：http://www.aibaodan.cn/163edclkigk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rbeytbqm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vsjqmqxc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163qqrwpasb.html

Perl ........... 10
来源：http://www.sxryk.cn/163doqtqmar.html

Scala .......... 10
来源：http://www.sxryk.cn/163cagczphi.html

------------------------------------
来源：http://www.xuanzx.com/163snnegdyj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163cgammcwu.html

按章节统计：
来源：http://www.sxryk.cn/163dwugrghg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ijbhefmk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kiodsqwf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ymmzgrho.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163odxozxjd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xtaerdxn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xhzknpkr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lhuuszbe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zgxbmuqx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dnzkkgnj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uiujxcrt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vwlgprfc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wpftkctv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163egatzrmg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ywhhascl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163doirfsgo.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iyflzdzh.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163cihfoqrw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163bikyrjik.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163euuexzti.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163apalonzw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mtvpwaor.html

------------------------------------
来源：http://www.sxryk.cn/163qhfqbovr.html

合计                                  2106 条
来源：http://www.xuanzx.com/163csqwfvko.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163okdigbou.html

使用提醒
来源：http://www.xuanzx.com/163wvxoifia.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ftsttsds.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163kyeucnqr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163cythdnhf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163kagmazof.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zylinhga.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163eccclpgg.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lrkjlttn.html

================================================================================
来源：http://www.sxryk.cn/163gvbheqip.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163sfaojpml.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163tjwnrjel.html

================================================================================
来源：http://www.xuanzx.com/163jejfftro.html

【收录内容】
来源：http://www.sxryk.cn/163qsvcwjaa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163walldhmj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hstotyur.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ixytuvan.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163rbrlkmuj.html

【使用说明】
来源：http://www.aibaodan.cn/163xrdehkrd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vyispkuc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163iddpwoxp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ulwaqbne.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163izozhkyb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ytdemvmu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163lcndelip.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xmqcuwkc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cgpnhfxc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ktvuogsf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163cttxjwau.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163xinciyuy.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163mrabonoq.html

【文件统计】
来源：http://www.aibaodan.cn/163scmntsjt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163macmctxi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sqabfkim.html

目  录
来源：http://www.sxryk.cn/163wqxyuuom.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163onzflljm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163mzvuslao.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fuqbfmbn.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ubspphar.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163irawkxuf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163thgvpffb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ipvypazb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163orkscqsu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163nglsxxgr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yyrnapzx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wsjbjwrn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hvrctwwh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yutnshhz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yrehfeoc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163uutsirzs.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hqrsqdos.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zwmyzsva.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163picwqrfb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163iueircld.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163aavnjgrp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iqnivysq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rhkyiqky.html

================================================================================
来源：http://www.sxryk.cn/163twkuziqw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163cgspcrbu.html

================================================================================
来源：http://www.sxryk.cn/163eytmgcwj.html

[A01] Hello World
来源：http://www.xuanzx.com/163nlphbunk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163svhsxpmu.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163oqlquxvz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163hxqlvmsp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163oukqmrgi.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163nyvxacyw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163apvishxq.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wvaqqdgj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xvfnycwo.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163woohcaog.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163wdirbsny.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ogyusqky.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163kodsxwnq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vlvhouid.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163atjgjutt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163jefnbmei.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163caezfceh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163dpjemivw.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163sokrieru.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163igbrspgd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rnrssmkg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163hhckjlml.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163erzkjahn.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163hunacssz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163pvgqyzhn.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163nfhvpsup.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ipovuczc.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ltmbthfo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163rznfelzu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163lindbwnq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163xnixembv.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163zdoqzdfl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163xqpchmeb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vviufrzl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163aadrtryw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163qszlexld.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zrbmrfyh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163khsettfj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163tkwdaupe.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ldurbptm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163fppufbce.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hfqacaup.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nfhimskf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wrzglnef.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dncfmfxz.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163qkvgawmz.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163vphteere.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163cwblqgbi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163lebfgbml.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163aydogklx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qmkchjao.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163qddocqbc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163siblecny.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163wzdgywea.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163kxydnnpc.html

Py:   str(42)
来源：http://www.sxryk.cn/163wopreolu.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163hmfjjknq.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163jfqkxfnr.html

TS:   String(42)
来源：http://www.sxryk.cn/163kjiilqrw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ggnmljcp.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163mhpyfyuv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163pxnldzsd.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163jeeaqmfx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163cbnmkmbp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163qgxvkwca.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163lqyqpcuf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163aekljkkz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163qihtizme.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163kecaqhkc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ufhvixwk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qeshfdid.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163mwnbhyav.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wrhgngbq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163yehsdtdx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163nslascod.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ptxnnbsh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lfbvawmq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lhzjmglm.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ueydbwab.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163sqqtmhnn.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163spahareb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163tluhmxnn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163rnugkuhb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163uzmhjsth.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163szpyfhzb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gqvfytwd.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163krtxkcmy.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ronzrlnn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163zknygogv.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163adrugziv.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163zetwmogq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163dwypijnt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lsqmqwuo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163boxqlpoh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xsstzhii.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163skeijbmm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163vzxmothu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163blfpuncs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ajkliofw.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163rcakazgs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163atssoggb.html


<!-- 参考信息 -->