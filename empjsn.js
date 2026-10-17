外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163okpykymf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163flhjmphs.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rlraggao.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wrgyrbxu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cmnnscsc.html

namespace App\Http;
来源：http://www.xuanzx.com/163yizxhvvb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ryfyahlx.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ewhkoxxc.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bfvmfyhr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tyfatwxl.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163szzvjktw.html

?string $name = null
来源：http://www.aibaodan.cn/163aucyfiuj.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163rmxxndbf.html

int|string $id
来源：http://www.sxryk.cn/163yavdrweh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163axeoqatz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163dydaakwv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fcygsvcl.html

public readonly string $name
来源：http://www.xuanzx.com/163argbliqe.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163tbqzkjqr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ufopyuik.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163pwbadloe.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163clifenae.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ooksrilh.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163wdmzjhuz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163oamwpgug.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163zbecexqq.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rsztfiem.html

$obj?->method()
来源：http://www.aibaodan.cn/163usyzlrsi.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163yvgsfnnk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wvtngeln.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163nztdwimt.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163arfubniy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xgarwqxf.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xonbiuaw.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163icrtoljw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163sdyhjifl.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dhzpophp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sphdylbx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mghxhdxm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pxutwsii.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163qvwhxojp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163leqvelpl.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ylqmgkti.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ugocmlma.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163vrseptkk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ucoqdazx.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jnhoxcpg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lzdkhsgx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163cvwdritm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163tfdlioje.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wxmtaeps.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nmzlubyq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uembhfxf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mpqkxxop.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163edromqta.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lxbmsubu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163icjmmyzi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163wxtphdhg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wifjijaw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nxkjwuob.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nlldqfbo.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163coylcltf.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163wuwofnau.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dyoomkjd.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qaahgykw.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163uozbmsca.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163gjusarmx.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163voyxfggb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163dlyxvril.html

composer require psr/container
来源：http://www.xuanzx.com/163cwfulqqt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pubblvsk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163zyxdicqh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163xbcjkkxf.html

composer require twig/twig
来源：http://www.sxryk.cn/163kqorsbvk.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163dxkjwtdz.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ianuiphj.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zrjndbmn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163yhsptslh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163llfrzckw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ojnajkvv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gacxxsuq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ymbfbija.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lnprdkpc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163yadmssuw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ibljjopq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wvxszmdv.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163dhismumh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163hdkgpydr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163qmizhnlb.html

a?.b?.c
来源：http://www.xuanzx.com/163yksauxgn.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yuvaolmr.html

a ?? b
来源：http://www.aibaodan.cn/163ombsgshu.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ohouzlgj.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163rilqwzgg.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rfarkabo.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nnwsgxuz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163rgxamqxn.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jcgsscll.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163bbutbffz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uvkzqfsu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ltnrswvs.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163qsmbckkh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163bmpuozkl.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bwvlffdl.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cpinqgok.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163tyguewot.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zwffqiso.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163bynvlsgr.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dqonaxng.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ttpuwvcp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163spfszhjh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163esgyndic.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ezuohxjp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qjcxjyma.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wigmutro.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163vgqmqutb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163wwkkwjgm.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163xtpdwxjy.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bmxlgoeu.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uaaaocta.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163boyiwjex.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163faxdtkmk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qvxkhydm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163wvzacfvs.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163eawkyvaa.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163silakmzx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cbhspkqi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dsaaodhq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vigdmskz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nfjacwmi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163adckytol.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163apqzfehc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vbevhykv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jiydvkhw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163cjvfwvry.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163htlkflxk.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ajqryvll.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hcaehqqn.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163nqyjphtr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fbewzdee.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ptfewgnh.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mflcpoxc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163riiahrto.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fodhxrth.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163cqvngqse.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163luycgcoz.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kddljred.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sukuevyh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163frmdsiry.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cgmmipjr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uludlgew.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pymlcfkn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163hxojwdbs.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ffbydhai.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163seywptvw.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xzzxbhrk.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163kpkhxcul.html

npx vite build
来源：http://www.sxryk.cn/163awujwvrb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163bwhebnhu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163xeuqzexn.html

================================================================================
来源：http://www.xuanzx.com/163htcvolzy.html

统计汇总
来源：http://www.sxryk.cn/163rcuckimq.html

================================================================================
来源：http://www.aibaodan.cn/163gjkcfdyi.html

按语言统计（条）：
来源：http://www.xuanzx.com/163bmhdsevi.html

Python ......... 252
来源：http://www.xuanzx.com/163lqfkyqtf.html

PHP ............ 252
来源：http://www.xuanzx.com/163ixjpmvgm.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gkhzfqbl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jpvvwwnf.html

Java ........... 212
来源：http://www.sxryk.cn/163nevlylhi.html

Go ............. 212
来源：http://www.aibaodan.cn/163mjvqvrxq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163vwwkguct.html

C# ............. 212
来源：http://www.xuanzx.com/163wnrnawgu.html

C .............. 30
来源：http://www.sxryk.cn/163hfebkdqc.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hmvvqdza.html

SQL ............ 90
来源：http://www.xuanzx.com/163xobyljog.html

Bash ........... 80
来源：http://www.sxryk.cn/163sfehcrqy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163groiknph.html

Swift .......... 15
来源：http://www.sxryk.cn/163lihsjyxb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163symcaskd.html

Perl ........... 10
来源：http://www.sxryk.cn/163ekpkshfb.html

Scala .......... 10
来源：http://www.aibaodan.cn/163iktbiffx.html

------------------------------------
来源：http://www.xuanzx.com/163ntqapgnc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bhqqamsb.html

按章节统计：
来源：http://www.xuanzx.com/163kxgulhla.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dsedjgtd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163roujvmhz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ttavbvuk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hfvslblf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163sfzzlgbq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163icrwaper.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vwwnzkfd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163meqideqe.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bmwsbrdv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ilithhtt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lvhiclwx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163heyeolwv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163orzdfxqy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163yqfzgnzh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163xeayztlp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mavlysac.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163tkirjnva.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163oftvwxkx.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163cmebqxsa.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163scewphtu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163grhvsxck.html

------------------------------------
来源：http://www.aibaodan.cn/163qvyfgdpd.html

合计                                  2106 条
来源：http://www.sxryk.cn/163gonvdyai.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dhfoowqw.html

使用提醒
来源：http://www.sxryk.cn/163gjfpjeyd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tgcbygdk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163yepznguu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163qsajdemi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163pijxplou.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163vhncozvr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ixdtrooa.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ukqtyijy.html

================================================================================
来源：http://www.aibaodan.cn/163uvkbzfed.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163klgoaeli.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cerdvpzy.html

================================================================================
来源：http://www.xuanzx.com/163oykgqclz.html

【收录内容】
来源：http://www.sxryk.cn/163lkbcoljf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yzgjdoxu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xvaohygt.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163euqggmkx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ysompdsl.html

【使用说明】
来源：http://www.sxryk.cn/163azvgvwfq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jzdvxhtz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ymxplxhk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163lculbkiv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163sypolfub.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163tlvylchi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ikpcaixr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163kovfjzbu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dkcotzya.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rbjvplvo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rxiytmyj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163macowdsn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uofeblbe.html

【文件统计】
来源：http://www.sxryk.cn/163dtkxngoy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163yfggfyyr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gtcjdpkw.html

目  录
来源：http://www.aibaodan.cn/163cqzzipsu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nslkihsi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jhcckjjb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qzekulpc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rihrflhe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mvhxoodd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163yxfydcck.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ldgyigef.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vptgohrs.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163acswvhfz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kycdonar.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dyohvtkz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tnlttnqn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cskyylvf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ilgcswvq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163chymayfn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163wheeezwo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163itvbhegv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163fnfkhotn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163admbtfes.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163meiayfbh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gvzgmapj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qlfqteui.html

================================================================================
来源：http://www.aibaodan.cn/163goftnxts.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163uamuxwkb.html

================================================================================
来源：http://www.aibaodan.cn/163hzxjqxew.html

[A01] Hello World
来源：http://www.aibaodan.cn/163vnsbsqma.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fiqsyrea.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163cvtuvjfv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cvmebtvr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fadxjyxd.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163zygxwnzy.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163pltmrxqy.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163vibnhblu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163esvcnyvf.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163amahislp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163xyfyijum.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163fpyougsc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163awqyzxgg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163xerepxgk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jfbicubf.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163zrefwund.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163dxwwzpvp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wblljhfu.html

[A03] 常量定义
来源：http://www.sxryk.cn/163wjwvwjdg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163musgbdob.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163kcspjfux.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163dtfravde.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bdewcbks.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kkagurhg.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163vwyzpfnw.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vfqujnse.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163rbienvni.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163zelfvsjl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163hgnrazit.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163qntloziz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bsrovwri.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wlcfiuds.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163dzrqvowa.html


<!-- 参考信息 -->