外链999!wailian999！

strlen(s)
来源：http://www.sxryk.cn/163ruxgdtje.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nqhknabt.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fefgpwiq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163yenlssgn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uxycnoyp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163umggvrqx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wqahpvaw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yfpowlag.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zgpniuji.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qjjkybsx.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163udxhoyuk.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rzoxawsa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nvqykyjb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vlkbayxh.html

fclose(f);
来源：http://www.xuanzx.com/163aeriujuh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163kpnbhnwa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zrzqjzrh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qparqqtp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qvwxhanz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tupewita.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zqjxzkwx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fsewcldd.html

(double) a / b
来源：http://www.xuanzx.com/163kcbiqdkg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ovgjffue.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eiavzhtt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163umbgawko.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ebqrnqqn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iewulsyl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ndhcpuaf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xucdfmrn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ijcwclcs.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xxtivbvf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163csdupgkn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163merdwmaq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ouicxwnv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163odhcvhcx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163drioqrcg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fepusbob.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fkbsbjzl.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ouftyztu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uciwqbgk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ycuwaxdv.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163auwwnpyx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tidmcopa.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163elkoqzzh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yxgropgg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kfiixvai.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163oygxqhmt.html

static int counter = 0;
来源：http://www.xuanzx.com/163pyydqajz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ujzeneqn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xcrtujlx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gbfbyihh.html

#ifndef X_H
来源：http://www.sxryk.cn/163dqidtedu.html

#define X_H
来源：http://www.aibaodan.cn/163fgfxordd.html

#endif
来源：http://www.sxryk.cn/163cbjgaamn.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rescjavi.html

#include <iostream>
来源：http://www.sxryk.cn/163lvhvfkfl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tikylaho.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163trpeslkq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163tjmazamb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ynrqvcty.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vilqpwig.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nkofcxfq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vdjaacgq.html

[S35] C++：map
来源：http://www.sxryk.cn/163farskvmj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163midfuwvb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jvvmiwti.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163djtleogx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cddcjonc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jaeripwb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ghbcdtdz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163isspmawi.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163quavaaln.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vrjkgvsl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163eofqdrgs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gftteoqe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lpxayaqc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xywwqiim.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ldjodbyh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jaadjvlt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sfwprmrn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rhdzllpb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163isndblwy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bqdcygfc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163numlsvoc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vybtiwuk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163njjkzvgp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gpxweubn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pgdhgqtt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qemyvtsj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163exjxfghe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vjejfmob.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163sylusypo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ypeelthc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vflvlduy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zkyqtonl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zmosbcxf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163uzabhcmn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kkwnlylp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uxjonoul.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163alvwapcg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163djeuzcgu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yuftroee.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lpbejlbv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mzjudbor.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163sqakefju.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ivjogjjq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kntejysj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qpvcetdr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nhvripiv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hbobdfaq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nxrolauf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ctndjbfb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kvkkowvc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163szzjoubc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163plmgrjie.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wvbzmftk.html

================================================================================
来源：http://www.xuanzx.com/163irhefluc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zqfjrmxt.html

================================================================================
来源：http://www.xuanzx.com/163gqcdwcwv.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163dnoruvvp.html

println("Hello")
来源：http://www.xuanzx.com/163lzsclnoa.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163sminujxb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jczoigdt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163adydurwo.html

"值: $b"
来源：http://www.aibaodan.cn/163ledaykvf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wukbkpkv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163eyohvwko.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nbexvrar.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ysqrqfbc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zxctrpvb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hqwwrvtz.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nkcywjcj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ozeohudh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ljndyyfk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163spulyyqk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vlgaujqa.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cfoienrh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163askrtglc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tixiiirb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ujelsjem.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nacbmurs.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mqfcrelv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ekdwatdz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xbofgfup.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jjkdejbi.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pqbbbuqi.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fkhfwrvn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163eqlpxzkg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163emyhfied.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mnesouwf.html

print("Hello")
来源：http://www.sxryk.cn/163txprrcqs.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qihigeow.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kakixudp.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ribvmbdw.html

"值: \(b)"
来源：http://www.sxryk.cn/163tzxxmwhf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lzhlaizm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163uhmuazmj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tuwzltmt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qrpwqcra.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ftxmuilm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gvalmgwv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lwdldekn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163exyxecue.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163onvupwtn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qmtwvtfc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163lxikxlex.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vettdxrs.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hkasevey.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gpftteqi.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163rwsnrdcl.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lvvmamaq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163agplbndp.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hyuxkxdo.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163avhlwcli.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gpqiodmc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163oyhjfysq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163aefhctnv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163poyambkj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bybkjchf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yixucwvl.html

print("Hello")
来源：http://www.aibaodan.cn/163azeixcsy.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163itdcyqls.html

local a = 1
来源：http://www.aibaodan.cn/163ptutcecu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163bkzsjrxd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163tprqsfii.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163npxpiqhx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163loqlzezx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vbipvdhs.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vxpcsmqj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wfisurjm.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iancknyv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gtfvxcxv.html

"a" .. "b"
来源：http://www.sxryk.cn/163xqmpbewy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pzalkcsi.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163qheosxso.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kxcnwfhf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xcnrqokl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pukfywtn.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fczseteu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lzzdeucw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163dpsyfkxy.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vaslwnwb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163udjvwoco.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jgtrkhnf.html

"值: $a"
来源：http://www.sxryk.cn/163qfkvgtqg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kdasccqo.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rxqliobt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nyzyealr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zrmkgxli.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bvaqraso.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jlpfccqz.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kezclzmq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163pqkvtdqr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bidqfcfa.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dbftbhtg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qwcdzbhw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163eosfvhyj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163btawhbig.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mjedzuvc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rfwtixnt.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163unwwbkis.html

println("Hello")
来源：http://www.sxryk.cn/163lrkbzsqc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vobrxptf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mnmohskr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xlvgmmxv.html

s"值: $b"
来源：http://www.sxryk.cn/163nnrmxfnn.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kfffzfge.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163meizvjjr.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163iuqubmxk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nhaadmvc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fyvqfgfn.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163gbpomrwz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ipogrtft.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163oqnwclew.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xovalkrf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yvrpzohc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163qkbeoqtu.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rdcwcrzx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bgbzszgg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vsrcpgmn.html

================================================================================
来源：http://www.xuanzx.com/163vfusiddt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nbizaseh.html

================================================================================
来源：http://www.aibaodan.cn/163rtokzqon.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163deqiruob.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pwvfegiz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163inrjgynx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163iueyhckc.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vcfqmpcp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cppaxnyv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xwaeqtri.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fhrldfqh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gcfkliqx.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lpxghafz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163pxusnweo.html

{**a, **b}
来源：http://www.xuanzx.com/163nybavlnj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ewsmhgnx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rxzvgdsz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zkbwjvdi.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ofwpkqgl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rladakfj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ydogvwin.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yowmzbed.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ueqaiacm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wcbhrvcd.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163iqtefdtg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ycgzsqkj.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ticvxrgo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163incqlaei.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dqmnwxpm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gkzusmou.html

defaultdict(list)
来源：http://www.sxryk.cn/163yfxgaldl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dknxrrmk.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xwdehdsm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rzxxvidv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ylftphlf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163hhsnjgba.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jxdzcmxp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163sfwfxmri.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ukmrgtpl.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nsxvyztc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163txdcwemc.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mbqilnkf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163azgzgnlv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mjjetxfv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163zwzjlezj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163teyawlvr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gdejxogx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163cffhqihg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ntbtwwyi.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163qkspcggb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ckajyjdo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dxzrggyu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hpihviip.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163swpsepsf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dvcerosf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163kijixrso.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rgmjrvgr.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163nluhqhdd.html

UserId = int
来源：http://www.xuanzx.com/163zjnmhlrf.html


<!-- 参考信息 -->