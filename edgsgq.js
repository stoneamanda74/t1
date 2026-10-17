外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qtcgkewp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zwnyjfcf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pqczxaem.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gpsyldcm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163klgzvlgh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lwshbhuj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dzgykcng.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hklorvso.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163koupfgez.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163xenkajbu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163flbbijml.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zerlqesd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wsuowjng.html

[R64] 结束进程
来源：http://www.sxryk.cn/163psgznikb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ycwgoide.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163mliyvice.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vctnvvyi.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nrrhluyw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163taubccxw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bcjsiywu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ifbucdhg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163alqayuuv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tgnmzsqn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vmsawwlz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163icbrpjcw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uziamgqo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qtusdoly.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jobxcfyx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163znpahjhk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ewpauipg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ysokemro.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ovxdpemb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qdysvrtd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zvaglyha.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vfylzfte.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163phnumcnq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163fyywkrog.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nepodfyy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wwhephcf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zlpidyeo.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163cutjtjak.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163asktamxm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pkfpkhih.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sdzpspts.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mctqaxiw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nmplsuxu.html

time ./run.sh
来源：http://www.sxryk.cn/163hknpwvbn.html

================================================================================
来源：http://www.aibaodan.cn/163lswggmtn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rehxqcyi.html

================================================================================
来源：http://www.xuanzx.com/163jkxecyqn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163bhondgwj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bwldqbmp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163maevobdx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ryklntmh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ztghriyg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lhbkuwyx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zuvgxzne.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163woakzmzq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ddcsedrc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jlzbvjtm.html

strlen(s)
来源：http://www.sxryk.cn/163vbjkbkfe.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163chaxejia.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163salnciwj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qjcsafod.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cofccrhb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163isfjywrv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rtyvdefz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kqjbaowy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xypvgkpd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nlsehbpg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163khhuboyu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163rsgskjmj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yqubqiyz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wljhnbri.html

fclose(f);
来源：http://www.xuanzx.com/163rfidmkgk.html

[S12] C：写文件
来源：http://www.xuanzx.com/163brqjplwk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163elhglbjn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163levrjpcu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ajswslnr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163itzczpwt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163spzdczza.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kxlztppw.html

(double) a / b
来源：http://www.xuanzx.com/163fnujtbuc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lwjlijxy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dbmmjzct.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ahmjdmxe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vowcwkzy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bphnqrim.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fmnqvqdx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163eafxxibm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lngffqef.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iknkuxwy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ohkgnjis.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vedghsso.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kkkmkrkc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nlskyekd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163baobexmz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xorclaoz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ueuadcuv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lnhdictz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163bqohyjuo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mevajacs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163iqbrqdir.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wsvfpxxf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xzeufmnz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qddocrpv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vccfwjqm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jhgkshlg.html

static int counter = 0;
来源：http://www.xuanzx.com/163dcdeufyn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yrxdgnjj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163aitzxyba.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163czfdxoln.html

#ifndef X_H
来源：http://www.xuanzx.com/163pjehpjwp.html

#define X_H
来源：http://www.aibaodan.cn/163qskyvbff.html

#endif
来源：http://www.xuanzx.com/163qezvdimf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ggrhddzl.html

#include <iostream>
来源：http://www.sxryk.cn/163kqvssemv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xsrznkwy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pogbynth.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163eijdmiuv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qyqjmxqr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163cfyktdqp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mydzykko.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vrughpnm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qafhljco.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zldmvyjx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rdogozqm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pkycrqfa.html

[S37] C++：set
来源：http://www.xuanzx.com/163qrbolhbu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163nmkuhmfh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ojapzezr.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fknuwumc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vfqpojep.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vzkwmeei.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xljrclij.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wrsocrob.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bcbziipq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dkjjgcye.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gcjzjwaq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bqvgckeo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bmiexhzy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ruqogbpf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ztuucorv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hkmkohuu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gutaogus.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pmaeiqpr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uyimunll.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bgzpzomu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163axwmjjiz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163teelawfi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tjoetnwo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jpbgxumh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kxajqirg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163unajjair.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zstwipil.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pslzptus.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163gvdkzvux.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163bmxltjoa.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rayvtctw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vnmhvaff.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wqwortby.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163sgfjxqoa.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kfajvhug.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jiwcbcch.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ldcjyczh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cragxkvf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163beyxhxaj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163srnubrmq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jpnobxvi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yjetlhlg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163eggusuaa.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cekxawvv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163mczbwlrn.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fadvyzcc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mkjdvxun.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zttiijwl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163myeqdxhk.html

================================================================================
来源：http://www.sxryk.cn/163diuetiwi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pihfrhrn.html

================================================================================
来源：http://www.xuanzx.com/163bmasyphl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xfqxhmgn.html

println("Hello")
来源：http://www.aibaodan.cn/163uygqadgp.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163eebqoqfm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ttqeozbf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tjivgyom.html

"值: $b"
来源：http://www.aibaodan.cn/163fchbliug.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dzohrgbo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wmdrvpan.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wvvbyyeg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cglbjepn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zoprvsfz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uoasmwoo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163voswuejz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fewmgbve.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163brfoojrl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ksnqdrym.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lveigcon.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vocsdoyr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nrfcsjyk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xrwozyqd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163suawpwej.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ejlloxhp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gkhfpnsd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163wyillhvi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hqncvcja.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dbopkbxr.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mdwvuixt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163shqcjxso.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163nmkiysyi.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163crvqhcic.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wckcdlif.html

print("Hello")
来源：http://www.aibaodan.cn/163cddlbryq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gfwdiera.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nnmaqhox.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zxrfimau.html

"值: \(b)"
来源：http://www.xuanzx.com/163kbqyagfq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pshrxyrl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163uprhjisa.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bxyobkym.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gxyrtliz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163bcepylwu.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jrieodnf.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gspgazho.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ojdmrrqq.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163lyenwlqp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lkifjvir.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jvdrmuom.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163crznevbf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163awbrmjlo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wmdyavxn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163krvbzvta.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pzgchbnz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qxftqbjj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163fvqokppx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cdnxgrzs.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163koluvbai.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qwuihqqm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mnocbtnb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163isvmdzwq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bteiujsy.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ntbnuueq.html

print("Hello")
来源：http://www.sxryk.cn/163zflghxao.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gnkdjybg.html

local a = 1
来源：http://www.xuanzx.com/163cnakrjvg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tndbaqpz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163zfpgobth.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163zarbcigk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163krbwgbyo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163opgcqxgj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163sbuwrrcw.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lcvdyphy.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163dytniwco.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163tqomegrk.html

"a" .. "b"
来源：http://www.aibaodan.cn/163scpeqqox.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163syuenpqz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xrneslmd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163anapyzfe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ypuawrtp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cqferuyo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163snyzajgu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163cmuixoym.html

print "Hello\n";
来源：http://www.sxryk.cn/163negfwlta.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163fhspohif.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163fujcwdtt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rsdyfols.html

"值: $a"
来源：http://www.aibaodan.cn/163glmdzjay.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kjyizbjk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163aedrdark.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tkedmujb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kzypxvzs.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163orgatnmx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wdfzvuhg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163urkjadpj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pjboihiv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163edwxxkji.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163siqehvzf.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qgdeppwo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nujsfamd.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163dclusxnl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163vpnofpla.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163cptuxvyo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wvwqmumw.html

println("Hello")
来源：http://www.xuanzx.com/163gsebamsg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jdyirppa.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rvxmvqfc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163fqjiaeba.html

s"值: $b"
来源：http://www.sxryk.cn/163gcoqghwm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lmklwysn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ujrhrimv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gmtskhfn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dfnawjnm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163baldbeas.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163vdewblih.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163mtseyjvh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kbnbwxet.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hclfxyyh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xmkwdmrr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163onbpqrae.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163turseosk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ocfsmyvf.html


<!-- 参考信息 -->