外链999!wailian999！

static int counter = 0;
来源：http://www.xuanzx.com/163jzdzmntl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qucgohpj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zeyhmanm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ohnalftp.html

#ifndef X_H
来源：http://www.xuanzx.com/163iqrvhbge.html

#define X_H
来源：http://www.sxryk.cn/163zufhghah.html

#endif
来源：http://www.aibaodan.cn/163hbsfvwaa.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xrzenehs.html

#include <iostream>
来源：http://www.sxryk.cn/163sagatjum.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163juswhjem.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gkuicdxi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nomcamkm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qwjfrsqn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dqegckzy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ktgephbz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ctctlapi.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ppvayrji.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vqtoxhpu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ovzbcfan.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sabyaxnj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vlfpesid.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ourxndug.html

[S38] C++：排序
来源：http://www.xuanzx.com/163nkxalhpd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rnudjrzo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163napppfze.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ablpojyu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163deknxnyz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163sfkoschc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163tjysfzbe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vbknwdwn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xuvxfqjx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ryxxunaw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ujnttqzh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tmpncbwg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vaqynsar.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lnhdbsga.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ljijnvkt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163umutcxgz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mdkcsuie.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sqsrjvpl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bjtzxnnq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163axucktti.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163renmwuhm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163jpwywlum.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wharpcpn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163fyysowmo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yoflresi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163kylnxrmo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163gfloopnj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kcnmssvx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163twxfqclc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163iwodxiuc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163otkkhgmc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yjzlidcu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tyykzqzb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cnhafhuk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vnhrxcbk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jyfcgijp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dwirfqps.html

[S56] C++：optional
来源：http://www.xuanzx.com/163czdokjsy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pghmbjrn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xfmgwduv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cfizcvsx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163szhmbgii.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163iivumxjo.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163puhyjlsr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xyjskglm.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hlurqrzn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bejbgzyk.html

================================================================================
来源：http://www.sxryk.cn/163gxgerbsp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jcvmfecc.html

================================================================================
来源：http://www.xuanzx.com/163rkynbvyx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wbrnrgop.html

println("Hello")
来源：http://www.xuanzx.com/163rddnxhhh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163jnlyzgnj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bwqqhesv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163aiedinhc.html

"值: $b"
来源：http://www.aibaodan.cn/163twghbpes.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tnojcfam.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163kpqorwgb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dimnnhed.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163mgywvdlc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163suemgkuj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163eyhcziym.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xpullkyg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163osusbhzc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mjmvmdht.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163asnqfkcb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pwblyudn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163pwqugdma.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163grfoaxrj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163whbcifrb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uyxaeniu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163awjzghru.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hrxkuuvk.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163thclikbt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163raownurw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163grvvugvl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vvcozhyb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163tmuldjdd.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sfhtltuo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163bfiwhllj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163oypbvxld.html

print("Hello")
来源：http://www.xuanzx.com/163gfubggqi.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dmgafruw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163dxodfnto.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qxgzksax.html

"值: \(b)"
来源：http://www.xuanzx.com/163qlgxcgmk.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mbvdtqza.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163mcweyvif.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kxybooxm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ktgjfhwi.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kxpzrcvt.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vzddifcj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163iejplpsl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dyfcjzyc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vvshseau.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163fanzlztn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tociaysm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wjzfxhje.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tehzokyg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cbaqrsmx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163kkgnjeop.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ywncfkgr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zctlkkxe.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163facbwkwg.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163lhjndmrs.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ipimekzf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163udmbbcqq.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163oqzxqtxx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163fwlfhgjt.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163pokxacri.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gmhejsrz.html

print("Hello")
来源：http://www.aibaodan.cn/163atxbmysb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163uavfgbvp.html

local a = 1
来源：http://www.aibaodan.cn/163pdoqagqd.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163loftqkzj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ugfvanmi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jruwfdsx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163hbysbczn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vyawjmao.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163oeujlhzb.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ojxflmpr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hlvngpaw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163igdasjqc.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bycfrcvo.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kmazbzyk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zytddghz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qchakamn.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163npkmjpaq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rnrvuvxu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163iorrceoi.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163sedvnsbn.html

print "Hello\n";
来源：http://www.xuanzx.com/163pucjnnhv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ijattgxk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163moqoqitc.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163svyldmqm.html

"值: $a"
来源：http://www.aibaodan.cn/163bdrdhvjh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163entmdsrm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jnbnvaok.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163efpotebj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163reuvczmg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zlalsbmg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163mttcuzxb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zpxqxvwm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xwbhclnk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163opqqybga.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163slgyclgn.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qlqamgtw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ntqkjyxo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163xawzjgic.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163tbcggrze.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163hsqavaid.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uinsminv.html

println("Hello")
来源：http://www.xuanzx.com/163hxhtnbeh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163odmfyofj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dpvuwivs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tkwkgwsj.html

s"值: $b"
来源：http://www.aibaodan.cn/163uwaiyqdt.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163huinyrzx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vgehouel.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163wogegvtg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163akukqdju.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163jkjvgfjt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163npfhgmmb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163bmdpsdxc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tkgcdfcb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163dboxqjjx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pglmkegx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ncpskpyb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zqqzygut.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tljzphqq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nzddoxdd.html

================================================================================
来源：http://www.aibaodan.cn/163ppzbjodk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nmcprldw.html

================================================================================
来源：http://www.aibaodan.cn/163gbcqpepj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lojpvlga.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ixwsafro.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zxxfxzvz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cppyzgef.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wfretymq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hmvwtdzu.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163trwimsnr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bgrqhsmo.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ixsumlxi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163iolscbyb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163paufxrbo.html

{**a, **b}
来源：http://www.aibaodan.cn/163zmpfmfnq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rzvzqfum.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163npakhylj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qtdlkuaa.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hakhhafe.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ezgipajc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lnforhes.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jvzawdqq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163fwxpnedy.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ylybpogq.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163jovfaepb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qclwtnkn.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nhopfddi.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163cpmpgecp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163pnrsrmxe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163sklrsgxj.html

defaultdict(list)
来源：http://www.xuanzx.com/163gtygmmuv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163mfzsgkuu.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163nkgpyyav.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163oddzrwhu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jvijkvpl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163rbytherc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163gnegmwwa.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163kqowdskq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163wulteojk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hvtpdivb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hhfhqgbz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tptnwmws.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163gpcursmr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163yrxocrvo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163wcyoutih.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163dbzalsuy.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uyuqqtzr.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ddokafvj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163uhhlhcqp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mrtpwooe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163dyvnqier.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ewpbhtix.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uukhitzs.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ldzeabjl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dqtahawh.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163oobgxewt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zdmpkzte.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163gopgzgtv.html

UserId = int
来源：http://www.xuanzx.com/163uwmgqpdy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163amjcaqmm.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nduzpuei.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ltlguewl.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163yapfvqzs.html

[U31] Py：单测
来源：http://www.sxryk.cn/163iixulcxc.html

python -m pytest -q
来源：http://www.sxryk.cn/163kzufdpzs.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163kpkvztra.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jtwdmlru.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163auaorloz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163yddtpxjx.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qnkwyccz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163usnwoqcv.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163evfknlmw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163iatqjsik.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jjlhtqym.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163zwmvwaxv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ecpfyute.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ijllotmk.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kqsbqdsy.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lzkymwiy.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163jbfcylil.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163usheonjh.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163udrkxmfb.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iggedfjs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ykemxjop.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163nverskxg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vzapufgy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qfdcmsid.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163mjrnmcod.html

namespace App\Http;
来源：http://www.sxryk.cn/163zzoskjkm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163wuttnrlm.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163srmmppnq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163pclwcfgp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163khwohwko.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163puhtbgyy.html

?string $name = null
来源：http://www.xuanzx.com/163ergoxfqq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ffmgitnh.html

int|string $id
来源：http://www.xuanzx.com/163frmcpmbp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163twknssio.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163rpducnei.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ketseoxp.html

public readonly string $name
来源：http://www.sxryk.cn/163dulciiew.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kafikmkn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163regtrgzu.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163inyrmzlg.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163kvcstodg.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163njljjrgd.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163bdcdvykx.html


<!-- 参考信息 -->