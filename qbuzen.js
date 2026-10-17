外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qpfsguqw.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163sqckppim.html

(double) a / b
来源：http://www.aibaodan.cn/163wnkqkyhb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gkkzkphe.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tkxykccm.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tinuifyv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ntftrcxs.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163irjpiucn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jqbnaudb.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163bsogwvhv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163icavcbso.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ikkgnjpe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gxohnktp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dhhhxjvt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dgsiuvpz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vlbtwpdy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163clyrcshk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pcaidpvt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sxezkayj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163owqwyyqs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163prqlhzgk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163grnwolhi.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163oklaemqp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163sugpkgij.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nllbwlpg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163oorpydsf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zodvsadm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163sqjnqthr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zrwxxzay.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163unmsbczy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wfrvzotv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hrqvndlk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hxlpaixb.html

#define X_H
来源：http://www.aibaodan.cn/163szyrxtyv.html

#endif
来源：http://www.sxryk.cn/163phsaazyz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fylccmya.html

#include <iostream>
来源：http://www.xuanzx.com/163vuxybybz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163drsvnwxq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xgbycywc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fmyzksti.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163obnlikvv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xcfssqyo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ecjrluea.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163rotowlkb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ezuspbqr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ayzbsiwp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gvjiurud.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mujkxaen.html

[S37] C++：set
来源：http://www.xuanzx.com/163yedimxeg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dkicwrsa.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163iziprgsw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163eyvgctfy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hjstoesm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cpnuvpkr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163oqjexnxr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vfhkfxgm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xyamexte.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xxkhjapv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163bkvmaqeq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qgnbjutk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163hryqcume.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fepsziwr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kkkllypn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zwsykduo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rhxmbrvu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rekxtowx.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gqwgbzzn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rygbasqe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163pjipntar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wgcbleor.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yxjyjmrf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163cemrpjxy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163smzzqarq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vwwpqims.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ggamdpps.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163svkhsfvk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ukddrkfz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kttybtci.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163odyzpzpk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163oxwqikwq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vpyomaof.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ixyqfepb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163suhwqewg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ohrlkhej.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gxexpgrv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nxbqerid.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lmpfrhdj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rxsjbzfv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ohjoajez.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bmjsnidd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163keccpdpi.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jieeaswf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dcjrvyia.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cuxflqzf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nmceojqh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wknbbvfg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rwkmkjug.html

================================================================================
来源：http://www.aibaodan.cn/163cmnyxyeh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163njwxgosw.html

================================================================================
来源：http://www.xuanzx.com/163eneulbzt.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163sxagxdgv.html

println("Hello")
来源：http://www.sxryk.cn/163yeguxanl.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mpyvfdkl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kzvmiamx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ulkyxoxh.html

"值: $b"
来源：http://www.xuanzx.com/163bqadsswc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163eooomegd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bqskbecs.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163yogloswp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163dgjwgdlo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zxilfscy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163iydyoecx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mwqsbyfe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ruzsquqy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163jtycjwys.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163klluhqyk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mbwhyfcq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lzqwvqsw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mmmhahll.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rorbjowh.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163asspegoa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163szekdbjx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163sajpbmav.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jjpsupen.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jpflywiw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lzkteuef.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163juhfkvtl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fzwrrjth.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163alpiuzrt.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jodcdaih.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tgkmhyix.html

print("Hello")
来源：http://www.aibaodan.cn/163lwpqwymb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163aetuxejd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163equywomd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163itzlfofd.html

"值: \(b)"
来源：http://www.xuanzx.com/163hpymdpmq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mpwznspp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163krvdaifn.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fpnaxzcc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jcuidxon.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cxehidux.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jvxfwaqr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jrqnlnmd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pkdzesgn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bacuyvwu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ldfxbevf.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ehvmjqmw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163eqwclpyh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163eksvgyse.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163owxeruyi.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163kccprzvg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jdcmkusi.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163kzwvsitz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lubszkew.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163udkusckt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qmhzqnms.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zpjqhnzz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163apzfstls.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wbfsbqkq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ljjpluch.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163aenoqiwm.html

print("Hello")
来源：http://www.aibaodan.cn/163xinxbetu.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hcjlcurf.html

local a = 1
来源：http://www.xuanzx.com/163hbjjedlb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163stndlael.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vkfqczhp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163srztyzve.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vjgboscy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xxlummae.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ycqoafwt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dnkgumiw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163urvalsnj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oisqdtpu.html

"a" .. "b"
来源：http://www.xuanzx.com/163yhukjmgb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163fdzggdek.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qwsislow.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ouwfenbz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hzkdceli.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dfatckqg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163egipkcup.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wmcgtlpn.html

print "Hello\n";
来源：http://www.sxryk.cn/163pwmosdph.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mhtelnyw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jvbdamuw.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163uexnmmie.html

"值: $a"
来源：http://www.aibaodan.cn/163cqewdhyz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dtsdtcce.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ixnuvafv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163dorwtcyo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163vaonhwme.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jsmxmhiu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163exaaxrje.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gjioiydw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163omiwkbmg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cswjbvqa.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163wbdpzxwk.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lnexagbi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yfosnvbq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hwxfghdb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qlbgfjry.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163egotgjhc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163pmgolhmu.html

println("Hello")
来源：http://www.xuanzx.com/163vaixzstd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163afhjfuoh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ixlloubh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tktctnxi.html

s"值: $b"
来源：http://www.aibaodan.cn/163xwcrplwb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jxvceumd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tbaqaqcx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163wwdekpjl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ejbxadat.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ikkfyihg.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163hekrwbnd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163taikidnv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163kcqwxtfb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wkifzkox.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163eqjpskyu.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163lzzmswlg.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rrfujzhi.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vndmwmcs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163uabnfbxc.html

================================================================================
来源：http://www.aibaodan.cn/163ssjpymfa.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rtuizlik.html

================================================================================
来源：http://www.aibaodan.cn/163gommwktu.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mdxqobgw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fnrkhule.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hsqgtblg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163hkzvuomd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ijbyhnod.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dkzntncw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vbnkhpwj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rmccigbk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bxpesrhr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tuvgebvr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yckrvroi.html

{**a, **b}
来源：http://www.xuanzx.com/163ihrannig.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lekuavai.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fnxxrpdi.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163bkvozgba.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qetogfps.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qhyagheu.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163vosqnmij.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163fvqyybey.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ctbxadus.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163covaugvm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pnshkpgg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163sogstxpf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163shdfdftq.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163glnptoom.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163adcpteff.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163oenzzjna.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bzufyutu.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163cpzvqnaf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ukoichuq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fxkumrop.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rsimzviw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zctheyuw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163iakvgcno.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163gzszshnz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bhovpspn.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163mneupjvx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zlrweynx.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zrwtqdtp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uivzxbfy.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ezwpdcgh.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163direnweg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vgqilhcl.html

list(zip(*m))
来源：http://www.xuanzx.com/163rvuxbrxw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163iuxkxcdz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bxxxmgal.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163siehaxvi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mmnoowly.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163pslvpiin.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nbhqmjvz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qmfyhkdc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163uqswtgps.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gzsbghmg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163thrbvaaf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163moacfpws.html

UserId = int
来源：http://www.xuanzx.com/163ewshlaqd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ixkdrizb.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163timbslvv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xtoxjfbv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163aqlitukp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qlemnfka.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hmvqlwdw.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163araedicw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wzpkqptg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163fjrdfuhx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163amyztxdz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163rhzuawfr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163eoqwjiwl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163gigsmvtd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qhcmhkmb.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fcjbqakn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163kkfsvibj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163vsfasplo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163pnitqdtb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qxtdkdnh.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fzejbmio.html


<!-- 参考信息 -->