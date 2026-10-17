外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163pbkvgswf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163shywxynr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ltbitvms.html

$obj?->method()
来源：http://www.sxryk.cn/163acxajtsd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163waxrbkmp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163dnuwvjxc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163doucbxbe.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163apctmpjv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163jdbmjlry.html

"值: {$a}"
来源：http://www.xuanzx.com/163ynnyjrho.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jvlqbwjh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163wxzhvvns.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ccufizqm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yypaojav.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163dgfyawii.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pwwutnyd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163shyyxfst.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vxqwsajr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163stvgwtqm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163adgmfqdx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fhywutwt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163vijfownn.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163hlwarvqf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163mpczqddr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163wfcoiyxy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163bdggdcfu.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163xmxcophj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mhsbjbou.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163eiykkxsg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163dtafhual.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wrpcrvef.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163orxjisqn.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163jkqxkphp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rcklcswn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163dpjsjldg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163cpyhaiar.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hbabazba.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163owcgfpgt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163looyopev.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qyxcddut.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gnsuvdod.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zulfaxad.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dkaszexv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163kmrccftx.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163tmqlaxcg.html

composer require psr/container
来源：http://www.xuanzx.com/163fjxmumaw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mwngeiqq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163juykbbcs.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pfdcpaoe.html

composer require twig/twig
来源：http://www.aibaodan.cn/163somerjxq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163bzenorvm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163orhauxzp.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163mwrlhajx.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bxdffbgr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rxjxpxkg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163haeekjbm.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vulgueja.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mlkloxuc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163glvbhckg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163vmnjkubs.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kovvrvvx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163chujdmxr.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163vmgdssxe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wqgqfoft.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lhovkjcf.html

a?.b?.c
来源：http://www.aibaodan.cn/163gtoegntv.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iywyutyd.html

a ?? b
来源：http://www.xuanzx.com/163lgohojls.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163garjtezn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kapbscjq.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rjegxqvp.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mhgkiimi.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163acouujhr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163stvszndr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163tsmnsjid.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dcsmzemt.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163xyoiqjjb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163dbanhxje.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ldvetisc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ujjnulll.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163aktpgiaq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163alxxrxzd.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wuctxijx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163fqrtfptx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qxtvvutm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jrunpyhp.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163rfajtcky.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pqtcjnsb.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qkqupqjd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vjokcbyb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vhqkwmkz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163quxbrfwq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163tufigfma.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163iorejeub.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zneouqmv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163fvmtaxru.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qtsqbdlp.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nwotkcox.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ntvmccsl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qyxwkttt.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ewkiyvhr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163htvftfjm.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163licqvthp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xbnstihp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yqycbqes.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jpocmvhl.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jqpfnoth.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lpawpiov.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163covgrwjn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rsabaxng.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163okpvgrbc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tmajstyr.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163omotublw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hxuisbcv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jyctlogl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bseqavhq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kffwfmye.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hmwpgbab.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163tphlbuth.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163omweimef.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bgrnghpe.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mbjevkeq.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163teayfwfw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ztyhebrt.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ikiomxmd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qgxlvzat.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rckrmfyq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qgjcqiwx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pmchojef.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163sqybplnb.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163opakmpoq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163phbiaohe.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163agrbhtfn.html

npx vite build
来源：http://www.aibaodan.cn/163kpscavxg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lyyublkl.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ztzbcgef.html

================================================================================
来源：http://www.xuanzx.com/163qzvdnnur.html

统计汇总
来源：http://www.sxryk.cn/163gnimqxlm.html

================================================================================
来源：http://www.aibaodan.cn/163pemrzfat.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163pnwakmbr.html

Python ......... 252
来源：http://www.aibaodan.cn/163amemfbtw.html

PHP ............ 252
来源：http://www.sxryk.cn/163zvqljrka.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nyevykvr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163tnnouluh.html

Java ........... 212
来源：http://www.aibaodan.cn/163jvgzorql.html

Go ............. 212
来源：http://www.xuanzx.com/163uroraflq.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zgyslzvn.html

C# ............. 212
来源：http://www.aibaodan.cn/163lowwlyit.html

C .............. 30
来源：http://www.sxryk.cn/163ogriqczz.html

C++ ............ 30
来源：http://www.sxryk.cn/163wvjxaebp.html

SQL ............ 90
来源：http://www.sxryk.cn/163nzhjtbuu.html

Bash ........... 80
来源：http://www.aibaodan.cn/163byjmfmdb.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163kiwjmdol.html

Swift .......... 15
来源：http://www.sxryk.cn/163mukatyav.html

Lua ............ 10
来源：http://www.aibaodan.cn/163wphpczqg.html

Perl ........... 10
来源：http://www.sxryk.cn/163nihnozkx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163tqwqrpne.html

------------------------------------
来源：http://www.xuanzx.com/163ehjkvihh.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163avafimck.html

按章节统计：
来源：http://www.sxryk.cn/163iiftynns.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ylfuoben.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jtufsocj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xxeyrfkn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mxcjnubf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163kudayihr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163isdxhjar.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fsoioija.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lnrdaadl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vilanhwv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163czkfbrok.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iiuboyds.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163clljsivm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cdyknvrd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qsjvbtwr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163gdujkllz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jdqurkqg.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163xfscorlr.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ospilfnu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jwugnfux.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ynvvzjby.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163foutvmtk.html

------------------------------------
来源：http://www.aibaodan.cn/163lhblmtrc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163swcylewv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gstyfquu.html

使用提醒
来源：http://www.aibaodan.cn/163yyzepbqh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uveptawj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163eyqsdian.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lnnmkwyf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zadjgfvw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163dsdsxtyo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163shoosbyg.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lximxiqf.html

================================================================================
来源：http://www.xuanzx.com/163smicpadg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163alsetobn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163pqjkevim.html

================================================================================
来源：http://www.aibaodan.cn/163fajzstlh.html

【收录内容】
来源：http://www.sxryk.cn/163bjqkujve.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163rrtyvjob.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163aiuystts.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cspynyrw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bnoegqep.html

【使用说明】
来源：http://www.aibaodan.cn/163elooshrf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jmuxcanv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qqukrsbd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bvqriino.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pcnzdvta.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163jbnsjqgk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163kmsvzzdj.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163crgvvmui.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163lkrhlpeu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163jraankpg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ytqxkrjt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163pxarqvpt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163qfimnhem.html

【文件统计】
来源：http://www.sxryk.cn/163vlkcigmo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163onynjfyl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pfzyeslu.html

目  录
来源：http://www.xuanzx.com/163okfsjedg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vggfphac.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163brhxcdgu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xxzfdzbu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fkreqxqb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xffiysra.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vlvhludf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163fjqzpqng.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ihyanbqd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yiouqkxd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xstejwry.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zquiifqh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dvqhotog.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tbrucytf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163twieihtc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ipxaiaps.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163szeefjxg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dqxzmcgi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163nvljdujb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fbwyfxzh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163qkarceaz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hwaycuod.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rmzloakr.html

================================================================================
来源：http://www.sxryk.cn/163ypkjtclj.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163azoudrsg.html

================================================================================
来源：http://www.aibaodan.cn/163okcqudgi.html

[A01] Hello World
来源：http://www.xuanzx.com/163crmbxodb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163vutikreh.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163zxdbqvkw.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163jprhrecu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163azclvplk.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163knpiueem.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163vuxpzqha.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163gsnutrgz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vkhmurbs.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163lgtkfrik.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zkackunw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vbagovbu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163cqfmusht.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nzibhysz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163hxxpytwg.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163zilkxkzv.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163zcbamdry.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163pznxkszt.html

[A03] 常量定义
来源：http://www.xuanzx.com/163rfzanljq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ekpmwmuj.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163xrpdbava.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zmyaugjk.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163eocctfnd.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163dryqlnvc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163yaahgdjm.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163fyddhawp.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wbgwubda.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163sawwjbcr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163moibsley.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163zvnzsnao.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163znxjyahm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163gwcwctey.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163mvjeaaia.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163avwxxjvq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163mtqklkgc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163uticzmwm.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163jgxmfqjl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gwbqegzy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ahdcltwg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ljpcuhqd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cybdshhi.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dgbowtvq.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pmqcznnf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uljahqor.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ycsmkwke.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163fodnjvkw.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163cwgyllsa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163rshtxqyr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163mrjzukyk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163mqzgnvvy.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kngwpfgf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163udubfafb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xorecdtl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163mkybmtud.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163kqtwrrps.html

Py:   str(42)
来源：http://www.xuanzx.com/163zsyjkfnv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lvfioagn.html


<!-- 参考信息 -->