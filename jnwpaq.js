外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163cpjfbytx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163mufzabeu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163sdfefywn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163xfmriksd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zwkkxmrz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163poplgrve.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jzlileca.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zzzvgfwa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163syturgxf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163nhrpkzbn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zuseyzwn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jxbfqbuf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gefameli.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fxpcvizn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163antltbft.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pmdkshvr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163oxrfkjfe.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dbgizshq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163erbovyaf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fjfjjhmz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wbkmfzzy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163oiuanfag.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163erbyxhye.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163okbxqvcz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xzltpxco.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ujaesbfp.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tazfgudm.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163szdgmpos.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rosopflg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gjyxxury.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vkxbuooa.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xirwrsly.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xmikqrao.html

[R66] 定时任务
来源：http://www.sxryk.cn/163whciowrm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qrqaqutn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gbmrujyn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zrqlabmk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163usreinza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163tkmrmona.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xlqxwqbj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163srjmkbhh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kvmfnrev.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qohnyuby.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pyasqaxi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hdmnroxp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xeusmwyx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zldoavxn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163oyoqyhye.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cugdseio.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163uxgswbok.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163mchrnoxz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kjhgfgis.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dkzpoaod.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zvyktelv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163duswiolz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163olqigwvi.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wrruarof.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wmoaovll.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fwlyzxmk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zvvhtbcx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kfqwydwb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163txcdjkon.html

time ./run.sh
来源：http://www.xuanzx.com/163rbjobfsj.html

================================================================================
来源：http://www.sxryk.cn/163cmloqiwx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163crgsjwmp.html

================================================================================
来源：http://www.aibaodan.cn/163dzlnecaw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ofyrttql.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pfayrhyr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dffccwdh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163srkdpgxq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mmlsgxlk.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163khcjrjvs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gkexskho.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163awmejhsp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rriqvbpy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163opsugdkw.html

strlen(s)
来源：http://www.xuanzx.com/163wawdytcb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tbqacvlh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163fzxwtwnt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xamkwfee.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kjujznra.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rzykkhyf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163epfynpcx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lgnuivxs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mbiaywhc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dxbrxeaa.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ywuqclsf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163uzifgrci.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xmjdswcp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pleyling.html

fclose(f);
来源：http://www.aibaodan.cn/163kmltzgto.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hxlhkybh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gopmgceo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xphevopm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gutkmzlt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rplamlyj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xawqtvrh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xowysayn.html

(double) a / b
来源：http://www.aibaodan.cn/163ewdxwytg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gaeykrxm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nnkythap.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ilwclxty.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mfmghgkn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ojnnfhzw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mwpuxswk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uwztbfiy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tpvonovc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163cuuoxvid.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tzefwnpx.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uzygdmgu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163epueague.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163smbzilmk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163alhpkzpj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qbysjhcj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wtmvsavf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163fkjdsdyp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mdfigtju.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mkofubxr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ylqqlwnz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qwfxyiqd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vuqdbxii.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hiatechi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jertqpau.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kykrujpi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uhkcegnh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ywqsmnid.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jgvueidn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cyaubunl.html

#ifndef X_H
来源：http://www.sxryk.cn/163ktbegjlh.html

#define X_H
来源：http://www.aibaodan.cn/163zhwwpias.html

#endif
来源：http://www.aibaodan.cn/163bezylltu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wxdpszvn.html

#include <iostream>
来源：http://www.aibaodan.cn/163oznwpyym.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gbsihbxe.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163geprlikp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fvodavqv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ardbxnfi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nqqmatrg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163smcqvvny.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lulagdkv.html

[S35] C++：map
来源：http://www.sxryk.cn/163isxzkqiv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rugkeyzr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163strawjvk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lhjseuck.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qnnxusul.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ryatcuxa.html

[S38] C++：排序
来源：http://www.sxryk.cn/163odhvpger.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vfhuiiie.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dxjtwdzy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163keqwgoew.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lrovsvql.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hmfatuld.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wpwtxeut.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jbggveja.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163btwibkku.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163meyypwiz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ghivukmh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163lewoletx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gsoakdlo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qakwcefs.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sxzabfzx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jknzeuqq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rnpumcpw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163spyrdvnr.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163opauyxvj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163emmugarc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cevjpddc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163psrruywu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163imkeetcv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tmyrwhnq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qcdhpbmh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ujyjprso.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163riiaizhq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pouhjsji.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tgsbtsnz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163niwstqaf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xkwqphgi.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uhcldtfb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163afpofgla.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cqzjerkh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vasrbhcv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163osddgqpl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zegbephf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jcatbjvc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jxfnhvql.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cprjdreo.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ccwszvcn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163bejehtth.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dkgwdczf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163fuejumbd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rmyertja.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ftsnjgql.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lroyxgxz.html

================================================================================
来源：http://www.sxryk.cn/163ogpyzfmm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jssijttg.html

================================================================================
来源：http://www.sxryk.cn/163whwmossb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cyumrvmu.html

println("Hello")
来源：http://www.sxryk.cn/163zrjtvmkg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fravrcrz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163lbgpdbtk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163bgegupse.html

"值: $b"
来源：http://www.xuanzx.com/163wgibqxtr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yialmayw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hxtdsgjo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gzaxyoiq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kkrnfbll.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zrostlbx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163campamdx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163cqkbmkmi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163sslamnoj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xwvpifda.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wbtzkpfj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uidczlkx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kikwsean.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163akoaymxb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tiwxnovp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163asqceymu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vakzacba.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163msgijpcc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nkxqqczg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163txodhcuu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bwjhrdsz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163onamdqua.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hgbisoig.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163dwldoadq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xjyetkft.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163djmkftvt.html

print("Hello")
来源：http://www.xuanzx.com/163wugqfyol.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163npnndwyh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mrhcoqzi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xtcunapc.html

"值: \(b)"
来源：http://www.xuanzx.com/163vwhlivkb.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ldkjuxry.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163eqqcshow.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163astxqodb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163chbdlgwo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vfxaginu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163futzhrxj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163yiuxtieg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rwdptlfp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gerzvzqe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ywktftix.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fgyyrktd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qxbbzxrb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163cmhkrstg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163dxnrpbhe.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lkppugpc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lmfnalvu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fkcdbbzh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fylwfdgg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163fvqehaot.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qkxltaam.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163maefkwhi.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163yailzdbm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163takgxren.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163izqzumxu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163nqnorkuk.html

print("Hello")
来源：http://www.sxryk.cn/163nmbfykto.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jmxhohrq.html

local a = 1
来源：http://www.xuanzx.com/163tcnzfggq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163levzkhvk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lpfnnogc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kitmqkzi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zgucbmjo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hnmtineo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163sudcaige.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jzmrnrgb.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163czvlaxgh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163dtznttbz.html

"a" .. "b"
来源：http://www.xuanzx.com/163fhdylorc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xdvrtxwx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jcnxlinp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163scztkxge.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163fstmjpkt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tbbaehkf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163upsycuqg.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kopdrldi.html

print "Hello\n";
来源：http://www.sxryk.cn/163xkwldzcb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kwqscrdm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163yxpzzhha.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163asvzoruc.html

"值: $a"
来源：http://www.aibaodan.cn/163ksxuqsws.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nnnhyurt.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gpvnhnnk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tkcaingd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ctrvqzfc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163nbmalsye.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pqyfyhfa.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hixwipiu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163thrrdsva.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163twqgwfvg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163eeopoezo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hqhtpqvr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163igtwfpai.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jlsrmxfi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163tzmrmocd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163qveeumtk.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pzljdzmj.html

println("Hello")
来源：http://www.xuanzx.com/163ddokihig.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163basvlnyc.html


<!-- 参考信息 -->