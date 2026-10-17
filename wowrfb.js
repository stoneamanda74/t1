外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163obqnxqba.html

composer require psr/container
来源：http://www.aibaodan.cn/163ceifqglz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163pbzyrhjn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lfkoangw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163nhhbtvjj.html

composer require twig/twig
来源：http://www.sxryk.cn/163qulenwut.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ewwmgomn.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163odolluxo.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xanlpste.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lxpvztaf.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163rtavamvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qgzzdrwz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163cuzxbipi.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ygukijlf.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ejehfnqf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163svqoypyp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163izdbtecq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163pcweyqhr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xhtovqkp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jsvouqnw.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vmjsosin.html

a?.b?.c
来源：http://www.sxryk.cn/163ybjtlxgz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163qezqcpdr.html

a ?? b
来源：http://www.xuanzx.com/163gknroltc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163nnrizptj.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163flbrnglj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vhxkgjem.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163lbbcobio.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163iczjcquo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163mxsqxdsz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163avnjeamf.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qhlapews.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163vjsabloe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163uiptgxpu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163cmcarkwu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fxtzrgqx.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163lugfydiq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163drdypxye.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163twtdcqev.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163vjpvzyuq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gbyndkfo.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163phwtsmcg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163pqwmayiz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lxkickwf.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163kxhlhapd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oqivfjtw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163gxwrjpoj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163gnlyqdvd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xdlmotfs.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ifbvvztw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163snhimtki.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hyrakgkl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yiuzhdgv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fhkqutyd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163egrzgycr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163injscalz.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163henvmnrv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163kgpllkxm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jlgxeory.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eouqmvgr.html

[U105] JS：节流
来源：http://www.sxryk.cn/163yagpjadn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xhhjdimi.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xgwazsso.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163zuzkkkdf.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163auilkzwr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bjlfvsfm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163tzpnqlcm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vskhejzt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kwjeijrx.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163skiweqyb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lzouajko.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rdrizuwz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jknsblhl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ygleyoto.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rcxbkqfx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ykfmrxfa.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163oqlmvkhk.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bicfetty.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163erzivaxl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wdtjwmjl.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163letexjta.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163vuwjrkqm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fqjajzpc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163uncvikgp.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163njhvkukg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163gzqmmbct.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mrhhxqri.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163azmlwvkf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jjnokfyp.html

npx vite build
来源：http://www.xuanzx.com/163afuoyfrk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vpmfpkic.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163pexvyoxe.html

================================================================================
来源：http://www.xuanzx.com/163uiceowkf.html

统计汇总
来源：http://www.xuanzx.com/163fiaxheok.html

================================================================================
来源：http://www.aibaodan.cn/163rotijrnx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163axjqzahb.html

Python ......... 252
来源：http://www.xuanzx.com/163nitzkfev.html

PHP ............ 252
来源：http://www.aibaodan.cn/163jzthxibn.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163lzqhwuiw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163vssayvjn.html

Java ........... 212
来源：http://www.xuanzx.com/163qgzyxcvp.html

Go ............. 212
来源：http://www.aibaodan.cn/163bdvveygi.html

Ruby ........... 212
来源：http://www.sxryk.cn/163fqmcsvxe.html

C# ............. 212
来源：http://www.aibaodan.cn/163qiyhrjyc.html

C .............. 30
来源：http://www.sxryk.cn/163wwtivwsx.html

C++ ............ 30
来源：http://www.xuanzx.com/163tneewmij.html

SQL ............ 90
来源：http://www.sxryk.cn/163nooqsmgk.html

Bash ........... 80
来源：http://www.aibaodan.cn/163alfnxzdh.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163obldaymf.html

Swift .......... 15
来源：http://www.sxryk.cn/163pijcpnkj.html

Lua ............ 10
来源：http://www.xuanzx.com/163uydjoshs.html

Perl ........... 10
来源：http://www.sxryk.cn/163twwloxkj.html

Scala .......... 10
来源：http://www.sxryk.cn/163tgayhvaw.html

------------------------------------
来源：http://www.aibaodan.cn/163oxnabnjv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163mrztrbsh.html

按章节统计：
来源：http://www.xuanzx.com/163advauuoe.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xdnxfbns.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wpqwmzto.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mmxjhtdc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163poivawyf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163sxsplyao.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163feqxuham.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163veatltpt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xjbfqofc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hhztzojl.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163irgxybmn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ixguetem.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fbjxfwgh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163msojacis.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cxoqixpe.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rovnaryk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kxyhpafg.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ugfohhud.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zdgirwlc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163fojvqgat.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163kcwisjyi.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lxskpbkv.html

------------------------------------
来源：http://www.sxryk.cn/163wckuuuyw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163qzwguuzs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uzybhtqp.html

使用提醒
来源：http://www.xuanzx.com/163kgbqrgdd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uzummgtr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zghrrbik.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ojrljlni.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fpllqaue.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163eishosfk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ncwzhqcm.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163cqfjzgld.html

================================================================================
来源：http://www.xuanzx.com/163whadkaeq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mpqlzfos.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nauugxda.html

================================================================================
来源：http://www.xuanzx.com/163xilsqdkv.html

【收录内容】
来源：http://www.xuanzx.com/163gpqonwxa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hyfnqjnh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163vpsojvre.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163sxlbpluw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163qpqbvufr.html

【使用说明】
来源：http://www.xuanzx.com/163fopcyvuj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tphemqpj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163iiksydat.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163unaahhzc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163lylvdkhs.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163tbaomzwd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163cjjredon.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hhdqycbd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nwyfeges.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163krkxhger.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163yfxiwhrz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163hvzeypzu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ihmnthll.html

【文件统计】
来源：http://www.xuanzx.com/163hrajnvds.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163mcrkrkgz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fcsryrak.html

目  录
来源：http://www.aibaodan.cn/163ijfquevk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jwzyrrrq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tjlapfif.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zoemflbg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pezbjztk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ursbgixy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163dpcxioyt.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163raycxrwk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mpsbsgiy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jfxmyzet.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wcikzeqa.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163whzfewcb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ekbmsadt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gteduozw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ligjopvy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163hesuircl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163hqbsfqyy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qjpmrbev.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163mxmwcdwj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163womfzewm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163sdlhyqeo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163onxscstu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zdghdcax.html

================================================================================
来源：http://www.sxryk.cn/163rjcoehrq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163xffyjsdz.html

================================================================================
来源：http://www.sxryk.cn/163zplfwqgr.html

[A01] Hello World
来源：http://www.aibaodan.cn/163slzkbvfn.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rfgpjcvb.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163awrlgwxh.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163gfmszpkl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qfeuwjeo.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163wxnercll.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163eqsqrhsy.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ujvbjfyz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ghebuxyk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ipjlqrji.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jdkmievt.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163fouvkkfi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163jezcfcyq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163wuizouut.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xaddnvwp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163qiwokpse.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163dbhkxvxs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jhaxukzr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xovzwzrv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163mhttvmkh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163wqjmhybe.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163mtlxnsrc.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rfkywltf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163zenmlecw.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163iruwhvzg.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163pjqnazsf.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163jjeqigqe.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163beatdkyw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163yloyfden.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163dnafsgvq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163vgjaaety.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163qackwlpi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163aiaxulcy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163wvvpjyee.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163wskyffse.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kgjtxzcj.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163uulbpdrw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163nzxbgjxj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163nnvaajar.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lcmwafkb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ykhkgwdo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pvwpgdkg.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163leipxwil.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jfjxjfjm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rgzxarkc.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ydfvwdgf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163waagoscb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163vcmtrbdn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jcuorkwn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yizelbme.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163crpovlrn.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163irbzgutz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163sbzjgrki.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gwboncru.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163nwgwsfro.html

Py:   str(42)
来源：http://www.xuanzx.com/163sksfynum.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163wniiavty.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163bratdfeb.html

TS:   String(42)
来源：http://www.xuanzx.com/163iodmtywg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ukbthjwa.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163buhjuuvv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163nyinjijn.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163usesolzy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hacfcwob.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163gflvzbdd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163uuyqwxbk.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lvcbhrna.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ogkbkihm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163zpfgkhkf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163nvblwsmo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163folspygy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163shcyxvcr.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163srffotlx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163fqqqfssd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gzbddjkn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163hwgjrzlg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kgvkwovf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163meatqkfg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163vnkbrijj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163qgfuoabd.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163phpfbpjm.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ptaamsev.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163doivjvfs.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163szuztdkq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jgjrjlhz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kmqutuab.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163msrqqusk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163rdceppym.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163duilbjju.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163dioxlqtn.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163pzsthtbx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163tcdqzpma.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mkmhbqwx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gfitvzwe.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tsykucdh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gzzihwky.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163jtapipaw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vkzdawbj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nzdllskr.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163xzbkoysp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163rnbqzszl.html


<!-- 参考信息 -->