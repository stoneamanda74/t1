外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rzyutdvk.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ehgdloyl.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xslbhzyh.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lgsudyqy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jvzgnqkp.html

================================================================================
来源：http://www.xuanzx.com/163hsouflxk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pujlbnef.html

================================================================================
来源：http://www.xuanzx.com/163ukpzfeov.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fxuyuplk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163wgqtamky.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pivxlvba.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ptdhhlln.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yfxznwud.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163iiyzmgmg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xikdsylf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163gkzgupaf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163juvkmknb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xcebeffv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cpkeufve.html

{**a, **b}
来源：http://www.xuanzx.com/163wjglknwx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163afkjnbiu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wzscboov.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ukjjawic.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163xybufqsn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163uxhmybmy.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163vrkwukhj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ehusktxw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ayhoiyok.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ibfjhqah.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163swacfkcx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163bizxgwgl.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163unppnhbo.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bchdiahd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163przdkggw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163otiqgooc.html

defaultdict(list)
来源：http://www.sxryk.cn/163uxmydpie.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163omwzfahn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163wocftfqc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bunuwewy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ojptogaa.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ngxsause.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163drwzryxs.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163aibctopx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163eripupif.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163rcshzjro.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gwgzyhes.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rxbxdvlu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163rljueyvw.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163bjffgntx.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ystzaudt.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hxymjkhj.html

list(zip(*m))
来源：http://www.xuanzx.com/163towuysia.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jhshdypp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zcasokee.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xxtjounk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163xgezslkr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163kvbmeqbb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qdvbzumi.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163jjossyza.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bmkhakqq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wpszpbfa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vzulmjhn.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tavukqzj.html

UserId = int
来源：http://www.xuanzx.com/163mafpkufz.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kaziepkn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163krdiljiu.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gznyqbdf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163bzckfdjn.html

[U31] Py：单测
来源：http://www.sxryk.cn/163gkoekkaa.html

python -m pytest -q
来源：http://www.xuanzx.com/163ujtwhnlj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mfnwkhvg.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kulywdvh.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163qddnrnuk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163uwnhimub.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163prktrjrg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163yjelyyll.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163gbggrilc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bxyfddsm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163mmbbdrsn.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yryzbqwr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163qgsoizao.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ghhuypne.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163iwmdipuh.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ukwchlgv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163pbichrxx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163gzbyyvho.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163flhmlfas.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163scptsecs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nxofagma.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jgmelwjy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ddgqroni.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163socxfrro.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hqcshdjp.html

namespace App\Http;
来源：http://www.sxryk.cn/163dloiiurw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163xcrkfrxs.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163yuezaavz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ddrlrjil.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ymszfvax.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163evcginbh.html

?string $name = null
来源：http://www.xuanzx.com/163lucsgmsg.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163eakoylsd.html

int|string $id
来源：http://www.xuanzx.com/163nbbnroyq.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163stioqjjq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163lxsziqym.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jyervrua.html

public readonly string $name
来源：http://www.aibaodan.cn/163vjqfhkyc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tnzurjka.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wfcdvrdj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163nezfwwfw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163wtruteag.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163azcjehqh.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163yltunieh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hxjruwjv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163athflfcg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cfdxcaxe.html

$obj?->method()
来源：http://www.aibaodan.cn/163fznphgtw.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sjvuhide.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163esdcaiqp.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163pwsejgyn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163clslycxj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ogpbxhkm.html

"值: {$a}"
来源：http://www.sxryk.cn/163utdeotdy.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yskvbdjt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163fgneyhsa.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163fryvicjt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163yaqwrdru.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163zgnwqshq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163efvhwucr.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lmquxdub.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lvwcqesv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163rppjeolm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163tcjhqbxy.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163efsuisdk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163capsyfzp.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kkwyjybv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pjendbzx.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lxwpuctq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163yaawbkdv.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kirildqg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ihvqvpuq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163trgowxld.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vdxdmvef.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dsudxtwg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jkqtejrz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tfqjvytp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163jkvrkmke.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163pmlqrzzq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qxsiyjsk.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163rkoosmng.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163sppynfdv.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163heoqqmws.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xnglwide.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ziuaxlqd.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163vyezdscg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163dwwnjbrv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163snvlsegx.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163esboiuzh.html

composer require psr/container
来源：http://www.aibaodan.cn/163ctyxxuke.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hkiuestt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kickydlj.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qszlamws.html

composer require twig/twig
来源：http://www.sxryk.cn/163pgdmbiga.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163wiqjtgkx.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163zhgzohqi.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163klrhbjoh.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163vvlgyhgl.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163hnevgjfm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nelkmllh.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163pxomdjge.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zcuktbxh.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xhpvcaqs.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163uiwdyubq.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163iodyajfl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163swvmvuin.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jsrnwlts.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tfyeidpn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nxqtsnfd.html

a?.b?.c
来源：http://www.sxryk.cn/163kbzekcet.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163mlhcwjkg.html

a ?? b
来源：http://www.aibaodan.cn/163uqblmxcd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ktiqbbeq.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ruitdutf.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mxdikhff.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163gprbvuqb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163qzqecjnl.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163smbxvcyi.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163csesdfxy.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nydkmprm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163oiotxesn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163aowfqzky.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163jchomrgs.html

structuredClone(obj)
来源：http://www.sxryk.cn/163hssaaaqj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163oimuenua.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163vwoufxvf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ggkenbng.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163jblmtiim.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163rybmfafr.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ugoyryvb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dhdjttio.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yoctpttx.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163fswhxvjq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163spwxuwjz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aixdnfhl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163kinmlhiy.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163dctvvpss.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nfcbctnk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ousccguv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163wszldinw.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rscchalo.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vhzgoauc.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wnflyzmf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ipkelljv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163kuoxcbef.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jzeueveg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163eklqkdvf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qotrlvdy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qijjneek.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ggzttiqx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zqzpsfgt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163pbpytifr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163eqyumvdp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163plbcpojq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dncnfksh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163fwxziwuy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163qqvgbjfr.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hxaddsvo.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xuhnrcrw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bnngdkhs.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rpiinvpe.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163aczwwyev.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mlgeeyem.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163hhvdwgfl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163rsaaqbgt.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163onhxccrk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163yrbldvqv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qhdnaamp.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ddndwvac.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cmdfztfa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163wmjdders.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qgpcctcw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rtzytbck.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163eocwqdkf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163urzsdtvr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163auvdhpte.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163skyrgsjm.html

npx vite build
来源：http://www.xuanzx.com/163nlclwgst.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jvrpjqzn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qycohgrc.html

================================================================================
来源：http://www.aibaodan.cn/163qktyljmj.html

统计汇总
来源：http://www.xuanzx.com/163rgxqvjyq.html

================================================================================
来源：http://www.aibaodan.cn/163bavfmwiw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163osfgoplv.html

Python ......... 252
来源：http://www.xuanzx.com/163scosqchq.html

PHP ............ 252
来源：http://www.sxryk.cn/163hytdtltc.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163bujsjrya.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163myrwvgyq.html

Java ........... 212
来源：http://www.aibaodan.cn/163fowlpoqj.html

Go ............. 212
来源：http://www.aibaodan.cn/163tfvxzmyx.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163vsioucgk.html

C# ............. 212
来源：http://www.sxryk.cn/163qveuvaeh.html

C .............. 30
来源：http://www.xuanzx.com/163jbvolonw.html

C++ ............ 30
来源：http://www.sxryk.cn/163mklsvmin.html

SQL ............ 90
来源：http://www.xuanzx.com/163dmyvlprw.html

Bash ........... 80
来源：http://www.xuanzx.com/163mdiymlzc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163tqtswtea.html

Swift .......... 15
来源：http://www.aibaodan.cn/163hwtaituj.html

Lua ............ 10
来源：http://www.xuanzx.com/163wernpgbl.html

Perl ........... 10
来源：http://www.xuanzx.com/163qksdcgqt.html

Scala .......... 10
来源：http://www.sxryk.cn/163xpdnrbsu.html

------------------------------------
来源：http://www.aibaodan.cn/163ttuydypg.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163cclhlxxy.html

按章节统计：
来源：http://www.sxryk.cn/163tauvywnx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mljqzyde.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163onwxkdmu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qjsluaey.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ocouaysm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tsuxpmxi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bkwzebtp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xtzoixyn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eubmxydb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tjinbbxv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163rlozzimo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iirciyxp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qlsxhzkz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xnsgxlgk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163znsbmtgh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ogwcfarq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zvehnccf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163asczeqmi.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fyeiuzkw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163twuoycve.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163yszplmgd.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gumiqoha.html

------------------------------------
来源：http://www.xuanzx.com/163ofkcjmjz.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163snbdewqk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bqortwwl.html

使用提醒
来源：http://www.sxryk.cn/163aatdonsn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lujfbbcp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ghrryctp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163flvdfbfq.html


<!-- 参考信息 -->