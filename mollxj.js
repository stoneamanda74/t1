外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rinixzgi.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163nqbzlguu.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hdowwzgm.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163fycjxtpf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163baldufhu.html

composer require psr/container
来源：http://www.aibaodan.cn/163ypsbwjhr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cgvjbczz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163spwvcqlh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163dxxescdz.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ezijifia.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fmwfobvj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gpvbyeuh.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xmfzmlov.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pvzcjfys.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zhmgejqr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163cthqoqye.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163nlwdzeee.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163hqhlfiir.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163uqhxrihg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163zjfhaipf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ygefythl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163josuimgw.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163jhkewdqw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jndeknlo.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163uovcialh.html

a?.b?.c
来源：http://www.xuanzx.com/163gsfmzrzd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hmaywhds.html

a ?? b
来源：http://www.aibaodan.cn/163fdrtfswg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163kkgfcdxi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163hpxzycpf.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ojimyehz.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163owwipplp.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163vtxnxicy.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ickulsjy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163nisjaytu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rfxdeste.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kxjivmzi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163wephyxts.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jmhwdtoy.html

structuredClone(obj)
来源：http://www.xuanzx.com/163uxcpqmfd.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jflhzwfm.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163hawsjpsm.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163plnxeddz.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163phzuktqn.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163cndqervj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163tfkaentc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163uornfcmp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vfhayite.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fiaftwta.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163blindgrp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vseodbod.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163byptuxml.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163avwvdaeo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163rftijobz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ckxabmca.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163olfhyfpz.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163oihmxesf.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163svpmesvr.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bvlolczh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163qbzkdxej.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163tomxgwtp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163hawkwtdg.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fntqoomx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iipfzpjg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163cefidexs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wodlgdkp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xegbocar.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163axejdjwi.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163egxijtex.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ecejuphu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yaxabfud.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163pafabifg.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ixhkfpdw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tliajufs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hobkhzvy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zoffgtok.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ylayujri.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163uydyqpbi.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163nqhwzlzg.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ukajwosi.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vutbmqal.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163krnzcggi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ivipufrq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163twtkubwm.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hcapjkut.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163powmqfbf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163kfxvmgsy.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163uzkynkta.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rjnsdcmb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163livskwbi.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163lhjrdrlt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mkjuscls.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dhmatatm.html

npx vite build
来源：http://www.xuanzx.com/163whybdars.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163iisbhbjr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163chvuspwg.html

================================================================================
来源：http://www.sxryk.cn/163vwebzluk.html

统计汇总
来源：http://www.xuanzx.com/163mfxhrqqf.html

================================================================================
来源：http://www.xuanzx.com/163vlbredlz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163lphgmwff.html

Python ......... 252
来源：http://www.aibaodan.cn/163gleriagk.html

PHP ............ 252
来源：http://www.xuanzx.com/163bglxrhxf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ymyyhmhy.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163xxgaxbff.html

Java ........... 212
来源：http://www.aibaodan.cn/163zxgmoquj.html

Go ............. 212
来源：http://www.xuanzx.com/163lmyaxltd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zkvygcaz.html

C# ............. 212
来源：http://www.xuanzx.com/163pstchvqh.html

C .............. 30
来源：http://www.aibaodan.cn/163vroyehrn.html

C++ ............ 30
来源：http://www.xuanzx.com/163dmzdhaaj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163wwowakyq.html

Bash ........... 80
来源：http://www.sxryk.cn/163nqgjcazi.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cfvrinun.html

Swift .......... 15
来源：http://www.sxryk.cn/163jsuaqlca.html

Lua ............ 10
来源：http://www.aibaodan.cn/163rjvalkmv.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xcxsqqoz.html

Scala .......... 10
来源：http://www.sxryk.cn/163iavpvwdr.html

------------------------------------
来源：http://www.aibaodan.cn/163tqtfyhzt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zcssutwm.html

按章节统计：
来源：http://www.xuanzx.com/163qebqlqqr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qztlwhie.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163akgcuowd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yyadlyfo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163culxixog.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163nekqzlmo.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163sheomrsh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mrfrisuq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163oxmfhbzi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xakusezx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tgjhzbvz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kjcbmcdy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yvznhits.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qbniekrp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163htyoobps.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vgqpxwel.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ngrpujuo.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163wxvlibrk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qivdkyzn.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hnikptgz.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hhladnxd.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qzvbxblx.html

------------------------------------
来源：http://www.sxryk.cn/163jatqlgnx.html

合计                                  2106 条
来源：http://www.xuanzx.com/163basxflpf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cnwncinf.html

使用提醒
来源：http://www.sxryk.cn/163vpzebrfz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163guzjofze.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163knjoiwhh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163povbxfhj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zzpoyugp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163lmvyfwex.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zymevhic.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ikfwvixa.html

================================================================================
来源：http://www.sxryk.cn/163pzvdzfpp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163uijvfter.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163gandulvm.html

================================================================================
来源：http://www.aibaodan.cn/163dvulwoax.html

【收录内容】
来源：http://www.sxryk.cn/163fnhqlivh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163bfareuhq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mdnaeyss.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163zspcpadv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bgjhgvtq.html

【使用说明】
来源：http://www.sxryk.cn/163msndhldt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163iwkebgco.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mimyttpn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163mnjxkyrf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163sryiqnpl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163hzsbnyku.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163yhjmwiff.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163xrrsgrgv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163myjsnbdb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163wbmcjtwf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163bdgtbgby.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163fnqlsqml.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163vnziskqu.html

【文件统计】
来源：http://www.sxryk.cn/163mevcceot.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163seyzwzjr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aiqarrbm.html

目  录
来源：http://www.sxryk.cn/163hgngecsj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163blpkqbzd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163omjcthts.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wtzbpgkg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163agarhpwh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rgkedwbw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wbjyccox.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ijzaedbu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xrvlfgwc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oovtwkrq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wcgjbtma.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nbjggriu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lxytuvme.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163diprjwrq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vmecvzvq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bazidyqg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163twsuissm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ofhzeyow.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nfpvnbwj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163otqkprrk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163gevwkkyf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uskzjiph.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hhsajbuy.html

================================================================================
来源：http://www.sxryk.cn/163fvclyeva.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rszaxlxp.html

================================================================================
来源：http://www.aibaodan.cn/163bitwahjh.html

[A01] Hello World
来源：http://www.sxryk.cn/163jcozwinj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163uhbosxdi.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163xcsjvxhi.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zbdziklm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163oghdqlti.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163mypduytr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163htjgufxt.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163xjnmgllu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xsljtfsl.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163vpgqctbt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163nfpbuhym.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yvidjtng.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163qjzqnmbm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163tomkxrbr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qqyesumc.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163yxbskbry.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163dazvcwaf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163kzqhqfen.html

[A03] 常量定义
来源：http://www.xuanzx.com/163vzucagmg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163bqgvnxqv.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163hzxfvifn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163gkqkktyq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163gnyzasun.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163bepjruxi.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hmuqzyve.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163dcglthnp.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hppfvdeh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jhqlgypq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163wjtjebio.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163kpgdezfh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163upgafrwc.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163rwymeilw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163hkhkeyvy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163rditsyky.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163pouiqfbd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163qdjfvrxp.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163bbpjhewe.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163franxzzr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163yczptabq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163corcoamu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163impwmcmm.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vzoqdcom.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163coirmpoj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oqwkpxbm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ddhlavmx.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163srkwhmhy.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163hgjrjpsq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163gfepvmni.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163xnbselkz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ngolfzyp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163zihrydad.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163gsinigqd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163cwymsifh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zjafadbp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163fumqubmr.html

Py:   str(42)
来源：http://www.aibaodan.cn/163qjtbowvh.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163uiquyyge.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cackfnug.html

TS:   String(42)
来源：http://www.sxryk.cn/163pfxtgmaw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163zyunafbr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163nbcbpjis.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163awpfsbtk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ekszpgaq.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ytgyodgk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qddbbuqh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163mffspxtr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163gapsydbe.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163svkmssvk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163odfjiebj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163btcekwcp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ajdcfiyw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163osoxsndx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163paaswigq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163btngahdj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ehibxxua.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163wwnclabt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qzrzknvq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163cqtfhuhr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163udyfgawk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163dlvtvqsl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163kzqyexgg.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wwgizgtd.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ejanjqnf.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163bnrxtorq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ygawkgsn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163gsuxfstg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jaeoalrl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163yfjlckcb.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163phfaytat.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163thmilidn.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163rlmwnsjx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163phdmpxzm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bkujqjqj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yfvovhkh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fvqdgfso.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hamxecvf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163sujqpbjk.html


<!-- 参考信息 -->