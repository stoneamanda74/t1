外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pkvyaxxi.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163nhjlcpnt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163lbedjrvt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vdjkhucs.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163zykzjohn.html

composer require psr/container
来源：http://www.aibaodan.cn/163szxfhmiy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163qnjvmfuq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163kkapynbk.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kwwfrfie.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xbwzutnp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163gcujybqk.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163vfsabies.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xobsbufr.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lwxxwwrm.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ufykhdng.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163jbtbgfnx.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lmpqhsqs.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163quzwpvxv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kbksgeju.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ymuzacyh.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ngofdvxp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163urosslbo.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163jziejmny.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wqpocsgm.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rexevfrl.html

a?.b?.c
来源：http://www.sxryk.cn/163ytmyyzdj.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hbdvhael.html

a ?? b
来源：http://www.xuanzx.com/163jejkcapc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xzelsqng.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hydzhxyn.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163siysboie.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qtltuqzr.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vhkujuov.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163eghbaobh.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163leoxiqwo.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lqrvciqu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ypkkrcbo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rtjkxdbm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xgvhnglx.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ptjunoyj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kyryoomi.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163bpjjjrjv.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163hblakdev.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163aeubdxja.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gatsberb.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163njzmvuqy.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163pxsnjutm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jkzlbyue.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gjqoljgf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jleaucre.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lbkuguew.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163eercbimp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163lvestaxv.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163lixrmzxg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hxajdrtk.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ccksrhle.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163nyxqrozo.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xenfhlav.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163hnlzkrbu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pjdduhxz.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163zslnphyg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163gvamzsmi.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vqerxkrd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xdympbit.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jopqzyqx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bzgxzbvs.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163uqlnyrwa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163txybokqh.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163liruupud.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163elexhdwr.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hffynguv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wnbqpjwg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ecgiipfz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kvogjqtm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163mkvfgwml.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zlvqhcnq.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jxrbexup.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bynajdin.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163qpoyotny.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iftjanaq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vhruyzwj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gtncbfqu.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163xkfzxuje.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nwdvllyh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163cbxnwvwb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163igipebbj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iwfwebhd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163jxduoxye.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163icenqynf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163msqrhcjr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163tqbixpjo.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163mysddzoq.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163chjabxnk.html

npx vite build
来源：http://www.aibaodan.cn/163giehiaou.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163pqiwsgxt.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ynrfqjsg.html

================================================================================
来源：http://www.sxryk.cn/163nbsybcap.html

统计汇总
来源：http://www.xuanzx.com/163kiltfaoi.html

================================================================================
来源：http://www.aibaodan.cn/163tfhecfig.html

按语言统计（条）：
来源：http://www.xuanzx.com/163kxpecvlp.html

Python ......... 252
来源：http://www.sxryk.cn/163xagicgnp.html

PHP ............ 252
来源：http://www.sxryk.cn/163izavgeam.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163myebzrex.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vgpyvbqv.html

Java ........... 212
来源：http://www.aibaodan.cn/163bzqsxzms.html

Go ............. 212
来源：http://www.sxryk.cn/163cvprnali.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zcdyraru.html

C# ............. 212
来源：http://www.aibaodan.cn/163ocrimcaj.html

C .............. 30
来源：http://www.sxryk.cn/163utvfvkvv.html

C++ ............ 30
来源：http://www.xuanzx.com/163cmfxzupg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163jagwgvcg.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uhtpbalz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163utdnlias.html

Swift .......... 15
来源：http://www.xuanzx.com/163keqgpgct.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xtlyedsl.html

Perl ........... 10
来源：http://www.sxryk.cn/163dhkrxxvi.html

Scala .......... 10
来源：http://www.aibaodan.cn/163oszkytfw.html

------------------------------------
来源：http://www.aibaodan.cn/163sdycsfeb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ujumrrwj.html

按章节统计：
来源：http://www.xuanzx.com/163pgaayyec.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163egycjgep.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qttjyjsa.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ziewqbdr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tywlwrtr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163gkjvzzee.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ggtcqklj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mjebkxeh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jhmxkpqf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hjxbliuz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zyhyjctv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163heaigtdt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gbznmuik.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163paeyrtfa.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mfjuspuy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vaseqges.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vmjbejrc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163wgysvkhr.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163cnjdyjpm.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ieyntjhi.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pxwgurqn.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163mtvhmsst.html

------------------------------------
来源：http://www.xuanzx.com/163hhgqtizv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wikluzxt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fuczpfoo.html

使用提醒
来源：http://www.xuanzx.com/163rjkkzchd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nctsohhz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163szhxyraz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163dfakipqb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163upispfdn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163jdqtrlwm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163sgxkhiia.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fomqiwch.html

================================================================================
来源：http://www.sxryk.cn/163tzesnisv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163iatyvnrv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163tsctayde.html

================================================================================
来源：http://www.aibaodan.cn/163uopbjfbs.html

【收录内容】
来源：http://www.aibaodan.cn/163llvrnxsr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hbtogrfv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ezxzqqun.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163kokoxqur.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163omawhttr.html

【使用说明】
来源：http://www.sxryk.cn/163rzintbua.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rjrnjlck.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163knkqkwxy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ipejtvxl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163qbxpxwra.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ujsrwezr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xtmkyaft.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163dknrnkiq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dcyyivzg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163czspdcko.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163wwqlcibo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163cuxoplaz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163jeooqsiq.html

【文件统计】
来源：http://www.aibaodan.cn/163bzfndacv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ifomolpq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fgaguiog.html

目  录
来源：http://www.xuanzx.com/163vqncjpyo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cqbwdakn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163fabctuoa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uskrfdme.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rorxqiou.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163iwdnzsyv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163yrwgpqeq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bpklsdou.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pcmmbqna.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163krzhnrza.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sswrwmxn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rjitjokf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lkhbqcez.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163otgzjyeo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163girbvhhk.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jnfhmgez.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163atwrxtdd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qocbtysz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wlibovqd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163tptdoxsw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163scwajjzi.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gnesqaxk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tfzntedx.html

================================================================================
来源：http://www.xuanzx.com/163hmqynotg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rorjyuvd.html

================================================================================
来源：http://www.xuanzx.com/163piegruyj.html

[A01] Hello World
来源：http://www.aibaodan.cn/163okjktsog.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163qxmbdbyt.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163yphmgoik.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163shjheqxf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163mfilkrcs.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ikdbulal.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163wodohldv.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ybtqudnc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163pfldvype.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163fzbdmtew.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ywvblxby.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kqhfkige.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mbwdvynv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163yevfmojq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ableanqr.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163hhuixwhc.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ckgwaciu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163bjbsxloj.html

[A03] 常量定义
来源：http://www.xuanzx.com/163devfxbbo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163fjztjxcw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jlkygxno.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ayumnihr.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163iojfzury.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ypezpois.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163rqlfjlsa.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ocmxxipw.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wmlikgow.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163pcpkukct.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163etjjgqao.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163dlqhelsd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163kzddhqbi.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163rdvmuaml.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163orzcgjza.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163sxwnwljb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163icwwzgab.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ioskfoyn.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163bggxiyzo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163vzrtfiya.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163fzixzbeu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wvfwoila.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163woonvoep.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ugrsgqdf.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wuuwmepr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uajpdmem.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ozvpxpba.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ccznwnfa.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163pknozsvd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163uvrcxeif.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wbtynxkl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163kspcldce.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163fzactdvr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163zymosymy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163miykluvl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163inzksrvi.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163aorvrdjt.html

Py:   str(42)
来源：http://www.aibaodan.cn/163zbpowsko.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jydskwzt.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163bmhojkkb.html

TS:   String(42)
来源：http://www.xuanzx.com/163kkrrvlzg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163bsoykfmi.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163jxlksvvt.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163lilyifyp.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mxyqkxae.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163smrtgqbs.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163qlzbawxb.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163meitalfl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163przfetda.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163edfjsezq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163bdmyhjoy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163wnxtwhzf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ngminaws.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ocuddtae.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163kwggstki.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163rqdiduig.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163qjmoodpt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163lqtfvwwa.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163smztvnnl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163lwtimoyp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163lrybfhqb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163felsmdze.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163thrautjj.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163tuyhiype.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163axmyvrja.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vzgygdfv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kuekqfsg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dmfruhsi.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163mlqewuli.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163epmxxvwd.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163edrxlwed.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163lcfolnjn.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163sjhqkyrm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rkieimai.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jlrjnudj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nsvffafs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ptuiavhr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jecwkkvv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163hvnodxrr.html


<!-- 参考信息 -->