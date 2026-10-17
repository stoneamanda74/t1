外链999!wailian999！

[U65] PHP：会话
来源：http://www.aibaodan.cn/163xigzpogz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163cprrealb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jxpwrcjx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qepdttgw.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163faqewwnf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qtikwxju.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163jkblvcat.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yexxpcrb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xllkmjvf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163chztmdsf.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163zdmlzvjk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xompmogh.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163thkswvdy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163whymvlgu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163jzsavgpv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qkufsuwu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163bpvseksj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163rmjcnyun.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163bzognufl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hfdssagi.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163epespome.html

composer require psr/container
来源：http://www.sxryk.cn/163llbepoxi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163muzkahlx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wbbqumpf.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163inupfwqz.html

composer require twig/twig
来源：http://www.xuanzx.com/163lsgjgsvn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163mygsbxud.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xglmjyyd.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163mxnwiert.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ctpsrilk.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163intpnyke.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163phjexnux.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ufrgawhw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163gdnovcbg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163gmapkuak.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kqgewccp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163syxmqhif.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kpjhhwfy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163shzpmmod.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163grjcdnjn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163qelhovwu.html

a?.b?.c
来源：http://www.sxryk.cn/163grcitwha.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jaslrbwe.html

a ?? b
来源：http://www.aibaodan.cn/163iwmhfirv.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rnxcxsvq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ycmqswtf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lgagkdoi.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163lklkhldo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163vovryzlc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163fikbpuey.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mjrymoaa.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163malwgefg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zblqnqgj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ehsffkjl.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bkimbsfl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wqzkybuh.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163gelvbopl.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gzkhbrfl.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163wdzeyjay.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163vdxpnvhk.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163twncewkr.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163kcvyacky.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163psawmrfz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jctmxnlt.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163srdjtkfr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ehlajtfe.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163evjbdrbu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nmnhfulg.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163hlfqrqtv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jmfmucib.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163gephviuq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163sygaaggm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163kqstvtms.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lfrgufep.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163lbwsivhz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yoxeiuav.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163wmivhdfm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bzsoginb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163hlhjdtyc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lelkamzq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163mxnwlzmv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lpwufurf.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163nznvidgc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zupintxd.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rqvbmaqn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163yprxdlyi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nqbgggtq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gogosert.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qktsqtgc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kvdfenvq.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163udrhooyo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zjqbafxg.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zfimkrws.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wwritrws.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163sznsjjjr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163rsvdqeev.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163uablenyl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dcgwzmvz.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mlxnsfhi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pdohdzla.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163lhelytqm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163kygiekmd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163yvhwssjr.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lbzpmgng.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163uemzycds.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163iuwncwva.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163svrmhddn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wcymqids.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xpblybds.html

npx vite build
来源：http://www.aibaodan.cn/163lvlmlobw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163rpqrkswc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163friaotki.html

================================================================================
来源：http://www.aibaodan.cn/163prjbesas.html

统计汇总
来源：http://www.sxryk.cn/163lwtrpmys.html

================================================================================
来源：http://www.sxryk.cn/163bjpujmdm.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kpuwqpkq.html

Python ......... 252
来源：http://www.sxryk.cn/163oohwuljn.html

PHP ............ 252
来源：http://www.aibaodan.cn/163niewjvui.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163zoxiodnj.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163hlzjtfzr.html

Java ........... 212
来源：http://www.sxryk.cn/163kuspuoam.html

Go ............. 212
来源：http://www.xuanzx.com/163akdonrdn.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zwwtvobg.html

C# ............. 212
来源：http://www.sxryk.cn/163ickuzxao.html

C .............. 30
来源：http://www.xuanzx.com/163cirtqjpk.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ixevqopu.html

SQL ............ 90
来源：http://www.xuanzx.com/163qszgdpar.html

Bash ........... 80
来源：http://www.sxryk.cn/163zmfskcut.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163umrrksba.html

Swift .......... 15
来源：http://www.sxryk.cn/163mfgfdklt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163bmbjbxwp.html

Perl ........... 10
来源：http://www.sxryk.cn/163hinreajf.html

Scala .......... 10
来源：http://www.xuanzx.com/163cwutsges.html

------------------------------------
来源：http://www.aibaodan.cn/163xologtir.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163zdfgwyav.html

按章节统计：
来源：http://www.sxryk.cn/163xfnykhzl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gatthanv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163iwkahblw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163psdhtjog.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qxqhzsre.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163wlgqwiod.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wkracnhh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jkbpyayg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cdqwycur.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fmvgbbeo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ndkjypdn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cjoyglmr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vsmzasdc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cnrmptzu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163deeyonyk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163coblirrc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mpevkvqq.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ftxhcqth.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ilosmjao.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ukxhlobx.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163utupiear.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xtmyqkft.html

------------------------------------
来源：http://www.aibaodan.cn/163fpbbvmvl.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163akhgetbl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163auvhfuqo.html

使用提醒
来源：http://www.sxryk.cn/163qwihfaec.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kzzytewp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163gntutfuj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lfgxidiv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163eyhehxae.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163blxjbrkt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163ohctbxpu.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163mupfwkft.html

================================================================================
来源：http://www.aibaodan.cn/163vepnxgsn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lmvkyaft.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ikxppgik.html

================================================================================
来源：http://www.aibaodan.cn/163nhuhajra.html

【收录内容】
来源：http://www.xuanzx.com/163pleundgk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163akgcnckp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hvavqrja.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163papxkcfs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bztzrjos.html

【使用说明】
来源：http://www.xuanzx.com/163msjdjbqb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mkppdubl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wezfdpzb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163uxksqfbc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163nfhqmwgf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gxsuemmo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zqapvncb.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163bxilhcyz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163mtkwkzva.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vhvvjulm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163imqxvtfl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163asyaxuwu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163sneirkrn.html

【文件统计】
来源：http://www.aibaodan.cn/163egoxrxww.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163hqqhfmzo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wndtblqp.html

目  录
来源：http://www.sxryk.cn/163vrbvpagu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qxfunvda.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tmmdjsoe.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rcnpxcsy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jxzevpra.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163aobrbwxb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ulyhevhh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wwkbzhiw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163evpovlic.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vopzatfj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163getcorxm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kkdcyvmm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rmxjscer.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ezszbpvb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pnsbksfn.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rrhzbfmz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tytklnma.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bwrspuhu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gotsapuf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ogggfehl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163udknkvdt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yvakbuaa.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xjmffwwt.html

================================================================================
来源：http://www.sxryk.cn/163bjiiyrlj.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163eokzehhf.html

================================================================================
来源：http://www.sxryk.cn/163khwufqgs.html

[A01] Hello World
来源：http://www.xuanzx.com/163meetfpxo.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163tgnugdaf.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163pbustasg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163xkexumfo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163cixdqvxj.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163fpjsnzwg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163lzgnlpfz.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163xymnigjd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163lafppkew.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163rkmryhdz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163nhrmivhf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bhabnoad.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163kvnxnuar.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163sncyxqxd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rduxjhsx.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ytqqbbpo.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163iuyngaia.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wauiyvno.html

[A03] 常量定义
来源：http://www.sxryk.cn/163wepafosh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163etfxcfpt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163kydrxsrb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163bwnstocs.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163hcokzuef.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ovplareu.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163svtaermo.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ytotnhex.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hiptvuvd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163kqegbsqo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pgvyualk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163klyvhkvn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163buvhyfte.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163leqnjgjc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163nifyozfe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mmnttmvc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163cdkgpwtc.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ejxgdopk.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163utqnlddc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163nwhlbvop.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163bmeviiql.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qvqeuacq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qskkebaz.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qdzaufhx.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hfznmfdy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xjeglnph.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lsbhiubc.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163gxfmrdmq.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163hljonuta.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ojildiga.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163wzfynfug.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yifsasgp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163lluowsgm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163lzbfolaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163bidpljkp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ryzxoyci.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163bykxajyy.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hsanedeg.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163dmwkaypf.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163ipxriwax.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qnyxdoxd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163osymhduu.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163zsrffysa.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163hxzmmfmx.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163imbitdxp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163psmxmjdy.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163xjerolvd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163duaqlqps.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163qcgixncn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163pgxpayzd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163urskjnsb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163vbsdzqsn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163enzxgvdn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163iicotxow.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ebjnizjg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163sfpwejhd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ghymnkqn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163zxjikuhy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kpbunipl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163zyftierw.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163vqcoimsa.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163hzyrloqu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163jsrbshad.html


<!-- 参考信息 -->