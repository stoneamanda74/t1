外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163astkkddd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163irirwfmx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zrkvtkot.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hnlzrexy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uewuhxmx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uxqtieeh.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zftsrmbx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ruemplpo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yoplvzkp.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163azzjzwuh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163crescsqa.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jbtphjjj.html

#ifndef X_H
来源：http://www.xuanzx.com/163oavddrkr.html

#define X_H
来源：http://www.sxryk.cn/163tzsrjjkm.html

#endif
来源：http://www.sxryk.cn/163bcosfxvv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163yhkzlqbr.html

#include <iostream>
来源：http://www.xuanzx.com/163yirggkyk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gtwsunde.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dzjamnwy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qgagttuc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ufxuarhu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vztbkaxm.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tmrawkuz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kwsgbqku.html

[S35] C++：map
来源：http://www.xuanzx.com/163axvmcxdw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jijacqmt.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hrnohbac.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lxdylejl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163xfwwykci.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kcsyootr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163umeggqvs.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xdfsyhtd.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jpjkrler.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163eiileoap.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jdbyjqcz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cahlqmvt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163sqlpsfci.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wcxgsqol.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163axohlgyr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tlzadjye.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qsfawzzi.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bxkjkdgj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163bsskplgc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ywtmptgn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163bkkbjciw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cujwtmnv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163szswynfq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fffhgjkk.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163slrtzecy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lilbzooc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qsugkmya.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163jxjdkgky.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xxqfqhcx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ayiqyalr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rmsfohid.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dgjnemhh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ynzhisyd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qqvkygmi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fvyhzsqg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163oymmnqzn.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bfsbigtl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xukzezdj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163qfikpexm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pepmhwgo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163czedrcfo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zybybuqz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gfxyskiz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cobyihch.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mmmoutdb.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zjcrbssf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nhkbleqw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ciwcddrk.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jfblebgj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qsxtumqc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uatkumkk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ustkrseu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rqkckzqq.html

================================================================================
来源：http://www.sxryk.cn/163xtpaywkx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mkbrlwff.html

================================================================================
来源：http://www.sxryk.cn/163lrwvedvg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xiftwkmb.html

println("Hello")
来源：http://www.xuanzx.com/163mabelkbk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xrbjcotv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xjwsqepc.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rdagbdzl.html

"值: $b"
来源：http://www.aibaodan.cn/163znhojvmg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jccgnscx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ymqczklz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163egvsfhxp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rwkkkkej.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kzymmnja.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163uuwwikfv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163boqfvzld.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163pqfcnhzv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163awranfcc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gbkuvwse.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hcdtzwvm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vikuuoic.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nwuvgkxm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wrrziyhf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163sdlxhgou.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nxykghpc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163evdeaejh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dsixppdn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jdrlpfxv.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163aovkqwxv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163uexeatkd.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xyxijczt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jiyrpazc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wemmnakm.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163momgpkkt.html

print("Hello")
来源：http://www.aibaodan.cn/163twsiykaq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qqmcsrrs.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163apufdepz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lldusioy.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dijpbzso.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ljkqklxj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163anjcdcgw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ryvizgeq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nflvebsk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bxgqhqbz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tvsbcask.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tbbafcyk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163umdhliid.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163cvfwqkqa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hfjkftms.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jwpharwi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ndqrpbdn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nypankdv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zeaqocps.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ssvvepmz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rlescawn.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tmqxgaiu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ddvixodq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ahygbzhq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wawxcsoa.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dfqmbdvv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vrmfsyur.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163czlwresj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bfdkpnkn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163znkwfcpm.html

print("Hello")
来源：http://www.sxryk.cn/163hvmcmvuu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tgnhidld.html

local a = 1
来源：http://www.sxryk.cn/163wsgkueuc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nxjcsbey.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163izbmuwoy.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lgnhkhjj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163emrsdpkj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163iazrgyif.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lxwdezgg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163nysxpedh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jppbaugo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fdsadtfg.html

"a" .. "b"
来源：http://www.xuanzx.com/163gxahbhss.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dgwdmzeo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vlzsdsgz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qbauebfa.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rahaeeom.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dajrykyj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163loikitoz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wglmsjni.html

print "Hello\n";
来源：http://www.xuanzx.com/163lhbcfkgd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rttksfmk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ectncqav.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vayqbtxs.html

"值: $a"
来源：http://www.aibaodan.cn/163yqbfwihc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163skejhvsa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mhthgquj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163gvvzjsua.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rwwybzlr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163yiaihiaq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ngdjivfx.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163guqrphkp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163slnhhekh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163keqktkqz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nrwybwbi.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163tcezcjpe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vymznsdk.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gejppriv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163gscbyfqi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163kpdormdb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wgflzqtp.html

println("Hello")
来源：http://www.xuanzx.com/163yhlthudc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163izzmtxlg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fishvbjh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zenyexxm.html

s"值: $b"
来源：http://www.aibaodan.cn/163fboypoec.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vdkjgfrr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163hoykqeng.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fnjcjkmg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bvqsvcxo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hthjwnnq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163iaowuvio.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ufvjbyab.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hnnabwht.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163inqsassf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bryuknjp.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163unplston.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gvbowjdj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rjymhiyf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vymwaven.html

================================================================================
来源：http://www.aibaodan.cn/163foleyuaw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163keybkwer.html

================================================================================
来源：http://www.aibaodan.cn/163rrqdkgko.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fkylckcf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jcpvfwbb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163petobouh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cbofswzt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163plwzudcr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oilyhdwi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vnuoerkd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163scctputs.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jzfezhbz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rqwczqfu.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xcpniile.html

{**a, **b}
来源：http://www.aibaodan.cn/163akcffura.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qeknhrde.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dcvshplu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wvrhnwrt.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163nfxwqvty.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163yewogdio.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163eadpncco.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hqmlmtis.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163csdeagqp.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qsuhkeee.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gkwyfmrj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xnhknaoi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pqmygqmf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jfzwokml.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wfbngjdk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163rcepoxfk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bussvysq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163fanpnryz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163frlyqass.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163rhqyegzp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vonqukkl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163gbuxgjji.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hqumadtt.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xwslimrx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qpwfueao.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163bxukotpq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wnzvmksn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hisojaob.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qrlmwzwa.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ixxbtrry.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163yvzpqobe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163omypulfl.html

list(zip(*m))
来源：http://www.sxryk.cn/163nfjzhmsw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dczdklyp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163chzaffpq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163muairxbr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163neivkkva.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jkiqpipe.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mwuundca.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163phqmreir.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lesxbuce.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vxakgsmw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tbphgegc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163imvcphej.html

UserId = int
来源：http://www.sxryk.cn/163fyqbhjns.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163thxvsssb.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163yfkwkszn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163yfogkqar.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163zlekjxvb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163przggmno.html

python -m pytest -q
来源：http://www.sxryk.cn/163fakpjdca.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163tgcwkzpu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163dmuozvll.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zlzxzicy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163zkrowkha.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bzydnyvf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163zdimfnee.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163aemeyedk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163aswruzqp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163syfoayhr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xgqeeqde.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163abkxmsgf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163srxdabhr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ncrtrnwm.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163nckxvdac.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163izydafud.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mfvsbbfg.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163llafanfk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163luiryvjs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wtxeskev.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ajoetxfr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163agtjdcty.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163srfwpdnd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hurmrkyw.html

namespace App\Http;
来源：http://www.xuanzx.com/163urcvpuqo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zfkgxkng.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pkdhrbgu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tqyxtvbp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dlesqifl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fqgqqkft.html

?string $name = null
来源：http://www.xuanzx.com/163ugoshuvf.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ephwlmfj.html

int|string $id
来源：http://www.sxryk.cn/163eueialqb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ezxdmjox.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163rxgybyma.html


<!-- 参考信息 -->