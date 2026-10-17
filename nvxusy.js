外链999!wailian999！

df -h;  du -sh *
来源：http://www.aibaodan.cn/163fshrzzkt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163eodkrgyz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ndassxmn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163miokxqsd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ypdtssyb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ifekunvx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zlxucqcs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163raifinat.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bmwuwxne.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yyedjrqw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gsqwlgri.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vgrbdeih.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xroxyeql.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wjcdoaoo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163cbwwagyh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qgxweckl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163alnsynwd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163laswnbiu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163enbvyjiq.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163edwlglxs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ryshroct.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163dvkemeuo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vidjcnpf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ywhzgrnq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rmmaoowz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163evyjmjkk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rkafnnql.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dlpjrssj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bjpcohgk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163orrthaku.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ussbnewx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hzirtvuq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wewpbtrv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163jkvupzhh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cgkzcwad.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cippnzct.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jdfqohkb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bhlmourd.html

time ./run.sh
来源：http://www.sxryk.cn/163pqvakkdh.html

================================================================================
来源：http://www.aibaodan.cn/163xqkmtznv.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163okeoztcw.html

================================================================================
来源：http://www.xuanzx.com/163xtpddrdc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163sishlmpd.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jpwlnlhu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zmjgcaoq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zumpmizm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lxnevrlc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fycwlzzz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gkwepeof.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iyjirflz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hejbmopf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163svlzhoyu.html

strlen(s)
来源：http://www.xuanzx.com/163udlvcmbf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cguiubyi.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gjhyloha.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nztxbsmt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vcjmkbsj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xolbxtij.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163suanvuee.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mpsjflka.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fnujyjgz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vkhtexnq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qxsslsti.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cngejgkm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nchggyuw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kcnyzsvg.html

fclose(f);
来源：http://www.sxryk.cn/163yhwijivd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dmpnyjbn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163plsbkeqe.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zyirtfdw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xrzuzkaa.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hswvcuoj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163enmahoig.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wiielgbb.html

(double) a / b
来源：http://www.aibaodan.cn/163aickvtil.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pwnbtcnc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163owuutfzp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ohquxvci.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fugquajd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163gukenmpc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vuhoxduv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hcgdoolj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jiwnbnkm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vgfajxxy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nuqxxhap.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hycgqyxu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ktddwizk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lqvjfzkf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qvbaiuxl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rtdezpnb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ibkjqtpk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qxnwxebu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ijhvkihs.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hbhnhjqq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ajsuybwa.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lpymmxwy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nslmldyu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yzukbvpl.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uxboszup.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hgcrbqmp.html

static int counter = 0;
来源：http://www.xuanzx.com/163gtdxcldx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nfrxkwnt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dvucvumo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xmdndkgg.html

#ifndef X_H
来源：http://www.sxryk.cn/163ivqvjhnq.html

#define X_H
来源：http://www.sxryk.cn/163nbrgxvsn.html

#endif
来源：http://www.sxryk.cn/163iycnenta.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xozrphjb.html

#include <iostream>
来源：http://www.aibaodan.cn/163qjokqlmc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rkigvyyc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yrqscehx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lksdtuiz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163eymohxfx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hjwgrphs.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vtkkyfat.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vsqcnbci.html

[S35] C++：map
来源：http://www.aibaodan.cn/163myczmoah.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163guldbbdw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163inuxrvho.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kzbffskm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mhczfnvk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163pwmtumhl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bwbeotvp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jecgrrpi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xlsrxbtj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pfmytlsr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hbahcedw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163iosxndrd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ahwewtht.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ewgvuqme.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uwqnvyzu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kzgktzpa.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dqkdyrjj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jizcdhcy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iecevtpp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fettwmrw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dsfoznea.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163inimflyr.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dnvowxkw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163pkhpmujx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163otjkgdol.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fvgrirgx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yvqxwmhe.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163emqwpkwa.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rwwautek.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vtksmngr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163aegcevns.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pavnpwzq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ffvcdwiu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kowzowga.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xcwiribo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163sucrxnsx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bgksqmtq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163czslzhwj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mdpvkwvx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163faoexwwm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163anhnaqlh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163asbnfcde.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sdnbjliq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tmjuheuy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163aotnzyzk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yqzdmaci.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163itvxfxsr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mkqljhxz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gjfrhkgd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163evyuywla.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163tyupnpoh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uheoolnb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zrcmmgmv.html

================================================================================
来源：http://www.sxryk.cn/163jswzvvzb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gskulgoz.html

================================================================================
来源：http://www.xuanzx.com/163stsrjsoh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kmlddeam.html

println("Hello")
来源：http://www.sxryk.cn/163ixkuhqcc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hndjrpnt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vlijklsg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hqsyexae.html

"值: $b"
来源：http://www.sxryk.cn/163scvcgzns.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ojovssia.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zmvydsjh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163euwpatyd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rakagxmd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163srmnuoce.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163slrflgnw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163uemcgbqo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163miireltl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zudvryug.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163diklklvh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bswltyls.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ggtinggb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xtiwedgq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ritjykyd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pbkvnuoa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xyxjjbxl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163orxypmtg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163itntgijh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163igljvlge.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wcjfradu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lkzaapoy.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163eupsjfsm.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163erlsfrwn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nyxhdsjz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kfagulnj.html

print("Hello")
来源：http://www.aibaodan.cn/163qnlkxaaq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ixpbtksi.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bcgfqnhp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163oizrihqm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cqvajjaq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xtkakrxe.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163hzilzbhi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dcznxjzc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wxjayabb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cqehwkfh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163hpsssbas.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163alyvaqbo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163byuhdngw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vhciwcyi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kqhdvjhe.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wekleyhr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163fkppcjxw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wnznvsct.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163serarkbv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vgcnvgmv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hrmbmnne.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163znzmnkqi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163tmkzbyqm.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xzymdndf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lfbhodek.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163micmrhlb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ayopeycm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163lrsksouf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vwxukmre.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vazvsrvw.html

print("Hello")
来源：http://www.sxryk.cn/163txxdusfu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eqsaixft.html

local a = 1
来源：http://www.sxryk.cn/163klzxuxbc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zaptdqzv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jcbzgpyo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ytlcidho.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fykoqbgu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qizveiyj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xvpbjrzr.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163skytmozb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163eohyhhln.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163itzloigf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163gaovexek.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163srvmtrfy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lmomydnd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163dqmcgdcd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163siowxghx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ftcdydyi.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kydrrzoq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dxyluxux.html

print "Hello\n";
来源：http://www.aibaodan.cn/163iflykhha.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163scsgogca.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163acujdgmd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163lgvwatjy.html

"值: $a"
来源：http://www.xuanzx.com/163fxocahab.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163poezjbva.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163cqbyxrfm.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jmsidjkb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163fwqfvuax.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bnpipazg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163jlhdjdgq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163pxplsbna.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163pqftyxvv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163erxrcofk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hkmhimgz.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hbwytkkj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163prklujls.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ijbgvlkp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163beruxcqc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ugrlcfsm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wakkwqir.html

println("Hello")
来源：http://www.sxryk.cn/163icbgohfx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hokjsdfx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mpykcned.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jgmxghke.html

s"值: $b"
来源：http://www.sxryk.cn/163qkpudnmp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163znmncbiy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163broucwya.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163pbigqjbu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bnahffzh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163eqytqshk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163wtlxdvvi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163avgqdgwu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fmlyflrs.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dsbkcxvj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lmxiwgbs.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163koklyjpt.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lckdgehk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163usabmfak.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163uyabsscv.html

================================================================================
来源：http://www.xuanzx.com/163tzfwlsxa.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rxfsemkh.html

================================================================================
来源：http://www.sxryk.cn/163vdxsvgym.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163oyqnohji.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nkejxywz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163mmjooeyd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163eanlvrgw.html


<!-- 参考信息 -->