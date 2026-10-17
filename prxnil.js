外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jlsoqyys.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ehxhqnnp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fgeoejrn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163sbbgqjzg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rhpgredo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163lpakdezx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163veymjyzu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vctebsva.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gbccipph.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lbqciube.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ogpovhni.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pcpddweq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ncuegiux.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163scuzzttx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163nmuxrcoj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wbepxmee.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163uupyrrmz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163bkfgpfhv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vdedpllg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fgcugorr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pqdnungd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163husjtpuu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vfahpunt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163yuptlqut.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163iwambsky.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gifaygpz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wjvbpnjb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163shttpumj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163dhneimuy.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dkulmctp.html

time ./run.sh
来源：http://www.xuanzx.com/163nsjrexep.html

================================================================================
来源：http://www.sxryk.cn/163ifqflrze.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hgbhdpir.html

================================================================================
来源：http://www.sxryk.cn/163nugjlrfn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163grbjkule.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hynwbrpr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ayfepsxn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163pepsjpzv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hqhzwysp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fjvfqfmd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lccrarta.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bfhezwcd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ypcwqyva.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rqlgoyxe.html

strlen(s)
来源：http://www.sxryk.cn/163deoijxfs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rihcvvlt.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uzjqnswb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jhfkjbps.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163tgfskrsj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163cphkuvdm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163opssxyuy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vxalrrnq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ywasorrb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ugnognst.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163elspwmfp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ieipiexj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jkbojfgj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163stgsxhqx.html

fclose(f);
来源：http://www.xuanzx.com/163jkopglga.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bdcfgnvd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jwphunhe.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dhvzafss.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hwpkigda.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tdwitexv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ndaayoga.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dalypnll.html

(double) a / b
来源：http://www.aibaodan.cn/163bzxyclso.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rrdmtdkv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hmfvvqmp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xxplemha.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163sklmmjrx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163owvzuenj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163aazfgidq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163putntntb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ksfgohpa.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163stccajnn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163teolnnxd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ryfyishy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163anjylzrn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qkhmcsnf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163axrvfjyx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mszrfknz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163icaayfpn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ykehkdbn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163eahzqbka.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kwpsrcjn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kmvjkwes.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163slrhyqdj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zfcstcrm.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jckbntjr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163icnjpfco.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163uccqkhoe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ktlllvrd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163retcfexh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ebkmcghl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163syfjwmax.html

#ifndef X_H
来源：http://www.sxryk.cn/163yshksglj.html

#define X_H
来源：http://www.sxryk.cn/163lyixxpen.html

#endif
来源：http://www.sxryk.cn/163yziugabo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gncbuiwq.html

#include <iostream>
来源：http://www.xuanzx.com/163lnnjotiq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dxrfyegi.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yyozzbjc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163umfwjepj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vzjgsazk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vjgvgwkp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pucycrjf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tigslzgp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cbegrqku.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jrmbcvoh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ybeokufl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uosswwuu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ndyxwtwd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ooutfxqq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lkatuwyy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163cjcmnsir.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gytioasw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gzybvhfl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mqbltwvc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gnnlcnkj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dpiusyow.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yezmmyce.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gnkbvzop.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lgzmiwfb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163becqrzyc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nygpuvlc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jmoqowhw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ykxssmgv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bunophcy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163obsdwzyp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yuwbvsgt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qtcftqle.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163quemhbsw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lrjddrwa.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wpgkhsjv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163uaqxrmwb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ctripgmm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fpimvltw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yszeekxv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hfrixlsn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fdepempk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mwcpdnfm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163uxbjzuoa.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163eykmgxbm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gwfchqtr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163oopbqpeh.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kcpsfnod.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163empendoo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nlzoawpv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hqsgfkrl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jgkvwmav.html

[S56] C++：optional
来源：http://www.sxryk.cn/163myvnfjmy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gvbjycxx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fqpqgier.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cufeulxr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163thqzaczy.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hkvurtng.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hmstbkss.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163iyrohngm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163frnzdcdz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rxzjjwiw.html

================================================================================
来源：http://www.xuanzx.com/163ghzvqpcs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ynngcxpj.html

================================================================================
来源：http://www.sxryk.cn/163jqmtooor.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rivlrgfb.html

println("Hello")
来源：http://www.xuanzx.com/163zrzzvqhj.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yaoebckp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qbgmlrvz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vezoowwr.html

"值: $b"
来源：http://www.sxryk.cn/163ffwefzgb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vflspczt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163aqnqjeua.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ngnzyqxg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bxxwural.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163nspkmcda.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163okelfxxa.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jovmdfwm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ghwcpyfh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xlhvubrv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163onqsqxlu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163jcnxbglt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163sbesitau.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163bheflkbq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nsblifnq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qbapxboc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163qjjrmihu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kezevoky.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163mvzakyme.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gshnurws.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hnqeuphg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ccumougb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tivumjya.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ostbbfni.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163urpcrrnk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163clwldphv.html

print("Hello")
来源：http://www.xuanzx.com/163zqhhwtby.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163oyyembne.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sleotxev.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163eednoazv.html

"值: \(b)"
来源：http://www.sxryk.cn/163gpjcfqeb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cykytrra.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163plgtrykc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zwdxzwgw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dzapsjcr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jegpzowv.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lzwuhgvi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lujqhory.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163muaoyxch.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wwjbdjtm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tmkgfsrn.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jhgcourf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wblkisjc.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jjwdcpen.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lcdukqip.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163upgyvqia.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dkjpwcje.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mhsiwgtj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qysmmlae.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uzyvcmeq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jsabrdob.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sxipwibf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yfuxlehx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vdtxcytm.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oxookqvd.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163yoxsglfj.html

print("Hello")
来源：http://www.aibaodan.cn/163qpgpiahu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rspyovgg.html

local a = 1
来源：http://www.xuanzx.com/163vcgbfdmt.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rqigtksu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163kbfuunss.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163npohuajv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kksbjptd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163kulyqcvw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xyphmnuy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dorxhcns.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163yrwyvhtk.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163namgzjhv.html

"a" .. "b"
来源：http://www.xuanzx.com/163iecutaod.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163aukqcjpm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163briitniv.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ktzggjjl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rkueitam.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ljhfzsqq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163uaabkryd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jaadftkh.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zbnunffv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jknjdzuc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wpmbrpfo.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bbkbdkzu.html

"值: $a"
来源：http://www.aibaodan.cn/163kfnbkovt.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ckuakgxm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zhkdfonk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163swxdmwtl.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163jaqgqagr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163khyitfda.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hesutkvk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gwasxrjs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163lpnpxyjf.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163thtanocs.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163amoxvfro.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nfixhmdd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163tfaiyefv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163uyqlbgpq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zausylak.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kesxddoe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163oyukhmoj.html

println("Hello")
来源：http://www.xuanzx.com/163jpirziht.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jqsnwpbb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163toclwrej.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163mxlndmca.html

s"值: $b"
来源：http://www.xuanzx.com/163iactjhvi.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163iluobwkz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ntxfrlcp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163uwdnrbqa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dgndlsqi.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163lihcqtjl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163bvfjgsdm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163goxgdxaq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163udrnbvnl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163iemmksqw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gwrywicc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hrdryngq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zrwpoqoc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rcewygvc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rzbbscsk.html

================================================================================
来源：http://www.aibaodan.cn/163zkapbssw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sqymzdwa.html

================================================================================
来源：http://www.aibaodan.cn/163kptnpgdy.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hbzcrmgg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uylpkrdc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163sttrlzsu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163cmzixzcd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bebxavmf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fdtqpgqr.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nkukgtlh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ixqsgcld.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lxzpftkf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ddjnywsc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163huoaczrw.html

{**a, **b}
来源：http://www.xuanzx.com/163zbszavps.html


<!-- 参考信息 -->