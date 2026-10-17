外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wxzpjxxm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tfdqcwix.html

(double) a / b
来源：http://www.aibaodan.cn/163cxwnpjrw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163omzauqgs.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163yyoejodd.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ccopjbxv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163naqyfsgs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tkgakfda.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163byoqsmsd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163mluaixip.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kzqhntxt.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163pvmtpzfr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sveaijky.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pqzdzrgx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mdoeytvl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163cjgrjsar.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ocwqujjx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yjlobbui.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163slbitmmk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vbdtzddn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rdqpeenl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jxkqnsli.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rpruiyal.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gvipktam.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dnqtevel.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nafpoxfi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bsicedtf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bsuwhiai.html

static int counter = 0;
来源：http://www.sxryk.cn/163rchkzxrg.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fmkcyslu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jhwbtums.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163gzxvnfmi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wnjmfoul.html

#define X_H
来源：http://www.sxryk.cn/163xaqsursa.html

#endif
来源：http://www.aibaodan.cn/163erjeavpt.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lohgnapv.html

#include <iostream>
来源：http://www.aibaodan.cn/163jipwyksm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zuxydqmp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163efxesiqb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qikvfxlh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tyuildbc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jqatlylv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cwnoqlwa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fefflnyo.html

[S35] C++：map
来源：http://www.xuanzx.com/163ntzfabri.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ldpnaeux.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jmuhlqxk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163waorvdzw.html

[S37] C++：set
来源：http://www.xuanzx.com/163kpkydqow.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bgmitqrs.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fvyjlgkh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xxcxbcgf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163crsbodhs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163cihhgewn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jgczfueq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163odsmpaxl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163cbimyeln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zlpzkmsi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jgkaxkvd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ihdkdnux.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ltzvycll.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163djxgtiiw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163rqcqjgta.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vipomeog.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cfmkxfyr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cfznsqdy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ymejflcq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fdvrxuyk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jamexube.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ztmlsjut.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rsnqqbvc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tdqehpak.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vwjctrdk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kluguwqj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163btrafrah.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gylkxkpp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wqztcpvb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qnleccnq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rrigozfl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ehtxxspu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163krzwzdtt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kwlybejr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bigdtmcq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163meisiuls.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jxyakgtr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xgxlakyy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163aopgpzfv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dpdqwnro.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ckcogpzu.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163smghbzax.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jtivgiwz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mdeohhrr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163butaeskx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hfnoaytx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zxvbochn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163tlpeupuq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zrebdoub.html

================================================================================
来源：http://www.xuanzx.com/163jrdtioub.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163epdghiik.html

================================================================================
来源：http://www.xuanzx.com/163pvdzjrkx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163lccyvkmc.html

println("Hello")
来源：http://www.aibaodan.cn/163kberotef.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163olefyxai.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vsujyham.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wfhyfsrs.html

"值: $b"
来源：http://www.sxryk.cn/163sfiomchi.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tjtetyfs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163npiwdlil.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ljvrwtyd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bpvgzdtl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ialsweee.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xnbokxom.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163duhzgphc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qnikygeo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qzhkhmzk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kvtprpcs.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163volayftd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163gukggsrp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wdahhedm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163glkujgdh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cgpuxnhh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ffrhlnbw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kjeztowh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tshjnexe.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uvirriiw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gicfxbgt.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vzkhsnub.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163gwzsizzs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yqtajycp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163cqhjgnry.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hwcxfyyk.html

print("Hello")
来源：http://www.aibaodan.cn/163ndfkjppq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cbipfgef.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qowtzrra.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xbnltjad.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yqdphnwx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163guhpmisd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163twfvvrty.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fxbwmnwk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mzdgrrim.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jltpzxbe.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dtlvbjoc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ckuwxofb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kyhbzcfe.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kakhuojd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163whuylkzq.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zushwugq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pafpeael.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bxvlgncq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ewgwcypw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hczwgsfa.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163xluejbyj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163skoqqsds.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wnhxbefv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jrywusvh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gvetzhxs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xoguemxo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bztbodno.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163slkdhjsq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cxhfzmgm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163oldmfxhp.html

print("Hello")
来源：http://www.xuanzx.com/163niqeigpg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ofnqzqux.html

local a = 1
来源：http://www.aibaodan.cn/163dxvtddhi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uspikmyz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ofwsdbcj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lccxakfz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gwmpcskb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mqrpqtgh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163sjqjrwpc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163pplwkeme.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iqknvkru.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tlxvhuvn.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wdalqxkd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163isxrwozo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163iluyapsx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163eyyudvip.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163agmrznki.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ahoeeflz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163rvltravz.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rmgvxoqd.html

print "Hello\n";
来源：http://www.sxryk.cn/163fffkhbbc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163itdximsm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163gaddohgs.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jpeefxbs.html

"值: $a"
来源：http://www.aibaodan.cn/163lngpoerv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ldzuyixk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163nozxfpgd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163uhfrfxic.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mtiordhm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163myuygdph.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kxbzpslh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163frntdxyi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163cxmbaddn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zviqezwz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163fntmxeph.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ogulazsh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ytidfmcf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163shqqwmfx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163qxqouelj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rcnldbbm.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tvybznfg.html

println("Hello")
来源：http://www.xuanzx.com/163dfwjuaog.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163txlrdzro.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ltvgrbgw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ffbgdlzo.html

s"值: $b"
来源：http://www.xuanzx.com/163ikekpplm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wkeffplh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163sbqlhyus.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163czhyoyes.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lfxauecl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mhpfpoex.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zhfqizle.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gtldtlwo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pswescnh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163oxfroszj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qjrjxhya.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qdtqrmat.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kwggvoed.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hcztkrgv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wknkxstn.html

================================================================================
来源：http://www.aibaodan.cn/163vzlledag.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tbivudug.html

================================================================================
来源：http://www.xuanzx.com/163pcyerczw.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zjdshahm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zhiewewr.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ecwqijsu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163kwxkuryf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ysnialdo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cvxclkaq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163pxgouhfc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163butuvcho.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163cvwzmsde.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163apgqhuoq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163sjecpowj.html

{**a, **b}
来源：http://www.sxryk.cn/163gwumvtyh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mqwoctdk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163zpwdxdsx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jygvxfkb.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rbsvcsjl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163roasbawh.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163buoxwyod.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mhkbrlkl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163apbfbdch.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163upscovhf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163mojsuknv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163lgwxgddm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pawcnxlg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163gfhkehyz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163piktdfwm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163qhcorbtz.html

defaultdict(list)
来源：http://www.xuanzx.com/163wxvvrkof.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vlvnttyw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nhwroakr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163uvnmbvyc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163tgwhqxkp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pfemvlod.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ncpoxxvq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163plyzqdqi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mdprolgk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163brqfjrby.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163smvtmiuq.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cgjzzbbe.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163pcpygnrg.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163rpargqzi.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zrttuzqw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163eivenuqu.html

list(zip(*m))
来源：http://www.sxryk.cn/163llxbsjqm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163rngruypy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xaghvmkv.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163whngmlra.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163fbkpilaa.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163nmesdrce.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mdckpxez.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wtcsmist.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163irxxnlsp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xmywhvty.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lrrvwsqt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163bimtfksv.html

UserId = int
来源：http://www.sxryk.cn/163rryioozt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kmlonmvv.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163rqzjbsqp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163mkjyxejf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tvcckhsi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163fgnjkcie.html

python -m pytest -q
来源：http://www.sxryk.cn/163tktczggh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163iauuetgt.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163dgxtdvkf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dpncizdn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163txyqfibe.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163mvwpvxvo.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jzmpjsxc.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163oqvkhgtm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ljjqdltt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fgelgcnx.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cdbzpqyc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163srmurmuq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163edjumdlv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ujlkqjnp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163kesphdie.html


<!-- 参考信息 -->