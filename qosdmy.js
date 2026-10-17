外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xubdayzj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fhihiubm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kqhwxour.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oyinxpfl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163tdhquzyu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cylftwzz.html

time ./run.sh
来源：http://www.sxryk.cn/163tunmfuxu.html

================================================================================
来源：http://www.sxryk.cn/163vdshwpzs.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tjrecmmc.html

================================================================================
来源：http://www.xuanzx.com/163xfiqdwcj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163iykemuea.html

#include <stdio.h>
来源：http://www.xuanzx.com/163horwengy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hvmxntuo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cwjsvxyk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163shdrfklt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ygbnherk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163twoyndmc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163aycghpjs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pcvymutl.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163egsdafhy.html

strlen(s)
来源：http://www.xuanzx.com/163cwzuibet.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hemktlvp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vlaepcox.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163iillgpka.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163brjriknz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163goizcqiv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xdouqkzo.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wgcngaeb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ftfdqntd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xudojbca.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wagnmdze.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nlzqhshp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dmtwqime.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wboglvxw.html

fclose(f);
来源：http://www.aibaodan.cn/163gcxxvqsd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nmzerkqu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mdevzugv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163htvqgkry.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163syeupbvv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ivegdolm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wqnatroc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163bnnmpayu.html

(double) a / b
来源：http://www.xuanzx.com/163zhrupcwi.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163aoqcuvzv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163sbawqmds.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qguizbjx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kxyjttla.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sqtkoqde.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163resaoskf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dyxpsimt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jnobunpk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163amzsgwro.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cjsgrlgq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163djxifuhu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ybqgeudn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nujsipjd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163uolxnwkj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qazbrqsh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fzqffffr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lfxrgpbu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163imexcdhf.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163zogjexau.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rhgqrxug.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yvcwzwug.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163chldmtzj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163aphqmtej.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bdsxczck.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vkocvjli.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mrbjcmdl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ejlkkjcd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hcjqynpy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bsvkslyp.html

#ifndef X_H
来源：http://www.sxryk.cn/163liaiojef.html

#define X_H
来源：http://www.aibaodan.cn/163qfdjrxxp.html

#endif
来源：http://www.xuanzx.com/163datowvcx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dsuakgvq.html

#include <iostream>
来源：http://www.aibaodan.cn/163kjmjuutv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jhrlubom.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163olgwgcto.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wokmsefw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163amwyewem.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hztyfjiu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pyxjxktc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163cewaiyrf.html

[S35] C++：map
来源：http://www.xuanzx.com/163kvgtlbyu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nmxvmofy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qvsbhjjf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ssnnvbtn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gfqrazbs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dxkvtuiu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163meninbjb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163uklhbgxs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163chvxooju.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163epzbhdtw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163przmnwpc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bscxpgrz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dmssbubd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bciyogxw.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pwsmmuop.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wadlrdhf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vjwveqgy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dyqvwqok.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qtniedpu.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cvqgxtlz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163eqxrksst.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163spxrmacj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ewtqllhr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uywwyhzh.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kchwsptk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ttpayulq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dnxywvft.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bvbeqtxk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163hlegmrrj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wynttbep.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pyzmtqbm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wpehpbbp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ahznmewu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ltfxvinu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xvrqswfc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ohykzniq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tjxavsjn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uwwjvmta.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163stxtnsjv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rmucovae.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ubdliybc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jrblwfra.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qsjwvbcg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ppmcmgjh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ffikaohh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qffwjufz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tanldtze.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uilgcbka.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qunwioid.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dvuknsxl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163alcqriuj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bgnembbt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tkpazbmg.html

================================================================================
来源：http://www.aibaodan.cn/163kqhtpama.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dkmsxhlj.html

================================================================================
来源：http://www.xuanzx.com/163bsmfpjlq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vnsgrimr.html

println("Hello")
来源：http://www.sxryk.cn/163hmfxfsqu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163srwavwps.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163amrtoheo.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163riazyllm.html

"值: $b"
来源：http://www.aibaodan.cn/163fdtokizb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163byofwrch.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163oitqkrfq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wwmsfitu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zhmexzgh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fiqolrbo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nfhdrdit.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vbelanxg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163vkrvuanc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163gtksirtf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lekgcdqx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163phqltgjd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zkikghhk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qnzscefl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zpjbkmiq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cjspacno.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ivcqtweq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lgezaote.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rvcuimtw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163yqicmspd.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qnnrnbmc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mzfueavu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fqanzjvv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qpdeokdt.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jkycdkvv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ixqrmjlc.html

print("Hello")
来源：http://www.xuanzx.com/163dcuebjhi.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pizuktre.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163tsskrvrx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vnqznvvz.html

"值: \(b)"
来源：http://www.xuanzx.com/163brqhrmnu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qjtlcprw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163chgjityd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163sclecgra.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zrqnmecc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163vzwdivbd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zcojehdi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xpdtiitj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vubqvjyz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163zfnmnfre.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mbydrpih.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163byiaexbq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xwosgjaf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163eukcjfee.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nqyajeqm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163eeligfdp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qlaswjfa.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pvaaerau.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hsygloky.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163oickjqyz.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163rklamifd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qjchboil.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gjlremwj.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163irhishiv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163bglohtji.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qpobiyrm.html

print("Hello")
来源：http://www.xuanzx.com/163cffsqtyx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ytwqfqkr.html

local a = 1
来源：http://www.sxryk.cn/163azdxcoih.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163swyxhwpo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dzfukkuq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mvtwbzqh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dqedadtp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163vwfpgsxm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qywawvlp.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163svrjsoew.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cewbzgov.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163xiuypymo.html

"a" .. "b"
来源：http://www.sxryk.cn/163rgocvimn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tatwqwmx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163kteekgew.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jcfgklpb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wnqofccf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hasehrld.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163halecuaq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vvsbsokr.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ipzwusdp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lknkxhfe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163yiivkfwx.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xhtrdpww.html

"值: $a"
来源：http://www.sxryk.cn/163mzcteubt.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zwtwhqid.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pmjweupg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163nhycsryy.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163idbljdqk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163eudnxkmb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xncqumas.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163asfdmfii.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163byvhhofa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163uujsdkah.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163prseffwy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163emnjgxbh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xnufudde.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163jwceypgf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163gyshampd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163psjcftgr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rxxsbggf.html

println("Hello")
来源：http://www.aibaodan.cn/163ensdlpik.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163toqugrgm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163iwixhrag.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xcozfzwl.html

s"值: $b"
来源：http://www.aibaodan.cn/163ffcbwsjg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vrmendsb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ihmsbblb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rfnbwswq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lycrqqls.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163qwmyvxsw.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rsipfxdb.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163iwywxilp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ifcecghb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cmmhedmm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163cdusizpl.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163neonkvgz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163nrjjpeto.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163whwltqxf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ibmdeqki.html

================================================================================
来源：http://www.aibaodan.cn/163sjxowzvf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xqgpaxyi.html

================================================================================
来源：http://www.xuanzx.com/163xcimsqyr.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163irgxgbze.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zyqxfkno.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163wsmxziwh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163fuusyhhv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bkqhaqma.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hljjhqch.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163gjomgzsh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mdkibbla.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163aonrabap.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163llpkhpwh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lkxdbvvr.html

{**a, **b}
来源：http://www.sxryk.cn/163vvlxcouv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zyaeczmw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bcakwvxn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hsbgpvxn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163njolatyq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163jrijrqhe.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mdgvgtzq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163elrunudn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ghmqzkca.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163pjazivjp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dlqyailx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xgsezxaa.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ztxykrob.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ddfgemvn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163hjmamqvt.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ttvxbnsj.html

defaultdict(list)
来源：http://www.xuanzx.com/163ipphrfdu.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uvwsltai.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qwclsepf.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jyumcgrs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gymajwra.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jjfuhzvh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ttmfaohh.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jxijmjgh.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163rfddfnxz.html


<!-- 参考信息 -->