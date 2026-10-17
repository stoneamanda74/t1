外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mgiqshsu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nrwlpqwh.html

(double) a / b
来源：http://www.xuanzx.com/163qipwqdjd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hbwvtmzm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163cuibdppi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wziqfzdv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nauncsvu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lvhvxnzt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zsyjlyyg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wmdyovzd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wqhjezqr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ekoenctu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163piqcrkbl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163mnxspsxs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pmpuzyjq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163uffexexv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ngkkujdn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ziwqvbpu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163uonerwqx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dhtqavtm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163llwxcygk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ziqxflgj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kjxzmrwp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163swmemhqs.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163kwgkxpab.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vhodkfcx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yilutjmx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bgbytlfc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xhddwwko.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dodzhznn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fjbhwoyl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ydsmzfik.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wgzgmmhn.html

#define X_H
来源：http://www.xuanzx.com/163akgbvvmi.html

#endif
来源：http://www.aibaodan.cn/163mhbdbxxg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ybtwqkfw.html

#include <iostream>
来源：http://www.sxryk.cn/163adqlcwqj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ccskegzu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hrlniefd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qkzjxqrb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zijesryg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qlulckwq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163sdpnorrn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zyjjryfl.html

[S35] C++：map
来源：http://www.aibaodan.cn/163clmfpjrx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bqdjieeh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xwxegdff.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fgihzqfj.html

[S37] C++：set
来源：http://www.xuanzx.com/163lkcovrfx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qmbekwce.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mynrdnwi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qsplbsth.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vrxwibcm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bixmmbzt.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wapuknjt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fayubcwx.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163vtnnvrrn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xpwretqh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wkazjjyn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163peotolqd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163yqxfffbd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163kaxijrso.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dwrcghkk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wcrjrmuv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jkrufrkk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cxnozxmj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163itejqspj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163urbnqcfs.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163idnjydgo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kiovrkqf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163edhwjbzh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163grganrci.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ygjvxsoi.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yvrvyvql.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163yibltvdy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pdhdvzoy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vxpbizvd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cekvbhej.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ccsnbwjf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163yjhisken.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vgdqkndm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163rgudgwhy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hyytbhfl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tkuvwaev.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cfwhojiy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rcjxlyrv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lllaraha.html

[S56] C++：optional
来源：http://www.sxryk.cn/163buejeuti.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ngqlwnmr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ciwunhfv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163edpxrhhc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163imwzixmp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fybqhmbe.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hrqfibjk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163knkuewoc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pnjooudl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zgzsgpuh.html

================================================================================
来源：http://www.xuanzx.com/163skdkemqh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zolzxjsj.html

================================================================================
来源：http://www.sxryk.cn/163buahyazz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163balwzqht.html

println("Hello")
来源：http://www.sxryk.cn/163gavpifdj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ptwpqfdc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vovcemvu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ehcmppej.html

"值: $b"
来源：http://www.aibaodan.cn/163lkwcqnzw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163aqmqdzhs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tdsiuazd.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163sicyxiwh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ghtcxpps.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jvsauizl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uqynhlkd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163svqzevfc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mhgmqdkc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oybgiuqj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bykwtenl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163juocvzbf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cgozxhcj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ktcnkvzf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sxpfjdkb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xtmrrgra.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163sndduofl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lpkamass.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dtjntktt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qziqlzir.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nrsfzcex.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cjamzhmb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jgwsfdyq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163imcdagkx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163gimjkeuu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ychosqzd.html

print("Hello")
来源：http://www.aibaodan.cn/163hjahjskm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qtouoejd.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pqxazwvf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vwlyjfni.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vqsjakje.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163catuagof.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mvowcaoi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sywytjnl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163xmmjamzg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qcoahptd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ntdherwh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fwmwlhwp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nphnvvid.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fozbvxsh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163usatrjee.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hnbbihnp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cbioeclx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ngeohgip.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qnwjrktz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hvtzmzku.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163atotzzfz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163trrydeya.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pzazbgwt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163fpvxrazf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163oyrjemki.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163adbowwak.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163znbbpnmd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163iriuixen.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163unkccaxs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163iqcmibsv.html

print("Hello")
来源：http://www.xuanzx.com/163iysojsaj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nkewyfos.html

local a = 1
来源：http://www.aibaodan.cn/163evsbwvkh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163frdqsiyr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tmadmzpf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163blmxkxbz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mqhrcodi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163nwxdyems.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163lnuagnpq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wfabmkwe.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nnbunwja.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uasurxjg.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dcgurmah.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mwkbdfte.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bdhewwvu.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163phsdjrjx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xziepsqh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hkxavamz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vrwlmxjn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ohlpcihu.html

print "Hello\n";
来源：http://www.xuanzx.com/163aighktvp.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hmqbdzba.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gltfckym.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fgbbwtvt.html

"值: $a"
来源：http://www.xuanzx.com/163tuyhglsl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pyniryao.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gobaauae.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kpqtmcyh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163yhzatnne.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dytulumx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qdymbdsi.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163tdnzdiaq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163noacgwwn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163swuugdgw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bzvzqxwg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bnuzeevf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qdsqkrmo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kuyjkqfa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yeddqbxr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jmbguwuc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fjewnynt.html

println("Hello")
来源：http://www.aibaodan.cn/163ygwletnm.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163upgxtopq.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163glbwirnk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wiavslqb.html

s"值: $b"
来源：http://www.sxryk.cn/163cdaxzmgs.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qpryityu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163nfexmyze.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jprgjalg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xoehcoeb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bbtckoyl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163stulcdxn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kzvjxmxz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uduylbps.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163efznbikv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163imdzrlgs.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163shkcatwm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dxruzorx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vnlfojdx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ewhzfmva.html

================================================================================
来源：http://www.sxryk.cn/163yqblclhq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aijjjtdf.html

================================================================================
来源：http://www.sxryk.cn/163yiuuqjhw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163adcmuavc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163mipdgmbd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vdfsjfqg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kkzklzax.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kxrxeuzx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qrulomwh.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ynzydicq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163cwbtnwtj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163juejohli.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163udseeyeu.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vxgpzsto.html

{**a, **b}
来源：http://www.aibaodan.cn/163abkxeqqg.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ejybeqzz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163flwzryxr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hoywgioq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163somrwpka.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163uxpwriod.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tdliipoh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xfjfcpwd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kyqsftun.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163edfpuxbc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163brxhpcth.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163uircjgfz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mxirmsuv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163jaagjsyc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dzqdqvux.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163laceobhp.html

defaultdict(list)
来源：http://www.sxryk.cn/163dtffbasz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163bigididg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zwfqpqfj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wsxgvrri.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163abkvxmum.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ntgjmrom.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fvcojlda.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163fgttfnkz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qwdqbjhp.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yhfyoceq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ocdcerkn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163tmixwyhx.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163jxvewzak.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163kaibpjyx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163yyfdddjy.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mlvxbvlu.html

list(zip(*m))
来源：http://www.xuanzx.com/163srbcvrav.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gzppgjkg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163dtfhmibh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lblvstnx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163vvesmnqb.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rgjyqzaf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163klnpnahb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qgxnacxd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163yzklcskj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ybauntvm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163pehsafpg.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163usvzfcgj.html

UserId = int
来源：http://www.aibaodan.cn/163zknszswx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qvdklfxv.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dxkqcoco.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163kjntsyyk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163yfgnwkmy.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tlbakbjk.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ooyffgew.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163jsiueuzw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ywxqcmjd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rfoetpbh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163hnceijat.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163tozhkxpb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163juqwfhel.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bupkyurp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163inyzfxpb.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gwthvzle.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gehseame.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bkgqxerj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163hrmyxoey.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hktflfki.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fphqvakm.html


<!-- 参考信息 -->