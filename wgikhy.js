外链999!wailian999！

#include <iostream>
来源：http://www.xuanzx.com/163izfxjqmt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163shwurvrx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163iyngyqff.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sgeaygjo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ztfuhdgi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lqpfxxoq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163csoefejv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vmrgpwng.html

[S35] C++：map
来源：http://www.xuanzx.com/163xpiqcabk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tzndsfma.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dthckxdu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nltrvdzu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zjxpljxs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163txceffxu.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163luftsljx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vuwaebgv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xopclvon.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163pepygppa.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nlcpwpgs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vtainllu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tiortgjt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163valftcbl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ywrqtizt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fksoxktn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163fuagxcqg.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eevudpgw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mkddkvoo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163amhzuext.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163adloelsl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uuexqlow.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tsfhohay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xixexemq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163takqyexy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163plxwhwgk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163khiplblm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163odvlyeyp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uubcdgsr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jbbpofbh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rwddfssn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qejcehjw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bkbkypaa.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163csgfpxsg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vijdekbo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163mtzbpjbq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nzendqfx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hdpsydsc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xaicwbpw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qvutratq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wljspwrq.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163edvaxzpk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163edzjcmtz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cdmwxlmt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163mvqxlerp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wxdjjfey.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bhsvpvbd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ovxfkeeb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xwwwolth.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ufmvzptn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163itcyjnzt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uiiujbvz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uaaswlqc.html

================================================================================
来源：http://www.sxryk.cn/163ncbxinnj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163oeuqwsst.html

================================================================================
来源：http://www.xuanzx.com/163nhbouoea.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ddcmgukz.html

println("Hello")
来源：http://www.sxryk.cn/163ibuuhavp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wiureliq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ryhjwowy.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163zgnqoxmy.html

"值: $b"
来源：http://www.xuanzx.com/163nkwjyeni.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vlyxymux.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163isznygbp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jhnnjooe.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uexookzo.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ehluzlgi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163psodaedg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vbyvecij.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163iezqxcjp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ljtbjyrf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hweuuoeg.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kfccmgzz.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vdkhhcif.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wznhcvvj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163llwybkji.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jjoffzrt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163isfdkakb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163rpwzlrgp.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bfmttzye.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163phlikcqs.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xdtadbuw.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pcwkghob.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163laqkamoq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163bjhoflbb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163oderwxwv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vlihwfha.html

print("Hello")
来源：http://www.sxryk.cn/163djrtcoyc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vltoqpcr.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hgwzmxkw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zykscxnf.html

"值: \(b)"
来源：http://www.xuanzx.com/163ogjpczbl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mslemprn.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163wrxinpck.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163okskxrsy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tludkder.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dfehmhnb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mjpgvvie.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bxkosopi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jazhglcf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163etlhcwmx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qifdvbzy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hyogehps.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wpibxbup.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163txwupfkg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163kylszsiv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qhjhmnif.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tnwbjvvc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163hdieyayf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163lnnkfkru.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uxwcovcg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sjskoing.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lirwaews.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163snsyucvy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163nfepjrji.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ejvbawcn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wmbykbry.html

print("Hello")
来源：http://www.xuanzx.com/163sjkcrwuy.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gewnplzs.html

local a = 1
来源：http://www.aibaodan.cn/163xihavgfe.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163kjbvvztk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ioxjixxj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163buqilzxh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fsbwzpzz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gspjxqfz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163njemeean.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wkukpsph.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rurobxgc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mjucaurr.html

"a" .. "b"
来源：http://www.sxryk.cn/163kjokpxvy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163odlnylxu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ckussvvc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mdcclhnl.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163kqekbvxa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qeabycuc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oxbqqgej.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wjzggkuz.html

print "Hello\n";
来源：http://www.xuanzx.com/163eqgwfinf.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163fbptwtne.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dewzkdaq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wdoetzxz.html

"值: $a"
来源：http://www.aibaodan.cn/163tkfyuojp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lngwkkws.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163zwnarrox.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163etfqgiot.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163boszebig.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163tmsuhdnd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163cptilwxa.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fyngckxe.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ilhncxbc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vgemtoyq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uxiwslfd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163iocekcbo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163omakracc.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163nvpkcysz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nljisych.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iawqdzgy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lbrjwbkv.html

println("Hello")
来源：http://www.xuanzx.com/163svszxdfp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yurvtccx.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tkcvydxj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163awdcaqxs.html

s"值: $b"
来源：http://www.sxryk.cn/163hlgbxibt.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xvfkrudn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gdqaspei.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tvaowqyu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163visihdbj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rvlfzxjv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163irdzewtu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163keuputxp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ihiblaca.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163nmbeztpg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sshnbbqm.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dahdossg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163yrymuoft.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nxqowqhp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qmhihrow.html

================================================================================
来源：http://www.aibaodan.cn/163lwcjtofi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163shbhhcls.html

================================================================================
来源：http://www.sxryk.cn/163vaqaajfu.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163payizdaj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163djfowiiq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vnyllszf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ssmyjzhl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vxplipvn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163bmmwkflx.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163jgithira.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ysuixjsk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163vpsygzxc.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163amwysfmo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jbzbkzjy.html

{**a, **b}
来源：http://www.xuanzx.com/163hspnmzyn.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ykvdcaeh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wiunycwx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163mlynsfqd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xehzniaq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163keneodiq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gcpbnlix.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yfhpobvo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163whyqwjjg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jwzsxyzx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ioxayurq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163rckhrnvn.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163xtaipumq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ldhevjmm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ioyrzxnd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163tywyrzjk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lwssljvd.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163dcjjhcmc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nqdudpap.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uzpxaezj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ofkmiwjm.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163jpnixmfn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163uandlrcm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fchcvkoo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fawpmmgb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fhntzacy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163xwxanyfw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tsbnjpli.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163adqcjcye.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163bnwrgjpf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ztzpcpgw.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mcmxlzzr.html

list(zip(*m))
来源：http://www.xuanzx.com/163dhpfpbyd.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163bprjjlpg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163oxtmnouo.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mgfeuriw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jekgfsps.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hnelxeao.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jkbjxwri.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ecbxkqoq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163xpvgvzto.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gebqfmem.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163teshreqd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163nwwhdbve.html

UserId = int
来源：http://www.aibaodan.cn/163wyoljxmb.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sdhulaun.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163puelalfl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163doqknibg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163elbpagjf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163bjzqmviu.html

python -m pytest -q
来源：http://www.sxryk.cn/163muqgxdgk.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vmjhatav.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163fnjbdxyg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163coxcjrhg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163psmqosta.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163yohcvmpw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163dtibrwji.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163rwgwubbh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163nxkifues.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163oftizrgj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163byootilw.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kjenpahs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163txmjkeku.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163rbkstdhl.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163eqpxgnre.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163lpnlazoc.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rvyomkam.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hchkjbmx.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iqqletaa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163kgvbycpu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163khcppvxe.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163lgcdkwjh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xajctflt.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163oiqskivp.html

namespace App\Http;
来源：http://www.sxryk.cn/163cnectxfg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163brictwig.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163fptrizhd.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ikbytpgx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eoytchsz.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163wpwgfwjy.html

?string $name = null
来源：http://www.aibaodan.cn/163jpvsnaib.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163nbebyncv.html

int|string $id
来源：http://www.xuanzx.com/163etvcwdpm.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163xyncdiyw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ljxgrloy.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vtorakup.html

public readonly string $name
来源：http://www.aibaodan.cn/163kcvxfqdt.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163thenrthn.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163izcafwjo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163dhxzjpfo.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163pcyylzes.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hmtgzqnc.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163gifcsnvu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zeupfwtj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163hiudqdjk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qafelaka.html

$obj?->method()
来源：http://www.sxryk.cn/163dfcpaezf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163airnyunu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163aupmaxhp.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ydxwwchx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ajxqkwhd.html


<!-- 参考信息 -->