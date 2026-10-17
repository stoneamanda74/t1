外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vavkmqav.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163whouaauq.html

fclose(f);
来源：http://www.aibaodan.cn/163sfuoglok.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uevhjjrw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jesjgdgw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ataagzro.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kzgocvjh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mlmnlsgp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163klbaijsf.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163avqfmfbv.html

(double) a / b
来源：http://www.xuanzx.com/163jnaejahg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wsmjifun.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xupucabg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gppiqdcx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kpqwszuc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uygxtgvy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163cncwxdmh.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163kutcmzxw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vsghdjon.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kdfxbsks.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xnvxdxqs.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163woxhblaf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jsvplpet.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ftafhock.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lpgzegep.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zsfmbtfs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163nrhnllut.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kjfrnexz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fhhobvcg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gvpghjre.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dmdrctgx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ihsyfcba.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bxelbrbx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ietrnmoj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hxhozxsv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vomyhkwi.html

static int counter = 0;
来源：http://www.xuanzx.com/163vdkndjkk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163oqinkkhh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163pjtrzkgz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163utnpfzlu.html

#ifndef X_H
来源：http://www.xuanzx.com/163cnotosmq.html

#define X_H
来源：http://www.xuanzx.com/163djyzgnba.html

#endif
来源：http://www.sxryk.cn/163xmfxvqke.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163iwjuqwbr.html

#include <iostream>
来源：http://www.xuanzx.com/163aextetvm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163yhdqcydz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ghcauetk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163chcwapyn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ajzselih.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hzdjupjk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ozwjyhjs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tsxfqboe.html

[S35] C++：map
来源：http://www.xuanzx.com/163utfbxbdg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163djajjxio.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ofgmclkg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zggdgmky.html

[S37] C++：set
来源：http://www.sxryk.cn/163jldqzovl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fbbgypfq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zqbptkil.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rvndrxtp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gjlrbkaz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jdlpvuan.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dgjtlzmu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163siuylkwu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ihwvivou.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163plkhicnv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yfugkyuw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mduuqbba.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qxthazjf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nhdqyilw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163euevytdu.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163agqppflj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yfdgsptl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vcnhtrnz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163kjkzjuau.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bluybrec.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kitbotvd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bdunllvy.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163kzjdtqiq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163okvqgpft.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cjupqpfw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hhbwlbtq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gnosgipf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dpklihoz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kdsajdop.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wgylfxzm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xshycrba.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fghahtdl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163drgrgrsr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mdvnzusp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163srefpnds.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jqmkaykf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mapnsanu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wpmheuom.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163celqpmth.html

[S56] C++：optional
来源：http://www.sxryk.cn/163acbwsinw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ffvmicuo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gfsnojkq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163eepqdmqg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cgipxhuf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qzkmeuzg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lfdkoftw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163pgdhcksx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vwejguvq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nbyzarrm.html

================================================================================
来源：http://www.xuanzx.com/163izawnsho.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vvaycezq.html

================================================================================
来源：http://www.sxryk.cn/163lsdhbqla.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kmnvozex.html

println("Hello")
来源：http://www.xuanzx.com/163ylasjetg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163twffdozs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jfvehusn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qslkwhml.html

"值: $b"
来源：http://www.aibaodan.cn/163llxouzpu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163oseqwkum.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ptcktpyy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xbglyzif.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bbayvqri.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hkegwckw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zytnwkbn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zvaqhhas.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zrqucicb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qyllmslw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uaoldbcw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sdlkzypj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163idvfsvvb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163snhepsnv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ovhlilut.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xaxcpyhe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zpqhylbj.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rmvdfhzs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163mbsbfdus.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163fbauuhrw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yrtjylfg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hemfghsc.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163emjizmby.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pncmfrdm.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163byytgeei.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163bluibbva.html

print("Hello")
来源：http://www.sxryk.cn/163tmhgcdax.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hffcovds.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uzuyvrrd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tldketxm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163osigsqhc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163uuuomiyt.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jnlwhtgu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163anqspiww.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163qexwzyww.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163uixjqifv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ozsrafvx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nuquedum.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fzscgmok.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163sovmjkte.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163myijbmun.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163stsursuo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163kjgbxsrf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oblqgbyj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163dqkpxfcm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vylywnek.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hnurmzae.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cjmvezte.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163lttlwtuh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163diimgwvh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vgxwthku.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dmicksuu.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kdpusoda.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uxhyhmrn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qsawpiqb.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163snfidida.html

print("Hello")
来源：http://www.sxryk.cn/163kqlpkcoc.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163sccfguhb.html

local a = 1
来源：http://www.sxryk.cn/163afzlfbyu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163oolaufko.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163itntondq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zfppcokl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zmyczskl.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163gvuoojtl.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fiiqsmrh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163doegmljs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mytnpaku.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163crzyuzaq.html

"a" .. "b"
来源：http://www.sxryk.cn/163yjchodtd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163qewbqpet.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163cepbmbir.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163shanhzsp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wfyydbsm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ednmboqm.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163eiosmjfa.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nmuavjbi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ncgpbrhv.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163kehcwxaq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qwtutqer.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163sbynimln.html

"值: $a"
来源：http://www.xuanzx.com/163vgwkople.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ltugblez.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zchkuboi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163syhmiybp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163xarkxktv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yfnitlim.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163rgeorcxe.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xhlybuxn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pnrojueb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kvlnwqal.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zuhagjvd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vafjganf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yxjdrlvr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163jccrjwmq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nhnlhkyw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163repzshhp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mskzurue.html

println("Hello")
来源：http://www.sxryk.cn/163dgpzghly.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hfsifrkw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163szlweswx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163gxcsqpln.html

s"值: $b"
来源：http://www.aibaodan.cn/163fojdluhc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ujhhuxwf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oomknilu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ecrpqytn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vhikxknl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nfnjtdot.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fkijjnkv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hxqfcika.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163phpitzgq.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163whhmissk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163daeyvfny.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kapfzqec.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163bzykinqh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ujbhnwlh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uhjrzzys.html

================================================================================
来源：http://www.sxryk.cn/163ebxjctug.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ueujpfgz.html

================================================================================
来源：http://www.xuanzx.com/163nfudbamz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jeufgcnr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gpdaxtbg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wxpcimtv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ybcyeigf.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vtddphyo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163wroudvrv.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wffxufbt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163aerthjvm.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163vhrfnidc.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fkumetmj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163lumlvqon.html

{**a, **b}
来源：http://www.xuanzx.com/163obnbdyvh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tqoefqhv.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wpmjdeyf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163atcmogol.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163upkmrnfp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163htlsmwfi.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163btmzyhdg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163apmehpnh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163kikoouhy.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bfbmdwos.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ikgvquzj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163oozxptfu.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wbmeutfe.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163eprxxeup.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163botngoeb.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163phdopjoj.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hexynhqd.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tenmfpvg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hveorzqn.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163pggskhxe.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163orsxmbth.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163zajsotvt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163uwpipqeo.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yeabnape.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ihlmemak.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jiyzrres.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uwxvtkkm.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hywjsggp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163exdnaieb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163fzppgnkb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163tvygedfc.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163rlavughf.html

list(zip(*m))
来源：http://www.sxryk.cn/163suofqlqm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ebxprkon.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xdywfqqq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fuljnvjw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ctcltzle.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hnorqblc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wwdemxre.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xrccuhim.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zvuzsprw.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163dalmpvmo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163eijhceab.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zjghoatr.html

UserId = int
来源：http://www.aibaodan.cn/163aggixmaj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nccvkyyt.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rkrgygoo.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ysbhjolg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ihksleyt.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bgspynud.html

python -m pytest -q
来源：http://www.sxryk.cn/163motrtqvu.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163mrjyhvrs.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163avrgthdi.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163urisbpus.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jsrdnzzv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ayxpowgm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163qhidrenu.html


<!-- 参考信息 -->