外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163irwqxxlk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rdnclayl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fhlltcmb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vwakwibx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ktlvutxi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163uoyroxel.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nsowfcan.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rvziirmg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cldefcpd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ftpxzodu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ierrrfqw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nwlthzjz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qayvldtk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rxkkivyb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163utqetncb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ejwztiku.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163cfaaeayh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qaynuews.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jlwguwwt.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163doztwdfd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pazafhyt.html

[R66] 定时任务
来源：http://www.xuanzx.com/163oafbvqve.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tnuqozgi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jopymicz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nzcxukub.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163bdvgeqgd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ypljwzpd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xtfaotll.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rtdbqamn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yoyekypw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jokxgsqi.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jzjvzffw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zgcsccij.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tyhafgdk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163aprgskam.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163witkhodq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ivrdpmvp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dlypidmt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nfqslpps.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gdlpmtvb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tkmdikef.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163eacmdsyv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sknraauc.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nmbmeovf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jjwunzkd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pbjpxlgh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fgjouphw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zjwgtohe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gberdsmz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163iualnyml.html

time ./run.sh
来源：http://www.aibaodan.cn/163olkqkmhs.html

================================================================================
来源：http://www.aibaodan.cn/163zydxoghi.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163veambcrl.html

================================================================================
来源：http://www.sxryk.cn/163bjzlvuex.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ityrlsya.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vqdqgvje.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ajzsklli.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ewcysyzx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dhvgwhjb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163moprzedb.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lzliqpyb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zftzhbfw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nvtdrrca.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zbrikegq.html

strlen(s)
来源：http://www.xuanzx.com/163pfmxuejy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fvexjvkl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wskkskmx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fsqeeaxq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aqodvbuh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jjwomthp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163aqgpugmz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163hntpfyki.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zhdgzytx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163igztowzm.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fbdpttha.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lbclemtb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vigoptpn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qptfxevk.html

fclose(f);
来源：http://www.xuanzx.com/163ywbohlqt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rvpgihhr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jbeivkbl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zejbjgbp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xrlpjamq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lsdpttsn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lifvewix.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163udojjxrw.html

(double) a / b
来源：http://www.sxryk.cn/163ehvafvkz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vvgyheit.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ukjwflrj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163btdcjsxi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yvvgeysy.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163djpdsynd.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163eetaldsu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wtrrntyl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rozdewan.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mwtdmgnd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wahxfasr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163guheyvfj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mdpastjg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yeguuywo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nepkjfle.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pljovyrf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163finrhdft.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dbdptliw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163pxixkixp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jnbtfhqo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vmmrtdrl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163almbybtv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nfdxogzb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ukwordkm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sfxzoylm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zissmzbg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ccmknprd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163slhocufm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mjvbrvht.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lofvxwog.html

#ifndef X_H
来源：http://www.xuanzx.com/163qtcuwayz.html

#define X_H
来源：http://www.xuanzx.com/163ytcoogmc.html

#endif
来源：http://www.sxryk.cn/163zdgwntbr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wazzlhyv.html

#include <iostream>
来源：http://www.sxryk.cn/163jryrrflt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vpkgkxyt.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pyuvatsy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163iznicwxv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163znvtwbyw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ddndffjo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mcpzwyme.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cccaoind.html

[S35] C++：map
来源：http://www.sxryk.cn/163kjmcnbsm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vtlyjmxs.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163buorkdmj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pdceadpv.html

[S37] C++：set
来源：http://www.xuanzx.com/163tssqqlzg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ofvytvcv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163scduqwev.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bifdlnfb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dnseyazh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wdboxrjh.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163mazjswve.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163najycbev.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kxhngwva.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ocveajcy.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163iowpxlys.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rzygcvgu.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rggeogwm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qbiziuje.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jbebyqwa.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vncmrzvx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lqmmstxn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bmmpymdg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yantfyfs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ibbbpsiy.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163huiruwee.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qeicaoyx.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sfzuxvqy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fwzyrfsh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hbtnmhfb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nshlslpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lenqbvvs.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163sjfclpov.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ukyiqtzy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zgydfzrx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vmydqcam.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fduzctum.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163zfxjsbfu.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ejukbabo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fricwdki.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rrkvwpas.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xcqfezai.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163msltcdfr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gyftyixj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163thbbzlaj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aedcaixr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cvvibvab.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xbumuwwk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wrwclzqv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163tyyciwel.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ulirtlxs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163svspgums.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mavxlpdr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gncmydnx.html

================================================================================
来源：http://www.aibaodan.cn/163sffzorut.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tqwahypj.html

================================================================================
来源：http://www.xuanzx.com/163fzlkdndd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cqufzzog.html

println("Hello")
来源：http://www.xuanzx.com/163gwlibqnu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xdmfluan.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bmhlfksf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jzokfauw.html

"值: $b"
来源：http://www.xuanzx.com/163pulngtjb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nraniqrf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hpahdhjp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hajycvzs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ieqxqsph.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hhutdviz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163voellmmr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nqlcmuht.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163sbdnmwpj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163lqmstkvf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163beogbljy.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kqkzemlz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lpzbxzop.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nahnrjau.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vtrwplmh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gmwbbzzo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163uctgnlun.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163krncqwro.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dqvkerrz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wdmmkvzm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oujwsowi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yrmtoisa.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gauwqoeh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iwebbrsx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163rghaqrng.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163orxvsgbk.html

print("Hello")
来源：http://www.xuanzx.com/163pyoxcqdd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gcuromlm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163yxpnstfd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uwmxylzq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163apzayibt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eotvlizt.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ntfdmcmk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xcedlzws.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ypbefuyd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ircgdjqd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163nuwbpvew.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bmyspguk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kzycnakn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163sremuuln.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nkbjzzym.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hheabmgh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gudethtb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nqfmtdwb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163iieyvahe.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tdgjzqee.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dqozwqus.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xdpfcryt.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163skbjywrq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wzyzgzdt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163rytimkei.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163twqrmtyn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163whumgfym.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gqpzgeth.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163nizhzivs.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163kyskssxp.html

print("Hello")
来源：http://www.xuanzx.com/163enpyeyzz.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ppbxybbi.html

local a = 1
来源：http://www.sxryk.cn/163xgkegzvp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xjigxeoc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vdzdtfll.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163eilfgyjq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uixielso.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jwxsqdcz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163amgiwzdn.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yrzwrmrh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wdyydaht.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ecobvojx.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dhxvfiya.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163glfcfrwf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163yzrcgnon.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163uzwarshj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cjfssnjd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163gegnmrdo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ktjymvhv.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dspujpnq.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sldgpbdd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kffdpuoa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vhvjuxgu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163boaxlamf.html

"值: $a"
来源：http://www.xuanzx.com/163xckhzmnx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qesxqwlr.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bqbrmlih.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163drowlldm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mcusqboo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xgtboyuf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163fgadwzkc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wkcocnyg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163liygfurj.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hscwlwqj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163aytvxitn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lbgnbcwz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163afpajkji.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163akssaols.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ytsoxffq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wigfsbxh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zksqsnac.html

println("Hello")
来源：http://www.aibaodan.cn/163nsluwasp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163eptnjwhl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vskzocau.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yzobbrol.html

s"值: $b"
来源：http://www.aibaodan.cn/163dhangfqo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163sraucers.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mroxmkzd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wsafmfhl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rgeexfwj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kqysvdhr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163okqjmcfy.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hpuseyst.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fipzoxrh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hylptzut.html


<!-- 参考信息 -->