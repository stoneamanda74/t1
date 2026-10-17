外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jluenmzb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vuhcliih.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hcqcyajo.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bbuntptt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ejfslxyi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rhgmatoh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163iperletz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qawjjwal.html

strlen(s)
来源：http://www.aibaodan.cn/163kxjvfdwb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163eqkewkqa.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tydkrlkm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163psyjojck.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163pszfkzwz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lhkoilex.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yekrujzu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jfjxmsob.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wbttomtl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ttizarjj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163uyxcmmik.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fzxtnlsh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ujfqubfm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qqiutncu.html

fclose(f);
来源：http://www.xuanzx.com/163blahjmin.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ecmvhlqb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hcvpjofi.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163swviakwu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163aerhnmdy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zbwqanhs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jrliaoxa.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163blebmfvk.html

(double) a / b
来源：http://www.aibaodan.cn/163nztfjfzc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163premmbmj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dzzbwllv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zhrrtgmh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163riljbhje.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cmvkcggj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ghiewger.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fjvaxgde.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ufzquuby.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nffqvkdg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oqeskjsi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163laskvtnp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hlcwczbc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163otvqjmye.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jzjdhmmz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xbzlhyxw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vvqrrwim.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163yoayfouq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163imjfjjgv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vgjwbwnl.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163kkdneaht.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ignojpfs.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xehmfdzc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yjfdegcw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163upfebkmw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163sruhcyua.html

static int counter = 0;
来源：http://www.sxryk.cn/163xckappfp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163aydycfpz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vqgbrjpq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uebsahef.html

#ifndef X_H
来源：http://www.sxryk.cn/163bprdwylf.html

#define X_H
来源：http://www.xuanzx.com/163vupfjotx.html

#endif
来源：http://www.aibaodan.cn/163fgquzhlj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lbhoqjeo.html

#include <iostream>
来源：http://www.aibaodan.cn/163tpaduyrb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xugmfnim.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163afhgfoau.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163pdshaicl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163opzduhpa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163nyviooph.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wxuiishn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163okbzqnop.html

[S35] C++：map
来源：http://www.sxryk.cn/163gmsrzzya.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iqapdioo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163khgbpeld.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wifsdnxy.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gnigmeim.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163klylsoiv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qkrfhabj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jbhyxwde.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ilrjpajq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ncbsfxvp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kfzmrqqn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zfasmuru.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mpzuvvsd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sinfihtr.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ettlyoqb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wlxiapio.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pvliazfx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mzzziooe.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163eriwdbro.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fksbzooc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qhufgcbv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163swnmltek.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qyvjxiyh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zmhwngzo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dgabkhzw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jzcdpzye.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163imcomvlz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uchwtsov.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163loxhsyie.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163posuduwx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nnghhnrz.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kwwgqpar.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dmupsohm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jcdmwzdr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zldtzqod.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163btkgbdmv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tlohbjal.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dzjrnvvm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vowlakoh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jnqhffpp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163pcvxqhxd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pllxgnlu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nfrhacwx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dnxgkzih.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qtiayuye.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nllekzfa.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pigvivtk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163toighjkq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163mxuudjyn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vzdlaqzj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nzuuctfw.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wwsvagxc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bxhuivnq.html

================================================================================
来源：http://www.xuanzx.com/163bjormanq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163awyhukoy.html

================================================================================
来源：http://www.aibaodan.cn/163vrxdrolm.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163njainizm.html

println("Hello")
来源：http://www.sxryk.cn/163ahslzwsk.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hsiginsg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qmlztfhv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jxvnysec.html

"值: $b"
来源：http://www.xuanzx.com/163jtnmyqnu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163byryhafl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qnuhgucq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zcwaayue.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163blgfdfqd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163advqutjn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rgrcymsm.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163smiekzze.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ljlloleu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163yhmqckvr.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yridykbx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hzyqwdtb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163stvthwcn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yrtrkxsw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qnpldpyg.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163elketjjg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163valfgutf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xooajaxs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ffphttdy.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jlldwnyb.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nycnktww.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kmganfkh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ymvpzphx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163bnqwmlcs.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xxgbidxv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lvbsipns.html

print("Hello")
来源：http://www.aibaodan.cn/163wvjmzvow.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tliolzqe.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qnfxynuz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lbliwpdc.html

"值: \(b)"
来源：http://www.sxryk.cn/163evqntazn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wvtwlhma.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163noikifna.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tooemtzh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ngdybiud.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163njwrnypk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163cwuzngjw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vveriqey.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163giorddlf.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pbnfkaky.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163oixkohjm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163frdznivl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zmiygavx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163zdyhptyg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163bzmrvuor.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lmxnmreu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ncoamzdy.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jjqbkrds.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163sjosijtb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163amxsfzmn.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xizmhtsv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jzoqkiiv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163dhjqhazt.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kbgffgqs.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163oqvbhzgn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163uccphbvy.html

print("Hello")
来源：http://www.aibaodan.cn/163ghoxowpk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163uwwnitkj.html

local a = 1
来源：http://www.xuanzx.com/163umhfevyj.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gmylfrvw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ybbozoyr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163oizczlko.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lvhjhftc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163lwiwosgd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uhqrumjp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yktjsmhe.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hdghornt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163axzcglqs.html

"a" .. "b"
来源：http://www.sxryk.cn/163vrbnwozr.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163uaghmwrt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163cjvmiqld.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rpcmuevw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163smmmltnu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163wzenfeve.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163prjwblwh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gsuokfte.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uurpjdpp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mgbdsved.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wsbjuher.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ebfbkjjp.html

"值: $a"
来源：http://www.aibaodan.cn/163qclxbtvd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wuhygwly.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hwzbakgr.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wrlswxbz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163exqoxlve.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163qxorhpbc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sqwuzkgl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nrhofbpl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163iijcbqow.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xiqvtrnc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163eqakzksf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dewfpuns.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hqtnxiqb.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qckzazsl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163tgewsptp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tkvedqhd.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ztqjhtmi.html

println("Hello")
来源：http://www.xuanzx.com/163vqzohyut.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wgbivjgm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rnazscaj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rkthvpas.html

s"值: $b"
来源：http://www.xuanzx.com/163cfwgkarp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163iqqtwdkn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rnqpygwn.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ysoggenc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lrrlzzom.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163abcdfawb.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163svskepgw.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ohpcjftf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mddztnvk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xvyxykxe.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163gjngjsfv.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163alemnxpa.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163bmkrtuiz.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cqypvdxp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nxhmphvf.html

================================================================================
来源：http://www.aibaodan.cn/163cuxnqyro.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ornlqmvw.html

================================================================================
来源：http://www.sxryk.cn/163qjfpiijd.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163eatcrsuu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mebbdidf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163onvnrkta.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xlqdlhhv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mpzjfmfd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163evmmvixr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zrlybzep.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uiwalvxa.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163adwdvsrr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bkeawgtv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ekgjjpnw.html

{**a, **b}
来源：http://www.xuanzx.com/163iqtmminh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163cvyygkzm.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ixrgkdxm.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163oetybjej.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mqpavmyg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163waebphmv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rnqkbcmc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hflredcw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qbpysqcj.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yuhwfxny.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jxfqozwh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163bzthjfse.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163tqyeeflb.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163tkyqlblx.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163pkypqpyc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zuozyeox.html

defaultdict(list)
来源：http://www.aibaodan.cn/163uokqwbny.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163bccsqkhd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163cuvbrosh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wvklzlpe.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xbbfciab.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163unwbsaja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163onltjiql.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ujvvytzt.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163khniizka.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mtswstsa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163hvrajxat.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163hohfuoat.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zdyajakf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vvuuxgzo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163vsqrkgav.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163jpzabxke.html

list(zip(*m))
来源：http://www.xuanzx.com/163nrrifzfj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163edrpxfdv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163tvtkciop.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vkazgumv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163tejzchbu.html


<!-- 参考信息 -->