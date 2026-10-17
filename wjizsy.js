外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ybdrfcyk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kvciqhmj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cltacnae.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tfekiozh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jhjlfvgm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xeflmics.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163aacvlrye.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163egavgeja.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163gobzejof.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wekypvpg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163eyfqfkih.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163vajxqkwm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tzofqrdt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cmzsiykx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fdzjcnoo.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nldotvbh.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163piteqdlk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ywmzmghd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vuxqyykj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ftokpdnz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fjeqvkpz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pgzmgwsg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jrrtralu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163znucwzro.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ybtbowaa.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sgovorll.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lqzjgxfy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163atfycegv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rbpantzk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zisfueoy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163lhdrtkbf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nuczgiof.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qrubchme.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dugpbude.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ojmnnofv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163yjyeesfb.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pfwecnkd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163aqnrcotf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kbzgzfyj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dtphhlar.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yiknbktc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ajsbadkz.html

time ./run.sh
来源：http://www.aibaodan.cn/163vlgulzce.html

================================================================================
来源：http://www.aibaodan.cn/163knkrqktg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kpslhnbp.html

================================================================================
来源：http://www.xuanzx.com/163onbglpvw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163eolclbic.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bbsjckkh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163czoxyriy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qsffgmlp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163xbpydfdj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tpulblsb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vmjpwqdf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gwjojgrh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163trekklai.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163jzncrupz.html

strlen(s)
来源：http://www.aibaodan.cn/163bylajism.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163zwqhkgip.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163sssdudcm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hbuinwmy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gkwfbyqx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ylbahwtd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zlgdnllc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oinuxthi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163audfxthq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163carudday.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wgdodych.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fbkbkizq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ppgovczv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xusvssti.html

fclose(f);
来源：http://www.sxryk.cn/163iwogxkft.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zghyxngy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163pzmouibu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lyplomls.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wgdcftes.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wbwwijxh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cjefnhma.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yequtajf.html

(double) a / b
来源：http://www.sxryk.cn/163vetvbpen.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163duvzbtib.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xarfvoqf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ymqzypts.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wnoneoff.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163exuncrbe.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ztwpslfc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fekrznkj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hgtyqcgf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ambogetc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dezqrjol.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jiqwehkk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jcaluorq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jzgiggqh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ndvzoggi.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ewpnhjcn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163npkwsweq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ipwohcur.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vxjygjei.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rcyxcitx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163myddzbug.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wikuxgqx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163eykgctpv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oxygajjz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hkhuocct.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163iudvtlvg.html

static int counter = 0;
来源：http://www.sxryk.cn/163acmdutbn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163buauqcdi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rkxfulop.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fbuxhwuk.html

#ifndef X_H
来源：http://www.xuanzx.com/163mglilozh.html

#define X_H
来源：http://www.xuanzx.com/163zhogwfns.html

#endif
来源：http://www.sxryk.cn/163gufmzslw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wzyvdvju.html

#include <iostream>
来源：http://www.xuanzx.com/163zrearepw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yxcncxlo.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nefsqsfl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wegomvjp.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163svkvrxbn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ncnqifjq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163cjvxvblo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xeymbbog.html

[S35] C++：map
来源：http://www.sxryk.cn/163aljvbqvj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ewufvnyb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163cmgslavt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yvqjluzj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wehcimup.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163iczlxhvw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163oekxtaso.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163bpglekov.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qkipbnsq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163uetwbxwe.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163mrvbixue.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dlhtlozz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kvwwgiqg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sdbivokv.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sxluswry.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163eywzdhvr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wprdndnd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163goupxxxi.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jyckmwkv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zmfibprt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mcxhwspj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cyiaiicr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163eiihwjii.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fcwbrxnv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wxiuaoyr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163aymphxnw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163srxfpjnd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dxvqdrpc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163meuuxnir.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tlegtpjh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vvuslwfd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wcraczpl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rjsjwalw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wskwnznp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nlhafkmq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xqjhtfxl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mtrikgmm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xwirqzqs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163miocxhkg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163msdiqjvl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163oerglgrd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wuqlsthx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ihrdonhm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hmyiuyho.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ahuschqd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zvxvzrbg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163egiaudmn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163yvswfjbr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ygitznyq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zakqzrte.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ywyqbbxp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pskqqglx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163cfemohkn.html

================================================================================
来源：http://www.aibaodan.cn/163wlsjeauy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mcazzllr.html

================================================================================
来源：http://www.sxryk.cn/163cugxdgxp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bwkagibe.html

println("Hello")
来源：http://www.aibaodan.cn/163kqymuvpb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163twlvekie.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cmuhzchd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163gahlgpaa.html

"值: $b"
来源：http://www.aibaodan.cn/163tkmdscus.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hheqyrtg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nbsddljo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pqqjkqkc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nodtujoa.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cwfknzpw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eeuqgvxq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pzkakkwp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163onvslpom.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ctiacwse.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163nxycebwq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xusucgli.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163leuwzzot.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ubrhaatd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163aghkijfu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163kmzagixl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163rbjgmsai.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hfcbyrur.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163mkxiqgoj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ppcasspg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nytdmlfm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nhfcyocj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yeazhysy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163amlmamrd.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jsfctbhd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wmyfyfbf.html

print("Hello")
来源：http://www.xuanzx.com/163xbrqephx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nhsbslpm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hpggmvic.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rjwkazfb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163lxdqxpos.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oipvujbp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163usuditqk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pvqmfohg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fjdpiwen.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gcdbbqvi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hfnslklc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qpcbhvmw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fyhwmger.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163janoelbu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163vgwswkap.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163nhkkxyaz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pxshacia.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163htlzdiwb.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wrkgnmrr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163veocetqy.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ouppjkwq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163sdcbqhbs.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163phebenbf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fritytas.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163bmgoiict.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wihskrxc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163weinkdhe.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wfflidxz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qqtiwisn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hadonlxf.html

print("Hello")
来源：http://www.aibaodan.cn/163neisiqvi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163cxwwpovf.html

local a = 1
来源：http://www.xuanzx.com/163ntgkcmmy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xgwvluoi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ldvntrlh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yziyemig.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dazegxbo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qtdhbseq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163pmfpfmgs.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163oxhkwxjo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qrbizyvi.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hkudhgqw.html

"a" .. "b"
来源：http://www.sxryk.cn/163dnzpqbmr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ecowupnv.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lvrqyhez.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pfhtyule.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dxrvuvhk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163awaflfue.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163huompmnh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mmtwqqgk.html

print "Hello\n";
来源：http://www.sxryk.cn/163kuchufkh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uyevnfka.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163sutstkke.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ymhrdwxz.html

"值: $a"
来源：http://www.xuanzx.com/163sbmceflo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kwdopvwu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gxgjxtcy.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163afuuparn.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163gopfofrl.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163spfbhnci.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lntluqnf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mygqgbcx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163cwqogjvw.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ohwfnhot.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163lezikzys.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bvydyyse.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bnrszjak.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163yzmuvcxa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ulincrli.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fnyohxvp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163vmqtxdmy.html

println("Hello")
来源：http://www.xuanzx.com/163hvbsltmd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ljveoumo.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ryqtwcta.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rzmaplbn.html

s"值: $b"
来源：http://www.aibaodan.cn/163aytvscdf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163oyyrpeza.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163btolyvlt.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163uioyunhf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163sjwxxikm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ppdmwrkp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bqqztopo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vewmauua.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ebreabfu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163hnqdripr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ljpsaozb.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163uoptqdgo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pzlvpuzi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ikaurwab.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163frdrziig.html

================================================================================
来源：http://www.aibaodan.cn/163ancveibb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uybnslgy.html

================================================================================
来源：http://www.sxryk.cn/163evxptyoz.html


<!-- 参考信息 -->