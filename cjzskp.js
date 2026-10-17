外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wgsrwhty.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tsrmrtjg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bgegieti.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oeotryoi.html

static int counter = 0;
来源：http://www.sxryk.cn/163rhjhnlmd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163izfpxxyt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xamyecbs.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fcslaxno.html

#ifndef X_H
来源：http://www.xuanzx.com/163cgiovbgt.html

#define X_H
来源：http://www.xuanzx.com/163lbigqsxm.html

#endif
来源：http://www.aibaodan.cn/163rguwgdor.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lublbsrs.html

#include <iostream>
来源：http://www.sxryk.cn/163yveymrcs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lgapsogo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wlntajkx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163euvccnqz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cnesyfau.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jdnxotuu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163okmpkjzx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mqkligdd.html

[S35] C++：map
来源：http://www.sxryk.cn/163orzuflad.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163veuqaeab.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lmugwnsi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uvjxclhj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163javwsiul.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wzlecrid.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dqdtwmbg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gipdrpes.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rlgyxwlz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vudlbrhb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fmvrldsc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sfyrzubp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163vgqkqdig.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kmzzgqnp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kmmswfmj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xbrxjkiw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mnaowkfg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163huzezftp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nwkuftuy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fgxarius.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163simzjfle.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rhscbpwk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163opxpzrqg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163iusoywvf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163tinszoax.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163homknmcj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fslbcivq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qwvvcvvy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163nqvvjxwj.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wygjldso.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163phjxatum.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lfrvgljw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ohkchdho.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vodrbzbi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ekpytcyg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lzcapztc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vzxexgqg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iodsyhex.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nrkdidrm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163njxecbla.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mvistdga.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hopgjhij.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vorvggzx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bngatvob.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gmwgvklm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gzlrondm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tgwuenkp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lqcbfkti.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sebcjcem.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163laaqpjxa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163phnvantz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jpbzxyzp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ksyeewxp.html

================================================================================
来源：http://www.aibaodan.cn/163nsgywrtf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pvqhgzms.html

================================================================================
来源：http://www.xuanzx.com/163lwgrfqcf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163fphemwuw.html

println("Hello")
来源：http://www.aibaodan.cn/163vjzykwqz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ltyeulps.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cbklnxhf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mowwvwwt.html

"值: $b"
来源：http://www.aibaodan.cn/163kjxdtufg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163symivwij.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tvivixxm.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ajryheyc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163tysmnged.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163bifebfnu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163oafutvlo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163miybrdeo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163eogayyzw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fonjonct.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ylehckrd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163cnqimkwo.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163nrsdehfu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jdnpzwfr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rhnwjohy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163qgcorkev.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bvtrrtps.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pmxttqoo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cyzwcnxz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163pnkskhsq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yiecggnh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163satjlhdl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kxdnexma.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163werdjzqz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163znnxeogb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163feghraoz.html

print("Hello")
来源：http://www.sxryk.cn/163cfqikhfi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163guxipmku.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mroaqujr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dojkwjdw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ubjilgpf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kcwsvapb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zufuyeds.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sujgnokh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163csbzsxhh.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ouxflrjd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bcgcqstj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lrjftggo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hbexaynz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163esxfhfjx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hjjtgzxg.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ejvpuimq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163gdvejiop.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ciippdrk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163psivzbao.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163afylkxyf.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qdvktroq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163igkxtder.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163oegcxrbv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ocprywjw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gllmkalt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hglnqdfq.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gmlqqqql.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pboqjqhe.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qjdxgmsv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qlnzmvnl.html

print("Hello")
来源：http://www.aibaodan.cn/163mmbxthtr.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163oluxhmyv.html

local a = 1
来源：http://www.xuanzx.com/163eqlaszgq.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rgaevbdt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163riustobv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163yscdwfrt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163onlxwsdt.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pbebfxmp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163drofwyyk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163tnkiiyoo.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163lbtsxdtv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163amruzgxs.html

"a" .. "b"
来源：http://www.xuanzx.com/163jmogajup.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163vnzuykcx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ozqpehqf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163scmrhdii.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cotrtlrw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eecteoyn.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163lizgztre.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fscapwbl.html

print "Hello\n";
来源：http://www.sxryk.cn/163dzddopni.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vlmlpuud.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163suvzzvkb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kelmuhux.html

"值: $a"
来源：http://www.aibaodan.cn/163ivwyuxol.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zgqnayyl.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163fxaffyjz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hemrtnjj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163neurlgec.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zpqbngpk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xbiytgdq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dbeoczip.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163haawqzal.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zjazrpnm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163lszmyctw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nnthjunl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163quihnxaa.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qkqndngs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xuagqakd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163llvgocfe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163guyhagsn.html

println("Hello")
来源：http://www.aibaodan.cn/163rupodnqv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pzmijcdi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fflnmbme.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gpwntazj.html

s"值: $b"
来源：http://www.xuanzx.com/163slexzvkk.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163itfhnrbp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fugujcsi.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fwpqbzpv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wlssfobl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163agntajvt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lgzhigms.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vbwmcehb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rsxhwxxk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zggsswrr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nobclrmc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ivjwbnpw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tsiptndw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zsaielbv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hcmvftsq.html

================================================================================
来源：http://www.aibaodan.cn/163qzkrfgbe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nwewqkyv.html

================================================================================
来源：http://www.aibaodan.cn/163dkradgcl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fpulkxkb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163wmuupizi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ljzuiupg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vfzzkjcu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163xwywyusk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vsyxalfz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ekfwrgpr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ognqfbus.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zcebysel.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163exzjqigi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nxlidehk.html

{**a, **b}
来源：http://www.sxryk.cn/163cpztuajs.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zaantidc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xzstruxo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ppbckzic.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ddhhleza.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163euirywrc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tqaflqzf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yjwhnlva.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163whkvbtej.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163uqlkxlpi.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dbpesjza.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zqmwhsmi.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163hkusegqa.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163kczcscsw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mesjldwy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dxnhsmhy.html

defaultdict(list)
来源：http://www.aibaodan.cn/163flpycddp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163llyaokmu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ewklnrwl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tfcyusuq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163svdmamnh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163dwhewegz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ymeckhyl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163luzuraec.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163glsvvaqw.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pbezldha.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163bbtopskr.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yzgdalvh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163dogyudxm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lilbplcs.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163iauugqau.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163fbthiycy.html

list(zip(*m))
来源：http://www.sxryk.cn/163jsaltlgf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hirzxrvt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163sdtbdnai.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163wnbzyavj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vfmrrtrq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163oghjtvtn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163gohztqbm.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163krhnjjkt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bpspgfko.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163pcltsono.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zbljcwnd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qjyapojd.html

UserId = int
来源：http://www.xuanzx.com/163yszbqqau.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163spealahd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163hrpvvnej.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yuwhzkyv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sybxhnba.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163sfsbaqml.html

python -m pytest -q
来源：http://www.sxryk.cn/163ngaxpsyp.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ntxpcgsg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rapgramt.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163sluhexoi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163andtrhnq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hccistrn.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wjnikdmm.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163aqsxtruf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163bqkfzhlg.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163dfrxvcsg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163zhpdihqr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163kwyiqqvb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pnaogbch.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163odxoceeh.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163cckewkrj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163stckdrzv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qbbnzryn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gircmbum.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163chdfjrxi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lkvtzhrn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gytfjtzq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ytcxlybg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jrxkrvju.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163suighvks.html

namespace App\Http;
来源：http://www.aibaodan.cn/163sabkegve.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163fpklymrq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rhitqcmx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163mjkqgdzz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mhgmzzxn.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tzomdrst.html

?string $name = null
来源：http://www.sxryk.cn/163mdhugczx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pbscuetb.html

int|string $id
来源：http://www.sxryk.cn/163eeynxhhd.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163tnziomeq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163wocffgjr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163insccmgg.html

public readonly string $name
来源：http://www.xuanzx.com/163ccwkquii.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qayoofld.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163tlbmqqpt.html


<!-- 参考信息 -->