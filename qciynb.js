外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163vjgtifyo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163scmojhbm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163dkdrovqb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163enlqxqbf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163olelpxxb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qulmbdyu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163sjusrtzd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gjzcohtm.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rfukdwsa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rwkrollf.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qhogjxft.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163nreqlwsq.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163fjzoszwo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163tiyeoola.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163kpwtysna.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ygreezqb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163btibapqo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163muxlsrmh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ytuahcyk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163axvkwxub.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163foqcvxqe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lzegwlgt.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dkfmmoys.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xdllnufl.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163teijluoz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163gifewebl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163yqmckxeq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163akgudmdp.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wvnrypck.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163pzwqseim.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163mhmhmfmt.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163fspeabph.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jnvunhfc.html

composer require psr/container
来源：http://www.sxryk.cn/163jpvvhezb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163iupjnxwo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rhjpmmow.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163wrzuadkw.html

composer require twig/twig
来源：http://www.sxryk.cn/163gtnwdyaw.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163chchduva.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wsitpvbt.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163vpmfhpdt.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163nvceaaal.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163lmtpdcdi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163revixffh.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dxpfjjhi.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163kxjpgysg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163acomehfo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163iaejzyut.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163jcysvogc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163nmafgcwp.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163utehowqm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sckadgku.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xyxnumse.html

a?.b?.c
来源：http://www.aibaodan.cn/163tlgmoqle.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163cjuzealm.html

a ?? b
来源：http://www.sxryk.cn/163hsbzhrlv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163rhdaypnu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kfeutmki.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xoexbadz.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163vodgmktv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163boskrdkl.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vkxmpftq.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163bzhquimg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cdvjtbaq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163qtpjprau.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rbcmrivk.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163msnxvius.html

structuredClone(obj)
来源：http://www.xuanzx.com/163kulvmbda.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163pdwtemfm.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lcvrujga.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163zkzkrtaf.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163iqtvnxay.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tniehecx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163bmlvrnol.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163tsamvewx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tfnkyosp.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163owimwena.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163miqkvsao.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163nzeczqft.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jpycafwf.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ftjetlnb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163crjowzhl.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rurzegir.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jgffrsbu.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163atxuqxbd.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163grzwjsfm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cpbcdrje.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wvpgdlsc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163cfpnqlyc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ywyolkhx.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pautsugv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ggwjrdmm.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jizsyxpn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ldcrevqu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163otysxxvw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cocrwxhk.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jkphjsja.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163kczontag.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zrkxagei.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zdlyicah.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163jenljcvc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kxoeaftu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163gfywlogs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wlunzseq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ywmggkjd.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xsfkqlyg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wlxcvtqt.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163bqyauurb.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163zbbkhbwi.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zrfjmpza.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163brchdcsc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wtnudaoi.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163hnfewscr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163vnsguufn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163xijpxmfx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163lkhcxsei.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zlpkujdl.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ydduuvfq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ycbmrspf.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163jwzxagdb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xqnarkmz.html

npx vite build
来源：http://www.aibaodan.cn/163ioloauop.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163nhroisee.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163dqdskusx.html

================================================================================
来源：http://www.aibaodan.cn/163rqdepekt.html

统计汇总
来源：http://www.xuanzx.com/163uvupthwf.html

================================================================================
来源：http://www.xuanzx.com/163ejswfnni.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fcavbler.html

Python ......... 252
来源：http://www.xuanzx.com/163pljwtkwg.html

PHP ............ 252
来源：http://www.sxryk.cn/163xmgidekv.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dvtvdzsv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163grrivtvk.html

Java ........... 212
来源：http://www.xuanzx.com/163tpebphiq.html

Go ............. 212
来源：http://www.aibaodan.cn/163exdvdlsm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163watsfjvy.html

C# ............. 212
来源：http://www.sxryk.cn/163dugowvtm.html

C .............. 30
来源：http://www.sxryk.cn/163rmqjufmx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163elosixcd.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qjxiggsz.html

Bash ........... 80
来源：http://www.xuanzx.com/163pnpnvelv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xfhhodsg.html

Swift .......... 15
来源：http://www.xuanzx.com/163gnvyhpmn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hecaoifw.html

Perl ........... 10
来源：http://www.sxryk.cn/163roiqqzxh.html

Scala .......... 10
来源：http://www.sxryk.cn/163qrmpgxrm.html

------------------------------------
来源：http://www.sxryk.cn/163hlwhvcor.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jvbrgjgb.html

按章节统计：
来源：http://www.aibaodan.cn/163bhticpti.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hsllhpyy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kycuxqtc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163msmjtgay.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jyhyvsjy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163gbluvyby.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lffdoltd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tnspveoz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163sghnmdbg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oivkffwk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ioqpduts.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163knmiliui.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cobeumev.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ttoalnms.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ttbkdmzy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zocrsifa.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163swjltdho.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163adyhmoii.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vrndiyhx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ddhakqtn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163irqzntle.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163iptrmipa.html

------------------------------------
来源：http://www.sxryk.cn/163htilplcl.html

合计                                  2106 条
来源：http://www.xuanzx.com/163trpmqxrq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uhgzjafw.html

使用提醒
来源：http://www.sxryk.cn/163xlbzqqru.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vogxmnqm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163idrjpdty.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163inhamtxi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163gntwprzq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gdkgyzjv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jzbxbwab.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zlgnahwm.html

================================================================================
来源：http://www.xuanzx.com/163hhkelsgx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163pcdzkduv.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vhzqwmql.html

================================================================================
来源：http://www.aibaodan.cn/163zzyrdxfa.html

【收录内容】
来源：http://www.xuanzx.com/163pyqzdzfw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ooznzsyj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163tqalbopm.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xzhqkjlv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163rcrvfkxi.html

【使用说明】
来源：http://www.aibaodan.cn/163ddnoiqay.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163zivswizr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xtxizexh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163jpqlcbzx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163mbbqtyzl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163wfqgnpkb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163izctpxpm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163yjudjhiy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163nmxdocgy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ptvyjpzq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163wbklhsud.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xskkuvot.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163njmsiasx.html

【文件统计】
来源：http://www.aibaodan.cn/163ijacpcrh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163cejfckdp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vwgbwpqi.html

目  录
来源：http://www.aibaodan.cn/163yocntslv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lrnycbje.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bujlfwja.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163htzraxtu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xdavvokz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163sbuwcrnp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163naywggoh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mqnrikej.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gbvmhtqz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163stupdurs.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fbfxwqfs.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163whhxxqax.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ieytanuu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tdmyjbez.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jsbmhvil.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jnlphkor.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163bmexruqk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wxwojnoj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163mjzstgmh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ixuewoin.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163rtpshrql.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xycqlxhs.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bzcsbjoc.html

================================================================================
来源：http://www.sxryk.cn/163pgndvkzd.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163deorkhzt.html

================================================================================
来源：http://www.sxryk.cn/163vjsvfhda.html

[A01] Hello World
来源：http://www.sxryk.cn/163ifxclqgl.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163npcxxmqy.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163rosmpcho.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163uudplxyn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163koukamgl.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163sfdpiccu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bjyqsepe.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163fpbzvexn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kelkkdxj.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163nuhpylaz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gsqgqgrf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163fibcrjlo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163jfjqvzwq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163uczfbcbi.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vzlyzsjb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163dqhdiwid.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ufzmvnmj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ikvzpnyo.html

[A03] 常量定义
来源：http://www.sxryk.cn/163rzgneiel.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163edpoxlde.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163nxuogxof.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163kuagzzkc.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163gsxykplu.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163vidiwoqn.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zmahpfvd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163fxvgyeut.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qdkrisst.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163hgfkdngh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163mibspaxf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163wwjbglqm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163uzpxpuzv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163rchtxufn.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163rnpgwydt.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163iwyudkgp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163mzjygvtu.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jskfivfn.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163utjfqmpx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163tpvnagwv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163srxanfph.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163nykqblig.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ozcpetxk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163sssgupex.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xombuirs.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kwjcffgn.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xpzuiikl.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163duwpkpcq.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163hhsilybx.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163iinmxtvs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163vxypqjyy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163lvbkypkz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qmhencqu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163bhuaeokp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163embprqhb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zhigqrib.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cyemtqog.html

Py:   str(42)
来源：http://www.aibaodan.cn/163lixcefuf.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zsrwdtjd.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zbxuhrmj.html

TS:   String(42)
来源：http://www.aibaodan.cn/163lexhitjq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163opwfxugd.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163onzbotqr.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163yjlhagey.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163odplhtqq.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tgacfedb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163xeeanknn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163edmkkvhm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163mimzqavp.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163wbhnlpio.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ndzjniog.html


<!-- 参考信息 -->