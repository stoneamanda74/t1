外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vleafxkb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163teoogsrz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xrgpiank.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zoktdgsj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hrhiofcy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163exctsrhf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qunsxvlk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163uzbuxrio.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ytyqedda.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bkmbtjbf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tasithks.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163oxpwktuh.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cxzukeng.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163dxzumjyj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163khlujgpd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xvtpumzo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zvricgod.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163bsiijpxj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163crlpzwdv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oztrfkhh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nagzdnfn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rqsvtwyx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ggtfjqhy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163eolxmgyt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163sfkruhks.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mcynvord.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fpvqbhfe.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pgkfmlqp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gcngjjtg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hqnpskky.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163varafdnh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163huuggnfj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qodxnpoh.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gbshdqns.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bkwedfll.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gsaoabgf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163nnlrhwey.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mucmvxjp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163pxrafpxu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163otrsbwam.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163znemlonz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163eeuehzau.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kndokeig.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163seybkgbk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163mbqoznts.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mskoxgpn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vgrfxaut.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163stbokcjl.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163usxmaemv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gqfrxizw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nkvupqmd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tstrtsrw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163firdtozq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zzqeghfy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dhylqsmt.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wydrxvbu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lhftykti.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cypussoh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dnmhzyvg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rfmmpjaa.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163eaueijyd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vwxnxjrn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vuonsyqh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zolwumem.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lpfewfru.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ivnzbucp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qausyalq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rvybhjbv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tmplfxfb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163uymqxpcx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qgeedyye.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163eooxpkbe.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zykvtpok.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163skrqsnbw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cnbzndjx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fwesdmhn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gbdavlzh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qtmeueom.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mnlokaqy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163skbkfbkq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wigusiyo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163eykqwggw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dvsdhkps.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163vphnbppi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mbfngdjh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163wmndupel.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fvupniox.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hqtzjdhm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lwuvenwp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163bfamcofz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163eimlbved.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fqaffiaf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mhzmprwm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163riwxttmr.html

time ./run.sh
来源：http://www.aibaodan.cn/163tusoinqg.html

================================================================================
来源：http://www.aibaodan.cn/163jjutxetm.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bvlfqmps.html

================================================================================
来源：http://www.sxryk.cn/163qcpyxokf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fprwhmjg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ifymxynt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hdslibnp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xjdwvgcz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vsvplsnm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fqjzedqu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163btoqrxqy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lenlqytd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mrpqsoqw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ezvuyxvh.html

strlen(s)
来源：http://www.sxryk.cn/163iwqfwwoh.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wgwuxbsf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oprnrsgd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163toemhgxo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163yqvaddjj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jqydlhgj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bbafgwkc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163krgkjcya.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zjmnlipy.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163flmjlrza.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163crliohot.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kdcpglvj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yzlnxwoe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hvetygsq.html

fclose(f);
来源：http://www.aibaodan.cn/163ywsfiwad.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pbvguhja.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gwhtuhcm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zukyynjt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163glxnghgr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qhbqdwew.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bqxmxcak.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163pkydskls.html

(double) a / b
来源：http://www.xuanzx.com/163rrcpkqrb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jgrzicbn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tnnwimot.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zppguotw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dptiipcf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wclcwgpn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163pwcsijdq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163algpqvlv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lxcbvvhp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163froxwrll.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hrhelgip.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sgkzsubj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mmqombyd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pfrkzxjv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lyrfzfwa.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163anotynjk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ybirtlnj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163eumhmkrl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163egqbwqvb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163lpjyyumv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dpbqevqt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wmynxkdq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mkdvkqqi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163oyfrteip.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163spzicfph.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ltkdfikk.html

static int counter = 0;
来源：http://www.sxryk.cn/163ynoiqmkm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ariknaqu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163guvldpfp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bjcgqyux.html

#ifndef X_H
来源：http://www.xuanzx.com/163phjspgyd.html

#define X_H
来源：http://www.xuanzx.com/163lxcfanki.html

#endif
来源：http://www.xuanzx.com/163gvaptfwj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163thrownff.html

#include <iostream>
来源：http://www.xuanzx.com/163sswdnyrv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qieitaqw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cpwkejuk.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zzahfvws.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gdnccxwp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kjhsbwcz.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fvufhtwe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163rqabkziv.html

[S35] C++：map
来源：http://www.xuanzx.com/163qfiwjabb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mgtyvozq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lnuehpdo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rcrftnch.html

[S37] C++：set
来源：http://www.xuanzx.com/163kwimfawg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yllhndsh.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yiczxktv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ektsbcgk.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163btbmjfbc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lhmkmxjn.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kjvcgpdg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ixjjdtki.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bgwtvvda.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163iezpdchc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163akdrzzzd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dbsmjomv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163trfyajnu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vomdmezf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163krcrswbp.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ixaxkisi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163artnlndc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uycayzau.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vtekuweb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163joyunfuk.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qlziuihs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163tjsvjbdk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163flikugiy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zbqkeniz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tdqbusse.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yklnfqvp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pwkobcit.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yaeybmny.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cepjjkad.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163reawkmtx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163girufomc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163shawrtip.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gfkbxuuj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xlqfryed.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163jmpwmcac.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ewtcreni.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xifmweyx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163syhyocri.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lntodmda.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jbucqucn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ekumgilt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lsaqheei.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fgtmxszo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163svnnjjnv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ctqraxmy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wzvtklxg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163nkpnbcbs.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zskmjfbg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aohiigzl.html

================================================================================
来源：http://www.aibaodan.cn/163iopmvmnc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rvdvjrdu.html

================================================================================
来源：http://www.xuanzx.com/163rrguficx.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rgsuukeo.html

println("Hello")
来源：http://www.aibaodan.cn/163tdymgzfm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163klpszbsy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lpgwjfzz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jlunklnz.html

"值: $b"
来源：http://www.aibaodan.cn/163sxqwylyu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163oaoumvbu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hmnuxwzo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ccnmdifu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lcvdkimr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163carmnjbr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xspuxyvi.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jgctvvhg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hwlyaefb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ywvqbwjs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wlyyanvk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lcjknysl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163crpwbpyk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163olxouunl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dfsohbhr.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rfnvttmd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163drejkmpm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kjklklsc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163pojavrus.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bhdxtfki.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nvaiiuhi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hykxfaoh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ckerzyrk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uxhuzznc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ztbzvfkc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163loahofcd.html

print("Hello")
来源：http://www.aibaodan.cn/163nsfgylsa.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163owhwiird.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163xwbsdthk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lecbdawm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ceiuwccx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nujncnat.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gmyergyq.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163splwayog.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163vdlmsdud.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zviyeuza.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163soqkjvnv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ppkdmrbm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xeppczyo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163censrnjf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zkjzpaqx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ccmmcysf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163plqebzlg.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qpdbtxsy.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qettuozv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ubhjucpc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xzlsyxwr.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zjfsypws.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163czquigbv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uetbqazc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163onhbcedk.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tsqtqcty.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163eagzctez.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kjpynnbu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163avccumwl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163oeiumffb.html

print("Hello")
来源：http://www.xuanzx.com/163gmcnrrnk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qosjqimg.html

local a = 1
来源：http://www.xuanzx.com/163pehbwwaa.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163dosuewyg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163swdsfprc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163izbjdnmo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ezhexpsn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vphjfsds.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kktsdabg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bkgkoeeu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ntdjnsyk.html


<!-- 参考信息 -->