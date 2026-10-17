外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dzkykgee.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163caexrdsu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wnoltcyp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163opfdzros.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mdvuttmt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163sizjsrry.html

time ./run.sh
来源：http://www.sxryk.cn/163iclacgcw.html

================================================================================
来源：http://www.xuanzx.com/163jdfmsvmq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ybarnhxb.html

================================================================================
来源：http://www.xuanzx.com/163zvvynxqx.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gitsgwcc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163juthvclz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ggvdrovp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ybofsgoj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lumlsatm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163geiwkyrf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bvhblrcz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163efjqenqa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ytscxdak.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ttlwfkda.html

strlen(s)
来源：http://www.sxryk.cn/163uxxyucbk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nmqtoiqc.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ixkollnq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ngowincl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kwlbpxha.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163bwqazamr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163koxymptv.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163aaejhqap.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vpzrknck.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hupswibi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163frlvlusi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tospisoz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163oggblatz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qwvxqeoz.html

fclose(f);
来源：http://www.sxryk.cn/163majfcipv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163swryyznr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wskvgztf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163owekhsuf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163miuzltsf.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163oyweovaz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kzmkquop.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jbzvvssy.html

(double) a / b
来源：http://www.sxryk.cn/163vwkglgok.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zrjcesba.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zvszeyuv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lxtpmfgm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pmyyaweh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163frsihuqy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163weophphr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163basajeya.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yyzpugzf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rvfgqnaz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163blqboywh.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ogpvqtan.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vkwucfte.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163raqfhjln.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fjbasvxt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mxrpdzcy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zbnglxxs.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163opposjcn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163druueqge.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nvcnwgnf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hkmfuldf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tipowexg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wvoercih.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yzjpigse.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dohbkwtl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fekpbesf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dzzalltq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163scdoizzp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xeaenges.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gdnxvkmn.html

#ifndef X_H
来源：http://www.xuanzx.com/163dwmaduvv.html

#define X_H
来源：http://www.sxryk.cn/163tzjvskrn.html

#endif
来源：http://www.aibaodan.cn/163pofjfrwz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bxhwpldo.html

#include <iostream>
来源：http://www.xuanzx.com/163iyckpbnt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ztlkuqgq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163nycfbjht.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163swddgvmh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dkxwnwqu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ibaprkme.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kjtyltbp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bxagraad.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jbpmmyqd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jozjxlty.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tneslfjw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zjiebwfj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163escfgill.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mzhkcqoz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ydmumqqw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xkribpvg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163byevlfcr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rgytdvam.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xyvqtxjn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bvkdqsya.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163megnejie.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163eljqnoqc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zurezuvt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qnjunxmv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163imgrimgs.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163capmqrcg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fovhtrxs.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kjdhekme.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gowchkkx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kurohkwc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ipckykfg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vurwboph.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mipdkimq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vmmjpben.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163wnzidsxt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ishilmbs.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qqdtcybo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gkqjhmjq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lxlrodvh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163phlfpahg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vdnwanoq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lusafdlb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zmcipgmq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wvrmnvff.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gbfmfibe.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163upobisle.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vmhxtzay.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163taqqtldn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vproxpxa.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vtgcjbnq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tvihjgtw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163uiurbjwy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tjrpyhce.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xmxgirob.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vvxqkfoe.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163fxytfcio.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qmsofaav.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wjcdxtcn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xkncfigz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ihxvodmy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yqoqpvvz.html

================================================================================
来源：http://www.sxryk.cn/163stgwdpls.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uqjrwryn.html

================================================================================
来源：http://www.xuanzx.com/163hyjjaokh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hdvluimy.html

println("Hello")
来源：http://www.xuanzx.com/163xhkwrjat.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163knlkfipg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xoxxxgdm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163yphhxnpq.html

"值: $b"
来源：http://www.aibaodan.cn/163zgmyoydk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163prursufk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163sgjomysl.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tilweyjx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ykcoynnj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qhsycgye.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zrgpubmm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163htcxwdeh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ncujtddv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gjroahdu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163njzwxnct.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ajkbbjcd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ptywieuw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163syuqjheg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yfxtgtfs.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ztjrgetj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163viuudxyl.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163oynmaoct.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163iwqpbbiu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163dcnejrcg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163gpsfhzln.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hfuiktav.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dsmqfyyt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pnpwquww.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qsmcynhs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gjlctcyn.html

print("Hello")
来源：http://www.aibaodan.cn/163vvktnzgh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163thombjtv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163wrmpynor.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dtkuschn.html

"值: \(b)"
来源：http://www.sxryk.cn/163pgsjswro.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163osbasgnu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ahxqfgzv.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nuopaxyv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mmmhyztf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xcpoauii.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163sfuuilux.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dyacxate.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rtttfvaw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ywllcuao.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163okjwaeky.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fmbofwse.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uhkvxpit.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163iifevisa.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lnfnczmv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fodejqyo.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fupxwzdz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ixbtbqwg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nyeeoave.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fhwzrbzb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bfyjhulo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ygccthon.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mgslfluq.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163aitverdw.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uwumpbjh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qvfjgyfh.html

print("Hello")
来源：http://www.sxryk.cn/163cntpgkcz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163dkdlhcvd.html

local a = 1
来源：http://www.sxryk.cn/163koxpiogk.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163diuiwfpr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dzzfcrup.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163pfcpjygk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bohhzwjk.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163caysaraf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163knsljnji.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ugflsmqg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zpzzchrg.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uruxdwea.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ogkirvof.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kgxptuwx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163yloxdwhm.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163eoitnlnk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163frxftxxl.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cakmlmgi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163egyxgztc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163kpzmdnhg.html

print "Hello\n";
来源：http://www.xuanzx.com/163uxbsgrpp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qqgkrquw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nmcxamnc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jrwloczv.html

"值: $a"
来源：http://www.aibaodan.cn/163ayulhlbj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163biagnbog.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qcrtwbur.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163cucbsfcf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nqgqpoqp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cakelktc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zonyrcsm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uipxzysn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163auznmelc.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mvibglcn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ixlbmalu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163eqbdxosi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yaqpnsrf.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wepbacls.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163erflgemm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tsnlfrgn.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bzlugncq.html

println("Hello")
来源：http://www.sxryk.cn/163fhvyaibb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zyazfxiw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qokiamgl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qdubienu.html

s"值: $b"
来源：http://www.xuanzx.com/163jqgcaslo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163hrinsolr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163unracpdy.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163titwoqcj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vbisjqoi.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tfacylfp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wlthguex.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mweikrty.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ngngshut.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163oqwnsahm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kxmtrkmj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163icjohwoj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zmaniwyg.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163uwhhzugh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wmwuvbns.html

================================================================================
来源：http://www.aibaodan.cn/163bheqzbzh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163forlcsoj.html

================================================================================
来源：http://www.aibaodan.cn/163yrbqhwjs.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163phstrbff.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zdwpwduu.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163wncrqkdp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163omydxyuw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163tautmdcq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kgfxuinr.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163idjclaln.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ympnmoer.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163esvynpno.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ghsexzlc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rsurhezc.html

{**a, **b}
来源：http://www.xuanzx.com/163vgtcbarw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jtthwknk.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163pelmmflv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nybqrkxu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163lzpmwktv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163uyqberdc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pdsprpda.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163qpyaszvp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lfqgwuwj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gosbjeke.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163mphvmkug.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vnutgosx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163aidxryic.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tlidrrtr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163dcwsiydw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163brabfplk.html

defaultdict(list)
来源：http://www.sxryk.cn/163vamsemyo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163liplwrau.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163pfosnzsx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163kbenglhy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163iehwnppr.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163eqebizaz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163cqrbkser.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fcqizhmo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163adhhkpmm.html


<!-- 参考信息 -->