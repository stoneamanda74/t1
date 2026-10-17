外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ideomvmr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xdggeokd.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tlncqrio.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zrtjzjjf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mnxkhrex.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ftgxlqxn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nvitudgh.html

list(zip(*m))
来源：http://www.sxryk.cn/163ghmlwilp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hvlnohul.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tbhtfbkd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163oqumphtz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jldqmnya.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mqnkvkyk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163afpfullh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qxjuhdjk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163nlilqrzg.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163anqvictw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ghjznhaa.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163jdtjfbre.html

UserId = int
来源：http://www.xuanzx.com/163gffvrzxv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163eitunktg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163cvygltuu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163dsxzsjtt.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vvovguwx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163lzbdldmp.html

python -m pytest -q
来源：http://www.sxryk.cn/163hhksrigk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163swfymslm.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fdimowbs.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ntuwepuc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rzltwrwl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lwyygduv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sfhfdzxs.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ayjlcacv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163uqjhlgfy.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163sxxrsqok.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vsqwfbdl.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163gcmuuiam.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pzatrmrz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163lltujabz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ebmnewwj.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xiekjpri.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ngjxstuk.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163tsolgqdm.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gmfwfekm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163opnuwmen.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tuyydhbm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163shrhelou.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zbcmcjnu.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163xjhseivp.html

namespace App\Http;
来源：http://www.xuanzx.com/163krtoyxwf.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vtcitwth.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163niwniuxd.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lbqurbhb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rfmgepzs.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mypjotxt.html

?string $name = null
来源：http://www.sxryk.cn/163kjfybqot.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lkrnuvjn.html

int|string $id
来源：http://www.xuanzx.com/163ekjwzzpm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vjtrgcjb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163eebqqufy.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ppbclquv.html

public readonly string $name
来源：http://www.aibaodan.cn/163fauwhtdv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kidvgktn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nehxwisq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hvvtrica.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163rutapqgk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163vnajqgad.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163uajfiikx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163zlmeiwoh.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kgwcsjto.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163bavjdvxs.html

$obj?->method()
来源：http://www.xuanzx.com/163egogmfql.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163lkvfpmrp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hvnzfqhx.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gqvoyjgw.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bvjwoybe.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163kcqggaoj.html

"值: {$a}"
来源：http://www.sxryk.cn/163vthicnot.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163rkjuttfr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rvnlihny.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163koitnmla.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fsrlixws.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163vkabydzo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pqmivquh.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163tpykxqrm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163syhmhedp.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163oaddzmrk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gasyaweq.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163zqvadkhk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wfzfzcxr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163phiaevnl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ajoddsbw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163iqarmivk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163apaqafvv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163qslxyvrt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163onochxll.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163posqhvvv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zoohffiq.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vxapwhvs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163fwcvotsj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ehwtveln.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163cvgyypym.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163xnupmeoq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163uuryxkld.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163bacgmcfl.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163yhggpaot.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ayndhrda.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163upqainyw.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ohmtrbrc.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163regnodrp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163yxyeeygj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163oxpndzep.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163hwceosjp.html

composer require psr/container
来源：http://www.xuanzx.com/163rvmnhfyv.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zndjvacn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163hvibiwqd.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ignjnitl.html

composer require twig/twig
来源：http://www.xuanzx.com/163jrlefpif.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163raewpfqk.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163pvyziasc.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ywpaeokw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dxmbnzdi.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163uijtbnfp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ejmuxmyq.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163vyewgxqx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163npfgkgsu.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163llcxaefl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163gycqlfby.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ptvmxfjh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163jlsfpzjl.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163kksnlevo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163nrplbfab.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rejejoal.html

a?.b?.c
来源：http://www.aibaodan.cn/163dxmyhpqi.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lesublcc.html

a ?? b
来源：http://www.xuanzx.com/163dhwtgzfo.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ljtcrhxj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163aykllixg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wckvytxi.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fdttfnov.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163malmunjx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163qnofanmg.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jvlnprhx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163slqigdox.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163efbmwwkp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qekoblqo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ykrqwrpu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gumnzyvk.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163gdtjxujq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163agtnveir.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163camwswpz.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zwpfoonu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163eaodsiud.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163cxfajxgs.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163glniiywg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kuyahnml.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wlnignix.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163laigubji.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lmrzoxbs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nudxsnhh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163pqrjuzeo.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qfutdlfi.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ydyxkdbg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rfuihbom.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163jrthjfvm.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163qjvxhwsp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163uprcthii.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163zaqtvzkb.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ruhivcwv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wiwqhnxt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tlaofrqp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163muzlpldl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yutgofpe.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163mopckzhc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lbtlqatq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ybcjqgac.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ymhxwfvi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163eyqhuymn.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163jkkkhjvq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163osbnmoav.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163euzyxffn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163atgpunkw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163pdafixyc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bcrbwjke.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163gywpkqie.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163sboyvaiy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163mwvttwdi.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ihslzizy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163kmemlubl.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pllxvrio.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rewimdjr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163meosngag.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kguxgioo.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163xrqfjyhd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nvfqjtvp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cxjopcxh.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wgstbbvb.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163unzphkip.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163qsqyamgo.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163tddjifgl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163gwqdmcuk.html

npx vite build
来源：http://www.sxryk.cn/163oplofvss.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163gmivfflh.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ddjuflkc.html

================================================================================
来源：http://www.aibaodan.cn/163nzrshrsk.html

统计汇总
来源：http://www.xuanzx.com/163palaysqa.html

================================================================================
来源：http://www.xuanzx.com/163pdglnbzl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163gfkuxjbb.html

Python ......... 252
来源：http://www.aibaodan.cn/163fwyffqot.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pyefgbyh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163jabiajzx.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wunflgfx.html

Java ........... 212
来源：http://www.aibaodan.cn/163cqpncwly.html

Go ............. 212
来源：http://www.sxryk.cn/163hkawgueu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163jlfqkiaw.html

C# ............. 212
来源：http://www.xuanzx.com/163cksycwtu.html

C .............. 30
来源：http://www.sxryk.cn/163xhzeptgl.html

C++ ............ 30
来源：http://www.sxryk.cn/163gswcrogg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vsssreye.html

Bash ........... 80
来源：http://www.sxryk.cn/163xpzpbgfy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qeackema.html

Swift .......... 15
来源：http://www.xuanzx.com/163cguazyjl.html

Lua ............ 10
来源：http://www.xuanzx.com/163hewdhaan.html

Perl ........... 10
来源：http://www.sxryk.cn/163ribhewfk.html

Scala .......... 10
来源：http://www.xuanzx.com/163mgovysih.html

------------------------------------
来源：http://www.xuanzx.com/163fkifjccr.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ejlawwcw.html

按章节统计：
来源：http://www.aibaodan.cn/163mtzyshhk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aiikyzkj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bvpsyokd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163uiziafip.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nebumxfh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cuzgvfll.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mpjtpsdr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163deskoodl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jrnuijtt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qizrvwtw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fzbucsuk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gjqggxxu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nftbdxjt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lorircss.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163hzcpjnnk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163kkutkydb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ofljtuwk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163alutqxuu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ygzpiyiq.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kqlaxrae.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163dnrxyzqo.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163wstvehuq.html

------------------------------------
来源：http://www.sxryk.cn/163jthzkleq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wueptzsa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gblcmncv.html

使用提醒
来源：http://www.sxryk.cn/163gagcmjfr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ssstxcpp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wrmjhjzp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163sbihimxq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163wuogvrgi.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163bxxukmmc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gyajchgr.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163mmamaner.html

================================================================================
来源：http://www.aibaodan.cn/163rcqevbcr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163pxmkyhgz.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163twcfmthf.html

================================================================================
来源：http://www.sxryk.cn/163eqnxzijs.html

【收录内容】
来源：http://www.sxryk.cn/163aqbexrxi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163pzpvruyc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vjmcqijf.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vdzjuulg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163flgtfepc.html

【使用说明】
来源：http://www.sxryk.cn/163vrhfdjip.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163udwxsuok.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163agcuhuyd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163xirubbnu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163nnisdgaq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ccmflttn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163zlgzneqs.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163erhxmboi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163pykkcjpn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ifmafzzj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163issgfonn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163qnihkhud.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163abqeknub.html

【文件统计】
来源：http://www.xuanzx.com/163zshhzdte.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163obwchybl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hjisrurk.html

目  录
来源：http://www.sxryk.cn/163oheubjtl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mpbzwkes.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hgqhpalz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tzszdtgt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163avildhma.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wkjjoqyk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163arudalsv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ybmvnlqh.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nabdqsfg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gixwhiro.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dqwaipug.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qsupmxwu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pctheaav.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xcmkucqt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uauusoeq.html


<!-- 参考信息 -->