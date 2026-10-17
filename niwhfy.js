外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gbsmiugk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xzuamxqv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163iwfskbhb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ufddhfwi.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mvpqmxkd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fqmfzxud.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ermiephh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pvrkngro.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gzbjpklb.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fbempeiw.html

println("Hello")
来源：http://www.aibaodan.cn/163zpbhdtwb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ptxjhght.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fgyryrtn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ixxmqfwd.html

s"值: $b"
来源：http://www.sxryk.cn/163zapwyjul.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tijyavno.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yllqjana.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163avymzowu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163crpfrpaq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ohqhhmxl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jtrvaauf.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kbojtunu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163sntnkiby.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xzhxzkid.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wokdydja.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163dfkjurle.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163annqqmco.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163govlqsfw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163yurvgogg.html

================================================================================
来源：http://www.aibaodan.cn/163gefogvhm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jbkdxaas.html

================================================================================
来源：http://www.aibaodan.cn/163avdgqsjr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yejemlws.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nokpdekd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zabcjlwa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cedwvypo.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rxgceyqh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163jhssagbx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qizvjjyk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jizetpqr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sfegbces.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xkixyooq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163sloncypq.html

{**a, **b}
来源：http://www.aibaodan.cn/163crhhqbux.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163upddsgwr.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rqpbfegp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163zsaispnn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163tvdpvevc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qrdktiuj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vadryjow.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qewjjtar.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tezkpmxl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163bjeiaqaq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163egutrtwq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ibghcnvc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pnudiajh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163zduyqpxh.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ztvmzohh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mfrfbopq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163trhmvkcu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xcqmtqka.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163pozfdwpa.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ngrlqbbh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nzwowidz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xlrcshpi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xlvowmfl.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pywgexeo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bclhmfdx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nxclapkf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ayivcjxc.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163azldyxue.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nplpchuj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163brouvers.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qvhzrgmi.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163tejaqzfc.html

list(zip(*m))
来源：http://www.xuanzx.com/163eflglhbj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163aqxtzfmz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163gzonnsyi.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mmwlybpg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ssjevxnb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vqvklgup.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163eytkmnul.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qgwohzkp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163oiflxyev.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wvkhzkou.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hfnteccy.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wpunoilq.html

UserId = int
来源：http://www.aibaodan.cn/163mxytqimi.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ayiwkqci.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163mfgswqwm.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rcrbaibl.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163aygejsww.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163vumvonri.html

python -m pytest -q
来源：http://www.xuanzx.com/163qgcmtnrd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163vrzkhyal.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163qvwpdvex.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163nclcvhkj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bmwbkjzd.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ndpbroof.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mmerexap.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mcdkwcoz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163snhjibxi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163bvsrkfzm.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163pxpejjew.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163nfrokagl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163agjhvuac.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163axrjlkjn.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163filomofy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vijtveum.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163obrgxgrl.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163oprmkhzo.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hyurwmxz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lhqzechc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163quhlpxru.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xqgzbgrk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163nienbezf.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163eviktnay.html

namespace App\Http;
来源：http://www.xuanzx.com/163byfldmkv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163uyfrdldl.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163elbmcldk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vasrkhrh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vhyizwcc.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163albxxans.html

?string $name = null
来源：http://www.aibaodan.cn/163hkokkowj.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163brrnzpow.html

int|string $id
来源：http://www.xuanzx.com/163bulutjmx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163shyqcruo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cmbmreuc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hqhmnqgl.html

public readonly string $name
来源：http://www.sxryk.cn/163brtgnshz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163uhgsjlwa.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163kfdpgzuw.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163doartvco.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163njqzihex.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fxukmcee.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zxcpjwew.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zdgauceo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fmloghfd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xryguvff.html

$obj?->method()
来源：http://www.xuanzx.com/163kmhxjobe.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cmnbjpjx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ywhjwrpt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mfvwnecj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wyxsirba.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ahhoxcrh.html

"值: {$a}"
来源：http://www.sxryk.cn/163bibbubnf.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163omvjsduf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163gqoetbhe.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163sqitynqf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nhsvjbce.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ovhijyic.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163mgcnejno.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wxunzrru.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zjzdsayu.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163eocglreq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163buahsfoq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163vcxdceni.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163izjomrcw.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163vzocgbzl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mtdrmlfy.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163japedhgx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163izcwmgtc.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hkhsqgtz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qgkqzsra.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163lrzipdtx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wjozojgn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163sjoqyrsj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vpgwtzqc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163lxjguhgt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163egdogkdh.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163tmylaqim.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163onznycqj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163xbwzbnhu.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163lrplfjgf.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163foyxmznc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163yyrocnmm.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163brkvdrjx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163omkardmx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163voqfzxjn.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163tylbtvbq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kfwigmbx.html

composer require psr/container
来源：http://www.aibaodan.cn/163brdxeyvi.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ofwmfram.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163uuntqotv.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163grvzjhrv.html

composer require twig/twig
来源：http://www.xuanzx.com/163hctsvocs.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163nclsxjrh.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163idjyvgjk.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163aazuweaw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163sdrulcob.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163slfkwytm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mtykkmbn.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qklvbuox.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ahupgzot.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163cggpzvwb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bgwetscq.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163awdrwlcz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163cxvmxhxv.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163isuuhmmh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163rjpqwzuj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163whibslsu.html

a?.b?.c
来源：http://www.sxryk.cn/163zvvstkrs.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qqyvwhbo.html

a ?? b
来源：http://www.aibaodan.cn/163arzfoqyb.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dtcxmwee.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fgaoylez.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163zywakpev.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163yqjbkcat.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163gbjrgehp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163yqgcuabs.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163cvilpphi.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hkuhppmf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kogmegjf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163teykulna.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jmpsftbx.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lpnahtap.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163gxrhslnp.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rbqdrwcw.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mjaxmugw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lhrznxif.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pybzkswt.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163cpuguzqk.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ftexrgzm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fnekrplg.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163hqhjsuyg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fdajfgxk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163zmbqhgkm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163fkqvtsqf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163tjdbrcnj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163abibthip.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163cuwytrot.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163psqnnlvi.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163orsemamj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vxibszmp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jlmhygeq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ayipzqwi.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163yjslifgl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163btymbnym.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163itdldmpd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163whrgkqbn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163liqgugsh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163oyskhmcd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163pcnhbxhm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qyuvmbfg.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mysvqvwd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ietwjfrn.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xubykwrn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163shetnvrl.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ldxgteds.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ytuptsnl.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163fzaaghsz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163gpcjxndm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163cxfdzspi.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163acyhllsr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163nzmzvkuw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wkgwgftk.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163vcsqabqc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lcuddcum.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cimfcbkb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ozbxbmym.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tfdqnhry.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wkdtdsva.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163nadlvaxs.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163czippche.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jalkofgm.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nukrsspe.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163mmezixhf.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163sialbtth.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dmywlwkp.html

npx vite build
来源：http://www.aibaodan.cn/163zjwrianp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163apysbpct.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163lmmamjvw.html

================================================================================
来源：http://www.aibaodan.cn/163promhxim.html

统计汇总
来源：http://www.xuanzx.com/163ywaqpazp.html

================================================================================
来源：http://www.aibaodan.cn/163opuhiybb.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fwlfpbut.html

Python ......... 252
来源：http://www.sxryk.cn/163absvkhwe.html

PHP ............ 252
来源：http://www.sxryk.cn/163gkaqwfbv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gbawhvsj.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163appkdfew.html

Java ........... 212
来源：http://www.xuanzx.com/163fhspfctc.html

Go ............. 212
来源：http://www.xuanzx.com/163khfjsuyi.html

Ruby ........... 212
来源：http://www.xuanzx.com/163oqfebbjo.html

C# ............. 212
来源：http://www.sxryk.cn/163cmhghane.html

C .............. 30
来源：http://www.xuanzx.com/163gyhxypss.html

C++ ............ 30
来源：http://www.sxryk.cn/163yekszope.html

SQL ............ 90
来源：http://www.aibaodan.cn/163chiniytq.html

Bash ........... 80
来源：http://www.xuanzx.com/163pfcgeyax.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163wsrmzwei.html

Swift .......... 15
来源：http://www.xuanzx.com/163erdnhuja.html

Lua ............ 10
来源：http://www.aibaodan.cn/163eeuclmmw.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vmyzcbgd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163joporcpl.html

------------------------------------
来源：http://www.xuanzx.com/163ntgmgxlo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163uysaqxio.html

按章节统计：
来源：http://www.xuanzx.com/163ibholqna.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gtawrykm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ataarhdz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pujkxzrd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163blsvaewy.html


<!-- 参考信息 -->