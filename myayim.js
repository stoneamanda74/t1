外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jyjpbkit.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mgmyteua.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nrxlkqjr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163pkjnwmxr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163uoxpyduz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fjijdrkh.html

wc -l a.txt
来源：http://www.sxryk.cn/163payilaig.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163nzmvjsme.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vbstbpmi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163cnbywrjb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jdjpluce.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bxywpvvk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xwqsvfln.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ggknuuaf.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ozeudixp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163buzpmrgk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163cqmsqgzm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zhawyida.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mqvimqdr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nobntyis.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xbdjbvtn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vuydngwg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163yuxvrkso.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vandgjcf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cbwljzvf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163iftarsps.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163utqmeyku.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tscoqwnx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kdpuvdfv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cmxqogcn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ufsxxptp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163caqmsrap.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163txbrwrer.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kzdufcfq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nbrofxbj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163onsdvrrm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jnuxoriz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qzdlbyse.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jbnmvuiv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163zpavwged.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163cxymufww.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ahdrddbd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163abtdbrgu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163uxevhohz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bwojwvzc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cggukumj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163njppttjw.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ngkmiogo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wyrwekdw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eyoxyunw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sdiwhjuz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163nmgbrynm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ewxlqurk.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ijpknpqx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yakayjjw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fdmwlwvi.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gmjzuusu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163chtusvat.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163eicfmfvy.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cdrtsrpd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ygjmvrfv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kcopwknf.html

time ./run.sh
来源：http://www.sxryk.cn/163tilqnphz.html

================================================================================
来源：http://www.xuanzx.com/163cicugnbp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163iuabkfid.html

================================================================================
来源：http://www.xuanzx.com/163apekabxx.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ktduwyfx.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dwyeublp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cpfdzbdn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zdppgatg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lomuylyg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ccjqyreu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nlszwftz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hfjumrou.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163vomailje.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pwpcqiho.html

strlen(s)
来源：http://www.xuanzx.com/163mxybeewh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163reknljwm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bsakhioz.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iovsapme.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qudkahqz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jdxntpte.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qpknkfxo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dibbplyt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mosgtmxe.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zudxlgzr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163sneqkjek.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163iypuwuzh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163uikezewz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lkaabmpf.html

fclose(f);
来源：http://www.sxryk.cn/163bmjumtzt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mstvvmjw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rkfzpzjj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mouvxwdw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163iwnewhbl.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ksmjlwrn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qtyscxfq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tbqfsvvr.html

(double) a / b
来源：http://www.xuanzx.com/163uerpfzpc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hypjeyiz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163impbnrpb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jpgncmln.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163oesnoybu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vdiwydim.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oavknxke.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hfffjiad.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zkkknpfa.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mhaiaioa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nplaorqj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bhvzutls.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gslajfir.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163iyhmdnmx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ddwjiuej.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163zpsqwtdn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zsdfzjtx.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vkymrtyn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ceshpeqw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163slmxahol.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ojsitvyk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163odazyghy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ucecksyt.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kzixkivv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163msorwlon.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ylzwmqgl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ouquylga.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hsgwnrti.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gosainvc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mlgryjjl.html

#ifndef X_H
来源：http://www.sxryk.cn/163sularzpg.html

#define X_H
来源：http://www.aibaodan.cn/163sjbnxfyf.html

#endif
来源：http://www.xuanzx.com/163nvovcxih.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nygdnkac.html

#include <iostream>
来源：http://www.xuanzx.com/163eusumogb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tgvidkuc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163dgkeylco.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wloqpqwf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qvgrkimu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163caubabgc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163euloqbem.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tutfbjdi.html

[S35] C++：map
来源：http://www.xuanzx.com/163ejymhlzv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fssqluin.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163scorrrvq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tifmiqhj.html

[S37] C++：set
来源：http://www.xuanzx.com/163rpsihcsl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163thljigng.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zkvvgjma.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163eaydhwfr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ufpvnfbn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163alvrrviy.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163yaxwxpou.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bbwufejb.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163svsldixu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fbmrdwks.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zjkgvbts.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vowlhjqd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ylgfhcdd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jrcrgnsb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kgpwhzob.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wzevxmig.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qidhhyry.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gyjmzatx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ivrrntzp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cbxvdqpg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163swdsfrid.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xroztqlc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vuwiyrrm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mkolukwz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163iqmbicsv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jazgbgnj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ufhelsov.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163svjumxjm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ycvqmnpw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jjlpckoy.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nkkxekpg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cwqvlqnp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qldfontr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lieqikhs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163svbthgjp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yumkdull.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ogzfckan.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jklwiwob.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pmdjwtss.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tzqwlwcl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dqwopbeg.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kkwbcwvl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vsdufymc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ysmjpyxq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dmyhuzgs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dalgarfv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dodzwimg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iddewpyj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ubemhbtl.html

================================================================================
来源：http://www.xuanzx.com/163eaavkdyp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ofgkeajz.html

================================================================================
来源：http://www.sxryk.cn/163hudecnla.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xfuilqwy.html

println("Hello")
来源：http://www.xuanzx.com/163zfwmbael.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dcwqqkfj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163wfwhmxoy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163bcpvarjy.html

"值: $b"
来源：http://www.sxryk.cn/163eswllhtu.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163obiqpmuc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163cmawlyks.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zugmopza.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kokowqth.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163iagygzsk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hysjmaqm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zdpygcqh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ztjiposh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163igaklhzl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bkirukma.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dntftwvb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kruuuykz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zjsdtniu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jbpdtzox.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163skpfkmoh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hlnneyex.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pdcrzpev.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bkijyyiq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ebhqkwlq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163sswndphf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mmmvezju.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tdwiezwq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jkazilcc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qweysmxh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163vxgwczwt.html

print("Hello")
来源：http://www.aibaodan.cn/163iqvzlpim.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hkdiwkyj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qmxmcigu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163crzhwucx.html

"值: \(b)"
来源：http://www.xuanzx.com/163bwvplvxa.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qxnftivy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jsusltbn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yqzinphm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163sfpiltul.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jallzgxh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sgizuqmj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pvjgjavj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qfirqwcl.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163dtrzanbf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wekgypfr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zwqnebsr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163awfnvctd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163keqwywrk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ahazruxa.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xcknpslm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ghzghpup.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tbyqgadg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163kdnruylh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163kzvbxhor.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kgxgcjtz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uyljfmhh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163eaqueazp.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rbugmosp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gfmzwoaw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163exrfngoq.html

print("Hello")
来源：http://www.xuanzx.com/163uibppbix.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nziergji.html

local a = 1
来源：http://www.xuanzx.com/163mbalnjje.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qtiwdluw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163iqjxxsyj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zstottbd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wisjoioj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bpnjlfzb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dzpltbbl.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163elcehxah.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ereakkwp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rlhuyuic.html

"a" .. "b"
来源：http://www.xuanzx.com/163jztsujei.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xzcuvdba.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ytvssemm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qxirthun.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vapuhmvi.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163xneivcnf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mogcnudt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163yoqrnpzb.html

print "Hello\n";
来源：http://www.sxryk.cn/163flfkixpl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hixkqeuz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163inziftin.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zymtofph.html

"值: $a"
来源：http://www.xuanzx.com/163lwclvmlq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zcxrnkob.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163frdgtyqa.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ojlglhnp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163dwnnbvfx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gkatypgi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ycywabki.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bvgpgfsg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kthydrzm.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163hroajlbj.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mgiqlujz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ayhfmfeo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163grtdthji.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163etpzrgmm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163upwbtpdt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163kooxkzze.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zldctmhv.html

println("Hello")
来源：http://www.xuanzx.com/163osrguftq.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ouefeakt.html


<!-- 参考信息 -->