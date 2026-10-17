外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ugyblyue.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mnzmngcr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wkgrcypv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bzopwzfn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hnabqopv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xcjdjdcm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wbtsjxpn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tlsnexsm.html

strlen(s)
来源：http://www.aibaodan.cn/163fgzwwngo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hjrvxkhl.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163anncmpcv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vafwkrgw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kklaozgv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dxvhwwdl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qpzpqxmu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qeysgpam.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zqcfaqwb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ugkjhlqs.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nzhptjjg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hsimmpae.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bwklifuz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rhnsjfor.html

fclose(f);
来源：http://www.sxryk.cn/163fetwwcyw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tlfacbyt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yodfjerh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qwmxnkno.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lskgaibp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kusgyovm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bbzptlho.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163agmasjuq.html

(double) a / b
来源：http://www.aibaodan.cn/163inzpucun.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xgylwlwh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163emhkhlne.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nraoflvh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163phskbmem.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163efxhqkwg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hrqkwwwe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163slmynlqb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xxxkpdyu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163dqurkslj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vvuyqjft.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uwexpfdm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163yzooetui.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ujubaaof.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gizxhecl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rqevkzat.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yilygdwz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dnmdxndg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mfhqajma.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163juevxtjx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zulyhrmj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163baagrkxu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rlxasjeb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vioittwl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163uswmkbbi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jnnhypae.html

static int counter = 0;
来源：http://www.aibaodan.cn/163myydkufk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xmvbonux.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tdpswcfn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163htlfsbzz.html

#ifndef X_H
来源：http://www.sxryk.cn/163aszvemfn.html

#define X_H
来源：http://www.aibaodan.cn/163kaskzryq.html

#endif
来源：http://www.aibaodan.cn/163xvzvgynb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163vojfrekl.html

#include <iostream>
来源：http://www.sxryk.cn/163ilokxbhb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163evtpqmkn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163evtbcunb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gcmbyjfd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163bcgzviwx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jyuknubp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163aknoystg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pbqhomdz.html

[S35] C++：map
来源：http://www.xuanzx.com/163zvrrqaiu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lgjhlesf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163npstkhtz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ahrzaqgv.html

[S37] C++：set
来源：http://www.xuanzx.com/163bjjeslqe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163urypdlfo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163emgdwirk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zyhvuabt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163bshbvheu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gxnnfowq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hyyuobrj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163lxvnzucb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163hvqqucgi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163srdyhdhk.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ggttppdm.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bbjndpds.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163krumippt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163udsghaxx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wmwhecrn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163lcqskflx.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nujgpklp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qkghuueb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uqinyjzw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vkzwjuhv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163samtusrg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163nvefietm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fanopddu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163futjxbhc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163foasumus.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cjsksxeg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lngfzbih.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ciwnfqfn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bdxefmtt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163swauvdmm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jmdmkbhz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163aqvmmmtv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xoiguajt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163juoefygg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rjdahobn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bcnfthah.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163stjqttjh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rkufpycv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qcgtzffw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rwmjyjcu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163pbuzkksn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163tjbvbfbh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cetwhgxf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vxxblxeu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163klhmcerf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yttsbgwk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ubjmkagj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163axwkkmnk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gzstetjt.html

================================================================================
来源：http://www.xuanzx.com/163fqwqrqdl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jebshoyu.html

================================================================================
来源：http://www.aibaodan.cn/163nscshjuz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ktxwoanr.html

println("Hello")
来源：http://www.aibaodan.cn/163mnettagr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kvuiqoqj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ekwltsbm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qeqfamln.html

"值: $b"
来源：http://www.aibaodan.cn/163etxzvsyp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zpxzcvbd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vsnlbspd.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wkjdqwas.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jxrhuscv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rxjzdfpm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rqcgzdoz.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lpcfxeqa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zcokcilh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kldcruoe.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163erwjyghg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vyhwhmjd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vndvvlhf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163seoitbyj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ejygrkpy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ycqvltec.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vpzomgpb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163snwgxhzw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xpfckdvy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163rrsguhma.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fuqlrfeo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qtfptxyg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163oiymaewe.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gzgufqtf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ddufzddc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wtthkweq.html

print("Hello")
来源：http://www.sxryk.cn/163pgenotoe.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bjikpggj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vkvdnbhp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qovugmhj.html

"值: \(b)"
来源：http://www.xuanzx.com/163kfzyjgmz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vrejbsom.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163yyqtjndt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163axcmkxlp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163shfsnnmu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163pslsamvk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yctsrhvc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163exunpvzo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jeysvgzq.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cbssgwel.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bfpuodrk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jvztecaa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mtflrhpg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wajsibqw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163dgeudzah.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163axgxfgwb.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zrkbbhms.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bqtugjvu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dpaqoulv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ghdclirn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mbwfsloz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163mfvvlail.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163finmwwqc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mluimorn.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163phuraobw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rlvdwcof.html

print("Hello")
来源：http://www.sxryk.cn/163vybcuvng.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ofbgyiou.html

local a = 1
来源：http://www.sxryk.cn/163rbzxyigm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163eoavjuhf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163psrlfdfz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qqhkrsvj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163orvroena.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163reixkjuc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163szimkoif.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vblgpzqr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zksmdxzh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vsodslkb.html

"a" .. "b"
来源：http://www.sxryk.cn/163zneqlhhw.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163uukvuagh.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dteolwbp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kovhudtf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mlkiauez.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kucarrbm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163siomalas.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hivklnij.html

print "Hello\n";
来源：http://www.xuanzx.com/163yjgfkqvp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163btabzxuo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163mcbubxyn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163gjxheomp.html

"值: $a"
来源：http://www.xuanzx.com/163auwpcgvk.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uzarndse.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pjcnxobc.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ahjpdlkv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163wkcprisq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163royzqgfq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xhgtfndp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163szqbxngh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163giwhxwdm.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163rztwgugg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163jpwelbfn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mesddrja.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163phvhvnpa.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163nrzkrysv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bvcerjtb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xhuagomy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jmwmoqnt.html

println("Hello")
来源：http://www.sxryk.cn/163eszktrlb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tlznkmzy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163axgsoklq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163efpcgrhn.html

s"值: $b"
来源：http://www.aibaodan.cn/163iknumjlt.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163cdqyeevx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163yfxluqgp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163bdsclozo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vebqjvli.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163wefgmlah.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wohfvtko.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xwstjwzo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163txryzjek.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163pqszjgtl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rycwwbvd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vgbiupyg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163bcyvivrm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fteczsxo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wxpanixe.html

================================================================================
来源：http://www.xuanzx.com/163gsiydrzu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ukfohyqc.html

================================================================================
来源：http://www.aibaodan.cn/163xnvcwixa.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bkzivlqm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rdqcfjtq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ipoiwhaj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jsdkcgzr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hmpngasf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jskbjoeg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ctmrugrw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163afteklec.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ogfxtgnu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kmksofdo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xivzywcf.html

{**a, **b}
来源：http://www.aibaodan.cn/163rbkjsbvk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qwmlaunz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mvjnemmd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163owpkpmup.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163lzvriafj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lzvsyvnz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zcurcbtf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163mhwmiiob.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jtyjqvoq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zwuqrhru.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kjwuzdqe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163uayhndxn.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lhiftdva.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163yfinumvq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163inxjpffy.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rptchbvg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vgaqngbr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tckilrln.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163bsecocdk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cevtmxdh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163pjbbijpu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xnaxmuvo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163meorelgk.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wpqfzwmg.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xyrjwdhb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163mcdswazn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hwrtmdsw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zpiobtsp.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zzgogjwq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163piisyiuj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163fbsecaet.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vercreau.html

list(zip(*m))
来源：http://www.xuanzx.com/163xombiman.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qtjitseh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163tsqomebe.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163loxrhpqc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163xwtpepbk.html


<!-- 参考信息 -->