外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ykfunomw.html

================================================================================
来源：http://www.sxryk.cn/163lvvzksaf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kdgttgnt.html

================================================================================
来源：http://www.sxryk.cn/163fjyepqke.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hhgdnkec.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tynvagkt.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163oukjutmt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bhnuepht.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163svyesldb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xrnnnxlm.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wcsqoemc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163phkwomvp.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163dgxbmpkz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jkoujkzb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163wbkocusq.html

{**a, **b}
来源：http://www.sxryk.cn/163ryscwwns.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ezvhycdj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163edfkwwgu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vthdhlrd.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163citoibjo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163hontbztw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vtbarxvg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163wxwqefln.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163cnphjqoh.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163aenghldp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163anmjqdmb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ogfvryee.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uknyrqxz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gfeinifs.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xvekshjd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163fprtwjvy.html

defaultdict(list)
来源：http://www.sxryk.cn/163rydlgebh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163blfuxybj.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zuiabiua.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163nofelvyy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mkaihyee.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ewqpxkgk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ifyzpfjb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163junfdvxb.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163szwhxxqv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ebgscniw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wviwmtot.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163xixoitqa.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ioyuxfnf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163njcfxpsy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163czbzkifc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ufyasquo.html

list(zip(*m))
来源：http://www.xuanzx.com/163knxxtbug.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lwwejlal.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fglomonk.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163bxwfjjja.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163onysffrq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dzjraxsq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zpfqmkqj.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gmphtntl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163xmactnux.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wojzcpfk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wcwohtkb.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ztdenyrx.html

UserId = int
来源：http://www.xuanzx.com/163gyrprbmt.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nefowwra.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tfrewomd.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xqcagjui.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ezpbaiyt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163mjubkzzc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nenzcfic.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mxhvnbux.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163scqnnjeg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ikaeevau.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mgvkmvss.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ndrttkuf.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163djpxwhwh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163xhhfaitb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163yryvfgpz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163kaewtudl.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fvafcllp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ebvckgav.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tjsdfbpp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163odwsrwic.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mrvyeqho.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mzekmcgn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163wezydhvc.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163cwfgwpvl.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fgkskulq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163pmyonwxx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163abyrlasy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ectqcrsa.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163edegmkzj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163posijwfp.html

namespace App\Http;
来源：http://www.xuanzx.com/163mcdwvdwu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163yihhvkog.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rhxpeutg.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163sslwtlsf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tbfusxqy.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rqzpthtx.html

?string $name = null
来源：http://www.sxryk.cn/163kjbacshq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163gnmoaygk.html

int|string $id
来源：http://www.sxryk.cn/163betjirij.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nluvsjkg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163iyzvlxuu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rdtxyjjo.html

public readonly string $name
来源：http://www.sxryk.cn/163rizbwics.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bqddnmtb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163igyutors.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ozzckmwx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163godtijpt.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163sdwjnuge.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zqcgqttu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163brzlycfc.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163sehqeeii.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rpmexsvj.html

$obj?->method()
来源：http://www.xuanzx.com/163dsyzmziw.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vmwytnnz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fywtppni.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lrhsvtox.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rwbsttav.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163icdesctn.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rdkrirnh.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163lekfzufv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163zwpckyiz.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ctplewnj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kpqthgnd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163cvpjpdid.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163qvxulkqk.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xurbiqpq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lzkicslg.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163sxkgfasv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qefwexeo.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163xoewfzyq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163xxonsaea.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jgthcxwh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rvdbhvgp.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163pubjyrvl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163fgvziuqn.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tooldmfg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nnsfnudb.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vxvfaalw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vufvxdxu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163effheauk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163lntjkzrk.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163qcackuan.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163rbutbdno.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qbjqrcst.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xjeqyujr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163swlhaksa.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bputfwbh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rhirosub.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ncsthdui.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163vbjdzsnn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ziqoqxzq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163gnrqdpmo.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163bunzfuwy.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rfkbyazv.html

composer require psr/container
来源：http://www.aibaodan.cn/163jhfwydlz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163egdpopzc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163eptaqotu.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163pulhyele.html

composer require twig/twig
来源：http://www.sxryk.cn/163agqliuub.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163andcvthd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163xhtksdbh.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fxzhwnku.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ninwoflj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rsatwnep.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163gailllgf.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163csdkygrg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xoimspze.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fhkksebp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163jhgkemxz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163dprlyxtn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163gkxygimh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163abbipwkf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zaogsmwq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hrpohacr.html

a?.b?.c
来源：http://www.aibaodan.cn/163vbcgwkmx.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163clgpxxpx.html

a ?? b
来源：http://www.aibaodan.cn/163dhrafeus.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ldkxlmfw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163sjjmnecd.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ouzearyi.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xjlhmucu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bcarvvkh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163sqfjfvum.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163zlghhtzq.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163djuqudro.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lozptycp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bayflcuw.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163drfbbwgi.html

structuredClone(obj)
来源：http://www.sxryk.cn/163yuzffley.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vkgqzuzb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ainpfdkb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163hiobskhy.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163kwkwcjyx.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163dlhajjji.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hzdkfdwq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dbuacpna.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uhauaxiz.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ogprnkyf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hcmqnvzx.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163zbaqdqkl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dzgogafh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nbbhjjcw.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163cgiaioob.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163kgkeodtz.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163moygtwcq.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yjwzstba.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nntgdzwu.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163umnfbipi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163buuaaddm.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163erddirux.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163uzrxnisb.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rcofngbs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fetaurvr.html

[U105] JS：节流
来源：http://www.xuanzx.com/163kesgiajr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163aczrcokn.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pgcpeydl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163chwriidp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163uksfawqw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163yxlrcbsa.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zfcjkbde.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dxtnyhpt.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163stlcrvzk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dvsthjlm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vcrtwwnk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163clrvuzov.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163yhotnxde.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163bkirxkxi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ulqfjsgl.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vswibbbl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qqlwzalj.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dbjdafre.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163lsnlfnxk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pulnovyw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163khnilgat.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163eqxzotqb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vszigmsj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163hqnhgibs.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ukdfxvbv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ebywdozk.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163prqfujqn.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rufvewqv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163abcbcoro.html

npx vite build
来源：http://www.aibaodan.cn/163opbihovc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wnjwexzn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zdiaheqw.html

================================================================================
来源：http://www.xuanzx.com/163mfhmxyux.html

统计汇总
来源：http://www.sxryk.cn/163cqiuhojo.html

================================================================================
来源：http://www.aibaodan.cn/163ilaiavhl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kgmwyedk.html

Python ......... 252
来源：http://www.xuanzx.com/163buwkfctm.html

PHP ............ 252
来源：http://www.xuanzx.com/163rqvbkksi.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ccvlhgkl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pbtaafgl.html

Java ........... 212
来源：http://www.sxryk.cn/163kxgzyjjl.html

Go ............. 212
来源：http://www.aibaodan.cn/163bkpffzur.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fxsversm.html

C# ............. 212
来源：http://www.sxryk.cn/163avegobjb.html

C .............. 30
来源：http://www.xuanzx.com/163dclhytqz.html

C++ ............ 30
来源：http://www.xuanzx.com/163zuurfvao.html

SQL ............ 90
来源：http://www.aibaodan.cn/163prenhibs.html

Bash ........... 80
来源：http://www.sxryk.cn/163somabalt.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163fhnvnksj.html

Swift .......... 15
来源：http://www.sxryk.cn/163idwsvgnx.html

Lua ............ 10
来源：http://www.xuanzx.com/163izjdntls.html

Perl ........... 10
来源：http://www.sxryk.cn/163jqlljuwx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dmmumujn.html

------------------------------------
来源：http://www.xuanzx.com/163cddubnzf.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163nrmfflqm.html

按章节统计：
来源：http://www.xuanzx.com/163uxcsqoqf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lcqtxcuz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oriwsdrs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gbpbdmjv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163grutxxfw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ckbyqqpr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mmjamakm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163buvehtkx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ymvfxdyy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vukvgctj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vugmqfdc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zputfgkq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gmnradnk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yfqqctnk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163irxlmquv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ykrwkrzs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xlgipknb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hpklgymm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163mjibfqpo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163aqzcoors.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163pnrqiqgf.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163uimoknct.html

------------------------------------
来源：http://www.xuanzx.com/163qyueskhj.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xvjanpxz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xgmeukdf.html

使用提醒
来源：http://www.sxryk.cn/163oxndqkyo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xhnoogdu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163plpqjjkf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163hxswuscs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ljzoxbgg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zlcyetqc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rhufpltn.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163uqmfrfyl.html


<!-- 参考信息 -->