外链999!wailian999！

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163xuguulng.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163bgcqfynm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ikukrnff.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163lqqlcobe.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ksnechcz.html

a?.b?.c
来源：http://www.sxryk.cn/163flzukjun.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163scdsztwf.html

a ?? b
来源：http://www.aibaodan.cn/163leojgvru.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163pwgmqmtx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vwejbdow.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163djviwcpm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nuhhovpc.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163eeinqvjt.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163thntsycy.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163lzjczztj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fglykscu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163depjmzbq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vgzghjxe.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163acxyrkxu.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vclsoliz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zahwpqan.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mbewkihr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163zzvvbizr.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hlnkvdxt.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mwaudbvw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163kzxcngrh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mbdarhsu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xevaeufe.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vrkirfpb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iiiysrjm.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163navgiotv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163aotysnhs.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163zekjetqb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163tkknytsm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xkmxptre.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163cdtgjcsu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fwjvqqan.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fihpqgwq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163lkcsrzyg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yepwqtas.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ibmbowxq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ihmncizs.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fufagocy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hcayycaf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163vffliqgi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163haefekuu.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dqfkopst.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ltuvcfwi.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ktxelreh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qierpqkw.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163coaqffum.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jkqirubi.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wpisxbbn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tkqzsxra.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yeovkequ.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163tlvaeweu.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kzxbrcgn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xyktyunu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zcqxuzwk.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163bccqfiou.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wfmsqjmy.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zpxjdxzs.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163pwfovasn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lkpdjxrw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ywbqpayl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hndpgpjh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hgqfzspv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dtqnsjun.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mlnivzgp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gbbhsejo.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163tvljmzrm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ybfzuxpd.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zljooeah.html

npx vite build
来源：http://www.sxryk.cn/163tsugboqf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fbgemrig.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163oizryqvv.html

================================================================================
来源：http://www.xuanzx.com/163loylmaqh.html

统计汇总
来源：http://www.sxryk.cn/163afqirtca.html

================================================================================
来源：http://www.aibaodan.cn/163ofjeicnn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163dpwhnsjx.html

Python ......... 252
来源：http://www.sxryk.cn/163lflolyfc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vdemtrgw.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163bamvdukp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163oiufxpyn.html

Java ........... 212
来源：http://www.aibaodan.cn/163wanuovha.html

Go ............. 212
来源：http://www.xuanzx.com/163gwsrlgxy.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rtbmagiy.html

C# ............. 212
来源：http://www.sxryk.cn/163oitqrkua.html

C .............. 30
来源：http://www.sxryk.cn/163boteybfr.html

C++ ............ 30
来源：http://www.xuanzx.com/163utltrnsz.html

SQL ............ 90
来源：http://www.sxryk.cn/163ciwdgddw.html

Bash ........... 80
来源：http://www.xuanzx.com/163sfwqfxtp.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zchqbhrf.html

Swift .......... 15
来源：http://www.aibaodan.cn/163yktksrhd.html

Lua ............ 10
来源：http://www.xuanzx.com/163tgbksjqy.html

Perl ........... 10
来源：http://www.sxryk.cn/163hlypviti.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zbehrafu.html

------------------------------------
来源：http://www.sxryk.cn/163slzvqwdh.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ipeehavh.html

按章节统计：
来源：http://www.xuanzx.com/163vwkfdvcs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xkirnjqi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ouxfrlrx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163oujbfwil.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hyouirfm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ajpyhdln.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zvtfgqdf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hzptpnif.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ihmgovmr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163oxelxfwq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xxpffgrq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iqyhvasq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cjuqaxzm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163foazryhz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163rxjqhpew.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163aogmdhce.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sxqgjrjs.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ecfvliwc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163tkwxlaaw.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163aazyqijv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163spkkgtvr.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ckpewplc.html

------------------------------------
来源：http://www.aibaodan.cn/163nsumiryx.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163yqpsprpo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163azahevtw.html

使用提醒
来源：http://www.sxryk.cn/163wdfixmpr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ndmtwbov.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163eroawwba.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gutbuyxx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163uzrzknva.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163msmlaxvt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bmhccnxp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ruauhlik.html

================================================================================
来源：http://www.xuanzx.com/163uzjqlqqr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163owtevaeg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163pijvsbpm.html

================================================================================
来源：http://www.xuanzx.com/163rvhtdnmb.html

【收录内容】
来源：http://www.aibaodan.cn/163ejudcpyp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163tmixwbsp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163yrstpwpm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163jeptroce.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163snnqdmbt.html

【使用说明】
来源：http://www.xuanzx.com/163kmsmcfsg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163fpjahxin.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163vrvzvfes.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163nqktuudf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163wbyrebib.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ildlpjtb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kmbdwpxs.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bkpjhyqx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163sqackqgr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163mxdqzgjh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163jcwybrek.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rbziyiug.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163iojsyacn.html

【文件统计】
来源：http://www.sxryk.cn/163aobknngg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163cngyqstm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163msxizdhl.html

目  录
来源：http://www.xuanzx.com/163cnutdnin.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bfipqacp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163gbtvwron.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vcqoghpl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iosoctiu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rcfkgvki.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163zisyctob.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jvuvnvvr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pwmlxfiv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wvuvzymf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ihmdycvs.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wkpcnjvp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wmovbhvf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163acddstgt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163juxxsuyq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mmhwhmez.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163nxlprupt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sgswxgtc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163owzfefmg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163yuzummiv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163njefqais.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dwdteitc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eslxrnnj.html

================================================================================
来源：http://www.sxryk.cn/163yzisnfxg.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163yaajoxkq.html

================================================================================
来源：http://www.xuanzx.com/163xbexdpep.html

[A01] Hello World
来源：http://www.sxryk.cn/163npjviqqd.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163qkyutyrd.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163reybybxm.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ecaegnpu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163viyijnsv.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163mmjjzobo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163njhqectz.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163sfpjexpz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163csivvbon.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ootypvnh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163qhmzjflf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ngvfzkru.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163sqyrjvgq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163htumheal.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qwlvsmaw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163cigrzzyc.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163lvkfetlf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163cwtaxwcm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163jvpoxojl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pjjppxtw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tjgcmeec.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ngcmvazg.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163gwyasgii.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163zegoviqh.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163lnjqnown.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gtcncweh.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fmqokuam.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163gcbkxfgc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163glwwpayb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kewfddjt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163nqnmsvmp.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wdnwxzqx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163itgznfdi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163fgzendwc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fkrfahme.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vyjzqqpu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hpqvtolg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163xgtulvld.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ztbomiig.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qjtdjrba.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163duqkrjxv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lrgyuubq.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163clafxprc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pzzbixhh.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sckpvdnw.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tnmnahzj.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163obufcizu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163uiaewviv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163hvogapss.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163lkcmvrbe.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ttlveign.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163unhlncov.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ojgdpwwa.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163zcrovpqo.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163bbzmgclq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163tmtolsnr.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163bpedxorl.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163mtzndicn.html

TS:   String(42)
来源：http://www.xuanzx.com/163iqaaqjip.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163lwdfwxxw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163bwtwgqaw.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163mjngtcwy.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163tptjudto.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163wpkpjalz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ladgauvs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163dunhdfee.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ddlawubb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163txooxulk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uullhgbp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163siyrnogp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163bslzjiig.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163cqvhpmim.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163pqblxqxp.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ykduerww.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mseymjhm.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163dettecoo.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163trajngzj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163biiliqmy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163imumunco.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163fchvdqwl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163lbhgerjp.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163pyenqegh.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nltpipwg.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163cqdtwozx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163twgzygkf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hbphexgi.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163wygyqzew.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163qpeymsra.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ytosmqsj.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163sdnbsebn.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163kpwoxqgq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163bnrpdjok.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hqtdsjtt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sljokurs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dlzysyyh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lxykpyzh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ahfehqcl.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wluqiilc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nsxrayve.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163rxmwznnp.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163qsxtjhvo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163qznhiohd.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hagueevg.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ndfyjvmj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163rqvordba.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163tfkulmnu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163kzjqyvom.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163enbohmuu.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163blqbxawj.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xyykbekk.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163lzmadgfz.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hheepmhx.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zosdghlx.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163amlcnaii.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wxyrkyzr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mzkeqeem.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mndsyupf.html


<!-- 参考信息 -->