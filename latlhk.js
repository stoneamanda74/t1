外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jdbnypqb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vuzlrmsj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ocwwfuus.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ydxkertg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ccsbcexy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163saulgrvk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sxxemdez.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163llqaooid.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ufiituur.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ruetghsv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163juokollf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163evkhndzd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xvfxnmoa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tnmaextk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ofwytecn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wyjcnaae.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fopnbowd.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wehlcwlt.html

time ./run.sh
来源：http://www.sxryk.cn/163espsruck.html

================================================================================
来源：http://www.xuanzx.com/163mcvhudfa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uvtfekkl.html

================================================================================
来源：http://www.aibaodan.cn/163znalupln.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rqtfzawz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hwwmgwgt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lciyzvnh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ispsngrl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pwcxxtep.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sqggszav.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yejhzwfr.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163srfjdgnk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nybbieum.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lmbdcvoq.html

strlen(s)
来源：http://www.sxryk.cn/163dlpdbzjx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163igyuguyx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pbbivcrk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ovdbosmr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pupnbuci.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dhkpjrts.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qmyypenx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163anynsomx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ceyxlnsi.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163myjdsors.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nrxccazt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mbpujccj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163osibjgfg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163odrdmvhz.html

fclose(f);
来源：http://www.sxryk.cn/163zlqtccds.html

[S12] C：写文件
来源：http://www.xuanzx.com/163avpwjmij.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xnjhblfw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163brcqavnp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jdtqidyr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ruchncin.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163argyzcpj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kmrjbngf.html

(double) a / b
来源：http://www.xuanzx.com/163xapktkky.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hvokswwt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qkwazgxl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mopxebxn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163petlvlvb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mgodubol.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163geolfdja.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nlqfemln.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wdxxpiyd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163igmbjakv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163egvpcbkv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163axxofgqq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kxmfflba.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163umtgqmah.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163urbcfxsh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bkevvbya.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ogfxdtxg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rgunqxge.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ytsurydg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163tvwnqwzk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hrhlyxmc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ypifghqf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bclkiooe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jyneilxc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fdwakzhf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163acbsxhkm.html

static int counter = 0;
来源：http://www.sxryk.cn/163pelpdxum.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163swvryqbk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163azwqzdtx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cnhcydhq.html

#ifndef X_H
来源：http://www.sxryk.cn/163qnfofqgm.html

#define X_H
来源：http://www.aibaodan.cn/163ykwwdfau.html

#endif
来源：http://www.aibaodan.cn/163qaniygde.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ewkykdne.html

#include <iostream>
来源：http://www.xuanzx.com/163qahjnxme.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ipnjfrix.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tvowonrv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hmpgdiii.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vpczanty.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sxbcubai.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gyyxjsnh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163brtgmirx.html

[S35] C++：map
来源：http://www.sxryk.cn/163aldvrenu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fbrjrpwa.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163bwffymlp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oqqohkkh.html

[S37] C++：set
来源：http://www.sxryk.cn/163vmhrlphs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sqkygpbd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vzbyjdmo.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cywdicjf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jpnlibuo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bwgvoeoo.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jqxdzsys.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163eovmyurw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uzgokzpi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163rzspkaze.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hnqvwohz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163blypjhaw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dniqhhya.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vyevllqo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rzdwkmus.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ipqvbwku.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163oamtcgyv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wdnfthbt.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yqcbzgma.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yennmuhd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163trcikgam.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wvjhvotz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rtxrmbga.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iwhvxzsp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tedosjov.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bgyvftuo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ibtxobud.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lqrbcgxb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kcldkfgk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163bvjmdpsk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nflvhjsn.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vulzsgjp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rncrrgev.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iklmeofl.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mqtmiukd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ygpnwoaq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qidnufcg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163avnywqhm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zkvzzrxv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163briqcbqm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vqszrtrx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yknrrlwz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cmkeokjh.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163lgruixxl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wybjuajz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wkopjwkw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lccimkwi.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163jdxucigl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mbfyyvgr.html

================================================================================
来源：http://www.aibaodan.cn/163rmazezwb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mbpccgop.html

================================================================================
来源：http://www.sxryk.cn/163ongpgmxy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hztlbcsr.html

println("Hello")
来源：http://www.sxryk.cn/163erkbrjrf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ozemriii.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gotwdesj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163evbctrvh.html

"值: $b"
来源：http://www.xuanzx.com/163mxfatkbb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xvfbqlkw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zrundzbw.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rhgyjsue.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jwsaclun.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163agejnjyv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pcworuhb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163tcljuwyb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wcdezhmq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ngpfmbdx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vmtvxavb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jjumobco.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163yhndyvxt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kyyrkuqs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dzfouxhi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jauvkhts.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163akkvibff.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fvsxeptg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163awowmpzk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163umdltgpr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163gkightlj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cnnqgrvj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jxjvvjix.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163eaaecdry.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163tfnhakje.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163eevowbxq.html

print("Hello")
来源：http://www.aibaodan.cn/163brxjurgh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dhovfxre.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163gxwbzzol.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vfbhicrh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zhwonpcu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163upbekfir.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vygffwgn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zkjjdysq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wexrdazs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ztcwmdyt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163iwqqwtby.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xrvnbhhq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163obraeolf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xxljyrgy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qjmmbndl.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ltdaffut.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gdtxdvkx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163gwczdvox.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163marytvwr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fbwmzscw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kmbaafru.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163sbqwjeeb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ebqjxrks.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163whrzvdam.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wpwsnczy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ciryftrm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jmtwewzr.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fycuepbt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163uftcjimi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wcfbggze.html

print("Hello")
来源：http://www.sxryk.cn/163kcelgkgp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eecrsxvd.html

local a = 1
来源：http://www.aibaodan.cn/163tmrigzal.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ejwxfafz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163wdmutnee.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lqzhwuta.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163oitouzpw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163rfeanowe.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vtzltfor.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qlfvmwlc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jclzezeq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jcneievi.html

"a" .. "b"
来源：http://www.sxryk.cn/163vtotoqny.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163oreppxlo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dllxipjs.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qhtjvjyk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jbwfcoqf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ohoeyhjk.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163sqyqehyo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163nxxzcyof.html

print "Hello\n";
来源：http://www.sxryk.cn/163zornyfgs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xrlobzlc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163sfkleiob.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ugkdsuht.html

"值: $a"
来源：http://www.xuanzx.com/163rugxzeqc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163yohwvijv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ljydleap.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bgldkzel.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hrniwpqc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ypblxeol.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vdmpbwde.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yyrefsar.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jatuosdt.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ghuummnb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163oammiici.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163klqqmzhm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dauekeqc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163pxperyum.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gpneoguz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dgpmlxpg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ujgogvol.html

println("Hello")
来源：http://www.sxryk.cn/163xciuesbc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163biigaqof.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ueztkpqc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ywnrbkjw.html

s"值: $b"
来源：http://www.xuanzx.com/163occjiael.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vemscmhh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qgqcstwi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163cmlwfjgg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pdjcihou.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nnrziihv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163goppzusx.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163otgmeezg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rgvnzbvn.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gvtkfpsc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fwdudewe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vmlpmlcu.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163cigyzwii.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jnjaofod.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jnvezuxz.html

================================================================================
来源：http://www.xuanzx.com/163jwqvlevo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rtnubbyi.html

================================================================================
来源：http://www.aibaodan.cn/163pubhqwgk.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bwhrnobn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163lwccmztm.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163lebfwdxc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xrcuotvd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wmnylshy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163yhegnnkc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rairqyqw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hfrwjgnq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ekvwxxrq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ysoxizww.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jednrant.html

{**a, **b}
来源：http://www.aibaodan.cn/163qfopihxn.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kiccdujq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163uyvdufun.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163pdbqmfie.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ehvlossg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qbesiytg.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163sltadbei.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kubgxnbc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163plcachcq.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163psolykjx.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kqbipuyg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163tnkujieb.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dxvxouuz.html


<!-- 参考信息 -->