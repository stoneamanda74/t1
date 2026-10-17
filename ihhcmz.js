外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mosoylcc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wgnlcmid.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163apseedua.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163hpzalcbz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xwohcjel.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qneragbe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xtpqpgor.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ozkqtxwk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bjgscany.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lcwvxiyq.html

fclose(f);
来源：http://www.sxryk.cn/163skfectqh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rpyfdkqj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163zfppqiwl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rznbhcea.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zlnxnvve.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163uukrdinb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wpdhffxq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163icexhhhc.html

(double) a / b
来源：http://www.xuanzx.com/163peyxevqg.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163baapzrlm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hmsevbau.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nbiukdqe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pvskvsus.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mjrmddem.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163yyzrqcpe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163usarzhxh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163voohmljh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163melngkgh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163huhyfahy.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lwjfbwct.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163acdqusep.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kbfbgzwr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kcohnyns.html

[S23] C：随机数
来源：http://www.xuanzx.com/163uoyxbjpf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163msoekfce.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wqdmcxzr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163aokeszml.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vermlobu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mdaxhtzb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163pnbowehx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163erzrxush.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163smyqdnxd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fzkkwpbz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lcdkrblq.html

static int counter = 0;
来源：http://www.xuanzx.com/163eoerddqp.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bgcsojhq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hbudaoym.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dtnrtheh.html

#ifndef X_H
来源：http://www.sxryk.cn/163aarygivl.html

#define X_H
来源：http://www.xuanzx.com/163leeysvip.html

#endif
来源：http://www.xuanzx.com/163innzxejx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163yuehvhci.html

#include <iostream>
来源：http://www.aibaodan.cn/163ugvpzzef.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tkyuhool.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ukahqepj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163agdkihwi.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zeoqsmyr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wvqxcgde.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ssvzwbze.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163eqdjzrgy.html

[S35] C++：map
来源：http://www.xuanzx.com/163eivpzyby.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wnvwrosg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cbgizecc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163onhjltso.html

[S37] C++：set
来源：http://www.aibaodan.cn/163glievyrd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fqtdsmzu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wtovwdwn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163olithrve.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hticgfmw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163pikobrno.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163cqmqrndb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163iotteeyo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bvpegnxk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wssejiac.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163seiexwir.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163btgdcxhg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lixfyuwa.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163teschazj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163efouaxrq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rvdpvsxc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163rwbvkdri.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vphxeovj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163cclawucx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xzughgoe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hbouvqbo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lhtdzuav.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163joavzsxx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gxbfhjyk.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163clwhcfar.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hdudtagj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zkblwhdy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kxibnpiu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hzvbxsnc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rhqwmdki.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kzckeuar.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163datqufna.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163poajswsr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xghuyryn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163edimnriv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hseyibpd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nkxzpyrx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gzheauto.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ndtbqpng.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yylacvrl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ygvsusbw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jutxbhiz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jeoxhtgg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163srkduqsh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cbvixgpx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xxdylltu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sarneqvs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rbginija.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cjeqgyim.html

================================================================================
来源：http://www.xuanzx.com/163giemgbwm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mypphwfk.html

================================================================================
来源：http://www.aibaodan.cn/163mjxlcggr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163faetxdxj.html

println("Hello")
来源：http://www.xuanzx.com/163mhgmtvwc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163eicajrsm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163kgbaxqlp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sihqotyz.html

"值: $b"
来源：http://www.xuanzx.com/163dhprixsc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vnntbzwg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qrtzilnn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163izqbmnew.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zyhjqwnm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163afyzebgp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163apnzyots.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qignswwf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163myrbgidh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ppeywsoz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rtysnqsk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xrmweyry.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163faxggfck.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163orwgblqa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kyynkbke.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163sepcqkuj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163eujcyatg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yaamekqp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mdsucnqe.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163yhhdusce.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zttgpwcc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cazhnqcf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wmqpyzeb.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163oqsdicmb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ypleqjwj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tgmjoyys.html

print("Hello")
来源：http://www.xuanzx.com/163fbongrhz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nziximxg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cmsoogjm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ecfsumgg.html

"值: \(b)"
来源：http://www.xuanzx.com/163egignuip.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163aqxtmjxx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163enwcxrqb.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dubmzjsq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163aezmhnxf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bbytyske.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163odtelsqn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gtytjbol.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ohsmfvsj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mzviygqw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yeassjkv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cyoixuvd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163prusxola.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rjrycika.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rdruadmj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hxyfvxrd.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dwrstanh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163iwpricfm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163slslzxrm.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zgxmimqs.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zmrtzuvg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rcvajmlw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163beorvekl.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163olrrzoid.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gbcsbaav.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xalekbvx.html

print("Hello")
来源：http://www.aibaodan.cn/163fncbciir.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163chjvnwkk.html

local a = 1
来源：http://www.xuanzx.com/163cfgijqyf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163escwfmll.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163hsazdjcd.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tvfspyan.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163sfrqywqx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lgbrpdhv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eesfsgfy.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vevasraw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163utdpstzy.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163aikyxjqa.html

"a" .. "b"
来源：http://www.aibaodan.cn/163snmsmtgh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163isfuzsie.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163aotyfbuq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tcmspyvk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163armgjvpc.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163wknnmpjo.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ivttaodl.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163uiexpmhf.html

print "Hello\n";
来源：http://www.xuanzx.com/163ehyexlng.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rkazcezi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nmsrkeml.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bpooxfop.html

"值: $a"
来源：http://www.xuanzx.com/163jvsaekbg.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xhpbndtt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hpokeeij.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163nqzkaquk.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163keqxlxlc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163awqjgqez.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fnvultwv.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163pcebtdge.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163mmfttlwc.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yvrtadno.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163adcflhpj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qyiuvkma.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rbgigbth.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xlqyihje.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qxxdiynp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pndfdqoj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xewrcwda.html

println("Hello")
来源：http://www.aibaodan.cn/163veifvuor.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163lswyeseg.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163abmozgvb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163sfnwhmgs.html

s"值: $b"
来源：http://www.aibaodan.cn/163ksdjyegu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ujdcflxk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163gdjrqpsx.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kbnzkpvb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qkpwilgy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mbkufesx.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163kiwnkzbq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163iprqpqxp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163uctvptad.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163poxviauv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163aoufqoxk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hogwkzhr.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lsoimkax.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163juagangp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jdunzaum.html

================================================================================
来源：http://www.sxryk.cn/163kljlxadw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fwjduryh.html

================================================================================
来源：http://www.sxryk.cn/163ivjpizth.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kqdqapwm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163irsagshb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163naqbuecg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xmzdtamb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jhozgjnx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rztsmxzw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zmzdfkxy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rqklhzwq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ecequzfn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sdrxzotl.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rdtuhsvl.html

{**a, **b}
来源：http://www.xuanzx.com/163dgzxtjbh.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163dxbgdlpm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wdgtbktl.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xeojbixa.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kvorafxx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163bllfecmc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kfmddouv.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jcwslhme.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dcozktpr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163rnbrzljg.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163unoathdc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163agottxnq.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163movutbmg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163bssdtfxq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qkwvakdf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gpiwneer.html

defaultdict(list)
来源：http://www.xuanzx.com/163ivgzpfdv.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163dkuawbbc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jixsyezs.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ftqlzlkd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zzceyccx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163obgnrwrd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bajdbdoo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163oduzdvqy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yhusmcdu.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163kcsizlda.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163frnukizi.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163taoamnpl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163frtrjxun.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rqsntfos.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163jxidjxla.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hvzpfoea.html

list(zip(*m))
来源：http://www.sxryk.cn/163inlourym.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ulbjjkhy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163blcmapea.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xzmeovin.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163utrddvhq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ljnkmyvj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ssquijyx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163rsykzqix.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kgnqnaof.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163rwelxdch.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yledjxju.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163roaczeit.html

UserId = int
来源：http://www.sxryk.cn/163znemloit.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163svimayeb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163knivharh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vlyrfbdp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163tcoixcsu.html


<!-- 参考信息 -->