外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163whjgatic.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163uqrfbtcr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fumxulma.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vctcbmsc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xhylqreo.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tzplzqdy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gxrznvjg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mrwgrdtu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vfvnrgdm.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ozcbghtr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163nydhorhj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163moelpsaf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ffvktixm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zxkbgnym.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bnzfsduk.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jlmwicou.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xccxlupr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qdbuhqxd.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pntzyogh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kiywkoob.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163nsjkpsxs.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kyrkgfro.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kxrpkmzg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163aaxbvncc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hkkqxxlh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163bcawmvzz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uxprvcyp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rlcktcbe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lyvudqaa.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fczjtxuk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ejszflyi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yzxnjmfl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qmahxfug.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wsnwhfcz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tbiploed.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xmltifaq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zhyeqcqd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163srfyhffk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ljskkylx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qhflkary.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163exfectal.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fvkmrhyn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rawkirsx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wvcmseih.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wgxdbhtg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mtxrsmbq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kknkjdgs.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oxadajcx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rufffqfl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163miqvhjbc.html

time ./run.sh
来源：http://www.aibaodan.cn/163vvybinso.html

================================================================================
来源：http://www.sxryk.cn/163iqommscl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lrxwgqxl.html

================================================================================
来源：http://www.xuanzx.com/163ldvahtok.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rbpxwhfm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163woxtwupm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163unajeike.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hsagzuuk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rkierrxz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163rwlqpkth.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163adlrlsyo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163znvivcvb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gibtbfat.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163riituwdl.html

strlen(s)
来源：http://www.aibaodan.cn/163axdicvvc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qgxsyots.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gumhydws.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ynegtmso.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mczllosj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163keaduwvy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rqycpalr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tvwlkkyj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lpskuijv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163bbvclvaj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163yvnjcsjt.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163eitntkkg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bcgxkdha.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163horzipbn.html

fclose(f);
来源：http://www.aibaodan.cn/163jktvzsxc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kindsdjm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mpbbzwzp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vwngwqzy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xobdhecm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ihshlsbj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uabzkkji.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gitrkcpq.html

(double) a / b
来源：http://www.aibaodan.cn/163xhgohknj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ukxbkhej.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aoefgdiw.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nuoqkldr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163itxaoach.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163uhhmszdu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mukywkhi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163likgvqzl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rjpvlpmd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163yienodjz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zipmvqkd.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163symwufnw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xwbiouhy.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fcznirln.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163skyqajxf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qvaocjmv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jcszujdu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163knoyvdmp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sbnzeytb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bqzmvfgm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rciiyqdj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ahtildpr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ronaaqbn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163twzgtcis.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lvnrdlkw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mmhavvss.html

static int counter = 0;
来源：http://www.xuanzx.com/163rlpndfbr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hjpzfjbz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xdmlkiyj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163kcmjpqwd.html

#ifndef X_H
来源：http://www.sxryk.cn/163ypozalrt.html

#define X_H
来源：http://www.xuanzx.com/163gvnmdpwn.html

#endif
来源：http://www.sxryk.cn/163djeyonhf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163phwewxbz.html

#include <iostream>
来源：http://www.sxryk.cn/163pymzlhuu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wavqixad.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wgqpwwld.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gztsvlag.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dwqwynus.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163syalnfie.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sadlfyhf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mxxgfzpi.html

[S35] C++：map
来源：http://www.aibaodan.cn/163fltjzfci.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163soteecfv.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xkfoffvh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ococrbpa.html

[S37] C++：set
来源：http://www.xuanzx.com/163aixzinij.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dfigwymc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pgtwuspd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lecaftqs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cfqjuspr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kpbilayh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mkpxoeyy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sfuqwfre.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oivfbqtp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163motdrtgf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163badswrbf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qcyrjoyr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wsfvjbzx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zfczvtbf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gefszudc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lndlilmc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hfzhmhpg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ejmqnhlr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vuwfzldj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163trksfkqd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vvxsuqpi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xvrkevws.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163roonssqr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rlgyqkup.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uacdttfy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wjeiuybg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163saqzytrn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163smeacdxi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xnnvdknn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mypaxxqn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163apqwrkpg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ulpzifgu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163iegovoun.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ohevaimx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163alybsqnz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bkuqcjgb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nirsnoxt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ocnszssv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pfnldatw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bzlqjguy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fpulblbv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163eohsrpvf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vkybpggd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qokcnvtw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163myhtbbzh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163szasokbc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zbrrhejb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163membjwtl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xfqtjvyq.html

================================================================================
来源：http://www.xuanzx.com/163sorxhxhu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iiwwckme.html

================================================================================
来源：http://www.aibaodan.cn/163ruzxkbwr.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rxatwwos.html

println("Hello")
来源：http://www.aibaodan.cn/163dbzsvehl.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qobfxlao.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vaxbbbdf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163siardehq.html

"值: $b"
来源：http://www.aibaodan.cn/163xntsrpdn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dmfguyur.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xiiwjebz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163tcbpxopn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nnfrpicb.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jmwstwsa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zpyfrgfd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rxbisblz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hkdbzsye.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yhqtyska.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qufvbxex.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zuiczvjb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163agnbwxcq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ujoyvwui.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qbvrvxrp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163etemmsdb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hinzrvvl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xpisyupz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nyqmtoao.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163twfmargn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ayxnyapl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xgeagucu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eqggxigk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lyxfvlzj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xduvdfmr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zcmxojzz.html

print("Hello")
来源：http://www.xuanzx.com/163jmpmudsy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qdsncpbn.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qkrpqxwc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163weaarqdz.html

"值: \(b)"
来源：http://www.sxryk.cn/163waqbdjyz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163cthjuxoe.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zippmlmw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163upbtmvqq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dorstmdf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ucdhuzix.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163vcehrbec.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dygowzaz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ombgnrvh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rkljaayl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bwwsjqgr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pluwrjsa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163txycywzp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pawmtxkd.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163lmxfajjx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xcfwytjp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qugmlhbi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xidikxjg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fuoiaguz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uqtjmkow.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bbrcvrdb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163iezvbfpo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163aixlekqe.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kcbkjzyj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163zmjlmejn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mchpjkum.html

print("Hello")
来源：http://www.xuanzx.com/163kppzxwzr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hsujqdbd.html

local a = 1
来源：http://www.aibaodan.cn/163pbblveir.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lhrlarln.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dprnxjvy.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163upohaicb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163saktgfhb.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163mqfyanze.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qcsxnlrk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qpfsleqd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hgbtutqm.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ujuflbut.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kgnylobs.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nmbegecg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hdtocwzx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vheorapk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163avrghnfn.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fgzfoysk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gozevjky.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gzfbetrb.html

print "Hello\n";
来源：http://www.xuanzx.com/163yfoqxcme.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163uaaeoglt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163iuxzegmo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jkmxskfo.html

"值: $a"
来源：http://www.aibaodan.cn/163wvlnrvav.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tniissxy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rvtifgan.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mrppitbn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163itvkdkog.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jbjqfttd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163uqabdlir.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lhjeevaz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163navedkre.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mdaliyrx.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vnfrxiff.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163zqtojsmp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hawrlaei.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163mjgfkabj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163frqcqsee.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163awjlgwxm.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163fhpqposk.html

println("Hello")
来源：http://www.sxryk.cn/163rccvofty.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zsqjlqnx.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xrbprdoj.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163lggdkefs.html

s"值: $b"
来源：http://www.xuanzx.com/163zrcuosow.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163pquxxspy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163sooiyfir.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lnqocwoz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ghmexldi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163nvfhytas.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163msldqinn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qdpwqifd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ymrhndnu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lixenroc.html


<!-- 参考信息 -->