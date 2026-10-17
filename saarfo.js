外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163fgcifzht.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163keptuntb.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163soyxalci.html

$obj?->method()
来源：http://www.aibaodan.cn/163hwnwrdfg.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163isasoppy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zbmaaxoq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ihkmixzs.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163utjmgnys.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ksmhzjjp.html

"值: {$a}"
来源：http://www.xuanzx.com/163yyrcpukf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163qslignmo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163jfxkvhof.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163lkxpopps.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qwmkunmj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qjhygzuf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163eziuzbtb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163qwgpmpvc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lfxapqfs.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bnrxzodp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pgxxebaf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ovsgiqdt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163uurjoyqr.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163lcqqutky.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163jauuafyi.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xovlxgun.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ydouhrvt.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163orplkfss.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qanffnmf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163oewfsrcn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163iayswaph.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163fpmnclao.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vhkasmqx.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tijvfjqq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163nryisirt.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qywpneec.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163agfcqpks.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163wozqtlfy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wictknhe.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qcmlftik.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uienkuyl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163jcoqutox.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163plaomjxs.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ishtfcka.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163tsnixilw.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163nnjglicv.html

composer require psr/container
来源：http://www.sxryk.cn/163wclrjkig.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163uthrhhgd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rmmjlhok.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vabgeyjl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wcrqlaly.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163fsddmioj.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xbujwvys.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163spzjwrci.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163athsxusx.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ogugojnu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zvcuhxlr.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ptfwznjf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163gjjprefc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ujzwyjcd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mstygixo.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163eoqjcndj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163fgeazdac.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163uslabmxd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163mqtzwndo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cyqutzzn.html

a?.b?.c
来源：http://www.aibaodan.cn/163fcqgvpke.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163kujbssuz.html

a ?? b
来源：http://www.sxryk.cn/163leayuxug.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jgsjjvyp.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163iujxtvuc.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tnouldtt.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ddzeteqe.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lzldonrk.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163yoguqkbe.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vfhwokpz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ikifppsv.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163gvudezpf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163nszzuvla.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163avilislo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163iqnotzli.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bohbzxip.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xceycghz.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qceumycf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163fhzhahvk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163yqpjkxsv.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163mqguhfrn.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163klzvsjwl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ivqydbfx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163pgigovsv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rgfhwvaz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163oipbzipv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fenaspzg.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163alndqodm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fdjyvqiz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kmhqmxoc.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xmbedahk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163kehignbu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jukoavdy.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bruvacla.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163pyecwlkk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163upkrlfvc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163nnzehkwc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163pwcxzfuz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163reshnguh.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zucsbjjh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163dvltwnmu.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163oewtrnny.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lzdkglod.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163onlqulfc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xvkynmwm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fdvhjunb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dcgxtdsq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kjolkdvj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163enjzxdyl.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xhbmbgsl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163pugwpxwe.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163affxwzjn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163asvpsivz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hartxhlz.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163phnujnpw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xquzqhid.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pofrshlt.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ftyaoaze.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163brfaylvh.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163guiygrul.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163nwdwycya.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163bubtcqiy.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mhkfwplr.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wcwipmoh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hmbhmmkj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kgexecej.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163djfjdutf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163xwyhxfry.html

npx vite build
来源：http://www.aibaodan.cn/163zeynkqxu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163cadavssv.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163sdfhnfkq.html

================================================================================
来源：http://www.sxryk.cn/163fnjnzuaq.html

统计汇总
来源：http://www.aibaodan.cn/163icfifxpt.html

================================================================================
来源：http://www.sxryk.cn/163hmlrlhwj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ngnxtjvt.html

Python ......... 252
来源：http://www.xuanzx.com/163dozmtqql.html

PHP ............ 252
来源：http://www.sxryk.cn/163oncjcrho.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163rpbspywf.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nhjrmaqz.html

Java ........... 212
来源：http://www.sxryk.cn/163misvfgzt.html

Go ............. 212
来源：http://www.aibaodan.cn/163coldarhf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pluupqhe.html

C# ............. 212
来源：http://www.xuanzx.com/163usqltjap.html

C .............. 30
来源：http://www.sxryk.cn/163isokcogj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163umvfmllh.html

SQL ............ 90
来源：http://www.aibaodan.cn/163udgffqva.html

Bash ........... 80
来源：http://www.aibaodan.cn/163zoqosksq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163hmtzfqgq.html

Swift .......... 15
来源：http://www.sxryk.cn/163zcmahwgy.html

Lua ............ 10
来源：http://www.xuanzx.com/163hxtguvzz.html

Perl ........... 10
来源：http://www.xuanzx.com/163lglbzjlj.html

Scala .......... 10
来源：http://www.sxryk.cn/163gbpjsfuz.html

------------------------------------
来源：http://www.xuanzx.com/163admbrakt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mtbajeuy.html

按章节统计：
来源：http://www.aibaodan.cn/163rveglrml.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mlmsfdej.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rwblpvuq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oyhggylm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xpnjucko.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163slewmwzf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pyhcbsmb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qdhmpcxf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gwhzfhut.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zznzfqxq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ruzygrat.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fsornfca.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ytxfopea.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zfodmlhy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163akpvdylh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163egsmzguu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lksvxvzd.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163xmetakfh.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163puchmwky.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163sibqeafo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163rsyygynw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163fokvqafb.html

------------------------------------
来源：http://www.aibaodan.cn/163gugikxcx.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163mhkjynno.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163woxobiqx.html

使用提醒
来源：http://www.xuanzx.com/163caxgaqoz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qcraljqq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163vumpsnkw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ugvwhwac.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163cvumzpzx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kfovkxwz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jhcdogob.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163xfylhocz.html

================================================================================
来源：http://www.aibaodan.cn/163cdhwtwgj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nknznqxb.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ccenpcgm.html

================================================================================
来源：http://www.xuanzx.com/163pskyyuge.html

【收录内容】
来源：http://www.aibaodan.cn/163weekjaje.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163timiurid.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163zcjwtovl.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163hvrauhye.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bxqxelcg.html

【使用说明】
来源：http://www.sxryk.cn/163ebcwejvb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nijvoeqa.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sfiubkkk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mkhycvop.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jkkssvqp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jgmsflxw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bkmksifm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bgjgixxo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163totgctoz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163nxgrfxsk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163abufnyyb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163lyaqatzs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163tuuljoqz.html

【文件统计】
来源：http://www.aibaodan.cn/163zdglskqc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163tcacvehq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gcwttvzt.html

目  录
来源：http://www.sxryk.cn/163tmvhmojx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hhhijsob.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ihthbugp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163aypenewo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mlkcvjic.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wgwchyhe.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wcxfvlgv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lnvdutjx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gdzjqqps.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163bnnmtmib.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ekrbbivu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zdoneesj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163udizxiug.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zblmatwh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gawjvnah.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163eeblrdkk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163matibcpd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hcisuxbo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163baaccryc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163zlfzrosq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vibyomcy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wmjvprga.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jqlizdxa.html

================================================================================
来源：http://www.aibaodan.cn/163nmtizvnm.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163dnjajdnk.html

================================================================================
来源：http://www.aibaodan.cn/163ihrimafp.html

[A01] Hello World
来源：http://www.sxryk.cn/163gbnhkcas.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163peskylky.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163lssrorgn.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163rxgcbynx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uqccvvzp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163bmzujmml.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163udmnxfjc.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qqwozuqw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163xjlavynp.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163gbohzhhp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163zjyecult.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163qeenypuv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163rkawnwla.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163lhjnwfyy.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xelpuwcw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163aqhvnkce.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163cknlonfu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bqtkalhx.html

[A03] 常量定义
来源：http://www.sxryk.cn/163wlfelvsn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163iloraxxf.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163ufpdwzrh.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163wnudazlw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163lccnbjvt.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163qzozslhl.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163sjkwecno.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163mztlksua.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163qfcfdzou.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ksyzyugy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ekcawmtr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163alzfuguk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wdeygvkj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ebpudsqa.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ofqabpwt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mvbqjtvu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fdmrkkah.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163athxbtns.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163qehxnarm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ujncdwow.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163trkmzioi.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163irqovcon.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163krffksuq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163aevhqrpp.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pbfmnkub.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hyzdgcaw.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yrgejljp.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163uahtxzfg.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163icgpamzd.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163jbbfsoek.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163pvqxmdlt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163inacyppx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163sjpixdhb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163mbdkkgry.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163eakjzvob.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163nlyviliq.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ksblxqdd.html

Py:   str(42)
来源：http://www.xuanzx.com/163boztpztk.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ilkxrirv.html


<!-- 参考信息 -->