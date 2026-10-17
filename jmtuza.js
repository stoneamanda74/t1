外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mahoquav.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fgoogaic.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kooojylv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163zeufuvfe.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163gkyqhmxo.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163frusrcmp.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rgqlkfoj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mhhadvvr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wztlzewl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tpaplpiy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163mbvthqxu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163whvefxqg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163kymdgbwv.html

namespace App\Http;
来源：http://www.sxryk.cn/163hiyvpfbs.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bgqwbqsf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bphgjmef.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163aarvxtap.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ktifsoed.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tmyakflb.html

?string $name = null
来源：http://www.xuanzx.com/163nmcgyflw.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xqqdquvg.html

int|string $id
来源：http://www.aibaodan.cn/163estrgsig.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163glkkfvqu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163lcfchkul.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163qmgvhbgy.html

public readonly string $name
来源：http://www.sxryk.cn/163pxvzrrtj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ukqromdl.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vzciuqge.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zxuuolbk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wqjyrztr.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qfifjepq.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163rhpewect.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163nojeiriv.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fmynkqin.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xtvorjqf.html

$obj?->method()
来源：http://www.aibaodan.cn/163pthzpxhr.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163pfpqwfco.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oxqzdupa.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163unhkhbws.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163latcwmmy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163lriqzckx.html

"值: {$a}"
来源：http://www.aibaodan.cn/163usovychh.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ryixcida.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ctnbjdxr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163niyykouf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pzyzizma.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mbewvrby.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163tgrplgbz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163voxlqryr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eukalaqk.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dubxvlrq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163uzcwhhpn.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kvzciuxr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163edieiwdn.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rgrnxisn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163btcjeeil.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dlajvpmd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163jyboslkm.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163tfcmyitc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qpxtbosq.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hxrqnins.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163nowrkkvb.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163erhugbnc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wdpiygrx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pidbivmm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ggrqfpzj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163uacmynnr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163mpyopixi.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hfxvszcy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xmifrdfm.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nvuawjyl.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gwgswmrs.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ubawamto.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163pugzpulk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163dzasesfv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163buwjwzcl.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163tbzwvkax.html

composer require psr/container
来源：http://www.sxryk.cn/163jruarkrb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163lahsxrmh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163mqqqimig.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163uygpmrbm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cgofmnxs.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163lnzvoapd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163dbtgyyct.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163sspglbaf.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bpxrmatn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ewuewnxi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nlgbpeoy.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163rpyfqsmv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163yqoagxoz.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163oujmongc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lvixdfad.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163mxtgvfvh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vrdvuzzl.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163fxwegnaj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163iuzuvfms.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bzbspwgw.html

a?.b?.c
来源：http://www.aibaodan.cn/163ayqqzgjh.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163jhjtzpni.html

a ?? b
来源：http://www.sxryk.cn/163nkevcuga.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163svngsbml.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kezshszs.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163anickgyf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163krlnrtne.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lbwdtacm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xqekkcoz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163cspehhjt.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163svuvovbo.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163loadoggq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qnwoqpng.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tlitmdrr.html

structuredClone(obj)
来源：http://www.sxryk.cn/163jvsjjsjj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vewyjqqs.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163kntwsxld.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163nlddqvev.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pghfksih.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163nmthdwgy.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163eptnweic.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163sotnsdcr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zbijtpar.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ibxysert.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bvrdmizt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163gsxhlvwt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vstnjffy.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vqtpmxii.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dupnowph.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zgzjhqcd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tjtikytl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ctzfkuin.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wcjxeilx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fmjwmfcr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ymbzvagv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ocqbevqd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vqrdleen.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163fydbfdvr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rqopfhxq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163pejkddqa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163kepnzxef.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ygsgtgqp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163yydulgvb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163njasbwvr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163mvbpllsf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tdctiktc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163oymxhtgj.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lngtdtau.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wvcwxuop.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163flmtives.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163jhjltnhq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jxkpfjhy.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ytvwxeaq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163bydqbcnt.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163sphhdybr.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ozviouju.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lzzumtyy.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zcpakuav.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cjudiskx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nsylabeh.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163waidntmm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163sxrafoma.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ogbxzjgb.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163yesiagyl.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ngksuzjs.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163bhmwxajx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zjwsmect.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163rbjgnehh.html

npx vite build
来源：http://www.xuanzx.com/163xnoswuwj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xvgjytaq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163rihvxwdi.html

================================================================================
来源：http://www.xuanzx.com/163rgbidfvw.html

统计汇总
来源：http://www.aibaodan.cn/163epjfvewx.html

================================================================================
来源：http://www.sxryk.cn/163znnciiot.html

按语言统计（条）：
来源：http://www.xuanzx.com/163doduszro.html

Python ......... 252
来源：http://www.aibaodan.cn/163wpwrwmvh.html

PHP ............ 252
来源：http://www.sxryk.cn/163yrjdfxve.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163idetrmyn.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nhhgzsvk.html

Java ........... 212
来源：http://www.sxryk.cn/163akdpynvz.html

Go ............. 212
来源：http://www.sxryk.cn/163xzxrdbss.html

Ruby ........... 212
来源：http://www.sxryk.cn/163slezvfuu.html

C# ............. 212
来源：http://www.sxryk.cn/163vnutgeqo.html

C .............. 30
来源：http://www.xuanzx.com/163snpdxalp.html

C++ ............ 30
来源：http://www.sxryk.cn/163ikjvghro.html

SQL ............ 90
来源：http://www.xuanzx.com/163apsbkgtd.html

Bash ........... 80
来源：http://www.xuanzx.com/163miruwmxd.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163wouzavxd.html

Swift .......... 15
来源：http://www.sxryk.cn/163uyhgrtue.html

Lua ............ 10
来源：http://www.aibaodan.cn/163uozplydv.html

Perl ........... 10
来源：http://www.xuanzx.com/163hqejwkqa.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zpboouxc.html

------------------------------------
来源：http://www.xuanzx.com/163aajdtrmu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ysmnbynp.html

按章节统计：
来源：http://www.xuanzx.com/163gvxrddlw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nidmvwlf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mpjbwzlm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mfsjgnvg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zoeegias.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163gyfpfxer.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vroptwbh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163duoozusf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163croyshot.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rzgxoskm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ovnbnhjc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ukkwgdgs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wnvyafvc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xkqikhuh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jfgrgstv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163wichmhqx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pbyavgqc.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hnqgvwxk.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gplspkkg.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dbwvnfiv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vxarvvhn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bueeunap.html

------------------------------------
来源：http://www.sxryk.cn/163fhmbtqbk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vlpjcvuu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163izmzfrso.html

使用提醒
来源：http://www.sxryk.cn/163vecavmea.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zbuulucc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163yiohzdyq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163uifsbkgk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163yhqndcku.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163olrwyqnl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bhbxzgsq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163dzskxgpk.html

================================================================================
来源：http://www.sxryk.cn/163lgrqldnx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163qmwhcspr.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nivvumed.html

================================================================================
来源：http://www.sxryk.cn/163mcqhyinm.html

【收录内容】
来源：http://www.xuanzx.com/163bajvnulp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jldfqfhh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163nxlecvzj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163itbbekex.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163fjkfnuqw.html

【使用说明】
来源：http://www.xuanzx.com/163jrknzuwk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163jikjhtuc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ufzuesaw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ntgcukab.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163hxlrtmbg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163rayzjrgn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163abqacost.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163sngomwef.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163grylacpe.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163xmfwrptn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163pfsnwgyj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163vmivporn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kamatirt.html

【文件统计】
来源：http://www.xuanzx.com/163qqdyvqpq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163khaejhtx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vazjwlmz.html

目  录
来源：http://www.sxryk.cn/163jqkrcksv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ciuzktjs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163lrdjrgjl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163onihdmgo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lmvtzhgc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163psxblmeg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163abmjwqzk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wrxnenyt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ovtiaekh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163sreskbuz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nbjybqoc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163jjfqoana.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wbikhgaa.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fgjalhcl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sdxanttz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ratuzdqz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fhtsrgqc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sisfviad.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163aggnjbjn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ctqekdca.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163nufyvfop.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zgxglrwk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bzzhxqlr.html

================================================================================
来源：http://www.sxryk.cn/163lmnbygog.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163iojbhais.html

================================================================================
来源：http://www.xuanzx.com/163bovcdmtn.html

[A01] Hello World
来源：http://www.sxryk.cn/163sxeolmul.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163juhrqndi.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163qgvzfhhv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dmlmqulh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163jjoncfer.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163bmhudkfg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163lafokjoz.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kclssshg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lumiwxpq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163oytcielz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jmcnzvqg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dhihowse.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163fqbdtoby.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163drtqthya.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163pzqxxlhd.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163klyywfkc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ouzjulbn.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163apuicgzu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ufchbhil.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163hafrhfar.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jzifnkew.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163dtdhvpkg.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163uzkswwbf.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fohnxshk.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zvbafabz.html


<!-- 参考信息 -->