外链999!wailian999！

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163fdhhylyi.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163yynlqtya.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xnjgwwdp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163jobjaosg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dodvchvg.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163medxhjcv.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163tuhtnoqo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ogjvchqe.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bpkbqhhw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163kzissbkl.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163mdzyheqw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163admzlctm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163kciupskn.html

a?.b?.c
来源：http://www.sxryk.cn/163poknjzji.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163garcgjbo.html

a ?? b
来源：http://www.xuanzx.com/163ldbuxemw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163mzjfroxn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ztbejwtv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163gwwqqtwo.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cqbwklbg.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163uuawcjsn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ypxxshau.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163wtlueggm.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rfzsbtid.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jwcggraf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zjbxstul.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tcpwtdec.html

structuredClone(obj)
来源：http://www.sxryk.cn/163surrhfuu.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163gpxamwri.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tcipwefl.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163wrbvrkkm.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163izcocbpo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jjtgsdbr.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163lgamdkth.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ylfvmoig.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ljhfepdi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163uhuemsbp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bfjodhpi.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qrwdbcel.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ioatjrhz.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ariiibru.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163oiuftfvi.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163arlmehtz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hfaxqlfn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fzmeknmt.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163bjfyygxk.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163eefiwbjf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163smgvhhbz.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163mvhpifxh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ultoxtga.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163sdvduurn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163orfpovxg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tnxdksez.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163cdsjkvng.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163aiiknahr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lovkxlqu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nrbdkywz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163cljocsaq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ixytumyz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hwdnqsiv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163jgakoahu.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ibptizlz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yyrcixbq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163zxqcoehi.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tkjijeky.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ilerpguj.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163usutqvqt.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163hqijchxy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163mzxxuyxm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163klnxhxwo.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dlbsylzo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bbmfhnqq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qpybvpdz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163euyaziek.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xaiqgumq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hnhortul.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163lgecdoat.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163hvxqjekn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ruohcinv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163oirmzgmq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ywseqhfz.html

npx vite build
来源：http://www.aibaodan.cn/163xhmbaagu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kmajrjpu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163peczvwln.html

================================================================================
来源：http://www.sxryk.cn/163dxpijirg.html

统计汇总
来源：http://www.aibaodan.cn/163topkmxbz.html

================================================================================
来源：http://www.aibaodan.cn/163annculwn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dfhiwimw.html

Python ......... 252
来源：http://www.sxryk.cn/163jocszzan.html

PHP ............ 252
来源：http://www.xuanzx.com/163caatczwb.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163jzmnnzcx.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ybgvuvju.html

Java ........... 212
来源：http://www.sxryk.cn/163jwkukluv.html

Go ............. 212
来源：http://www.sxryk.cn/163zwelenrv.html

Ruby ........... 212
来源：http://www.xuanzx.com/163gffyucts.html

C# ............. 212
来源：http://www.xuanzx.com/163teaclhhi.html

C .............. 30
来源：http://www.xuanzx.com/163dunexkjt.html

C++ ............ 30
来源：http://www.sxryk.cn/163ussvkacc.html

SQL ............ 90
来源：http://www.xuanzx.com/163itfxvbcv.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qqataqvz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163flinpxnp.html

Swift .......... 15
来源：http://www.sxryk.cn/163dnuxecbx.html

Lua ............ 10
来源：http://www.xuanzx.com/163upvevknm.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jntpullp.html

Scala .......... 10
来源：http://www.xuanzx.com/163wvowguox.html

------------------------------------
来源：http://www.sxryk.cn/163tmzbgvcy.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163riicxape.html

按章节统计：
来源：http://www.xuanzx.com/163wjfzikys.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ttawvqtz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qwgikhxw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vujsnatd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wqjhbcpl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163qkattwnw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163pmtxxjdh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bhxuauck.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ouqadptm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gijasdqj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tvjqannz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163svjzlpzp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zctewdln.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fumafioz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gmokcbcj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mhrifznz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vobqhqnq.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163vusrznnm.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cpwupzsj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wyvglxhm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163qtyvdiun.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ofnjokgd.html

------------------------------------
来源：http://www.xuanzx.com/163lnqzdlre.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163zyphercn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tmpibljp.html

使用提醒
来源：http://www.sxryk.cn/163jhsrvusb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163abtlrecu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pzyqcypt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jwjeipoc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pfrphvlm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163evusycgv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gfligrcj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zepvawuc.html

================================================================================
来源：http://www.sxryk.cn/163xmeyxkrv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163gliyhjbf.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ghrjztbj.html

================================================================================
来源：http://www.aibaodan.cn/163grcqtndl.html

【收录内容】
来源：http://www.sxryk.cn/163kkocabnh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163usdkptid.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wecegqfw.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163zkchlzdx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163spajubsr.html

【使用说明】
来源：http://www.xuanzx.com/163bxrcseiz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kamxkjhr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163alrzsgyd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vftwjflx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163clyhbzdd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bbqsaehq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dfuacjmw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163wfoefhzp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163qoncpmdn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qwgsadkx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163taytmcdo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hmztifxq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lhqaryna.html

【文件统计】
来源：http://www.aibaodan.cn/163zxaaojui.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wzfabhql.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163okxngsog.html

目  录
来源：http://www.sxryk.cn/163kknsresv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ebpjgruv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nwyznuli.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wzhzijpd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pwdithch.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pjkrvrbn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163teaxfjuu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mtsnyxab.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wjeiodqq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ipegmrge.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zixszznh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dwerxsey.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163flusdmnr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tnhrmcar.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uluyacuv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mjgeerqg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163zdupgbql.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pmvqyhbm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163mjfblhbd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163owhnbguq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163dywhogjd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dnmkhugq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fnaavkso.html

================================================================================
来源：http://www.xuanzx.com/163ckuwerul.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163vblvpbcu.html

================================================================================
来源：http://www.aibaodan.cn/163dhkgnvtg.html

[A01] Hello World
来源：http://www.aibaodan.cn/163otnetqtv.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163mddxwuyh.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jdltocqv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163txcehltd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fxwghpiu.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ctthngkt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163vwclcqtd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dkilpyrp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163impogrqm.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163yecehscu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163sitpcfgd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163mybfiybf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163svnvensb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163gfaidivn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nphauszt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163vfsbynqw.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jdxtzjqr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163onngpovg.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163dbssyqbj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163paybegia.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yjmdmwjy.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163yzznppza.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163muguyoyc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ejojbcfc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qkgvsfje.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163iujdwkvu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fgvgvpre.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163fvrninyh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jagphdbe.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163tkfuxbks.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163dsbjitoj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tvjkhrki.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ueebjuiq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163xidpnzik.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163tcxbhfas.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jyywlivy.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163brlexhkw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163okoszuga.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163kunsjmgr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ieyzaxkx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163apijezoh.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163drigcjfr.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zietltbn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163avejsqhd.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163smsecazr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163qbznfwut.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163opvaqmbn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qlmmjhxb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hxtgpiih.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163zwbikryh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163qdmgxrmf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163kibikxit.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ywugzafc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163xrlbncxt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163eucavmmt.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hzvptwjb.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ixtskfvu.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163orlednhi.html

TS:   String(42)
来源：http://www.xuanzx.com/163tolahfnl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163jpqxszcr.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163hipwureg.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163okdsryws.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163tyzmrxhg.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163qjjfcndx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163krszaemf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163qflvjieh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163piadtlyl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163whnqughd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ewqujyhw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163dpxyvems.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163oiugqvux.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163gjxywqda.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163xvfwxsje.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cqejhrdt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jwoxzyzh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163pskopvbh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163pwumwvgh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ylxtddjv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163yavmulfb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163fdduohkz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163lluqqyqg.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163nhqqmyhe.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mqatgdqb.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163mboqkyfx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yjkhgcuf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163pxihufra.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163eicdbzhv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xiwtfcer.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163sthpexnx.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163qypjxnsf.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163gxazwqdc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163ajvowcqz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xvjurtvt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lhycnzgy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hnkyqxch.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fwgqpykw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163lgjrmbzm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ajkfqfln.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lqajzlea.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163chtgrtlh.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163sqojgbuw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163umufdije.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ovexihiq.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163wnjmlpku.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lumnpjjh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163fvkmgicd.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bvodghdc.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163mivyzcwo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163odkzsser.html


<!-- 参考信息 -->