外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qtlzrbbf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mlqmrylw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tgsutmbb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gnaxdkqi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jkdypdny.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xjgohueu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163epzeqiom.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xsbuanrm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ivgplcil.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wlrujjym.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ivtstoyj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qqjgplni.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vpuuobij.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163nmlrpyag.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uuhzoziz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163jukwxcxs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gvdplvjr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163yqtoqqfb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ojctxjqj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163njyoiuzf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163dgmwtxdw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jjomiuih.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163spggrjly.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gpofwinv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163kbwqqvac.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wrzrmygb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163phxmxdtw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pspqqcny.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bnkkwxgw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163masywpon.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wzztpqxx.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gxjmbkad.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kqqimdid.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hdjqbjak.html

time ./run.sh
来源：http://www.aibaodan.cn/163ltvsphxs.html

================================================================================
来源：http://www.xuanzx.com/163wroceirg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163oipyhmvu.html

================================================================================
来源：http://www.xuanzx.com/163nclhsglz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163exhxyoik.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163amplyojt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163sdysxfpa.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163aeifutll.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tcprljed.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ofsjpaxs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163liptseic.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wblxtxhl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qskwqhes.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163uravegza.html

strlen(s)
来源：http://www.xuanzx.com/163alamtjke.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163kissbrqa.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uvxcudsn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163cikxbeiq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wpaljind.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163btwshewv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xmmlzxvk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qrjwmqfx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fcahdjdh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wgzyhprq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wbzhkoat.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163qvielcyv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163odwrnbup.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rqvyiaqa.html

fclose(f);
来源：http://www.xuanzx.com/163oztbiyrh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uwrbzovz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iezdslva.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163evlrhiou.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163guxslohd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ktsnhqik.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ctrcqgui.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163sbwkzsik.html

(double) a / b
来源：http://www.aibaodan.cn/163kfzltgpt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bscdtsys.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rtbgfkkh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163shriuaau.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qgrouqxs.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vcrblaig.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qlzavdys.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163tdvkbepa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163prvolyim.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gmpgwjoc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qhmydnnh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mvcypzhp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163calzmrkr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qnvovtzv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ytoarxzz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nnhlrrsf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163reeyfyig.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163btfsrhpz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163eoejgsqf.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ffowmdhp.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rcgmqasc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dyyznovf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zicmartf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163focjaibo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gontekru.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163uwcqgnsx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163gowccvto.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hxlehznn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ccppizhq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ofubvtww.html

#ifndef X_H
来源：http://www.xuanzx.com/163vmfxwgcc.html

#define X_H
来源：http://www.aibaodan.cn/163tockrtci.html

#endif
来源：http://www.aibaodan.cn/163qshevojw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nvfxlezx.html

#include <iostream>
来源：http://www.sxryk.cn/163cjmusihr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bjsjthhl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nvxbusge.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xsazissb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163crldpyyt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163avncxzpm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mzyjjxrm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hwxujfqj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dpqpnhpt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hliwnxit.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163swbpqvix.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jfkfwezj.html

[S37] C++：set
来源：http://www.xuanzx.com/163twoojstp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zhpkafxh.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163nxhqlzws.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qjtdasaw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jetkqmcg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yvhotgtb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pvtjzyvi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jmgtgegf.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163huhpdwkt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wtwxprny.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163iantyekf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yyjjofcb.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vnxqqbki.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163iudnmkhi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zpcixfdp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bjhdymrv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hkgkddka.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163amcsgddj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dgkowodr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163patyzltx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vesorbjf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163guqavcdm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163rojfdzjv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nlwgmaax.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163prrmceno.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163stymtsvo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lcfohdzd.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ldikidsd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vdehcukx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hdvkvtrp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zjpayiyb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163eocooicj.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mpuwgztx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qonwowxy.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163nanguigs.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kgfeldpj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ecztipqa.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jyqkbaot.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iqcbpoxp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rpmyxjsc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ztfiufcy.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rmzyxtmw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xrmjatvu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mjxhoisi.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163nyzmhqnh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wtfejjco.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gjehpwxj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163glhbzynt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kfocttzn.html

================================================================================
来源：http://www.sxryk.cn/163qmsryzxw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nekjemee.html

================================================================================
来源：http://www.sxryk.cn/163mvydnxly.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yrvcisbj.html

println("Hello")
来源：http://www.aibaodan.cn/163ehnqhdty.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hvfwwmiy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ppilkncm.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tkprlhkd.html

"值: $b"
来源：http://www.sxryk.cn/163gyryjlkd.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xpmgeoit.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ftwvqytt.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vsebwaqs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fykabaqz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ctgjerrq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hjgosbkm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gwommzxo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163csitvjmc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163arqubfes.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163equpnwyp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163agzhlldw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163esrknvsi.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cljfaevb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ebgmbznx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bpapqxnd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pypvmzmb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nbbngawr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vrbjlhvf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163hbstxoaj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163oamtdlqs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163icckargc.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vhqzkxlc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mmxlcioq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wdtwgjis.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163pbxivmqx.html

print("Hello")
来源：http://www.sxryk.cn/163xxkiqslp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qmriucqf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ckjhmbao.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163upqwlipz.html

"值: \(b)"
来源：http://www.xuanzx.com/163mlgsdtdf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163mlkvbanj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lmzaseee.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rqvhccjg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163holynmdp.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dhmwssnd.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ijopmbwq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lahqmtzf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mgkktwur.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qifspatd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bbhjfbbm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jwpkrwbx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hjrdhtrl.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wzaymgwq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163trxibouk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qiuamnve.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163madgbicf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xcvzvmld.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163tkvmbpgo.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ghnzchhg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163onvooflw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ufptkdob.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ulhfxrzo.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rjqabwnj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wtjehmsh.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163egpndnlq.html

print("Hello")
来源：http://www.xuanzx.com/163khtqhysl.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163xqecouuo.html

local a = 1
来源：http://www.sxryk.cn/163pzxskqkw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163kghloukn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xbmjkiku.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jlyqszeg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163yolasnis.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163urydfqrf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xvxkwrns.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ohribmxs.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163puczacwc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gpvoojsj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163fwxkerpa.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ezzredpv.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yowtojvg.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sxrgpaoz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163uwbctqoa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163tkovxfxh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ijqvithi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163vktnkmnm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nljnyhgo.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163acruyclq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rvvcqvyb.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mowdiuzh.html

"值: $a"
来源：http://www.xuanzx.com/163mldzbtdx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163bowcibbd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163uupepbam.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cscxwmev.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163qwzieemc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nmrpvuss.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163euewltgn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163znafvjla.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163uvijgpjw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iueagmzk.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163qflpyrda.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bfwdtcrq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zfswmilx.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ylkjmclj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ehbqfunh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163znpkcvkv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bdgvlfsw.html

println("Hello")
来源：http://www.xuanzx.com/163auhoqlsa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163nvgrojry.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hbvloaev.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163jhabblet.html

s"值: $b"
来源：http://www.xuanzx.com/163woyhtwfl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163hrenwdub.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lztsfead.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163takvcqxy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lqqczsit.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vsvdauwt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163advnhzlv.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gqpudtzo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163dclrsazh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163bvkruzox.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163zqkwxlrt.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mirybxsu.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163leefuzev.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hhqsdfml.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xzuoycxl.html

================================================================================
来源：http://www.aibaodan.cn/163kodznibl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163syusqxqy.html

================================================================================
来源：http://www.xuanzx.com/163vtmuxhqa.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163vpujcllc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163kfdxvtrk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163tountonb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163uevubodi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163yjiamerv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163praepsxu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163rsrhuimr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xgtljxuh.html


<!-- 参考信息 -->