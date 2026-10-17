外链999!wailian999！

files=$(ls -1)
来源：http://www.sxryk.cn/163grqbrxci.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dkczwemr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fqfasrvp.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163dmenbbsg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163broyjunx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fthgpzub.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163evlxkoev.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163iganuivm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cxguseel.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163bzwngape.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vuduzljl.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vjvlrvvm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pivquhga.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163epqiuzai.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163efwkmdkc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gtvvbnnr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ayzwrukc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xzptftrz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rvtrcfbc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163spxafegh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rhpsjzuk.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163apaatyum.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163cxqzbncy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wnlxvbbp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ferovgzr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pttjardh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ujjomhga.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163uwwkjifl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ikgwllve.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163weytsfkd.html

wc -l a.txt
来源：http://www.xuanzx.com/163mvyqsvkg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163onsrmmoc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163taabpkwq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163afoyjwbg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nhkredbs.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hcfsvjne.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163psreoyls.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163budtefdk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rakujjqt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bxjlmuxc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gqtfysou.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uyjkqypz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lfjwhzen.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gxekmakf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163phmppexk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jnpzvzck.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yeeqnijo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zpbagcwl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163dbnnvasa.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163shepxmbk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jhpgdbio.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zhcrgkhm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fzcgloav.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163aenwajnn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kjjmlvlw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163igqlbbas.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rawvravz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xkpzzqbf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lybcmehm.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cexyrewk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163otcevbfo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rhrjikpy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ckqlfkov.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qajiuwct.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bvugqqtr.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nficyvzh.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xqajftlv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163binccpme.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fabmvcjw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kyvrifyd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163duuwotes.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xsrsegam.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pzqzhpyo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nbyepgxl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hsjdxzfr.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xfuwwxcm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163shpfswvj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163htsmxadz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ukwayydo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cgefaneq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mccwldus.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163bpoctsou.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qjhyuoyh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vvrzjqsk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dzjrgpgb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163uthmhtta.html

time ./run.sh
来源：http://www.xuanzx.com/163aqdkweol.html

================================================================================
来源：http://www.aibaodan.cn/163xnuvdttu.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163azlxqeyi.html

================================================================================
来源：http://www.aibaodan.cn/163ladzejup.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lfqhajuw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163owmvubpl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ihvtgqow.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163faantnig.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tmtgbmar.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163kqtamtbo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kkxppelx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nrlxwrsd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jzuskrjs.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163edcrejgb.html

strlen(s)
来源：http://www.xuanzx.com/163pepygoaz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gchqghep.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xztddeed.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yibxrywf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163eehvjymj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nfmnngoe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163luaqkhxw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ghatfwrp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163atmpjmfw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lflqazvt.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zvbspcoc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ghvekwdh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ufwlytip.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163qprvdwcw.html

fclose(f);
来源：http://www.aibaodan.cn/163wycjksni.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bjowtvzz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mqnpgfpu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ceepkadm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pixmisvz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jtamgswc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pjzihpxc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kfccufzt.html

(double) a / b
来源：http://www.xuanzx.com/163ctxfhayd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dmsyklrq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tdjbktsa.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163luqduxea.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ueqdamwy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iqzhzydr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ytmlnkvd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163mvnnjzwi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iuzfjdbc.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163xbcoodga.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ibapvaxm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gabgbjxm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163azkrkbfs.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163svqeyhjs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tzczrvkf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wmstsait.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gxcmrhdk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ssbwwkug.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ubllgeim.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ksfwygzk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163djhshiov.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hcbpibrw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rvucgaqm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tfvnxhdp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tnciylnz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163omocqazg.html

static int counter = 0;
来源：http://www.sxryk.cn/163dndbtwac.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lvjoldyd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qehkbggl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163tvcztltk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163aickwppq.html

#define X_H
来源：http://www.sxryk.cn/163tqqpnxuu.html

#endif
来源：http://www.aibaodan.cn/163fqhvaqee.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cwndiqbf.html

#include <iostream>
来源：http://www.xuanzx.com/163bddafrzg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wtsbtlna.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163moavrsxr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dpdqfvjl.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163iwapjnjo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jizftuus.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gnnazprj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uatpklmf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pfuvgmor.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rxyyawyo.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qwdjehfq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rfhwolah.html

[S37] C++：set
来源：http://www.xuanzx.com/163ichlvass.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163pmlagpxc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hevbwmsz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sqmltrdr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bcyguqhp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ltstcuxx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tgttpcls.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163djbmbmwc.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oilgspxx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163pfchctfs.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163npfczvod.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rbvizdmm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163twsinjkr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mzqotjen.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zhghbyza.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ubxumgyj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fyjjtxug.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vwufnuwz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ngqntovt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qwgpboco.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lyqxbubo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wdpynely.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qedorwuw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rlpqyhbt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tvumrnrw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ctiktbzt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nsoowwga.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mcdjhbrh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ujafprmo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ioaeuwgg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163cnnykzrs.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rdzkvhnv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ehjbozjn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163eifoczhp.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fiqndvzw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kbjqgmwv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vjvjbivm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163kpxvonjx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ozxtncva.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bclvtzgt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ioureoix.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qyimwejp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gygncjoa.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kniryuoq.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ipzkmzmm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yppnolbo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ysgzgahr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gbyuertg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163goglkyye.html

================================================================================
来源：http://www.xuanzx.com/163yhewopuk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mxhxonny.html

================================================================================
来源：http://www.aibaodan.cn/163ftulrrcc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bwxdfkos.html

println("Hello")
来源：http://www.xuanzx.com/163mommymko.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fuaagwgf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dydmiieh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163yxzpqaxy.html

"值: $b"
来源：http://www.aibaodan.cn/163fecxxukl.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163idmzmble.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wfgbzfzu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mnxaerrf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ebpuozrh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uhgjuikf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163bnvaqtgb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fwnocnca.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xpylezve.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ugowiema.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ntwgybkp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tchvobvn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lecvomxg.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gjpeqzon.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rkgwhbwz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163tblusauq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vsejvnpi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mtpdwvoz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hukeqwcf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163awchpyxs.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qdwcilcb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163zxioxbqf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wvesboaw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jgoknntg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jeyrwmtl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wceyyghs.html

print("Hello")
来源：http://www.sxryk.cn/163ekxhptqt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163szglnvrl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163xjzhxktz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xwjsypdc.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rneooefx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163nzanfhun.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163oibltjvg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rcuqlkeq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163aapikzyv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kfjzdbtu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163oiqqvzur.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dhphferx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ypkohhyb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lucrpiqs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163jbimjhvk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163usanuhqj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163osyxuwrq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ihjkldbg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163euclhmvj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xsilkkby.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tfwyspcj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pwjbiylr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ikmjvvns.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163yyvcofhk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lrdwuank.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wompvkbg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nvefuufe.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ikxltljs.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ulvwagts.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jzbnulrm.html

print("Hello")
来源：http://www.aibaodan.cn/163zlhisatk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hmvlzcjg.html

local a = 1
来源：http://www.aibaodan.cn/163skcblduj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163blkknqwk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xhtfcckx.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ahjqcxrm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jftvdftb.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163tirlmttq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nehoxhjj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mexspauj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ehgjigkd.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rdrolxfh.html

"a" .. "b"
来源：http://www.xuanzx.com/163adhswjmq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163mvcasvnx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163uymwnitj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163xflyysge.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pcdhkuog.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163mtetjhds.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163lufltevg.html


<!-- 参考信息 -->