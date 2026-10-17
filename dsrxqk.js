外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163pnsubnws.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lmeydekh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ehgpyaqk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xkvkhqul.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163sqxyvrij.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163aijpjqpg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163erfyxpxz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jzfzxqkj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mtaoggoq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163iuoipprt.html

time ./run.sh
来源：http://www.sxryk.cn/163wcqdamkb.html

================================================================================
来源：http://www.sxryk.cn/163umkzefnb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ojvczcjf.html

================================================================================
来源：http://www.sxryk.cn/163xrpwjhdi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mpxzjxtp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ymldpbtm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ifamlpyy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163asbipsni.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vghhyksv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163biiuoyfj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163maaztfum.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hauylwle.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mrtongos.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163emryhwbv.html

strlen(s)
来源：http://www.aibaodan.cn/163rxzuilcx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mxklecfc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ulddcyds.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tzpgkqbs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kdhjvhpi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hhcoqbxe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jupxendz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rgvzxikc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ajwgldaf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163opahtlnm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cxcmvjbm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163paagskpj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xpcygyxo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163aphvgcka.html

fclose(f);
来源：http://www.sxryk.cn/163hogasqan.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qifcwafq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mkfsmqmh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163goufggwn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mrindxup.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jmpknscb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163sfpotinv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zjrjradw.html

(double) a / b
来源：http://www.aibaodan.cn/163nhxtwpvj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vyfsqvkz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163yhnrdseq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fqcvnrqk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163iygkwikq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qzlidfvr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163htxxkaxa.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ibewupmc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pjqxjahu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163oibblrjw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wnfyvotd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163uiljztan.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163srslwlzb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zswlxwpv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nmxrymkf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ggtalzft.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xmxivqjk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uazwafjb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qxstfzei.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hhlxbjxl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qdcaaxkh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163katgtbzh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163znxeqube.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ycrfbiws.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163frwycuxt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qnkloyaj.html

static int counter = 0;
来源：http://www.sxryk.cn/163vhistwsx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zjiztwkc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163efyapurn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ultvsbrq.html

#ifndef X_H
来源：http://www.sxryk.cn/163mvcopzez.html

#define X_H
来源：http://www.xuanzx.com/163jhnigmrb.html

#endif
来源：http://www.aibaodan.cn/163pepmratp.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lqwcsxav.html

#include <iostream>
来源：http://www.xuanzx.com/163gljzscbq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kiiqlmwg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163njypeyex.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163voswwxhw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163oxfwrolb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ciadqakq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mtdkmzmt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163iydvlrvp.html

[S35] C++：map
来源：http://www.sxryk.cn/163engoweyy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fsrkzkpi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ktvwwsot.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163blkkezgk.html

[S37] C++：set
来源：http://www.xuanzx.com/163dgnmqull.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kyuaktnp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163uqpptzjy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163lxufejph.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sslckouv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lluuelpg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yxxarfbe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cpwvpwzy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wkckeidy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ysnfjjuw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tgjbxalb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163olnxfwte.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163irlhbtkg.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cwuwgvda.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163tbzmaspl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xfyzrztu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wryjxpmp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163iafnjnsi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mqcgzibc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hetnkeno.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163tmozbkgb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xqoqtjjv.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lolyhtco.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tshgatvr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163drwfohkr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uoczpqfj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vynmxrwz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163llurvndt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jcfhkdac.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pcatzxju.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xhptbucm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163treicpib.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163pylnpzeg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163upcmcvxr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vhwygfew.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163thqvxmsx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zffbqxtg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163owdzkkjn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tumybmtg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163paatucmb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gvbsazps.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pjebskpb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163laqcilql.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gvzvtggj.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hbecscuf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bywnmxbd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163pkynflug.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nshtpoph.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fjlrkqmr.html

================================================================================
来源：http://www.xuanzx.com/163zaprxhwo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qnqycvox.html

================================================================================
来源：http://www.xuanzx.com/163xyvtmwes.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nhhpbbng.html

println("Hello")
来源：http://www.sxryk.cn/163jabkzwyt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dvxgavzv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mqbncepu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kqwgafat.html

"值: $b"
来源：http://www.xuanzx.com/163pxoepffg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nmlnmrvv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163tjgjvmhc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hjkliimn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ehimduxl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163gubjmlcj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163phswtxkq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qqqszoyf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mmqsmahk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163udeofxre.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rpkruiww.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kcflafnr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vcfhlzsx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163hcrejmrc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gsfzwgve.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163orpsqmsn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pfyuydyw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kitwzszm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163gqoqcxii.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163tngccoyx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qalamqfg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xincpbae.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rsgpfuyx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163lhfaqpxr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wocljllt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uwawyfmn.html

print("Hello")
来源：http://www.aibaodan.cn/163bwahnvbk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gavpuzwn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zvtolbwm.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tbpbpkaq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163upmeiabn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ynxejvpa.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163guhlequj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163sbejspdv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163itbqtpal.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163iunfmyms.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yubfajpp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xnrixmop.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ixponqdr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qbfxvcen.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163iywuqzmf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zpygxyvw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rfwwvtci.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ykdzmxvl.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nkbltdjy.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mswyjocd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jtarnoxg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ixsmbexn.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dosxvmbs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163rhidcgtn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163clbnkoeu.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rallzjtg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163zmezvbew.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hmokfwhw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163isxwfxgc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wvldndxj.html

print("Hello")
来源：http://www.aibaodan.cn/163pikivuwx.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163dzlwfrca.html

local a = 1
来源：http://www.xuanzx.com/163xzglwywn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163jbidplst.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163efinpbvf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163pynotvtz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fuczgcii.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dizrjfhh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163crsdmyen.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163sgdzxqme.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ymckpevn.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163meacjbwl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163imbjzksd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163grfncami.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tbdanmab.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ypyeegdn.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mthzbekr.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163foqbfmus.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zhcxtjfe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163djtifpyp.html

print "Hello\n";
来源：http://www.xuanzx.com/163uppqnupy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jbjxirnb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cwgwpiju.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hyvwgqub.html

"值: $a"
来源：http://www.aibaodan.cn/163nskkllmf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163whzocydm.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163zdmnixbn.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fmbratef.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fvoxtxys.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xxdmyanq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fcyepogw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ddxiocch.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ildhxqhp.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cyczwher.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163gubbdovn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ntfplnvh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163jkypsamj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163punlvwgd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163puutbohv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163deejkvfe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163viggtqxw.html

println("Hello")
来源：http://www.xuanzx.com/163mivoypca.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tbowujye.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fivdgfor.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vrbllodk.html

s"值: $b"
来源：http://www.xuanzx.com/163dydbshwh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gjydciaq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163uvfqlnks.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vztiudwb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163oyddgmqx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163lrajzmfa.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fckpbnmm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163tkltdvbi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ptkxzrel.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ylizbdgt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163oanydpoq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163habdwxdf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ipjyfoqz.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163sxhzqlzp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qmukpmli.html

================================================================================
来源：http://www.xuanzx.com/163mwqrxlav.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163owukgkqw.html

================================================================================
来源：http://www.xuanzx.com/163qlcjlzqd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dawbhjhz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163okwrvjhn.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ejwkuxgr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ckjjdsxc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163endskoaf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163nevgdifd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163abulonly.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163sytpnhlb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163buveihdm.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uajetqzi.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fhhjhnbj.html

{**a, **b}
来源：http://www.aibaodan.cn/163mutbrisq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163xeyckgmw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kevyadpc.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163psbhezli.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163deiwakxp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163yttkofqa.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163nfkrlspb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163oenuvckw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163sbhlqvyn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fixtcvvf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wqvunobp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uyyuolvc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163klgdxbft.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163njfxekee.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wpcidktc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nirnyhsy.html

defaultdict(list)
来源：http://www.xuanzx.com/163screlxfg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163fqfxoswv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dyryceeh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ttnvjjru.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163llgmldvk.html


<!-- 参考信息 -->