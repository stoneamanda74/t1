外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mllsfybi.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wrmzfszn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cyhcloli.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hbhukbll.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hviivdgg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wurcrcpw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vavogrtc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gprziuww.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dyjppeox.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hgalgzyr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jwzsbnur.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163elsprjym.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bmobvuls.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zmstxgnl.html

wc -l a.txt
来源：http://www.sxryk.cn/163swbtsjwz.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ocdbxfmg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vtjcpejk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163afsaafta.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163etowzsfd.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ynrkrpmx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kyobanin.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kqepdhee.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163eudwchiu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hubasioe.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ghbslzgs.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cnugjkaf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163difdopwg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163hfcwwixs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pcyyzayb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uqpvjpir.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163urvyoawo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mzclggnd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vuoierra.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gtubsclj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163erflpkjy.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163okhegsrh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zkvpndkr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163trkabtfa.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163nqatvtgy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qnbreoxn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xangkugg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163akfwiomn.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163dodsbufd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lhcblrjr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163whtejfhi.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fnlejshm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lmvzhvtw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nbvbkflw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yhwdedwb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163dwokedst.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ozenwvxf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hhltxqzf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163frxtukpb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ocdlhgvf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qvuxretb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163umwwisqi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fgljvwap.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163txyslcgp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163apuxwiot.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163jgpaysrv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pugimtyj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cfjrbmzx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163acbycefb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mgsotwad.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ugtpoaez.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zovhjtdx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163auckwpkv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qbyricud.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cxvobgqp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zebxcxar.html

time ./run.sh
来源：http://www.xuanzx.com/163mvokybyu.html

================================================================================
来源：http://www.xuanzx.com/163wrnjuijj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163mancrhez.html

================================================================================
来源：http://www.aibaodan.cn/163ztfzsqie.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tbhnbkrq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163fpbxsjby.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163fxeswzvu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ujkjupkn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163krhaujcu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xwdnhchn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wyyxmmah.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163edmoklxl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jouezvev.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163milgrujr.html

strlen(s)
来源：http://www.aibaodan.cn/163acwfhxfl.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rmjecjzb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163juvbqmwa.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163drdvimjf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xnbkevtv.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nncajieb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163udbwmqir.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cmfhozdq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163htrtsupg.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xxxkzgri.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vemujofy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kufzrpjn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163aneckafm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hriuxgdf.html

fclose(f);
来源：http://www.sxryk.cn/163mixkbckm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163kujjpgcw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jbftshqx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lxzigyus.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163npbemnoe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kjmahngt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163svimodmm.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163idnqbnpg.html

(double) a / b
来源：http://www.sxryk.cn/163qplrdidz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kyqiehzs.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zgrqkcjj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qndzrwiz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cxezopzt.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bpcvaajy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mwggglsq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163blniiaqk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tqqoeqyi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bzyrlpbq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yziwotrr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rroelyul.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lfqifydz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kluzglxb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xnhkvfjl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tyzifxeg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qyjzoobt.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xaoqoijz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163herpxnos.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tzlsjxog.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mlhzjkvs.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mtiofgkp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rkoigbbe.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zxdozudb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nesmmnie.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vwimnyiy.html

static int counter = 0;
来源：http://www.xuanzx.com/163vlmmnuba.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xyewasyh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ctpypjfr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bykcfijo.html

#ifndef X_H
来源：http://www.xuanzx.com/163gxtkuoen.html

#define X_H
来源：http://www.xuanzx.com/163phrzsmwi.html

#endif
来源：http://www.sxryk.cn/163yhvkeprc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163slapeuxd.html

#include <iostream>
来源：http://www.aibaodan.cn/163mpzelqvj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163wyloizln.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163nsynzpvo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vpujeiea.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163damvpfzq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163leokoicc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xltlqulj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wwiluyht.html

[S35] C++：map
来源：http://www.sxryk.cn/163olvphdqu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bkabxsgl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163eukrguuj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163doebevca.html

[S37] C++：set
来源：http://www.aibaodan.cn/163miguudhc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ssrkbvfg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eyjwcsos.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dvvwkqhw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163buortwne.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rdlpfsmb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zmitzgmp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wsmamxuw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lmiolyxb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hhekhzzz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163paymclej.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dirlmsjf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dxitihbk.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hjdwmtnk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163aqjftxyo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163heniqbea.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cntjhang.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pkpxevgh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163twykwzlt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163dkmczmmf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qqtbgwjm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163aisxmqgz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163odfpeptt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bdllwves.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fmoxlomd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qakxipga.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hqqorkhj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xdnsuers.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jafxaxso.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mwmzsttf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xlsvgbkd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jtpuyrox.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hgvbnubw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163cnxuhpbg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wvommftr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dpdmdjhz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163teuvqify.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bxoxyrny.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mhrebsac.html

[S56] C++：optional
来源：http://www.xuanzx.com/163sbrvcsuw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ipecdonf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163byqwgcpq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gimwzkbf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wsmnuzya.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nbdpgxdo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jaikcyoj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xujqwhpz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nrgzgjqu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hiqfbuej.html

================================================================================
来源：http://www.sxryk.cn/163nkxvihxo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163klrqfejl.html

================================================================================
来源：http://www.aibaodan.cn/163uzrndrqe.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163oopflrpy.html

println("Hello")
来源：http://www.aibaodan.cn/163mwsymdfz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mffuvjfp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xorbvhjj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jpsicwft.html

"值: $b"
来源：http://www.aibaodan.cn/163niwaunxj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dpjmifhj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163teyizqny.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163uekpnpkh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ygctcxhl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bjasoiah.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tiptpdmj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xdckrnvl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kxpmdbry.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oxhuobzz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hebvzhzk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ugjwesyx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163cxywwbjy.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kbqambwo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163crfseyli.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163wrcmriln.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lpqqsbix.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yreposrx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gtlaghfi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163moifjdky.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ggrfdank.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xmhpcujt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qycyydjz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163odjnxflp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ezochqte.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163eugfvmeg.html

print("Hello")
来源：http://www.xuanzx.com/163iehcyaqe.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mnawrmql.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163apnrtpxb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163zwaxqwtp.html

"值: \(b)"
来源：http://www.xuanzx.com/163twzlfznl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163chfccqxj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ualzowda.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tlzxftgu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rejlyosk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nbxzmhzz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163drusxwis.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cojeaehl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rpgrrrxj.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163acchdkdc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mafipacn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vfgyljdr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uociehzv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hfhkjnwn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163agjiivhe.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163isuqvqjv.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163yulclsfn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163awgixlwl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163vlhmcdve.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163awjzsrkv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163kwsbwhbk.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uvglctzj.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mvfqlgpt.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wlxjrenj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163afbrzrrg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163pztfotvx.html

print("Hello")
来源：http://www.aibaodan.cn/163dqcyvqnx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163shaztcyi.html

local a = 1
来源：http://www.xuanzx.com/163wxvickdn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nppsilno.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jgumnksj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mobyvzll.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163cfznhelj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cefeubrj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163sdzulelj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gpchhjvt.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dwagzwyu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163afdtrvdm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163tekxritc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163wzcvxzaf.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mhhoqwgp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wfblenbh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163yesrdwwi.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nunxbtmt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gvubsuve.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163astenfoj.html

print "Hello\n";
来源：http://www.sxryk.cn/163fdsovysm.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163pjhwtgkc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rzwyujgu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163donowyun.html

"值: $a"
来源：http://www.xuanzx.com/163zddnsiou.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jmxczlcy.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163fvyefuva.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mgjicigg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163dpfaqjci.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dpjhylxg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163boulopxn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lolvsgeu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163vospyzjp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yypgjhfw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163zliurvos.html


<!-- 参考信息 -->