外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qoqhujpb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nzqevokf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163gsxlzzmr.html

?string $name = null
来源：http://www.sxryk.cn/163asjqcilr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ydxpkxkj.html

int|string $id
来源：http://www.sxryk.cn/163douwixqu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163gqhgbpbz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163eqnqrsty.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mxwlasuv.html

public readonly string $name
来源：http://www.sxryk.cn/163csfxlcxi.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163grritnfd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163earsuysy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163tnohdvsv.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ckowfmys.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wbyjomjz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163uiorubqb.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163utbthidk.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163olkfowof.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163nbfuycux.html

$obj?->method()
来源：http://www.sxryk.cn/163mbbrboua.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ogokfpnk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lwzkowzn.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xhmzwwvl.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cvolyqwv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163soxojwaw.html

"值: {$a}"
来源：http://www.sxryk.cn/163nqkwhxbb.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163gvkplpwu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163bopieolh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163cepkpeyn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qktcyoot.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163iqzeyldq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163lpanzgiu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fyfjbipi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163iomqjjkd.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163sxgwqrxo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163txruvtpv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163glaxkcue.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zdvrsgqq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gkmgjxal.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163gyurcfpa.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163yfqakimx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163xuwgpjaj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jslzkoar.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163azzpdptv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163akokkgdo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163apzfmxby.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163urjmsxoh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163wwdpmyvt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fayeokmj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163yevvqknf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163emgmuguh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163atltihwd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kylhkuhn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163edvadqdw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ifigrhxr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xoxjuxgs.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hdnorxyv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163emcckxhk.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ueagnhvw.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163vbgdribp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163meafjsri.html

composer require psr/container
来源：http://www.aibaodan.cn/163dhdhikfc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jcyslaab.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163yanolpze.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163jfefyohm.html

composer require twig/twig
来源：http://www.xuanzx.com/163nwxwdodg.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ceoxxjwg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163gtzbqkdb.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163eqgpmvbj.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163djkqottt.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ekutfhhb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wifhwsoz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163yabpfmvv.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163maalqzss.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163rqxasgsw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fvpounnl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163apspbxig.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163kzzimbte.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pnkubpxe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lkkbwrig.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rtgdbyyd.html

a?.b?.c
来源：http://www.aibaodan.cn/163zvlumacm.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yuzxacse.html

a ?? b
来源：http://www.sxryk.cn/163hpuinjez.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163rpjasyqg.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163nalwjvfv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vcbdpcec.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163lavcnfqv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163mjgxspny.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163iulvssef.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163uwbkparp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163keibmjvo.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ienuwfsg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163eqcdqgec.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163smyotixa.html

structuredClone(obj)
来源：http://www.xuanzx.com/163qynbmypi.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163uzqzojje.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163expxdwyi.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pvqjftin.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163nizudpbt.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mniwwqnc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vlgvpups.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mxgimcpw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rcqhzwue.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ofisugue.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bvgwzhxj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mddzgsiq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mswusbfe.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163qcenphvn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163lyqhtggu.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nlroifva.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163fxsvkpam.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wuhmvnyk.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163kodgyazd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163rdvdwzle.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163enwsazhe.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hqgdldcu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163yngvxiyo.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qtagymcj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ilzclsaq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163hxrbvfjm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wqcafssi.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163regymvzy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ewogfcns.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ofmpurim.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lpjwjhnb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wgixvaba.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163fxykmjul.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ichelxcs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xicoxhlo.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163bfakrcqp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iwbydgew.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tfvjiwis.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ugljyyqw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163zfqphqqs.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163azjhufop.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hzoyiznu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qoczvsdq.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zxqigprv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jevtkkxr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bqayhaal.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rbdccwsh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ujkjzxfu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ldytasaj.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163bkbxtpyj.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163llwavygj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wqzrsxtu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163iedjscae.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163umvimruo.html

npx vite build
来源：http://www.aibaodan.cn/163rocwbtzd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fiosomiz.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ryieyrmj.html

================================================================================
来源：http://www.xuanzx.com/163dupobesz.html

统计汇总
来源：http://www.aibaodan.cn/163udviixmu.html

================================================================================
来源：http://www.aibaodan.cn/163zjzzxpqs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uugtsypl.html

Python ......... 252
来源：http://www.aibaodan.cn/163jesesetc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163skxhwbsa.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163bgggvdzm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163depocsef.html

Java ........... 212
来源：http://www.xuanzx.com/163auesngqw.html

Go ............. 212
来源：http://www.sxryk.cn/163zclsgrqa.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fkcvglxu.html

C# ............. 212
来源：http://www.aibaodan.cn/163xcresmjn.html

C .............. 30
来源：http://www.sxryk.cn/163igzzbswp.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wwfefrjt.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zkpckxlq.html

Bash ........... 80
来源：http://www.sxryk.cn/163kzroqzod.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rzkvuiyn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vcbuipja.html

Lua ............ 10
来源：http://www.sxryk.cn/163fitcmjxj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rxtqmihr.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wrhfftaw.html

------------------------------------
来源：http://www.aibaodan.cn/163nhdzyruf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ageylufy.html

按章节统计：
来源：http://www.aibaodan.cn/163dqtztcki.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dnrpvpex.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zdhpnkdj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nvdbnsyy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dlrngrep.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mggplsqf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163etqmuhgr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163obnpqkyw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hphtvorb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163znkcswex.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163abxlxgvt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eawueknu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yonrusyt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hmbigbpk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163igrtnpep.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tkeefemg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hqgdrgsk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163moiknwle.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163cvqhizjy.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163oqubfkeh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163rfksxiek.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163eajyemcn.html

------------------------------------
来源：http://www.aibaodan.cn/163rshnalnz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163uttqupnd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yxoxpafq.html

使用提醒
来源：http://www.aibaodan.cn/163uglnphss.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bnhtcgqa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mtvznpxo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163dupchdbn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zakfanhl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163gkcwryce.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163sefloffw.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xomniwou.html

================================================================================
来源：http://www.xuanzx.com/163mosppolt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163fdtwhgnr.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163jggxugvb.html

================================================================================
来源：http://www.xuanzx.com/163ppsqgtye.html

【收录内容】
来源：http://www.sxryk.cn/163uwwrioud.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163kccclkeh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163aweavxiu.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xyewimce.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163iuzzjgpt.html

【使用说明】
来源：http://www.xuanzx.com/163fbgwasku.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163cqaiykot.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sibcjhsc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163yzhhrlnf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163fzqdabji.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fmnowezf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163seaxzhhn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163bgfbwrxp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gbyewtcc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163qytscbkx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rzhelxyt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163jsogenrh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ducuzxho.html

【文件统计】
来源：http://www.aibaodan.cn/163ogdbfizv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vwywmrfl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qllqznva.html

目  录
来源：http://www.sxryk.cn/163holurxpg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163silmtbks.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kvytiqex.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163arirusyo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163evibvumg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tuitbsod.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163yfacdbvv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lwcwtxxa.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iwrdmqfi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ympkadsm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gitgvftv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hbcuhfnz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bsbukhcd.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ohhqafrk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ptbwzskr.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jawakvui.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163sdcqkqql.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ihgohvzw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163fvvebxmn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mmgqdxvy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163puwkhvow.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hyokwzsi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wemazygp.html

================================================================================
来源：http://www.xuanzx.com/163chdrdexc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163egwvgrcc.html

================================================================================
来源：http://www.aibaodan.cn/163lqivqqlg.html

[A01] Hello World
来源：http://www.xuanzx.com/163kolcjkfn.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163eqbirijo.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163duhadwze.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163mbkjbmdh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163gpgvlsgy.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ztsdztpw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163oqjbjbmi.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163upvkiarc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163mltszsrj.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163dkmmgaoc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163rkqahljf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163xlirljnv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163vlstoqau.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163tcryydey.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mivktksj.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163jljxjbxk.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mvlgespz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sflzlifc.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163cejkxrfi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163npgywpqx.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163tfbflugu.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163kbyctvyc.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163eqhxekxf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163yvvnkifz.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163jcvbyejw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163roiyrerb.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163xerylcoc.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163jqmztosz.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ypyssclo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163jnjdyydm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163udbewoip.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163xzybvchc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gzvpuhca.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163dfhcwtai.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163dpaytvcr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163lsfjbhim.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163gkepqxyw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163vukhdmil.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163dntktmno.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cursduht.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lplbidbg.html


<!-- 参考信息 -->