外链999!wailian999！

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ynjxdbrg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ptbjaxti.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qqurgzeu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163tiimgaqa.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163owhjnsvw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163zkriotzk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cmsiruok.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163wcisbcby.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kunoigsz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hvwjjaim.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163saoxxjpp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163afszgqft.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ojudidoj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nbimfetr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vaxzucsf.html

print("Hello")
来源：http://www.aibaodan.cn/163zsltdcyn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163tvijykpr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163rzoftyaq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cyzigwvw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163idclpwqf.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pwnlrtiz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jnynnazt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ngxnuwbw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163udjuaaec.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163unpltwzi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163oloabifi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163udbmrczh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163grjnpdyi.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fnptcdmb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rzxgpltt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xjwooxlm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163veyxrili.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oukkhjzm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tbrsxcby.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tofydpra.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xcqjinaj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lwleygjk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wnwdncsw.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163knfkgbvo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163crkdcsgw.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zrlsclra.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rfqjhifg.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163hzqyyorv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vpqqradt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uoohszyo.html

print("Hello")
来源：http://www.xuanzx.com/163mbqnrzri.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hwocqkmn.html

local a = 1
来源：http://www.aibaodan.cn/163joyzvtaz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163phrwyvgf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163iqwnuzre.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lcybngbp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dtuilrxs.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vufoligl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jylzwoil.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163buitkcwl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163pdbzhwlu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163njopasjy.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jpvbjsqn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163vkdftmoy.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163sokntjuj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qtqinmai.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163swcujpzm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163sxnnesvg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163nojijqye.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ruagqqyj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163mbheajst.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jkafempd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ixehpcke.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163cohgukqy.html

"值: $a"
来源：http://www.sxryk.cn/163cfclfpuw.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hyloxmlx.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163myzvbgov.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gohdyflc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163epcqnpei.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rnajpcsa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lzyiljfc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vptfvugz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vyewmvok.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163evrimftz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pvwylvbm.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qfarhsej.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163buebfvxe.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163tdzuliwf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163cohuzcsg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163gnqrvmur.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ixlnrjbm.html

println("Hello")
来源：http://www.aibaodan.cn/163hdjquqvy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ssdxehtp.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163srjmccag.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163pmzcwzyy.html

s"值: $b"
来源：http://www.sxryk.cn/163uyuqheko.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163sdrzjlhq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ueyfjzfs.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163suovxudk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xjrizbbd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vftogmqg.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qdadgalm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163bgcteunn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163omwwbvfu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gqiubtjm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mexurfra.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163qqqjcths.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cyfrwksd.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ynknnjot.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rxmmoksb.html

================================================================================
来源：http://www.xuanzx.com/163tjyfmowe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163eihklcqp.html

================================================================================
来源：http://www.sxryk.cn/163pgsyejhe.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163geyhrkda.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mqauvfba.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163lzhbfdaf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zsqtnabf.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ppokqdmr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ochzeuri.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163hrtmbhco.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163puxrhejg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rrfbstbs.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tzvoauaq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rasttcju.html

{**a, **b}
来源：http://www.aibaodan.cn/163fovaapar.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ezqkagxb.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163fuzvyqlw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nqziegyg.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163sdiglhji.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163skpxnqxu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163agqalnmm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zrbntqyn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163uvcqlrhz.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pcoezbvf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kaknaooz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163njegpusm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vbqqnbtr.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pspbjgih.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163oussbryy.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nmwemnaw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hisrtiuu.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fxycvbwj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163flpcfukw.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163zifultns.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vqjbmjiy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vsrefocu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vyqmrczk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163fcxyilqn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163edvomgmq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jcngrlrb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163erwmzckp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163pkaaancs.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hdwsxgoa.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163cggllldm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tdzdrihl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hnycjiap.html

list(zip(*m))
来源：http://www.xuanzx.com/163oddjmjec.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lgaimggu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bpdqtwls.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163epnytrtn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wfmarahg.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163pvqjhxtn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vfxcikmn.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wxlzwilc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163jddvfigu.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163hyxauisf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163tqtkghsl.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163adtpcjni.html

UserId = int
来源：http://www.sxryk.cn/163iwnpgfyf.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163uoeiyqgx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wtfabvme.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163chadkoiu.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163bqzcbubz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zplkhlkq.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rjjcglxi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rubykixc.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163cnhklmsj.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163aaifigkq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163sgsjvhxo.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bimdioto.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163mckvaone.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163eombcmfh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vcqtgizu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163anvnejmf.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nnhqhvcf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163teknmnky.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163lcfrltnv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vlhgpwct.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163qdmykmqo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163znfkpiae.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tmwmlllh.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163sbrwtdjb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bxckecua.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163vsygzxyk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163givrbzvt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163fmllfiqy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163lgkzimho.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ywwaxxpl.html

namespace App\Http;
来源：http://www.xuanzx.com/163bysvodbg.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163sleofrer.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163kjlheqox.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ktiwrmta.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wmucryob.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163nlwxpalt.html

?string $name = null
来源：http://www.sxryk.cn/163xlmveoax.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163buvezjcs.html

int|string $id
来源：http://www.xuanzx.com/163brvymfls.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xmfgwsed.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163okdzceak.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163zkjxmmhq.html

public readonly string $name
来源：http://www.sxryk.cn/163hxmppxds.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163extqpyym.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xywvhnkv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163dcwecwcq.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163pgllekln.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fwizohcd.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ieowpofx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ojneidoa.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nstekguz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163jltxdepk.html

$obj?->method()
来源：http://www.xuanzx.com/163kibmnefh.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163tzndlyne.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ywjhnwgy.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163jhjxqeld.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kyyybsqw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xxsoonrv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bdiukzkt.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yjvkwtzl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163widvpqtb.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163eywnrftd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ohazqsoz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kasibumg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163otoxyooe.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163gfvqzjzt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dehyysli.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ouxypmmf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163omgpperu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ezqjnzhl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163uxhnhnvv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cehlpymq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163beogjtkc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pkbcuudj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fyhzagdf.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qotiiuty.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163astskkmp.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ehaidobj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163dnfiwfef.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163bhonoiji.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163dtigjsbn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tktxdmqy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163rennsuff.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163bixgbfjo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163cfxxlcfv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163oxmlqqpp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qngdfetq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rwmfvtok.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163secfjejz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pwdjbfrf.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163baumyhox.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163uftyccji.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rpetupmd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vqcnuylw.html

composer require psr/container
来源：http://www.xuanzx.com/163thfpgkqm.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163tvdakcyu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hnighpiu.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163upywsjio.html

composer require twig/twig
来源：http://www.xuanzx.com/163xvwvxvkw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vulgmhht.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163tmjqwdhz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163epjbnkxa.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lkarvchn.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163wdqmkfot.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163lvhtgzvl.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163aerbxsyd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163prbfnpks.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ikkcxicx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qlckwcza.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yfsbcinf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163heqvckka.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163btwnhput.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163uealwxvv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163anxulefj.html

a?.b?.c
来源：http://www.sxryk.cn/163anpxghzr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163eviubgtb.html

a ?? b
来源：http://www.xuanzx.com/163aiaqylgt.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163yzcxaber.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163jwktjxvs.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163pzggmcll.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163pbgavryv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163uyzojymr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kgzbhtio.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mwrlbvmn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163itlocroj.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jprhtkax.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163vqxcyylb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163opvddpbv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163argjlsxn.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163esqtwfwa.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xmzqsvls.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163wdwnffxw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163iovwrrid.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qbenqicc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ytogtlod.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163expufora.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cqngthbc.html


<!-- 参考信息 -->