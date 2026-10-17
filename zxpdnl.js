外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163unwenuea.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mnjnmkrv.html

fclose(f);
来源：http://www.sxryk.cn/163cybrshte.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rwrxusoq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163bmtupbnd.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uvvyaaoz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lvajjnsu.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vnxzxyiq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mpqayfoa.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ajqlgsvn.html

(double) a / b
来源：http://www.sxryk.cn/163hnrsvyvm.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gtntuuxo.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vwdgmhrw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jccwkexf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lphuzegv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kcjneiyb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163odlvpokp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hatjslvw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qtobzzrc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jzhnwevl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nwqrsnez.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ppvhhcyq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163sojjzphx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fttakzhg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lhkosupi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zdmkzagw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ligdivtk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dggftyvm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ckgdixzl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163htqakcmk.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vztcjmgo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cabbahvh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bfwydicz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ijzwsbkd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163urcfungl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ahmphbrh.html

static int counter = 0;
来源：http://www.xuanzx.com/163rhdascai.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uykfqesg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163bkjtrfba.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qcjzvqtw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163kswbyjew.html

#define X_H
来源：http://www.sxryk.cn/163kyibjogg.html

#endif
来源：http://www.sxryk.cn/163doywycwa.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163izldeuzu.html

#include <iostream>
来源：http://www.sxryk.cn/163pbzcdbvc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gieazgsb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ckapsfxh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ifgepmqj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163yzjuldqx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163cpiwbdho.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163taxlswpw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ksqbfqht.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nihfjbzn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163toatjssn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ldfmpjoh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163grobwygp.html

[S37] C++：set
来源：http://www.sxryk.cn/163rzutpsel.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fbjzylyb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bjvxoloi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jzpndtax.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kzadedmo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kwtuwdfm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vqdfmtit.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fuxwnrtr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hsqhezut.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pyulikju.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bmeuzfkl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fbapnfnq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rzysuhyz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ekpjcpci.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163chgxedhd.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ljhnfexd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163unuhibph.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dwedhkqt.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163rhudwpxy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163sjqmxzbr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bbgtnmds.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163njvydvct.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fvjlwrnk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163pybrwzmh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ekqmutur.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163swrljmqb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ahqasejt.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163txjuhvfx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dkqqnazn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xswmuoti.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tyzsgrcm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cciouyha.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zwvwywpn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gxxwrnuz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xnvdvbcl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pyiwumpk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gcdcgryz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vdfcmqzx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vljbcqtr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tfeiicia.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lfqladry.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ctmgnawh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cxcamrtu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bhqefbgd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sbnlqihb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sczrijuj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gmqbdikz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163cugrkqff.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ltesiwfj.html

================================================================================
来源：http://www.xuanzx.com/163iydmddmx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uxdtkqlo.html

================================================================================
来源：http://www.aibaodan.cn/163qfpgqast.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163txcderxc.html

println("Hello")
来源：http://www.sxryk.cn/163cnhoaqyv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wgmjitwo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lftesyqc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nnbtjztf.html

"值: $b"
来源：http://www.xuanzx.com/163xrwierrt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wdbyyhgs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bdzfzizs.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gsjpxzps.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163crgglwvu.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cszbggnw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gggxpipv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163inoglbyd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163schtxxdp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cblmnafe.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163aylibwnh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163npdetzbk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mfcuvmio.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163meeicghf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rfwlimqp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dtxvexpi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163aejsfdfv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ysqbfokh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163arqctjyp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bvmpdtcf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fuspmbzm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163vdvycybr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163judyasem.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yggrjwcd.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163uybftrte.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163pzynuuab.html

print("Hello")
来源：http://www.sxryk.cn/163zaiigays.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163oalgqqea.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163skgruqrj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hihpamyj.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yvkpsynt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163paldnykt.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ctlbvbst.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163uzyhgflg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qqaabegd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ygjqcdkx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rsxcvqeu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163yozxywpq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163osrafmud.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163uxgkbaki.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pojydkhz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kiscrhho.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163fnpwthee.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mbnjrrlf.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163fkrpnpmd.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ejmcslsw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rirnsxka.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wrsqiqsa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vfdwtpze.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cjsgljrv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ojfxgacm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163nqjurjlz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mthaiwbc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bezuiplh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163rgtfmtkc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163uhcauhae.html

print("Hello")
来源：http://www.sxryk.cn/163pxnycjvu.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mngueubn.html

local a = 1
来源：http://www.sxryk.cn/163tlsstjmv.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163bcgmyydz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dfmtumfn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ctneyavq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fvilaxep.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163avqvdpwe.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jhscuynm.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vimomdpx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xgargfbf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163kdopcmyq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jozcjova.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hrmwojna.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jveuaxbp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163oqldkplj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163nxodafhw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pjrzhduy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qsngwjiq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163lmcuqpqu.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ubcwzigt.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zkvyqhpf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163onsciwxm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jksxrytz.html

"值: $a"
来源：http://www.aibaodan.cn/163qhdahqlj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xnkyftge.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qweqosaj.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zlhtxmuc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163jyahynap.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gvqtsvic.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uanqvaug.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ukxlgiqd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nvgqysce.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163gnfdpyfw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163aejaooxe.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qpnzemur.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163jugxwutj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163bewdcxqi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mrvcdcxu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dmgghnze.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ludlwmfr.html

println("Hello")
来源：http://www.aibaodan.cn/163vrhvpolj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163knvuemft.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bdbcoawx.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sfhfwygt.html

s"值: $b"
来源：http://www.sxryk.cn/163amydwups.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gqbqdeop.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163sukisnyg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nzmewtyl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xakosrof.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zsewbzoy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ermofqft.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rizaovpa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bitudvyw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wyckofgi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yxncfiua.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rlclukhj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zpgkurpw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163hhtihdlx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wqlgmypc.html

================================================================================
来源：http://www.sxryk.cn/163eupuvjlt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qkemopnr.html

================================================================================
来源：http://www.aibaodan.cn/163vthxskaw.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ssoyhmew.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163saysxbwc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163pycwyaqq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zkotsmuc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163exxiwxla.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163wmhvayny.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ysnplwtv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wlanwjno.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wzszplzv.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163urazevty.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fucskizl.html

{**a, **b}
来源：http://www.xuanzx.com/163ppqhsqwe.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163titfrzzt.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163axrpcwzd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vurqzpjl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bpefqblm.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163degpebbb.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163cymqzjgq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hopcumml.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ssdzaowk.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cmjnxxro.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163jqxreszf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163sesqbgrh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fvyfaewj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163spnxsmta.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163eddqdwbv.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163sbzdpeil.html

defaultdict(list)
来源：http://www.xuanzx.com/163iaanxhti.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qxycqota.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dngjixgh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dotsfedq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163gjebttud.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163eojuqmss.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163krudygbi.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yxijvtnf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ievlirvv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pluralqx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163prgeenax.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163fvaomkhz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163yhhvqxre.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lvtsvvnq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163onupldto.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pdxtlblc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uhyovxgv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qauznibr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ndviwnat.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gqwlsiuk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sffzyrwi.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163bovolqqh.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163yipytkri.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163neuhrhki.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vbdcbtsn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163cvpzglzl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tbnwstmb.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jlmbpskt.html

UserId = int
来源：http://www.aibaodan.cn/163fetwtxfd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cnvvffnf.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163fxaczsfg.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fankdruy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mtchpggi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163jxelnjjx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163eaynfsko.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tgrszbyu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163sncpaztk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163qagfqjdg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163aunogweg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rcnrpxbc.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163tshcyhuu.html


<!-- 参考信息 -->