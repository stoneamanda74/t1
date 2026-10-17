外链999!wailian999！

S. C / C++ 专题
来源：http://www.aibaodan.cn/163cbldbxqf.html

================================================================================
来源：http://www.xuanzx.com/163waezdbih.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ebejuwuy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mhedslay.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163cjutgvnk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wgawafgn.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163sxnkqmms.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qciusyxt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vkbgzjff.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vuozubnv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163mzjfehzg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tugljoxv.html

strlen(s)
来源：http://www.xuanzx.com/163xdutqyhu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wavsirhj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gkxwzdsa.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fqdcjrxk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dzuxjnmg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163wixfviop.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xwnvgoab.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zgvhsnzh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rktmxnex.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tduymdfu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163idizfleq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yxfkixjd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163znmqyoew.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kqfocwfd.html

fclose(f);
来源：http://www.xuanzx.com/163fzgonphw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jdgikwex.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163trhiaqbv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hmjrdaet.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hblrrkoy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yznmqwlk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rfufiqvv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tclqjxjo.html

(double) a / b
来源：http://www.xuanzx.com/163vbagntlu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nyvygufn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mgmbawwo.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qbftmnft.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yvasfgzo.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163bddpxbni.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kbjplyad.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163plvvxebq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ehudelny.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xgivymtw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nnxntagf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zmghfcfs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nqoitcdv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hadfhgka.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163twyfvhfb.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dnllbtgm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wruxnqtm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dovazymp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163sxzlsgpg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xzejjhzi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163scgwyxsz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zkvmnjlf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lftfhdpk.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163kelovldy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163daedkvgo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dtffbnxd.html

static int counter = 0;
来源：http://www.sxryk.cn/163dgvbpwvo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yuvcwscj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163iogttlto.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aczeiyrp.html

#ifndef X_H
来源：http://www.xuanzx.com/163eugvmqzg.html

#define X_H
来源：http://www.sxryk.cn/163toyarhfi.html

#endif
来源：http://www.sxryk.cn/163hnamzgfk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dfyqicwp.html

#include <iostream>
来源：http://www.aibaodan.cn/163rujpjvlq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163znwpgiyp.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wgcehiqg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xdgeaanr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ydwgsueu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ijckhign.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yrojnrfk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nbdqxrza.html

[S35] C++：map
来源：http://www.xuanzx.com/163agzsydck.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163eyrxudcl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hgjfukrt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ftlisxnf.html

[S37] C++：set
来源：http://www.xuanzx.com/163roqckevx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qepdqdcg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cfwbybng.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vnehyrbu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ugowrqhl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163orhwhvhr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rnlqpezg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vfaabalj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qnazmsqg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cmobpmal.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tfsuolcs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163utbhiepi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163knegvfma.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163mjepwwog.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jwfawjrx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mgikklgg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iesutbpn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163afluynjk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163glpkukdc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fdeczxji.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163krigxrhi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qjmzlagu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163psxkogxc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vqwrtizi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dyoljnsv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163inzbpvtp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163spobcyjp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wezuzwrz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163seibwgfr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jcxamvdn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vwvigcma.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jqlcqehf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tbwcdsnb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gujiyvlo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xxpdovxa.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cjxoemsv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hrjhrotv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163aiswnkne.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ncdcdnke.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nkhonwpn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rdeexizw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gexufkac.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163halzbsgr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wpxiisyh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jrmhorrh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163uukdrflv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cgbhwxva.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hzknqoit.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rtrvrnby.html

================================================================================
来源：http://www.sxryk.cn/163nkvcpnwr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163eogialoh.html

================================================================================
来源：http://www.sxryk.cn/163fyktvdtw.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wmafntfd.html

println("Hello")
来源：http://www.aibaodan.cn/163geijrzxx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jigoxpor.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fnijpjkh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bhhxlodx.html

"值: $b"
来源：http://www.aibaodan.cn/163gyrgryav.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163coxnylsw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xjjurwrg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jxbjjwiy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wkplisqg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ilnqlzfj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163exccgkpi.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vsxvygyz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qvmlcglx.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bjjfrazj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jtndbexa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wtuthhze.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fwqiunuy.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ztwumatr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163icbxdxac.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ecwbfguu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163htcnfhsh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gvusraih.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ivcypqes.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zlcequvn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rdcqmqhc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163utpbapct.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pjeoyqlu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vapxmlrp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ecghcqye.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163kxgszqow.html

print("Hello")
来源：http://www.sxryk.cn/163bhksvgqy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163plsvrfdo.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kflzswpx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hoaxzpdj.html

"值: \(b)"
来源：http://www.sxryk.cn/163juldwcyv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yvvhalqk.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ufxspewq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163pgxckuog.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kusfhamz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mziojxiu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zumpdzah.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bugrgapd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163abxdzhyi.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163dsjghddf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wqqzkqgv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163maxvzeqm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xedhsull.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dklcmhpe.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wysdchnv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pbjldibv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dhhdfjpg.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163fnmucdft.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tnkmbvtj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163bgxmnpzc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lavcwjiv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lcftkhgo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bdfyaepy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ifivznzr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mbrnpkak.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rxtsascy.html

print("Hello")
来源：http://www.aibaodan.cn/163wslgemcy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vygpotik.html

local a = 1
来源：http://www.xuanzx.com/163kgxstxrm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vdttyuae.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163tixlwisi.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ynidyjao.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163flwewbkv.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163slxltfdd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fqokmmag.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163maltvdqg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163umdsvkvh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fzjwjzhr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qjvxlqne.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vhukjrgi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vabestvr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163cfzbvdge.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mwqnlcak.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vbsszcbl.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163nienmdup.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kjpkyppu.html

print "Hello\n";
来源：http://www.sxryk.cn/163pcfdccfh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zlmrbtrk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163aohdzhjt.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163hlodqtma.html

"值: $a"
来源：http://www.xuanzx.com/163lljlnvnv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163suuabvvd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xzjtyqqu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163pouvnexk.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163fgawujix.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nbpgkpoa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jsymbbdl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163fnnbpwah.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bcpmyxub.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cajmmpyh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163exmgxhku.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163icinyrkd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163jukhduqz.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qtjqyrjr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bfwdrizh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iwxbruek.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jcfcaqil.html

println("Hello")
来源：http://www.aibaodan.cn/163qftmcmbi.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xxwkbane.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ibiqolur.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163itwpekbr.html

s"值: $b"
来源：http://www.aibaodan.cn/163tcqmydww.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wmqggtfc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163eazganig.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163buvqtwqa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163oldyiazh.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xqnvfbxn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vbxqhbas.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mfyytwpv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bltxbuim.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tcvgdjne.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163tqbvxutr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tisocski.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jhiywwkq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163mjgbixxj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bsclrgpf.html

================================================================================
来源：http://www.sxryk.cn/163maufubrj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tlgafoqw.html

================================================================================
来源：http://www.sxryk.cn/163iritwdbe.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163rgdgrdqo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163stnrgdmz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xhkmmlhf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163addkzcag.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zufqylcj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dfbhlepe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zsxilavv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163dnxaaztl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xiyvgahr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163niuyddzu.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163nfhsbvbz.html

{**a, **b}
来源：http://www.xuanzx.com/163zgielvzv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zxtmsedk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wkpqlcju.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pczjdjmc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bzqkorra.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bxbtruew.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cqxazpdw.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163zgjqcplo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qqueujua.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163eopynpeu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163emlfiaox.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163wtrzocnx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bnhvakyj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163njhugylz.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vjhvvzep.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qmjwaaal.html

defaultdict(list)
来源：http://www.sxryk.cn/163zukpmkiv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ihsqtwwp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lyznefcp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163crsbjosq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zylddmny.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wmkhhgra.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163yiriirfl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fizetwva.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bwydsofs.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fqvzwwek.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tdfclbtj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163xlhmyvsx.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163leyqkyab.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163sruslgtm.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163qpteveig.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kgibjovz.html

list(zip(*m))
来源：http://www.xuanzx.com/163ifdohjjt.html


<!-- 参考信息 -->