外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lwkephue.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dvzkowkm.html

(double) a / b
来源：http://www.aibaodan.cn/163suzahdne.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wwwqulxw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nnqtweol.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gsnwdumv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yvhsqori.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wmcqonrx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bezcedvx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cfpsjgpj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163exkdroai.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gmpckfop.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163avwztsdg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163afzhiwcc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163zgepgecr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tmspprss.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fbcccaro.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ezaiamjn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163etdygcsh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163smlddnid.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163avhsevsb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163woaguivl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163crvszgrp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jyhzjucc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ylvxvgfm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hzlnjsid.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bmjneegu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163urmtdhzf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163gwhwyjtd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vmokendt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uygoitic.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fkgoekpd.html

#ifndef X_H
来源：http://www.xuanzx.com/163ykrgebor.html

#define X_H
来源：http://www.aibaodan.cn/163jzbhzcnm.html

#endif
来源：http://www.xuanzx.com/163dolxnmxg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163whnwqlfn.html

#include <iostream>
来源：http://www.sxryk.cn/163kvsulqlc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zgimmjeo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vhbsavah.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163clipexke.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163txznrwnm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kjwffwrf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zfbxjqyg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163imtxqqcp.html

[S35] C++：map
来源：http://www.xuanzx.com/163ujgyhxql.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163knzbelzb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rufiktax.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uwlgvqmg.html

[S37] C++：set
来源：http://www.sxryk.cn/163uziusjsw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yjdlyvaz.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gpolajrg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163adbbfnwi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ykcfifmw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163owsoztba.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163curmjlyb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163amctegsr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vikobgny.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163nacuvons.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hgkmnotg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ijvrwlzg.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163uxydrult.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fyttonda.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163rjmlophk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lxhqfiqo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bykwaiaf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gzyfqyfw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ivknotzp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vcyractv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fypqcvjk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bvqcenxi.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163brpanoxe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pynnxmpp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163igoodrip.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ehgmhpjr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163oiuogujc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163slowobtx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ueozgyev.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163psblgmel.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163icodrryy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vuhslysk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163yhfsotdd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qsmvavcf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ehjlexep.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bdktfkir.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bizxmshy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nqjivyux.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ysswzesj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163huhxmylf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ehomosnn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163noeekyau.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vkdinoua.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rngtqbpa.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fildhmyk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hddkfcgw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zettmshf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163cwlpxbcc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qmiiixoa.html

================================================================================
来源：http://www.xuanzx.com/163bqtymkqi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kgsxlrkg.html

================================================================================
来源：http://www.xuanzx.com/163cbvwgdzk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lnylvngw.html

println("Hello")
来源：http://www.sxryk.cn/163arhhkcqt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163proaztkb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xcgzragi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dokjxpod.html

"值: $b"
来源：http://www.aibaodan.cn/163fcnxwdup.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mpurokmh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ozjkruph.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rhxyukmv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jnomjycf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163eosijqnb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pvfswbzc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163trpkpeke.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cltqvgmn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rnxwoqey.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hetflvty.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ijltuplx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163txymiwbd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dwutxdrc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yeovzmxe.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163erdxieyq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163agsrrtsw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163efvugvpx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vtcfhwwa.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163womsdfjy.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ftuzyscx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ajmbsxdh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xjtdwnof.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wjqbgxhn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163crgogdpp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163vaveykmq.html

print("Hello")
来源：http://www.aibaodan.cn/163dkhhsajt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zxgloeze.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sskaojsv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163sobvicrx.html

"值: \(b)"
来源：http://www.sxryk.cn/163ruwjhvhm.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dtyjijzx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163oefbpjad.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zwnhuwri.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wedqslnm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ylpqbyeh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zphulzmj.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fdopkjtd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rfegogkh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163pfjxyghf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163sjnjnjbg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ebthetva.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163posljtqj.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tjzeeluc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ksvigics.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163aocpsxgd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163esaendou.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fgkyjzwk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dfsvowmm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mhymlsjv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163aaikirzw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163oxtgmqkq.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ksqdlvvk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xlowkngt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xsemwwem.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163kzsihnok.html

print("Hello")
来源：http://www.aibaodan.cn/163mvavuagz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xqeimvyt.html

local a = 1
来源：http://www.aibaodan.cn/163uamzectl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ulqfdhwr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163amaregpd.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163siudfnll.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163oqfrvxrf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xycfetaq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wwexwxnc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xmawyhrp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xtyhnbuz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163bxaviymz.html

"a" .. "b"
来源：http://www.sxryk.cn/163cumvybms.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ohudzbyi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qwbkzwga.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gxycqfah.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163lwowyszc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vggqxael.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163buoarsot.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163srixhakf.html

print "Hello\n";
来源：http://www.sxryk.cn/163pqkjpcsl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163usjrawxz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163yplkusqv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163sjpvwwfx.html

"值: $a"
来源：http://www.aibaodan.cn/163mctcwjte.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xnjjrfex.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ibrifndw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ujrnwjqo.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lthhjsxp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163hddoqujg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163khgbdqyw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fanfgepx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163izuqsxqv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ylqbnucz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nuvztjwg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rellfqtx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yzhyljam.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cuqbtwas.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bgajyayw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163exoyvnaw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hiheaqao.html

println("Hello")
来源：http://www.xuanzx.com/163gmpfddnu.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qckkxcfc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ilodianw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qutrtsmi.html

s"值: $b"
来源：http://www.aibaodan.cn/163cecpojbm.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163stxpmjyu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rthmdqfb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163etgagunk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163tfwxnoke.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rbctbkso.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163zqjdqthg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163afqxjygm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vltimhfn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lkfomili.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xjtcpmkw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163pkynxyec.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163guxxusoq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tjceeniq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jitupqzu.html

================================================================================
来源：http://www.sxryk.cn/163xsozdhok.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163khrazyoj.html

================================================================================
来源：http://www.sxryk.cn/163ojmquhww.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163pugyvfkm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163elelshev.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163buvxypce.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163pvmctatp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nozldjup.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163uvqhmwvs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mvregani.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163llzidouk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163drigplsp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163agtgctoc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163quvikwdg.html

{**a, **b}
来源：http://www.xuanzx.com/163tkyltnsw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vhklnzxp.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163nhkjhpcz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163csglnqve.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163zyettvzw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qrmbwpjf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jwzewzzg.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163eqpncsud.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163yvtgvsyk.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gzpymyub.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kplxujqh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163yokyrpgx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163icaggnzg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cimsjffr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163sxjdxlra.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nudkdneu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163iegyuctf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gpvdhtmg.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fcsngdvz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qjnicqii.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kcfutglb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163oanjztap.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mvyqkxaj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163gllzlkth.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163lzhbnafw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jnnkykau.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mcefbmve.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qxsqctcz.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bdpebsrs.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ccxkuvxr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163jmnaazmk.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uogsfend.html

list(zip(*m))
来源：http://www.sxryk.cn/163vzkeehsj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vnczdmxk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163njojswai.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163otwzkfrm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rokflkxh.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ptrailod.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ufviofqg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163msqnqbpk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163qnlcugpd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163geiicvvq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bbulwlzn.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163dkcutkqt.html

UserId = int
来源：http://www.aibaodan.cn/163vnbhkerq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vjzixamw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wsvekiyi.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fvveaxsb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hiximegy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163dbfaauyc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163agzrdonl.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163woinycpt.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pnunxrct.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163svqkmayx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bihgisnj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kfdreoui.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rfwczfiq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ceyccixr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pcctvhwo.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163xoqogveo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rpxyfgiq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163enkblmjx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163esllcems.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tazikrvk.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pyzzmnya.html


<!-- 参考信息 -->