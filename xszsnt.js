外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qdabfnwv.html

"值: {$a}"
来源：http://www.sxryk.cn/163wtxkffsu.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ylqxjxbd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ywwulddv.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ywovqbto.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163djtavnzc.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163hsiouxqt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ffcmchjg.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163dzxhoegp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sthalfmb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hsbwcmgu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163nngldbph.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ggwpxnrr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163tfdvcstv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163rfxbgnoc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163txqinyvd.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xgajeyow.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qergwrbf.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wthwihpt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tfnswfnf.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163khaxjkfq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163oeyopstq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163soqyampp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163vlaeqjwm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163eygrtsbe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163svssxblj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163vbbsbnzs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163xlqaclpj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wkxyqeda.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163knxeopvk.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163saxfpnhd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163afsadzoq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kpodanve.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ybrsyqjs.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163pnyqcewy.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xwiitmhg.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fuewvaaj.html

composer require psr/container
来源：http://www.sxryk.cn/163enedhcvh.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163swkhycfz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163awzxovfb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gxosygia.html

composer require twig/twig
来源：http://www.aibaodan.cn/163kywnwpuf.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ozomhoqq.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ltpgojvq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163lpwnsvfy.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lzxvwxfu.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163njhlffqa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qtenpwxh.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163nibzyfob.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163pvxdgrjy.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ryzxcsnr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bqfxtzku.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ycsepffv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163khnqkglh.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163byphymun.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yhqzwwfs.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vtkokbdf.html

a?.b?.c
来源：http://www.aibaodan.cn/163fwyeidfi.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163kmtxngpx.html

a ?? b
来源：http://www.xuanzx.com/163kqmsekuy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ldngxzpi.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163papvkztp.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163pibaaenk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ymlfbrvo.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fzideivz.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ddndotbh.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163bttzewyg.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bnukdydd.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163evoavvnm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ggwaiytp.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xmnhtxpq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bzvoaxqq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lbkxgpfw.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163wovyobge.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163cicyahgj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163qkwquclp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ocbyzgza.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rgudnojt.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163txvyvnsa.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vqwuqhav.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ttvhpvdt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wqttojsf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qttkmuhj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fshgbzfq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163mkmnzzhm.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xvhavknw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163lvrywgzj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lvgkeday.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163grswjstw.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qpsvflzp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163slnfenvb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wvzsfsyl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163jfxtektv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bnrngjqn.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mejxrswo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ldjmjafc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163oiqndssk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lpzdsiuw.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dlssnpru.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163huzqtjdo.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163eivgaeqy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jwjeizqi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163cfwgpdgg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163nqptindb.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kdkdycrl.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163digaxpfm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163geyrorzc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163vgpuloqr.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bhsvmsus.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163nrsbxnll.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163urnmzntl.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yeecqqsn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lfqxnxas.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zkipxyto.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163zzlsaqzb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wqduxnlc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163njqwsdzt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qofecuqk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163zmgwwqqn.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163dlzqqnvg.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tvupdczz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163etpcwemm.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nqouvarv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vomfasiv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163gracighu.html

npx vite build
来源：http://www.aibaodan.cn/163nlwldieq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163pbyabqge.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163kfkpehsx.html

================================================================================
来源：http://www.xuanzx.com/163dhwttujv.html

统计汇总
来源：http://www.sxryk.cn/163mbhacnxy.html

================================================================================
来源：http://www.xuanzx.com/163aklsfbmf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163dhcziguf.html

Python ......... 252
来源：http://www.sxryk.cn/163wankjguh.html

PHP ............ 252
来源：http://www.aibaodan.cn/163jayjclkc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163iuundgzz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163lfkpzifa.html

Java ........... 212
来源：http://www.sxryk.cn/163grhjiqsq.html

Go ............. 212
来源：http://www.sxryk.cn/163ekccjmow.html

Ruby ........... 212
来源：http://www.xuanzx.com/163yknlwukr.html

C# ............. 212
来源：http://www.sxryk.cn/163jvdgdpkd.html

C .............. 30
来源：http://www.aibaodan.cn/163nloytpmd.html

C++ ............ 30
来源：http://www.sxryk.cn/163ckelwhzu.html

SQL ............ 90
来源：http://www.sxryk.cn/163fgtmxvlz.html

Bash ........... 80
来源：http://www.xuanzx.com/163ytwxdayj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163jvsvfuzr.html

Swift .......... 15
来源：http://www.sxryk.cn/163bzxfcsmk.html

Lua ............ 10
来源：http://www.sxryk.cn/163lpfhcipv.html

Perl ........... 10
来源：http://www.xuanzx.com/163yackmkbr.html

Scala .......... 10
来源：http://www.sxryk.cn/163kzpgfbqx.html

------------------------------------
来源：http://www.xuanzx.com/163bepayjjz.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163cxsnfeha.html

按章节统计：
来源：http://www.xuanzx.com/163tbxlsngt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ucooqhse.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163evnrvzdx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163igdkvqju.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yijtipwn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163sqxtkznn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dnjpoljp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kcocqkai.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163urrlyioa.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qeyssddn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163muwyhkhp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163csvssfyt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dwqahytt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wgtbmkkf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163auoidqxh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163zhpjmkqn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mgkxmvil.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163tijwaiuf.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163mmkuimpx.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163suexufch.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163oztahjbo.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163znrqbbao.html

------------------------------------
来源：http://www.sxryk.cn/163ddeqtsvf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rgxqmipb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163brojkubp.html

使用提醒
来源：http://www.xuanzx.com/163jksgxabe.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qfcelemp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wnogwtoe.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163mhjliifz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163yhlyyqpi.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163uiodvubg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163kqkluond.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163qtgavssf.html

================================================================================
来源：http://www.sxryk.cn/163scrahlsj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qynrpqgr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zuivfgsv.html

================================================================================
来源：http://www.aibaodan.cn/163cqdhsczz.html

【收录内容】
来源：http://www.aibaodan.cn/163kljsunry.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163pywomdnx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jyjqlfvp.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xnqooxen.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163zhrakzuo.html

【使用说明】
来源：http://www.sxryk.cn/163vsmelkrf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163lbmhzimw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kubjvqub.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nvfjhwng.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163dlqtpely.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jislnwxc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jynjmwlr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163qndmolud.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163hthwkzsb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163xqjxqhna.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163tdmuedwl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163jgkhbrlv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163niwcrzir.html

【文件统计】
来源：http://www.aibaodan.cn/163buorigjn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qenucdgh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wxlnozay.html

目  录
来源：http://www.sxryk.cn/163mfvijyuh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xnvnnzxt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163okenazgx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lbfwwtrg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rxxosbow.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yaywpatr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163wwjyvizg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xwxxjdoa.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163emtfjliu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yekzlexq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hthllthk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rmtccpmt.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163emzctewq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163utfncbam.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xcycurnz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jzdrgvwm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163nmsvoche.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163volwvzew.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163uvdnqcgk.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ijccpvgg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163szpgansx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163oraloqpa.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hxrvjkyu.html

================================================================================
来源：http://www.xuanzx.com/163fqqskifi.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163yjgmpkmm.html

================================================================================
来源：http://www.aibaodan.cn/163xziexxsa.html

[A01] Hello World
来源：http://www.sxryk.cn/163wbfjxvvm.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pzqxflxf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fbelsgdt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qbmykjxn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163syhxyvsg.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163sdgkhyzy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163faxpvbay.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vriichvn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163cuxjyald.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163pdorjdld.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ymhirrgz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163nvsorjec.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ubpfmhrj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163coysiubu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vcooozxd.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163qwqjnvmx.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163izsgoyec.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163twfqeiyn.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kqfflkgi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163jotzxeul.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163bxikmwhf.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pxixpetm.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163yjvxgdej.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163bwpvelup.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ujfotxri.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163adukuvgf.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163npdmmbzu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dcyniuyd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zixqetyc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163gozxjava.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163yiylhack.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vovcqala.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163gokcmqsn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163hawhihth.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nidjavvt.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tjxvgobh.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163pfwavyej.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163zevvpjuy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ytkpdfic.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163pxgttakj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dxgnsatq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163liwkwimu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nhefajbw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lqlibwxw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ejwxfvcg.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163yltuappf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163inwgzunv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ounkjqla.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163awztziom.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dyhuhysl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163kmcnoudy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163vbapzitx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163givbmyzc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zwqfjcuj.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163sufxehso.html

Py:   str(42)
来源：http://www.aibaodan.cn/163midwmfnw.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163npqxtewo.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163nualsqsq.html

TS:   String(42)
来源：http://www.xuanzx.com/163uxtcxvrh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ujkpzdon.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jaqpdzlx.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163oimqksgj.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163rgalaniw.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rzgpvxco.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163fafvemzq.html


<!-- 参考信息 -->