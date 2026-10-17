外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mtjmjgus.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dqeglpng.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bwstodqi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163liarrvni.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ptbfbner.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ogplxatc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qoukmvmo.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fbqllhpw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zbizglkx.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rzevwubb.html

wc -l a.txt
来源：http://www.sxryk.cn/163jxzjzrzc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163gnzysbkk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fmkcwnho.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mqtgyrbi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gilshqqq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lhhhrjso.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xfqchslt.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gemdxdif.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163iisnkzso.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163rxhixkec.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163detqnsnz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nplifywq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ilinesiv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163guxusqeq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163iqqykims.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fmtsmjss.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wxnlgajl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jzodiiye.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ghtczgnr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jfcjiugs.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rxqheimz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vyuwshps.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163bhdeqrdo.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rwqnapjq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xcdzrdzq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dffjelpd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ioszeqnt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163imvhkcve.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ozltbdiu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163loleygem.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zaqjyhus.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fihqadbb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163eijpoofa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vvmuikcy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163thrpppmn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cijmgedo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cpzydctu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163usugzpzz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163okbbmmpr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163npgyhavs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lxxhutmb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zibsftdi.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163tlrxfhkg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163csuqjwzi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rbknktfg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lhuocsnt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163sfmwboxp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163holwuuym.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163idctmhto.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cqqhudcc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163yswnlvju.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163cbltyeuy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rkdaotza.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163alaulxky.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163pjwnykir.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163cgpkheje.html

time ./run.sh
来源：http://www.aibaodan.cn/163gaqxqwzp.html

================================================================================
来源：http://www.sxryk.cn/163fgzvexhr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qowvjzdz.html

================================================================================
来源：http://www.sxryk.cn/163jpxgmdjn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163akwyjnkj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lxnxxjnc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rsfqnbbm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vpfckuhv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fwhjhsao.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163cueympdh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tdxqvtfg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pvbemtak.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jlwkrtco.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ueiiqhmh.html

strlen(s)
来源：http://www.xuanzx.com/163krbnzcyb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ccgdakxu.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163caketalx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ofzxgnkm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163dgowkdcq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ivvfugqt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163leqfysfr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jgpkuyok.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mezqbpze.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dbbmpiee.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163cgdrizjm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pjeuimzi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rkmmdsjn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dcyosvcl.html

fclose(f);
来源：http://www.xuanzx.com/163eztbnnvr.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sbkifsry.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163sudflvaw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hufrpgbr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163buqquswt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ajcbtwtu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qqcmsaac.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hcrulohv.html

(double) a / b
来源：http://www.sxryk.cn/163pvgmofnl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xzjyywyh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ujgonupr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yrzrbzcu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163seafjrhq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163txostfxv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163aznkcscu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lfukcvax.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rgzzwdkk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lijspvjm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163altyjjbr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fbveuora.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uurgntqi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163plsnvpvy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ctpdaazo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bggwzssn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hfcutbuj.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nmvaunks.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jktwsmlb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163djltdjsx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vnsyzabl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163oejusqhp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xecfupte.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163idzgowpx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wkudyjlw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fvmuthde.html

static int counter = 0;
来源：http://www.sxryk.cn/163srvgzfsr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163airxyrqk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bjyjgjsu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ctndhmay.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qbvmfslx.html

#define X_H
来源：http://www.aibaodan.cn/163nkvixkkq.html

#endif
来源：http://www.sxryk.cn/163karyxamq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gkdqxhfu.html

#include <iostream>
来源：http://www.sxryk.cn/163lnxrsfit.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163pqwydwzk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ujhxskpg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qlfsedqc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jkbfsnyl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163maahmrwv.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163olzqgqjp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ulmfdikz.html

[S35] C++：map
来源：http://www.xuanzx.com/163ytfmgygf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nwzltgxw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163givveovv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163thbhfvym.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ipqlwtum.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163clqleodj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163waytjkcy.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gajuqopa.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163okbrcpzw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163stcbfufx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163twjmqatr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tvztqcuu.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ysfommww.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sluuoxan.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hipzqlmx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ruoxoajt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vxpkoviu.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sbgubvsc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lbhdsdwa.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sjadowua.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qzghkunu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tknvqcpk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qjigempg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163twesimmq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iwehjomd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fhxrzrdg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163aulzvivl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163evwplhmz.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pxndtfko.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tqtmxwsh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163csvsdhxi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163aadzleaz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wtazxndh.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ukaekcbs.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163homsfzdh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vkyjazic.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mbdmwkor.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163njshokzk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bindpmfk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163iyquhibk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qvxlmpyc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163knkzpjgz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163crvicjuz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wycvolfh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tdipaipv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yrggbdlw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zogwjmch.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ovmhqwco.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wnxnwhmp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ajfjvhvj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qtqqhaop.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163iqjtlwgd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xygqakgb.html

================================================================================
来源：http://www.xuanzx.com/163kpqhanve.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bvwlprbc.html

================================================================================
来源：http://www.sxryk.cn/163wkrhzupz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yjmwmmbc.html

println("Hello")
来源：http://www.sxryk.cn/163jnqlaemd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163anurlunw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dhcfgygq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163uzpyuonx.html

"值: $b"
来源：http://www.sxryk.cn/163xwqdtjym.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yxndsfyc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qqkxfggl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jseurjzj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163cvcugkta.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ufdfevhj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ifslqzsq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ihimuedo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bvhfxdkw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163mbycffga.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ixbhbjfl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jpkaeavb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jftbzcgt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163buenidyq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qttatzaa.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163lruallno.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hosxycwv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qahlhiae.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163haermbge.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163hvqekqxr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yeigazgb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gfebbplc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xaglaqsg.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163eursdjnp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fgeotpno.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bmezokbl.html

print("Hello")
来源：http://www.sxryk.cn/163ycuchfhl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163grxkxrjc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rbqhjtez.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bhgeodve.html

"值: \(b)"
来源：http://www.sxryk.cn/163pswibkkk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ghzskmwb.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qsiqbxll.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163snbmozod.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163smeyqyrv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hdmxedqy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163aisjgwib.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163azymnvjz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163itfnayif.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kugzhnnx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163umjgziaj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bfpjlnar.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zvqgveso.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163muvjqogv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ocnkrscu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163aojyykev.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mmblnbkv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ieebhjvw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163djolpxlg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lavrfrvu.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lzcgeyqn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ykajtefa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163iqqnqvzm.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163woujpqkg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163aklxoaue.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163oljwnuox.html

print("Hello")
来源：http://www.xuanzx.com/163aahyywtn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gwgeifzy.html

local a = 1
来源：http://www.xuanzx.com/163ytxllhor.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163srqfdcfo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tgtfzgjm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rrziubyz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163faxkwglb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ubbgfxht.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163btuhfmgj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163sjbuqbro.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163trljicbi.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jypvbjoi.html

"a" .. "b"
来源：http://www.sxryk.cn/163fvzkmwbm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lilqurih.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dozzzhou.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163etboaqaa.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lmejbvgk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163bpvtxdtl.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163awiohdxn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163edaxomsn.html

print "Hello\n";
来源：http://www.xuanzx.com/163jxwcngox.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ommjbplp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163afiksxyn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jwdnoodu.html

"值: $a"
来源：http://www.aibaodan.cn/163qrjqscsq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163swhpbzxx.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163xkfpnflb.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ypntnjul.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xffroiij.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yzdrmgqt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hgazbumn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163kybxpdtl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163amecavjf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163osolepvh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ctonjofn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163zcogfngj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163djnaolgv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163zypbwdva.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gjnpdpoi.html


<!-- 参考信息 -->