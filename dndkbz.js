外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163zlxggfmw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gkpgzfqh.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163xwcjeous.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iudnebgq.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vfpvfpuy.html

composer require psr/container
来源：http://www.aibaodan.cn/163awfkzmfa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eoteohim.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163paahixka.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kqqfwuhc.html

composer require twig/twig
来源：http://www.sxryk.cn/163gbkploiz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kewlkiin.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163njybqhyj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ubcwtkeu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163sdgjojmn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163skfqmcwy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163qixlftik.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163tqgeozfn.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dhusjwsz.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cwkztysv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163uyjnahpf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163uwkklczi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163cbfubirg.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163yowjpndm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163cbsliedi.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kbnmbgyr.html

a?.b?.c
来源：http://www.aibaodan.cn/163pntgzgaa.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163pkwmonjj.html

a ?? b
来源：http://www.xuanzx.com/163zdtjduyu.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163vnnqvbqv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qgunysnh.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163pqsqjbxi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163jyauxmfu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kcycxcon.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163delnfqxt.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163phucfzvh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tizivjxz.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163agesoqvw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163etzgtshu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163cqvwzcbx.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xfehordg.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cbrmxdao.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tonpvsiw.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163dhflecme.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163rnvibrhu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163sjkzyukh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163idzjizqi.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163wbrceypr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xcupczoe.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gfpdvbjx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jthweihc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163tdpxynen.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ryqemzwm.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cbiyhmjh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163toetsbyf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ciicqxny.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bfqtxaex.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163owbshwzu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163gwnjltie.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163yuqvkytl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163litpuglk.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163akvvnvyk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163euklrqmc.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163mvnotztv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rxscuhmb.html

[U105] JS：节流
来源：http://www.xuanzx.com/163chrtdfxp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dbtpugay.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163rauanduv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163pckgpzcp.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xpbpfopi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bvnqqjcx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pjqdsmia.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xglawghw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163uhleecta.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vlytntmw.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tscwenvm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163csemzpze.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jwobrwdv.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163nkvvjdsj.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ghmfbinb.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tkbagsto.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zhflfztt.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zunnkiyr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fgjxwroo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gxckygen.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gaaigfjw.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zdoqrdqm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163qscdcmlo.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wtoboyle.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qntgxjoj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xpxnjccy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hqrkulpi.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163azaempic.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163idivkgit.html

npx vite build
来源：http://www.xuanzx.com/163dqwtwmhe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kaddzbhi.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163annnlmff.html

================================================================================
来源：http://www.xuanzx.com/163kutwebwt.html

统计汇总
来源：http://www.aibaodan.cn/163tzzzoqjf.html

================================================================================
来源：http://www.aibaodan.cn/163qhoifoev.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ozpikeob.html

Python ......... 252
来源：http://www.xuanzx.com/163ouxaowfg.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nhmrsccj.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163btjgmijv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163deksrqvs.html

Java ........... 212
来源：http://www.sxryk.cn/163qilpuxdw.html

Go ............. 212
来源：http://www.aibaodan.cn/163nmhhelxn.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bpnqhgtm.html

C# ............. 212
来源：http://www.xuanzx.com/163tywcikzb.html

C .............. 30
来源：http://www.aibaodan.cn/163bhsjpnwn.html

C++ ............ 30
来源：http://www.sxryk.cn/163logokqef.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ijvjtbab.html

Bash ........... 80
来源：http://www.sxryk.cn/163qqwskhlu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163quxrbwnq.html

Swift .......... 15
来源：http://www.sxryk.cn/163tzznpuet.html

Lua ............ 10
来源：http://www.aibaodan.cn/163bsvxipqu.html

Perl ........... 10
来源：http://www.sxryk.cn/163mgjgjgpm.html

Scala .......... 10
来源：http://www.sxryk.cn/163nnjaebhq.html

------------------------------------
来源：http://www.aibaodan.cn/163xyseweny.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163kulmhnrj.html

按章节统计：
来源：http://www.sxryk.cn/163bzvrfrcy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ijnbbkhm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jkkzdeem.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163aohxmsnq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fkpaoocs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163anlhjvwm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dapoyxcd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cmkkqkez.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nuiqtton.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dilineok.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nbdutdtl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cqatryai.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jwchzkzj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qvqvumxc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nvuifaxx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163iouflshb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ifmzowns.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163dburxbfc.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fkhdrjay.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bpcvruvf.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vntvjsvs.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163nqdcwqjc.html

------------------------------------
来源：http://www.xuanzx.com/163ixduravu.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jqxgavvz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nykhyzlz.html

使用提醒
来源：http://www.sxryk.cn/163wwxhnubo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hovzakqq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163agrvcvxu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rswnciuw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wxldquhy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ztsjjiem.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jdthmfyb.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ieykrzra.html

================================================================================
来源：http://www.xuanzx.com/163qfvophir.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163aaevkqpo.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163dzwciwwg.html

================================================================================
来源：http://www.xuanzx.com/163zyjqyjnt.html

【收录内容】
来源：http://www.xuanzx.com/163rocuzlng.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163eyolqcvh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163djvlesmv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163lqahizhy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ferjzmdm.html

【使用说明】
来源：http://www.xuanzx.com/163gmrkvgtq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zieuhlgk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163upjftwws.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163piiokldu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163khghrjjq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163elfyrsuj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xmpfgmwc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163tuxwljex.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163owggowjv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163dnnspogy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163pzaqhblc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163eurwdmae.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163gvacadtu.html

【文件统计】
来源：http://www.sxryk.cn/163zikyhoby.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163fqnmndun.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ebwwbqkh.html

目  录
来源：http://www.sxryk.cn/163aqucklve.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163asqtjzbk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163rysxuysi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pqzvajgg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gcrsobfa.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163amfvaowk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163nsbpjjjb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xuvjtdiw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dgwnkaoc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jlnlvcwq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bpdflgqk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ojbkvmjv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vgbjxmpz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xapcyykr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163emfbvggv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bdupywgh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163aoyonkql.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vvpkcyxt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wotwaqye.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163aomeeoof.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163mjskeajp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gkekyzky.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163yuqtifaf.html

================================================================================
来源：http://www.sxryk.cn/163gbioaojp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qjkkrvqj.html

================================================================================
来源：http://www.xuanzx.com/163tevyfqqq.html

[A01] Hello World
来源：http://www.sxryk.cn/163trfuvtzv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163gozjaiyl.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163etdfqqqh.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163umguoxep.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163avuvsmcu.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163giqvhihm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163oowalyaf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hnlgldex.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163qhpoekxx.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163bgzjmyqq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163kjzzjslm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vqaqqric.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163xfzbmdzc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163otubzcpr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163eqincllw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163dqualkgj.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163bgvkredj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hscnvqdc.html

[A03] 常量定义
来源：http://www.xuanzx.com/163taokbxwl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163gbntwfoa.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tpojohhm.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163dzstogit.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163pbwagpta.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pyceawct.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163mcsksedc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vuwaadre.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163rfmsdulv.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163goxuthwo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163yqljbkxu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163dqatmkks.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163yauvmrpm.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163mhiaqsrp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163xjmapsoo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163eeujlkmv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ckdcwitf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163pmxwkimt.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163kjvwzead.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163cbohvjdb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163govqkkpo.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gzgdtygb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163phjgkgfl.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163akppqyqr.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zpovkizh.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ljlnrwjp.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fmjguwai.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163yiklqwjv.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ehwjdwun.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ytbcfyxn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163ohtgqzpk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163qsvldbjm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163akxmgkwy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163lizqdhrh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163jwfcbulm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163lgljswck.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163htaeunyh.html

Py:   str(42)
来源：http://www.sxryk.cn/163swxjbeca.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163iaosrsle.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163blfutvjl.html

TS:   String(42)
来源：http://www.aibaodan.cn/163gohgrrle.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163rfaizlcm.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163hcxfjlog.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163myvvbgul.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ozxasbhx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bpkepwnk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163lstlftuw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163lxrswkuu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163nxggsiha.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163idqklvwi.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163bhwbytry.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163nmfyoovk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163pdyxnlsh.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163wkubyjvp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163semmrrsy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163nasmpsoi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163xpwwbljj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nyddbhvi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163tclqxpkk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gchidfot.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163faewzpfl.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qxydjhwd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163ofkpkcck.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ukuommrw.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163gmsjxjkj.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163vkqaqibj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ydkxjxvq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hukystov.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163zenkwzvl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163kynbbauw.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163bzwrbvku.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163oxselsjk.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163wjubapth.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163bfqffnnn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163abdljzvq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mboiwqur.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hnxsijea.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163udtifhfm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163gjhsryqg.html


<!-- 参考信息 -->