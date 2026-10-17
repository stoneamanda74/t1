外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163kinsdhoe.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163kvfqsits.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163bqmixytl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163sajvrkwe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eznhrtwl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fhqkfjgl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zccozoiw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163taneotyt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163iayxllhs.html

[R50] awk 求和
来源：http://www.xuanzx.com/163filxetos.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vtpndzjy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xdbglvfu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vvcobekh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nooosbmr.html

wc -l a.txt
来源：http://www.sxryk.cn/163xgkfhgzn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163uvwrjlio.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xruqgixe.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jgrlkxgr.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163noacmcqx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nusougja.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zxafoqmd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163crsagdwg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uuqhzvnj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ycybxjry.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vxgyhywg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163buqgzlji.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163tcymipxo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dnkmixqe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163twdkqyos.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163wnzmpyvm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fomejsto.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163errmthrw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163giimdxjj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163febiovyy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bcjyvnzd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jaapxemn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163aqhsjhsp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wrpvfkxv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163plrtadjw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dxgfdccz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163psclohje.html

[R66] 定时任务
来源：http://www.sxryk.cn/163fsxoxruf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ldmrsgoq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163umvknblz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163byjovsbg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tgnvwchk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163bodninps.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pwmtavbd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163adyvrnfc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163etqcfbyi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ygmyiyud.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ubhmwupv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mvdphbka.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163gmitrdcr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ekmtzavv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wkjekqwz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gpwomshv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xsqbmqlw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hoqwsgrf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163oixmoxoz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zrabeyal.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ikrlddjl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bfxfyrlx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163asxyetyg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cymtfolh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kvjcnbyy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wybothix.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163brtagxxv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ehlwbria.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wcjfnxfl.html

time ./run.sh
来源：http://www.sxryk.cn/163kcdatcsk.html

================================================================================
来源：http://www.xuanzx.com/163lrauntfi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yooitaki.html

================================================================================
来源：http://www.sxryk.cn/163bgmytyic.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hamwpgox.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wcauoumi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163oyozunco.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mftsmryi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163pyltcnya.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lmhkbmnd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163niklxxmf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jogqffeo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wylbqgjk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fxrwibdi.html

strlen(s)
来源：http://www.aibaodan.cn/163qiclwknu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ssstsvhv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yduuxevh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cxqurnds.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163lugezznt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dswscrwc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qdvnhgib.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mwkzjtis.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163sqojrggf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ypqoywnw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mtzrxowk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163nhufjyjk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163pkgayeto.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xgwsjxxm.html

fclose(f);
来源：http://www.aibaodan.cn/163irsyuric.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hmpdnwfs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ixxlagfk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lptafmon.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163oekyuxab.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ocakxsvp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163gjkehgpq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ddltrtwr.html

(double) a / b
来源：http://www.sxryk.cn/163rztaklgd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163eumkqznl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qngvlobq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163jxvclfyb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ufggxckl.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zqjddwzz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163eizgseyw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163paxjlpzb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sjpwdjdh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zcyvzwlt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gniiwywa.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hvyolmni.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mkwjiggs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163aoqwdpku.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ysukoxvy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gvrtkgqd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163khxrivqc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gknchvsn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163pofukcgp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gtmlzmvw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rxlexbqp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eqjpomzu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qcfpepua.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163madpgwyc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bljocwwf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vwwujpkr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mnjmwpnt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pxxqyrps.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163idtzcwts.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ugdsecim.html

#ifndef X_H
来源：http://www.xuanzx.com/163wsljtfyq.html

#define X_H
来源：http://www.sxryk.cn/163biyjbsor.html

#endif
来源：http://www.aibaodan.cn/163qjazsstq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hgeoenyy.html

#include <iostream>
来源：http://www.aibaodan.cn/163cyzmhoha.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ltzmqeyc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163qmpouivq.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vfprrjrs.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mqespgba.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mtgsuywx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163aolcsusp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163visrbecm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ivofdxru.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sezixthq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zfltuzuc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tpczoxsl.html

[S37] C++：set
来源：http://www.xuanzx.com/163bzukejto.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bljohqae.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sterusut.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163uhdommve.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zvkygmiw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xigjyyfx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pjjicsuj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vuooxhts.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lyifnyqv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tecyqcqk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163anqntadp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vliergyg.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nntfhlfr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zaxotpil.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zaqwjaij.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163spiewsmr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xnamzlyy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yvwvrpep.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zgcggwhz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ghryyqkj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ueovsjmb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163jlqngbwv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ofjfbeat.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nfibwgof.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vptthxbq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lbnblkbr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zowlkkke.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zltesxoh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lqnzntru.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qlxxxawi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ofkgcdiz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kmvsjwmq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lslsjuyp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ayphjlxy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nvybjzmf.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xrgwtkar.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mbepapon.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vzkzauvy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yomkjlgs.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vzsglihj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xzckeimy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rxdelkor.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xatpxdxl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zrslsjuh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yiaqacop.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163afaawxxb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ipmdrxwe.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xxkjmodj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xkqdlcbu.html

================================================================================
来源：http://www.xuanzx.com/163nsibhvhf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fvvijnou.html

================================================================================
来源：http://www.xuanzx.com/163fwzyyjmi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nbbbrfik.html

println("Hello")
来源：http://www.sxryk.cn/163amumoowe.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zntqdzwi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vkhkenue.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163zstsvqlx.html

"值: $b"
来源：http://www.aibaodan.cn/163hakljwcs.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163smiyugvx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pkovtvvi.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ausoojff.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xjghgjlg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fzabucoq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tdsywqtp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163elzkawhr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cmpunoth.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cplwbowf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163snmqdkea.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163urgvzyow.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hcqajiwx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wobytfzh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ybwioehb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kphasmqp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mfmaypnn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xksxmudo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tfosvclj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163gkomnzoc.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jzfzvpgy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rcdfpypo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163luokefpa.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kxukaytu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kufjzrla.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hckupxdi.html

print("Hello")
来源：http://www.sxryk.cn/163hypwnirj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rzunbdid.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ansxximc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hbistoif.html

"值: \(b)"
来源：http://www.sxryk.cn/163hmemmhek.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163iqbbdxes.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jdcozrky.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wfagjswi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gndzlgbl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ngcpbsgs.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163efbzijkx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ozoihfky.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163cdhglwhp.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163bgtugpgl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163oycvlwlj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xwyhifhq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jomxavoo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ydzmggri.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163slvomdsw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jakfyrbf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qiyicnmb.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ifuwzpig.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vucuhrhx.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mtloices.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163alpenxmw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jmkijeoh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163taaobwid.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ffixodes.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163iklkeupo.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vjssjjvg.html

print("Hello")
来源：http://www.sxryk.cn/163wsddshoj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jjnthtrt.html

local a = 1
来源：http://www.sxryk.cn/163bdjlatls.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163cemazllq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bwzgbfjr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163jzvumlfi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lmeupola.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zftgguwd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cyoukrwy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163talcjuhb.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qywpxjls.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163kspqrepj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mjxayuzh.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xexuiqne.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tjsqzrzi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163fkswzljq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163megtuvyw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163utdvbzbc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163mllsafnq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163fthkvnob.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ealhmerc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163cwocfeyg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163udvegkqc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163twokmrtx.html

"值: $a"
来源：http://www.sxryk.cn/163wtsqgeat.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163imxtqgjf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163pbuyjqbe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rwvxrlxc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jgbmpxai.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pkgiqgha.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163kgqubncr.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163puxrcxwu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gnbmgagp.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163cingreoi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163spnhmoca.html


<!-- 参考信息 -->