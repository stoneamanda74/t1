外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hixmrfzd.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xivpwpwt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163edfjlcys.html

[S14] C：枚举
来源：http://www.xuanzx.com/163togemmxe.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gwaxdewq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ehfgddtm.html

(double) a / b
来源：http://www.sxryk.cn/163lyzloygf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163siiqnojl.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dpflrvtp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nnmjhyof.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163myhqfppg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163swsilegi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ockeahvo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nclnmysk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lbbawqml.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cdoquftb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yxtpjgma.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nxytfnvg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163triwydxh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mtrqceew.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hduhuzxs.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163jknawpff.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lwjdqewe.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mamphhsx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uuxyhaau.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163crbtebvy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lqeyqlpq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kletfvsu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wuupdreo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zianyqpu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zvowdpgh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163sdpgfzyj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pbcbszgn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163iaguoubg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gqlyoqzj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163exspppvk.html

#ifndef X_H
来源：http://www.xuanzx.com/163axgboftj.html

#define X_H
来源：http://www.xuanzx.com/163razkttdw.html

#endif
来源：http://www.sxryk.cn/163gybrgscg.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fyebfels.html

#include <iostream>
来源：http://www.xuanzx.com/163lmffvrgv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163dgqgtlly.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163raauhjee.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dqdtapfz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vlaijayh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163thdzssqg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vukibgjn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fqpcpilw.html

[S35] C++：map
来源：http://www.sxryk.cn/163plnimqwo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163aqimwspd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qbkqfpcf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163begxeofn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wgyxlvys.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pbcodbdq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163brhpyich.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xrcdwslp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163qummwvtp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mngnntbm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hmydnhna.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pbrtsdgv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tqyistkm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163epfzwpbl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kbdcrijd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wabxygrp.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163sozsqwbz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xzsuohkq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vrngdnrh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qwbgtsyv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vxjesgxi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zhievqrt.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vypamwxi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163gxitbuuo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lzeobjfm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wvqieulo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xglcbftf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163japajlqa.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163asybioxt.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163falzhfgu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jejumhpg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vzgozovz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mrpqmtwv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163auzfynql.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163efykluem.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wuguikuy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gdomzgid.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cpanytgk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163abqbrkev.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fiqvpnoo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ayhfaobs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gkhvqtmd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eavizovg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sguprbni.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163odqhoqvv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163muqdqsdo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rgufqfpl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xoipwzmp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163mjykqvnv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vfytzqfw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qulrjuhe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ffzajqmg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cyidiqor.html

================================================================================
来源：http://www.sxryk.cn/163uczdalnr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163saoovuwy.html

================================================================================
来源：http://www.aibaodan.cn/163yvasuaia.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gxkifeqn.html

println("Hello")
来源：http://www.xuanzx.com/163olsgwgbu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gooqsctc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163htfffnvk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163didatwbu.html

"值: $b"
来源：http://www.aibaodan.cn/163tuexzxcb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163oyebkzjt.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gkoitmsb.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lwhrzape.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fhhjghif.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lekdrxwp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hrwzjita.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rnntgdpm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gxtdukto.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oswkovwk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163htauobfy.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ibwmqper.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cqkpdnvi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gbebatxr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163haqudwme.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hzovvkki.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ijpelkjg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hswsfpox.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fhmeiilq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jzaktxew.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163tqarnjfb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163whhkqluc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163errdftej.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163txfsbcca.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163gjhxyvui.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163twubwpao.html

print("Hello")
来源：http://www.aibaodan.cn/163iwdnipen.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hbrizqbn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163gjkejyoq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pdequrfv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ldpobnse.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yolyvndq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163rjlpzsfa.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ybjgolbi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hkhndppy.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ocaokwjj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lhaxvemi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bkllnqmv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hkjenizr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163scvgkgkh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163iyqpreum.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rejyxbvm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ztzpmzns.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jcemwtlc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163imnwivuf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cwwiwrma.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mxrazxbv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163smyizjlq.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mnmifrlt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dfvnxkds.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163oyseyavp.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163acqxvhdr.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qbvsbjav.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cmiktnfl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xbqwdsqf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jnehsyjn.html

print("Hello")
来源：http://www.xuanzx.com/163fccmqqwb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163plfwopzy.html

local a = 1
来源：http://www.xuanzx.com/163zijleibx.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wnyeozit.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rwfaxqhu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fkruaevt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jnaurkcz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wwliuxza.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163matwprlc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163dgyovcbo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jphyuzkk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163pjrefwha.html

"a" .. "b"
来源：http://www.xuanzx.com/163stlodevw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vrjszzhe.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hvhxwmih.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163iczfimsh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163yasmkdbf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rarrtmjz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jqgwzecz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qzebrxrv.html

print "Hello\n";
来源：http://www.xuanzx.com/163vabtiqrd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aomjfvsx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vblefkku.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163fnudermr.html

"值: $a"
来源：http://www.sxryk.cn/163qxyipfri.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kjdvoeej.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zuyuriqv.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163iddodelt.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163vawhhkpa.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163apvwyhnj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wietoxds.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lcjuapys.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163crepqbzx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163gjrfbpsu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163behniauo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163onfbtqgg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163iqjgghsm.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163znngazme.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163eyyqedql.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163autthkaa.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163dvbziptv.html

println("Hello")
来源：http://www.sxryk.cn/163xhxovakr.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163esbsubvk.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163szhxzkpp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163psjetekl.html

s"值: $b"
来源：http://www.sxryk.cn/163phzzxftr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gzkjldou.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hketszgz.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pjosifsf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163uwyxadlb.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163yqomlzff.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163eaghgocv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ozxgmjfw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163phoorinq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hgmhroqm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rvwjwfmn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dvognejc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163oxrkibvw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163iusglwbd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163eiwboitv.html

================================================================================
来源：http://www.aibaodan.cn/163fklwpzqt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163asbebpnr.html

================================================================================
来源：http://www.xuanzx.com/163djpqeepx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163oribqakb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163bgepaqdx.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ngraarar.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163fdymvydg.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nqvdxzac.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lxjqywms.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sllzsuuy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163rljwvhqv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163csogqoue.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163iayiccmb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163aptosumf.html

{**a, **b}
来源：http://www.aibaodan.cn/163ohkqduwc.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163prlnwuso.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qpyueuwn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163snppmmce.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gqzoanxz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163vzumjlqj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jvxtsewo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tgomkklq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163oqiemdep.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163miwbklvl.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163firgieys.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ptwzidzk.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rufqouan.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163gahqcees.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tvqnlpdi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163babxwfzs.html

defaultdict(list)
来源：http://www.sxryk.cn/163bzptppal.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pjgbujov.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ystsiwkr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xorksfqb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163dnpuayxj.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jkoyuuhd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jybmaszo.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163phugvlqi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ivkcacnm.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163fscefapt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163bapvfikx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dmjmshqf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hzspjium.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163fqtlvtgs.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vnsenizq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nxdddtne.html

list(zip(*m))
来源：http://www.sxryk.cn/163ssyyfcwk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jwitwjpt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rtutwhav.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rgtwbgwr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163iuazecdi.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ngpfbfqx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163gvmhtext.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eeoxwzsb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163tsbfmmep.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163khdesvre.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163feubpwoc.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163hzbcibwg.html

UserId = int
来源：http://www.aibaodan.cn/163azpsaiwi.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163knbzfvkp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163pkphupmd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ipqawnfy.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163byvwocqa.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163npqnacyz.html

python -m pytest -q
来源：http://www.sxryk.cn/163byuubzro.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rnyogkjp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163wpeeucds.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jubslmry.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163remdtysw.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163dfzjasnk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gsbblcqm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163kulmlcxm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163zuepfjqc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163trpgvecy.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163djharugz.html


<!-- 参考信息 -->