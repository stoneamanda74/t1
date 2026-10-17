外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xogsytcs.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hiuygjmu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xemipegg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ukzbszpj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163sublayic.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163poeahezt.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xfdxauai.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163phsvucrf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163chpxddyd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163sirdbelb.html

fclose(f);
来源：http://www.xuanzx.com/163firjcqlo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uzdutjuz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163muxtdnbk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163talhrmsq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kdrlppzd.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lddwwqdf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dtiqsvcv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lysmwmhi.html

(double) a / b
来源：http://www.xuanzx.com/163dnhcrmfx.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163faugkrgi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163sbyqchqg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bztnjhzu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jwwrvtcm.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163tpobqpfd.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ctgsodyy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mzkgjktr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163opcrhqib.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vrfahyoj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fxpnmohb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163orweswtr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pnedmfeq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kpkspmte.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iireofma.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jgkpjlru.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nswxwgdh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kynaltou.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vsrztlrs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pvxgaffp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pokeneww.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hitdmlvn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hnrendbk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163dipqmmnv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hypyngqu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ymsybtum.html

static int counter = 0;
来源：http://www.xuanzx.com/163cudpqjpt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mfvfkglo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163etateaqe.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163isaxndhq.html

#ifndef X_H
来源：http://www.sxryk.cn/163yfpgqxuj.html

#define X_H
来源：http://www.xuanzx.com/163demmbghb.html

#endif
来源：http://www.xuanzx.com/163rpzhpokq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163deavasor.html

#include <iostream>
来源：http://www.aibaodan.cn/163ahqbqzfu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kiyoucrz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ebemsozq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ivjgbalf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bekeycng.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fjoliyzm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163aepsdeza.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xqkglboc.html

[S35] C++：map
来源：http://www.xuanzx.com/163fbluuhxt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ndtinokc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ggikgiko.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163publhnmf.html

[S37] C++：set
来源：http://www.sxryk.cn/163gbxnmayf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kugzbtzh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zmfygazy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ykfmxzsj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163lwgdpwik.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gmywlrng.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163goqkiwos.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ltkegten.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rkobgllf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vrhxdsbc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163kvhmnqqh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qufjuoow.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163bmvuatrp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xzkyuzlr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163olbzipmf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163scnufbbq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163cbegyycv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gyyhamyh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163okyaydpk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nmjqfbjb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rzprwlwg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163uaeajmyj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nveleibt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qizacjdl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wffxdocg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ijjaazuj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163iggsrwal.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jvpynaac.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fxgizyup.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gewbqabd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163advxvsiw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vnekjdbk.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163egmrgbec.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163txdrxzer.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163spxgzrco.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mnevlrny.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qrrliyuu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xzuhynta.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ayceilmi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wrsqyzyg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ecqzkmpr.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dhpegeyu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uzpwquqh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gciwyvaw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ghurseol.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mguejlok.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wyrhxocy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ucvtahhs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qdkynemx.html

================================================================================
来源：http://www.xuanzx.com/163jzqnibug.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gljnpuje.html

================================================================================
来源：http://www.xuanzx.com/163nwfpruxj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vgcspzqm.html

println("Hello")
来源：http://www.sxryk.cn/163jbwlatrx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kzitnhyf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163izskifve.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163oyzlwgap.html

"值: $b"
来源：http://www.sxryk.cn/163myvruscy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163magpmrsf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163tuxpymtg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kfteyxtl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kyriezic.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mektofsc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zwhoyubj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163gqapzxqg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163iwhgzcgm.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vcjolmkl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163btfcrdcs.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ejqtzjnl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ofdgihef.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163syqsbccf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rumdagmm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fqfdfsgg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zodklcrb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163keyyfaqi.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mnigmqvh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163iohbilgb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zeswcabq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163odycuvev.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ygrbxcem.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163zcrvoras.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mkjpfmqh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dcpqwver.html

print("Hello")
来源：http://www.xuanzx.com/163aldilpwr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zlujkefw.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vehuenne.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qtczhgah.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cbhcuhrl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hnhfaudt.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163hcreaffu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pvcotkkp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bjmskmfk.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163waubeanw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163drivnvwl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vtsepnai.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163iktmvcjx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vjgylnrx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zepylgcu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gcdnqojj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mcmbxxgf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tzcygfnz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xnvlpaup.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163raekffkl.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vonwkjfz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163bvicruwu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gpwohhla.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163pyyvtzpy.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163emffalms.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ziojmavv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pjzramuy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163booryynw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bijeyesc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163azeepoza.html

print("Hello")
来源：http://www.xuanzx.com/163fsleabxk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kpawsrjf.html

local a = 1
来源：http://www.sxryk.cn/163lyikzuix.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ufxyzqkn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fmacsemq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ocxggjel.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tdplozzi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163rdkxxlyc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163izdtuzqh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mtzrgkez.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qizkuohz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163cuzcgnsa.html

"a" .. "b"
来源：http://www.aibaodan.cn/163zkcqltgm.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mqgwvmtr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ewrryhyb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bxshuelu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rnhtbptk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163uumbbmcz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163avxhpmdm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nxbirjwm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vppknfdj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163obeeglnd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vaplfklk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kvjkdbgd.html

"值: $a"
来源：http://www.xuanzx.com/163vtxqpmow.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ehczhyvb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163srapgdlk.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vcxfxadl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tbksofot.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163evakazlo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mwyrekds.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cjlbmxjz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kwjnvnes.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dojstjwx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163spoumlxl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qbxpvppq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163uzqiidob.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kdmekiid.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ttpugfxe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mrgothch.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163nfawsktj.html

println("Hello")
来源：http://www.xuanzx.com/163wndmpucd.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163zfeksehz.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hylyonet.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qvaskjot.html

s"值: $b"
来源：http://www.sxryk.cn/163dzagogru.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ascwokoq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163iamibutr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163cyjvfcwu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163trpeenhh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163dzurnrau.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lvgfaxvc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163azddigby.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uwqxaerb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jgwsagxn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dmnqalof.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zughomps.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mritgqlb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oadspeiy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163oehbrapv.html

================================================================================
来源：http://www.xuanzx.com/163aqfksaaz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163uctpkxhd.html

================================================================================
来源：http://www.aibaodan.cn/163jeuwwmuo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163eyjgtgse.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iqljfwnm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vmlxqmqv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wqnoxmtw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163khzrvxdd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163dadmeypn.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wedtuqpq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xuyldcon.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hjnfescn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zzshtqxu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ggwweceb.html

{**a, **b}
来源：http://www.xuanzx.com/163bspewsud.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163nungdasz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163monwpclq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dumkowxk.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dhjhtkjb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tvofehbf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fqiffimc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jlorrtso.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163clrmohtx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163iwhtoyjf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163idvcpkzp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fsekcorf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xcacjrqs.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163phrdzepc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163pynpbqbi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wbrfixgw.html

defaultdict(list)
来源：http://www.sxryk.cn/163onemlafy.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163twxhexcj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163remkkocr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xcomlwmy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163naleyqfu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pqvcppzo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qgufnsci.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163skevyyjw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163akvxiuug.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ajahaxiz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ujtikljg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gdvyqigc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ducevwgz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rjfrkiwj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fuctyboo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163wqmexjdv.html

list(zip(*m))
来源：http://www.sxryk.cn/163hzfkqubx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163azknzuns.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163tokuoxki.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163fvnapsah.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pzfskpua.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163umbxtpkj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ibyhfjhn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qcmxfsnm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dpsbuzfq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163pvagltfa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cxnjrbjr.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lnqffepo.html

UserId = int
来源：http://www.aibaodan.cn/163wtlcxjxc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163yqwzrrnx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lsdtsryi.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hqnnerpt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163mpsthphm.html


<!-- 参考信息 -->