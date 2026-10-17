外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163mwmvgatd.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fcljaeud.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163fokujesn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163eieoxvgi.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163yxdinlgh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163rbinsafx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163eibzhfzo.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163noqkoyix.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163aploohne.html

composer require psr/container
来源：http://www.sxryk.cn/163spspbiqk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163paqclvua.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ejqgpoig.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163kutnhtie.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mjpiisvs.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163uajakmvi.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163croztpzh.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163czlnlatg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ysbfzhnf.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163eiwygnqt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163brshdcgy.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163xjahugzx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ubyefgml.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nxfxhiod.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jzpsezkj.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ondwhzal.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163pyuoutdn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163wspsehlu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ttgtykpw.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163rkvnzkgw.html

a?.b?.c
来源：http://www.xuanzx.com/163dfayzfmt.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yvlgzzfa.html

a ?? b
来源：http://www.aibaodan.cn/163ncrntoue.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163vvghfdou.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vwegfoer.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163uftqneuk.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163orgumqxz.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hxjurajr.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qoixalyl.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163iqwauuxv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mjwgrjyb.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sjujqnjg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bveeeywa.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163gynjfkwv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163afhonwlz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163szmogdye.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xyjtztpk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xhyjnilw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tissctsp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ctjfbrct.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163upneqrtg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lgsmsqcg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rcudahwt.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163qldlwsfl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163woizalxt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qgaposqk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163adwkoatv.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163hrffmxyy.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163npnyqhrn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hjqvnroa.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163tfaypael.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ighhpojw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fzzxxkwq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zlhpstfc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163orzachxs.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uvfnhafu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163iwepbhzo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iwyahlti.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zcqnqwya.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pjoemztr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qmmsszvi.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jlmedfst.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lxxfdiix.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vjibjjjp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163iycqhqji.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ybernpke.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163biufkozs.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tqpmkmoz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ooignjkw.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qiipyfvi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163cimkaeuz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163zkalvaxn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163tjrnizap.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fvmddffa.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yubtnhdk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xafhtyii.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vtcphvjn.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ibxvbdhx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lmmwgowv.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pkyvuhdu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hyxfpuds.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qdhlizex.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uaplntcd.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163gcxjtnqb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163etdpbyuy.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163tdxrumph.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163fgaslpur.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wmtmjzxd.html

npx vite build
来源：http://www.sxryk.cn/163yzorksfl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163uhvetjzj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163cdpthjhh.html

================================================================================
来源：http://www.sxryk.cn/163uuxcewkj.html

统计汇总
来源：http://www.xuanzx.com/163hwzbqysf.html

================================================================================
来源：http://www.sxryk.cn/163zeqycncd.html

按语言统计（条）：
来源：http://www.xuanzx.com/163vgqgypbo.html

Python ......... 252
来源：http://www.sxryk.cn/163npdhvjhq.html

PHP ............ 252
来源：http://www.sxryk.cn/163qwfnzlkx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ygjckbib.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163unfnjfrt.html

Java ........... 212
来源：http://www.aibaodan.cn/163kjqqlmlp.html

Go ............. 212
来源：http://www.sxryk.cn/163rwwvmdvl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163vcreavcs.html

C# ............. 212
来源：http://www.aibaodan.cn/163tuduteka.html

C .............. 30
来源：http://www.aibaodan.cn/163yfqltyll.html

C++ ............ 30
来源：http://www.aibaodan.cn/163csfghhne.html

SQL ............ 90
来源：http://www.aibaodan.cn/163uvxpktwl.html

Bash ........... 80
来源：http://www.aibaodan.cn/163fghmsxwp.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hctenpoz.html

Swift .......... 15
来源：http://www.xuanzx.com/163xossgzug.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dftbnedy.html

Perl ........... 10
来源：http://www.sxryk.cn/163bandqgfn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kjluckqq.html

------------------------------------
来源：http://www.aibaodan.cn/163lmliaaqa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fwmjjojh.html

按章节统计：
来源：http://www.sxryk.cn/163zvrhiykn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xcvhgwxc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163farocrgm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ysighufx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163chcbbslr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163vbhrrqln.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wsjmchhm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tgtvwkif.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163vsjoapgv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163koqhdotn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163focqukdd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ukrpiiar.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pdpsvbvw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163krltpiba.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163flmtvksi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mayrotnw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163glqnuqlt.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ijwbwfxo.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163rnhjscer.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163xcoiujgx.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tjdsqwre.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ysstzrbo.html

------------------------------------
来源：http://www.sxryk.cn/163nrpzzxtc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163cjjzvlmt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rptnzlrt.html

使用提醒
来源：http://www.aibaodan.cn/163vpbtyksr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bqkoieog.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163nthiotts.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163awezubme.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hpfyeaul.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163qwituxnv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mkdvianu.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163jjvauhkw.html

================================================================================
来源：http://www.xuanzx.com/163jciopslz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163cckkmtce.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163zhxgrhtb.html

================================================================================
来源：http://www.aibaodan.cn/163ydbnwsbt.html

【收录内容】
来源：http://www.xuanzx.com/163ypfmbbgb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163iapiklzs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163lazodvoj.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kojdqvxb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ygdilwva.html

【使用说明】
来源：http://www.sxryk.cn/163ngkyvavg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163lthdmkgs.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163loxrbeiv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cevqztpz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163eqgceoaa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163airxktyr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163glhpjxgo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ifewwrap.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163tpidkqtu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fzafqtry.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163injpehcf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hbhjiygr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163snifphwn.html

【文件统计】
来源：http://www.aibaodan.cn/163ihfgshpn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163enkgfukr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dmyqulut.html

目  录
来源：http://www.aibaodan.cn/163kpwyhajt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vccjsiyu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jmlfgxdh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163patgvhgx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rnjlgawx.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163pegnstww.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tachvojv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163twkeigwb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vekvenmy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163knydjftm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163seqliuxk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kelhagnh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163msjvsfqz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hrbsndnc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zgpdmlzy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163rnfaheyn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163loezhlko.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zyikddqm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xkqbsfqy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163uliukzak.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bfhyrdeo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ekwsnxbn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rnsahqkf.html

================================================================================
来源：http://www.sxryk.cn/163sdxyrzfo.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fmqnggfb.html

================================================================================
来源：http://www.xuanzx.com/163alqsjrtz.html

[A01] Hello World
来源：http://www.sxryk.cn/163lhbszrbb.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ogokbtde.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163mpjyperj.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163lqdijjot.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163zlwzsufg.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163rtvxphpr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qovkfjpz.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163keakhaln.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163wclfefkt.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ctazkmmd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qzcekwsx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163dpkhzsph.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163acywkyal.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163hiafewfl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qabmsbxh.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163surwcbit.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163owctrdse.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mnyrhpgp.html

[A03] 常量定义
来源：http://www.sxryk.cn/163pgwvxraw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163phijbpgu.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163txkqkmji.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163pnemhwxw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163fwxxpujl.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163mflbpped.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163rouolkkn.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163izszluft.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163isnrerqa.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bfisufau.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163rrerfmjf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163iomtkqmf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ypaffnhx.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ztgpnwgf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163njbrkrmo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ozkmagkl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163anrajpbm.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163dyrvrbmb.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163qeoywjhl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rlzqigsj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163wgwiqlzr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wfehsgjc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163coydpqow.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vvovnwvm.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rlwnuzpq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hwgyrpud.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yknazjnw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tmazdbwm.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163psgfoptm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163jlylvodo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163qjsjeael.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163cakgxyhc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163hqbwvjsw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163mftiifik.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163jaovtkod.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ixssqskx.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163jrnkylhq.html

Py:   str(42)
来源：http://www.xuanzx.com/163ipbouruy.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qtgvgvfi.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163dmefndip.html

TS:   String(42)
来源：http://www.sxryk.cn/163kwnsddgl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163lecprfmr.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163uymeflwf.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ncckbgom.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163qvzibgnl.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163uagxemen.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163vcelkrkp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163moksmcre.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163agsoeoke.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163rxnptjbt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163xtfjnsgs.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163elhcqbhf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163vjpecqpa.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163lgicyyfa.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163hclrkbkk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wbgvuvqf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gdbgzwoz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163acamsewd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mngkrthu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163pdltbzxr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ivjhoxlr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xnvqdtnu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163zvsjzubv.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163oiwirqwf.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163olwxwxqr.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163efbputyn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163utrtfawh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163swijpsqh.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163uwrdwnfj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ruizbukt.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163hthgrvhm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vmajmqjs.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163sbmhblml.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wkkqkcwa.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eejvztak.html


<!-- 参考信息 -->