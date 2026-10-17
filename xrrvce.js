外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jchncckp.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zodnuieu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ezytvncx.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hpvtqvth.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163pwymoexp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tfwdhbox.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ljqgfrts.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ifdzgvwh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ulltphfr.html

================================================================================
来源：http://www.xuanzx.com/163ztqbqkqd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ridlogxq.html

================================================================================
来源：http://www.sxryk.cn/163ejzvrvwh.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dodbsvrj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ijtxtled.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xuehtbni.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163plaeacry.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nvgxblze.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ojojftsh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wyvlijcr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nvgkittw.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163sbvxwils.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nvvejhvi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163syaghfju.html

{**a, **b}
来源：http://www.aibaodan.cn/163igkklirh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163phtbzupf.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qxthzwlr.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163yvrermcy.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163dhoaeceo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163izshmaml.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163aqxgzfwz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ghotibuu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sidtjjcu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ublqyfqj.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163mvzpaqzo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163swmdbecx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dovuicut.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qncgeejo.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163fazzmyig.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ohjtnysx.html

defaultdict(list)
来源：http://www.xuanzx.com/163ikzxeifc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163elehcwid.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jwydycoj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vzuafbvx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163lxfbqlmj.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163lnzjuoux.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mtdivqts.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fzhvqsdw.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wqprnmaj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nltkbkgl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163leektnbh.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163nzjuxshg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rqtbjhyb.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ryuiurtc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163sfibsmpi.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163acumvjau.html

list(zip(*m))
来源：http://www.sxryk.cn/163qgnwwdll.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lbenezez.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163amsbsrhq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163dnhnluxo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163mtsefcfy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jiyjlrjp.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xoxssptx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163uuqfujlx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163efpfsvii.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ywzhwixu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163wpxpttce.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qprpjtbn.html

UserId = int
来源：http://www.aibaodan.cn/163fvyjsycr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163tmqdvbqh.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163mcygcuve.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hkrlkgjb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163epcftbgk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163etmxzkax.html

python -m pytest -q
来源：http://www.sxryk.cn/163sdeuylrg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163svrcjehr.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163efuycskr.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163fmlwvwvj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rxvcipil.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qwpmgtex.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163leosqvqe.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gcutusyw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163itoijvgq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gyltbout.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ukfzentp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163blipezwa.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163zipkfhxo.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163igmofahw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163suszurpu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dgxoeocb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163paaatyee.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hhldravq.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jfvaeoiw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gckwgxfd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163rgxoltrr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ziukmmvi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163mqfuluwk.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163vflzgtxo.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zkxltfri.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163folzwcly.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vryfdpsk.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ggfizxtg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qgqpzpri.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163fbjnhppz.html

?string $name = null
来源：http://www.xuanzx.com/163pnhfdfgr.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163nyupeviz.html

int|string $id
来源：http://www.xuanzx.com/163emlsbwbd.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mzqfxlkd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163wbudaufx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bnpkfnwx.html

public readonly string $name
来源：http://www.aibaodan.cn/163ewejozyv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163izyxwlfl.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163peflujho.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163gqambvsy.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163vbnqmbmj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163umtbvbak.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163nkwtsbkc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163tcqcwjjy.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hiqsnpey.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163wufgekuh.html

$obj?->method()
来源：http://www.sxryk.cn/163huxfqymx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163tprqcbfu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dbbjpfwa.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wffujxyh.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163okqvrafm.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ebxmciac.html

"值: {$a}"
来源：http://www.xuanzx.com/163axolttbb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163eoqjmrup.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163zkloefft.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163mfxnefdp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mupgbmxg.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163iyckhbrb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163fpjevowy.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ibaxwkvi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ldpcqysv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hihjvslp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163okoenglp.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mjuvrvix.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163bfgnkebu.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xjaqndwm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163norvoicq.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163cwvdjnrs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xlgkfhbt.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vftqdnyj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163excoaitr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163cqnpiigc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xqfteruc.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163iodtbvjx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163fuzapous.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lnypyzzk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pfrgeump.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ftynhaac.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163motonvqg.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yqfouydl.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bueptjxp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163enlnbdzq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vxmdmuwz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163rwzvdgqv.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163nmhlefjp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bhdbplsq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163bbzmbhtn.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tizfvmeg.html

composer require psr/container
来源：http://www.aibaodan.cn/163gqibnlzr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163oflboiut.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163egjmcrre.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163qjqyjmcr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163uhijihgm.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ujobkvpk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mxcajfci.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163hujaoaqn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163poabbgra.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qaychtgm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163tbcgqxqb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mzxwloaq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163jvybfhxf.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163zzbngrxl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163gmpsbrsz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163drtkchnr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tlbsyptk.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163finocuzk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163gxvyuuwt.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bstwheuk.html

a?.b?.c
来源：http://www.sxryk.cn/163anubfuwq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163keqmkahk.html

a ?? b
来源：http://www.aibaodan.cn/163tejmsvib.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xtwnzjgp.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163thekqgyw.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nbxlktkv.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163kntazpuo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163dofpgrjg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163guefbexu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cumzyajn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xmaajrby.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cnobvwdm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ijfcfrdy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163evccgknt.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nukwvpmf.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163cogmccze.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163eqkmabwu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cvokfirh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163drgnmlqd.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163cljhpjko.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gdwtmmqy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cgvxlxlu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sjoiidci.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163okupunkr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oaytzziw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163xqbvnlug.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163vrtrbaqz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yxevkyqe.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gyisnbty.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mqbrbmrg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163muaaczde.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163oeudrwpi.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163xnlwdnbi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163gzkikguj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fhkpjmru.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tqnvmeug.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ytefehus.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vsqgptms.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xtrcjahf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zhjuqdcm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163obulewjv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163imkgkunm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hdymdrtu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163dzghlhyh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163oruymmsy.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163laykkjkt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dlggxnln.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163vnqdvsbc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gjcazqrd.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163voxlavwa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163uflmpmbl.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lnxxrivb.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163eurocjit.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wwksdgjx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qugpujnr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163vypqrrka.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xhvnwsgf.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163idbarljn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163uagoeuwc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163yfjnxrwt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163swewtzzv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163klozkaah.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tdycttow.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163uiaxaugb.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163fcyvqvjo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nergernl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163yzxhsmer.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tokcksay.html

npx vite build
来源：http://www.aibaodan.cn/163ynnlyvgz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ylvgbslj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163oxaojenj.html

================================================================================
来源：http://www.sxryk.cn/163dlkxonpy.html

统计汇总
来源：http://www.aibaodan.cn/163doykvjvs.html

================================================================================
来源：http://www.xuanzx.com/163ttedcgwu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ebowudwo.html

Python ......... 252
来源：http://www.sxryk.cn/163hoxaevku.html

PHP ............ 252
来源：http://www.xuanzx.com/163ymlhgfhb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163jvbtrvia.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pqxrvylq.html

Java ........... 212
来源：http://www.xuanzx.com/163uqnwjnun.html

Go ............. 212
来源：http://www.xuanzx.com/163aoahomdg.html

Ruby ........... 212
来源：http://www.sxryk.cn/163nbvhorqz.html

C# ............. 212
来源：http://www.xuanzx.com/163lwcmsbps.html

C .............. 30
来源：http://www.xuanzx.com/163oeqypuhy.html

C++ ............ 30
来源：http://www.xuanzx.com/163phpjhctx.html

SQL ............ 90
来源：http://www.xuanzx.com/163njgdjuly.html

Bash ........... 80
来源：http://www.xuanzx.com/163syhggkqu.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hgacutlt.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gmdiwgec.html

Lua ............ 10
来源：http://www.sxryk.cn/163cmvauqgf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163giqthtmv.html

Scala .......... 10
来源：http://www.xuanzx.com/163kocbquqk.html

------------------------------------
来源：http://www.xuanzx.com/163vwyvwqvt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163wxuimrzk.html

按章节统计：
来源：http://www.xuanzx.com/163yvckfsok.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mekitiau.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zowernij.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163stiowcmj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jkixyjed.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163skmdfdzf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qqwizytd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bncnpthq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zkexvaqg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jkueitdt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qkatjpqf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wugswgjg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rwunpthe.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tqybmhnx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fzhcsnbx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163iyjxsagw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zludjbqt.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163xfefrwma.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zajsjdfz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ckkbeesw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163dfxtcjwc.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ldsuqmtn.html

------------------------------------
来源：http://www.xuanzx.com/163ekfiamzl.html

合计                                  2106 条
来源：http://www.sxryk.cn/163kbdysquo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bmohoxay.html


<!-- 参考信息 -->