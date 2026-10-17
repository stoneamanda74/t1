外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xzrixsgs.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hebvafkw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sagsszxz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kftzczhu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jybvzyar.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pgjewssu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mncdwryx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163sikeprhv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vkydnyoc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jjputpuu.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dflqhxri.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jofpmcym.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fulomkks.html

[R50] awk 求和
来源：http://www.sxryk.cn/163azloocdu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hayvrinc.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163eudgvzwm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163amahmkny.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gbygfull.html

wc -l a.txt
来源：http://www.sxryk.cn/163ogwnwkgb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xmalkbcs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163hwbhkjax.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jhffndxv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vrnqgjds.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163epfjzziv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163juvmipws.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jwfvqkmj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qngbfvki.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tfoyessr.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163sbhqfrjq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ewdjzxun.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163abkesbtk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fainptsw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fztxkofk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163snkdqikd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ksabkpec.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xsnaqhje.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kfwzqzqu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rsusmkfj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fsmyfswi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fliqsmyg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kbrwmnpn.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gkjifmar.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xmuxadwr.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zpodumop.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hwabjoxz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163rblivqmj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bxyksupf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163rwjjwrue.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jfwqbgfg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163iibkeqzu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gbroafmz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wpcdeqfm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tpgoqoto.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pbfhrmpk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wpvsnndo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qdkcmuzv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jftlopsr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gygulwnc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xgrmbayi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dgrutybd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qtnppuoz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nkpnoqtz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nshtdzzw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xfrivucy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vftzozfn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yzpujmep.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tnrdmfcj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bekslyim.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pfghejzp.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cocaddgv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gxwyapal.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wmuhkadl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163crfydsuk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zzxdzbnv.html

time ./run.sh
来源：http://www.xuanzx.com/163smhrzinz.html

================================================================================
来源：http://www.xuanzx.com/163zmrjsnbr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fixffioq.html

================================================================================
来源：http://www.aibaodan.cn/163qfsnqzsm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zetrbuzx.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hnumzexx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163txdbzqzv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163afbinlgp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163omocifps.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163etdmmcqc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fjbpihoe.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163aisoqohv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fybjlqor.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163srknvhfk.html

strlen(s)
来源：http://www.aibaodan.cn/163ownvdzej.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dpuwwxqu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163movzkyzk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wdqoviln.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ggqpawlh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hywgxdre.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ngdwqmss.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wyhtixun.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wqspsszk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xhutqwoa.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163aarzxjat.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163iaxcwoyz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hhyoppon.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hudzylkg.html

fclose(f);
来源：http://www.xuanzx.com/163zvtjczsi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fmmmsthc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163tcmhndqz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jlogbsjv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kguqsubl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dgjxkdew.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pvmgyunw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hhctkfxs.html

(double) a / b
来源：http://www.xuanzx.com/163ytweialu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vsctuxrd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kddhdpwa.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uvfaxqdp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163csunlmjs.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ponvzbqe.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163znitqusc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163axqwjmni.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163doorlpkv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wgvkaqnz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oftuuwln.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rmabppxz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163maozfecq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wpzdlazs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vgifebvm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ifbdhupd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rxweurot.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qllzzbum.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vfazugce.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163goiaecrf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hkboiwae.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ukszvghc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163blrnynqk.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oojkahpm.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dwhqioud.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163btjglmco.html

static int counter = 0;
来源：http://www.xuanzx.com/163xiilgube.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kekfipki.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vqppdvbb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163usqeaiqp.html

#ifndef X_H
来源：http://www.xuanzx.com/163bofriqmt.html

#define X_H
来源：http://www.xuanzx.com/163jnoqumes.html

#endif
来源：http://www.aibaodan.cn/163spuopkng.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qaaywpga.html

#include <iostream>
来源：http://www.xuanzx.com/163ahddnxpx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lwcxtqst.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163eehynlal.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ebjkhupp.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163tjcpcjgo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kjyjeyve.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163immdlbig.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163opzcfqtg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pnrusank.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oxzrmeud.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mrcxttfq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pzhqpzzo.html

[S37] C++：set
来源：http://www.sxryk.cn/163bxvqwpra.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ufxrflmm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kwbzphnj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163biitapvi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vglgccho.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rvabowjb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hbtchciz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pnxievnw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iswwqmhb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fcizcksl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lscntgqe.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163lmjtazun.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zrovdkwe.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163sqppmdii.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vonbvqoo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qtdpzxsi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163agpkxxch.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zedfsqgk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gizulena.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wgcdbybp.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pjngcpsx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163yklnxdfy.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fjjbiutk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163cgcvlzyv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yfdjyfwy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pwyevrfx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ltvfyhod.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kvutomum.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163txynjegz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163emoluizb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ysaahgcn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wfvalcrr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163apufaziq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dxearqwt.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ldohsrzv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lzekyuwm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163dopafaxb.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gqzgbaci.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hxmcwekt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vdjnrndj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rykzvbmw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bmhlkpmh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wyhscnbk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163szaepdii.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bgarfljv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fcshldjw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pomtxeen.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163aiidcmiz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xvbwmqvk.html

================================================================================
来源：http://www.aibaodan.cn/163rmsihoad.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163chlcmxdw.html

================================================================================
来源：http://www.xuanzx.com/163knwsnfzg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ymapuvqr.html

println("Hello")
来源：http://www.xuanzx.com/163ktmihple.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163cpizrykm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163drlpmvrd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ojinzyfh.html

"值: $b"
来源：http://www.xuanzx.com/163iawracwa.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vitflnig.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dlfnfsbz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ihenyvem.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pwknhwwf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xrkbizsj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163cnmekrvh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tftkebaz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bswbemxz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163vvcrffja.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163upflenka.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mnnyftoe.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hmlapdep.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163sfktvkti.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dasxggqr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163oltdstrl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pafbqwok.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hweactie.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163eihhixnk.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163aehiihft.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fuxgzdhh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cuxzfyvh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dyxrfciu.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yuctknsd.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bblfqvqh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163cuberrol.html

print("Hello")
来源：http://www.xuanzx.com/163fqzqtkra.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fyiqdynz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163fsirfiad.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qdqrkblq.html

"值: \(b)"
来源：http://www.sxryk.cn/163inmvoczv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pysbjrpd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lrfcdxhr.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163shhykvar.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kzohygal.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163sgzxvqud.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163hyncqjwp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tcnxnimf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163drdgccop.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qjefhcvh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163gqdrtcsr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tdqqvxls.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ltdeepiw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163azdrganb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163axxrbzeh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zbmztgqu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163teiscthi.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kpbvqmvz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wefaydbi.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jlivbsig.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ivksxyxl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wqqzephp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163khqgchjv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nmzmqvbm.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jfypcqlg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nkmiqsmq.html

print("Hello")
来源：http://www.xuanzx.com/163zblspvjv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163watuzagp.html

local a = 1
来源：http://www.aibaodan.cn/163yyruuwor.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163criovyfi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ejqpkvhm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163awjkcslz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kclylndy.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sqqzxckr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qonxpewu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jgbvrour.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hxpamnqj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163juzatmdp.html

"a" .. "b"
来源：http://www.xuanzx.com/163fuwvynua.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163izzatvbi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163teqkauzi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163emyppqck.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163nabwhvuh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163slpsftpc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gnygvnid.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163phwowuyu.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wzmbdwts.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wyuloraz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163keypkmfh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mvbfmcid.html

"值: $a"
来源：http://www.aibaodan.cn/163zwqphrst.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nsrmuozv.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bqkwcjtu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163unnxxttc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163pvsmrtum.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163fxsztkrx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163mkililuv.html


<!-- 参考信息 -->