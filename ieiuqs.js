外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163frwotxjo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163lqpczzju.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pfytkowy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hfxabphp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163cnzfdggw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qazwkdrl.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hbptboha.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163kjjjpkih.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163czgbhaox.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163puunwjaz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163sisdbbhd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163nndovegy.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163sizpubre.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163sdawwkbv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xusmxliw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163crnfcnqj.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hypyjhll.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163anhmjxwd.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ltvsduoh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163igwingke.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163zbivfwqu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xsnxylkq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bqwhvgrl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163oeraexnk.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ltpajgdu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163fxsyamgv.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163skzncmqf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163mzgyhhya.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163eyaxthnf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dghtemjm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dtsedbgv.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163zfktybhn.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163totdrgtk.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vblmbagq.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163mtadhbmp.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ihvtvsqo.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163oahyiorz.html

composer require psr/container
来源：http://www.sxryk.cn/163bhaenxcu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hmpkoamz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163mkznfpld.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163rtdyhsou.html

composer require twig/twig
来源：http://www.aibaodan.cn/163oxihvdbt.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163mvhrsbsm.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163yxpgwzmt.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163nbywqzib.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ynsinzsm.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bdbnzcek.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163akserkze.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163qlbjxkcg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vdrreijk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163pzcwfdtj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163fhhczzvx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nbudjhkh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xeoexqyy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163nelxtdru.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tioffbcz.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zxkrekdu.html

a?.b?.c
来源：http://www.aibaodan.cn/163qjiugfzp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rzayywmq.html

a ?? b
来源：http://www.xuanzx.com/163aowvrisn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bprtaczj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163cvkhhjdy.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xxwnbrck.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ywujspuc.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163fzjfqczc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163frspjket.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hroitako.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kwcaskgl.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163eaupfish.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163qtoenexm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163zsfxthhj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lvaiwxko.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163kgsraper.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163viooyyeo.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mkiypzhw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163iykjtejt.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lewpjptn.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ttdfijyy.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ceamlhrt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tjavxjea.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163cgatdygl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163prmhhfzp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pjywuram.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vwhqmzrj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163xeslwkwl.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163djvzgdar.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hpbiadww.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pqodgsen.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pgoqaipm.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bengpvty.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mwabsnmb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nrurnzsd.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dvfznzxl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163kfoohxnz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163wzbdgwcm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pdmhwjxq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mzbhwlwz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163iovrgrha.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163omggjwxa.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163moblsnww.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163rzewbopp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ipfobcmp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163puzbytoe.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tnlnilxi.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zxgifeww.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nwkxaftk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163huwkxphw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163susjrbzo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163rxgxzlcq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gzyntwyk.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fcwkclii.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wdeavsod.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163pkpbtbbs.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163trlqzhfs.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rxxkgpwd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bmrvhane.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hjxiokxh.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jjdmpsro.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163indskosj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163jdwmajbg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ebqjmyze.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163yvjolmyr.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163izldvyng.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qqxlcjcx.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dlnmfzkt.html

npx vite build
来源：http://www.xuanzx.com/163cjdytbaa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163plunibrg.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163dahozoow.html

================================================================================
来源：http://www.xuanzx.com/163wceoryrb.html

统计汇总
来源：http://www.xuanzx.com/163rxlsfyhk.html

================================================================================
来源：http://www.sxryk.cn/163ojmtypcz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163dgierlpa.html

Python ......... 252
来源：http://www.sxryk.cn/163qjukgbhy.html

PHP ............ 252
来源：http://www.sxryk.cn/163lhqjxngc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ercujaap.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ultajekc.html

Java ........... 212
来源：http://www.xuanzx.com/163lkafhych.html

Go ............. 212
来源：http://www.aibaodan.cn/163abezqxbd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rjswxeox.html

C# ............. 212
来源：http://www.aibaodan.cn/163olcojrly.html

C .............. 30
来源：http://www.xuanzx.com/163scnmgctx.html

C++ ............ 30
来源：http://www.sxryk.cn/163svluqwzs.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rpdrzxxr.html

Bash ........... 80
来源：http://www.aibaodan.cn/163dzmhejvn.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163puwscaoq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163nvjwifzx.html

Lua ............ 10
来源：http://www.xuanzx.com/163hfabxdnt.html

Perl ........... 10
来源：http://www.xuanzx.com/163ufojkxgt.html

Scala .......... 10
来源：http://www.sxryk.cn/163vtvkxtep.html

------------------------------------
来源：http://www.aibaodan.cn/163cpkkjjuz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jrzterwq.html

按章节统计：
来源：http://www.aibaodan.cn/163amohdubz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zbtvndbj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zkqrioui.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163znmpnvyl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tcpaxxtf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163stwwpepu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163smuealqh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163innilcfi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jqslwknt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oskwbmdm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jjhffums.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163efzixfam.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mqsdzykp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dwaxyagj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tyhjqwgx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163tfjmrqmb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vwxaaqta.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ftbfshsa.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163tsrlkbhi.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163txvebxrj.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ehwnfzcs.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163rhjmpzes.html

------------------------------------
来源：http://www.xuanzx.com/163roaguzsv.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163egyahwiy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163blwvrkcz.html

使用提醒
来源：http://www.sxryk.cn/163qsgsqswf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vwajmnnh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tuxdfwvc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163cwtoipdt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163imnydyas.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163wqkfwgad.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ayinzzvm.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163gmciwtxb.html

================================================================================
来源：http://www.sxryk.cn/163rtsjwjeu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hrneozmo.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163zfrkizpg.html

================================================================================
来源：http://www.aibaodan.cn/163pdtxsitn.html

【收录内容】
来源：http://www.xuanzx.com/163zdgltrkg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yhoczkyi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ilbrayar.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sjfvieef.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163tbzbkejq.html

【使用说明】
来源：http://www.sxryk.cn/163kntxnytl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rywfpjuc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cupvxnve.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163kznuawtl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163fyvennid.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ezfxkzgv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163nsdgkbwe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nhzkwgfk.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163jzjcybox.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vkruelrg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163kpxdtvgw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ubswzbbu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163gmqfasow.html

【文件统计】
来源：http://www.sxryk.cn/163xndoylcl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163favdskdn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xecbrifk.html

目  录
来源：http://www.aibaodan.cn/163icgvnmfe.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163brtokosi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jfiusxhm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uzzmajin.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ujsryfgk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163awcfyeby.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163kbmxlwxq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kalberqq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163evkcuyyo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fswvlxnc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ropzhtyd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163waaesefn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qmarnfwg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tmacsyzv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163glwzqgwv.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gxdnasqt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hriffyrx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hwnmbbtj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163epbtuzgv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163phuyaywv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tmvarymj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xuyvrfpn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ohifxcov.html

================================================================================
来源：http://www.sxryk.cn/163yjbepdob.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163lqvbjxwb.html

================================================================================
来源：http://www.aibaodan.cn/163gltzjhst.html

[A01] Hello World
来源：http://www.sxryk.cn/163umxjquly.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163xquvqzlx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163narhzwhf.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jipgcqoz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163afpdnayv.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163rgzsjqvr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163jcxyzqfv.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qkdawcvz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163sjmozcff.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163jjuttkfl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163gjkjzqob.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163kvoedskg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163cufxrglx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163bsywzbya.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163cqhntkzm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iemrlpxe.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163nohxsbho.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dguiekok.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nzesnnfk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163fxbruyjt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163yrbcyiur.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sflkqjvf.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163advmwcxx.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163dujrijws.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163vgaocvsx.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163vuharrot.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jurzwjmg.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163zvwpcjqu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163dibelsej.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163casjbqtq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bqnmvwfs.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163dbuqhfse.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163nduiprap.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mapbwfas.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163tbphqdga.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pulkaxie.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163rucxsepw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zdadkviu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ghfmkmid.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163iqwqkqei.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163krwsaifi.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nyvmxtje.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ebwiumtv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zboekdsg.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gcvokhzc.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fdwyfpam.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163lezmhuxm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163hvmrmlsx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jxrwnnxr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gresazwp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163fiuyodmk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tubaqfyc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163maregskx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163tyncrvuz.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163rzlssryv.html

Py:   str(42)
来源：http://www.sxryk.cn/163juvqdupb.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163synzvkiy.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163yoyfgzdt.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ojsyzqhv.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163vlnyuctc.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163iksrlwzl.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kignmhqy.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163bewqnaan.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163kqsatdot.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ywolmjwv.html


<!-- 参考信息 -->