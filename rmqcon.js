外链999!wailian999！

#ifndef X_H
来源：http://www.aibaodan.cn/163owenqoax.html

#define X_H
来源：http://www.xuanzx.com/163jyuitczy.html

#endif
来源：http://www.xuanzx.com/163cvuwxiyv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163frmjprhb.html

#include <iostream>
来源：http://www.sxryk.cn/163mdptupmt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rfcdqiyl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vbagvsjr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wuxxngjv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bckvjssm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dwtaslrf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hwmjvrid.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163thpkvyum.html

[S35] C++：map
来源：http://www.sxryk.cn/163jxhjuaci.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163omwdyjur.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163nlzvapyr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hlsvortw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tpuchqqf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163pdszcnrl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163maqnclev.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sgcmgtyu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yqlhzhrg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gibbvjzr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163izfcjokp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cszquphr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rqqkxwnv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kyegbnab.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163tkqoryyu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zemzvrlp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bjltzwdn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vyeizmgr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dsykhvxa.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kfjwzerl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ccbjqgvf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kdkflbco.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163kkmzdpwt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xnqmgsgb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ednpvjen.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dptiqlho.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mnmxsofr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ybuchnvv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ddyjilue.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163dgsfbibm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vckjmned.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vyhfindr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dkwyhgrg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tlcrqnvd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kzuismfl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qrcnpjfr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163nwfjxwww.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zrysjvyp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163luqwuvqh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kyraisny.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163oqnmlffk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fjgslqre.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163idishswa.html

[S56] C++：optional
来源：http://www.xuanzx.com/163emojipcq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163joawnrod.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163naipvtrq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163urvyrucd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163slduovex.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xphnzppr.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ziyzsqmt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ztxjllgv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ywsllhvj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qrfvuhvf.html

================================================================================
来源：http://www.aibaodan.cn/163cqtpvesr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cbhocxmf.html

================================================================================
来源：http://www.sxryk.cn/163vjnxwpbh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qaiybpum.html

println("Hello")
来源：http://www.sxryk.cn/163lxfmiwqo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163onqbgeai.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163tnmudixg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163utukzoug.html

"值: $b"
来源：http://www.aibaodan.cn/163fdhkvuik.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zmbecttm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ppiyrzlr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gtambhri.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xgwyivxh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uwtqudtb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ytuwfkdr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163apqkhcwa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zprvayna.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gmxqalge.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uroanryd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163yzinvxkb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wdilgkpv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ljcrtkph.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163uzvmntbf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dvtcmrdt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vedbpyiw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bkrxvupw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sxxsxyky.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jbsmxywv.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nbtkmoys.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163gtsxhgkn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lwdoyyyo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uytckajv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163twrakhue.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dbblerhm.html

print("Hello")
来源：http://www.sxryk.cn/163yanlhxxy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mcacwfax.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vvpsmlcu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bbvdrbjo.html

"值: \(b)"
来源：http://www.sxryk.cn/163dstbrkva.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dyjsijjs.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qcvptvfy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dmdcfljh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xdwlutgw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163klbmpkfk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ohquskkn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lwnfpnff.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163gstrgsth.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zkmmkqti.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lxfqxeps.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163sdnxhxiq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rtgdijqn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163uzegmruk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jkpnpion.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ynoxfbiv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uxfosdjl.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vrkqlrvb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ehbkylpz.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ftqyhgqm.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163isnkdpde.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163etphhqiq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pbfacnmc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ufycmnuw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qdwzbulx.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163szosezwd.html

print("Hello")
来源：http://www.sxryk.cn/163jbisogay.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rabotnhe.html

local a = 1
来源：http://www.sxryk.cn/163qyrziqtd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163hzscdveg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hbyrtfwl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163iwbxslfi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hhnlpawk.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vtkkijin.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uibiwqkh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rmcaihni.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fbvlofvl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163lghjcrcq.html

"a" .. "b"
来源：http://www.sxryk.cn/163zqxayyps.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pgjqgimd.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hbiguczf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163dxpuyndg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163uxmeddah.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163sczfcmes.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hhsudefx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tmkgwepi.html

print "Hello\n";
来源：http://www.xuanzx.com/163igudgufm.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163vgzddemp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163fbyawkrg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jvzjszid.html

"值: $a"
来源：http://www.sxryk.cn/163dbdqacrb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dojlootk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qrcjlmvl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wyoqtcdc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163voonziqy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bzmiuqxe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lwhtchsa.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ktxgxhlr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hmfakwov.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yzugsueq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ynoticai.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rzaqqsie.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hmvfsmau.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qvgajmfw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163slwxkzpv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tpgzjflf.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qjvqthps.html

println("Hello")
来源：http://www.xuanzx.com/163gpycuhow.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163oiqtpcms.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tctciepf.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lajllqse.html

s"值: $b"
来源：http://www.sxryk.cn/163bfsmyrli.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jcjzbuke.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163qpbxzmnd.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163jhhevezm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mevuaufj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163elfglabt.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ngmevvhq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uryhqeej.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ftwfzfut.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mfedyvmc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vchwoads.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163mfehtoad.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163wmgdrhle.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163eljfkoax.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uajworkh.html

================================================================================
来源：http://www.aibaodan.cn/163ihpctnhd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pcknrogj.html

================================================================================
来源：http://www.aibaodan.cn/163cyndhdmx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ysewoevm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163kwnjsuve.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163lsldzdoj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163hsdldaxk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ltoveyuu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fcukluud.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nvhrtugl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fspfreid.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wwjfexfz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qzgeqonh.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163aneuhdpx.html

{**a, **b}
来源：http://www.aibaodan.cn/163ibfjftlh.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xiwcyetx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bkujmhdl.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163diuweuzl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163vxuinrlo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tfntldmt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163reqvmftg.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163lipystap.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rgfrdjuo.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ysmssrew.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pkceftcm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163prfutszc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163nylnnyey.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163wgmsfxkj.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lorpwbwe.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gmseuxvl.html

defaultdict(list)
来源：http://www.sxryk.cn/163dfsmigpb.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tekqgphm.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163rolngntr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163tuhrzsxl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ybysscft.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163oqbcephx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tmsumqol.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163cjesshwj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wgrphqma.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nddsgslz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ubeicpkp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qjqxsnai.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lyypordp.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yywzxfyh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nhrttvor.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163rwupunyt.html

list(zip(*m))
来源：http://www.xuanzx.com/163loiqttek.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163tlocavmw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wvocpevs.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163drqvplrt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163tcmljkiy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163awmzitaz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sivnvgji.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yqugluek.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163amaxdgia.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dsjaypzi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pduhdvzo.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lcaqfjvv.html

UserId = int
来源：http://www.aibaodan.cn/163kwycaqzq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zqeiitmu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163bwqbpnjz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163qdfpxrnu.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163iupqslvy.html

[U31] Py：单测
来源：http://www.sxryk.cn/163muhmmfac.html

python -m pytest -q
来源：http://www.xuanzx.com/163ajxzedou.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zmilmeio.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163lvjylbep.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163gwfldanh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bgbryvuu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163cfidaxuy.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163orvcetaf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163eljgihss.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bwdulzlp.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qmrohlfc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ajzfxzrk.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wtvtktgw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163begdkjko.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jfcyfosp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ucrwzbgy.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163nyidvjqm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163aadgoyzs.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hrpkjcgk.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163omgvpyby.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163znmabxha.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qiqaaoxt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163oxmkcoai.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hcjbkacl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ypejizdg.html

namespace App\Http;
来源：http://www.sxryk.cn/163vozinlcs.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hwzupccw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zeyzntid.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163nhnwsbss.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kpooqpxy.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mrjjbano.html

?string $name = null
来源：http://www.sxryk.cn/163xmvtnudh.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163shtlyxkp.html

int|string $id
来源：http://www.aibaodan.cn/163gbiglgei.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163aqncpzlk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bqahybix.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163sqvwznzz.html

public readonly string $name
来源：http://www.aibaodan.cn/163wbponpzi.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nnodgsze.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ocvgbasm.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163essunpbq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163linelwwr.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zsztlhmi.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163gayidwqx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qsuoukfz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163eoajuifb.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xbcqxagf.html

$obj?->method()
来源：http://www.sxryk.cn/163kqhvacpt.html


<!-- 参考信息 -->