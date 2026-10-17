外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163byyamlam.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gomgreij.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163iveqrdwl.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uoglbusq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xbtlgxzu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rscgnyzz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163lvnrbokb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dtekfjno.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hhwpqmxk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gaqnoyum.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163firzzitm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zdedrdze.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nqdwenuk.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163imgnhgas.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163suchhczh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163yuwctmqa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fnuqxwfx.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hypypqgu.html

time ./run.sh
来源：http://www.sxryk.cn/163qvvthlyx.html

================================================================================
来源：http://www.sxryk.cn/163wubkonoj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163exvydbpt.html

================================================================================
来源：http://www.aibaodan.cn/163latnxcij.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163oyztbjwy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ronkvogj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vgxuzubn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163omlyzjuc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zuisnpsd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163inijaduc.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163apuyxabi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163biklkstm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163oqlavcrn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rfclmyvu.html

strlen(s)
来源：http://www.sxryk.cn/163slmbpcqz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hegmtjnl.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163iulgwapa.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xwmizrcs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wszalncb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163glminsrj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qseplbie.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vfiybxcq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xqvvccgj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163yiqvjmhk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163aumfhuvt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ewfbmrqf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mpznmige.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ieryrfiv.html

fclose(f);
来源：http://www.xuanzx.com/163bnfallsf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163bhhmqbpi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pluwafbv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163plcegtsp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zwumygxu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vugjxhaj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ykkmivvw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163oxqojqne.html

(double) a / b
来源：http://www.sxryk.cn/163fsiobtkw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163waxqllnm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lnsdhvdg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cnjzxfsv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ifsxxllz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163onnocenc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bzjzrpnc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pcpmfmlr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163igeteyak.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ckubakyx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hmxqnjvy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163utjaaeap.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163naefwjij.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xdacxgpa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ptchclbp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zhzbzeij.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163okzxlfdk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fxjhnkdq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lugihdzc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rnabmxrd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cxldqqzw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zcfcjaqz.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163evshttlh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cxwbhuzj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163girndwwy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fruwwyte.html

static int counter = 0;
来源：http://www.xuanzx.com/163pxcopuju.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lypfoqwg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tyxuzhdp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163tictojsd.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bluasehz.html

#define X_H
来源：http://www.aibaodan.cn/163mtejailu.html

#endif
来源：http://www.aibaodan.cn/163wdxsjyvg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163pcmfkybh.html

#include <iostream>
来源：http://www.sxryk.cn/163vhuupnvg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zqroaryn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jqcpqszc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bsdbyxpk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163evqypfih.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163muycowun.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mrutepmk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xmgiirrm.html

[S35] C++：map
来源：http://www.sxryk.cn/163jzogfbil.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163armzhjjk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oordjrfy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mwiuuqzm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vvygdxpw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163smahrcdu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gsqlbspz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163emgvhrcj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163emhvyosq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163poykilds.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kucvqsvh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ydclsyac.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bxmxlciu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kqgftmja.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xlyrqaih.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ojxyiudo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ltvqxuty.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lquqnjuz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mqlneoca.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bicipngm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fzclhnsm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163rayldvny.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dxuraqnj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ytnjytjf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gppkdqpa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ztamtnxg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ibylttkp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163etxwbful.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tmgzzryg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vhszebfq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wcdsjpwt.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hijoaciy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xosybtyf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rvihkqnf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mnmgivsf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163mvdjvlxz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rtgsmouz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dgsszqub.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wibfhdsa.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163usjyyqpc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fpgmwjjb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xpplrmrv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wgiivolp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ogjstloq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dwoncetn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163amybpgms.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xsyubfny.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pajpygba.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163czeglvrn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bdzinosw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xstdpnnh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ixehajvo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uqbwkrhg.html

================================================================================
来源：http://www.aibaodan.cn/163myuynbvu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163limqwpey.html

================================================================================
来源：http://www.aibaodan.cn/163ljqhbslg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kxwlswvj.html

println("Hello")
来源：http://www.aibaodan.cn/163fjlowzuq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xrfwkvwa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163huweueme.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163pmwjfzyj.html

"值: $b"
来源：http://www.aibaodan.cn/163vncikabz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lzcysvqo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163deeqzddv.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163qczwgptf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hlxlzkhx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zjvqbnvm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tdssjecu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163pbohulgi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163iremprxf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qkmjmjpl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gpbnwczp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dabwsfmd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163uzaueuyi.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163caeaaavj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zdkqfxpe.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rbnjupxf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wsrjrhqu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cpprjqdl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163rhxdvmpa.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163sevsqvrp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yoacxknn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163khboqwfb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163uyzhhrwu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qmsyevwq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qtzrfhgd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163kooanvsd.html

print("Hello")
来源：http://www.sxryk.cn/163wgedcelz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163akpgvoer.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hlvxvzmj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xcmtyhkh.html

"值: \(b)"
来源：http://www.xuanzx.com/163rwuffine.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yjbikztk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nuwilidq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163cpkfcqbq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163eqbmafdo.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wnatmlyi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uafkkopk.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163oauagjno.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fytuxujb.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nzfobhiy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163btustkjf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lknkgyus.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163osoxxzux.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163sluzznme.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163esdzinfq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qxykhuhc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ptxqddoq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zxoncsxg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nnwpkbfo.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bchqndtp.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ykgkjiqi.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mtvlosdg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163coxzdtid.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163utdoxlco.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163duijlfpc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163beebmzjq.html

print("Hello")
来源：http://www.xuanzx.com/163avixklxx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163alcqhkky.html

local a = 1
来源：http://www.xuanzx.com/163elfaeemo.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163chqfazim.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jwuftiun.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gfamysex.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163kabmcvjy.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qoapijaq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ytdeaehv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cpvexqye.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163asuddyie.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163lctolzcj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ibwpdvde.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163emcrgciu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nytvazct.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ioomaivk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163piyoicss.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163gadzwxpl.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bmzqpanv.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163acznsifz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163trlxpoep.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163imthoihl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163erfhykgp.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163prskbkxh.html

"值: $a"
来源：http://www.aibaodan.cn/163sswzxsan.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ospvtttb.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jmcyaxkw.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vvcidwkw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ieprkevc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ylaekaut.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ndkltqkn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163sovauddx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jfpkjtqb.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163dmjryqqh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gicqpvac.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163aokwbmwh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163egogiope.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jjpjopyi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pjpbmfrs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163urqhnlht.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163axsnguxe.html

println("Hello")
来源：http://www.sxryk.cn/163zaibxeed.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aznnixrj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lzpcyele.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jhjzpwgt.html

s"值: $b"
来源：http://www.sxryk.cn/163casejmjv.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163nuyvfxak.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xdcnoxee.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163rxddejem.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vhqqbrwf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163etjrxqwh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lqkkasou.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163izwmgbhu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vndqmsjt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zmjuzqnb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ykxddpuy.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163eyjffzkh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ajkmnvpn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ksrixhib.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wtapmbdc.html

================================================================================
来源：http://www.xuanzx.com/163afzieqyb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ionjfmbg.html

================================================================================
来源：http://www.xuanzx.com/163fvtdawxl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zywdnzvi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tnrotsqy.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ggotrmfg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ahjlkqss.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163eqpqfqmg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163sldytyyk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ygwfvpjy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163japjkmgr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163bogwymvg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gkxeuzcb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163utsjbgft.html

{**a, **b}
来源：http://www.xuanzx.com/163pfqybcll.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mwnspfdb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163klsjteza.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163fkcsmsyz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163axiglhao.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kanghzhk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qtlossdj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163trnywifk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tatjoddb.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dslynvba.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fnbkfehw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qllhknqm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163eomdfudf.html


<!-- 参考信息 -->