外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lyxjrnmr.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ycopvanv.html

(double) a / b
来源：http://www.aibaodan.cn/163pikfrjms.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163kjfzlhaz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pvkpfwbs.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163arxttwid.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163utpxftrm.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wqvwmdmx.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163masvelts.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kvfcgbkc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163szmgtwuk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163duyqrmra.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rftfqfhr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cesyvzdb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rplarmgr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163irtiepnp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qsikdasq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vgdfmqne.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hyjnznns.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163malvitch.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jexprrah.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rfsnlbvg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163xylsxksu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163nevvjzgf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xunjjgwq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163unvmheoe.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nfiterck.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163njmnogbl.html

static int counter = 0;
来源：http://www.xuanzx.com/163yfevtgjl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qtacoyjv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163kpdvqltz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163iasqinio.html

#ifndef X_H
来源：http://www.xuanzx.com/163eohxtnhd.html

#define X_H
来源：http://www.sxryk.cn/163qeragqkq.html

#endif
来源：http://www.sxryk.cn/163mhwaycia.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vvgzaohb.html

#include <iostream>
来源：http://www.aibaodan.cn/163ishkrkcm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163sktqysta.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lbffmlon.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ovrxuayp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wdrgioaw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163macaoziw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jporqsqa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bfyvtfml.html

[S35] C++：map
来源：http://www.aibaodan.cn/163yfgowwec.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nmirolfd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tlgcursg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cjpvywzp.html

[S37] C++：set
来源：http://www.sxryk.cn/163xlnwjgau.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ufdjpagw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xxecnpwn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kywxkrur.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163iemwlirx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ootaqqrr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163egnyoiwr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vsksnlzi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163soqrfdzm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mzikpvct.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ycisgjbh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gqfbesnr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rpjafhgu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163clyvgoxw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163mavrozis.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163owftkzuy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bskzqswt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fznimpdc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hcqsibvn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ceojuypd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163opmhniln.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163comenjcp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mgovxmvb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cvwlqfmr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163iptechnp.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ppahglvy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pqcmtcwc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163myhwnjcm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uyiwwmtl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163srpsjcrj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cslmkshx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nklhrygp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163duiyrpox.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163itlbyhtp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163gkqsotdp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163etfucaip.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qpgpdiwt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cmnvylvo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mrrjejns.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mmkgadhb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qhnneuqj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wwdnphct.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zpteydoo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ffndszgg.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163aosbzgmv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xdxsyiiz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xdpqlojj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vgpmztrk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aqhqnhdx.html

================================================================================
来源：http://www.aibaodan.cn/163dexralfl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163llkqfakc.html

================================================================================
来源：http://www.sxryk.cn/163qfreiwna.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163dnprtxhd.html

println("Hello")
来源：http://www.xuanzx.com/163khqmbatg.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ftdcisdz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163eovexxns.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ksfxrlfb.html

"值: $b"
来源：http://www.xuanzx.com/163matlzzki.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163wdavdgjh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mdbtvxiw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jtfqpyxw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163evcnjnto.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zxvrdjvn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nlspakoq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163kafwcqoy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qjablnkc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fgomxady.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hyjclmgr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tapfiklu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ucqirdzc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gvlutpzb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pmmyrwpg.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163eoznajgu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bnjjvsdt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ijzvfszc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ilrijbmu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qnvomioe.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dvqondcx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zwnatviz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zaodcoam.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ytbjtzev.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vxtjxcat.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mzalxeqq.html

print("Hello")
来源：http://www.xuanzx.com/163ikkassvy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rhmqfkpc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163lybudcia.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zrzajzjj.html

"值: \(b)"
来源：http://www.sxryk.cn/163rgpyjwro.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qqefsjqd.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163hgfyawce.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163vsiizewt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163adocuanm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163imnimwrj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jzuregsi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yhytnghs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163uikvealn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ednkvjyg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ohhodthv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163klfqqggg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ymzevzsr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cgbpowvs.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gxilcoxu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163nqkrnviu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163njnopedq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fkjpapaa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163krznvace.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ajcutjkx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hmoqrkro.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dhroavdh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hlhfxbkq.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163czjmvzjm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163crlpnzct.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nnwfdrqg.html

print("Hello")
来源：http://www.xuanzx.com/163jrexfvzv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163iwjljadx.html

local a = 1
来源：http://www.xuanzx.com/163iioybliw.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yxvhehjb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163aeecasoc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163mkasxmhl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163upnctzks.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163rmcwhnmu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163secenvdq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gpnfavcx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fxjqpgig.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163suelbfvf.html

"a" .. "b"
来源：http://www.sxryk.cn/163dologydc.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dolgcccr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163kcrvxwuu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163hipgpcwk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163grsddtve.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wbbscrbw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163vyimbgfg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qfpufdnj.html

print "Hello\n";
来源：http://www.sxryk.cn/163hxlcxbbz.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163acburhnf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nvbmpikv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163cpfreziw.html

"值: $a"
来源：http://www.sxryk.cn/163zovdudli.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vgbyeehf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ubqgffgk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163eakfuelv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tjwuuffx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vnwqrfeb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vlzwntld.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163pqnkqcmh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163agqqntcg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163onawnhpj.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wfqwfvuo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mmjtfrer.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lgqtaxzp.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fzvxxyuo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163tlobhgla.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163btijphbe.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163buxmrcil.html

println("Hello")
来源：http://www.xuanzx.com/163nkbvwlwz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163opluwjep.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xwogajct.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zrzzyscn.html

s"值: $b"
来源：http://www.aibaodan.cn/163hrolmluc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163nehqujhm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xuwvfpmo.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163txyrhumy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ucqxrltq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fwdnthpe.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163yirzrqcj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163udiienwc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nxhybdsg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gczmreip.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xpegpwna.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163udteimyn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163scrolpsl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yinhixkw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jotwccms.html

================================================================================
来源：http://www.xuanzx.com/163wqqenqai.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xoooozle.html

================================================================================
来源：http://www.xuanzx.com/163vyiwpkxn.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163enhzkmnc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163engdhrbi.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163trxnoskm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163dvkoazqx.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163oednsllf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ihdumyox.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aiixdwbo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ulmmaiie.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lyzivzij.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zjkuvatr.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163srslivbc.html

{**a, **b}
来源：http://www.xuanzx.com/163ejbwzdsl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ioerwjzg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163qfrxhdjw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uuozocia.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163aiokzvkp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gxjrktha.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tumusphq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ayjgkkzv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hezgkjbl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163nkcizhjh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163prfvznat.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dcrmfccr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dxhkponl.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163bqdezrhp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tlwnopwc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fmgwntyo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163umgpoeoo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ideyuvwj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ldfvcufd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zsskbsyl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163skpiezel.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bnktwvci.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mqjromig.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163dsckmigl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163cboyxdqx.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163rdwbktzu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mfanhseh.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163clpaqguw.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mkunowqy.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163icsexins.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163fbspesaq.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163eocfopxv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hmlwsxat.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xapaegqr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163dxqkeyct.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163apsxproo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163zfqwkiup.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xyofwrhw.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ylxdqjib.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163zhofhhlc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bxvfttos.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ncucmpns.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163menilxsb.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163txqggsri.html

UserId = int
来源：http://www.aibaodan.cn/163jrsdpgwx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mhbgtzoi.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yxepphku.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bzqjvtwe.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163njuafsyq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163whkfzxun.html

python -m pytest -q
来源：http://www.xuanzx.com/163xktgvyil.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163afqspczb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fxpxlciq.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vdxfdjpl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163oqwkfukz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163bpdqpmrm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kahunhpe.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163xcpcplat.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ttiasrjs.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ioaldyou.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hromzxri.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lsifarth.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163uwhklckx.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163statdvvk.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163nnnegswj.html


<!-- 参考信息 -->