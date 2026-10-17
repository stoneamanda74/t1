外链999!wailian999！

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163fxjcqzpp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163obyfmwhz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163defcgkoe.html

UserId = int
来源：http://www.aibaodan.cn/163jceqdsbt.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163yhpfrpee.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163jsygiqoc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163emxpssdl.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jrrhuish.html

[U31] Py：单测
来源：http://www.sxryk.cn/163pmtifjbh.html

python -m pytest -q
来源：http://www.xuanzx.com/163lfqkkgjv.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bqscshwa.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sxeciatj.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163kcynwhjw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163avazfrzm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163erqjcpfy.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163uqifypmu.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163szllhyds.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ctsltqdu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lijronti.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zfqamxnm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vicudjin.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ybmfbfyc.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163rpuvjkry.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163bgiqxlzm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163pvwqvwxx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lmrannny.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xutkloum.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qttamnve.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163upxzuqsg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ecngrwww.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tuqqhppv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163uvfqofki.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xkwqhvkg.html

namespace App\Http;
来源：http://www.xuanzx.com/163bbqjkoml.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mvvrvsor.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163idlfvinv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163qhuhajmq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zukncjmt.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163owybplya.html

?string $name = null
来源：http://www.sxryk.cn/163yuebzlud.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ntsaisls.html

int|string $id
来源：http://www.xuanzx.com/163jgvklaxy.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163drjnnilx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wvskhxyh.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163tbvlfgiz.html

public readonly string $name
来源：http://www.xuanzx.com/163ezlwpyfw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ermlvmwm.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163usichxou.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163gwlnaxud.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jsqsenuc.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163yczdxvkp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jvobavbd.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163shsmkdgq.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163stzlvkmk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ouibkxjh.html

$obj?->method()
来源：http://www.aibaodan.cn/163dyxuuiai.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zsmgtnmb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wbndcuwq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163buimxvxz.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ukjipojm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163csezzokg.html

"值: {$a}"
来源：http://www.xuanzx.com/163lkcscocv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mkaxkvgg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163aaamuciv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wljpsfyy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mopzyazk.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hzjujkkb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163fwhufkzi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163djgydehm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fzizbelu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hpfbsjfa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163xcbzsorq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163tcmabhdy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163dhachmeg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163slxivhrr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163vtaqihwe.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xefagxzd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vjbkneaz.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163bbqkzhpf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ummiffjz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rheyqtvx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163flkxxcxc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163byqqkmqo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163adalyrvk.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163rwzdiiws.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163tefpsrds.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163nlziaila.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vpxmwjci.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dfqwtefk.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wydwcfhk.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rfgpfwmm.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mpfmexnz.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163qmmbqtly.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163adysrcfw.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163aovtmtoj.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163aajlerxb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lrjyufvi.html

composer require psr/container
来源：http://www.sxryk.cn/163uwvvxfuq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rlikcutj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163unjyaznk.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163scgygmip.html

composer require twig/twig
来源：http://www.sxryk.cn/163ymhfwtgy.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163akjmagsy.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163clqngmld.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fpqeuswq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163onnlzlph.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163laerqfme.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163aohncjod.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163einyazrf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163kdiidvad.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163zadexppd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163wxxqdqcc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163oubbkpez.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163hpssokbb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163hvytriep.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mzwgdglj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ansghiwz.html

a?.b?.c
来源：http://www.xuanzx.com/163iejhaowx.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163nwpcxfgn.html

a ?? b
来源：http://www.aibaodan.cn/163womcliqk.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163abmwoenz.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fgmdxsae.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lmfzogpp.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163jkmqrgus.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kczcdidb.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gnybnxpy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163flflhelq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ijlbtlgv.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163zqqkxjwg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163esfaulcm.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163rbkcjmxt.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163pmzkiggf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ythoqxmc.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ymymobvr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ujzdvglq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163jsnpwoik.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tfrgjyyr.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wfbaqhxa.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163cfjcybff.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cnirlgbw.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163yyvpwilx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nfigbsya.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ckayfvxa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rtjpzlnp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163hoxybyed.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163pzaomuve.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mpmxgwcr.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163kkxeprcn.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163twgvnhke.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zfvdbqwu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163mdxosxju.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qhrjzqly.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ofevagkh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zfheezra.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163lkliyfsr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nfvfdksb.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163qoeqpfif.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ydlqtcwd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xbyrtlhe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163gpwqmrwx.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163rgppmjcx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163igchwpby.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163toohnoyh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ptpucooz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163evcbvfxc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mguxuquy.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kanfwtfh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163imqwvmer.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163nzfgjcjn.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fknbghin.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hlqfpgnx.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163pujgrpee.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163bwouryjc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrmikluv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163uzithknw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jjlvvorw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163afxyrujd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gptiogmh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jguztysd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pinnynmk.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fbswfjws.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pebdgzfs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163wahshugn.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uictobye.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163fcdykahf.html

npx vite build
来源：http://www.sxryk.cn/163fuvcpceo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163gzozhuer.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vfworxzc.html

================================================================================
来源：http://www.xuanzx.com/163uqccpdwf.html

统计汇总
来源：http://www.aibaodan.cn/163djmxiwme.html

================================================================================
来源：http://www.sxryk.cn/163wswhwpqk.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163knewjsky.html

Python ......... 252
来源：http://www.xuanzx.com/163hccwqhlm.html

PHP ............ 252
来源：http://www.sxryk.cn/163vivmeqsj.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vrmztnwx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163nhieclmb.html

Java ........... 212
来源：http://www.aibaodan.cn/163tssxvofu.html

Go ............. 212
来源：http://www.aibaodan.cn/163ntogjfam.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ocbrnlgz.html

C# ............. 212
来源：http://www.sxryk.cn/163hvlxvyrk.html

C .............. 30
来源：http://www.xuanzx.com/163ittxrovk.html

C++ ............ 30
来源：http://www.sxryk.cn/163uzzczauc.html

SQL ............ 90
来源：http://www.sxryk.cn/163iorfnsoc.html

Bash ........... 80
来源：http://www.sxryk.cn/163bdjcduij.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163odslkhhf.html

Swift .......... 15
来源：http://www.xuanzx.com/163buuuxacv.html

Lua ............ 10
来源：http://www.sxryk.cn/163esczgfhn.html

Perl ........... 10
来源：http://www.sxryk.cn/163mcqvlyqf.html

Scala .......... 10
来源：http://www.sxryk.cn/163qeodvkda.html

------------------------------------
来源：http://www.aibaodan.cn/163ymrcrqti.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163necfrtjj.html

按章节统计：
来源：http://www.sxryk.cn/163bpyvgpdy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qbtxiikt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kfqnovzq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nwmgrsbu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tkvbgrrq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ptanwzad.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cxcslfmq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163owozpqrt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163odfrzfsw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kkyweaik.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163iwbjhtuq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tyejneqx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ypiqwldl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ibtrlvgz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qgmivimt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mwpzavvt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163enrbgvhe.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163eatmyugr.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163kfoxznen.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zlxncrzy.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mfeakvxk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163pyzhlaeu.html

------------------------------------
来源：http://www.sxryk.cn/163hglgsvob.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163iolokirx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nteigzyc.html

使用提醒
来源：http://www.aibaodan.cn/163miqplycc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sdpuzscd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dbxentug.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163nacdwpyn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ksskujhy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163pehffbnz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163mgbfdgaj.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hhoceivo.html

================================================================================
来源：http://www.xuanzx.com/163bqwtbzfh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163jguyhyas.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dxnatxwx.html

================================================================================
来源：http://www.xuanzx.com/163msxjxbjp.html

【收录内容】
来源：http://www.aibaodan.cn/163uggmwoxk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163lpmsnuii.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ovgtumad.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163nqmvvlam.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163mrssqvkr.html

【使用说明】
来源：http://www.sxryk.cn/163ftonhhkb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163lmfkxlfp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163tibsrvol.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163fflbfbxt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163uifwxkvv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gjluiryp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163rvxgreua.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ygfrylzh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163yzhphdqo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163gaxsgnzb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xrxgvbfj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163xxnamlue.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163csvxolgn.html

【文件统计】
来源：http://www.xuanzx.com/163iymhsuvc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hwuvejzx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nigdqbez.html

目  录
来源：http://www.sxryk.cn/163vflfiipf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tqofwvmk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yhmvtbol.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nkltskri.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163heeyiycj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ykcczeny.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163onyvqyri.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qsuexbdj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dpiuxoit.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163stbjmwuw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kgeiofgu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163skfurzcz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lqxxfwzz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qeqfgoqw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163imlhbmnd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wrivlnlo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163uokkqydo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xshvewmi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ewrjvrpv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163pomxexfp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163lzfkbilt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ankxcjvv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vkpmwclw.html

================================================================================
来源：http://www.xuanzx.com/163wnazdhpv.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163psbmwzqr.html

================================================================================
来源：http://www.xuanzx.com/163ddrjkyym.html

[A01] Hello World
来源：http://www.xuanzx.com/163bqtqpjaa.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mywwwqea.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ysraanlx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163tegeukjf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hlxqugpr.html


<!-- 参考信息 -->