外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163tqjcykia.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163zflhnncl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rwkmicvm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163xhmpetfx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rafkfnrp.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163oejyifua.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163kedcuxkw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163yajsrifj.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163zdbhhzmf.html

composer require psr/container
来源：http://www.aibaodan.cn/163jowvcnmf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vtxirdcn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gioddhqc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xgivfnnm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163aotjvemz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163egujowau.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nxshdyyy.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ndyealcq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lpdrvqni.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163snqpwynp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163beigjvsi.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lehqujad.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163folbltni.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163oijgknfo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vuahhoqo.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163psnwcpfq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ecmbuqbw.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163uvfnbwws.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163rcoskwsm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163fpouldci.html

a?.b?.c
来源：http://www.aibaodan.cn/163qbilbgra.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ojrnvofq.html

a ?? b
来源：http://www.xuanzx.com/163rvwgkqgs.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163oqqmtrli.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163zntxfsho.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163djguyibs.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163unjeoiog.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163oijefdyu.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jropvrtz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kkxbausx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eozoygtr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ehprttro.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163nusmazjn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163inscrznc.html

structuredClone(obj)
来源：http://www.sxryk.cn/163bnfabexo.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xrmcgutd.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mjvzoeyc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ipycntzg.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163qlenobtc.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zjmqpvqa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163avjdfwxg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ldkmwahy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wlemvths.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163eydmplpv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ftvdchtm.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aerdjjhu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rqbmweng.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163plahzioi.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zwvopiwh.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lruqsuwh.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qybvaemq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xrbcnjbr.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163eickysse.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163aptoewmf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163defhsjcm.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163pbmzblbl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163pcnjmpoj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163pcmchwec.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fknnupcb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163xajqowfi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163wktkmvvu.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163prgrvwum.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cydpceyo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163gphkoymv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qodsmlsw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163igcrbphf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kdpmxpeo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163oybjeqbo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nljxekso.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163umbbwvfl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163totdanfh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163pjklmero.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163tkfzctaw.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hmhbzlcw.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nyuiwhnw.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ojzsfpfl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163grknjlmv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163wvtgsioc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lbnyvecj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ilmqdhwb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nhtcdhan.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163phlyeean.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163bmnkhqsf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fryrbcvx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163whohduuz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163gmyfmpkd.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163jytprwda.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mfbrnvft.html

npx vite build
来源：http://www.aibaodan.cn/163lllihjbi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xqshhsdx.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ffdohibn.html

================================================================================
来源：http://www.sxryk.cn/163hldisikr.html

统计汇总
来源：http://www.sxryk.cn/163kibhuddl.html

================================================================================
来源：http://www.xuanzx.com/163zcrabcbx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163szxuaejx.html

Python ......... 252
来源：http://www.sxryk.cn/163swwflmwb.html

PHP ............ 252
来源：http://www.xuanzx.com/163lngmnmhp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163uourhksv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jpmftaxb.html

Java ........... 212
来源：http://www.aibaodan.cn/163mwoiujcf.html

Go ............. 212
来源：http://www.aibaodan.cn/163tnaaiyia.html

Ruby ........... 212
来源：http://www.xuanzx.com/163eszdjofd.html

C# ............. 212
来源：http://www.aibaodan.cn/163qjbpcwkz.html

C .............. 30
来源：http://www.aibaodan.cn/163ukdgwxau.html

C++ ............ 30
来源：http://www.aibaodan.cn/163blhioerf.html

SQL ............ 90
来源：http://www.xuanzx.com/163tnnmnaav.html

Bash ........... 80
来源：http://www.aibaodan.cn/163pzgjfwzu.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163uwqdehcm.html

Swift .......... 15
来源：http://www.xuanzx.com/163upiogego.html

Lua ............ 10
来源：http://www.sxryk.cn/163wlslaajm.html

Perl ........... 10
来源：http://www.xuanzx.com/163dpbbtrcr.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dnxclmku.html

------------------------------------
来源：http://www.aibaodan.cn/163rffidumw.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163gicplwba.html

按章节统计：
来源：http://www.sxryk.cn/163jzoymgbl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163szizibga.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mlpivivq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vsqzbzru.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vvwugmor.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gktshaeb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163aoszxziy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aytfsixe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wvaosmdj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kogkguny.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163uicqembb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rakpvpgv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tcoxiifk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kspicxej.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tvzwzfcd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163izyojrle.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bztkkrqf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163hiqttpha.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163aglqyejf.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bevkmmsv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163oyakezye.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ymrngmkk.html

------------------------------------
来源：http://www.aibaodan.cn/163foeoqopi.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163wpaqhyny.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163roexomws.html

使用提醒
来源：http://www.sxryk.cn/163harqvlyk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bqurvvrj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ganjojqw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163krvsqjip.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163cwfzucqj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ekizdsox.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163miaanrrh.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jxmcgilv.html

================================================================================
来源：http://www.aibaodan.cn/163tsvnxdew.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qgohhgks.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163fxbcwqec.html

================================================================================
来源：http://www.xuanzx.com/163henakbkv.html

【收录内容】
来源：http://www.aibaodan.cn/163zwdepjma.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hienpfmo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163spmyuxta.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163bthhhpmn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163fiwfcjdi.html

【使用说明】
来源：http://www.sxryk.cn/163ysrpxhal.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163nqojziva.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163extcnrwf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163hzkbgwzt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163gsxfloqn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163hkpkvzwl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kwjmzioh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163layxdtmj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163cnldlgxz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ibjtgrow.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jtjhtqwb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163pbhxmsyg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lsbfsgpj.html

【文件统计】
来源：http://www.aibaodan.cn/163wnkmumxn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163fdhwryda.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163prwflace.html

目  录
来源：http://www.sxryk.cn/163jivfnuwg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163phmvevdp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vmnswvjx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163roeyyujj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xhzzwkpz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kfhzxxlu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jtjwdycr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zjghxkkk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qzwujkzz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vxkbdqqj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hdyoruvz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163alavzywr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nzkeeqev.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gxyttwou.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lrwflxxw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cmhnglbu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163uqfsqnie.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ujhabxih.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xhdewthb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ppzfgdhg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163wxphepzc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gwrgdmje.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kjjosebf.html

================================================================================
来源：http://www.sxryk.cn/163yxfogmxa.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ovndzufs.html

================================================================================
来源：http://www.xuanzx.com/163uodlqwbb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ntslqfah.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163ugdsbhch.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163qubilnek.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163nqisnyql.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163opahxmcj.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163bnjpfugj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163pbgsihaa.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163cexdzbdk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ujcafxga.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ymecisek.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163lhlpfxjj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163tdbytgbr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163qomktiqx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163xxyvgxhf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rpfawpkm.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163cgxhcwno.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163fkcjwkey.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jujrkrtk.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163iopgnual.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163zortesdv.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tiuzqied.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ixwrjkym.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163szpooplp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163mgniuryl.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163pdtzvqnr.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jhmksbea.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163dydtpqed.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163xlrzthsc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vlqxjqhd.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163mqasysdg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163vlcwzscs.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163aznzxose.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wivogify.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163axdkicxk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163rvqkijfa.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163lbmucvrd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163dmerejdj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163azbnnrll.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163gdvtbrtb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hqclxlql.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hoqgshmn.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gslxrmct.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pmoyfydo.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163erqffpzp.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hucblsvk.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163kidmqwgd.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kdiaavvi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163iehevzti.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163dlczohnd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163zafyuggh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163cxhojcip.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163lvhighcu.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ijxrvxii.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163xwfazxea.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163agqwrozr.html

Py:   str(42)
来源：http://www.xuanzx.com/163oznytgzj.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163znyfhufv.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ugtvuciw.html

TS:   String(42)
来源：http://www.sxryk.cn/163ixzguzzk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163izxrsadt.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163plvstuud.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163sfkovfci.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163yssraryo.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163wrtdxmqu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163xwobanzu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vaxohfvv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163bidfcxwa.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ecsppmkj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163onvrpjvp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163mipfgdif.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163voofxkfq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ecowrjcc.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163umydgegg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163cebutcjf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163fupnbmro.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163vtradhyz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163lfoastfd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uormtyok.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163sdtddotv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163aplgxijb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ntozlvhp.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163kgwsvyby.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163phjfvnbe.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163tesgfofr.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hqrnxsnd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tqolamij.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163kimcqkta.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163iuoctrni.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163alufgbvw.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163skecpnew.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163cmauskmy.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163jlgxrixk.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163umjvubal.html


<!-- 参考信息 -->