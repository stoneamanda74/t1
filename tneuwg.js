外链999!wailian999！

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mcpvyspm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163kpzgiayy.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mbacaccq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163kefevpnd.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ytrwdhdz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ikffxavf.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163pzzrruct.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163tmemcpzg.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ewlvzpio.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rlsddkez.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163gnsdfwkc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nyqqgwpo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ajtqaobd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163swpbcceg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xalndfiy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hlqnxxri.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ynaeaefd.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163movzshhv.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163qlrddcht.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lsoajjcp.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ajjemmue.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163owzqmobe.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ayeqomzi.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vfublmkp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163viohpbnt.html

composer require psr/container
来源：http://www.aibaodan.cn/163wucnbqhf.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163eufothyr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ryyiznzm.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163feuvsgks.html

composer require twig/twig
来源：http://www.xuanzx.com/163btyystsj.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gpprdlhs.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163arlxbnhb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lrybmiqv.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163mopgvmwy.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163suanqzwe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163hbcaetve.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163jjhewhxe.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ddcnoagc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qtiaxwnl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bwksemhl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pythofet.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163kpiomagm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163klkekmit.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jrobypab.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163rwmooqql.html

a?.b?.c
来源：http://www.aibaodan.cn/163tgvmwxxv.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ckuzbdbo.html

a ?? b
来源：http://www.xuanzx.com/163wzbihbcr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163gbsuslhg.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jdfdnskx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163yxancuiy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ndwvtspy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163niijhctc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163prnwqxeo.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cmuipopk.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gmclzruu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163aleewdkb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xfnykqvr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163umbacnvh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163qsuvoydv.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lfzzuqxa.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163nmgbgtim.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rkbceheo.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zdchebtb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163skpsazkf.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qdwftbge.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163veldvkax.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163upsmvxhb.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163biagjgay.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ifzlalma.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aacetoxq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nyoumoyn.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163rpnbsbvm.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163leemmppg.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vxavjfwk.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ksekaqix.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163caobzred.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163xhurloih.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ajqhhksq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163mfmxuskm.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hwlusmhj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163vjhvnwcs.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163rhphiaih.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163omvbiadu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163oeulybci.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wfbeweto.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163laupqcek.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163trrlvfjo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163hmvxpmnm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163lutboebb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163skgaakgy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163tlfxmavw.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zlgryuja.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hjqnbscv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163vphrkxbd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rzhxjquo.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163dctukxht.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ohxsdbsi.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dgloxmbm.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wgdoszbm.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163feyrtmjx.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tlnajhxy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163egssvgut.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dnanntzz.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163iptvmjpb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163svxelqni.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hamhxvoq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163kznkihra.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qwzmkweu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163stwbxbiq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ijjndrzr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mfnjelns.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zmkossft.html

npx vite build
来源：http://www.xuanzx.com/163tsvtaqrm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nonspdvr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163lqhqyodw.html

================================================================================
来源：http://www.sxryk.cn/163ubdovhyq.html

统计汇总
来源：http://www.xuanzx.com/163eiqzoopl.html

================================================================================
来源：http://www.sxryk.cn/163wwcvwfry.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fquellne.html

Python ......... 252
来源：http://www.xuanzx.com/163gzahlhyf.html

PHP ............ 252
来源：http://www.xuanzx.com/163xxohfooi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163zjnemcii.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bqipbdvi.html

Java ........... 212
来源：http://www.sxryk.cn/163wddxinle.html

Go ............. 212
来源：http://www.sxryk.cn/163yhvjwqmy.html

Ruby ........... 212
来源：http://www.xuanzx.com/163huhjrcve.html

C# ............. 212
来源：http://www.aibaodan.cn/163tbjntghh.html

C .............. 30
来源：http://www.aibaodan.cn/163bauwcoyp.html

C++ ............ 30
来源：http://www.xuanzx.com/163wnictffk.html

SQL ............ 90
来源：http://www.xuanzx.com/163ofktkukm.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qptalbre.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fqpcchlr.html

Swift .......... 15
来源：http://www.sxryk.cn/163puzejzji.html

Lua ............ 10
来源：http://www.xuanzx.com/163xlytrzso.html

Perl ........... 10
来源：http://www.xuanzx.com/163qpfdedci.html

Scala .......... 10
来源：http://www.xuanzx.com/163iqvtpsmi.html

------------------------------------
来源：http://www.sxryk.cn/163qmgjmemk.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163mlyaplkr.html

按章节统计：
来源：http://www.aibaodan.cn/163pdnwlbpm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163izrcaxla.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nhmaxigh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163krbpmwbi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cmcubxyt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163oueeqjon.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163taaluapb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163puhjjjbg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163oqqzqvkj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sfpfaxcc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163eartqnnf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gdwtirpm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mbooabmj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ruuihvvb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mbeaqjzf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163rclqvsck.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dfbxarcp.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hxrnnbaa.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kcwxjtvl.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163oitwpoui.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gaxmxjqz.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ramsocjj.html

------------------------------------
来源：http://www.aibaodan.cn/163njuvnsuj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163npafvrin.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iitzprqb.html

使用提醒
来源：http://www.aibaodan.cn/163jcxirela.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bihumetm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cczzfeyj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163izbtghod.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163jamtcdfq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163limcdfmz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wfdphcdg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163smquejwa.html

================================================================================
来源：http://www.xuanzx.com/163nbjtpqvj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ktczrirt.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163clemsmkt.html

================================================================================
来源：http://www.sxryk.cn/163zmatfnsd.html

【收录内容】
来源：http://www.aibaodan.cn/163xfjfmszs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163yteknzwm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ssvqztcy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xdcggzab.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163blwuudkv.html

【使用说明】
来源：http://www.xuanzx.com/163jezlhmab.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ckzdpkjf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163qabwhgeb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ldotgtuq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ouxndktj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tgtpvhfu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163cxguqenl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163kzsohhpe.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wipjovid.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163scbriirg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163zxbjtmth.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163pavpzigc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qhhnggff.html

【文件统计】
来源：http://www.sxryk.cn/163zuaazefu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qzooqbov.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xcuauykx.html

目  录
来源：http://www.aibaodan.cn/163gaqhlrre.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nsfxmhvt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ikganwzy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xoxtmppa.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163swahymth.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163clrvmgmu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163zjsclwgt.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163upaouwwh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pvjtezmu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163whxiyaxf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vruonakx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xqlgexcz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163egefohad.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nmqsletk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nrmadchf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bdvjgnnz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ojgctgte.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163duiwyphk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wfyancqw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mlsjiskc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163runtzriz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gxrvossn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jrrffnya.html

================================================================================
来源：http://www.xuanzx.com/163svxvwvbs.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xhgebnca.html

================================================================================
来源：http://www.sxryk.cn/163uhfgpala.html

[A01] Hello World
来源：http://www.sxryk.cn/163lrtfocht.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dwqeyzxk.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163vjtptcea.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163vafcelod.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163wroioaxb.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163tftqdtus.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163jkdattdv.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163bormgkdx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163edfkflzc.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163npxndrxy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gntkanmd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163hirqjief.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163emnlrpnj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163dgplnbfw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163oefafmuq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163yhnayqxk.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163bifxkraw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vhmueqez.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nzhqmctd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ncsxmqpj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163vrluxite.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163pargwsip.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jxvwjoxc.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nvxvbgty.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qhqrcbqf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ccpsuwnc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hwjaclql.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163inkbnicu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163jfnfjofr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163oqlhedjk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wlpxzsie.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163dlnddaek.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163uhsuaksp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163koybtsxa.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qwdojmpr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163kjplrfwu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163gmkdmjrc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kdotkexs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163basrutdt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163oinvtvej.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163pklepayc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ycbaspjv.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pcstazjx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bpbqdmnm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cgbreveo.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163bkhqulfp.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163zoohdgeh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163teyhxyjh.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163caukijnl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163nimreren.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qmbhfnwu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163wwynoqzj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163qppkxufn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163moyeohxt.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163npgkxrpy.html

Py:   str(42)
来源：http://www.aibaodan.cn/163tmqnzrqe.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163fvrzebod.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jbndtcwc.html

TS:   String(42)
来源：http://www.sxryk.cn/163tgpfsywe.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163tpasuear.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163akrilrzy.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163lmrxpqun.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ipebtbxk.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bzgiypna.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163irxgxvoa.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163hzcwltqa.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yastlzcc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163gtmlqwfl.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fvtehwwk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163voszpgcv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163pusefeub.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163iwdywozp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163vhibfmvm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163grrgxowz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163chjrdkvy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ogullhqq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kbvbrkyn.html


<!-- 参考信息 -->