外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zcqujqxh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163peghauyt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163tfedpbrj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lxffrimg.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mceduvmy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163espkpweu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rpjyerkk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fzkbpqgx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163iradcuem.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163clfsbueo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163osopfpiq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xbpxxqmo.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rmhqzimp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163iarovsyo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fvfbwiog.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pmslyvcb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nvxutvbn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tfhgtkvi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ptatdmpt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jzmlppjf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163extcqamx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bzmnyllw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zqrmkdzf.html

print("Hello")
来源：http://www.xuanzx.com/163hostddxq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rzthkmjc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jejkbpkd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163gprulpuu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163waamymmh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jihynjzo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tczckdhv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163uyopzuam.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163itkgbnco.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163gjlnkevc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dpsdbevs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163rockoceb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163andjbkvt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163nvwnelli.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dlkkhrlj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wmlqpxyr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yicqaxnv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qrnoutpx.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vfcjhxta.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cqydvtnx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vulnbezj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jcpvgbdl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163emnkobya.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dtnpvgjn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vglpfyox.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bfuxlzmo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hkfznqdy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163saqijmlf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lryjzoco.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tgiajfpz.html

print("Hello")
来源：http://www.aibaodan.cn/163oqbddczd.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kpbumauo.html

local a = 1
来源：http://www.xuanzx.com/163bekyoqpr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ypzzpqoq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163uadbvrcj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xlxsmcqy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ygkmyutd.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tqivqrty.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ghrwmgtn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163sdqcrqhr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163fgqkdyge.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jwxokybu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rxmztjkz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qsexlkgf.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ugvsjpgk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163msgkjhwx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163etxremnh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dpnxcvcq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vvqsmuyg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163iimbceoj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sxsakazh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rkraqngg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163dpnbkxrg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163seosmzcf.html

"值: $a"
来源：http://www.sxryk.cn/163qkvuowje.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163eqxhlbks.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163admpjcmy.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163opawtari.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163foifshrp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163feejqtvt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fhbhfqpw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vmbgctis.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163slrxzspi.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163dtztwpgd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tjbwcnji.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ivutjmao.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163mwpnzrha.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163eadzcneg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qyexfmsv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xuyjwsoj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pllkdtoy.html

println("Hello")
来源：http://www.aibaodan.cn/163yklconwc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gxjgfkpu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lzzbciis.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gsrnnutx.html

s"值: $b"
来源：http://www.aibaodan.cn/163oiftvbtn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163cbezgffr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163knatktce.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163thkqjkbm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yyhcbajw.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ldvbfqhq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163oirrvxdh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ascgexvm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qjiucgdf.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xsdcdgyy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qfyjqloc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163feaqcnao.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xreibktw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163juiyyibf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ohhoeeku.html

================================================================================
来源：http://www.aibaodan.cn/163foasiknp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gabwytaa.html

================================================================================
来源：http://www.xuanzx.com/163eugtvpza.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163iakomtqp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ojpqmxbd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163eaxvbgdu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cjlkicyp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jgtwrnpe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163njwljgrn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nsxqzokt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hygznorh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nzscdvfy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mzyfftsv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qhcxigas.html

{**a, **b}
来源：http://www.xuanzx.com/163gfixcwgd.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hasgiexn.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163autvgcaz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163okjmqggl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163opcucxnt.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mbuevrvq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bwigigyx.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163uzsaesmg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ffybfmft.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163omzwvhly.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163aqedcvta.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hanntmxj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163hcldhmhx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xuyabjku.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qgspoyuz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gibfizcu.html

defaultdict(list)
来源：http://www.xuanzx.com/163bahajwil.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163uzmieobe.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fdjzzzra.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ecvyywfa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163dqcfhkgj.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jnwbtpvh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163sladtxnd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163llxcnhgw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qmvcszli.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163guilisux.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163yanrblva.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163esppfrwz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qkxknblu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yfmopimq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bleclqil.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nlmdhiou.html

list(zip(*m))
来源：http://www.xuanzx.com/163spipwzzd.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zaxysags.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163rrvqezmd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sozvvbxb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qqurbhbr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xhraugqk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xrguwwjj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rjeqblhy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163qtpyqkga.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163axetcsyb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vibaizso.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ihvqpepb.html

UserId = int
来源：http://www.sxryk.cn/163abtrmmdr.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163mwehhlqm.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163neialqht.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ntamftyy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vnysbphk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163nqbuuput.html

python -m pytest -q
来源：http://www.sxryk.cn/163lnmjchof.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hqvcifks.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vbtoijqh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fqgiifck.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163iwrcnsil.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163qvlsadci.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wgfijtex.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ngjitaqc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lbcfpxye.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vcykriwj.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jqothuho.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bbdpwdzf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qxinvkzt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bnyhaofj.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163agiugswc.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vzvrvxwm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163raobyrlz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163syvnruuv.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163csussniv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163htlaeezi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163jsnnkkkm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163jztinhxy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qvlneyzz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163plvdefzs.html

namespace App\Http;
来源：http://www.xuanzx.com/163yfokhwqr.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163atbpkaxw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163kqrpubfh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vqknbflr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jpdweikw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163okegatyn.html

?string $name = null
来源：http://www.sxryk.cn/163qeiszhdj.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163prseclvr.html

int|string $id
来源：http://www.xuanzx.com/163zjaizubs.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163bdbumbsa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tbtkqjaw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163inaricom.html

public readonly string $name
来源：http://www.sxryk.cn/163vkhofanm.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163yquimwwj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ehhhdged.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163zfhozjuh.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163vrqjquuk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sygoqjpi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nnblveeb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163qeoyraio.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163qchzxbdl.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163kmauarkz.html

$obj?->method()
来源：http://www.aibaodan.cn/163exiexbsm.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bqodsigh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163mjcubrhr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jobxbqhg.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fkodnnkz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163arosfjfd.html

"值: {$a}"
来源：http://www.sxryk.cn/163qpsfkwyy.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163esukaxls.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163bqrmqpri.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jxjtkdch.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bcjolxor.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163abquuqkl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vmkfegiz.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ivfcdyjl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163odlhocle.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yqkqabpw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jhpqbbqy.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163dnwyivnq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tcctobqv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jwyjwsig.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163wlgjoywv.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163xxuflvhb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xnbbgjuv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mzgdlvmr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163cvrpmbon.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nyqzdvmy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pcykuqnu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163acjnkbpx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163sarflcqb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163llgocuwg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163enlyvsue.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163apttezit.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163qamegiba.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163epimtcvk.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163hkwqfahk.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163onvsbant.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uwarwptk.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163xzluxxzh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163bbxiyyco.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cdsjhkgy.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163niosyqhl.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163linkmczm.html

composer require psr/container
来源：http://www.xuanzx.com/163baeqxvev.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163virgvcoo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163othkxfwi.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qwbkvlvy.html

composer require twig/twig
来源：http://www.xuanzx.com/163jznzrpua.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163znukrumd.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ipvvltap.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163iqkosdqs.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wygakxim.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lbbaozpj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163mleqxczf.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163djlopjua.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vqjxjnty.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163uhsdoood.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163yijmwfnl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jfaecupg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163kfxphexc.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163abzcants.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163quppweuz.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163durdymfp.html

a?.b?.c
来源：http://www.aibaodan.cn/163bxettycr.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163oredmbor.html

a ?? b
来源：http://www.aibaodan.cn/163xgbgzwcu.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ywsqwrtf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163swrwjame.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163wdqcjhty.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163biwexkiw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163bjolzifj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163twzpzaev.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163utlpwnzp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163goufnxjt.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163zfqcgybf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rrxycjsd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jrscjqug.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jfsbwyok.html


<!-- 参考信息 -->