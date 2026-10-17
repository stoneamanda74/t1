外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zmhzypeo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pzdxkilb.html

(double) a / b
来源：http://www.aibaodan.cn/163rvnwafih.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rngnkgyr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dcwpdozs.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163estmxzic.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163eugfzmlg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qjkmtwzu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vxxwkqzo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ahyqdycv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163thrjdjac.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gtjqtqyp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ntbrooly.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jbmdqjln.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163niciwfhj.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nkfdndmc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163trgjvaxf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aitsblvz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vgmkrati.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163wkehwpjb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163iufkarrt.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163swamfyyn.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163esvmllzx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hdpfdxbp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uvagqqdu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hwrgtxke.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163doponnjw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lxkrhzxg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tbfgaasw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hwkpspmk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qmsuewkg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163eqxfffgh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163itaxjihm.html

#define X_H
来源：http://www.sxryk.cn/163uuwtupir.html

#endif
来源：http://www.aibaodan.cn/163nqnokcgy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lazcepec.html

#include <iostream>
来源：http://www.sxryk.cn/163bhwkqufl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sqynzkpz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163khunfvrf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ocktiezk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hxcoqxct.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dnfeemtc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163odalycdi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xjlpvcqg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163olwrllew.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rqtagzlo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ofjyzeli.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163myjyzsuu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zexzbkbe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qoznkkgm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uyjrozxc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zwdhgojk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163izbpkjdk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mlqbhmku.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163boqabyof.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rcmxjumu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jmibtfkf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163nwrpunwm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rwzmfnpy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jdcwfrmr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wqajxzfl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fdktsydj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vxnmozjq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163irvqnkgj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ockuhebf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wcfuvmjc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163beerhptc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rivwqgua.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mywnvyue.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vfdehppt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163aonrlyne.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163krnhlbfc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zaptflrg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lgyuuuxt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163baixvjsx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vlbofewu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jmwxkpva.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zvkakzvg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jsfxhkxr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163oiixujzq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163embhjhfv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dydmecei.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xgmvomkw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dqergcng.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zxgsztlx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ewrlhyfy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qshwfanv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ggjybngv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163bkcmxgmx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yubbwjik.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163iolwvzfg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163eflymfnl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163cjhrdmbn.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kttanngn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tdgjmzgd.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mhgmfsoh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nlxivxwv.html

================================================================================
来源：http://www.xuanzx.com/163ykgcglmk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163dntpnjix.html

================================================================================
来源：http://www.xuanzx.com/163qxvaljzh.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163twptcaac.html

println("Hello")
来源：http://www.sxryk.cn/163uzmomrud.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163llqekxyk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xbwoxxpm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iacxxoon.html

"值: $b"
来源：http://www.xuanzx.com/163qzfzfszh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ehuuriwm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mobdppbf.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mlixspyw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163houwivsf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mbfgbiai.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gurrsusk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zdbsvlnr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ckgscafz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nhdonsze.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ainkarqu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ythpnmqw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vohhngng.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nllnduhi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163sekavrjk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vcaiwhzy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jixdbikv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ceutjfom.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163rymyhrbn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ozbkrbsx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lvoodvkg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163brsrcmuu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dyeyeizi.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163joqhuijj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kemxdjyi.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163cvvrwjnn.html

print("Hello")
来源：http://www.sxryk.cn/163ekvdscnp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vvxagqkz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ssgvqect.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163shhanlio.html

"值: \(b)"
来源：http://www.aibaodan.cn/163juyjismw.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ryootatg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tdeezmsw.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dvzflkfl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wkjlsjmf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lkozoafj.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pbhdmkmp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163trunuyim.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rzwghhzj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vafohaby.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ntygbjdl.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qgnejrou.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vqbjtfry.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tfjwlrko.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163twgvmqyj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163clxgcshx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gbzslfaw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gmxemkbh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vqbknsdm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nlbkxkvt.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163azaazjlw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dpppmguf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wovtrmyh.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gqljdhes.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kletsgiy.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gepapllc.html

print("Hello")
来源：http://www.sxryk.cn/163ccowxuit.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rkxhwbxy.html

local a = 1
来源：http://www.xuanzx.com/163tgoblocl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163jktbyvyr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163iubbjaef.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rjkeshiv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lkxvfwcn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mrfiavhl.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vbrwugbz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163bodbmvbx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ahpoygfw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hhepqocf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bwjunvsv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163maaktoju.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163oxhwiarv.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ntfwlpad.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163elcfmjqc.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163rjphdnjn.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ubhtwoyk.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qwiqrnbm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163kirkwcxc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wpsientm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163uvpvbkiu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rwjuojiy.html

"值: $a"
来源：http://www.sxryk.cn/163vyivneqg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163tntzkafa.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wpjljwck.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lduqxldx.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pkxovhpu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163yqmthuyv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kjxrpxqn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lgwtijye.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vfzgxisa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vicwxhlh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163aqbfongr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163boyatcvw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wucvqfxn.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qjzsjofs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lxbwraxp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163yymdrwnf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163izkflbql.html

println("Hello")
来源：http://www.sxryk.cn/163rgqndxhg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ponzinul.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gvobdfur.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vpsxkzqb.html

s"值: $b"
来源：http://www.sxryk.cn/163woljxpqi.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gntvunis.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wmcnczoq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ceeedwwb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163knfpbcnq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163nmtmmucm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ibyxvzfu.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gwxbwtzy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163dugntamh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163texrpjjc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163aqzhdmss.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vynnqflm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163txkgyrso.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kstuzkgg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163eeoselbj.html

================================================================================
来源：http://www.aibaodan.cn/163lbywswyv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fhezgybh.html

================================================================================
来源：http://www.sxryk.cn/163iwutabrm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163einzzcch.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163higmspqx.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163dxejplyt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163hhdphicd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163gsgriynz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ikeyrirh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163iupespjw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hedidpmu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bqurvzwl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163diodeixq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rzlcbjbf.html

{**a, **b}
来源：http://www.xuanzx.com/163nxfsbejj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fprxdnjc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163uszgclco.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qmrtlpxu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163jnhcymkb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rnnodfrw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rwapqylv.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163deirhnar.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163meboenoz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vtdttyju.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163bjrbasyi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jprtnfgx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fpycokdn.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163upkentvt.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163iokrlsiu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163pmjkgjeb.html

defaultdict(list)
来源：http://www.xuanzx.com/163xjqcwhmp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nzjebzhe.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ujsksmqp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163rrvlgmpz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163pgxwquxb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wscgbqoy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163dmtacoli.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nhdswasf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pgjxuprg.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pyhhffxv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163qzjjyvgg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163srsjtpca.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163sefylepe.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dpghtxqi.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uyqlblts.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zkqpvlqo.html

list(zip(*m))
来源：http://www.sxryk.cn/163fdeypiqt.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mtwomizo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163cwkqyxtu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zppeomku.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163drtgrqev.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wmfvkzpa.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163jotjphld.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163afdvjvwc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163guwsmzmm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vjqkgsbg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ymmvydsw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jqlhvvta.html

UserId = int
来源：http://www.xuanzx.com/163mbcwdwlj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gwsnpssv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163oqyftafy.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163irpejbjm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oisvimep.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kildandw.html

python -m pytest -q
来源：http://www.xuanzx.com/163yugqrivm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rwsbrcbw.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163rnlocbxn.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163qfisjlvf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jhhlmggd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wcdhgdaf.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ztasvnsk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163pwgthsqj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163txikpurw.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163noeoblnu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nevdxagg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wdslawfd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163riilkxhf.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163okcjhwuw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pmceanul.html


<!-- 参考信息 -->