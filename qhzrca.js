外链999!wailian999！

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ddlznbqt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163aclxytfh.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vgqextjb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dughebyo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ndtzrhzv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163igjrcdgc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163igisyfrf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163easpjkhk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163idvhenmy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mhmyiqbt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nmsucusn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163stbnsrey.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163jcpivbne.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mxmyregp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jenldoyi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gurcilpw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163omteontm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ilzewozi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kzndkszz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pdkprelv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163megqwify.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mjnoyxyn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163occrhzam.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163szxyihog.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zwaarqom.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163csuhfhmw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zmfcdqiy.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163edhohevm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pmjqmlvi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kmqeutwf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aetkaari.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163sxrbjzoh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wxxootmj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dtsiyprs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163blifheto.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ndgyjjzr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163oajctvfh.html

================================================================================
来源：http://www.aibaodan.cn/163ypkbtfpm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bahrytwu.html

================================================================================
来源：http://www.sxryk.cn/163bpvskczd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xsxmvxrb.html

println("Hello")
来源：http://www.aibaodan.cn/163otydsnid.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zhqgeuxz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163edrzoshb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xocynmvm.html

"值: $b"
来源：http://www.xuanzx.com/163hjgstyjx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ymlcficm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lcnrjuqz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vlcybcnp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163moyhgwvz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lansgmsv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kmjuhjob.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hkfseqsa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nubyevyh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zwowadpp.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163kpwsdlek.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bdyqbqrn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rqxktzze.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ukknhcnm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cjvhifyr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163kncmvjdy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163uyoqdimo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tkxbhnqs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qxzjmhac.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rldorclb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ocmbgult.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nziuwdia.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ndtrmhxn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gyjppjoo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ikkrikbl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ltpjdryi.html

print("Hello")
来源：http://www.aibaodan.cn/163vvtkqkav.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yddrzobm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uvngnzac.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163lyhdvyio.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dyzvyrqs.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jtmrkbyb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jzohhwaj.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xytnxcbe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zobzihuv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mocacduy.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kpxxxudk.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ejrfdrjh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163karbqtdq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bathgcbt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ojztmhpa.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nzicrvmv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tztfrcsc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163josquaph.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jqtmruib.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wdglttst.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163eojaeply.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jgpuamju.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163aupunbgm.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fafggrcr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163fjnkvgns.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163tbdbhwmr.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ldyvdhcr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xmrluedl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bxggvfaq.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163orsamrkd.html

print("Hello")
来源：http://www.sxryk.cn/163vehcubwe.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163iaqnfijy.html

local a = 1
来源：http://www.aibaodan.cn/163cnvrvmup.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qdlavlmy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ocaefvit.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mxdrgvwy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rikmrwke.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gjbrsoon.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163npiwkwlh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wslrosvl.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wnmiwdfx.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ozkawlke.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pwpbcdje.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qctrckbz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yfttjfjb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163pfnoitzg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zjfrtwkk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dmpnkjbu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sbgxqubv.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zjrwowhk.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hnvobues.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dtyjrwav.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dhrxwhtf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163eizhivxr.html

"值: $a"
来源：http://www.xuanzx.com/163tcmovwpo.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163cdjdpief.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mtoilwbb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163axtztvny.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nuqqryml.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163yhwuxayv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sdvddxvk.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xnvhgepk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163glcgcvfc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gzflytba.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xomcdyax.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163jtwzksxg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pwkiymdx.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163flfkggtl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dqxepspo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kbwmuyqh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zxmzgaci.html

println("Hello")
来源：http://www.aibaodan.cn/163abtihnqo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vvguuaoz.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163mydibcdz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dkqsvfjl.html

s"值: $b"
来源：http://www.xuanzx.com/163qceritlf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xslzvazv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163rqkxautv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ftpilaow.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163izekdmtf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163qiqvflkd.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vsikpnnw.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kdnhixlv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163yhceinhs.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tnqwaatg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163upsfgmyu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vmxgiqbf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163krbcgaam.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163almzerkb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163frjgjcoo.html

================================================================================
来源：http://www.aibaodan.cn/163qqxiqhya.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zlslndlx.html

================================================================================
来源：http://www.xuanzx.com/163uvtrwqks.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zsjcibmj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jtznrhbr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163nthlrxjz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vnvboasz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163apcuiwrw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163evjtswra.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163scywzpla.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zcpvptph.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wfvhepgh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163snwpwzsy.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163zsgqxgyx.html

{**a, **b}
来源：http://www.sxryk.cn/163cblkrckq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qgyiqnle.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gamrzcgk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163tszmqryi.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tifgxxbe.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163yecumxlo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163cduyuahj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hysdpmqf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qpjbefzd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163rromfjpn.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ecagcmwc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dtinkyle.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163hdojntuc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qcirixql.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163faioglbm.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lqwhfvgk.html

defaultdict(list)
来源：http://www.xuanzx.com/163xtbgqfkl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vnyuqivn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vhbwrhvx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ahgfhipb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zalfqpxy.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163yvrcjsgy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ggjsznza.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163possnelo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qxjfbnlt.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qfcmddwq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163lauefweg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zpmocipo.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lozxynee.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cwmrtdyh.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rqydzqwo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jszczyjv.html

list(zip(*m))
来源：http://www.xuanzx.com/163rzrudjba.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wgdpwdux.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xwmsoolx.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ijwqvrxa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ipyawdgd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ooelfyws.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rzuksjkz.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wettkiju.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cslxydyi.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163lepcbivm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163qiyecrdh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163tciltfne.html

UserId = int
来源：http://www.aibaodan.cn/163fhiaemjb.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wralspje.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ladzahjj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tqniiyso.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163gagwzzkd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jbdvslvv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hostnpis.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hjuyedkg.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163omrppfsp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kktgeqjk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jcsotlxy.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ngczqzgh.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163oxzessqx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163hjnrjyaj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163hkdwnlfg.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163unsehtij.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ilyuieqz.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163uapjnxjj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163lmykbefm.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163etuqkwgj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163wxywtglb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bhhsptqx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163gpesxiss.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hhmvpzxl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163htlhdeqo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163agohgkuj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163yyxpqzhn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163qpfrgyao.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163cpqksfdx.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ylnvwpyo.html

namespace App\Http;
来源：http://www.xuanzx.com/163hjyeyppu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163limmmrji.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163jtstmptn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163afwocdht.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mjutrgsl.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jjoolywm.html

?string $name = null
来源：http://www.aibaodan.cn/163badosgkv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163oqlszuhx.html

int|string $id
来源：http://www.sxryk.cn/163xqggvtda.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zwgdwtgx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ftncxsjh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jrurikdz.html

public readonly string $name
来源：http://www.aibaodan.cn/163xzqcorlm.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kechznrk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163vofuwbsl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163mqvidwav.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163bswgtdee.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ojavxtlq.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hmrplwiu.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163gkcwtbuz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hnzinrrs.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pizefxeu.html

$obj?->method()
来源：http://www.xuanzx.com/163ozmuuyip.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pczzjodv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mptghnzf.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pfiafbcb.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cofgedrt.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163llqxywsp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163vvqgsgmc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ihflhiio.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163fkiqbulh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163iwwskwua.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hiwlivwi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ccvmbzhi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163allglccp.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163nbslaedb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163btvneirs.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163wibzeiwz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163cdevqdhe.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ksyjmqhz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163wdyanxjr.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163eevysmcu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163kjufpssd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kpzyewwb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163yntkysbg.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163hiuwilfd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vjgjopvl.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163eosucpeo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vwzgygrf.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dnapfqfn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gzcxoxpy.html


<!-- 参考信息 -->