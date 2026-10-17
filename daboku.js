外链999!wailian999！

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qrgidnkv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wvbfxzbm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163okaofilb.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yuilgikx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rlbkzvmy.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bpdwyixd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163fgjigdiu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ctkibrpq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163calqzxki.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163puuupyye.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163raihteka.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hyzdinlb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fzululmh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nducfxur.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mudeopoq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163uomgjnjs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dwqfwxyn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uufdrnjm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tdueyjno.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pajskguk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rwjelotn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ajxyzkum.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ivxoavhy.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dnzanaod.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cqzjspvr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kboktubr.html

time ./run.sh
来源：http://www.sxryk.cn/163wcwwunid.html

================================================================================
来源：http://www.sxryk.cn/163dmnokgww.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163mhjtdmdq.html

================================================================================
来源：http://www.aibaodan.cn/163txlpurro.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qzpeahzo.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163sozfjhib.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163prxydzxz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kcqdvcsn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163xsqjxugc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yygmdumz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163oioszuuo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ubjruutd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163djhxqdey.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163oumcfwln.html

strlen(s)
来源：http://www.aibaodan.cn/163tooousin.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sylrgasb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163aztaogtr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jheykycu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jblohqky.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dzghnezh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163lyioznbb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163uioifjzj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163uhhkyrck.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163cqctxebw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jcmudyvm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163epaiulxv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fyolkylm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dyjyktqr.html

fclose(f);
来源：http://www.aibaodan.cn/163jkpyxbwu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yhivbkry.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bfwpbucp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mwhtrtxn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vlepqrrj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kielwubu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dnxmcdka.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rychqpvu.html

(double) a / b
来源：http://www.sxryk.cn/163gkszuccj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163asurhvpq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163loivmedi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zchturdm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mfipfglb.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163gjjttxcm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dymwkloa.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mrquhwqn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163njjwgoyv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wnsupseq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wlykkjli.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sbxfrtyn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163iyaulmwy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wcaswwio.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nqbjtlcy.html

[S23] C：随机数
来源：http://www.xuanzx.com/163laohqvbc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cfzmafdl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ihzdoeuv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xquvafhk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fjyxjnmv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163sydnsqov.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wtjchwah.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wfomyzkz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qjdvkppu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cineerzp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mzvyaczx.html

static int counter = 0;
来源：http://www.xuanzx.com/163jxlxkbio.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mgjlgqdi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xopsnmec.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lqktlzve.html

#ifndef X_H
来源：http://www.xuanzx.com/163lzgdipkp.html

#define X_H
来源：http://www.sxryk.cn/163ntuwwqau.html

#endif
来源：http://www.sxryk.cn/163eqmxvxuo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mtzmkrrg.html

#include <iostream>
来源：http://www.xuanzx.com/163ktjiufyb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nyzidjms.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163iyprzozp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qptvdknu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vaiztypb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nlcdshnw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wtwjxivu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163izerjvhd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jfnbvroo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jjnzdlun.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tfjfkmof.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gehblrch.html

[S37] C++：set
来源：http://www.xuanzx.com/163nptwtkpi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gpdolhts.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sbkxnnuw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gosmoclk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eosuacad.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gjxbylku.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vssngcdz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mwzjxyfz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bpdzknsf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xmgkklpi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qhfxizud.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163obmjohag.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ehwpgmiw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gngwidhx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nwfjwgov.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wqazhqdc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ioufhkwd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ffynygnr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163riultbcp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kdmluucv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dqdhoaof.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pvgzwnuz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nnwsmuxb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ntfxmewk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ikrqbmrn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163yuwitagn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zxaekvqp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163odlwkyol.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163padlgaiv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qmmdxnae.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jhfyllwd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dxmgbpee.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rflmrjsh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163krfjjzaz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ueuwydfi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gkdpvyah.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tvddcovy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ealpjiuk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gxpxnrwv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163unxrbswu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163huugkfov.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nizvfbkv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vnvjflgs.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lvlbvgbb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163glvjazdd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rgigfbhd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163aqikqjbg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ifbcspwi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pggmwdqf.html

================================================================================
来源：http://www.xuanzx.com/163oksfcvyu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163iwhoyapy.html

================================================================================
来源：http://www.xuanzx.com/163pjjwdymk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163leanngha.html

println("Hello")
来源：http://www.aibaodan.cn/163qfcmrhql.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163glsdrjfs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bhbfitvf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wpmxrnzk.html

"值: $b"
来源：http://www.xuanzx.com/163eakphagr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lnapmtfi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163yugwiyhy.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vkbhsiiv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163obzvuxdk.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rwkxholw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163unmjheuz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163koseqkxx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hqgnkjdq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wefrvrxg.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tuvnqsjy.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ehoxiroe.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yguswoia.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yrwjvrvr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wdvnxmqh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pzwecqoe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163iczzigmt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163veswbwxs.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hohveoai.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jvmvbdnl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nzmysuil.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cxauaxmp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wutqqfdq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nvyhooxs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163suckehys.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163psmxinai.html

print("Hello")
来源：http://www.xuanzx.com/163fojokngj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163cjmdtcti.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163epboyqma.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ozujjypv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zkdpfpvd.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qfnuwkpp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163eatspbkj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mxhiajsq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bekdhgzg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hopkvynu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ddpmkzwl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lgqhqobt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wtphfppf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hopxlqzd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dnytmttx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yrrtrqlk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163oxsasvcs.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163sxieiiec.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zxmquozg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yvrglheg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163opqgysfl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gdumdlku.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163egimvogr.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wprpvxqh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163duhqtlpp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163krmdheyq.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rfjiipka.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mzvydxeq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mxqinfgs.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163aynlpezu.html

print("Hello")
来源：http://www.aibaodan.cn/163tcphclag.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uivmjxtt.html

local a = 1
来源：http://www.sxryk.cn/163lcbqcfna.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xjlnedse.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ypjsagkl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163uzjpxrfj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kphefpcp.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zdkcywbl.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163twaeyzag.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lbwjewvb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wmslokix.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163kejghgcu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wjphvpji.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163aybeejse.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ahuxgplj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163xazewgnd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cqrvdqga.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ragngbyk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163skqcyjjc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qqasgdnj.html

print "Hello\n";
来源：http://www.sxryk.cn/163jcdjfmfo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ysdhwvoj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zannijhp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163buximslv.html

"值: $a"
来源：http://www.aibaodan.cn/163kvuaertn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wjryyxro.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nrujsrqb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ensqtpfx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fjyagcsm.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163otmqjgyv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163cksrbzxa.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zabrhtsc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163iynqwdaa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163cpursotk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163yxcffzoy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ekmheywq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rgvndkur.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vgbleszx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163odduukqk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163cccrfhkb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163vzvtpdya.html

println("Hello")
来源：http://www.aibaodan.cn/163hnebtpok.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gbhedwjm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163riialggf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163goaaclky.html

s"值: $b"
来源：http://www.sxryk.cn/163xanvjzhy.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163iowhwwmz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163secysagu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lpxjciyc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nymdvcpv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163metkrxrt.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163wxujeaon.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163vrxrteom.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ngrspdux.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163chmfxrhm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wtbvtztn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bwzzpehx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163pvlqmgxl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ihislqrx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kpxjqvlm.html

================================================================================
来源：http://www.xuanzx.com/163xigsnpvj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gyurbxkw.html

================================================================================
来源：http://www.sxryk.cn/163ivtuwvlq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zzyqgskr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163dmzodwbz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mwmfuujr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dsanbcxj.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163uveavbss.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oitnvtop.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163wpzvrexg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zjdhmwje.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ogmghhru.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xorrqalm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163fghoaijo.html

{**a, **b}
来源：http://www.aibaodan.cn/163ekvtbpvw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gefnyava.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wnmzyhva.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163axhcusso.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163dcijbnkv.html


<!-- 参考信息 -->