外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163mnaujxou.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yotcbeig.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163nqnvycba.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rtaujtxy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nnafyonh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wqfeqhcs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xfqslmsl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cdbaorvn.html

static int counter = 0;
来源：http://www.sxryk.cn/163jodrjxiq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163trzntsav.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163yrqwxgyb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vsktemlw.html

#ifndef X_H
来源：http://www.xuanzx.com/163hnmjwbda.html

#define X_H
来源：http://www.xuanzx.com/163bctpefqu.html

#endif
来源：http://www.xuanzx.com/163wxkzahpp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xwozltqw.html

#include <iostream>
来源：http://www.sxryk.cn/163djnuqzte.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nesiqtho.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163czeaogzc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163emkfyybj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tascxeyq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163swqfitwo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jtzkvghb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163slccznjq.html

[S35] C++：map
来源：http://www.sxryk.cn/163smsmycqm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cjcehspj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lkjzfhos.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163chdqkewq.html

[S37] C++：set
来源：http://www.xuanzx.com/163dugtjogf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163afrruhmc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jqlycolc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dnhaaogp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mqogbdsg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163psutmlib.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163grodhuxj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jyavbkcw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163oonknmjv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ogacvsdv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wzptiixr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yiuaspok.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qtljwwyu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jomkmdnb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fejpwyma.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163autplppk.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mruzuuck.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xavepwcz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hbahapbi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163doijiipp.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ftgvvazy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163yteiooxd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163srlhbwsv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uriooljt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cwuiyqzd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163sdnkypav.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163eucsvklb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vrwzwast.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163gkamxros.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ywqkvkar.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163czdbkztr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163smqnygbc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jzywqqat.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ofgciffm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163imsmrnsf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gltxduju.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bmgvazqr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bhxgeoji.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jxayspbm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yyoipnbw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vucocrbe.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lxayluaa.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ldfjbced.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ubuxidoa.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ucsjxmuz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ridygkhp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xeqwgvaf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163jjqgqgta.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163okxnijtt.html

================================================================================
来源：http://www.sxryk.cn/163aucjwuoc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163baewziip.html

================================================================================
来源：http://www.aibaodan.cn/163zsqpsldk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163oxdbqjiq.html

println("Hello")
来源：http://www.sxryk.cn/163kavfdqwq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vlyzedip.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hmancxnk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dacnenlw.html

"值: $b"
来源：http://www.xuanzx.com/163pygigukg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163awbhecfm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163iecvlpcr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dtsowbeu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bwqfrhch.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163frixuxew.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qpvzxpef.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xjwvfqvm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wcmbhkck.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ibvyfuxt.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hlldhrio.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jazzfwkv.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ascofwbv.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rkuvizsz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ivujowmc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ozioupov.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163gisegyzc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zpoyqpdu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jqwsjgxj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ubfdclat.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ylcaxars.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cbaaidrw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vyvybjcy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zuqbennz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rrvfzzib.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163mwhoxtqv.html

print("Hello")
来源：http://www.aibaodan.cn/163ukznixjn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wzhiodvv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tidobdiz.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mzfaiush.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cxzjnimp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qpxtvryt.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ddizlekn.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ftormokw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rjsacjor.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ckmvlhrj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ifghsbig.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163rvmpyisc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xhxgqbrc.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163zoenyebi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tiulvoow.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bqrgcxgo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hiwnfyam.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qmhwpdhj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163danhuegv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163sbufngll.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163msvnohxq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163joytrciy.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wyftxyes.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163kogocuyt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pnmebarh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163leybjmhj.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qyvfhzdu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163evdogins.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163zcfmekjd.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163npxxdzhg.html

print("Hello")
来源：http://www.xuanzx.com/163vtjoavrv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hvcqkrkm.html

local a = 1
来源：http://www.aibaodan.cn/163msklvaij.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qqujzyio.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cgnlding.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163yloutzam.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163upxzstow.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163skoczmls.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163yykujbrp.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jtpitdkk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hazvnbmy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ufeqxqyv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xyrsgurx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163zzckwnxj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163dzwenjfx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ahiurnhj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wrhfivhn.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dnipzjsx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gxkxqxkg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ecgxgwjj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qvfevcrs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163bqxuxwlg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nziewmdv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vsrewgqb.html

"值: $a"
来源：http://www.xuanzx.com/163tikzdiem.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163oxlhojrl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kjotdren.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163yqsrojsf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tdiiqujt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163prxyydaj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mohzuxnk.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lyeifoiu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163lcrplxet.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qhrvpukb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163khcphube.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ockpvolg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xhjjaxgk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163rfdqcnpw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bnqfkyec.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163nsshonku.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163eneihwzj.html

println("Hello")
来源：http://www.sxryk.cn/163dcozglzd.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fhqcxetm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hucdpyes.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vzymbvih.html

s"值: $b"
来源：http://www.sxryk.cn/163nihkxwjb.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163knolcgla.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ezksiyft.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nqxlrywb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ujepione.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qidbttmb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163hxuezxql.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mqdoekmx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kuqmiixx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lzaayrzp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163smxdmwsy.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wuvndbpv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163aqdkebho.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oquuslbg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nurfruhp.html

================================================================================
来源：http://www.aibaodan.cn/163qcqssamv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hidqqzcy.html

================================================================================
来源：http://www.xuanzx.com/163lmejuwzo.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163neyhpqbf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nhidadxr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163aosyvcdj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wjnsausn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163xacnrapj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xqiwhcyg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163riuqetvt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bwitnjex.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163qhopaxre.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vamakkbc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ztyrcxtj.html

{**a, **b}
来源：http://www.xuanzx.com/163gzsipdxn.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dvuigioq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163xwbhbuwe.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hratvyiw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pavxnkjd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163cdxajucs.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163rfvdsajo.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163gklimxlr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jcmwdixq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xatgdvny.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163nnipwjca.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hjbyumsh.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jckbdgog.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ietzityw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163sarnzwio.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163afxekoih.html

defaultdict(list)
来源：http://www.aibaodan.cn/163herzzwyi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xyjndnro.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hjuhrmfz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qosnppxt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163lihnyyfi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dfuoxncf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dbuxoiky.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pthyclhc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qzdmwdkc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hfihcqsn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mbmzxmgq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rhowuhvo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163oxgwfbtz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rtqrkqeb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vpgxdfwo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163iefvolxq.html

list(zip(*m))
来源：http://www.sxryk.cn/163bymfuukj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rjilsfxt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ycqnffqw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ktqfaywa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163juhmsxyn.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163tbhkkvdi.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163hnnpuqna.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163pbzzdphn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163psivbrlu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vymuicdm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163czvkpjmh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163szbiuqpk.html

UserId = int
来源：http://www.xuanzx.com/163xeclpyak.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163djlwybae.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163syeabdry.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vxulpuwf.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163oubqqzpg.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163xitumfuu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163msansosz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163tlknlamq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tstzlkir.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163naqqciwa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163wchbmnti.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rrzrtxhm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xpyzfwce.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163aacaqzhd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hzsiftog.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163opxslsco.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163icfqiibh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jxtgrhdl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fghcxqrx.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fcmpajsy.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163edsdaexs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hfwrhsoe.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ijdmmxsn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dbrrcwau.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pdnykevy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lhyvsdff.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nhnzhwku.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nyokbaka.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163icjnyywj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163wirwolzr.html

namespace App\Http;
来源：http://www.xuanzx.com/163uvffcfsc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jcnrdwuc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lumwdtlo.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163cizimlaj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dgyxmqjm.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163zxbicsbs.html

?string $name = null
来源：http://www.sxryk.cn/163uxbkjkxe.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163zqzstqjy.html

int|string $id
来源：http://www.sxryk.cn/163bdcskxis.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163osytoyhc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lswqmmdx.html


<!-- 参考信息 -->