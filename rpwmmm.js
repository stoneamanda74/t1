外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uywiozhl.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163crdyohxs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wbefsgus.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163awnehqkw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163farrcxoq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163eiviptjf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163szorkvdz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ekputgkp.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uvxthdcg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163afhcfvow.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ksreperq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ptohxtlf.html

#ifndef X_H
来源：http://www.sxryk.cn/163gvkmosxo.html

#define X_H
来源：http://www.xuanzx.com/163wmxcmobp.html

#endif
来源：http://www.sxryk.cn/163apreamqc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163kwqhklfs.html

#include <iostream>
来源：http://www.xuanzx.com/163tyyucdpy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163smicdfzk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kuwcyohp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163otnbobhm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jeqareex.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163defhhcqg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zhokmeed.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163oiejlhma.html

[S35] C++：map
来源：http://www.xuanzx.com/163oqgmxdun.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163epnysugl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ipuronwo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mhhqohgi.html

[S37] C++：set
来源：http://www.xuanzx.com/163dplnrrgs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163owssbbhg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mpikggpb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tzdpdxrs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163lsgszfzm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163uhbudtuq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163poaevmbt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dsbomrhh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xfibiumx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hloauwld.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jdgokngz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fdrcuqrf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cmypyqiw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jrnixdxu.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163arjyzwcn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jgdpnxyx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xuzwjmiz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xuzamerv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dsctcyqv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sqrkiznf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163lhoaaqzz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ghwkvmrg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jymxjflv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163sdhpmvjg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zgkhbvqz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163djlzbcwj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163yimfolfe.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tuttzgzj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lmtmbwwk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mnbvtpuf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163aftqkqyz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jwxikiig.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163etemgeqv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hvomlrxe.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163anvldwsb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ommpiyou.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163nnjhnhhd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hodlomtr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163eoeqlvso.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nqpsrnac.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dgkrpcst.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qvthfywx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vuhhjeni.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ravuggyn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163xsctmvcm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gtsstiyx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zwwoccld.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163asiacvyp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ynbfzlrt.html

================================================================================
来源：http://www.aibaodan.cn/163fihvhmjm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163uysfvzqm.html

================================================================================
来源：http://www.sxryk.cn/163bjzvuweg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pzadpyqi.html

println("Hello")
来源：http://www.aibaodan.cn/163sqwyigjj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ojpltdab.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163irsxtzwv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mgaumyjb.html

"值: $b"
来源：http://www.xuanzx.com/163ghltcidx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ygvldsfe.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ptpqzwvz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163phningmy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jdbrdsup.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xvllkjrg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dhiyprgu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tvecvhxs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xartltwp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rhhvnnjl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163eyzeilfq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pgtcqetz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rpkrzgap.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163icxkjqyu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zrfqggbt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wqylgsuv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xsgddylz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ymjpwfgu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pkptvixv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vgmxxxzw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tbgszopv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dukwzouy.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163icldudyf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nuqezzqu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163exfsmdeu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rkgdlllu.html

print("Hello")
来源：http://www.xuanzx.com/163qykcigvg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mzfleuhc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ztivstsp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gohjqsuc.html

"值: \(b)"
来源：http://www.sxryk.cn/163wqvllgnd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163strfcpph.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qpzpnlud.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uodqscli.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163twykiakk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163maeweurx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163yvkbqjcv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vjbrtnsj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rrvsskha.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163curhegkk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nwuftryb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163dwskbllz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163gtahejla.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bnmcwhif.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163atetqnht.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zmvqbwev.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xyaeexkk.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jnyugfke.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hduimzlt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mhthbccj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163oklvcdby.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qvldxrne.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rezmtivr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163huekfjpx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163nwccryip.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ldwjmjtm.html

print("Hello")
来源：http://www.aibaodan.cn/163hjkymcxm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163pxoomcsy.html

local a = 1
来源：http://www.xuanzx.com/163ywkybhzh.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163qwikgboc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jgcnlpkk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hkvvytzk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163hwvtbfkh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xvukksyr.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fvauxkno.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gmwewnuz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zkkqijaq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163xpltxofc.html

"a" .. "b"
来源：http://www.sxryk.cn/163vldcmnew.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163agzolaal.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163oqvibftn.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jxzffvjv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tshqbvat.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ackgezch.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xqupwwuc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rouzluhq.html

print "Hello\n";
来源：http://www.sxryk.cn/163finvswlz.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163sdvdgcyw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wjfszmia.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gilkzrhe.html

"值: $a"
来源：http://www.aibaodan.cn/163iwaurkjh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jhgrceqy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163schsrjzo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163shvyitdm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163yrihmibu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ptpfpyiu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163tckcrwna.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163prwndmjn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dxtmbukx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ijuttccc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163hxfeodjz.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163zqczliil.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163surwlpbk.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163arablbxb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uovlmktl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xatyghyp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mxxvtyet.html

println("Hello")
来源：http://www.xuanzx.com/163rfrbehlg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ljpyfgvo.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163arzabkzw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sfnresxl.html

s"值: $b"
来源：http://www.xuanzx.com/163daculdvp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163scdvvmzt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163khvlfgjw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nbzrprdo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ktphtsjf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163utyyrzis.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ihyzshsp.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ahsycfmt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163oixtvgdp.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vietmzay.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163iktbecxu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163djrvxcbe.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163qappsvwz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bdhzsxse.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bwzhbhkm.html

================================================================================
来源：http://www.aibaodan.cn/163xcnudvsd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bswwngav.html

================================================================================
来源：http://www.sxryk.cn/163rhucffco.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lbpzcyac.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zooxnevr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163vtekzyhd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163amkfsrbf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163yetzvrac.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163woqmqklv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163stlaqrvb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163cbaabtwg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qetloyrj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xjkmydxz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nacvcayj.html

{**a, **b}
来源：http://www.aibaodan.cn/163irfscosa.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jynhyate.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ttnszcsm.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qxdjrsea.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nomfemeg.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nvhrolpf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163hsxgmfhq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ddyeewgh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163uwhzmcxb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163deakcybi.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hvvlnvkt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jvxocudw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ivcbbcib.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jttewpwz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ulmttncn.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hqjtncwh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ndfqurvy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163urfuxxfx.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163kzjjpwsq.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cqhdscgg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mwayjwsv.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163eamdufur.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tfkjdwqt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163vogoaaxj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163zkpcpubv.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jmtmxuad.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163pejuihhl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ftjzakrg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ftzldche.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zcrqghpa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163gxpywacj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xjvgbzrs.html

list(zip(*m))
来源：http://www.xuanzx.com/163cxltuckw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163eghkzpye.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163scxlztel.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163fruvocww.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gmoyndjl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vrvmhanr.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163oleoupwo.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163umqahjpk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163pyidotst.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163sgclgefr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wuzejhhs.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163llmqolhx.html

UserId = int
来源：http://www.xuanzx.com/163yajwuuxh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sefewwue.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163vtwlavay.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fsmftlwl.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yunlvtso.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163fnezapgf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163cotdueje.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163owgnhpnz.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163fccqujnx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ltkgwcuf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lcuajphh.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163dxqlfohu.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ynnioekk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qatlkljo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163znswfjwj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xugkyixv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ehprcfsn.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jjhhrivj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163gyzckejg.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163rgmnvkjj.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tpafdzol.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sjcdhzcp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163fogkxrbw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ypsdnmaj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jeacukbb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sjqtjdry.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163kryudacn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xqplwoqg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gpbawlbv.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wgcrzmgs.html

namespace App\Http;
来源：http://www.xuanzx.com/163yndxftkv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vfkyknwp.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163hlyqgqrk.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163iisngihv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ginewpxv.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163oulzcjly.html

?string $name = null
来源：http://www.xuanzx.com/163mfuhhkqp.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163litbgkzj.html

int|string $id
来源：http://www.sxryk.cn/163quloonsb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163okqfgczl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163sslwqmtt.html


<!-- 参考信息 -->