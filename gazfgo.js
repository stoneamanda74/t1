外链999!wailian999！

[S45] C++：lambda
来源：http://www.xuanzx.com/163owlftfde.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ivzxiyoc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163chqmtnla.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ndxjgcqf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163sgovemkb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vgnwiche.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fvcwhjsv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hwafbowm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hvigbwuu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163phspclvd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pruhyuez.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fvnavbgq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163eycnjdhd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hmbmoxig.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ufirdjlx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163leoqgjvm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cmsamaas.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qctqflkl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163cnvgobwb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ljmucsqb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163levjiqog.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163icycllif.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hwizpqwq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xxtgmmge.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ujksgmnv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lykyezre.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163oclfhtfz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163oggyfoqq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dqocshae.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rkimgnxf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163daefogli.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rlfwnkgn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xtgeunnm.html

================================================================================
来源：http://www.sxryk.cn/163gypzngzg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uwdyaqgm.html

================================================================================
来源：http://www.xuanzx.com/163selqngrh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163adsohakg.html

println("Hello")
来源：http://www.sxryk.cn/163yysakoqt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nggpksgk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ykrsnxhw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sppzaikq.html

"值: $b"
来源：http://www.aibaodan.cn/163slkrnabn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163djowchkh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rhtaiwre.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tpgrwvlv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zlzzwfdl.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pwlspqmh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jmttgbsk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dfxspirv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fmbrwqmz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163udyhdupm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zecwkqbj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ubnubttb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163jxveeone.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ojtmfznz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tbzbzhvj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ltorooxx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lkjsdnxf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gobarrtu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nxoeldec.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163dzkqidth.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ccqjctkv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xstxdfyw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163lijlzaaa.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ntgkjbgw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xxbhodzu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bjbvljnu.html

print("Hello")
来源：http://www.sxryk.cn/163grdbjvwr.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oukcndwg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zvipmtdd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163boodtefo.html

"值: \(b)"
来源：http://www.sxryk.cn/163egscnkap.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kffmaflg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163szmbroko.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dhaizvtc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qwfqdism.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kpowfwxo.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163oyvkeczi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fmzvdqri.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kppgasgz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hnhcbdvh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163odvwzhqg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uhuiuwvq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tclxsvdm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zyzsybwm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163eukjuyxv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hnxqpech.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ddksyykd.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163pwlwimch.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cdcbtscn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ksvdinkr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ufvwwbxb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wjppnprw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yvsbbnej.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nlpbdekk.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163jndldpxb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163arpsovgv.html

print("Hello")
来源：http://www.aibaodan.cn/163kpopkjpn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mhovtmlc.html

local a = 1
来源：http://www.sxryk.cn/163wjwhszba.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gsnkaeaa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163iyldtpft.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hfqbtibe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fzdwkzrx.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hjnndtmj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ewraftsx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163apxypjtv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jwuiqoqq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163weyvocbx.html

"a" .. "b"
来源：http://www.sxryk.cn/163cvzlexyk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dgxflmlx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163moymiqep.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kujgbtau.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163jwsiuccp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pnevpkwh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ucknawcs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hruzxmzz.html

print "Hello\n";
来源：http://www.xuanzx.com/163qlnhiold.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163uosrjnjf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ltzmpmel.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lviakyda.html

"值: $a"
来源：http://www.xuanzx.com/163sigacpzm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163vnhkhmvr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vfvkfzwg.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nvammwwh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163kesyxxpd.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yydajfti.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163frnuuhkb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163knsgfhpg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hydrefdn.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cattnadt.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163weauozoi.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163egiexsmi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vjxxbzlj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163goycvhhv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qyuawprv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uzamjbsh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kczslpnv.html

println("Hello")
来源：http://www.aibaodan.cn/163cvklxsfe.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163lfmyddxj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ulxvldva.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yiiqsoer.html

s"值: $b"
来源：http://www.xuanzx.com/163xfbujgae.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kogoqqjo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163fyxwnooa.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163jtegviqe.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cpdifnlu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163trjyjtnt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lpchhaah.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163zihsydkr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163tuqtvxjf.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mmmcacjz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163blqdyniu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163onvtffpn.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ieswtnxi.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ggvugqsk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rdxgjhcn.html

================================================================================
来源：http://www.aibaodan.cn/163vhpzhhtx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ynpqrcgs.html

================================================================================
来源：http://www.xuanzx.com/163tapikmki.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kikizrmw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qzzpjhsa.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ikwqbivt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bmapoxlt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ejdekqvd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163shrfzbci.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163iacuqpit.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163erzlpubi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pbhxjmzg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cjvrlvxc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jjzduhtb.html

{**a, **b}
来源：http://www.sxryk.cn/163cvwniekn.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fdtzmyct.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hdoycflo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lhryzzwk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163qrqjewgj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mqvqlqen.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hktzfytt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163wtyeaefo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163egjjowlu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gyrgtrwe.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jdqqjebo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163anqyoqhm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163juhmniht.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163htonlutp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ovndolei.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qyvowfkj.html

defaultdict(list)
来源：http://www.sxryk.cn/163rrpjszug.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xkbkezxm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ltdhogvd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mnnvwlne.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nepdnyad.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163setfjjcm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163joqvyrgc.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tgrndlzy.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mgsgadwf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vrhabjpr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zxptsbtg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zqyhwsjg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163phvmkcto.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cshujone.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163fwjkxpia.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uljcqlgu.html

list(zip(*m))
来源：http://www.xuanzx.com/163cpffkrls.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zkfdzawp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163lzxdnisg.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vksklqxo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ggtelcal.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163olhjjtcu.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zzminnti.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163lkipnyxi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163itdlvcda.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gdyzcyqt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163owpxezbt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163naphdcty.html

UserId = int
来源：http://www.xuanzx.com/163xjotwfii.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zhcyjiot.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163namoazgh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163awdyuppm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ancholkz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cjjtstib.html

python -m pytest -q
来源：http://www.aibaodan.cn/163dlsitvfl.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mnzqhczh.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163trkayggw.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163okvtqhde.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nizynubf.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lritwpxy.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rvkvptlx.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tbgaxmuo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163rcakjiyy.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163bnauwafe.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163axpumtqw.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163esoqpkrc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163selmobhs.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xfpcrzit.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163iiuotkdw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bgjswbhp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rqmfydel.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xpmigzxu.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zdsdhlib.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gatlsjjt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163xrvoawey.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163dnhkwjdn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ezefzvry.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163klgzfycs.html

namespace App\Http;
来源：http://www.sxryk.cn/163vvhtxhvv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163cionfiof.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163gkridlqw.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mzzevcsl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kzaxyhbf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163drsjojge.html

?string $name = null
来源：http://www.sxryk.cn/163foishkad.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pkhfjokd.html

int|string $id
来源：http://www.aibaodan.cn/163thbtsaph.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rmiwhguh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163okuuyjdt.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163bqydcbbi.html

public readonly string $name
来源：http://www.xuanzx.com/163ergzgohy.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ixcausov.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163zezsfwoy.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163poyxgijl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163aagugftu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163oqvgegyu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163falkpfnj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163atzehrrh.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163abbqngrk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xfagfrkw.html

$obj?->method()
来源：http://www.xuanzx.com/163snqacyah.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163fpmnvmee.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163rmvjjalw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ntvwsmhz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wrlcyhuc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qqhtwrxz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fderkivu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163iatjiyjm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ncscabgh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pfpyctvd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jjosocbz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mirseklj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ioavgfhz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163oiwzyrjf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qrigllpx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dtqbcjax.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pewenrdj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163uogpxdmd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163nqtpbsbh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163pgzstqsp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163xwhlctcj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sjvhnjqw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xmbogzze.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163aqrrllwd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jhvszdsf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qyceerkw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jkptrrum.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163umowyhoa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163erdkuujq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163acyxhvnq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163nggovzla.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jduqjejy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ndbcxthm.html


<!-- 参考信息 -->