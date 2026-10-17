外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163smlrcmoy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tvufodze.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dovlkkfu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yfkkmqyu.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lkzehsqd.html

a?.b?.c
来源：http://www.xuanzx.com/163tkmdjits.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bcayrzjh.html

a ?? b
来源：http://www.sxryk.cn/163mubdtqux.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163itqcyqbg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cstwicgb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ximvdvdx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163hzdurdgb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163twefyhzz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163muigjrce.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ehfqjbxn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rxpffktl.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163feigikwu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wathrrjf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163vdptmoxh.html

structuredClone(obj)
来源：http://www.xuanzx.com/163optttfoi.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ngcxerkz.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fxzvkopi.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163buvmkqgm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ssndqgyc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163slgjosfw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163oidgmxbv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pgxwbtwd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nfydfwhf.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lrkqymtz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nenrrrxn.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163siklqolw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163kldzxlpj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163haimjlor.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163rfyjvhez.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163cotvwrxb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163opzpdhgr.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wotkbfak.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163izoetndh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163srwlnquy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163hkkqhict.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163riswqbbi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163prudfgbz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qkkupymq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163antwpvhc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163rucvwnos.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vfvxbacs.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163oksmyicq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163cwqajnor.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ixfybxzv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163udedrblf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163nfirkgko.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cmpncshc.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ahwgnamg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jzumcjzf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fwzihjbh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163avdcvzrb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kftaqogh.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163bowqgpel.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ltkqnlct.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ddowlrhf.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163mrasxccc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kvivjbtr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kmwoubpv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yxvplzyw.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163yuvzvexd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163pmkuzeur.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163gdhjsymu.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nehlftdz.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ancsdski.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163oavmbksx.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163queedrid.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ldvahkls.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163unkpvxxy.html

npx vite build
来源：http://www.aibaodan.cn/163txkhgwch.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wyzrecir.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rcxpgpie.html

================================================================================
来源：http://www.xuanzx.com/163izkinpxh.html

统计汇总
来源：http://www.xuanzx.com/163pzzosoqu.html

================================================================================
来源：http://www.sxryk.cn/163iusyzhqy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163thnkkfan.html

Python ......... 252
来源：http://www.sxryk.cn/163fuabroed.html

PHP ............ 252
来源：http://www.sxryk.cn/163plvlgxfn.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163lbvfikzl.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163gpuvblsg.html

Java ........... 212
来源：http://www.aibaodan.cn/163zisunlbl.html

Go ............. 212
来源：http://www.xuanzx.com/163rdqpmiyf.html

Ruby ........... 212
来源：http://www.sxryk.cn/163spwdjmyj.html

C# ............. 212
来源：http://www.sxryk.cn/163hjzanthw.html

C .............. 30
来源：http://www.aibaodan.cn/163nzomlepi.html

C++ ............ 30
来源：http://www.sxryk.cn/163wnprphtd.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qmdoipnk.html

Bash ........... 80
来源：http://www.xuanzx.com/163vhgzblie.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163nccvatwo.html

Swift .......... 15
来源：http://www.aibaodan.cn/163byhggmyi.html

Lua ............ 10
来源：http://www.sxryk.cn/163exozyrpu.html

Perl ........... 10
来源：http://www.sxryk.cn/163kjqmxnys.html

Scala .......... 10
来源：http://www.sxryk.cn/163fbzoksoy.html

------------------------------------
来源：http://www.xuanzx.com/163joouvbtx.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zikiydzp.html

按章节统计：
来源：http://www.sxryk.cn/163mzrlheqj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pqowlgoa.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gwettxja.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rrpsmhom.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hpqqgakt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163hezxmyiy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lijlpbcl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rmrdilws.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tfdsxkjz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163btymisks.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163cpjzxsmy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qfwnqvck.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qeseivds.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tzeftscg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gciqfdtr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ypwytgbl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wyaazgtz.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hcedsvnf.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163iunzqzmb.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163cfkaihpx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ppxewzwk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mrqcbdzy.html

------------------------------------
来源：http://www.xuanzx.com/163yvmembrp.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163lojdtowh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fhsfytpg.html

使用提醒
来源：http://www.aibaodan.cn/163ldreofbt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qqgdccmv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163enjzditn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163yeyytqmm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163lldccngs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hcktqzzu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163lpgzxvuh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163johqbgbi.html

================================================================================
来源：http://www.aibaodan.cn/163yjkksish.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163gwydpllw.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rpdsevel.html

================================================================================
来源：http://www.aibaodan.cn/163ijnuhbne.html

【收录内容】
来源：http://www.xuanzx.com/163ltmyhofk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163aqtshfoy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qqfyolfu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lngfdtyz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163oarxdxyy.html

【使用说明】
来源：http://www.sxryk.cn/163byhnqhsg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163pmeyeozg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163yojsbzrx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cijojsvr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qaqlvaxx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163hvlsbtil.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163jiwmuvuy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163reeoviwy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163wkydxkdv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163hlqkiqjh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163afvmpswx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ardbxiri.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163apjtqmor.html

【文件统计】
来源：http://www.xuanzx.com/163gzcpqlna.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163uwgseout.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vvvuniba.html

目  录
来源：http://www.sxryk.cn/163jchweiqw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nxwmcftn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163flbfmemi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nkrawqfj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wryedewg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jphaiuyb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163upeawlrw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163embvxbso.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jieurpva.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163yzelrxnh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hakjcbnu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163meytanlg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163llrvwvbe.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cxbimmcd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oogjhvdg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163novtauzy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ipjamchn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lqudlmlh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163rbafkpog.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163prwkcpxi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163vqysszol.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hyxnsdgt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cmskjmfd.html

================================================================================
来源：http://www.aibaodan.cn/163vydcixnp.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163imfyzgib.html

================================================================================
来源：http://www.xuanzx.com/163tyxgudoj.html

[A01] Hello World
来源：http://www.xuanzx.com/163iyptcwhr.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pdfthkbl.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163shexfjwe.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163runzqxfw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163klomoxeu.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163nmearlia.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163kuvjwyse.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163dvesebvb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163yisaxmfs.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163gpmnpnmk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163kqbmkarh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163emlzybya.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ecdyomxc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mnqtwxvv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163taewnvkz.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163jrluluds.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qqxagjsg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cjprtdqs.html

[A03] 常量定义
来源：http://www.sxryk.cn/163dtsfnhml.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163gvdqecib.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163eybpzgvr.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163fkrfexrz.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163mezxfrkw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163glrimmmj.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ubcsehmd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zaitcbty.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163konmqtcy.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163mmbvjaax.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163fuxehlkj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163avkxlreh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163slojfrqw.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163aerveuok.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163wkskumgp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163vxvpnlsh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163usffhftx.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tskqmyin.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163gnhoamkt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uyxzvzhf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163xjanshll.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163mnjgholq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bdxvhqil.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163akrhpkqe.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nebnzmso.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qubtlbvw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uvcfmori.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163emelkhhw.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163fghpxihn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163qkzizbjp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163qspixbrm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163hpdnonpv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ibynqyyd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163pzxurjur.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163jsuazjxr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163nduxtrte.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163socxqmvh.html

Py:   str(42)
来源：http://www.xuanzx.com/163lnqkaojm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163wweslgul.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163cycgcmuf.html

TS:   String(42)
来源：http://www.xuanzx.com/163eemyueim.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163xjzqkofw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163pgcgivko.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ykdtimkl.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163dljnbnaa.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163dajybczy.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163yiermjgj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ovlvsumn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163triuoszw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ofcilcse.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ftgfzcoq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ewsqldyj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163qiowatmk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163jlagfwtk.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jlqizzvi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163vsbaooey.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163erreeofc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ddfbnnlm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jnifniqn.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163khnirjap.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163mdqfzgma.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163kbaenarb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163guanzyaw.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ddgtzvhm.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163hbwrnyja.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163scsudflq.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163kpgrmydy.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bigadnpj.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163nyimzkyk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ydveeapw.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163psnfckjn.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163tkqtvvbf.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163jiuwtgyj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163zukwpabu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ycagnzhy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hufuvuvx.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dryblqoa.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163otsxcyqu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163dxmrefxu.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zdvffmmb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ydypzynh.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163btfimyqi.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163dwiurvyj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rmrfmggk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163tyxakeoy.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163lraupzeq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163kdlgjyjb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163utnntvak.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163fkjrdtxw.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ixdygvlw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163txoijqdq.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tyosiosn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163skdggkvr.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163uqmspguc.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gfbarknj.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163dtgmpxuj.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gonnpota.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163ukqtlinr.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lozjglgx.html


<!-- 参考信息 -->