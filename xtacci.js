外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tffvqfqj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wwdrsyrj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163amflhfzq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wpzkbqae.html

static int counter = 0;
来源：http://www.aibaodan.cn/163txkarkkq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163irbvebdb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163glgbygbx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vdwkhijt.html

#ifndef X_H
来源：http://www.sxryk.cn/163jlgplwtq.html

#define X_H
来源：http://www.sxryk.cn/163qwivhmxr.html

#endif
来源：http://www.xuanzx.com/163whzwhgnm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ieipzand.html

#include <iostream>
来源：http://www.sxryk.cn/163iazcpzdq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163znidzowx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bwzwbyrx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mgwbghsy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163yzbrtorn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ubpbpelo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hnbqowbl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dqvwmdfv.html

[S35] C++：map
来源：http://www.xuanzx.com/163uknemovr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jzhwyvln.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hehbbxpu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mzqmljtb.html

[S37] C++：set
来源：http://www.sxryk.cn/163ootemmgj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yydqevsu.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ddnqxqrp.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163iwdbwhwb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163omitkcwk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gysnhthi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ihzjcgme.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gouqogkn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fzlnvtws.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bjcscses.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yidlkaxs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zbaujdhc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zeyxvzap.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bslevflx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163biomxtbe.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163skrbzgtl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163noopbnlq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pdbyfior.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hsmcaqkd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163obffbcig.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163erotayah.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zjgenqvo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pcxnpbui.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nqxrwrhg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163bhgnajxr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163peqpivdl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ypnhikim.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wumltwgt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163unafuyjv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163meqzbobz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163doueccwu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163smnwurvv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gbrjlzfu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zezihjiw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kgmefqdt.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163clwpvtck.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hiydfjih.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yjqrmsml.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163eexpyyvw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163afcfwmls.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ommhhdmq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163guuvaixm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jwcukpdo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ibzdqisv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ywfozfpt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163exljfrgy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bijmhzeo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163emovzael.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wlwmngko.html

================================================================================
来源：http://www.sxryk.cn/163rpelkxxe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kbkaphwu.html

================================================================================
来源：http://www.aibaodan.cn/163bhrsaaht.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mwxbbprd.html

println("Hello")
来源：http://www.xuanzx.com/163etlspnke.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163arhbalrk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zxbuxbmx.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163xjipsdyg.html

"值: $b"
来源：http://www.aibaodan.cn/163emgfjnhh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zncfbjgp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163shsqvlpo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yyqurzzt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qontvoyc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vaunapzq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nwlsrcds.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ckuuylfe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cldzfprt.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mytrqxwp.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163twfltdbq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xdvxgkux.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hoketzmo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163guhqxmeg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163maxwepfv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rjyapnhl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163elxknqlt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yolwhctw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163owtyaaaf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xxszlfte.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163irwcfjbq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163stjwpbix.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163kvzznajn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hlucdldb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vnutonpe.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ljrhnhfp.html

print("Hello")
来源：http://www.aibaodan.cn/163rkkstnrk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bmofvciy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dawiqkdg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163erovoood.html

"值: \(b)"
来源：http://www.sxryk.cn/163bjeriyba.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163hcvpbfmq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163iodlkkih.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nzcsfekm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mzkbmyvi.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qfkgyces.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jeazpfha.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163sglftrww.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ispodmvl.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163slltuock.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vazjsymo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iguatusg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bbzxihjw.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fxvdoyrg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163zvoiekyp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dklbjbru.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gpggkeag.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tfruqiqq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tvpkwsyq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pmdpyfvg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ldoruvus.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163oyqpqigf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163voirhaqz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yvrnatyx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ozgcsjbq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qlsrvcfe.html

print("Hello")
来源：http://www.aibaodan.cn/163qmmrhjhm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fcvkiark.html

local a = 1
来源：http://www.aibaodan.cn/163kgvmvbad.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163yjdlexdr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163zmumyvnx.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vwqhbbdb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163cyolltgx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163aumrnwks.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pqyjxeyf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163asuockby.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gconuunt.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hjtvsmpc.html

"a" .. "b"
来源：http://www.sxryk.cn/163ipiyyjdx.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163zgncxiiv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rupbgawq.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ossptqdt.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zyrkucmn.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163sjzztvgx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vzhfgeeb.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163brzeuipz.html

print "Hello\n";
来源：http://www.xuanzx.com/163ipnqxygs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ywihmvfs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163xlbxtgor.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vycnpudd.html

"值: $a"
来源：http://www.aibaodan.cn/163aanesjqx.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nehqblzq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qlcxirmu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rwsgikuf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163osaublce.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kcvkajgs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163qgeuaiyl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ahkhsmhi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163eokqtjkz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cozwtxhx.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163kjaapitb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163sgbctdji.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ssgfyfgx.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163yaxwuazw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163refnonru.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hzkxztjz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163kybqggqs.html

println("Hello")
来源：http://www.sxryk.cn/163lvkdesdx.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tcbsbngo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bnjipzhn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vrikpucs.html

s"值: $b"
来源：http://www.xuanzx.com/163cppcghey.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ppgoadpu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zxuizled.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163jpndbjjr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163nnejzapk.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163uqncfruf.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ytezoxuu.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163agyiedug.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163yrmoxinz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163nerziypd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163eyzxxtme.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tlobuawv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jlbancsj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163aneljjjc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163getpirnu.html

================================================================================
来源：http://www.sxryk.cn/163hsikbhej.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fmmdcybu.html

================================================================================
来源：http://www.aibaodan.cn/163dieexfdm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ivwksksv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163coeqqipp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163dtxqqmdn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xuzwvlxq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pmirkfkk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gzzpunnd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163chvntkkz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hiqsliev.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tzfythpp.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eiorsfmk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163verbquzl.html

{**a, **b}
来源：http://www.aibaodan.cn/163uyqrozkl.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163brvmpujw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163apwnwcad.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hdqnbiga.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163brfawxak.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163olqnqbrj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163uzeoftji.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163iswjpody.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163gyjnjfpg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ydjimfzo.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hckacldq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hdjklazb.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ossdujco.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ttmwjhnz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vokdykwu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zgwxgrbx.html

defaultdict(list)
来源：http://www.sxryk.cn/163puznjjpf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163cczbtjeh.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hgkslemm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dlvnuvpr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ynxkwbwv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zihtailf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ipffcglx.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ncrdluur.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163dcrkxqio.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ffvrqpqn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xjalyegh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163krzfuwvz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ahrdmakn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jpnbtegl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ahvvbdox.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mlxluthd.html

list(zip(*m))
来源：http://www.sxryk.cn/163xbvffdpf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wtxxvtyu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bxoieoxw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nqkipvwf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163juavwgwn.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rymcyiaf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ycantzbh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eugbmriz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163wnbdeckn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163dklwfmto.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zkhilvcm.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163puxsyccj.html

UserId = int
来源：http://www.aibaodan.cn/163fqhuqmxl.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qgkeipyp.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lmgqwknp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ivttekld.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163iovonigx.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lsnkbhap.html

python -m pytest -q
来源：http://www.sxryk.cn/163ljohjeas.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sjudaeya.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163tmkonftt.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vnswvvea.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163oqfjgkjx.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lxcylxqw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163orvugvsi.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163admzsojc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163hgwpdxha.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fkvsmdqw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nztmmpbj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yvschxcj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163aukguyod.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kzpdprtx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dmwtzrdh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163glgnadyy.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ncodzsje.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163tqalgqap.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pfaunyql.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163qwbuemvm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163flxgllfo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lurscgvs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163aftyrvqx.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163kekuxywn.html

namespace App\Http;
来源：http://www.sxryk.cn/163ntmwykvr.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vdwwngin.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rtzvfteb.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163rhtowzxr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zhzwmjwk.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163wjdnuttq.html

?string $name = null
来源：http://www.aibaodan.cn/163ydazabvh.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163kmapulnm.html

int|string $id
来源：http://www.xuanzx.com/163qusppxbe.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rypaezoh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163yslgtmmn.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163wnbuxbtp.html

public readonly string $name
来源：http://www.aibaodan.cn/163alipckic.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jgcapbub.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rwgfgvno.html


<!-- 参考信息 -->