外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163dovdnsds.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163gykfjixj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163npupjuei.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163uzzxfifc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hyuqdwmt.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163udyvtvcp.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ackqgngc.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163bwnenhmj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163epfmnacv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mjuqzgcc.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hmyxbwdr.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hazxgugo.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163viwqmcji.html

composer require psr/container
来源：http://www.aibaodan.cn/163uwtudvxz.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163fhdbvlwn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tailjfhm.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163lazwabph.html

composer require twig/twig
来源：http://www.xuanzx.com/163lzngxjit.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163svwtngwg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163irwblmkq.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zubaftqn.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ivssugle.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fjinbuzh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hqcyuwao.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163tazlepbq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163wjgzypps.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163wzxprklm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xmsebyjf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163wdebbrne.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163yxonjuhu.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ywrgtmes.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163kwvrfasj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163sxzovvdl.html

a?.b?.c
来源：http://www.aibaodan.cn/163fwjicebe.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163kepgrxqy.html

a ?? b
来源：http://www.aibaodan.cn/163zrqmstio.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163hywskabs.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163htkdxsrt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rxqorefz.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ubtjfsle.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uuulhdjr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163adchfjqq.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163qxlrewvw.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iodxwgxi.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163aacehbfx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rkfbrndj.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dzauulch.html

structuredClone(obj)
来源：http://www.sxryk.cn/163fdubhpni.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163fiticuor.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163mmniflfz.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qahnqdwg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163sbgjycze.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hjoqqfhp.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vhrbvirz.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163kpbrhhvo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lppxbjfy.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163rhjmqqmp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qforzlse.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163iukjzafj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163cmexjyov.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ajbvgrpa.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163qfnbkbnw.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163xvjsopch.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kylcbwta.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ddgntioo.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mfsechzf.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rjlbpqez.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163duqngwmv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uyoiaoss.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163syvjcbuf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163lfdcoiew.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163exrvcmyc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wqinlbeg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163znirwzrd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163fpwvvvga.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163tbavstkq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hbqnfhkk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xubshgwl.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163favvzcwf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163hcgclrdf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yjgrhnnz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163exivjstx.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163feovryru.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163netmvvwv.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163atdpowhi.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163djbrbopn.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163vgtpikho.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163edvthttz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ipnwtrvx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gqlgfdaf.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nkkbysnh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lgyextmo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ykaqoijt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rvgfetsi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hlsubyap.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163mmksltzf.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wwzhufnu.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163sqjvwfha.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bugisefl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ivuykzzo.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vadtctke.html

npx vite build
来源：http://www.xuanzx.com/163vrjrngfd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ltvwjmny.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163wnhqavrx.html

================================================================================
来源：http://www.xuanzx.com/163qbuftvzy.html

统计汇总
来源：http://www.xuanzx.com/163xfbvdgjs.html

================================================================================
来源：http://www.sxryk.cn/163nweklsyq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163nfyrxcvk.html

Python ......... 252
来源：http://www.xuanzx.com/163qucfgajv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nwpzmmqd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163sermdvtk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163feogcqxn.html

Java ........... 212
来源：http://www.xuanzx.com/163xxxfrqcl.html

Go ............. 212
来源：http://www.aibaodan.cn/163fgjedrhn.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ljhkmbbt.html

C# ............. 212
来源：http://www.sxryk.cn/163lqqxyitz.html

C .............. 30
来源：http://www.aibaodan.cn/163vzkevfbl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163mooczxdo.html

SQL ............ 90
来源：http://www.sxryk.cn/163ckygwmem.html

Bash ........... 80
来源：http://www.aibaodan.cn/163oemrnizz.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ztkutqly.html

Swift .......... 15
来源：http://www.sxryk.cn/163sshozvjg.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ztkimzxb.html

Perl ........... 10
来源：http://www.xuanzx.com/163ybqryvoo.html

Scala .......... 10
来源：http://www.sxryk.cn/163rmanxtat.html

------------------------------------
来源：http://www.aibaodan.cn/163lbqqsekn.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hrzreuso.html

按章节统计：
来源：http://www.aibaodan.cn/163qbfccrex.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163csmemzsr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mxcxlvbe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vxokcokm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mjgaxzfr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xgdyltmg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zqbegeof.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gijgnirr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pxypjpyv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ejonbuhq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bucpoydi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dcxndwvc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hkzavveg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rhjeponr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vgymygzz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163glpkqshv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qevkydnl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163aavcxeus.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gjruddop.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lznxymhz.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163rjnokszd.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163qupzvzok.html

------------------------------------
来源：http://www.sxryk.cn/163mlddtxuq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163fddkztwx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iszrqumu.html

使用提醒
来源：http://www.aibaodan.cn/163mmdcpror.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dldplwut.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163igymfrcr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163zmtdqwly.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163iordmuxm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163aoouudwh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163bvcfscrx.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163aqohekbz.html

================================================================================
来源：http://www.xuanzx.com/163bpdfhxou.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163brafbtgg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163iucvjvnx.html

================================================================================
来源：http://www.sxryk.cn/163bidyhvfo.html

【收录内容】
来源：http://www.sxryk.cn/163nilujcib.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ovsazejs.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163oplnwdnl.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qkliekgz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163aifwmbxv.html

【使用说明】
来源：http://www.aibaodan.cn/163srvxmzul.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163binivozl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163rlpteebq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163htkibvrx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163qlnnjhlr.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jptlakgm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bmubkixr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163bklecslj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dtmyfdqh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nsyyqhly.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163bddbljrt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163nbuiqnoh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163yqblyujc.html

【文件统计】
来源：http://www.xuanzx.com/163rcxcwdxp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163kainamjn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aypxqmkd.html

目  录
来源：http://www.xuanzx.com/163qihidrle.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wyfqwqcy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163owuhdbvg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163foffhode.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yurrvyyk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zenhblay.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163vhiujxpi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163uknhdkis.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kqpkrtao.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zeaqhtfe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mcbxbpoz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163olraqtdv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zqqgaavi.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163horbkopv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jkpkitxg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rvujobuf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163lfdtoqec.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qzlzifsl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vshalcmr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163oybovzor.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163hywunjvx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xyopffzv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163yatkurlz.html

================================================================================
来源：http://www.xuanzx.com/163cbzfyfqo.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qbyphkxr.html

================================================================================
来源：http://www.sxryk.cn/163ndnkcndr.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mertbepm.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lctkglel.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163wifqzaur.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163klnmlfrw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163gjiebunn.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163xmlczmov.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163dkebbpww.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163doownyvd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163qqpyegce.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163mkzzsyis.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163aqdmrycc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163yqdncxre.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163qhhabgho.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163imweqekk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163oeqyfzeg.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163goywrzdq.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tdljquxc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163bkyfiiqi.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163trdkamhh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163kjcjledb.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163lriajkuu.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163iccsasvx.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163sfpmilhn.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nkmugiau.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163bxcrxgbw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163roytsoyv.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163rtolrtid.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163twyrbaaw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163fmlsxsrf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163peslstxp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163uiubdxgq.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163hfocezng.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ykzeoklo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163pavnbowd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163sdmqhdza.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ksuwtnfa.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ibkmaaxm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zdzklkad.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ogmhuevl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yimmkxmy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163snjhqypd.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163whqvpjqy.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163iagmueun.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163tiddnzuj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dscnbdwe.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163xpceszno.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ddjdmpiq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163fvvbwazs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163fnwsvepb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ldyezxfz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163rryqvpqb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163mnbvnkjy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163iyuipphr.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163wkahvihd.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ixuuwbyo.html

Py:   str(42)
来源：http://www.sxryk.cn/163btbweqbj.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163trvustpe.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163szvwtuen.html

TS:   String(42)
来源：http://www.sxryk.cn/163gxjfcaeh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163soqfrbtn.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ybglajzz.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163yejxcdsg.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163dfdjzuly.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163wetoqdba.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163jnykklmn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163srucbzxl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163odonwxpv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163jwjvkkxj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ouzzmdbp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163gcvbkque.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163gildcpto.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163qbmufibm.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163xntlppen.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163bobgeona.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163alagizbi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163twmnfzky.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dygobuct.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jwginpyg.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163agdniqup.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163cvejzgbu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163nwuxoysq.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ijvnqcpb.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xupxqrgw.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ohktgupk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jihbtfvt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163vbqptfru.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163bqkfsaim.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xbckpayh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163uhldmmoa.html


<!-- 参考信息 -->