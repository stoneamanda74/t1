外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mygzrpry.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vdlvrfcb.html

(double) a / b
来源：http://www.sxryk.cn/163nwaqnpyv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163aoxmnqwt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dxqlfckb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tylnahce.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xvvbudxj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nkclbzqm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zcqaavbk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ylclzcex.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vadajovz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kxgxjhvf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jsidrsmw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wfclgwgg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nkfgmonm.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163olrpadft.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163piyyjlti.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kfszjnix.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ltztlceo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163yrkncoeh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vkkddpvs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fbkzatit.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uqqwfnaz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bhnxpdwv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163siabrjun.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dnmtcfjx.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xvbsqksr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163eitcckvc.html

static int counter = 0;
来源：http://www.xuanzx.com/163xcxzoixc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163yjmfzmyf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163voantsrc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163edrbpozo.html

#ifndef X_H
来源：http://www.sxryk.cn/163lovwfwci.html

#define X_H
来源：http://www.xuanzx.com/163domdablh.html

#endif
来源：http://www.xuanzx.com/163svxnelaz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zvsfcbpy.html

#include <iostream>
来源：http://www.sxryk.cn/163dbywkwwp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jsgrucmr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hyizrrfl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163awqdnpac.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mjmsngew.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163kkcmozfq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wpmitdlc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zsfnhzpv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163sciufngg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lkbfahnj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ktdgvevx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tvzpqoik.html

[S37] C++：set
来源：http://www.sxryk.cn/163ktcwgjgp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163sniogvtl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tewiulat.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nziycmoi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fzlollao.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xmtrctsr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fndpzpjk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ieqojxks.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dsetecaj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jtncoddv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163apkarngm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qcpfbmps.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mdnnrysk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mjitxoth.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gaxuqsfz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ozbbxeve.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163utllladr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bhdxwmyx.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jhqqwenh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jggvndnv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163euzxdysk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kambvbrt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ythvhduu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ckmooznb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163biaqqjns.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xxgksjta.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rwvwfgcp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rerqayey.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163evczdevv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163uulgutgq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163efsnndna.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jyppezbb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bkdoluka.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ujbmmqal.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163twunnnxd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fbaltshr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ruidijyz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yykeggvc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163txgookgp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yalyglxd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pbmlxlgv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zczastee.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163bnnypqys.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qcrplasp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163uscxmvuw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gclkqzra.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163uwgkubvu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163aeqrctqp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jgvidapk.html

================================================================================
来源：http://www.sxryk.cn/163zswoywuj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ktbzjqee.html

================================================================================
来源：http://www.sxryk.cn/163hdfbabiv.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kchxvvdp.html

println("Hello")
来源：http://www.sxryk.cn/163rgqclnze.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vrtvgegq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sunmuqgl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163himimhtj.html

"值: $b"
来源：http://www.xuanzx.com/163aazxggqt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rhhyaxom.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nmrboymb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jpsfphhg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163egllqlxz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cbgjjuzw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163cmwavkjg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163feqyklry.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163krnefqnv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wwkgyhil.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ljlvpjro.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jzsxysak.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lbvvyjpv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ckuddlik.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kiadftyh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cuavrtpn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lgwabeey.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163obtnagcc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163myhkoibg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gmdmmwsc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xwkscjjh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ibrokiiz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jnjiprmr.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163upfkiyjw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nwzruptc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qsestetb.html

print("Hello")
来源：http://www.xuanzx.com/163jnistsnw.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xljfhufx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ocjlhmzq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mismviuy.html

"值: \(b)"
来源：http://www.aibaodan.cn/163tfqqpmcy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163acyhdlvl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163syqgbhzk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163mcpmwajg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163bztctdug.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163idikjkmg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163fyylhqrw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qqvwctxq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nuizaofi.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bgqegiid.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163aumypxrp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fjrwszlp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163manvefkv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163krjqjlrn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163quwoyzpn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lujfsfdh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163yuheehdq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xbbjluxg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163odrlweuz.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163fwfgrmfu.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163cpgqiyqr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163fuknovpv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lsavajfy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jqrpzaoe.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163bnyyjphh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163hcnyuzfb.html

print("Hello")
来源：http://www.sxryk.cn/163siyretlv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fpxsidca.html

local a = 1
来源：http://www.xuanzx.com/163igjbpcsr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wytwaebq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163maoalwei.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lozelbvl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ovexxzwx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163znvyglzf.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163pxpkvunl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uzevfnas.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163vgskagkn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163npkfgygw.html

"a" .. "b"
来源：http://www.xuanzx.com/163zbsinehp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tknnlprw.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yjlbuzsh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163dbptolfu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jzzncbla.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163bzoovddo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163sqpxlezf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163eajzgiht.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uetggusc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wjlkvkkq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163frecekdi.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163kgqxcvio.html

"值: $a"
来源：http://www.aibaodan.cn/163xbkworsj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tfbrhpxc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vaxycdns.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jcyvrrdz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163vvkmtksz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pjmcjczx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163siaqlbqu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ejnudnpt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163viuthzlv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ihrnykff.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gbfkears.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163stlmagby.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vgwtzqmu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vzbvubis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qxbdvpcs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wmygtzlu.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hjwzvavl.html

println("Hello")
来源：http://www.aibaodan.cn/163tilgerwb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xirkkmqo.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163owfquoos.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jkihcshz.html

s"值: $b"
来源：http://www.xuanzx.com/163nkbaivyk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163llvendrx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163penherdm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nargpqnu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lryxzonz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ybngbyqm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163aeouzbzs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163lkbkclnn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163priusame.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163angcchtw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zyzosrzf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163gczsljxo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163egurorfw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cxtjxvrb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bzgkniwn.html

================================================================================
来源：http://www.sxryk.cn/163lkfdrffv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gancztnu.html

================================================================================
来源：http://www.aibaodan.cn/163ezdpqkig.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163rqvkvqob.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xqgurcnw.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jtrjvsdb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ashpzftk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jdgvodoz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163haejaacx.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163pkaljxwt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yemonpce.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163cagjeqsj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ugqzfsmk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rrcagogi.html

{**a, **b}
来源：http://www.sxryk.cn/163ttaudxea.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163erqpotyf.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zybtnght.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pjmembhr.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163muxysyti.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fvgbicwf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163rbcoimhx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uwcnbwpo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qankupct.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163osyespng.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kjcifgps.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qhxqqgcq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wtkeicod.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163krkwmjyy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163euxebdym.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gxauhsin.html

defaultdict(list)
来源：http://www.sxryk.cn/163rgelsbad.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163oqmjgwwg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tklbnnfr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163arummqoh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ngkjgxyk.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163oaddqviz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nveatbgu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163tsywmzgc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163sdcgotrt.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163yajvllbn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163cirpxgnu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xvjntvpw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163luyuklic.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pdmppjpo.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ezpgunms.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jzbvunoo.html

list(zip(*m))
来源：http://www.sxryk.cn/163dibhlpup.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ymwcnkbj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ypewpbmt.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163obpnsmev.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163oipzfbfh.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163sbuohelj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163tzlvqeuf.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163kcjjzxgv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163cjjloacd.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163thjponuo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rdpqfurq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xzpgjptr.html

UserId = int
来源：http://www.xuanzx.com/163cdyisvvv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ttszpwet.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163plmgjgek.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bryvmbfm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mekoxtnv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163svwadywv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163afkblxsb.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163skxviswv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163bxnifrpm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ryqmuybp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xeeivsig.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163bchtnuav.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rakntkxa.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163krhkvpcc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xzvhzvlz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zkhxdzce.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jjfnywcd.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163opoctajm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163hzbdgaqd.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ndoohrex.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ueponpcr.html


<!-- 参考信息 -->