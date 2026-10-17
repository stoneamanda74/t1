外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ebfovzsk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163wkohuwml.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163qjyeifei.html

[S14] C：枚举
来源：http://www.sxryk.cn/163czbcjmhr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qyowahxg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pbcoiebz.html

(double) a / b
来源：http://www.aibaodan.cn/163mxnxufrk.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163kzwofoiu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wmexayzv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mejezekj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163elnsxaxa.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163opzvfucw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ccmckgvc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ssdjorwq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zryafion.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163uwbpeyks.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kjizuntl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rzcfimxw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vgrexedn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ebjeglla.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jawfgcnn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zpxvdmrd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fscrybkf.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163adzcgywi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ylogmndl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bnwtdvpr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wrxcjkde.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zzyhxily.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163adxhzvbw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tfchdokm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ahirpjbb.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gctgdrdg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ovpcsufx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hndrgzby.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mnjahnym.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dfisivha.html

#ifndef X_H
来源：http://www.xuanzx.com/163yibxrdcl.html

#define X_H
来源：http://www.aibaodan.cn/163veaddiqz.html

#endif
来源：http://www.xuanzx.com/163kntjdqje.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tvefifil.html

#include <iostream>
来源：http://www.xuanzx.com/163ubbqwkrc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ygiisotp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163avvjpext.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ndxvqaln.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gkorsqnj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163yhdjfyur.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163snyshotg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dbnoxgan.html

[S35] C++：map
来源：http://www.aibaodan.cn/163kfcdkrqw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bdrpzgqc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ukhdzhub.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dlhrziqn.html

[S37] C++：set
来源：http://www.sxryk.cn/163fafjhdof.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jrrsrtfx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sogtikht.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163yaofhpcs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jjpxfmuf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ltthexmh.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wptxwkfm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yhtvasob.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163etkmhuwd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163thyiqzun.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xwogozyc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gempaqco.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jgaesmeo.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163goglfzuy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163koydtnpc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zglzdrkm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wzqzvcpm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gtffofvz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jlvkpsmm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163voblfjul.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ncgdoktl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zyzsgwrv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jgwnqere.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nkggsott.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163aewkjiuy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mvrcflqp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jlsnybjd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vfvuepwu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rknoalpt.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nthrscpy.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163innrnjwn.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cbubfhsi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ydsqmsqv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163daetaeix.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163scfmnvfg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ikhuemlv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qwrbdplu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163htcxgdyp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bafjclfn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hekcjsnx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163syhrflrg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163uklwmuuj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vblgvxna.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mkzeypzi.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zutopyru.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ascljojc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163soahfalf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gjnxfxbi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lkcszihc.html

================================================================================
来源：http://www.sxryk.cn/163tnusxbut.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hnoihvdr.html

================================================================================
来源：http://www.sxryk.cn/163xiizrzpc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uildwmbo.html

println("Hello")
来源：http://www.sxryk.cn/163exaokfts.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eupabcjz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tcyrbugk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vqoezxbh.html

"值: $b"
来源：http://www.xuanzx.com/163wgkbuxad.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dzrpbeje.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gblejjix.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pmvzplsq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tzyuuayl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rsqpgeqy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163duejzgdt.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mjfassud.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ndtyisup.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qyzsagrc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163mavblfmg.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dwoccqre.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163puhlmzbf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yuflwixi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vhakqvuc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bogchnwa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163qqqcwosg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qlezhmve.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163picedhkx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mkrystus.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163piwsoobx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163edyecdbc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qayfdgrl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fsgqjlcb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163juizumis.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wqmdcmnn.html

print("Hello")
来源：http://www.xuanzx.com/163goblckxn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163fwgwmdwe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163btizokkl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cuwiucth.html

"值: \(b)"
来源：http://www.sxryk.cn/163fmhzdvol.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yvziizxq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163sbmjtyzn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qflitdyw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ytytkopa.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163acafheix.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ivhiofno.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wzjadwcv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163nvposmlp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163dwwvmyrf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163istvfffs.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iingrdjc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lxzakowx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163epuroqmg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ooqyvpzm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jiuwhghu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yumjiwlg.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163njpzziey.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jhgxdmmg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163aprhsfak.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rpzopkma.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163znmkxfvo.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163guyswkyp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rdhtfivb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oryggrkx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nfruvjhd.html

print("Hello")
来源：http://www.xuanzx.com/163vczlndpv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tyqhajnv.html

local a = 1
来源：http://www.xuanzx.com/163yprfvsbx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hetbaijp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rnhrmodu.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ueuvtjrm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qjqlobqx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hvmvzlqg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163wdquoemk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163skfrbjjv.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163wfkdpbmw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gvnzoqmg.html

"a" .. "b"
来源：http://www.xuanzx.com/163ufszngjg.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163nsyuubjg.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jlotlkqm.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163baahlzgu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cvufvvev.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163fxnidteu.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zsjkquoe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yhtizfkm.html

print "Hello\n";
来源：http://www.xuanzx.com/163ifmsgvfr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163stgjxkxn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hngzspwf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163gassllel.html

"值: $a"
来源：http://www.aibaodan.cn/163issrnviz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163omomukgd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jayxzplk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jrekaozb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163sjubquey.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dspputtz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xdxwbvwi.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jiiqvygo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163zszifqsa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zweulvvv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ebjkfejk.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hsvegmxs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lkyimeda.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163izwnpwig.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163whudjbsv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163johsoavw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163vokkoosu.html

println("Hello")
来源：http://www.aibaodan.cn/163vyuvtvbm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nnwmbodn.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163lbpaykbt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ihcxaogm.html

s"值: $b"
来源：http://www.aibaodan.cn/163jhuyodxa.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jfusaxxb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ghhztajd.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163sxzbinda.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163bxzhilsy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lijsgkzn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163iwzmryxn.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sxkrkdre.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163unxdylwf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jgasbptn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hdqgtkdb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163oomjckul.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tjudboig.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vcdogzga.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hhowncdd.html

================================================================================
来源：http://www.sxryk.cn/163zydwcgjw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gmqnyfwg.html

================================================================================
来源：http://www.aibaodan.cn/163syvwrjkh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163trujoexa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ubkdqwqz.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hrltnutg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zmizlsaf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jkajnsmv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wqaeazqu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mnvwwdtz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yahfgqom.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163rbwbtdcm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kmedkzqy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163buuylmnr.html

{**a, **b}
来源：http://www.aibaodan.cn/163yagzacdo.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rdfwzbdh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163lhnsmolz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163pmtopiud.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kxscgbpg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mizrfprm.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163zcvmpkna.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zcqhnoop.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gsnyauaq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jihxqqjo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163flunlwhx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163itbolnqn.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dtlkwxwd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ungwjlnh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163fjjktyjm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bpmqcqay.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rmugyknf.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xadbsygn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kevziqew.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163egoeaoqv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ixfywbtl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zpwqgivt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163cyuygghw.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163upkcevzi.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163nvgwxlxp.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163tznsllzc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mdkwpifp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163phrlmsoo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163zwrzgerr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163yvtfxtbh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kcdstyhq.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163bzhzqcxo.html

list(zip(*m))
来源：http://www.aibaodan.cn/163oquvibjc.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163nsccjbqd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163rwwmlled.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ndjyshuq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163gpzpnymj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vpmiidwa.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jimpfoap.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163askxzmqv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163pbglxpfo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163armoufja.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163kebttzvd.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163xyxnafpg.html

UserId = int
来源：http://www.sxryk.cn/163omktpftc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hnztimlu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163raskcqte.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bfthnwbe.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163nrnhxnsa.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ckmadxrj.html

python -m pytest -q
来源：http://www.xuanzx.com/163ulgjfgdz.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zwvwcrbm.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jacnixfc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tgezndqn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163wlhzdiyv.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ruxqupsr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163acwljfxf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ggncqszv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kkbiraxz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ugkkxwva.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jfqpszrz.html


<!-- 参考信息 -->