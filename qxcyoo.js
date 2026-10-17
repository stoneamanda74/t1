外链999!wailian999！

[U65] PHP：会话
来源：http://www.aibaodan.cn/163lkmudblw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163inqvbryj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qowoymsc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163dwksfvhs.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163opekpgso.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163dvcptkiw.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163cbdmcjhf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163fntevghv.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163zkasdocs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163egwpudll.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163hmdueshs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163gglacrwz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163fkynbcsm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163yqhkfvip.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163euxxbuwi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163izykmwxr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163yakgpwba.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kgoqkhqr.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rnbjtnex.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163trksgyow.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163zhgvmecl.html

composer require psr/container
来源：http://www.xuanzx.com/163wtbletpd.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163nomluprv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163yghigmhg.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nufnrogv.html

composer require twig/twig
来源：http://www.xuanzx.com/163nrrqryej.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163dtkkruli.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vvpmnppo.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wudzrtpz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gdtobmpr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163suoxrgjl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163sccdrrum.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lgzleeeo.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163abfmtifr.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dbbymqaq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vejdbodm.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wzxdumeu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163zhkpjgat.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163vwrefokk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wqhubayo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kylyhxwa.html

a?.b?.c
来源：http://www.xuanzx.com/163vjcwfjwt.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163dtnxwjwq.html

a ?? b
来源：http://www.xuanzx.com/163ozbarotv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tbpgkljl.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bxvdbzdm.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jszleftr.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wftawoua.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ykwyxfml.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163axfnyzlr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163yqdudwhc.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cgnxazyl.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163advpekld.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zbslethi.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tuaolemw.html

structuredClone(obj)
来源：http://www.sxryk.cn/163grvsnkms.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ixwisetx.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ozjtlnmb.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163aopznqew.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xdpvipxk.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163kakvgmet.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163krptxots.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163phnqvhqm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nvdluljz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qmwpjkue.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qrczknko.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wvepdzvw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163kwlavwne.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qlmqldpf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163hktarbuf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xcegqnxy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kcbburrx.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kjutwzjk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hrahwecq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163sdnndblb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jefqtwxb.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163okehsril.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wuqyelpt.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lskqlxxv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xwfjgztd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ajtgzjrc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nyqjrfkx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163afevhpej.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163yhfmdwxd.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163cdwnvrat.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hlhjinpm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163spiebffy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163awdgybac.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yvyktzfs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nssymfot.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tmzovmws.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163netcycso.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ksjjhkbi.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163bypyzmew.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cfckblyq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163rcurtmvu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qjpkrcjn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ghaiqoef.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163nuitkeki.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fexueflm.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163srrwlyqe.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163pysvyibu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ivjrstlx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163bamsbaqi.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xhtrdfnv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uhogdqjs.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163psduaxsx.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163hclttzzk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163plqccxor.html

npx vite build
来源：http://www.xuanzx.com/163ydubqbkx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163igteslad.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zdkehkdh.html

================================================================================
来源：http://www.xuanzx.com/163hjcvsjgq.html

统计汇总
来源：http://www.sxryk.cn/163esgtrteo.html

================================================================================
来源：http://www.sxryk.cn/163ierokdbz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163pnqkuhrr.html

Python ......... 252
来源：http://www.aibaodan.cn/163sueyenxa.html

PHP ............ 252
来源：http://www.xuanzx.com/163vndbithz.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163hrfmktgg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163szsfckst.html

Java ........... 212
来源：http://www.sxryk.cn/163drwzibbo.html

Go ............. 212
来源：http://www.sxryk.cn/163fsbcvvzx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lmqskqos.html

C# ............. 212
来源：http://www.xuanzx.com/163hhobeqzd.html

C .............. 30
来源：http://www.sxryk.cn/163tnzlgybl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163vnevfwip.html

SQL ............ 90
来源：http://www.xuanzx.com/163gzpupsnl.html

Bash ........... 80
来源：http://www.sxryk.cn/163aqzcohoz.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163awtuszfb.html

Swift .......... 15
来源：http://www.xuanzx.com/163qnsqnais.html

Lua ............ 10
来源：http://www.xuanzx.com/163xesarxuz.html

Perl ........... 10
来源：http://www.xuanzx.com/163ssrlwzjd.html

Scala .......... 10
来源：http://www.sxryk.cn/163twkpbafl.html

------------------------------------
来源：http://www.sxryk.cn/163awtwdunm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163adnyafgs.html

按章节统计：
来源：http://www.aibaodan.cn/163ymvukyjq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163pgihhrqu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zlqfozuh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dqnydvrx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jqmeicle.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vrchosfr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163atysmceb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bvionxnn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163faguhtre.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dmpvidlk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163cmqlphlb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vdaamwxr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163suklvktr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sxzsfcrj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163borlurab.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ivrcnmpj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kughpfxe.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hjxmmwaj.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163phglblst.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163kyuvwrti.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163kklrvesl.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zibwmbst.html

------------------------------------
来源：http://www.aibaodan.cn/163gnkfjkrk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vsewcqdp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dwzgykdt.html

使用提醒
来源：http://www.xuanzx.com/163wfcaqeba.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uxbuevly.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163copthcao.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kpuijigy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163liawosur.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163hqmoivpd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163jeyysmce.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163dauwsmjx.html

================================================================================
来源：http://www.sxryk.cn/163gyolibhj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163iaazvmmg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163itpvdjfc.html

================================================================================
来源：http://www.xuanzx.com/163kbbvkyfh.html

【收录内容】
来源：http://www.aibaodan.cn/163bcjdnrod.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ucclurie.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mshzlpky.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163gfxqbsph.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163lflwwbfp.html

【使用说明】
来源：http://www.xuanzx.com/163xkwyginr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mahvtvco.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ginriviv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163gvlbiiqf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163vsggzaoz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163uopvkakm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fqwlwjlg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163kqwnuwvb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163osctwqte.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qzhlypeb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163htqdxzqh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163adnncefb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163hvjzfifj.html

【文件统计】
来源：http://www.sxryk.cn/163vbybynkj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163gwpuzonm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cwkbmsex.html

目  录
来源：http://www.aibaodan.cn/163uxpgkccy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163skqwesov.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ptecttyn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163nenejdzp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rxtisgfr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163stkuxtgk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163eranzucr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ruxnbmne.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bcyvfcav.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wmppndcy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kbdqyrpc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163uiarcyzo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hmktbnvk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fvsamxgb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qxzaprch.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hckgptrq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ccyrwxzp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tljdcliw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163yowmtswz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mbfceohn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163fihkczxg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hewmwmww.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lwtqpqbc.html

================================================================================
来源：http://www.xuanzx.com/163bpjuwunt.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163cofplxgu.html

================================================================================
来源：http://www.sxryk.cn/163nyodwyde.html

[A01] Hello World
来源：http://www.xuanzx.com/163saoxmttn.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163wkjkzevy.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163wlntijhf.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cusztlzi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163pmkhcirt.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vrumeijx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kdavcdda.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163vschjnxq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163frfppjmx.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qncyvhue.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163fyteahtw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163thqbiqwf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yvzdlbpm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163heurxzjl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mtibsibi.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163zktgtttd.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163zpfvdgjh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rltpsriu.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gcylxbje.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163qykclqui.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163yhxculxh.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163igksttlf.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163zvnovczd.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rvfsbldi.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163tptqqqca.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163eakqqdlp.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163tgwbwrzd.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163nvgczujd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163vdfbsmwr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163zllwiyyh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163rlanvzmh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163jqqpgtyw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163bbefbjzq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163tvclaadr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fmunyuam.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163yfwtkkja.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163abhsigom.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163yxhhtsti.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163uulobjgt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163mmxvmbba.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xqugczfa.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vzastalp.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nxvbmupt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163raejpuwg.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163aqvfvrrk.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163pxvpdeju.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163djeqyuqj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163lfwektpe.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163faifewyi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rsisfelx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163srvozfan.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nwzqncic.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163yympxyxw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163bkdmrmju.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163lnzzogss.html

Py:   str(42)
来源：http://www.xuanzx.com/163sckjvvqo.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163qejhxqhw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163omycchzo.html

TS:   String(42)
来源：http://www.sxryk.cn/163jzmoocki.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163trfdeayo.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163wpeczfpd.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163yqvkwzye.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163aeqhydeu.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zwcrbsva.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163bzinrmiu.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163zjgjtlpr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163diudvucl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163vtscgdcc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163zuuxchvl.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163jscholbs.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163omnvokyg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163awaxmlib.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163dxzozmuf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163xswmbbgb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kgrxlnhw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163wquqtagz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nryxxrjp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ogjhppdu.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163nqxukjqr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163cporhplp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163sqtiqbhd.html


<!-- 参考信息 -->