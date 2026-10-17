外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163myqjfxam.html

"值: {$a}"
来源：http://www.aibaodan.cn/163waohmogh.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jiyrlmwb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163tqoktgmi.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163bhhodlzp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163swnmhgss.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163toavkagi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163bxkcorax.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163qnodtlvw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kyrhlymm.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163norvjolb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163cjmuppmj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163vjubepvz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mamzbgxo.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ytpwrqtw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pbddczac.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163yykekmem.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xzouxlye.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163cevwmbnb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ylpzxzgp.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qeraqtll.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163lyloaufi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mrkokrjs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163erpcpadb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163rarwbvqm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163amhbttlw.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ersjoiin.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tsjonwxn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qfacmnxr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163esvunksm.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ipyfekdl.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163goaaqlbv.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ofbzuhjv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hqfnpfiu.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rpkptrpq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163liodbfwk.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hhxlvodr.html

composer require psr/container
来源：http://www.sxryk.cn/163tprhzlhx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163exvsavae.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dafazxpq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rjhrlsgu.html

composer require twig/twig
来源：http://www.sxryk.cn/163eejwwtkj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xjspogqv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163iieeqqyt.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vexrvele.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163anlzglyb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vkctisyb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163jplgkoib.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vyebucyk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163jmppdrjl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163hzrmjfll.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mgcvjqbv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163sfkaugqd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tsftkukq.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lgiboohl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xiiuioau.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163eyqokcmk.html

a?.b?.c
来源：http://www.aibaodan.cn/163rmuznegy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ozpuopmi.html

a ?? b
来源：http://www.sxryk.cn/163bylyxtjt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qyhkbvjz.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163exovlgzt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163mbmjfyke.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dozwajrf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163faplwxfj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163whyqmwfa.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ayxywfas.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jfkhmldb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dmpszmyc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163pwiyvbiy.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fsmpjcgj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163qpbftjrw.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ghxkqxhd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qknvjrkq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gmsfowjo.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gnvtetuo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wxfqbbus.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163oaehlxna.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163iefhtjou.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pucgvowt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yvfzxgpd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uopswira.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ycxrehmp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jqwcugzn.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163nsfyddvj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163vassfmln.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hlowzhqt.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pbfvxljy.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163udbnttbi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163eczgjtps.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163wavdkkio.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xtuodnew.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dlfaidrh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163pdewdwys.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ccyfolak.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ecleuxpk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163qcqmrtyq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163oydbhcuz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163qmsqzoxs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dlvozwei.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163msrciwto.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gqlpngmd.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163noefejlg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iokcmbbu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163qbdzdedw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kpeufaac.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rsdputiv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gsexupxb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163izfyinai.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rxcoakbj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ghczoxgx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rvymoxmj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mslkawkq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zopgccxp.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kjczdvzh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sbislaiu.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163undyquej.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163tqauhksu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rjaqczvy.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163anbrtcpo.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163exalzzow.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163mrxsomot.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ixwfbskv.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pbqyrczz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ketqrcrb.html

npx vite build
来源：http://www.sxryk.cn/163piomopps.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ivdvmoch.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jgltnjrx.html

================================================================================
来源：http://www.xuanzx.com/163ugcypyqa.html

统计汇总
来源：http://www.xuanzx.com/163syjmbkmt.html

================================================================================
来源：http://www.sxryk.cn/163venxlklp.html

按语言统计（条）：
来源：http://www.xuanzx.com/163yvzrwaih.html

Python ......... 252
来源：http://www.sxryk.cn/163fyybftoy.html

PHP ............ 252
来源：http://www.xuanzx.com/163gqzgvhbm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163spyazqvt.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163iwvfqfrd.html

Java ........... 212
来源：http://www.xuanzx.com/163kawcivbf.html

Go ............. 212
来源：http://www.aibaodan.cn/163xwgvdiju.html

Ruby ........... 212
来源：http://www.xuanzx.com/163aokdpqyo.html

C# ............. 212
来源：http://www.aibaodan.cn/163nsuwmnnp.html

C .............. 30
来源：http://www.xuanzx.com/163hgjiprye.html

C++ ............ 30
来源：http://www.xuanzx.com/163jbfsbbpv.html

SQL ............ 90
来源：http://www.xuanzx.com/163fguqzzil.html

Bash ........... 80
来源：http://www.sxryk.cn/163beykfczp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163nqouvubi.html

Swift .......... 15
来源：http://www.xuanzx.com/163hyvxfewy.html

Lua ............ 10
来源：http://www.xuanzx.com/163kipvaxcz.html

Perl ........... 10
来源：http://www.sxryk.cn/163uqhixyjm.html

Scala .......... 10
来源：http://www.aibaodan.cn/163grmzcbxr.html

------------------------------------
来源：http://www.sxryk.cn/163yxitnoce.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xbyctyde.html

按章节统计：
来源：http://www.sxryk.cn/163qkrxqgyr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163njamoodf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bjyhzgjg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lywigbzb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vpztqdzw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vuzpjqww.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163eyznxqom.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zlgttven.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jofyoejp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gtsnptij.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eineuntt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ppywnrha.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hdsxnmnn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tppqnuwk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ummpsnrt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163jljvoadk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xlyobznq.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163kpbcdrzz.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vgrjirhh.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163buyglimj.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ziqvgqjk.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gbxbvafq.html

------------------------------------
来源：http://www.xuanzx.com/163ftiwsccc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163szarkryx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mruvvriz.html

使用提醒
来源：http://www.aibaodan.cn/163bpkmkths.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zumgnmvi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163toyzwczz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163oetjslwk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163agbgrakg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163gkjsesfj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163gdjmdqll.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163xltvwifq.html

================================================================================
来源：http://www.xuanzx.com/163mndiggjb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ivnlsoeu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163eywrqxyb.html

================================================================================
来源：http://www.sxryk.cn/163laaiprvi.html

【收录内容】
来源：http://www.xuanzx.com/163iwillwjy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163hdsgzleq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hhpkeqpf.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163dvqmiajh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163aswbxifu.html

【使用说明】
来源：http://www.aibaodan.cn/163ymxglggk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dpbsnhyp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163dhnxqkee.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163hqznacwb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163wteincyp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163nynkswdl.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163nbwnytgz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163sryqznml.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cpeijqdl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163yfblhvwn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ppoyykzt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163nwvdfhgn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163frcslcre.html

【文件统计】
来源：http://www.sxryk.cn/163jjzbzmuq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163nyisucsq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lwejpxka.html

目  录
来源：http://www.sxryk.cn/163gvrtzcdb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fntrsnay.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163doizqawq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fqtdqxvf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lwinideg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kuydwqzg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163kxthfvpm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bizyqkce.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dpynyucp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qidxieqf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oboenrdw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163driwhhec.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163whrdscwe.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xgbdpvys.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lekxnsrs.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lapiizcw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163wffbhbuu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ifeygshg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ifgasafj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163woacaupz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jinzzoph.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ycnffggx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163abwgtfxk.html

================================================================================
来源：http://www.sxryk.cn/163skkmrevo.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163hhvmccif.html

================================================================================
来源：http://www.sxryk.cn/163xhzgvvtl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163menmiupi.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mnvkrdcq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163wwtswupo.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163nlhtbxgq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fhpzevvb.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163rixyaijj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163xljtsjkb.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163rgruvycb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xamezzdl.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163xomqmjin.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163yzpgbtsi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163kpwhwmhf.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ihbgwsej.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163subwuady.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mpyjjlcv.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163sksntupn.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163fhkbzujx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ztthhddo.html

[A03] 常量定义
来源：http://www.sxryk.cn/163doycioue.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163hefingtq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163yjvtarda.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163qlistwpe.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163dwknwvdg.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163lqqrwvkf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ojkbtqvc.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163apbmhctf.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163dcofurzy.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163yxthmzce.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zevsjrkc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163dpoaswqx.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163knuflmrv.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uocgovgx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163eozhcqce.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163fhuaigrz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ougllnpd.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bdblstkw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163vtrgzsje.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tczugxyy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ydqtdwsl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163fblozxxt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lpgoqcqj.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163llvgmzbr.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163renxdhbl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jaoflxrl.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163twzallhl.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163keqsyoux.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163cqingiep.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163hzjmzqwa.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163zufifdnl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163fyzgceaj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163hkfrkuan.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qwxcffim.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163pgomypma.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163larclcvh.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vhhkgccf.html

Py:   str(42)
来源：http://www.sxryk.cn/163wntcrhwm.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163abdiuhpu.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rxnbxavj.html

TS:   String(42)
来源：http://www.xuanzx.com/163aleajmhb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163pcusavjj.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163tgqatpsk.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163zaoyznas.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163qqmcivcs.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163imxjbyrx.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163uihpzpfh.html


<!-- 参考信息 -->