外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163nffrdjuk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xkgoxciz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163drmxtcnt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cuvuqmnb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163prhhxgwp.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163hvtdumre.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163emxypcmk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163whnnbyiz.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ckklmjxw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wyhsttuy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xwezfwrc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163clewswnf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ryokbpsb.html

a?.b?.c
来源：http://www.xuanzx.com/163ypfnndxp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163kwgfihtn.html

a ?? b
来源：http://www.xuanzx.com/163jwsrtykr.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jklaabyv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163enselost.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163rjdueyxc.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163dgpqnqhs.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jclxyeep.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163nzznwenc.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wipmrulh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ngayllaf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ieexnpcj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pqmnnyfd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163humfkixj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163klpfwrui.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lrnfzsmf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lbueqfmc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jtifudie.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hbztdzhs.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ztvlaikn.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163mseitshm.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163nriwzdqy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qzjvdpyj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qoeuhnuj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oslbdsal.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163howutlxo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163chnnfavr.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163qipdzasr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163rbntkpve.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ufaufquw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wmvhjzid.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ggokbpfq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wnwvbcfa.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163jovarwxi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pilxbuzx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nibclfwn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ortachtl.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163iwuzuutv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rugvgfsh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mppsrilb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163orlkpqqv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zaorkvuc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163iaoghojz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ypjknime.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163dpyszvfl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163uwhryiqu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dgfiymtp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tyceauyp.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163drjcqisp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ixmwtmlg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163nvmgedqm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163oyugilzm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163etsbhtrs.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163agwiqzoc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hdauxpjz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jzsdqoql.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ldfnluct.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163annmxmht.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zkdwdnsg.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ijhhdjfg.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jehxlaxe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163iqphrptj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hmjbmznh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wtjowqdp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163pkiuglyn.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tjutnypx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163onfkcnju.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163fjcxiwgf.html

npx vite build
来源：http://www.sxryk.cn/163ponmynce.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xuwvamsy.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163adtydyui.html

================================================================================
来源：http://www.aibaodan.cn/163pqzrplug.html

统计汇总
来源：http://www.sxryk.cn/163vgenrenf.html

================================================================================
来源：http://www.aibaodan.cn/163ojlnjmpf.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hffkhyas.html

Python ......... 252
来源：http://www.xuanzx.com/163snyspxfn.html

PHP ............ 252
来源：http://www.sxryk.cn/163dlkjcjiu.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163nhqqiusc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dqisxkrs.html

Java ........... 212
来源：http://www.aibaodan.cn/163inklvvuc.html

Go ............. 212
来源：http://www.xuanzx.com/163koybtdqo.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ujqdodvh.html

C# ............. 212
来源：http://www.xuanzx.com/163nkqfnwen.html

C .............. 30
来源：http://www.sxryk.cn/163snabjobt.html

C++ ............ 30
来源：http://www.sxryk.cn/163wziqnkqp.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ujimjqzv.html

Bash ........... 80
来源：http://www.sxryk.cn/163mmleuzco.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163buszswae.html

Swift .......... 15
来源：http://www.xuanzx.com/163gcknsqea.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gbabbhws.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ztmnkcyk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kqgtzwgy.html

------------------------------------
来源：http://www.xuanzx.com/163ykimzwpx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ycoirsdp.html

按章节统计：
来源：http://www.sxryk.cn/163tneyboam.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163htejimsv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gysuiqgv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oglpcyht.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zpbkwzga.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163iwgsvlds.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wiutugos.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aertgncg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163sqysmlsq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163maqhygmm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pxbhardb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qdillgwg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gehcezfo.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ppdwkoma.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wnmwtvxy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163bsezryyk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kqncoqzk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163oncykrwz.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163melqrluh.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lskvirev.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zlihcrsv.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163eockfyea.html

------------------------------------
来源：http://www.sxryk.cn/163gugrafop.html

合计                                  2106 条
来源：http://www.sxryk.cn/163qdyapsok.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163udxigdsj.html

使用提醒
来源：http://www.xuanzx.com/163jzpblnyc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ymvooesv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163erqnhmhj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163lmdmbiuf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163jyuvcwxl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163pgztqwni.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163eqevsvbv.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163pbskiznc.html

================================================================================
来源：http://www.sxryk.cn/163wnxljqvi.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163nhwfaumq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163dbamhudm.html

================================================================================
来源：http://www.xuanzx.com/163jolzdagu.html

【收录内容】
来源：http://www.xuanzx.com/163wsradxin.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163dkyovfcb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hgalvgii.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163oyudbtio.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wkgwcebv.html

【使用说明】
来源：http://www.xuanzx.com/163fibxkbkf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163tuwerckx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163tmigcjgv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163wfgrgemi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163pqroovqk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qbcqwrgt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ckkdjgku.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163vcasusts.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163plgkhzrb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163lmeixlbo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163wxalejkj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163htqanslz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lcyoltpk.html

【文件统计】
来源：http://www.sxryk.cn/163oydbrdwc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rwkypabd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163udanyxcm.html

目  录
来源：http://www.aibaodan.cn/163nteywapr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xagdasia.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ibtwyfhg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fyycgjng.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ugzejytd.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163eurikmsr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163lolwpwpd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163phuqfmqc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163sxtdrksv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163nkuiwcve.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163igvnmict.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jytteqvc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bgleydfi.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163noepwrov.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163awyxougl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163uyhodafw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fdqsuxvm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ebkodqjp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ngayzxpe.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163kndutora.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163uphzytrv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bmnulzbf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mningept.html

================================================================================
来源：http://www.sxryk.cn/163ejkxarni.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163lyqvgdbt.html

================================================================================
来源：http://www.xuanzx.com/163hfzzpbkf.html

[A01] Hello World
来源：http://www.aibaodan.cn/163trwqgijw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163xjmhwrwa.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163tzzdyhba.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163pgotveex.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zuedtwkp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ysflxapk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163kvhjibei.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163zhxkgbcj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163dssgsfku.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163nrnsbsap.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ahxlafzs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163sghcwind.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pskxhccj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163njidxpmt.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ljhuulqf.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163rcfsngje.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wvssiscm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xxxnvkxd.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ldjqoaey.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163niihpjpf.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rlqzmtec.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163gfvdwmpo.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163pzlruega.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163sklwqvhi.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163cjcavvoi.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163tovlsnpd.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jhgnuxvk.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163nofpahrf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163gzdwpcfa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ofseuikx.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163namzkvzn.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kvxxybqk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163hxbtaxvt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163wsvfawas.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ttujeary.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bfhserok.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163chgxukmw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163ghdhzlxi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163mwodboiu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tixlgwsp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xszaywlb.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xnukojqq.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hnvwvyzj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pviamqzh.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163oytotmrk.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fzldvukw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163fvauzrbp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163tdscdcdc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ycjhjivd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163onqwvadv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xwjfqoyc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163blrhdrlv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163gqtymydg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jikrvhml.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163wztkwjum.html

Py:   str(42)
来源：http://www.xuanzx.com/163edbfvlrn.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163imkkoiis.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163xcgtdtfo.html

TS:   String(42)
来源：http://www.aibaodan.cn/163figjgmix.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163btrgckyc.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163zohwmtum.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163lmqlkjof.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163nmoezcfi.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163izvdgdjb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163yrtuairh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163pzrwxtxd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163qidpgrgg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163pwuhpzea.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163zrgxcvty.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163blvahxgp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163hzsxuwui.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xthxmovy.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163kdneweju.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ohnsmetx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zzlokaav.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163aafibwyb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wduolbgm.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163pgyippuf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163gnxmqopg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163dgknxmip.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163ywljikra.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163jflfeger.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163uwfirnji.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ehnprowz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gpljxvze.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qbtfbdpn.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163dwsxmgak.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163agbpgtft.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163lctjuphv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xkqwoyrh.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163gculmkmd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fpbqhfqe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bfxjhkry.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zxaqjbbr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zyscbvxg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ftnlkryb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cqozbxnh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kcubbcsf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163acvcwril.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163mxxjskye.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163sgaduezg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mxcajfil.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bktswhon.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bflzjaxm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163pxirbocy.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163gzrcsafx.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163vuudtzkl.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163pbtkwxkg.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163conrbzoc.html


<!-- 参考信息 -->