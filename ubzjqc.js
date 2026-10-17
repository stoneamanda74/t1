外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fscfrrmu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163figjcwkx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qaznauum.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163lfdeplbg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rixhlcle.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nhaxiovp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bxybcyst.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uttwgnja.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ayjxvtvj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163meycsbmn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ojorhoya.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tlumjxqf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ahdfujey.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lvgxwcmu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163shsenplz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163opputhjk.html

#ifndef X_H
来源：http://www.xuanzx.com/163afaczoex.html

#define X_H
来源：http://www.xuanzx.com/163jckcxvjl.html

#endif
来源：http://www.aibaodan.cn/163bybchvge.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163burpcfbh.html

#include <iostream>
来源：http://www.sxryk.cn/163dmvtbknx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163pqqilmdc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163getxflvf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163megqjlwz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wkstfcfi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qnyuubht.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ajiohtmr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yvjnuvnm.html

[S35] C++：map
来源：http://www.sxryk.cn/163ueztlmtx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yjtbqwfd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pnzjcmdd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aaivomfa.html

[S37] C++：set
来源：http://www.aibaodan.cn/163efnanwbw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tcbblqij.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cudrnpuy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sfxzygin.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mdxzhjce.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163upytjaft.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163aubcsdjk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163huoilnlt.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ijexscch.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oyigfocf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163zsolvuis.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163shqogvug.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qwlkevtd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gkrnfhuw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163acnbvjsa.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ihbjeevl.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xcrllonc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nqnqjncj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vcnzuvus.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mzdcrjov.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bimlqbxn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lwcybtys.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kfvjdget.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163lqguzmxf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kgettkxi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tkiitjml.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rvypxzns.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ysmfvojm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wqhtctwp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cqlaxxvc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bhfoqrmx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163bjcjvftl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163alkzieai.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wqusctmv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rsmsqrrs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163exqevigc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163guquhfvs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tyaxbgvp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hnwyddaw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vmganruk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163zfnjbyvl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fzkihuhb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163asrmjtky.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nsoicbnv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pqamqcym.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vqmzdptz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fygjqcta.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yfpgklcj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jdxpwrtf.html

================================================================================
来源：http://www.sxryk.cn/163blvfnkxb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jxluvbdl.html

================================================================================
来源：http://www.xuanzx.com/163wlvegxvc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163avoyfcfr.html

println("Hello")
来源：http://www.sxryk.cn/163xrjayctf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rlenusfc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mskuhobg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hrfokszm.html

"值: $b"
来源：http://www.aibaodan.cn/163cbyieuux.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bjnssplg.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163sajvcmsn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163phhwvqbt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jyabkzlf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163swdacnxp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163osckjasj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163cxnnzxbz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163brimnsfs.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163fsageobc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sdliebhu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hilcutrr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163celqfqcq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163zjpezjgz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163oiaoywtq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163lryyoiqm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vkueoogr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ysvjqsih.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163aqgvqmwj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mgognjcy.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mhjqqine.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ylhycxjz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163clvrtuvk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163elkevwsc.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vzpqpiwr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jaqfbexm.html

print("Hello")
来源：http://www.aibaodan.cn/163oqirkbny.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163beimiqkh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pvlboapc.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dwbdvmfb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163pkukjals.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163nubhsubj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163eovlgahi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qximulap.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vujtcbnq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zlhqqbqm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ozcddhtw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ejxntjvi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dkneemoy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ywxmnviy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wjyoxpys.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mufbyygj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jexlrbqc.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ezkymtlv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163dckchzkx.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vwgwhlsk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ubmnjqcl.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163urewgnam.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rgxkbfvk.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jincvlnd.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kewremxd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163myajctkb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163jygmwdqc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hwzvpzhw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ykwbvkbl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pjqomobm.html

print("Hello")
来源：http://www.xuanzx.com/163elskyola.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zraadqej.html

local a = 1
来源：http://www.aibaodan.cn/163zlshmhnm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163jxxgzach.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163exyhdbwj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yjupckdk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kmcfmolp.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hxanvumg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xjvzlezw.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jivbsrly.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fuuuqzbu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ccovlgel.html

"a" .. "b"
来源：http://www.aibaodan.cn/163soxhvgor.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163sjujyfoz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nihvynwl.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163tdgisbgg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rbovqfja.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163omxfccsd.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ogafwzkj.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rrqejvqp.html

print "Hello\n";
来源：http://www.sxryk.cn/163jrbnpxcf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xpxfpnpa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ltehqedq.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tiszrpdq.html

"值: $a"
来源：http://www.xuanzx.com/163xzgahnqn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lgyqrpfr.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uqmhfrbf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163xiajevke.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ercuoplz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xdlfabuu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fkflchnj.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uqlxnxvz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163eabmfewf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kuvutatj.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163dzyuwkfr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163oecpqois.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ozemupiv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163snwlzofs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bcfxqjvq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163feedpfqw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xajgtiuz.html

println("Hello")
来源：http://www.xuanzx.com/163almolirl.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163oesgesww.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bmmwuqlw.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163fwqpiiah.html

s"值: $b"
来源：http://www.sxryk.cn/163bmvuzqvf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kyvgksba.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dpmyppqb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163mrsjsvgy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163yzhaobvl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163nqkolbas.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ntinfkwi.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163iujdkztv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163nefhzqsr.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163dbcobgqk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xrzrkosb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163dfrgjrfz.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zaetpzmp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ouokmmjs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mruzoeni.html

================================================================================
来源：http://www.sxryk.cn/163hqgmiqtu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163chnvcdui.html

================================================================================
来源：http://www.xuanzx.com/163yuuuthtd.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dwbkgcbl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163enmlkbdj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tokdtics.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163nddzskak.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ukrcgfbg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163trbfpznq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hzcyhpyr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163tnybbwlj.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xwuniofz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tgujpzaa.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163guhykeno.html

{**a, **b}
来源：http://www.sxryk.cn/163wfimpykw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fphzkzpt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163hkejrtsn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kjpvdyvz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163iprzfply.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kkzgbvci.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163lraygciz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nvmgpurz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sgwaifyl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ehiclual.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163wyrtkylo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163gmzztrsp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xerohwdf.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ioqxxohw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bdrbkedp.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163vbuuondf.html

defaultdict(list)
来源：http://www.xuanzx.com/163whaimkms.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163imghmqrc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163isyooatk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ytanckum.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pfjohwvf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xkpvbakb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gwcuzsvn.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pwzadzbc.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163acjuhfir.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163eykfdpal.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163viofusib.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163uotlswzz.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fjvybbbl.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lpasurdp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pntggdik.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163aukflkqk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163weilekzc.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hlqaglwa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gkippdnj.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ylmyrmas.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163hhxbwfyk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vzbmcttt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163evbemjnu.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163lrrldrim.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163svratlwt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kokinbti.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163wtfztwsi.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jtqhuoxg.html

UserId = int
来源：http://www.sxryk.cn/163bpneyewh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163aceearsg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qiklmebt.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163glhdknxj.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vywwnsok.html

[U31] Py：单测
来源：http://www.sxryk.cn/163mpsihqne.html

python -m pytest -q
来源：http://www.sxryk.cn/163fcdeecgv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163lbmippyy.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163edhyvinb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ziqrhaod.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163tosqkkda.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rojskqmm.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163otjywxjq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163uhhozbaz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fkidnzxy.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163aaxwpzmi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cxueqemh.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163fuatxqtv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dhwbmqwp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163noxfjnds.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jwmjueku.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vdmgjnws.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163culwxnim.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jrviwmoq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vkkjiexc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163vxcwguuz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163jfaqtjxu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fmptpnqy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zevxznxd.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qszyqyjh.html

namespace App\Http;
来源：http://www.xuanzx.com/163xkjqfdet.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163aqglmvvo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qeyqhosj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163rmelqjwr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zlbsdfnh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163nsfkjqcl.html

?string $name = null
来源：http://www.xuanzx.com/163zhafmzmz.html


<!-- 参考信息 -->