外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dzimbevd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lzjppaia.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163slueembo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ljsxgces.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163puvmkhbp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nzrzvvfg.html

fclose(f);
来源：http://www.sxryk.cn/163kaprcxry.html

[S12] C：写文件
来源：http://www.xuanzx.com/163osiukxrq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ixqkvtoz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ochzsvoi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163sqecezfs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163blsalzyu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uejcggcz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rshyoxwd.html

(double) a / b
来源：http://www.aibaodan.cn/163ypmlelcu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ufczjmyp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tjulflma.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aanijxrs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163vxncqkhy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jpdoayjq.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163cevysnxn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163kzbpgngv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163msoswlms.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163oeeaojau.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fnkmjlyf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163kraylrnh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hafnhelr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zejjtxgq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jycvagan.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163isneiksj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bfinwtmu.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163iviatcew.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vczpumle.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cllllghd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nkbknrdc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lzfyalpe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fwjcipuu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xauiglrl.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163npqzrtlz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zmgfainp.html

static int counter = 0;
来源：http://www.xuanzx.com/163xqsplfav.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dwqvgehl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pohclqkx.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163etglplna.html

#ifndef X_H
来源：http://www.sxryk.cn/163xirhbrlw.html

#define X_H
来源：http://www.xuanzx.com/163skqksbnu.html

#endif
来源：http://www.aibaodan.cn/163zuiykatw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mytkyebz.html

#include <iostream>
来源：http://www.sxryk.cn/163vizdsars.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163krphshhl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163hdrmmxoy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qvcoboqu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163sythufmg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rkzttwji.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163lrbzijmb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163rpomvmfu.html

[S35] C++：map
来源：http://www.xuanzx.com/163mkfxkxty.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kiyncmcn.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tgehsldx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163assmjskg.html

[S37] C++：set
来源：http://www.xuanzx.com/163gtcvgesc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vauycnyw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jdxkqqxk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gwdujhuk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163begxdywc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vcgqymlm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yqnuhioj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pddjnrrh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ybrzihie.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zscgwmmt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jbgpxsdt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163pjvbadju.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nrevxlmj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cwlkpokq.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xnzhoymg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dqihqfrm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kcdksgos.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aczdujog.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uobfrokb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wlhvewqe.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ivnfnnxw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163nedzbceh.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wlzkhuja.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rrmmtftm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dunbdyae.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yetkqmdu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pcgczqal.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163pktzibov.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163axsfufpy.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ljbcoruz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fmhggpdi.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dxzzxmbt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bcokgsjv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163tgjbocjo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bqmacjkk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lpimcisr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mkipuwxy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lihsiwza.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gccfvjqa.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dxhiaevw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gusyjicn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dwencckp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rhascfpp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163asuiidhk.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163xshqjusl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mydacgng.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163guukihhc.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bzzevvoz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pgcjzhyk.html

================================================================================
来源：http://www.sxryk.cn/163tlyukzuw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xcsrdfzs.html

================================================================================
来源：http://www.sxryk.cn/163votjabbs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yqnirbhv.html

println("Hello")
来源：http://www.sxryk.cn/163bmrzivnw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163meqorcih.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vsfkiivz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lrmiuojt.html

"值: $b"
来源：http://www.xuanzx.com/163yhmdwlyi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163belzhjra.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lwoskacw.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163coelphnv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163itsvagsc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uwseyltx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kkolliyz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163asaqxzur.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kuwjswun.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uawtdyvk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kjzdyvas.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qmctvfyv.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lkjdxczf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163aydjovcw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xexmljbu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nifqxjua.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xcbjvone.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ikxykmvc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sgwhcibg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163blbswown.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wbzgbxgg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163adhgxngy.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rhqqhefu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163meatsknz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163njfjsilp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hdogozbp.html

print("Hello")
来源：http://www.sxryk.cn/163valhmqtq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yckewgyy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163narzmufd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vvggmgyh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163pvhzfbqs.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ulbxrdto.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vbuyvdlw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163yuqwhrby.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bwbaznmo.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163cyebrixv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gtuxylbk.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163truskdwh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wdwtozde.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cuoocxxa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bkcsbssk.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ajqxozps.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gmbuqcit.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bnlmzhth.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163rjqnsjrr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ptmmjwtl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163osfxtsof.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163beobfsrf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rapuaegy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163owhonnya.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ssbvotxe.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hgdopcyi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mqkbelzb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ogtkxjql.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hoyendqn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lwuxnztx.html

print("Hello")
来源：http://www.sxryk.cn/163capqdyrm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163chdnajds.html

local a = 1
来源：http://www.aibaodan.cn/163bpqohjys.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163megidsjr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ouexipld.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163plmlyivm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163srjtyosc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dusfbfbz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163chjhvqmk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nxtrnoyg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ecvayova.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ibdnzhwk.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xadtwnsy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ghytujnd.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fnivnnbg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vspbvrup.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163yexalgii.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wvxwgtrp.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oxsxpzyl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jfcxfigi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163plcflwdd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qbyeteak.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ydvrmeyu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vamrxfgy.html

"值: $a"
来源：http://www.xuanzx.com/163jzzvuinf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163csflmhym.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cqotdxmt.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163erkagsbv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vnbcvhhk.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jxogftzs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lcbeolyg.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dkubdsua.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ivfgopwj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jswmzape.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163asaiwqth.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dwrqexhp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163iwflregu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xbeqghqm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163yzdfzmhp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vtdpnqgw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cdvfxmye.html

println("Hello")
来源：http://www.sxryk.cn/163ofvufpdf.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dfsrkszf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ltuzkmda.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vfimfqwd.html

s"值: $b"
来源：http://www.sxryk.cn/163osljxqol.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qgjmepnc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163iwvlgond.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gskqmfji.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hzjgxlys.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ecdmfqvj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pqgmzlge.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qponbwfn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163pztlpdnn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fpqxexpu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163bkjuptny.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ippqllwz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tvnflbnj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jjxauvna.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163pgxeckzv.html

================================================================================
来源：http://www.aibaodan.cn/163xptyfihd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gkmnmgzt.html

================================================================================
来源：http://www.sxryk.cn/163biezauho.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163juvypbjo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tfiblihc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ztbswxfy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mzpsapdv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cfstbvbt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ksshdvfv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tvjnkspf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zsbojtke.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jkyuqfqx.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hvschmhs.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163yqgzbulw.html

{**a, **b}
来源：http://www.xuanzx.com/163lqqsvkbw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dpfuflid.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163bevxxeob.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ravivlmj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163byfcwpgw.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163skjnaflb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163apuczzah.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163yrwfelxb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ksbwlkjl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yiibzxae.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tseexksw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vnyhxmgf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pexfvatj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163hsmmgsrr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163xgktmpih.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163plsnquit.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ggirsjqx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tkjmudgu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gwfcotcw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hnpzzvxm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163oovtttgx.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163egbemhiu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nbsxhilq.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cszupblp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vqgmtqml.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cqibczmu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163qerqwwon.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nczzsjrd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163dvnfdyah.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vqfwsdcv.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163icesiugu.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pqfecvix.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mffbfmpx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163smyzyjla.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gjyyvuus.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163gvwtwvob.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163segwgrhb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163eoogivau.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tyuksuqr.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163hpbyyylw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zhbovhpm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gjeglmre.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163aqrkvvfd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163erffwsmt.html

UserId = int
来源：http://www.sxryk.cn/163fkfdljjh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vbqsprfe.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fwnyxibd.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wfskqvqj.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163malyajql.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ujxhafnr.html

python -m pytest -q
来源：http://www.aibaodan.cn/163qlmnkxjh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163swdnyopo.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163cnmtqciu.html


<!-- 参考信息 -->