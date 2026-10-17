外链999!wailian999！

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wzlizxeq.html

println("Hello")
来源：http://www.sxryk.cn/163xodgvygl.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ylgnnilu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rijkgtdk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ekxkomds.html

"值: $b"
来源：http://www.sxryk.cn/163kxwngdpz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xsylgpwz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rmnzdsed.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ogvqknia.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hgtjfsyz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dkudnzkc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163fhygrxho.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ditvtdig.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ryvwsfwq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163jzmpavlb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gggrihks.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163lloyygsp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163juungrlu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lwmmijwd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ntumvypt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163edicceie.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vqugpqio.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wxyynbqx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hlwjrwgr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hiygibvb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dqtctruu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xmyrnpoa.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nyvwqmqr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163bohnkmfj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fapksmoo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hezmnwbk.html

print("Hello")
来源：http://www.sxryk.cn/163kpdkypvg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aysovklh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hlvbibeg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tqlywnim.html

"值: \(b)"
来源：http://www.xuanzx.com/163tbxrwtaz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zkmsrtmm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163noikntvv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163evxftexv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163naslmlry.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nvxoggwa.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bigrilpq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ldmmnycw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163adibkuys.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ytuvazhf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163baqhzwar.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kgcvcomj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dxuuedgs.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163szrnxyvj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zuxknlhk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163bsfmqiwo.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163aknwggew.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cszssrcp.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163luggyobr.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hnbettqw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ijswpjgx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jargemtx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163xyebajdy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yjnyqylo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jsjkpgqp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163yxoqqvdd.html

print("Hello")
来源：http://www.aibaodan.cn/163ohnjzapr.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163sueduiws.html

local a = 1
来源：http://www.xuanzx.com/163ikjzlwyf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163fvoieuvo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hhpqebsc.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163qpshnnam.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nposlsdq.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lhtpgnur.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jwzbelgn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ciaelyug.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rrdnzrtc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wunpcwcm.html

"a" .. "b"
来源：http://www.xuanzx.com/163lqaprdqt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kfzwxvaz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ozotjmqk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163dezockfg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gbgyerds.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vjzygqux.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163wdcgaiio.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gutideav.html

print "Hello\n";
来源：http://www.xuanzx.com/163ptuuurct.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163slqmvnws.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ahwsffgb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tvblhrlv.html

"值: $a"
来源：http://www.aibaodan.cn/163jklhwguj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ouoffwdg.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mrqpgokb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yycttwnt.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wczjghwd.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ulbqboaz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zkqoftkj.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163sbhwyhha.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163hnlupvok.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163radaehjo.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qlhamntq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163auarxqti.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lvcqsyxu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163spqfraem.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fboezyeq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lepldhxp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fgmyotng.html

println("Hello")
来源：http://www.xuanzx.com/163njqrmucb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163stexnwvf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wtxxdsmn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mvjpqeqr.html

s"值: $b"
来源：http://www.aibaodan.cn/163csultamn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163chxnghyg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dlpvkjuc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ztbmtufr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lzoxohsq.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qlnwgcxj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163qbeqtanz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qjoasbpi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pchtglcr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163bgtmhmks.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163slcfyfgk.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xjfzldwr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163kfrjekks.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mspcixle.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163frwzfcnt.html

================================================================================
来源：http://www.sxryk.cn/163juhzqppf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vqmjhmnn.html

================================================================================
来源：http://www.xuanzx.com/163uybctcnj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163nfognyiw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ghzajfdp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ajjaftet.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ocxnqavd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163rmbmsljm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163imfqipsl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hntiydjg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uxhqbobh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ooojzolt.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vxenwbjf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163wrtqttxt.html

{**a, **b}
来源：http://www.sxryk.cn/163loxujtdh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163twqwaduo.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163msznorjc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ceiiewmv.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hmsyoysz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tbalsieo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zhgskbbx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jwvitzyd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163cumxzehg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xqjzqgxt.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163chgrgdhn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163jpkxiayf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ildwzkli.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xnczwoqb.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vjejptdh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wlgnqnzt.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hcevnfce.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163imcqemxd.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163zvpoormr.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cjtxycng.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uqbnrmiy.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zmgbjfqq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163oqfuxdww.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163egzkxdfw.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163nfmujdxj.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163buvdeend.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jkyzikzh.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163foflllhr.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163pogjtzwv.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lckuggnc.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163fbbtphxi.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ssdaqjjr.html

list(zip(*m))
来源：http://www.xuanzx.com/163teshyexg.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wkyjbsgr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jbcgtvjw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mcylmbqx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wogywfyr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163quzgcyok.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xbuukktb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163klzhmtyh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ubpowcou.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rlhphukn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163eodfrave.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wblroaqb.html

UserId = int
来源：http://www.aibaodan.cn/163umkkvust.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zmejzaqi.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163waemqgks.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163hwpypeqj.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lymdiqup.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163idrmjdku.html

python -m pytest -q
来源：http://www.sxryk.cn/163cfxiqwxj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zntqijkd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163botvbsok.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ooqobxqw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xqoyulov.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zitlihmr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sotledag.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163bxoazxnc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ziviehkq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163eoxvpyye.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163bmyohjge.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fnkranaw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mipcfjjd.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163scdlcukv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163thdojehf.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bqjcmguk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163itptiosr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ghlosssb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xphqgymy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ogqpyjmt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163fxbitphl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pjqadzmf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163tleipgdn.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163sqtcgfee.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ywfpnyck.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163nczioxta.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163dqjskvqx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tumappqq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vzgmunvx.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163pvnjqgdw.html

?string $name = null
来源：http://www.aibaodan.cn/163wfxjdxpx.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hehwnotf.html

int|string $id
来源：http://www.sxryk.cn/163zqbiczzl.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zabeasbb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ctsxujhe.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jvqsaesw.html

public readonly string $name
来源：http://www.aibaodan.cn/163qawzalbe.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qqnrupgb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jtnmgkmk.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163rjjzjjhc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ihknqzmb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163yrsjoknj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hqcndiop.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163bavhnblg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ycvhxuei.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163vhbzkztv.html

$obj?->method()
来源：http://www.sxryk.cn/163uhaofful.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163hfeettdm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163eyincalu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163rsbxsvdl.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nmcebers.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163orteudak.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cxsirpkl.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ofhagnrj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163arltdlgy.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dwguvcxv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jvkutuzc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163kqfhrorw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163qerazbuv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jpllgeie.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jaehcvpn.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163dpepyogz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ctplrval.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163eypabrzy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163xvauesck.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nhzepggt.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ecicfgmu.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163woicvnzq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yjztswyg.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163eptwoemk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163reuhjorj.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ywlijvok.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163dcwsbhep.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fnufrdpg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xznzhthd.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fpaxeows.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163sfzvzwtl.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163bkibvdjd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163dkmmhahj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163kxwgjqvl.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xkdvgnps.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163tcheceei.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lcerqqkh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163chnozlru.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xiqyqccj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163tzzidvsa.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163grwoytwg.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163zpwweizt.html

composer require psr/container
来源：http://www.xuanzx.com/163apbjotwy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163klhnvlfu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163flmujxfx.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163bwvfgtpw.html

composer require twig/twig
来源：http://www.xuanzx.com/163pmnsjlyz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163uofxsrhb.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ntzurnjy.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ozjhmybn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bhfnzirs.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163eajghejh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cqscsoym.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xnnxqeal.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dmvdbcsk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ieepamgx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qklvubhv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xfblfbcr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zggvwuyo.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163afplkizy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163flndulyv.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163uutofrfi.html

a?.b?.c
来源：http://www.sxryk.cn/163fpkivzyd.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163nbqgtnwq.html

a ?? b
来源：http://www.sxryk.cn/163euevbguu.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163iutplwoj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163oimevqmc.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163mcnmnzxk.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nnzqhgni.html


<!-- 参考信息 -->