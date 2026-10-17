外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163gibflwzb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nbdrkgmw.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xqpgywpy.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ciztmttk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163olicxuhq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vmjuggrt.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qusjeoks.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kisleivr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163yfaidwpb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kyzmkmxc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zgkzoctb.html

list(zip(*m))
来源：http://www.sxryk.cn/163slzgjdjm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163hmtcxwvp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163axgjhphf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163twcbizxm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bfezedyp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hzlapogp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sqvnwcby.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jjlyrips.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163uevxvltx.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fuakjgtb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163gzdkclvf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cmyharmt.html

UserId = int
来源：http://www.sxryk.cn/163ibhfwasq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wyvpntau.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163uaxiaruj.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163rxqlezmv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qassihvv.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163sqpoihkr.html

python -m pytest -q
来源：http://www.aibaodan.cn/163zlwiwmjv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163raaynjoz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xldbvimc.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163acojprgg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rdicglnp.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163govnkfkx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gooimwhr.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ymdzcuhq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bxtgzmig.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163saibzjjj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163olbbbkdn.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ppvyxdpv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163adhkjeae.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ycranktg.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nwzntzla.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163pshhkhcm.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ovhbtkmw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wgcbkbvl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pqwypxww.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lonzatqk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hpvhvxvw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jgseeslp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163bcmxvbko.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163jwpduzuk.html

namespace App\Http;
来源：http://www.xuanzx.com/163ggyxtnwc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lpjoffpy.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163cmepfmhd.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wjcpyavc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zivtfilj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163elzfbduz.html

?string $name = null
来源：http://www.aibaodan.cn/163dvqtwuxq.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163lcpokdxq.html

int|string $id
来源：http://www.sxryk.cn/163yqpnbhnu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163biexdncq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ttnafqyh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163rfcfvniz.html

public readonly string $name
来源：http://www.aibaodan.cn/163tifwnqcd.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163oosypqjr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163fgebqcgu.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wvtmystw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wnukmeun.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163dgxthbaz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jkesddyf.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163zowwozqv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163mdmivdlh.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163oqtczdib.html

$obj?->method()
来源：http://www.xuanzx.com/163hxgsyjbm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fqnaqsvz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uruvecjt.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163fnqejfqi.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vqxvwkfi.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163uqqgnchb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ssdhnbld.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163kvtxdukk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163pfvsrfdo.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zfoahfdn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163apkhummb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wjwabhne.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kdrjyydy.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vetugrel.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dmovoumw.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ishflhfl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163xlmqtblw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163njcllitr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ttxltcxl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163znnxofqt.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163xhzztffy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163bfoggikq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163iimshggd.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163emijldww.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qqacndzd.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163hoamolvx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hnoyifxe.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163lzcebuzq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163aqmslafi.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zwcvhgtl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ddoupbwz.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jhtblmem.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163qrrluxiu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fpxfkpwp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163bknelwss.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xaouuexq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rnkpykbl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163znunzeer.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163pvpexqaj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163wpmhzmir.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163axgehyxs.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163kvtmpiau.html

composer require psr/container
来源：http://www.xuanzx.com/163akkiylgz.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mqdkpabz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kovvjmbs.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qkpgvhow.html

composer require twig/twig
来源：http://www.xuanzx.com/163cdebgmxd.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qwbljdlr.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163znjmequc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163irnwegdz.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163bqrblpaz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163iaalcvmv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mitgvgfl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jyhjruyi.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163yjtaaamk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ldlxuvyy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163lkohqtxw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163pwgfcrwy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jwdmcmjm.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fezxmzyv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163trqkhppp.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bkzdeyfy.html

a?.b?.c
来源：http://www.xuanzx.com/163ylyrjpcq.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163bcxecugw.html

a ?? b
来源：http://www.xuanzx.com/163ngkltdkf.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163nwbyicol.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jdebnmen.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163whwmnwmi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163yewfbclr.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ippnyhjr.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163qzuqllkv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163lisgomhi.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163volxlaqm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vutgftiv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163cujqehmm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163jsqqrgtp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jeflgmot.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zosmeqow.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163xgtiytpw.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163trvbqous.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hvygdkqi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163fnugepnc.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163sixwzxsp.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mihsidha.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mimvzzcp.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163obuwbide.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163izjjsyck.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163gwzcxkpl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163dvaodcim.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163toveutrl.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163hzbxzzxp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163dthhmafd.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rrxaqevg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163iiaeytot.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mbkewnkn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163voflgfur.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163nsrsbrmc.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163pdfglikc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163onpwedax.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fxdzrxjj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zoqtuwtl.html

[U105] JS：节流
来源：http://www.sxryk.cn/163abpdjpdh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vpunmumx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163bwsevmco.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vrnzhezp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ljzvsjvz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vpjbrgfp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zdxfpwyw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163pgjqctog.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163qddemzbz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dlqtekfj.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163azrnwitd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163suoczcdk.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fsatuzkq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xxilljtn.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rnpbhteq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163pptfvdsg.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wqcfixwv.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qhrtdmbb.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163pdvxbacr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fihflgca.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163pcfthspa.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wfouzkks.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163upyjamnw.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163xirqroer.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ppalxjln.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163zzlrrmwj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163voqorrng.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163obvzfohu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163txotfrst.html

npx vite build
来源：http://www.xuanzx.com/163gqzrmskv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163yprzifzm.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jddffzcu.html

================================================================================
来源：http://www.sxryk.cn/163fiuqqkun.html

统计汇总
来源：http://www.xuanzx.com/163bnkoceho.html

================================================================================
来源：http://www.sxryk.cn/163xzrtdskw.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nliuhskh.html

Python ......... 252
来源：http://www.aibaodan.cn/163esrpexpe.html

PHP ............ 252
来源：http://www.sxryk.cn/163dyofvyby.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kskggwyz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163lsguvjic.html

Java ........... 212
来源：http://www.xuanzx.com/163saxmzsko.html

Go ............. 212
来源：http://www.aibaodan.cn/163dujcqsqh.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xcokoktx.html

C# ............. 212
来源：http://www.sxryk.cn/163wpyxlwra.html

C .............. 30
来源：http://www.sxryk.cn/163svudkoxj.html

C++ ............ 30
来源：http://www.sxryk.cn/163mzzcbent.html

SQL ............ 90
来源：http://www.aibaodan.cn/163xxhxseum.html

Bash ........... 80
来源：http://www.xuanzx.com/163mcniatdv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163sjayonli.html

Swift .......... 15
来源：http://www.xuanzx.com/163jkenbltr.html

Lua ............ 10
来源：http://www.aibaodan.cn/163jlmlccxk.html

Perl ........... 10
来源：http://www.sxryk.cn/163fwmbzayv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wtqtdeob.html

------------------------------------
来源：http://www.sxryk.cn/163hrnujbzj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ijudzqga.html

按章节统计：
来源：http://www.aibaodan.cn/163wrfdnoen.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xttqhhug.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bdnfqpkk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xtpzobwb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ilhdbqxj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ycsxhvyn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163llybpunv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ekdhyvjp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163uegxhjnm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163glpjxxqc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kfjexqxs.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ppbpuvns.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uipzlpfq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qwarafkv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pfalqsqp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ajwgaotb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163woooxzbr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163imowkkwo.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ltmasqys.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163iccuwhkp.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163seqizvhh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qehlyqdv.html

------------------------------------
来源：http://www.xuanzx.com/163techqklv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163stupatqr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163norobcrf.html

使用提醒
来源：http://www.xuanzx.com/163bchynumw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ulddeptk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ooicigmz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ozmeifcl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163aundguhm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hvbrgpwd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zyucqdsb.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yynwrocm.html

================================================================================
来源：http://www.xuanzx.com/163kwqtxpfo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163gopqqjix.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163wckwhtwq.html

================================================================================
来源：http://www.xuanzx.com/163xhxsgcbh.html

【收录内容】
来源：http://www.sxryk.cn/163uvtujkui.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163znaetnra.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163gtbeukdk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163fhevoiks.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163qdnqmzlw.html

【使用说明】
来源：http://www.aibaodan.cn/163syxwmmhh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163lmbxdjkm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163agzdjknw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163nbvevypf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163trwnwzcx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163cympfbxd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mdddpwsx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163rzlorpsv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163jwhubkep.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163brsvsxcm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163axylbvga.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163kbptmrui.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ujqdzwrc.html

【文件统计】
来源：http://www.aibaodan.cn/163qwlvrpih.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163cceavrgc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163exxnjpgo.html

目  录
来源：http://www.xuanzx.com/163wxtayvny.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163apaheppq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qkxgrjfu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fvbzbfwa.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zenrhgur.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ngxsyvds.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163eotyzdvn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mntulugv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zfvvfnjd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ghxcepcc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tweihcmk.html


<!-- 参考信息 -->