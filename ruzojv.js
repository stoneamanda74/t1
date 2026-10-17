外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sajssfax.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jarjqwtb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nnpyqrdc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gzxcrfkn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wesiocvm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pqowgjoo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163acakwvdc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pjeommxk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qldljxou.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jzcvqxda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163muymhpuc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wkkuliuc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lwnssgya.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ruxlfcps.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163avhrdjdp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163mtrxmwso.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dicfggkn.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zijjadrq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zbjcuehp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163yihaitah.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163bjedjgfz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qimkmnkp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163mijgpung.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xziasmbw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qhxnpmow.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xbqhtdie.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nkokcoov.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ymvkmjdh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qzmcdajq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nlfpppej.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163plctmast.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163itsnaymu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ucymechv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163acxpskmc.html

time ./run.sh
来源：http://www.aibaodan.cn/163fhmfttom.html

================================================================================
来源：http://www.aibaodan.cn/163srxusomf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eiyknsvg.html

================================================================================
来源：http://www.sxryk.cn/163zijnfrva.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qdkokjlm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163emumlkdv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rxcklefe.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bgotfhwa.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163annknzzt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ekyfrvvm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vpufehwx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ksztddaz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lwdydfii.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rxfhshaw.html

strlen(s)
来源：http://www.aibaodan.cn/163uexgoyby.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zgcpgaka.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kpvqwdcf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163dcrdprhq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wojxelcn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mqknnhxw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163kpgxpqja.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bbeosgzv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pdtlstbv.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dspvnszt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163siupeyir.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163uehwnedd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163umfinjgp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163djtwkvlv.html

fclose(f);
来源：http://www.aibaodan.cn/163cabnoffo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fcbarija.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163crexyvtf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163eqebzaaf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ljjzdbyo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ybtsilxi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zffhmzvn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sgofxssd.html

(double) a / b
来源：http://www.sxryk.cn/163cxdehnvy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mysrngmo.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163sqlwezdo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163towmxgzd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vqaurtdx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bdrmbzyc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163czomprwr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ydiisbwk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mrpwmote.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cnjaahxs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nypxhvbj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lmlpxpvo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163npjvwlst.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nbmdkjba.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vspstdja.html

[S23] C：随机数
来源：http://www.sxryk.cn/163csxwdtuc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fbadjjga.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ktlnycni.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lukrtauk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hanvitdk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163thmfjaln.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lrdqibni.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qskxjprp.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pcozkpww.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zwbpstkf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kqrmtqbw.html

static int counter = 0;
来源：http://www.xuanzx.com/163qaatzyhb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qmpdshqd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163srxlmhal.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qgfafhxr.html

#ifndef X_H
来源：http://www.aibaodan.cn/163pxujuezx.html

#define X_H
来源：http://www.sxryk.cn/163rrxhslta.html

#endif
来源：http://www.aibaodan.cn/163tsdxtirn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163egurfudq.html

#include <iostream>
来源：http://www.aibaodan.cn/163twblilyx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163eepgsnnk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jjmxtjuu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163jlqfdqfz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zkhmrqsz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dkypnbkb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vmphtprr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xmptqium.html

[S35] C++：map
来源：http://www.sxryk.cn/163cuvqkjnu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yjffledx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mcadiceh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163idwcugbz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vzltxdpo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mkoqlpgl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xjhonbob.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yurmjbjh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gkzdbdka.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fjvoqgsr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mzajamdu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jbvirghw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163miqbaewt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wptelqke.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163slmjijxw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fanvmqum.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bawpnmtd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qqeiblef.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hsifwdhd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yjhdtkzd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nqojslqr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xdtmqqho.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163apelzqns.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xkefmoyc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163gbdbrrda.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163egtnhjzi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163udrwanav.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vvgmngoa.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163osqvskbz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wifyzmnd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dhuvgjwc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163outlhdrv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wfuxqeig.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ozmwctmb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163islkxsah.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lhfjtbsu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xcnwqsuk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163kskjhgvx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wvjxwlwu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rihldzxg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xjfdbvhx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163grmsbiaw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qtjilfaf.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ilgffxij.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ovmfevol.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163clacqgtw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gyeouwib.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ulmmjagg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ljnyonwg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163umlqymnt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zstcgttq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163sfiyddtb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pvvyhtsp.html

================================================================================
来源：http://www.sxryk.cn/163ccednsdg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163idfcmkro.html

================================================================================
来源：http://www.sxryk.cn/163dvnlxzwj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qayzumdp.html

println("Hello")
来源：http://www.sxryk.cn/163zndstoep.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163obglmqzo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dipqrvjf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163sqtxnhdj.html

"值: $b"
来源：http://www.xuanzx.com/163gyvxgzyw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vthihvpw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gxoivrjx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iaamucxp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163clvtyqxz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163cvvlhtjv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vpfcgsno.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jbvikrhe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ttnqrqzm.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nuxeonih.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tmpjxwoc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163elixrtqw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wyodzayz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kopzetyh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163smjopoop.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163jpsyzeaz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ainfkpyn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163jiwvuaku.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vkhjoeko.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163oxvlnjnf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lvpbwizv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163iojfapmh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dwlpxcmz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163byjqkvsy.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163thdbvhfc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ldzlyjqo.html

print("Hello")
来源：http://www.aibaodan.cn/163jfnzexcj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tsbxgimd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jqetktxf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163jxzszvnm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dytcihay.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tfrsqrri.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mcyxccoy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163sjiardfe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fremzzac.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163knosfmju.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163dsmzojjj.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gpjledwj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vutuzhzo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bbneucpj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jrdlloaj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ofydkekt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ondzifnd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qaylsdoo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163iqslqujg.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ygelzhpo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163plwekrto.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ecvnrarf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163sxtrtega.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wxsgkahm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163zxsmgvip.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163esnixqdq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ndzzokhs.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163byhsxryq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hfgttpii.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cpzmyhwk.html

print("Hello")
来源：http://www.xuanzx.com/163hjqhaigz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nqdgynaq.html

local a = 1
来源：http://www.xuanzx.com/163mmlciutk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ofunkmxu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163zxstddxl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163apwxwcmk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fnypdqyp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ajzepwdp.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163iyhvgcdw.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hucwpegr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zcmotrro.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163opiqbnvs.html

"a" .. "b"
来源：http://www.sxryk.cn/163wfhvmcxs.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163obwfoxkp.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jstnmnpa.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xztuuepq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ltadxcqx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163typfplff.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hrrxknwx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mkwyfhxa.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jfojqqff.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rrheiyka.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xdfbwaxh.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xbfevwik.html

"值: $a"
来源：http://www.xuanzx.com/163dcmkouzx.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zhkmdaca.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163zsvbxyvu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vaaoatfz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rkoqfcin.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pbsadmof.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163aitkehjx.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163jmklzqli.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tsowoydr.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lsnupqik.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rkvummci.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rgumdppy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zckjkdue.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163frxcnmgq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163tyeulrvw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rstolxbc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yuldmegz.html

println("Hello")
来源：http://www.aibaodan.cn/163ielrmlfv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qakacuzl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163gletjsus.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xxyqhkth.html

s"值: $b"
来源：http://www.sxryk.cn/163rytjkyvi.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163hasfbcvr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163pjppojhc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163fgwrlbtd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163eokbtehd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gygdrfpc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wfybtsdy.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163yphaeqkj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gprcssqk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163emibbghi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163uyvtugce.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ygmnlpzq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zcmftwhu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sdiihmim.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163pqjfsgav.html

================================================================================
来源：http://www.sxryk.cn/163xhlwheoj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vzqkoyuo.html

================================================================================
来源：http://www.xuanzx.com/163wusicljl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163sesluoec.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163zagkqukm.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wsqjgwwq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wfmidsjm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163dplrygqp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163bxwkuocz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163kbrpxqdp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163aepodwxu.html


<!-- 参考信息 -->