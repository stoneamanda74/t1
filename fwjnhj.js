外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ksudmvoo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kokkeiot.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zzwnpwvu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163frqlhphw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jsinnlyt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pjvukfwa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ttukvnfd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wlgxqwjv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163bytgzxwk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vifhzdkx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qxmphbzx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vinkkvtn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kfdhwrtl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lccgdxnn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cvxuvdop.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gkkbdtnm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163grydwnvp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163guholmon.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ykdhpcim.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nhputxlw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lkizkvxp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wakaijnv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163votmtvzw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ukbqjpnp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163zgahvmkt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163xiflrjfc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163bqrvgvsw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bzmsdiyb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163imqqbdwk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ddrglnqi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kdummqdr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163updqawqx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dyxqvjil.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vpuovyvo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dxbcxjrb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bztrqdar.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zgontcjk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zbpfycna.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163miylsfpm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163fodezwyg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cdnkseqd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jbiaeaef.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dybhzfgt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rrpsfwls.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ywkuluab.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ejsdkqtr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qvqrbkyw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163aefetoqb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163etdvlizu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hlrlcgfw.html

time ./run.sh
来源：http://www.sxryk.cn/163umvzuury.html

================================================================================
来源：http://www.xuanzx.com/163qnfgsupd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kginmgsi.html

================================================================================
来源：http://www.xuanzx.com/163ngldaavn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163seafcpsq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tawzphhn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ewtsjirq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nkfpxpzx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163rzgtqwqx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wmjzfwbc.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pcqqwfwa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bjzqvdem.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163krlbxtwr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rbhgtlzc.html

strlen(s)
来源：http://www.aibaodan.cn/163teduykiq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vintfqck.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nioesrlf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zpabetvr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163tkffhzkm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vxemojaw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cygqprhk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mmhhgrjn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qnzbpuzv.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pwpucpoj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163aqwndcho.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pesbhczi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163buzrjwmk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tpeovitl.html

fclose(f);
来源：http://www.xuanzx.com/163opwwyqhs.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rkcpagrx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163uhywzjjs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pfapjdkn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163usmmlmno.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ipgntiog.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wmpgtsgc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163tlvzalon.html

(double) a / b
来源：http://www.sxryk.cn/163nanjurjn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pnooyhaf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163craqfene.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163komzpflo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tvbcjbau.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ulodmimb.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yhxnsxdk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163edmgcvmg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fiueclms.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163suqumwdu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uxuovbjj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ufslfroh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163crfniefe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jfjdutzy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qwxzknrs.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wcdsacqr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163oywuilmv.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ihebgtdv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rmfppxvq.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163kyuezgla.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163zcgunmqc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163nwxgzuhs.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nxzoajyz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163lywcnxtm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tvoftmhm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tcgpnehs.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vflrgtih.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mrncmorl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kdlrjfiu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163shgvswoa.html

#ifndef X_H
来源：http://www.xuanzx.com/163tyspifyg.html

#define X_H
来源：http://www.aibaodan.cn/163ohffrkps.html

#endif
来源：http://www.sxryk.cn/163bvxdssgw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163phnhbpjt.html

#include <iostream>
来源：http://www.xuanzx.com/163ymycshyc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163flwdnvdi.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vrzpiftb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gwexqzdl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ldivaise.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rchesell.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163iwowoxfp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bdvtsdqv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163urjobdqg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jotztxtx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yvtibnhv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kluhumug.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ojqvkmgk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wocsybsu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lvgndaou.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163noouyudz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xwduxdta.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bktrtqdv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163abfosjwr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163czytevfa.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ljpekaxc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xuulhsao.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yexodrus.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tsdpyrbi.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zsueyijc.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mnsfcnlz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mwmqyhui.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hhypbzwi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163pidjfvod.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yuzmkhff.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163sejwfnjb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mdjmqlef.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wfmddeul.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wqfiqejw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hpmouwjj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hxrlhrtp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163uznibuwr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xnkmrxyh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163msrxvpdl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mgkvvmne.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qghkemfc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163yunavlyf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fjngvadq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wpbjprew.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zkcwhnkz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163glmowods.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vzazessl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163eakdnxgj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uzxgdgxg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163llitkoca.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yjvnjvyb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nkivsoqc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yabkpxaf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163icwfywon.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xjetqpyf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nwmytvlb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ntwzrrez.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vpvfbuit.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163oirihuvo.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gprachrn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163yfbbgdrp.html

================================================================================
来源：http://www.aibaodan.cn/163votruqpr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pbuksequ.html

================================================================================
来源：http://www.aibaodan.cn/163ehqfadto.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jsxgpxor.html

println("Hello")
来源：http://www.sxryk.cn/163fvfyirec.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163cpdyhbsa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zmiwtbrl.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ilnmsjkg.html

"值: $b"
来源：http://www.xuanzx.com/163pmqrzlqe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ybqxstjq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ycyekznc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gkeewlnf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kmrgkupu.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163irfizfdw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163iqamtgbw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ndipyiys.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163syevjivl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zqcgnlcv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jjrefmli.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gphfrsog.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nlgaghyu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163crojsdie.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wglqvzxm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cqetfhii.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ajkhikof.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163pkagmihb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163czmuxgio.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zywphmmn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163anpfhbcq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pzjormzh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tcwvawia.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163iuslhkqt.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nvjwkmlz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gegvqahq.html

print("Hello")
来源：http://www.aibaodan.cn/163eqkfxeva.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bcjmkdck.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yjcogqho.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fvzvqyxt.html

"值: \(b)"
来源：http://www.sxryk.cn/163odwrejwi.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dbclcjry.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163cwvnrihy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163azyvcumi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163atlvcvqw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jbigctli.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dbnabttu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dpsoaeax.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xmckzuzh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rrpwjgji.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zltauqto.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bevapwfj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163tntgmhya.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163haahtcbj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jtdvzcvl.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zoivppaq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rsfyhfex.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jumbvjsv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qetizwmt.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163gdrfdixd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163riikwwpm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163edjmswbi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wwfpffjd.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ywnqfmqy.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163uvqcotrx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163femjfich.html

print("Hello")
来源：http://www.aibaodan.cn/163yvzzzoag.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rbzaxkjn.html

local a = 1
来源：http://www.aibaodan.cn/163shumbjju.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163omgnshia.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bcuholok.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fpxabtvx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kaznswds.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163yxdbqljd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qmicogzj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163krhqbybx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nqbashxi.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dhvadqgr.html

"a" .. "b"
来源：http://www.xuanzx.com/163tpqwclgo.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163crqibxch.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jmlhibyc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163bvmnbfbq.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vmmmwprl.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hxpusazm.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163htpxamxn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gkhhyaqp.html

print "Hello\n";
来源：http://www.sxryk.cn/163mciidpjo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lekijsmm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tyqzsvqq.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163diympwmo.html

"值: $a"
来源：http://www.aibaodan.cn/163ptcmavim.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mqannkuz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163twpozxdy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163skifuchz.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ldqiznzk.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xnyhjdbx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mynxhzlb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ricncoya.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163eakehcgf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163oanydmgi.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ywwumeyl.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ickaxtqi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ukuhwghx.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hmpyqhgp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fuefpxsb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ntxgbqgz.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zcjdezjt.html

println("Hello")
来源：http://www.xuanzx.com/163esgtdksf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mkvspgec.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qiqrajgp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qhllfwkt.html

s"值: $b"
来源：http://www.sxryk.cn/163voqecstx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ophlbzke.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xcmubwvc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tyzenall.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163szvserut.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kxioktiq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163vfxrfpcj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dnyyoupz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163fvpvpqnx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pzhjnuvz.html


<!-- 参考信息 -->