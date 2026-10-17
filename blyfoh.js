外链999!wailian999！

#include <iostream>
来源：http://www.xuanzx.com/163wpcpfwko.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163smgjwpfh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zbuaoyhj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wbenjnyx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mjthxbxm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163cggrubbe.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kurwjspy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163euggxbwc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163haevtvwh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lubfalpa.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163irizglpx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ssnfwjvc.html

[S37] C++：set
来源：http://www.xuanzx.com/163wqqkuyrw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ywtgkwin.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gotnvtwh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163oavtooya.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tzavypgi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vkdprowg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dnwzcoiq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jmfixhru.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wtdfhdmd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163awoaulfj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163iltpwfet.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nzuaxpee.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163nmryhkwi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fnpmuhtn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mywfqubl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pzadqnrk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tlqsyruq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wadpfmid.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pzreaber.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nqczkavu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ffgerrnp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163weuhlcra.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163whdoommb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fwrrclxu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163addjzaha.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kryrhqxg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ssralbzq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163oklgohzo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163yfbsqoum.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lgbzfjux.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dmytvrft.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hjckvtle.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163onsaozdt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vworjxos.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jikfyuyh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kxyeuizr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163irwqycwn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jhhsoihh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163bvjkxzyq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gtdoqnka.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ltyypmvu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hagpbcsl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cwqbdblz.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mkdawyco.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rmwyldkq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ikmetzol.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xxqgdiaz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lqrqqumx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yormgmbf.html

================================================================================
来源：http://www.xuanzx.com/163owpzczsp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163svuquecw.html

================================================================================
来源：http://www.xuanzx.com/163vpmvbsxr.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kpsdhppr.html

println("Hello")
来源：http://www.aibaodan.cn/163rxsysxtl.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163acbenndc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vwdwovbf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bzhvjnho.html

"值: $b"
来源：http://www.xuanzx.com/163dtkyjbld.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163sfallvhp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nbwenfyz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163aomwjmtb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163cecyjiwv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nhgiagei.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wlmypceq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gouflsuy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163eofvqdvy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yswpqass.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qbjuqiwl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163galwgalc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163esanuebi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jrzsvjqq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zyrybrok.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dkgodxdg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163tbfeqxji.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zjbhjlvk.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163edkuecuj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163utbqqqed.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bkqobecz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zcaktwox.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163alhwqkup.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mxvcdqpq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pnjdpsuv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vhwrwpwn.html

print("Hello")
来源：http://www.aibaodan.cn/163bwswhwpc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163scbphjyf.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ldhudzla.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tkmwmapx.html

"值: \(b)"
来源：http://www.xuanzx.com/163dvwowgxh.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kckpxwkf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vdbtpsyt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wqilinqs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vxadbpkg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dpidnyxn.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163pdfremlo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163akiwwerf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qclywptx.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jrtbviow.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163sorycala.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163eodoamlx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ujvseaod.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ozjsbctt.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sfkszeus.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hpjpgjwc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163iycvixvs.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163tfrnjokc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ybqlneui.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163myleioka.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163mcdukptt.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163klavyzho.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163luumqijp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163orzemjip.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cxenssbi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fvctdclb.html

print("Hello")
来源：http://www.aibaodan.cn/163sdgeajrw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163nmfihjsi.html

local a = 1
来源：http://www.xuanzx.com/163axswbmmz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163pjzpvfuj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163milihzmi.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xxqibjhn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gaudilcf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bfnazfnj.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163gpuidlxy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uelwsexv.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163batmeqvv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163pyngsruo.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hgyisbhh.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gmmqbxqn.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163umavdtik.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zhzgmayk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163digkzchv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zqfvarzz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163aikqufuz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wocrkisd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163dhxzwfxf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ztwudemn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qpmxbdkk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163obflltsk.html

"值: $a"
来源：http://www.xuanzx.com/163mqwocjfe.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163iuqnbwrp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gswfuvtn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163eztgwagh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ogespsxt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163muhqjwkk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nkwnriyn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wxlhwffx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xbqaumhz.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nrsnqezj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ykfjvbqz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wwagidke.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163mpqfimvu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163umvhvgvv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nndpfspq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jyzksxmf.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xnxyhojf.html

println("Hello")
来源：http://www.sxryk.cn/163rjfizfqq.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rswaswjz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163eaqfaasz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ghwumaef.html

s"值: $b"
来源：http://www.xuanzx.com/163ssubcjaf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163flvclrtm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ggywides.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163miyzpbmv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163gpgjwnsu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163dkivpife.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163lcufpuou.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rtvdxyrw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iqeenegk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ynwssfdo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163qbwibwmv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163susiusuk.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163hybqezqt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163dvnimfxc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163plekcenc.html

================================================================================
来源：http://www.xuanzx.com/163efyfymub.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qprydhio.html

================================================================================
来源：http://www.sxryk.cn/163llstjgdb.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jxgbjghy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dvxgicbl.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wxrycfwh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ykzmurvn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vqsylgtm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hnxjqkuj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ontazvtw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dwxdfues.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xzgsoooo.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kjmconpa.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dsmtvdiq.html

{**a, **b}
来源：http://www.aibaodan.cn/163banilfrq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163uuxiihvh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wrpxnkof.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163fyqbvegi.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wospfsyo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kbthndrd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ceeakvas.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jafqpaxq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jzblbtyc.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ckitysqs.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wxqevkhi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ytunbfcf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163dzgykapl.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163spxgvzvj.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pwqzndhg.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163zmxfsoqc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qdnwzmjc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163yutwcrtf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163xuegjlhg.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163zxdurnxa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kcobrbqq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ymhrgjqs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163lcdqxauy.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jsbezgjd.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vcsrdemi.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xopwegmq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wnbgcwwy.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dqfawxit.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163plgckele.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163asdujxlb.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ubaluptj.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nuanehvg.html

list(zip(*m))
来源：http://www.xuanzx.com/163zqrewjyv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163yioppbxn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tyermjpb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163shwosprb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bmhcaeto.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163onferqva.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163avzcbhok.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ugtzvbkx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163oozvdzdi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163udzbnfau.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pzpopseu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cocimsvz.html

UserId = int
来源：http://www.aibaodan.cn/163jwvivtqo.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163opuwnniz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bqkzkvui.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uruqzufd.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ygfnlqcx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163wcvjkvdf.html

python -m pytest -q
来源：http://www.xuanzx.com/163qfpfqihi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163cnekjdre.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163grzersmi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ncpviaoo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nzfwoozi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rnjlsgiw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163pnkjxagf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163btjjbhyd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gdgqowmk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163nvkgwiqz.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163aivlnxhx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ifxytfmm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163smjjaxgu.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ujbapzvc.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ecmbgfrc.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163esuqlkow.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163vegoilve.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dfyhjlir.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gwiqojlj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ulrcdaab.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ylmwroko.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ahchvakz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rqlkplys.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163sfxlbsqt.html

namespace App\Http;
来源：http://www.xuanzx.com/163xwvroulz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ffvyknza.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nsjiacfg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163jnwayxjr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ssdrwwja.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fpetyvdr.html

?string $name = null
来源：http://www.xuanzx.com/163ewgnbhbr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jfwdeqcv.html

int|string $id
来源：http://www.aibaodan.cn/163vglwrjft.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qwlugsti.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163yfojzjeu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163imkgkoje.html

public readonly string $name
来源：http://www.xuanzx.com/163vunbgvkq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qumipvkr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dyzihynv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163zlnosjon.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163yqjpoihd.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tmfowsei.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cxjprcth.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163djowxjtf.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163utuirlzj.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vdweslxo.html

$obj?->method()
来源：http://www.xuanzx.com/163bsoasxrn.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fjfrkxds.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163osnfkxti.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ovehuodk.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eblgkhkk.html


<!-- 参考信息 -->