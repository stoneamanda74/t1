外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jjuanzty.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163eqrquqna.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jauihfzl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hlckzvpg.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163lkpbolzn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bjeitisa.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163aawhjgfe.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uvuzlpnr.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163sxdzojla.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ydsrqxxj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163aobyyleb.html

list(zip(*m))
来源：http://www.xuanzx.com/163mksqjrys.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mzvhnlbm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163amuadxeh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163jmynflvb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163cpdophdy.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ugzovqlo.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163aivqkafn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ewbudcpe.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ebzrrdow.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163udpawemx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bnlqlvsl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163kmhorgfb.html

UserId = int
来源：http://www.sxryk.cn/163orpfhzxl.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163szpoadof.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163socifusn.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xokfqoee.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ghakeowy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163cnjbqfpu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lrpuzxyi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rhqdquxx.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kxopyoaq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163peotmkte.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ruqanlgn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163maadkczq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163mgbxdqos.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qamqgbpz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nxedhzbx.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163sbpvpabo.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163hmujoari.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163moqkehhq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163mqsshnte.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163flnvatgu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tkxkhxyx.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ikgvxffw.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163nuivtdok.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uzcxrvaq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fxdqwkea.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tssjhorr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163isouirgu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xfrjfecc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nwedzptl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qkmoyyzt.html

namespace App\Http;
来源：http://www.sxryk.cn/163xesdcffi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nhkovmtu.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lydybsqu.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ckhqknws.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bdhkmzwh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qxiuyewg.html

?string $name = null
来源：http://www.aibaodan.cn/163axlpenpm.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ybxznxca.html

int|string $id
来源：http://www.sxryk.cn/163rlahljlh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qkrndqtf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kcemusym.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163dnjtulug.html

public readonly string $name
来源：http://www.aibaodan.cn/163mzebbbsb.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ijftvlyi.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163jotqhsls.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163yrkiqeyi.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nfqyihud.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163roacwpfd.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163etltbkww.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163jikytykg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163qlhipxjy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vvhttbmm.html

$obj?->method()
来源：http://www.aibaodan.cn/163lutojjtj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163jyphayev.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163xthrgast.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163zujgbgtv.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163blgigkmh.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163txsgrgcl.html

"值: {$a}"
来源：http://www.xuanzx.com/163opnpzvuu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163xxxuifbc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ppgjicbx.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163tqowqdsc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rphovutg.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xfavmrcq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163bzkiszxc.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ldicvwhh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163orvylnyn.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rtgwbtco.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163lxgknvge.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gwklygdx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cxunqdto.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rucywrkf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163viqqgprm.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163krmsmdnr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163sitfrqvx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163fnqolrsx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jfewscgd.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lhdyytpb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gyonxpjo.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qtiuwocj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qqlbqoey.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163aeagnvdl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163plptfore.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163kqldtgmn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ulwqanby.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163vvjehugy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163szmwffpx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163swnlptuz.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ohmhgini.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163musvogdk.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163tykzekxo.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iusvphki.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163sjfdrbyb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163iwzozhoz.html

composer require psr/container
来源：http://www.xuanzx.com/163pwvkvtpv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163fgheophd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163cpdepwwf.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163xlldxgxn.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ffxsgggr.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gbqiwbas.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163inpuguuo.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163finbsase.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163kwgeqthz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bmavthve.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163slyhpdol.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ckdtjtwg.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163smwzhnvz.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163yrqvxhjv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163bkdlzxvt.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mubgiflx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163zvwdmcnd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163nyqcvcfr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163kihyebgj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163zxsnphhu.html

a?.b?.c
来源：http://www.xuanzx.com/163muwhvbck.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tnyczpne.html

a ?? b
来源：http://www.aibaodan.cn/163kzktkfkg.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nwozbasv.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cvzkexkd.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163soztfffi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zojcmkdm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hhhgwvzd.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163gkjromzh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bozhzfne.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uplhdqva.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163vrltvtwg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163eyojoxif.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xkymrfov.html

structuredClone(obj)
来源：http://www.sxryk.cn/163agtcblsz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163kfjwsvzq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163gyjzrgbk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163asmtsmme.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163sfxzddyv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163pjsgrwxl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163vomfbnbs.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163wlngjgee.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jjrnjbqh.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tewognwc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163daaguwbh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163udcrewxf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163fsubyeog.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163sfzoxmcf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163nlqhbpdp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163cxdclxju.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fwldzghc.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xdkklvva.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163fqotxual.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163akystkfs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rfedqgyq.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bfsgzfyd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163shkhgdyn.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163emnlphuz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lrpsdcir.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ilomrvis.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wciyrfea.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163rpemzhrp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fgmvudfz.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nbzthzvt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zhuxbfhm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xbingjre.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163sssbrtzl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rvngbdav.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qolxtnuk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163siyodoeu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163owotzlwy.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jsdzoziu.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ankqivzj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163amqonawv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cjmwhuvo.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hjmrulpl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zuogtqol.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163imqejoon.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jduvdxak.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163uhxzcjcq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gvijmsno.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163yaqokwge.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ehtvgvkn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163shedwhou.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mcuxmslh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fdwiunkt.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ktlxxfpw.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163znojhppm.html

npx vite build
来源：http://www.sxryk.cn/163plzmvkya.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163txovxini.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163osufxmeu.html

================================================================================
来源：http://www.sxryk.cn/163kiamzcpr.html

统计汇总
来源：http://www.xuanzx.com/163zniswxrg.html

================================================================================
来源：http://www.aibaodan.cn/163ptmuybtc.html

按语言统计（条）：
来源：http://www.sxryk.cn/163acazytvl.html

Python ......... 252
来源：http://www.aibaodan.cn/163nhrbsgee.html

PHP ............ 252
来源：http://www.xuanzx.com/163pdgdffmu.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163dkwlhqtv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vnbahvzz.html

Java ........... 212
来源：http://www.aibaodan.cn/163miidviqu.html

Go ............. 212
来源：http://www.sxryk.cn/163gaulnjhp.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zgojnylc.html

C# ............. 212
来源：http://www.sxryk.cn/163dwsacili.html

C .............. 30
来源：http://www.xuanzx.com/163emgxrpzm.html

C++ ............ 30
来源：http://www.xuanzx.com/163qtvgegwl.html

SQL ............ 90
来源：http://www.xuanzx.com/163bidbfqug.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ucuuozad.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gqmysfvr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mfnotyyk.html

Lua ............ 10
来源：http://www.sxryk.cn/163uwithhlq.html

Perl ........... 10
来源：http://www.xuanzx.com/163ueezpinv.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pvwgapfm.html

------------------------------------
来源：http://www.aibaodan.cn/163ceqxfsgm.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fyavllfg.html

按章节统计：
来源：http://www.sxryk.cn/163isyqhqpj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rljrfjwj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163usjpowyh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kkpyciih.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lfhhmyhs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163odfyevqz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163crwucpuf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kgaqmyyn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pqwermzj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kmhgvdwk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nmxhwvly.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qlkpjsvr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gtfmnxsa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163douxqspp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fbrtmlup.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ceujybvr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jzsyyqsx.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163vjefqtim.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ukprvosd.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jyngyfsr.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163vmqbunga.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lmojmnqx.html

------------------------------------
来源：http://www.xuanzx.com/163fobixzpg.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ykzpofit.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zuladleu.html

使用提醒
来源：http://www.sxryk.cn/163ishrdisi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qrkygwao.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163mjvfyfdh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163wbibghhd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163bendddio.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ouaozjdc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163kurhzisx.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rieloeqh.html

================================================================================
来源：http://www.xuanzx.com/163dykbwivr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163sgswilqw.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ecfauubv.html

================================================================================
来源：http://www.aibaodan.cn/163hxcdxfge.html

【收录内容】
来源：http://www.sxryk.cn/163wbnzkllu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163mjrwqiub.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163cvivvtpv.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163dyrrhzno.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163troiqupt.html

【使用说明】
来源：http://www.sxryk.cn/163pxhkubur.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163zouhshtf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163jnxgjfvm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163uubdrvkn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163mnfwsytd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qttegtyu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ikhhodkn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163khkkrvyc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vvgcehub.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163axxmlkhn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ztbvkxyq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163viwnzafu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163edwsmyxo.html

【文件统计】
来源：http://www.aibaodan.cn/163bhbnlksb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163dtnmrgfd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163afpamavh.html

目  录
来源：http://www.sxryk.cn/163ulqhebxa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wpursagx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bqoqaxyj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zfhxfeoz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nvubhwqb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tnoeolek.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163zljjuzbj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wwxjjgcb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163avhiagxh.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ipbeoavf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vsqwtufz.html


<!-- 参考信息 -->