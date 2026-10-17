外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rncoltwh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zesqyhwa.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163teswrhxk.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fuhcfmgf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163dvmuopaa.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163aqkqybqr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xfekfwlp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163nzaleywb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nrzvjkvw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163lngvbirp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163aeliuamc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163pneppira.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ucjhxsah.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vidtdgrb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qupzzfqc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ayiuvkft.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gtwdkkdr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pxgxlczb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wywovlbh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ukiyoroq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wvajtcbs.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qxgcnpdr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mwgucohq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163cgnfsrpe.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bvqzauev.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cttlrxod.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kjzmkwqr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163guhduglv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163fcnlqjfn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xbtmbnye.html

time ./run.sh
来源：http://www.sxryk.cn/163myqrsfem.html

================================================================================
来源：http://www.aibaodan.cn/163mrnsqkyp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163gkamvoun.html

================================================================================
来源：http://www.xuanzx.com/163pohmipnh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xlzegfcm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nvvravac.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dffatgyx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163evbypdxk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jzvdftsa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163lodmvdam.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vpbefcbc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tlrtvgqw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ibuwmkuo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163miymfvpo.html

strlen(s)
来源：http://www.xuanzx.com/163fqnbiyoi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lnucrebx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gckspjjh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163lxztbloe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163louckefy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163awwdgyek.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163liwttmaj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163slalihfp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wcqutgml.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ltiulahf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163elianwte.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163apeexsiv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sjehmzcl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jmmbmtep.html

fclose(f);
来源：http://www.xuanzx.com/163uuvlrted.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qrrspkpd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ippelwhf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vkdoytds.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ozvviavg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hdblnuwn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qmdintwu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kfkmcqsn.html

(double) a / b
来源：http://www.aibaodan.cn/163ytjinpni.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gzvsooas.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163muxqytcx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163svpwyiyk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qjejmrso.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ehfwsjls.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dziuqcxk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iviiikoe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163proqzbok.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rcrerpzz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163llytyssx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hwmaxpig.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163getohrcw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qbpffepu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lgmhyfuq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hilcmxhz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tyundais.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163azfjshvh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vpgudblg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ifpsxseo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jsnsohza.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wfyqqbyx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163tdxwpulc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ahtrycee.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rqzvorrg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163thbjcykm.html

static int counter = 0;
来源：http://www.xuanzx.com/163keaphmpg.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gdmlcieu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hovznbgl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hehhceaf.html

#ifndef X_H
来源：http://www.sxryk.cn/163vvtuqwim.html

#define X_H
来源：http://www.sxryk.cn/163kmpszthu.html

#endif
来源：http://www.xuanzx.com/163chijxzuy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163huibcfgb.html

#include <iostream>
来源：http://www.sxryk.cn/163eclkarnx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dwwkpoju.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xymrjroz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lcifncfb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cxchohcg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ckgzrsqd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ykrbgibo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163okwagcld.html

[S35] C++：map
来源：http://www.aibaodan.cn/163obthbvik.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vwwdmpwg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nxlpflca.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kiqxhtdd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ocdgnmsa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163swvpyavm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rfrgsmdv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xvlpsgnw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163emunyjmm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fdyqonuu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163umyasvez.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nkwfhict.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rnwyeqwr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nchnfsdq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jslhxsrz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gjvcugqn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ddpghegf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xditvfly.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ncwizdew.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sxemshdw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ybqjyyvs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mfvledqm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163pbufyhdo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163btmrmfwu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gsojirli.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tfjqsqqf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gymnyrnt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ocbklynh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xumxrfmh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dkvulyei.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qzegzumm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fdmgzxjn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zkfasvdr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163unfzbalo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qagextgi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163exfvtuel.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zdqadgsx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163eszxobiw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163aapyuzxh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pnokwgwn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dmhuukgx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zspodyfe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qhbanupg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163irlvqfdn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mdvxlapd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163folvdljc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163htejsdgn.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mqjuhnit.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gmoqpske.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mvpqzsuu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sfmxxlmd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xmyixmwu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cnzsdhsl.html

================================================================================
来源：http://www.aibaodan.cn/163rmfnnqiq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zciqzdwf.html

================================================================================
来源：http://www.sxryk.cn/163uvlybpdd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163firxemat.html

println("Hello")
来源：http://www.xuanzx.com/163dcgrdmyx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163gkpebndr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ifdzbswb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163duwbzycr.html

"值: $b"
来源：http://www.sxryk.cn/163yrugyban.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163biovwwmj.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mrqfzsut.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xzxqxemy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163vjixgzih.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163muthxntc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hesxkqxx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wusyqxap.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163iarxlicd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lelkengz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zenfeoio.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kpiayhpa.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cuanprzu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rfihspaf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163votmrpcz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zmqsdmpj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ynuzgzcx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qmqrzlks.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163rghlfuja.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163cmsyrdmo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163cttozwil.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163sxlfbpar.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qqocpvgg.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163emojbmje.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kerbdsrj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163pilpkqdh.html

print("Hello")
来源：http://www.aibaodan.cn/163qmurfsjv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fipahppp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163wayialcw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163uewkoovb.html

"值: \(b)"
来源：http://www.sxryk.cn/163qgfskzff.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xhowbonx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zlvlftps.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tfrstzfb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zdpzfebe.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ezlbkutu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163azzbvgbg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163poaqemdd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qrzzclro.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163csavefek.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lunziydo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163qehxmdle.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rnarekvh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163iwxpkidd.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163bxjouspp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tzbelqqi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gcvkbcwf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jmzriouu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163eymgmhul.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163trgmukcx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ktefbetr.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mzuokbhf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pdxpehua.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rbqlqgrk.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gbzlveye.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163palrtglh.html

print("Hello")
来源：http://www.sxryk.cn/163hqvgegxs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163oacbpnoi.html

local a = 1
来源：http://www.xuanzx.com/163rfgovpqd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163sgslkmlh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ixsxofki.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163alptcmxo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nuvetqqi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lyasljmv.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163osydyfyg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163osirokdz.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163nsywaddo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mcsditig.html

"a" .. "b"
来源：http://www.aibaodan.cn/163zlrygruq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163saaokvwk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gjwyypiw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gxjtcqpe.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163biilgejs.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lnleppxa.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pdspeqxc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163nupvsrqd.html

print "Hello\n";
来源：http://www.sxryk.cn/163rmjjypgn.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163cjszhnko.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163lnhktqxz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xlwdjhpj.html

"值: $a"
来源：http://www.xuanzx.com/163fuoximwb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jknqwpnz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163rtytcppn.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tkprhuhl.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pitxlzis.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163btmrgzbu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163lvgzxuwk.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nmrlivqp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jghqkdbw.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vripobdv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163zfibvvel.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163akksibvu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lryyhsfp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163uimhbuyx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163htvqnmbg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163flbfjaav.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ixmgbanb.html

println("Hello")
来源：http://www.sxryk.cn/163vjocgbce.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nlzggsgt.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zsjuulcx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cynynkfj.html

s"值: $b"
来源：http://www.aibaodan.cn/163wyejsmwu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163irhhexwu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ogisboxc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163utjyyuii.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163hhxnpdxj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163pjdjugiq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163degtghdb.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xbntupng.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163dkpbdjtv.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163awfacbhg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fpeeqlul.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vteiffrv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ccxyzvzc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dufmnejz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mcalslfq.html

================================================================================
来源：http://www.xuanzx.com/163kjnxsgir.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jlugsxaz.html

================================================================================
来源：http://www.sxryk.cn/163yjkkrxvy.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cnjodkic.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163whmrfbtn.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hvuxczef.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163cblyhhjg.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zxdzofbn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163dxgfhmhh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163stavkvpo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tcmadzoa.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pulctirj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163asxxxscl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xlzgtnlq.html

{**a, **b}
来源：http://www.xuanzx.com/163uuffudht.html


<!-- 参考信息 -->