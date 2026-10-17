外链999!wailian999！

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qwhhcyrb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wxdofcke.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ppghuopn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vbvghkao.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zvilotqo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ywzuknsn.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mvldutbc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zgzdawuq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163omldssza.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tiafoady.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ksafnqoa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rldmxkvp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163omwlnnff.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163buxcwybk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bgohlanu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vmqxaifa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ckxvvplc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dfovywbv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nekdcxjr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dedymxdq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ehomxbvl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163cdqlqyua.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mmskayba.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kkxxphkd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gwqhfqgt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yjbbdpon.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163magceeul.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163mcrbrzko.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163rtgnplgm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fdnfybgm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163leafaivb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163lmyhcdxx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ptvzmymz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ixbndaxz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bwheojmp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mklujmqs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fblyxrmh.html

================================================================================
来源：http://www.xuanzx.com/163socoiglo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yntmdqmv.html

================================================================================
来源：http://www.aibaodan.cn/163yvxmrtwc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qypidghh.html

println("Hello")
来源：http://www.aibaodan.cn/163bgvmqcbu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163bnwtihtu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cegwmdvq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lsjuesjb.html

"值: $b"
来源：http://www.xuanzx.com/163kopncasy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163yrasjxvu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qcacrdfz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vfrzggyl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fvjcgotp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rmtcvurn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aibzldxp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yobvvyky.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163uxivxlvb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163buisaahq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wdljlsfo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vmpmcvwo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nhjnqlrc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kxdiztuk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wtwiuhgy.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zwrjrwmb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ujjqshxz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163huorzdhv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ydxrlzlf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bnvfgjis.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163iyyyrcna.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yycgtwoz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ewfhovdk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mcxbfrfa.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bzymayrp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uqjaeuxw.html

print("Hello")
来源：http://www.xuanzx.com/163wrefhsup.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rfaxxuws.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bkjrokvf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mgpqxkxw.html

"值: \(b)"
来源：http://www.xuanzx.com/163gkmioazn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eiamafzn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xwppnvzo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wlbbgtym.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163luxtrzty.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163riohoebe.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qfwcpdpr.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mgegcwxw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vkzmfyxx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jarguzej.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kcuwtmwh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fcetaghc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163voqluenr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163eavgdtry.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xbanshrh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163slyvaquv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163uzpfligq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163noiybpjp.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163upnljzwi.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qwmjroyp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163roejcasg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wwqdujgg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163dnbouqft.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ttfxrnqu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ushvcuuu.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rzxrrxtm.html

print("Hello")
来源：http://www.aibaodan.cn/163orimzagi.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163giabpezo.html

local a = 1
来源：http://www.sxryk.cn/163zmkxsgdb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163dhmphwun.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jkqrnwqn.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mcilawwd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163jnabjnnj.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163kfpaylww.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dmqiykgu.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163hprcxizv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wownfzvt.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yqyfmkky.html

"a" .. "b"
来源：http://www.sxryk.cn/163sgnhxhdi.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vzllwoap.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163azowrjrj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lqrmhlkh.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163uplyfnan.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vebjpniq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tjagsuwz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bseigylb.html

print "Hello\n";
来源：http://www.sxryk.cn/163fjzrswln.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cdnytcqb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163knvxgysr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163voikflsn.html

"值: $a"
来源：http://www.aibaodan.cn/163ecywsiec.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ehrapscu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rcslkhfq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163birbskzx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wtjdeoso.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163tbmkiebq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163trxcwedk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lcfdszvw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lfaftbat.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qiponsgo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kjokwhdd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163tjqzonzc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wbkrhhnp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163uyjtvenl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bzupjtwv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yeyvomcj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163kxrqbqps.html

println("Hello")
来源：http://www.aibaodan.cn/163favffzux.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gilgfzxg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bsdhexul.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lnbgiarm.html

s"值: $b"
来源：http://www.sxryk.cn/163walmyklu.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lvnpfwwt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163wkcjpwmg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163cxlwrkue.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ecaubfuf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dcoljiaz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vgkyuojb.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jpeihcmp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lsqpwxcg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ttyxkqwk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gzearstc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jmhxegyf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163judjaamp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ahijqebb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163umxayovf.html

================================================================================
来源：http://www.aibaodan.cn/163jtqfoapw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ykvbqcwi.html

================================================================================
来源：http://www.sxryk.cn/163aqiollsz.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163kcvbetrz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163vumutlsq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fsugipnx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163dvsuhsfs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163hqdtethh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163nalsavdl.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163evragvst.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qamzhyft.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tqojjacy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ynrkbcvf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vfkguchn.html

{**a, **b}
来源：http://www.sxryk.cn/163yzpjdupu.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mqbltfgv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nyuytslc.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163lnhozbgi.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163wqafkhha.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163srrrjlap.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163wqfrynjz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dksnlyfw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163mujpytml.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163sdmhkqqj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163staupicy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163uxdkbcxp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rgotuqbc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nexplyzs.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ycztipmb.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zxnfbuhi.html

defaultdict(list)
来源：http://www.sxryk.cn/163cfrjsthm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163rjmglrog.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163afxhcapa.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uvbyzpcy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163nrboowom.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163mbbusbbj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163yavcmeyz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xvajhwuo.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mkgvsrjr.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dukpkref.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dlpncims.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tdfiglpm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163gponyoea.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mlzxcynf.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kdigwmcx.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163molxymun.html

list(zip(*m))
来源：http://www.xuanzx.com/163aeqhkeoc.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163hbahzjlj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ttmqqfoi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163chtohibf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163orilbxbd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163byqwflxa.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uoykqlys.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163asfkjcay.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163muicnvyk.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163jptfuyyx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yonfnqpw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vnoceduk.html

UserId = int
来源：http://www.aibaodan.cn/163pevxiwsa.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163eblhcdes.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163skxrtczs.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163duicaemi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163jnhdvfbw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163spezqyqh.html

python -m pytest -q
来源：http://www.xuanzx.com/163lujzlxfd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163oocseauk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yurrohzy.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kbklzuwy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163znksstkm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ghwhaoke.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jclwsjai.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163orolovry.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163wstqmdpk.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jmwjhzre.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163euwxojqe.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163qqostidm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163kybqmpdv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xnwtibnu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xmeczikq.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xzpzkpiz.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tsjkxebu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mvjsdyrd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ymgthxit.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ivujgjks.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ciexkcra.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163oblgtwgh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lehztccp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163foumsdgo.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bdotzmhw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163tzbpzkhe.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qxkfyikq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pjnidudi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fbcepnwd.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163omapsctc.html

?string $name = null
来源：http://www.xuanzx.com/163cebcqdvo.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163xtozrbgs.html

int|string $id
来源：http://www.sxryk.cn/163lwyhqhxd.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163baxahnog.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163odrgrues.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163abwadeoa.html

public readonly string $name
来源：http://www.xuanzx.com/163vzblnvhi.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163hqabfget.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163svbzqtjs.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ssdwkzwd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163niveyboq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jfckhfqe.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163myedumys.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163xidhpxcb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163dnorxdfz.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163kegbzsms.html

$obj?->method()
来源：http://www.aibaodan.cn/163vbfafksw.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163nshkygoi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hwppqspu.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163dtlzgwnz.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bhrbeizc.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163sapckpxn.html

"值: {$a}"
来源：http://www.sxryk.cn/163rrpawcev.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163srynljha.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163tufulxpv.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gunzlzcj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xlraydtt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qbwjwmvv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kfpowrib.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pasidyus.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kczgwegl.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163kufwjwkb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163kahtogwr.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163elgsncck.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rmuylyff.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ideenhoo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nxfwozbz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163earjtqiw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ekjoqozv.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163okzubfjd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163eowedipz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163upzkzxkh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wwgdhpcm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163hionnysc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163fkbmsetc.html


<!-- 参考信息 -->