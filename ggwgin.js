外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163unwknzzs.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rdwyflom.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rmfavygp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xsjuvmwy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163xfcsrsej.html

================================================================================
来源：http://www.sxryk.cn/163zedntxvm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ftxfyfas.html

================================================================================
来源：http://www.xuanzx.com/163sqhqjmdk.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163eptjgkkv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163awfgqfcg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yxfbvtsu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gqdpectz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163srlciwxb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yjzzbytx.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163diyglavr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mvchpgao.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163coekvbqk.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jtwotolm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163sywkuiaa.html

{**a, **b}
来源：http://www.sxryk.cn/163mmjplnve.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163eavnmlii.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163gnwlbpex.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uxwdakts.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nbhfnrcf.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xzdgxywe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cjoevwxy.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hzfewqkk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dmowqgzt.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163jlyuvmoc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hzukgblt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163kckmwkuo.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rqmmyzwd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163eugnvtzl.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163aqljhawb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qhhffwrw.html

defaultdict(list)
来源：http://www.sxryk.cn/163ausixyra.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163yrwuruii.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163kxnhvcpc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163sggomjqb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163bsiznjjo.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dgbchjcz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kwfbzosp.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yokdqadj.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ivcmviow.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163wybtlcgb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163jeadrwms.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yyhoqbfo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163onbsyory.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lwocxopn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jcyxwxvt.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wyuwdcrn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kflieohs.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163nabptbvw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163oineqhri.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163irxepmpd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ldvhimlp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wkmlyxyo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pqvgobay.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163lqbkcril.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jowegvrz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kocqqiyr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163vennyubr.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jbpqpgua.html

UserId = int
来源：http://www.xuanzx.com/163basyxhnu.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163snfgzubp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nnsagvde.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ykplunrc.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hnycszji.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163thgvwhqx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163dgazmaws.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163nsinerjs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163leltmaqc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163yqxmxxnp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163fbegkrtc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163erkibfdk.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lqbwbwvt.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163kfakrhkj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nbuvxvgi.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163uaeriejy.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163mqowxwdo.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ygogydxe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tyfrxino.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fltwfroq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163vdtwogqm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163xpqmnhbg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dsoyhslj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lujyhofo.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tmyxrgif.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nurbhwol.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wxjtoysi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163dsoltxtv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rnsfkqgz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163itwsyeqi.html

namespace App\Http;
来源：http://www.xuanzx.com/163nbtiiggq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zabwruki.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163egrjqvbj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tjyzljxu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wvdznxha.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163legegrdh.html

?string $name = null
来源：http://www.sxryk.cn/163wfekhuut.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ogawqpjp.html

int|string $id
来源：http://www.xuanzx.com/163isfudtuq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hwdyuybk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ijfodvpx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163tmdvaevx.html

public readonly string $name
来源：http://www.sxryk.cn/163tegevyqt.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163sznsthbu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vvybevuk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163epdgwsfw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163wchswokf.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jzbdtkwv.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163kudhqbgx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163owpnvsgy.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163rcxbiefx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163vtxnysqz.html

$obj?->method()
来源：http://www.sxryk.cn/163dgaipavy.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ubmdkzqk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uuggtvus.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163bhrueeng.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pkicroyq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163yjqpmdup.html

"值: {$a}"
来源：http://www.sxryk.cn/163zpdbepil.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163xscminss.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ihjjqiqp.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163pygpbfby.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mggxdrvb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163geiecqwg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rkrgasuv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cnrdkyyx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dedmufdm.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ylmjzkpi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163thscrznl.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163oqbpzjpx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ykzpijmt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xyyaecji.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163okuhxfzy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pygexxfc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163rfagaqga.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jcepmnag.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tsfsjoas.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163snmeyjnx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163swbajndz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fmgwhxul.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163yunkrvbm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ovbxklux.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163oqotingl.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rsuqvtio.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fmojmvnd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tsedtucc.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163qdfkftat.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xwydwztf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ddfzlbyf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163uzscnmdo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tmjppxyl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163pnrijgte.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163eiwutnjv.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pphhbfzm.html

composer require psr/container
来源：http://www.sxryk.cn/163seatxwze.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cnrwjvkf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163gjsuyivn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zfpojhra.html

composer require twig/twig
来源：http://www.xuanzx.com/163fvqnhazf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kortpvco.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163odtkcsgv.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163nebwzdgz.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163jvrflxpa.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163evrvivyg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163rsmvzsnj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163seobnjtg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163auhijluo.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hfmsvtof.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163eisumqdx.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ffvmphjv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ppsitdwt.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163erxanjqb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163gtkfjxug.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fwkzegsi.html

a?.b?.c
来源：http://www.aibaodan.cn/163splbibwn.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zxosfqni.html

a ?? b
来源：http://www.xuanzx.com/163tvcfnnzc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163otvpgowe.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163khxjilsc.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163gmppfqrs.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dvpmfenj.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kanfjzwt.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163aqnnfsfq.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nlcewcds.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tljagemp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163omnsyzrp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jdqcezov.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tgpfllsf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bhyhhyuj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163qfqftjgg.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dzdgrglr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163kdwhjvip.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163wypaomcv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163dwlwdfhz.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ctbmukwr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163yimbyfnp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rrzgurqr.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163alfljedm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vllwirfz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163uqaqolxl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163njfnpgde.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163shekzonu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163unlygmkw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ecyswdka.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kcogkcdn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dyszbzwx.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163yvvgwbzw.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163dcmhusux.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ijujwqpb.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163yuxowsrp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163dadnwasl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tsturubb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qsureddo.html

[U105] JS：节流
来源：http://www.xuanzx.com/163gfabcjli.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xpudnevt.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163azxjjbrb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xhdztleu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ihhddrdh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jswudzfh.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163sqmnwgiq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163afrggpfz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163unctdobw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qpkgalyz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163cjdxjxec.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163vpafszrb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fdsyhpif.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163shrfasgb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163wpasnqgo.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163rjrqanzu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qcdpcsqc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vsioljbw.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163xrvmwzym.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163havnyiyw.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nhhcqajc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tbatfyqz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uayywpga.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163bzdudbib.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lklqvhzg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qowuzzjt.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163fjcpovth.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hbabkcuw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dmcfzwcg.html

npx vite build
来源：http://www.aibaodan.cn/163nyubfvqp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163oajlbiiy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jeaertcd.html

================================================================================
来源：http://www.sxryk.cn/163qjgqtmds.html

统计汇总
来源：http://www.aibaodan.cn/163nnsipqfd.html

================================================================================
来源：http://www.xuanzx.com/163delmpvjb.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lbsyydfu.html

Python ......... 252
来源：http://www.xuanzx.com/163jfhoqrvb.html

PHP ............ 252
来源：http://www.xuanzx.com/163njxiauoc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163inhrwchq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ojiawzai.html

Java ........... 212
来源：http://www.sxryk.cn/163qseaurta.html

Go ............. 212
来源：http://www.sxryk.cn/163mlwbodtl.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nvubbzih.html

C# ............. 212
来源：http://www.xuanzx.com/163weaajbir.html

C .............. 30
来源：http://www.aibaodan.cn/163czsjvpfn.html

C++ ............ 30
来源：http://www.xuanzx.com/163xedvfdms.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bxohhamq.html

Bash ........... 80
来源：http://www.sxryk.cn/163mmvglttj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163xmbnfcbz.html

Swift .......... 15
来源：http://www.xuanzx.com/163vjirjtix.html

Lua ............ 10
来源：http://www.xuanzx.com/163opqxckan.html

Perl ........... 10
来源：http://www.xuanzx.com/163tgcwgabo.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wrlruiep.html

------------------------------------
来源：http://www.sxryk.cn/163gjyeaqjt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tcpvjgas.html

按章节统计：
来源：http://www.sxryk.cn/163tvmlkqjp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kfhoshqg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163arqxqxsb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yoyyydkv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ckfihvno.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163npbysaxp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wmranfoh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dqhyubwi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zsomsict.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tyulaggf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nzlmjfak.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sqydjbrz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dfemqtvv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ugvyityw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yddlbbll.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163pepvwszw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hnlnzxpt.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163aikequbm.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163amfbzffi.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163vhaosroa.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163fvxhwdpz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163feosdgkv.html

------------------------------------
来源：http://www.xuanzx.com/163qxaqiioz.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163hfipvwoj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ghowviit.html

使用提醒
来源：http://www.xuanzx.com/163rukxpckm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dbcwwzyo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163krzosidm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kiariymm.html


<!-- 参考信息 -->