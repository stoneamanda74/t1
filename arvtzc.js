外链999!wailian999！

[S45] C++：lambda
来源：http://www.xuanzx.com/163idglyopd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sgjoexju.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163mwygcytg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lfuefxvc.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uuxklkbm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ozmjepui.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163btcunkcr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163teszgvmp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163werkwiku.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ulzbolsh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xofgdbry.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ervlokjp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lsryjmij.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163molxzkox.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163dfuxcuyn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163yikrugdb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163yfubeggd.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163nsdlncak.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lgeusise.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163axdbscdi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fodytlqi.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qeqqtqqc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ejtslkwv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xblqrwuf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lsvryqgc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163trwjbgrj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ygihqcgz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rrszycqr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wtdejyrk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163amukqdyo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bhduspoc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ypkcjueo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bqedortx.html

================================================================================
来源：http://www.xuanzx.com/163ykjzlhzm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163aaxvkxnx.html

================================================================================
来源：http://www.xuanzx.com/163aicjmwvk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163blwtpgfb.html

println("Hello")
来源：http://www.sxryk.cn/163uqhyfefh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hrfpmweq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163elmeqtpy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lugrchoc.html

"值: $b"
来源：http://www.sxryk.cn/163cqdqmnlu.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vydpphwa.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hhwqcbvp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163eqzgupmo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163csokdyws.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163tigqnnkf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kojcnxyh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163cnnjnamm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163sqisdkqa.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163aikreuhw.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163kzefotot.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tjbajoqu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xfhliryb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163edmzbtvk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163krkqbgzi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pgcpzulx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163trjxomzq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163muzpyvqk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ihwsldxp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pkzgckwr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163qtzmzehi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ifwhmasr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ndhbiavu.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163chtedknc.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zblydxgy.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163guimmwcq.html

print("Hello")
来源：http://www.aibaodan.cn/163seqrprvu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qwmkbqyt.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163boqtuqtb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163zofrtgne.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mdbkljad.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ooxwjpgj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yopqieub.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163okmkzsov.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pivasuaw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rnqmzlfp.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163kcjwakex.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163crlgzizd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kgqejrqh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ftuwwcoe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wbfdcxdx.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qffoyvbe.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163emrogpve.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163mefrsegv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tdmzahdg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pvudzsem.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gnbasiig.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pisbsnvi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163pkzksbxk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jfqqrmrp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163mbdrijoh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163aipccrcd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wpldtusr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wgexjbxg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163yvlcuicm.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ulqhdjff.html

print("Hello")
来源：http://www.sxryk.cn/163zcucikgi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ohtatrfo.html

local a = 1
来源：http://www.xuanzx.com/163drvzsnog.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mwxsijer.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163wrbzutim.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gcobhgbx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vyycxhnd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163eirrmnra.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163pnuehkvj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163myddlvoz.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163shmrqbbr.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qftobnqm.html

"a" .. "b"
来源：http://www.xuanzx.com/163bjntrcgm.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163nmewedio.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ztjjkmwu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163oijutole.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xnrapqpq.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163uvsfrctn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vcucekwt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163iomakcqt.html

print "Hello\n";
来源：http://www.xuanzx.com/163vnbdzxfh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hnhwjzgc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pzbgoxdj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163deewfdjq.html

"值: $a"
来源：http://www.xuanzx.com/163etmycokq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dqdlkhcu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mrqsnufn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163miweqkab.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zxgztgte.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163huvexdzn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vonzmtch.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163peeofmox.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eqbtwuid.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163klprorzl.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163nxeprtzv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ajyhasnr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163acgftxkv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163axniyscw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163fbvcrncv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yuahfwkx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hsiztphe.html

println("Hello")
来源：http://www.aibaodan.cn/163bdfxtdvk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ntkguxwy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lusmhbif.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163azxtraqj.html

s"值: $b"
来源：http://www.aibaodan.cn/163tdinbwnl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yxjhqgkw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zhicmvta.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163dpjabhwz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rarkmdic.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163csheuumk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163usbgjnkr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xnqktxgy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vdzukxlk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163allpasst.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lwfadoxv.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163oqqvthei.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yikhxmue.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163pqjgyrwv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163cmnmylov.html

================================================================================
来源：http://www.sxryk.cn/163lxyzddiw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xegeofiw.html

================================================================================
来源：http://www.sxryk.cn/163krxzsqli.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kfebibew.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mbrwidgg.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163geptxbzi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163pmkfdyya.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zpfzzhed.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zkaasfyv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tgpynbam.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mfkbypaj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163voeznmez.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dyyxaxjz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hernnigu.html

{**a, **b}
来源：http://www.aibaodan.cn/163xmqkaxjc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kehocgec.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xzsifkmi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zcqiomnq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163uymrzyiw.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vcxcuvvp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ikqbxhdh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qfeyzfzk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ygcmvejx.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vhzzctoi.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163yymznihc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163jowylpol.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163nhrnodlq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nsfvvxfv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163sgazxekr.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fnewqpar.html

defaultdict(list)
来源：http://www.aibaodan.cn/163isvrknur.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163rzoqcjjw.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163jyrjupnd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163yiaurwmt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hrxzwwjl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163fnzhdkvm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vyombcxy.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yhoxuqaf.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163adqbnpuu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163njixevoz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163sysmjzmt.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163eiiedmew.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qekrlvyf.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mufxhisf.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163iuimemhx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jnbjnmhm.html

list(zip(*m))
来源：http://www.xuanzx.com/163lxfvfheh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163qxnuqles.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qfgwxzun.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163iytnptcg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163xvzgojeq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xhotzzcb.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163mtssciyy.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ndcantwl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bldxmple.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rlnbjcyv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163yfemaxyw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vrristby.html

UserId = int
来源：http://www.sxryk.cn/163nkmfnkom.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mwqbmohs.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163vzptxlcm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163mzztebdn.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vqsokxna.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rzfxouwg.html

python -m pytest -q
来源：http://www.xuanzx.com/163nqccozug.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163daqkqbdb.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mjsbytsn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rfwjxhad.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vxuuyvjw.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163qizsvyqb.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163yksqoaqc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163apthsdgy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163cmcjnahs.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fysidlxz.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163uhmxabjd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bgbkhsql.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wtbbdxsx.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163mmekclyj.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ggnmtfyq.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fuzophqw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163oososhxg.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163iewopowf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xuprhurh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163yplpmder.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163pcngfxqw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xbhxzefn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163hivilspr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mclyamfn.html

namespace App\Http;
来源：http://www.xuanzx.com/163bhwymdvc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ervvjrpi.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163dzuiogre.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163unhorbej.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dkazjaoe.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wzyxmjsv.html

?string $name = null
来源：http://www.xuanzx.com/163ynornuzw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wehmwitn.html

int|string $id
来源：http://www.xuanzx.com/163sfmfjlfn.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163arovdkgp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zufboopz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163avrgeqwt.html

public readonly string $name
来源：http://www.xuanzx.com/163srljeofx.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163umefhnpo.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163imkobzch.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qjytpigo.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163izwwywpv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163bwbeovpx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gfohrkuq.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163xshfkqxg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163dvzvpgib.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163srygbcmo.html

$obj?->method()
来源：http://www.aibaodan.cn/163jyrhszqs.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fvzrekyq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163jehspjkx.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ajvsexoq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rspuqfgc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163yoyinavz.html

"值: {$a}"
来源：http://www.xuanzx.com/163fyzzarkr.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163akszsguq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163dletkmzu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163vuytyzro.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vcokfpid.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163sldnykrz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163nbtwftyp.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163aezwwwff.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bhfotjij.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bietforg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163vjckmlou.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163sofnfnpt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163gjxjhvti.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mtpkvetn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zggwqkno.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sddeurvm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163rdownekg.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163fpsexisb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dfiasjug.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163nqzlpykg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ltpoijsu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163plnngjav.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ifwegpiy.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tmrbrhxm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163uqqyeqwn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163azjqcgrg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163upfppers.html


<!-- 参考信息 -->