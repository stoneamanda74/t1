外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dwbxwnok.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mhagkpdv.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163skukeggb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163idbiffkl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163evfuqxbh.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gyjqzgal.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cxkusepx.html

$obj?->method()
来源：http://www.sxryk.cn/163yhlligyo.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163covgrsaq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zkjditik.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163hmkarwav.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xigngfil.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163etqeofoj.html

"值: {$a}"
来源：http://www.xuanzx.com/163moipxcxy.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vezanzzh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163uyacajcw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hljqvmcg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qspklpjm.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163dsjcvyfs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163damqwtrz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163svjoemjn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163muvzraij.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dhmobufb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hytofmwj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ifrzotoo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163azfrepok.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163fhublyaw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163jpwnehmt.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vjohcdex.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163djqsxiww.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kjznefdb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jwzyrpfq.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kamidrme.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163marpjrmm.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163xkblycrk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163hendpfyg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tgpwigub.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163grutgwip.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163emeltkfe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ibhizjvv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dredvfwz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163buprwxoo.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dccahbtu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163pqrfrfke.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hoccwrqh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ojatpnyr.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163bmdknhgi.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163gmnkgwzj.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kkryjijv.html

composer require psr/container
来源：http://www.aibaodan.cn/163duobadnx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163zqsldepm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163qbhctqit.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wewesdwu.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fmvvmvno.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163shwlfnll.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163esmacjdr.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tfmlluei.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163hwiinzqj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lwptlaqv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163wkxpjait.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lbubxvqc.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163spgtgyap.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ixgggtim.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163zrgsjbkz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vcewkuqn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ewleazfy.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ojzzrssp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vfmsenqt.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163gixrtxxx.html

a?.b?.c
来源：http://www.sxryk.cn/163prmwfesy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163fpbszsdf.html

a ?? b
来源：http://www.xuanzx.com/163abxckjqn.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mattadnh.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vqstucae.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163altfvghh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163gvbenrtf.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qdbadnbe.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163juulccpf.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163sulgmnnx.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tbryyvyy.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163brgqnegt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163kepskxfp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163cpyzsmrb.html

structuredClone(obj)
来源：http://www.sxryk.cn/163yfmbkvwu.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163egecijlv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fqxxxfni.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gmfgxoqm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mqmqjjxo.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163znouyjej.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163plxjkcty.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ybwlepeg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163daikzrnk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ltfqpmlc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163euowinoy.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163iakvgacu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163rcdmfshm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qwbrpkdd.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163olhulrpp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jpdphbbl.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qxwoxzxn.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rhmiatob.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dpyumoxv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vpqmavyo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163udnauniy.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163xhnhwrxf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fduwzojl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163wvfvsuht.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ixbysjtm.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kodbngcy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xozgszli.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163eiqzehyr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ylfbwiuo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163wnbetent.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wtcajxmx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jjftsley.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zxbfsrkl.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163qyifctbf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cdjvsdck.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ralbnqnc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163aekcsjok.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163snbkkywi.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wrdajurf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163tdlffoir.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163edbfvlsh.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qpkjhapi.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163milxpsom.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163sidqkjqw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xxutghjs.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163haomhvgp.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163nhnoeqdz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mgwrnwvo.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163elvlncra.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163talrpjkf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dhbplgqo.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163pvfczcog.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163skiwiubg.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nhpjzxcj.html

npx vite build
来源：http://www.aibaodan.cn/163ryplikjj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163reksexys.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163orbrwlnq.html

================================================================================
来源：http://www.xuanzx.com/163xtmquqjb.html

统计汇总
来源：http://www.xuanzx.com/163jhxlvgbp.html

================================================================================
来源：http://www.aibaodan.cn/163qxwjcgnk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uogqkctw.html

Python ......... 252
来源：http://www.aibaodan.cn/163crfuwhke.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vyhpokgs.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163paymtwia.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163coqimbxi.html

Java ........... 212
来源：http://www.sxryk.cn/163mrsxndii.html

Go ............. 212
来源：http://www.sxryk.cn/163vspvqxpg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ocebeflg.html

C# ............. 212
来源：http://www.xuanzx.com/163onfpknux.html

C .............. 30
来源：http://www.aibaodan.cn/163drynfsuy.html

C++ ............ 30
来源：http://www.xuanzx.com/163msyentuc.html

SQL ............ 90
来源：http://www.sxryk.cn/163mamliqzb.html

Bash ........... 80
来源：http://www.aibaodan.cn/163axkhrban.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163zndaomcr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163dsywwoes.html

Lua ............ 10
来源：http://www.xuanzx.com/163xbgcdcfg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163eiitigrh.html

Scala .......... 10
来源：http://www.xuanzx.com/163hhbekemb.html

------------------------------------
来源：http://www.xuanzx.com/163xuquuxrw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hmfqcwoy.html

按章节统计：
来源：http://www.sxryk.cn/163ergakclh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lsgwimgn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qyaepdeb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163okmcehuf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tdkasmlv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163oooobrhq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jlspcdjm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ipulomwh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fpiskeph.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pzvpgxbq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jpycjwll.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bqkpxheo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gtkntvxm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jttglixx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yxazwhfa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163oajfuxnc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wmwvvxfc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ehdjsvpw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ybbglgny.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163wcrynfrj.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163opwbmitr.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ttiomnor.html

------------------------------------
来源：http://www.aibaodan.cn/163idrwiaxj.html

合计                                  2106 条
来源：http://www.xuanzx.com/163jfbebjdu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pdnoibqh.html

使用提醒
来源：http://www.xuanzx.com/163xvcyvaor.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qhpvgbse.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163meyqaiyz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163wjjllfcu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163dlrojjcj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xtmrgayn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163hkgcaxgr.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rlmqaxpk.html

================================================================================
来源：http://www.xuanzx.com/163wxpxkilh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163jcdsgrmz.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ubrvnwul.html

================================================================================
来源：http://www.xuanzx.com/163kedfwrqw.html

【收录内容】
来源：http://www.xuanzx.com/163lohshams.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163hnfmletk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163aglscdwy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163zeyqkvfc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163gdtpzftg.html

【使用说明】
来源：http://www.sxryk.cn/163vnxjwqfp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163zcjvdrch.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dpdooezd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tuzozuxy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163qlqyylpa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163tfjtesas.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163rhodpoia.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163xdmpgjoz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cryukhdi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163grjxxerp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163pusyawob.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ofdcrxqw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qrhntoxk.html

【文件统计】
来源：http://www.sxryk.cn/163eikffkvk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163kzdprvgr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zdlxcqqv.html

目  录
来源：http://www.xuanzx.com/163minqzuzk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vxyiapbd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vvbbdlcx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pkghubwr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qehhjiua.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ofekarmr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jdmmbtjg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hqefeibi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xtpxxnbr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163wveessnp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ycasxwvs.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163useewfra.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tqxhhrgs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vezkkyxb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kuycfpkh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ypicanui.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163griimlez.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163djdzmbaa.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163zjdweepo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163oyzobckr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163fniwsbfl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jiyihgsi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fgxpmxli.html

================================================================================
来源：http://www.sxryk.cn/163yqnuciuq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ssrjzogt.html

================================================================================
来源：http://www.sxryk.cn/163qbqekwqf.html

[A01] Hello World
来源：http://www.sxryk.cn/163ytqpsnft.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163atcxluqx.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ilwxonnz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wqexrzsn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ihedprhc.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163masbvwbn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163odilhukx.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163hjxolojv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163sfknbpvz.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jnvsexte.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163iucftiox.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163jtgozuon.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163lokznngq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163iuvsgnig.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163idrqdmrx.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bazqirkp.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163gnuuesvl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163njvtyrvr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163lipuhduh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ehkrmwge.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163oztlmlbx.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163efdcaehb.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163batperra.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ywrktthr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163harobaba.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163cadpphna.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163kiuiiqnj.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163azzaoskl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163bggkhcdp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163turbsjqi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163fgspabax.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163lkxnboku.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163xmxqouhv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163edlqfawk.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fuhewjtd.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163wezuqjpg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163lyvjaaxs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gszehcyo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tbaqwfkq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vfrfulcu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163sdsbcluk.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163unwdiznq.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163crpmcajq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ihfehxjq.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163skwezhxs.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hmkgypii.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163mrtqcfna.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163fmjzxnfb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163mvlekqvt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163agfyehop.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163rplgnfnn.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163xxjjvfsp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163cfytxnvf.html


<!-- 参考信息 -->