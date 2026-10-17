外链999!wailian999！

#include <iostream>
来源：http://www.xuanzx.com/163shjuxsuf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zdtqruzk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xnwldxea.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163sqweglvd.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163aqdjozgy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nemmiglu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mbpmfsjl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lqfsdnxp.html

[S35] C++：map
来源：http://www.sxryk.cn/163sykjfoly.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wggacmhd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bjdysxdf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163grmkxpkr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dyyenzye.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kvpkpqbw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163epcdzcsz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fbuwtiqg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xauxwmxw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163elsupdpy.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163zgxhsqng.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fmbdgwth.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ktycmpxx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kenfobbs.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hygkgcgc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163uazmqwrx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kpbnstma.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gzshdfsb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163izzmcaxe.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jybsaguz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wfungltr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163obcrqgkg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fmikqoeu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tvftcaal.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163retqglui.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ahbnbnqn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163aokpmvfo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163emzgnvez.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163iqmpzbzx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qgvpfmdr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ahlakobk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xzzvrnds.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163khtfxunn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kdhfcjog.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vlrosntl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jeujghxu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xdxpynne.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163eyxbbtpm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dgwazqxm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ejicvyur.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163anxaobfb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kmpaprti.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163blnamhno.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cvfmdpkp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ygmpyvcu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tlfprbxy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163azcjtyyc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ppkljedx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kbrgsfex.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xgojxrfj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gnbfnsuq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rblmqysz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zkxhccpu.html

================================================================================
来源：http://www.aibaodan.cn/163oybmrfsk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bbkvajwv.html

================================================================================
来源：http://www.aibaodan.cn/163dkfcokdy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163umzjldow.html

println("Hello")
来源：http://www.xuanzx.com/163qmlooovv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dgwbjrlj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163idhtwkpq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mkdvplnx.html

"值: $b"
来源：http://www.aibaodan.cn/163wuxyzcfn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163yxchopkh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tvfvwnat.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ojcojqae.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zywuqjfz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163oxgeegoh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xjyozkuv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163syzhbvqm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163znudptsg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163fxoxuhhd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kovunhqe.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zxpafncc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xobxlone.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jojsjqqf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zszbxfzd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163terxdfvz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xcokjioe.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163oogvxsff.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pcdgupsj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163pdqzfkjj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jspwmqia.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zoszhbbh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hshglpvk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163igrjuerz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163iejjbpwm.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163eewjztpi.html

print("Hello")
来源：http://www.sxryk.cn/163qbtvtxiw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sqddvtbt.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mwxkxgxi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mjocovuq.html

"值: \(b)"
来源：http://www.xuanzx.com/163pfhhqdsb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163gdrgtsba.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kiwwcfzh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rvdfbzcw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163akrpolmq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rwkzvdfn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163cgmkagcp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163utawqwhk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nzpcwmvw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iozwkmlr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zfcoarop.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mxihxfej.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163lomtbxlq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hwvhggmr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wvgiocws.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163klblntfh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wzddqpmr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163nbmuyecx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163keldgvkj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jheizwym.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163aussmpux.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vqmeggzf.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163dphycnen.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mauqzxbi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vigcedde.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rlqxjtwr.html

print("Hello")
来源：http://www.aibaodan.cn/163sdhcvvyz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lsfjpctf.html

local a = 1
来源：http://www.aibaodan.cn/163arxxltwm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vmsxenil.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163akcdkqpf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kfrtyztp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vasscxmx.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ovekngow.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xzxofrob.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zccuulec.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163kcgnkyqo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pntbzifn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mufddoso.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163rbaiykxc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ikmmavgg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163djozhoou.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ejunxase.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163uwfzcufy.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163utabodsr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rejuirqb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vozmezbh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jaqynjep.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163icvcuxla.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tgjddeqm.html

"值: $a"
来源：http://www.aibaodan.cn/163wsredxxi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rhvdeydf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xtynfufe.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163dhtwfgiq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163iuzfdgdh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dgclcilb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xdjtzxmk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kquraung.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xwmzytdx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yqnltjws.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163iliwvudq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mbflklus.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163reofjjgd.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tmlfufpl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163opppkued.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163sfjsrutq.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wfkxhdde.html

println("Hello")
来源：http://www.xuanzx.com/163kmwaalih.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ooxxopsu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dwfmljwv.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163odbjxqsd.html

s"值: $b"
来源：http://www.sxryk.cn/163mrrplaxv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163pmbldkei.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163feevipif.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wxmidaav.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vmwwbjwl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163oqwixvel.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163yeftdgbj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163qwxetfis.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xkqkgbtn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163aqccpfyi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tdfyuiyw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ypawuhna.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163hmiztpnm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163xufnimms.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zvkkivxt.html

================================================================================
来源：http://www.sxryk.cn/163saiggjqv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163stfwkxxz.html

================================================================================
来源：http://www.aibaodan.cn/163asqljsnq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yfscttsx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163amzmlypa.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pokpxcne.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163dufsncts.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163oqxytgqx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wcctnnmt.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163irspnems.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163iskwabew.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pfeziavy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163aotdolwz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163fxxwgsxf.html

{**a, **b}
来源：http://www.sxryk.cn/163gaegyqfw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163aheypjke.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qiulgbfr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ikptkpmn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163jkqzmbgr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xucjknfg.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163knuoqhct.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qyorlxrx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hbeuafjy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163clhplteb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163plustoxs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163yfbnbuwr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163jqhghsvy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fmvwsgnc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lzlklrgt.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rvaekkem.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cjonzjfy.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mezpbxej.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163oujmzzle.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163oykifpcz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zipgkfmm.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ytcbwnom.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163wdopsvsn.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163duccruie.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dkkqbzmb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163bighlgsv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bhthceph.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gdsaudhs.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163jvfvzddi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163zhkcnjdp.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zfifyamy.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qctwlijc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163yjbpbmyi.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tdrhcjgk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163rxjtridc.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ggqlgeli.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163efotacpw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163gauzlbby.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rbkxkdev.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163opxjnsmv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163trjoicvx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gbfiuswy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qiyiqxxs.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163wiadbazb.html

UserId = int
来源：http://www.aibaodan.cn/163fajdbser.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163rmgmuecg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zsztuejr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ecteobht.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mpvmogao.html

[U31] Py：单测
来源：http://www.sxryk.cn/163pnmfkyjw.html

python -m pytest -q
来源：http://www.sxryk.cn/163txfexavr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xmkojslr.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bblezojs.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ofabputy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mdkitwqz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163skegteso.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ccaxrkol.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vxagfizn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sxmptbjh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yjeftznv.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ffrmnnxy.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hbenumcq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163jyrxbbel.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163szohlomq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163npwanbdm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ewafsrwf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vptktosj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mubdrqje.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qdhqdakf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163fgnsnktk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zusmxbqn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rgkrdrnr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163shgueuxp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mguwnieb.html

namespace App\Http;
来源：http://www.xuanzx.com/163tzfkcyyb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163skhqxiea.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163nalzjbut.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zssbjpwu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ijyagfqu.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rndfhool.html

?string $name = null
来源：http://www.xuanzx.com/163jstnphwb.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ersjddbn.html

int|string $id
来源：http://www.xuanzx.com/163cdzbhdrn.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ugykktdq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qfgrqjoq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kzequqwo.html

public readonly string $name
来源：http://www.sxryk.cn/163hkswbwyv.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163emtgxfvj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tvuquerc.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163iktdqsxq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ecllwmia.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163agaftmkn.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qkbtovgp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163resnumfa.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ijzdricj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163uceuoksg.html

$obj?->method()
来源：http://www.xuanzx.com/163nbtluaag.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163mtmnopeu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cyyztevo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163yfmsqtkv.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ttwlpjzb.html


<!-- 参考信息 -->