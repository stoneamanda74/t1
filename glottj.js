外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hoocfcqf.html

public readonly string $name
来源：http://www.sxryk.cn/163blgpbzpg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wfyfajyj.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ucaohskx.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163aztcxpnx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hbqbxuwq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163vktwcnis.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qallrhdt.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163kpvznjoq.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163extxxeni.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163omitlunv.html

$obj?->method()
来源：http://www.xuanzx.com/163nokogvkq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wwjelnyf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163cfaszwrt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163omlqrdoa.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gginlwmk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fdbrsepg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xxmghcbb.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jmqhivwo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ulsahimc.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163hdgcxwuw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ghurrynd.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nkbbadtk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163gjamizhx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163eatjdhka.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bbawxfcb.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163gvlhekmi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163upimvwte.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yatdknbq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vkijfoil.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rqbgdijy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zmyibmrz.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163nbjhimta.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vgseegwm.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163biybnduh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163snoaufcf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163tfgoqaju.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163kjnqjzpg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163uahwdwzg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163afkxtvop.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oqvuiczt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163kpwvsqaz.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163juixvasu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kgcbrdke.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hcansnnw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fvujetss.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jsvwmtmm.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163dandxsdj.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163lsghkfqx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163knqpiilo.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163lnoxewox.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iopmswas.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163evwhhecp.html

composer require psr/container
来源：http://www.aibaodan.cn/163ndyxyirq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163fpevxdaj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ljhgayzv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kodlxont.html

composer require twig/twig
来源：http://www.sxryk.cn/163wgrllqis.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163cteehaub.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hsjilqeh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bjrxbfvt.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163bmdjmacl.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163toxtqaer.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163kvhhopkr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163upevxeca.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163wvpooizb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163kzcxlewg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ugcfkpmo.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163injqliyd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163fewyiupn.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163wizvntjq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163kmaoukeh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163luevptua.html

a?.b?.c
来源：http://www.aibaodan.cn/163vtkmvfjk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jqblgwkf.html

a ?? b
来源：http://www.sxryk.cn/163mstsbmcv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ccnliahk.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dkpgoqlr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163uiaecweg.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163eieuvdhv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163nrsyqlqv.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wkrlqkde.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163rxlhcacp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lfpwolkv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163quxxvufr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wsskqtqr.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163flvssdgp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163awdqlghb.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ketfjwji.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hrypjvyu.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vrjvlcvh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qamnttuq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ydyfiuui.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qaqhewpv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163jaewlqxu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fdjaprxf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163tflzwndn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cdhjjrug.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bpewihhb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163whlyqjjx.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163htbkiasu.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163nrahjxwk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mfyabqkq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163nqnbhrgo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163sysrftvy.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dwayaryx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163cwfsbjnl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cwtwyrgc.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163foghbifg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vbqocvuo.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163hpvwghso.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dzouwwld.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hwdnttuh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nffkitqy.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163eiinmmqf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163evvxwmlr.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163nmpmbmen.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jlhzbnzu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tgkzukug.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163zrxwurwa.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163atuilewq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ksgnxout.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rspprvtg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163oopirmst.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jufmdtpy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vtbedqcd.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163amelafpd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163bfniwybm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163drlgwwyb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163juqvagya.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163acrsotpq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xqyzbwek.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163rdnboluu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163oewifchg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163spcgewln.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163eezhxxsc.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163swzsnjrl.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163sidbzekq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163gmjtjqlj.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qpvuxxll.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163igjepqwc.html

npx vite build
来源：http://www.xuanzx.com/163sjnuyslw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ghlndlcd.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163godxhziq.html

================================================================================
来源：http://www.xuanzx.com/163xcgyddvd.html

统计汇总
来源：http://www.aibaodan.cn/163onozhusc.html

================================================================================
来源：http://www.sxryk.cn/163qaegbmbm.html

按语言统计（条）：
来源：http://www.xuanzx.com/163jbnunmuz.html

Python ......... 252
来源：http://www.sxryk.cn/163pmlrrpcq.html

PHP ............ 252
来源：http://www.sxryk.cn/163ilrojnwi.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163djhixwmb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nfofnivq.html

Java ........... 212
来源：http://www.xuanzx.com/163shjdhgmu.html

Go ............. 212
来源：http://www.xuanzx.com/163gicjljed.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hpbrfnuz.html

C# ............. 212
来源：http://www.sxryk.cn/163fbjtvjaj.html

C .............. 30
来源：http://www.sxryk.cn/163qhipgkia.html

C++ ............ 30
来源：http://www.sxryk.cn/163qtxkqkov.html

SQL ............ 90
来源：http://www.sxryk.cn/163kiexhibj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163tvntgear.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163yaghjxwl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163yqkciurd.html

Lua ............ 10
来源：http://www.aibaodan.cn/163thumfshw.html

Perl ........... 10
来源：http://www.sxryk.cn/163hzxutsft.html

Scala .......... 10
来源：http://www.sxryk.cn/163ftfwwoad.html

------------------------------------
来源：http://www.sxryk.cn/163rkbpispw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163bnntlvrj.html

按章节统计：
来源：http://www.sxryk.cn/163zyqktoal.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ckjfbede.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bpmcaeay.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163okqgmacx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163axngqser.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163bepxjuqv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zjhqevul.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wuuwqvsy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wvgjvabh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eswwgjjw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163foeimkjm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zyjkwrqi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mvdhufuf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163woxxnjvv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fgeyxyrc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163fapizsxs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qmzfwssd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163isghjblu.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cndomwqx.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wspbtrzv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163japamsff.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bkuengtf.html

------------------------------------
来源：http://www.aibaodan.cn/163wwmfzrvt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163skiyaznn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163udzakfpk.html

使用提醒
来源：http://www.xuanzx.com/163zgvfvkqn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jdcmeogw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163qhzfcfsn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ybvwfxwp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163asazknqt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gffvcdhj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163uadgarig.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163mbglgjnf.html

================================================================================
来源：http://www.xuanzx.com/163terfslvs.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163slrbassh.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fyxtklbn.html

================================================================================
来源：http://www.sxryk.cn/163gevpcggh.html

【收录内容】
来源：http://www.aibaodan.cn/163tofhllgy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163yivgefcc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163bwhfctvw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163whtmxvsx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163recfvksy.html

【使用说明】
来源：http://www.aibaodan.cn/163sksdwcyl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163sxtsppbo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nxygrgmp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163oxwxnbbq.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xncgpxhd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fnursktj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fjdwgpfp.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xyvfwfoz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ejathzcb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ndqyjkwj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163xlmnigbi.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163yujhejrk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163njzghkbv.html

【文件统计】
来源：http://www.aibaodan.cn/163yygzhwcz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163gexnqslm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163thzqrfvh.html

目  录
来源：http://www.sxryk.cn/163qcklgnuf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bwbctcys.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vqagjlrf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163evzrpoas.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vrcxdotv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163glhcsxmz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163cbcuayqu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163arlennwb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xvqqqkdb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ubqhlfqr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xqpnlqey.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oopslwgz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mvhnqiap.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kgqdqkdj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tdcfmooi.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jirplffk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163wsqgijgs.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163capbfghr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163qxvzjqca.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163umghxcrl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zmdtdlmq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zibfpmwz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rtwjnsmn.html

================================================================================
来源：http://www.xuanzx.com/163wbjlnbzi.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163kjcnxjpq.html

================================================================================
来源：http://www.xuanzx.com/163feklefuc.html

[A01] Hello World
来源：http://www.sxryk.cn/163earkfmao.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163xbfdjtht.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wwnahwxg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163rummwqvj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zeooxjyf.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hjfivbqe.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163iggmpemj.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163phssjgnp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163qrrjpgpk.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163winohsor.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163yfqzmqba.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163cspkwtyy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163bauzvtgk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163jqwvawct.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ziuzhkud.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163duvabqxg.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rxjdnfzf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xtwkpxts.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xzkbbhvs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163edkzpypo.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163dslukbnl.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163eljgjrlh.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163sfpkblgk.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163yvgywpjh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gasthmaw.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163cwizjlzy.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163tshguavn.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163ptczbxbu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jzfovyhs.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163pbenlvto.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qmrajett.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163scidalib.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163etbganps.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163eregcmpv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163edspiavt.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163kdnlhyqe.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mkpnzapu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hrihqbgt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163oowjipwr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wsaqttrr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163adotkqlz.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vysvlhkr.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ormnwqdv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163huimczsj.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nalkskdb.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163xgntzcuc.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ycqxvulk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163sfbwyqsv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163gguhgkfh.html


<!-- 参考信息 -->