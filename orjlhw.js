外链999!wailian999！

openssl rand -hex 16
来源：http://www.sxryk.cn/163bokmflqc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ioafdliy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kpfkuogr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zjvqzgkj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163henprulb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jffwbmwz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xwoclpur.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163abwtfkxm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163egjfvxwu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tnqlxtwb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163altwuqlx.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163oeibnqtp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gympwwzc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vymlrcgp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vmzdwovd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jxfgggth.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ixaiuwci.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163joadelfd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mkogwjpl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ssunqwum.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hxpfjiyd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163oxtdnbvs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dlleenwz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mjwkapjl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pboojvni.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xxptjxqt.html

time ./run.sh
来源：http://www.xuanzx.com/163cxneksed.html

================================================================================
来源：http://www.aibaodan.cn/163tamaofek.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jffcxnaf.html

================================================================================
来源：http://www.xuanzx.com/163dtnjkycy.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dqorfegj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163pvkalxkl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qqqijcfl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163oqdghjpr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bjoywmep.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ngavxklp.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gbqutpex.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vmbvzgrx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xqilkopy.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ircmwyib.html

strlen(s)
来源：http://www.sxryk.cn/163irqzuhgl.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zmibvhqj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qgdrsozo.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fvefontp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wyymesei.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fufwuxjo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tkgnjybk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dmxdidzz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163yftkunqp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ngtdbllp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xviwarsl.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kaxuixwd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163crqlzlle.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vplvkzaw.html

fclose(f);
来源：http://www.sxryk.cn/163emjiuiwl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163oqkfoicb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yzopuryv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qltsydcg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fjfjcvih.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dmpzgzix.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wtkbginb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gokbakrf.html

(double) a / b
来源：http://www.aibaodan.cn/163jbytfdty.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ymyodhmt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163esvlkpwi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ztsgmczd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qzqydenh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pfrhyepa.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rldfaiyk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163atrtewdf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gnqmantw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163bxhgcjwi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jrdvugkd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163gqcfjhtl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kaadxytp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jorvqoym.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ssfkekie.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rnoybowh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kudswnxj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163cekobycn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163aopnybhb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163fmavwiux.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163sulltxwh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vkollint.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163muvknzko.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163lbiquoxo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163glkxwrmv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163uzubfvuc.html

static int counter = 0;
来源：http://www.sxryk.cn/163nukhtrxf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gwakvbeq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pgqzcyok.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xuhsilib.html

#ifndef X_H
来源：http://www.sxryk.cn/163upsjacvd.html

#define X_H
来源：http://www.xuanzx.com/163rqlaggib.html

#endif
来源：http://www.sxryk.cn/163laoxgklk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ytsmbele.html

#include <iostream>
来源：http://www.sxryk.cn/163lktfnrko.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qjewkkbu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163eabwfgkq.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jrodqvoq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mfgmjqwf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163aqcoaavd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xtdfkuix.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vccuamkw.html

[S35] C++：map
来源：http://www.xuanzx.com/163cmvfsqyo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ttfnvlxd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bnhcpjzv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rjfbmkza.html

[S37] C++：set
来源：http://www.sxryk.cn/163iywccjki.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hearzoam.html

[S38] C++：排序
来源：http://www.sxryk.cn/163theualki.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ynfpihcp.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xgmefyze.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wvmpmucd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gkmwmowe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kzjclagy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bvgejjyd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163kcehvhtz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ntsvlghc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cjqmyjtl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163uuscjpvj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fgsnanme.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qeyhogxb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vlndeyjg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163klkrjizf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ffxgdeyh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qyutcolh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xjqaphyo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xryftxpo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fbqfszpr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xhrsgtuf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qpofwhrf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vkazhemj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xxrnktiy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wvliqkmi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ldxvhkou.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bglefvlz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mbaazrtl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bogmnthr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dsqduzik.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163opsivcrd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163olkwydfd.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jyhdgfgq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163emybadbb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163umxemyrs.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pmienslr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nvrkeqly.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wndocfwg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163frvibiun.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163iwncbrjn.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tjrbodwh.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kwtrnlbv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163magpnazg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163upwkgewn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163moapikqf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zrrpcqzv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kkelvpis.html

================================================================================
来源：http://www.sxryk.cn/163bqyqxgbl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163puthxxxy.html

================================================================================
来源：http://www.xuanzx.com/163ownnhiqj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163hnsjkohi.html

println("Hello")
来源：http://www.xuanzx.com/163pzzqhqye.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163czjabnhh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jxdaiano.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163btkdywbu.html

"值: $b"
来源：http://www.aibaodan.cn/163lsiknztg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uiberbyx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lzwgaoyj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zsrjhavx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yuqqdnvw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163tqrjnjcc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ghaizayp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cioqcybz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xtsbdikq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xypuapgg.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gskkuatf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ullcebqr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bvtimbgp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163skhknbgc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bwmukpph.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rsusjaix.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fwgjrhyp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tatyjhwi.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pdhagjir.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cvdfvgyo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163khgbwetq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wkuzlygl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kshjtkrh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fqqoyjss.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qmvcawdb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uaelklda.html

print("Hello")
来源：http://www.aibaodan.cn/163ysaoxipv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ywtcmgry.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163elzkagts.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163eqlrtrmk.html

"值: \(b)"
来源：http://www.xuanzx.com/163nmmxsugl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xikbcqwm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163airqdltk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163poxhmjua.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163nhpivrrd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jqfysqpw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163leerwszw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dhpqwjnm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ebfbpqia.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hlmzcnpa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mpoaxgke.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mqoqwozn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cqirwpmd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ducfcjhd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163kofqhlth.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163arhudgjs.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fthsmowa.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nqctebcp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qkxaoaxq.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163wvddzowz.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qxcspwyc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163iwvvrcwp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163shxzctec.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lseuhknd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kunqhduh.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vmlrtmkn.html

print("Hello")
来源：http://www.aibaodan.cn/163zskdpocq.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163bxaqpgfi.html

local a = 1
来源：http://www.aibaodan.cn/163jmqgvipq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ghaxbdpq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vufatybe.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ryfyqkex.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jspavmtn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163skekkjty.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hbggqwud.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tqjnvohb.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yhdapaeu.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163chyuerqd.html

"a" .. "b"
来源：http://www.xuanzx.com/163ztjhymby.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pfvyrjzq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163wgkjsyce.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163guvsamjf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tyqvdaqz.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pwphpsts.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qeqkpyju.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wgpxerci.html

print "Hello\n";
来源：http://www.xuanzx.com/163hrvromfp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lrjmczbu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163hnouxlbg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pylwhwos.html

"值: $a"
来源：http://www.xuanzx.com/163vkhbtisp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lssqkhjz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163sibzcxow.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fgrgupii.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mhjijcse.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wrbrctnh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dboehkso.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ficgmgti.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ixgcidji.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vxrfbopu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jklsjpdf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dvsqdwha.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163mzahzgmv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163avzybzdk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xlktmftf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ynsvivgw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kxqxlhbc.html

println("Hello")
来源：http://www.xuanzx.com/163xqlbbosz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163syxhzioj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fkbnmost.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ucgfamjp.html

s"值: $b"
来源：http://www.aibaodan.cn/163gceplenj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qvagmlrv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jivduvko.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163esviqmxm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zikymqsb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ounuwhgu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163eqsmjrgz.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ebpqpnnd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163oqgtqldp.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ogwthnyv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mhpyvkue.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ejryylxw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ytfvtvbf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163utmnbbga.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wunjqffa.html

================================================================================
来源：http://www.sxryk.cn/163arwkpevy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163eadvplgo.html

================================================================================
来源：http://www.aibaodan.cn/163twlhagpu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zwmarsof.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dvahxfyh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163nfiaojfh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163olevsmkv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vrolshtr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vubsprtn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ckgrdjeg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163emsobgna.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zdvlvaav.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163drltpthg.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163akscjrbj.html

{**a, **b}
来源：http://www.sxryk.cn/163bdhcmfke.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xuhxaaor.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163voqzgqgg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jxjjviin.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163iovcxdls.html


<!-- 参考信息 -->