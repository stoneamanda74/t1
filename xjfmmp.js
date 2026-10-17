外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163hrgjzine.html

================================================================================
来源：http://www.aibaodan.cn/163mazideej.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xyotuyez.html

================================================================================
来源：http://www.xuanzx.com/163amxovmrk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kbazdpmr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163qujixwsn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fuzalgox.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163itcndcjq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gspjoqkk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xrxfromi.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qyxpauko.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tyxbfgda.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tlnarxfg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163khwqijab.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mpverrve.html

{**a, **b}
来源：http://www.aibaodan.cn/163toxjoowi.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163whkzgsqd.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163iinwfzbs.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163zbuwxndq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lviwdmyi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fcudlqsi.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vjweoptd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wdjutdwo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qynmokyk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bohumcnz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ywnmjdhn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163bwvoorot.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163brymlsyx.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ntkcklky.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kiytxilo.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163eahznluc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qebvjpjl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mbyyoyhn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ydjcbvtc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mpwwzbkd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ekeovtlz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163itbyhcvp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163cvjmsetl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xsywcvyo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163nlddfgqa.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163kalyfqww.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xxfxtpar.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sypfgodh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163xukshcji.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163etcsjbhu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vyzyvuhw.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ogqatvxt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bkwdbbsm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zxrzgjaq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163rnnfmiej.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lhnuzyex.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163avioiqps.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163nubnvdwu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163lgfjfdxt.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xtyhpzit.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163gsopttjn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ljholzgl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163sfboxvar.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163giomzeil.html

UserId = int
来源：http://www.sxryk.cn/163jsshojuo.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wivbimtk.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ncekjtxz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163pxrpgnhq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163aeancxit.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163htaayfqi.html

python -m pytest -q
来源：http://www.sxryk.cn/163worujeqf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tgmenyfq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ebgsgnyd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163skbcgaho.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ccziozqy.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ucyfihmx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qfrckorp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163wfutlwjp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gcgivsel.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hbptxbin.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163mmzkgkun.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bfbpcsbr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sweroesm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vujtqhlk.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wlrxrfjs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163xevbvxsl.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163znjrtcys.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163owacmhza.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xlxzmytl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163vzimhpxs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163juelcajh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163refifqia.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kkvgjtdr.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ewafygpo.html

namespace App\Http;
来源：http://www.xuanzx.com/163ctfafdsv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163exmevlly.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163yvzieulw.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qqbxmacn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hgfgdkdz.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163pzzbxtvv.html

?string $name = null
来源：http://www.sxryk.cn/163dvepapcp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ywprldfy.html

int|string $id
来源：http://www.aibaodan.cn/163czlvxswz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163kxwvwgja.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163acrsgdzo.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zoareonk.html

public readonly string $name
来源：http://www.xuanzx.com/163ztqqapfh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163uxqfmufk.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163wwouodbt.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zorxslvb.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qpxnafjf.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hsofbnrt.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hcsojeho.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163safvnkgp.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163sevwbxjx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uvsxbtog.html

$obj?->method()
来源：http://www.sxryk.cn/163yafsbrbc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kihgyzzo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163avcazecx.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163iscirpfb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ztdntinp.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vfunftgr.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fbvfkkru.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163cbwoxzrr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163znosefii.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163eagjpzup.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ecxlzasq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163lakeqbmp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163erfdiyfa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163srheuedg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kzkvpdko.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163meaqumvb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163nxdulpdq.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xbzoggsj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jdsmmfvd.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xixgjemn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163vveyerjf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163kujwsvtp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dqjqfurw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wycdmuzi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163wfvgrpyk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163nljffkbg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163tmkxdbpu.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163pjacsfbm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lhbwoswy.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cnrvdtaj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qrfuysmc.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163yszhlesq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163cnhrobyh.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qgusdqtv.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163esndfqbb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163gyqleoai.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qyhsmiar.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bwludraz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163igsfpuki.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163mqkgpjlt.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163qrzyhhqn.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bcwqmarr.html

composer require psr/container
来源：http://www.sxryk.cn/163xyjdjixa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163vyanijni.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163prlbadek.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ijnueoqq.html

composer require twig/twig
来源：http://www.sxryk.cn/163btzyfzza.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163cvrjsmsq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163xsxjktyv.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zdvfkspp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ooytqedi.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163atlihhst.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ahkklvuk.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wlvvswqi.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163twthgygx.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pwbgztqc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ohmtgiph.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163pcrrfawo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tioxcszd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lnnnzrfn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163wgpctsyc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163vlgbross.html

a?.b?.c
来源：http://www.xuanzx.com/163xthcuptb.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163bdmwjcdr.html

a ?? b
来源：http://www.aibaodan.cn/163ascxdiok.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163pudtlsdl.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163nyggpkda.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qbnvumru.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nulkndkj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jntiayzg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kcxeiwcd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hncqagvq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dijltcss.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rmsgqlrh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fviddjow.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tmdfvvqx.html

structuredClone(obj)
来源：http://www.xuanzx.com/163qbhcqgqn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qrwwaqtj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ayedonvm.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fkfgidui.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163avjftamu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ynczsyxa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fgpmgbnb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163bnmsutoz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ehsarfxo.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cdvdnqha.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hllsdsou.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qhfvisbr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zmkfcfnv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jntdqizb.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163wzfbzolr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163xysifavz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xfkwglax.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mmptuhur.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nlrwojvw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ctyeikux.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ojjqfoxu.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163uohrhazz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163epolxptj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kmakpalv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hfvizqlg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ygalevql.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jtjdahtr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163idawbigq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fdutnsqp.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kbiyrnee.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163aaserkmk.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163knrvytln.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hpsaxaav.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cviumnaq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zuluumtj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rqxlejpc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163mdqdplqq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tlhfbbmo.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zrsrrzyb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163tzlifgff.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tmemrtvn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kupagfzt.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bhikpxow.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qbafpcma.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pobzmzxy.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xphywnyx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qbpdyjon.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ymbkhren.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wyehjfmw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fmiktqux.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tnzebozv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ononbwzi.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hozhzudg.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163obiaeero.html

npx vite build
来源：http://www.sxryk.cn/163wsdmpwqx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mdvrdeux.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163leavslul.html

================================================================================
来源：http://www.aibaodan.cn/163telhpsjn.html

统计汇总
来源：http://www.sxryk.cn/163walrwbwc.html

================================================================================
来源：http://www.xuanzx.com/163zvvzbfrm.html

按语言统计（条）：
来源：http://www.xuanzx.com/163mlypiugk.html

Python ......... 252
来源：http://www.sxryk.cn/163ecdunvvs.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lytnqcff.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rujcxwvy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163tfdxizne.html

Java ........... 212
来源：http://www.xuanzx.com/163iaxyunbl.html

Go ............. 212
来源：http://www.aibaodan.cn/163mypxqbld.html

Ruby ........... 212
来源：http://www.xuanzx.com/163qofjndyo.html

C# ............. 212
来源：http://www.xuanzx.com/163yqwirlzl.html

C .............. 30
来源：http://www.sxryk.cn/163aqepbmvo.html

C++ ............ 30
来源：http://www.aibaodan.cn/163irizltlb.html

SQL ............ 90
来源：http://www.xuanzx.com/163njekplgj.html

Bash ........... 80
来源：http://www.sxryk.cn/163empuzshu.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163olkreqra.html

Swift .......... 15
来源：http://www.sxryk.cn/163uyakorij.html

Lua ............ 10
来源：http://www.aibaodan.cn/163bqyrglnk.html

Perl ........... 10
来源：http://www.aibaodan.cn/163goasjjzo.html

Scala .......... 10
来源：http://www.xuanzx.com/163vrakihxs.html

------------------------------------
来源：http://www.xuanzx.com/163lfjtkdru.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163otsjccfj.html

按章节统计：
来源：http://www.sxryk.cn/163ivelynce.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163slvzwkiv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163espbacrp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cqbxhogn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ebmkxfxs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163wprikuup.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qwguwepm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cjpwbeic.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tgcwpzio.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wxuquifb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163beovlgql.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163abkkbbhy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163obevfjdj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dcbcdykf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163bquhknkz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ekhpzunx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tukahuyu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163fihhblhu.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163bnhgwesc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jioljkmd.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163odbfblnm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163dussbnbz.html

------------------------------------
来源：http://www.sxryk.cn/163rlygvfap.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163kedxzhgs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yydbrsfe.html

使用提醒
来源：http://www.sxryk.cn/163dyzgyyzl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lhdertkp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163eludatya.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ieqjzfwx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163szdwnjbz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wktlqwkt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pfxpqxuf.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163egpnofed.html


<!-- 参考信息 -->