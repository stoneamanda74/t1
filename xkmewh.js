外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163kpabqvnr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oysokglv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163sllapmsk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jopszxlp.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ztudiduf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cxvelcpu.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163orfdqtdk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tlxngmhj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ecapcfwf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rtmxuqss.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163treaasxk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163eaqilijo.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163cnxnrrsk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tlcunpci.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gdzxccsw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163wmypqrko.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zfsldnkl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163srkxnaqr.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163xfmpfycd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163urbelfti.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163scqkymfu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163wbkglhsb.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163nkzdbvee.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zcovrlqy.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tvngthhq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163pnyskqhy.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163zrvpciwn.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163njykjnso.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bxitbrnn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ietcjkvg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fwmzkaog.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163boiylsoe.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xottunmk.html

composer require psr/container
来源：http://www.aibaodan.cn/163meymrbrk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ywkdddbt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163qmrutyla.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xbehvlpa.html

composer require twig/twig
来源：http://www.aibaodan.cn/163oebovrcz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rbgbpnnr.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163fokuytfe.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kbnfiqug.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163hetfoaii.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ctfdisrx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ajyhrjsn.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163fsqdxhhg.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ivedsgqg.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zfywlsdj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163dbmkpzod.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163mklpgzwh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vztatjlh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163iqztddie.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163jkufbyfo.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163jctvmldt.html

a?.b?.c
来源：http://www.sxryk.cn/163pxfyfidt.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163hvsaizop.html

a ?? b
来源：http://www.sxryk.cn/163lgeyscen.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fhxejsoq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163yskwyiqs.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tznvvquh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ehvxpkvt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hzpaasrc.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zcvmyobw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163xxfjdooh.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zavxwxmq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vpgaynnb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163mbkghozx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ntznygbi.html

structuredClone(obj)
来源：http://www.sxryk.cn/163gmrpkhrx.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163sokiqsbn.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ntazvnsp.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nqkzwibc.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vvtxosqa.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163soxnmimd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163bivulleb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163vwqskbwt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fgwrjbss.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xiyeaufk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ofojmzof.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wfznptoj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163srsedait.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ujynbxwk.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163hokccokd.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ecdjtpwn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fwqaheyj.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163uayvroxw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163azwvzjdj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ppuxdywn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tpoldnwb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dygwfpak.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163udbrqcsh.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nfzzotdc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163otronitb.html

[U105] JS：节流
来源：http://www.xuanzx.com/163uhyvhkwv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dbjdanfb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163lwevfsmq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ysbwwceq.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jsyxjtpg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wviwptdd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lygjwboa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tjzzlpgq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ocuvbvqq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zeytonvw.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ptoxwfhx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163htmqstkz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163licxjnvz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qnoouwme.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163aifhqieb.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163rqgpciqt.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mbifbbwc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163efaomtpo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163sogtpvle.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wivqceyu.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163lwjqhfnl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gjrzofvi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163nysaxmpd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ijrcmbds.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mjpujhgl.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163juxfbgtz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163tgjuijus.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ctuzwpiu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pyfxsnkp.html

npx vite build
来源：http://www.xuanzx.com/163fcsfmeld.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163idinkboy.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163fmdxsvnk.html

================================================================================
来源：http://www.xuanzx.com/163rajpfejf.html

统计汇总
来源：http://www.xuanzx.com/163mtplqmqy.html

================================================================================
来源：http://www.sxryk.cn/163cqlovstu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cshkuabc.html

Python ......... 252
来源：http://www.sxryk.cn/163hdtymlnu.html

PHP ............ 252
来源：http://www.xuanzx.com/163hsoxcclo.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kdxipvqp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163tqvhmonk.html

Java ........... 212
来源：http://www.xuanzx.com/163slqkbeub.html

Go ............. 212
来源：http://www.xuanzx.com/163hzjowjpu.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hqahcqkf.html

C# ............. 212
来源：http://www.xuanzx.com/163bfhepxzn.html

C .............. 30
来源：http://www.sxryk.cn/163ovviaewh.html

C++ ............ 30
来源：http://www.sxryk.cn/163qqgxocph.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rfinkext.html

Bash ........... 80
来源：http://www.aibaodan.cn/163llgvmlbi.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163aagzubrp.html

Swift .......... 15
来源：http://www.xuanzx.com/163apxaxnlu.html

Lua ............ 10
来源：http://www.aibaodan.cn/163wcausjcm.html

Perl ........... 10
来源：http://www.aibaodan.cn/163kopvsfdc.html

Scala .......... 10
来源：http://www.xuanzx.com/163rejgltqu.html

------------------------------------
来源：http://www.aibaodan.cn/163fjhpxbbt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nntqqegp.html

按章节统计：
来源：http://www.xuanzx.com/163tybzjybm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163czypmsrw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163glrhsasp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wwrixyfi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nkxesugb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163pjrenmbs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dliyblux.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eskhvajx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163siutwsss.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ckkzsaxr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jtpcejbu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mpgixdax.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kppaydek.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wzyqskab.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ldmnpkvj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163absrxdvg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163aqbnethp.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163cdkdqbsp.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wahziqgt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163inwmrkuu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163rtzguygz.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163vqwgboxg.html

------------------------------------
来源：http://www.aibaodan.cn/163bwfplqzc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163snerlnmr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ghdkxmrm.html

使用提醒
来源：http://www.xuanzx.com/163dvlftlup.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wgzppkae.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ujtaoazb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163vvzrgaix.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163raqdbnyo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163frqablna.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xcooanuh.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jsioufln.html

================================================================================
来源：http://www.sxryk.cn/163fikkoexx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vvmzgvzh.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fytvxyol.html

================================================================================
来源：http://www.sxryk.cn/163nrsaioao.html

【收录内容】
来源：http://www.xuanzx.com/163lueoutpo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fvpwclug.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163pnrcwnfr.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vuwkownn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163lzcxgpdg.html

【使用说明】
来源：http://www.aibaodan.cn/163cxapyygd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ishjibtc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xiqlisdp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163wcqieftu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163oacyvwbu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163azcnoyvk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wdlptira.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163hqexlmfz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163smavxpkk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rfsvgdpo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163xgjcriie.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163cqrmadhg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163jbyjusqb.html

【文件统计】
来源：http://www.xuanzx.com/163sihotnnp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163phkmnpmm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uruibeko.html

目  录
来源：http://www.xuanzx.com/163bdltqjvz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vkfpacbb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163zziwtrkc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xsdpsjgx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lynsucag.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qhbglntc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ezsmkyhx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163kcovyfou.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uqnhrugb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yhzgcclv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rhtzuzwz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xbkiades.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rluvzzws.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wephtbwm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163suowifvu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163shnnmjkw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163aasvawfy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ekypmzxb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163xuemxykg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lqrlrvdo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ddazsycm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zuxyunmm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jzvxjzmg.html

================================================================================
来源：http://www.sxryk.cn/163usuherwk.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163initmqdp.html

================================================================================
来源：http://www.xuanzx.com/163vuetkskz.html

[A01] Hello World
来源：http://www.xuanzx.com/163bubxtvax.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163pishwlwf.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163yburricl.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163chardewo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163uuklvwmn.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163bgblggfl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163kcyubvdb.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163gcimmwou.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163efiliimp.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uckphbre.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163uxhacguw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163pawmjjxa.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163vobmqjce.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163iwjfrypi.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163gxwcownz.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163llyxehiv.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163nnddjbpp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lhjtgrjx.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163gxqpdgjo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fpadxoar.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163nnlypqjj.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kfomdojo.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163olmcpytp.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163lmxmnhdh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hdwvuhgs.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163bckoztbi.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ccaxjqfd.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163kdadevow.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163tqaomfib.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163pwdkupuw.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163gcwjoaof.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163oegejwyw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ftxucfgd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163gboergqc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163eamwzxfo.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163dcndzjse.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163vqkkcitz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hdevcoyw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163elbrnvdm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lyqneaoq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163daewjgfi.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163rfxjvvrf.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hezqljfc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hsgirgfl.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163guqtscax.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163iqotiqgz.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163clmplvjr.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163nhcemfkt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163vjzmssoj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163kopusqgm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163tomngzak.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163hcuiwsiz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163fsbniwrt.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163dsaqfdgy.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163alygfpnm.html

Py:   str(42)
来源：http://www.xuanzx.com/163pxqnktuu.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163kbgugwcm.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nymwbgvf.html

TS:   String(42)
来源：http://www.sxryk.cn/163jxsjbtbp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zeskqnbr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ufvnyvpt.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kdjqliyk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163wwlvfcen.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163uhulcdrg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163dowsrkoj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163rnhpsajo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163pgeiymsm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163mrptvaoq.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163oxwrvhsz.html


<!-- 参考信息 -->