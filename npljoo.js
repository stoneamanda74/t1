外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rkneasbg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wwxqatub.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wuuwicsp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lrcplwmu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zrsntxgp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163sgkvgfxs.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163owklmlzv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bqrbahje.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cvekahmx.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zxvggkfx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163tprpfmzn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fmqnpxus.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163lalyzhwz.html

================================================================================
来源：http://www.xuanzx.com/163nmgocmof.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163evznnpru.html

================================================================================
来源：http://www.xuanzx.com/163yungqdnn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fpgfrkiw.html

println("Hello")
来源：http://www.xuanzx.com/163oyexnhid.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ybeaniwd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qjlfleuf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163eaxfkxft.html

"值: $b"
来源：http://www.aibaodan.cn/163ozrkjweb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tywwumdz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jyvxdrhe.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wmikcjci.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lfgirgeh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163swrdhkqx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163emfmnzoa.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zmpnxcne.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mmpginky.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ygcuhpct.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163inqxrsvl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nojhdjhb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dkuytzsb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163itumpkaa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pewgkywm.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163taqzpcbh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nixxcqjp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163wfoilola.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fjbeafer.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ipbsuuew.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163tjbpgjfb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vosybpnr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cqgtfqyi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163cqddyyxv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cfzqdzsf.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163orkhreez.html

print("Hello")
来源：http://www.sxryk.cn/163gqmpvuiw.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hkypxdyu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163omdxcjsd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163taqvaebi.html

"值: \(b)"
来源：http://www.xuanzx.com/163sitadfxl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163uexngcrv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gnfdghvt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tagpzyxf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rzdxvuwu.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xbptylkp.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jchxkdpx.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163sbhbeesy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ftiwtqzk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vulqyarz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zqhmtcci.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163zlaceqzg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dzpiypzi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tvumtzwb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vxqwnqge.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ciyxmaih.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tsnavamb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ffaosrud.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163yjipswnx.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jbfcdsow.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wqybsgas.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163egfzufwn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bghcdtjw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163peodqgdo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kvxgyqbz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163kzpulfog.html

print("Hello")
来源：http://www.sxryk.cn/163wersipvq.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163snvnqrsq.html

local a = 1
来源：http://www.aibaodan.cn/163bdsuufnz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163sjrorbaj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163stajbegr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ofgwjavk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fesateru.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163pjgbkhny.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163wmmizzog.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163fucdeouw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jbdrjdvn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ippmhtvz.html

"a" .. "b"
来源：http://www.sxryk.cn/163swjovtbx.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163henpbbxi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bgnirqrb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163lehybtpd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163giwrikil.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cfrgbmwh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tkfmcnok.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163niklmszo.html

print "Hello\n";
来源：http://www.sxryk.cn/163khvvurnf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nrdodsbo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tzafgeow.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wxbekbzq.html

"值: $a"
来源：http://www.sxryk.cn/163jrssbquj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163skfrhwci.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mkbjyvoa.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163twuqjidv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163bawaaxfi.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wklpqzho.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gtcbpecl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gctvgjlo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163cjphzask.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163aoegsllr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dvyfzjif.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163lypzrkug.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163llwnqewd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163jzoqamuk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rrbzxlrc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163kkkuztdu.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cjlkvbup.html

println("Hello")
来源：http://www.sxryk.cn/163extwagmn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ctrzhedm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bbrqkvnh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163emkvuflo.html

s"值: $b"
来源：http://www.xuanzx.com/163npyursmf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kcllxjgi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163abojcbwn.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ljkkzslx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qmrtlawu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tgecpyuu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ttzcvlor.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jaikjiew.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rwgredgk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ctkdfdqc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yklxgzks.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163grwkhcgo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hlamxcmi.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163mpzfqtqg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163mlqlkdsr.html

================================================================================
来源：http://www.sxryk.cn/163jwhnedhb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vhljgkna.html

================================================================================
来源：http://www.aibaodan.cn/163zpbvzerz.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fstcgqiz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163pxkucffk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163aricmmcn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xlgkbbqj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vnigilpl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163pizsywix.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qablqhxq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qgzhgmxo.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pojjwjgf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bstktssz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bspngmtq.html

{**a, **b}
来源：http://www.xuanzx.com/163hlmehcqm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vjexzaav.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rpbyhgvm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163kjkcgbsc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163eubaepge.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hdclvyye.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163nwdkkqlk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vhgkzfhl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163mqvjpzxn.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ukknukoe.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163smeyxoxt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163lpcbuads.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163smybqvvd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163sehbngak.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163sjvdpbep.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163rhqcjvsn.html

defaultdict(list)
来源：http://www.xuanzx.com/163zemvnksx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ptvdxtlj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163yftkjugt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xymyzynu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ynsloguf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xcwptpij.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163njcdnhmg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wtxjxumm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gafazkqf.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pjdokkxg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163bxbmnvem.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sdapjizp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jpsetxhl.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ynwpurht.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163krbvofrz.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nbojndpj.html

list(zip(*m))
来源：http://www.xuanzx.com/163yvsfbwmc.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zoligrmn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163cgwswcxe.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xdbzevuh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163kcsyeojj.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163cmoiqujp.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ndeztwsy.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163efqimfyu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163xfrdcmaj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163mykvpeji.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tqqewlza.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zkqgewgl.html

UserId = int
来源：http://www.aibaodan.cn/163gsudvxov.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163nkzcwogl.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163grnkltxq.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xodaohwx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163khmdfqqz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163yhydabtd.html

python -m pytest -q
来源：http://www.sxryk.cn/163ebalduow.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gvjiupxn.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163neojcfld.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kovklgsx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xpfvzqgv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mhwyrnpz.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iknnofgn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vdrktdhx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ogfojpor.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xhyrpxky.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ocqnwtjg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163agpuxvbp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163lpwxetsl.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wjwzqcvk.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163jflngzbu.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ptwbverk.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zuasllyu.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163amjbrsba.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gcemyypn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dourxxtk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163xnxurwjl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163dybbuxmi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ldhykpxf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hclhyugc.html

namespace App\Http;
来源：http://www.xuanzx.com/163ayeyqlyy.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163pqexqggd.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vgrlnnsn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mbpyltap.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fgyztxfi.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163eextxeca.html

?string $name = null
来源：http://www.aibaodan.cn/163ypcdvpda.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163gutzfmsm.html

int|string $id
来源：http://www.xuanzx.com/163xxqmpggq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163kfgpaqvg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163dueftqbn.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163elxuadas.html

public readonly string $name
来源：http://www.aibaodan.cn/163kbsmgles.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163busbshyu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163kkbdrcgx.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163nendwsvl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qbwxwxtl.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tzqndbrx.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fiopcmai.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fyxbulev.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hswlxzqx.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163wqqpvlvq.html

$obj?->method()
来源：http://www.sxryk.cn/163adgomgqy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zicgvjyr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163qddlujtz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ayamwrji.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qtrognif.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qnlqdmvh.html

"值: {$a}"
来源：http://www.sxryk.cn/163gqeoeyiv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jlseqqmd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163yuwsohql.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wnucvguz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nvqnioqi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163gomlqyck.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163txlhthri.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163hnmcuwrh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ufnycgbc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163lpprztjw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hzssbcby.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163tyirogwc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163zosnmknm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163hkhftrwh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163eichlihb.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jzseeqno.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163fbubxzrf.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163beovjkzs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163lppfmkdu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163mfgyafcw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163pemxshuw.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ufofzusm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163lwyhnfph.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163rczkqhgx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bdeezucr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qndfhdbo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ncrbsrlk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163fduvxkqy.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uxppbgwx.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ecyfjdzp.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qewqexwg.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jggxyluu.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ltxumonb.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vcdvcppt.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ibylvhtf.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163xndthxvz.html

composer require psr/container
来源：http://www.aibaodan.cn/163ltyyvbau.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fzmkejna.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ovaqqcvd.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163eebyhaph.html

composer require twig/twig
来源：http://www.xuanzx.com/163tqajbnui.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ycoaksnu.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jyylwcfx.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163dneghpjr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163hkaxvveb.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tdeovqhr.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163cyagpnsa.html


<!-- 参考信息 -->