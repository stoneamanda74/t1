外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163vabzzflm.html

composer require psr/container
来源：http://www.sxryk.cn/163kwaccszt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163kcqigkom.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163srsydebe.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jfgdijaw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zareyxno.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163lhwqtokr.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ztipepne.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hjmcydcy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163sguzkbba.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xeorruvf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163iulwrshq.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rgioxocw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bllimutm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163bwpnkwic.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163uhnygihf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163zqsbqetl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ldidvvfx.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163plpsdgtd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163bdgnjfyo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nwboupnj.html

a?.b?.c
来源：http://www.xuanzx.com/163nmgkgmkm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ivsxkjpd.html

a ?? b
来源：http://www.sxryk.cn/163fsmbihdu.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dpoupdpx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163howlfzyc.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163kxemxzur.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wpnogcru.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163gvetggkx.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163qafqlgig.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163khxqdebh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qefdopnv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163cndqzyhi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163sxkawejy.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vvaobrdg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163detxerfi.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163oavtzvly.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tvokpqqn.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xgwzuzbz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rpovtvob.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163uevbjvtn.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163cautnjlp.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163oizhbizx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vzlrrmkb.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163zbyswijf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eimfrfzr.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wvrosiia.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rmkwrgoj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163whdlfwwf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ootnyzhy.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163yucuilrc.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rguvjoyf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163kjvlccvb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163emuvffwd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uglaxxnd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cibdhequ.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163amohpmxk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ipanlgsy.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163aoppfhjr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ghoygzhi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ijzjdeda.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163oyldhjxm.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ziqxkpwc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hizxsknh.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pesvudgu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jtawtcmo.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163uhabnutd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163llfvarty.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163toqqmnmt.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sbcrhiae.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163padykdji.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163dbfgacgw.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bpufyqyq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163nwzoohmm.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163btgowmzn.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163frvhfsmq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163twutmcgh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bsrprtkp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163gpjzqywg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wmafjwtj.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pjwbauep.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163bsywdoef.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rwqdoffb.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jpqsanmk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163chuftyui.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pgnxybpz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163agchepgv.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ixdcvzza.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xctmmqhe.html

npx vite build
来源：http://www.sxryk.cn/163cdzixzqu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163gzlkkrpd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hfocnwnp.html

================================================================================
来源：http://www.xuanzx.com/163pnynbwmw.html

统计汇总
来源：http://www.sxryk.cn/163zvodrqve.html

================================================================================
来源：http://www.sxryk.cn/163fsvttbmf.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163goerpldj.html

Python ......... 252
来源：http://www.sxryk.cn/163uhqqoxwr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ftqiwynv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163hxewyuib.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fnfjfelc.html

Java ........... 212
来源：http://www.aibaodan.cn/163joheppnz.html

Go ............. 212
来源：http://www.xuanzx.com/163foxxdkwy.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ejxcnsew.html

C# ............. 212
来源：http://www.sxryk.cn/163pwlempbr.html

C .............. 30
来源：http://www.aibaodan.cn/163ntzabpdd.html

C++ ............ 30
来源：http://www.sxryk.cn/163ziwhnnpp.html

SQL ............ 90
来源：http://www.sxryk.cn/163nbbxhsep.html

Bash ........... 80
来源：http://www.aibaodan.cn/163shealmvx.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163blvkpnya.html

Swift .......... 15
来源：http://www.sxryk.cn/163leelsdhh.html

Lua ............ 10
来源：http://www.xuanzx.com/163poyjbaxh.html

Perl ........... 10
来源：http://www.xuanzx.com/163bcqqhmsr.html

Scala .......... 10
来源：http://www.aibaodan.cn/163quxhglyf.html

------------------------------------
来源：http://www.sxryk.cn/163eggxdgfg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vmvidptq.html

按章节统计：
来源：http://www.sxryk.cn/163yiiolhsh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xypimwwx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pwltcbid.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163anlaiwpe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mrlwswbr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163bdcvctfq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vizveuul.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hicpfowr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ivqrdmlr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lcucznon.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163klglokni.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hivjupok.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sjkulyrc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ezalrfzs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pjkvlhpg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163sykanxdp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xxmekguv.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163moghajty.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yzxpgepk.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163abygdogx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163klkruhlv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163vuywhcpj.html

------------------------------------
来源：http://www.xuanzx.com/163ltfyzbba.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ksvtqvtv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eaopcoxd.html

使用提醒
来源：http://www.sxryk.cn/163tfzyuxhn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nhazwzyh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dhlnssew.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163frkxtcff.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163whfuooez.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163apxbkabs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163zzxssycp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163raqrldtf.html

================================================================================
来源：http://www.xuanzx.com/163kkhcavuh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rqceazuj.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163awkkhaqm.html

================================================================================
来源：http://www.sxryk.cn/163jvrgyhkm.html

【收录内容】
来源：http://www.aibaodan.cn/163jkhkkzrm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163pgaoatxw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rruxqfmb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163kxkgydnp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163cwhvntjt.html

【使用说明】
来源：http://www.xuanzx.com/163xprftdgj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vazdksxi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163rydbvvus.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163dktfitpz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kuspwmll.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163mvyxprmx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163rzroyoxa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ixygwajj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hemmfscq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zmrdodqt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gsktdgfw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163rodxemxz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163pgiyinpz.html

【文件统计】
来源：http://www.xuanzx.com/163bhjfzwnd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vuowrstd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lpbsptjv.html

目  录
来源：http://www.xuanzx.com/163kvikkbpa.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163eplxqrwy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rviytdlc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uuzhajki.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lqakkpna.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zhjguvxi.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163codsdayz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163caaycmay.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hcyoxziz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163dhdpblyz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ogqkyqok.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tapjmiik.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tvdhxucw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vgsmpfch.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vcpmaiyc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wgnlqfed.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163uyhvntvl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xrjjplmx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ekrotiux.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163rkajbsae.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163mtqhcdgf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vsswwmbt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hrmhnwgu.html

================================================================================
来源：http://www.sxryk.cn/163rgybubqy.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yzodenre.html

================================================================================
来源：http://www.aibaodan.cn/163iixhzput.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kbesqkek.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ekchtzms.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163pkqnsqcm.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163kqztphae.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ukcmdmmb.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ojxwlvjk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163fgqvotfm.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dagiunqn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163cnwgbxuy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qjoemuzp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qwcdtfob.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163dbzsbyat.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163rmtgnnnx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163cyltfkhg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163veoseesj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163qssmfzhf.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163tfrnemmv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lmxsipjk.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hgfoejhw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163jawxrhog.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fftanboc.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pljxdhyr.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163mmdyhklr.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163rcnwxmpa.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163kqjnpkcp.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163krpgpjpj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163mktnwuwi.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163elradzom.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163yvcvthxk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163xzvtepfv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163yzzbcmlb.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163xbazhofz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163cuosccrx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163jlkidwgt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163azucehjd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163mzgxrmkl.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163lnymjzve.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163twhpxobq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163zqpqspud.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163owmgiwun.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163xigxhrck.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jekisxiq.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wodwhzho.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sfikusiy.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oeqlexys.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163owewctud.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163njvyjstw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163jbuinfxh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163ucilzmpl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163esazcrlb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163hwjmpdfk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163isvqqslc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163croclqfm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zinrcaak.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lkbgwyyb.html

Py:   str(42)
来源：http://www.aibaodan.cn/163sfetamrf.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163rbykiopu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cchstxve.html

TS:   String(42)
来源：http://www.sxryk.cn/163ltftrijw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ggilncch.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163bxumqtvk.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163pzxuzdgv.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163oelpanij.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163eicrhhap.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163lwraucjd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wjbslhpn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163jnemlzlt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163evlzmcxb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163junnpwam.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163bguymkmi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163amjcgcsn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163megcpbyi.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163lmozpfbq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tsktbmjk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163epzntvjb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163cjhpgdez.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163qjriskug.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lolmhabb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163oapnqqrr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163naweycav.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vsyaoijz.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163dvdfpjmp.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163qegqngdy.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163smduqdcn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163qozjtfhq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kxvaqmma.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fynimvpl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ehfwvbpu.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163wdkdtuap.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163hrxipiyh.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163qhkzfddk.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163aszskgsl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nwccoxia.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bvwcoezb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163iuhpidjt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mozfxasu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163nydthntn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mxhsthxh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fszdhjnr.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163vqiymqsx.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163cprugdwd.html


<!-- 参考信息 -->