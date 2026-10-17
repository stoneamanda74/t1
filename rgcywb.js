外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ttlyjber.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xmgfihnf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vkceytty.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163moxlxrtv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bkqmbszp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rfteacgu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jyivmrsu.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ishnkihz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ityaunef.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163flppuxzx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163elqjvoei.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gtjusntu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163enxmcnba.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vvdbjvlp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xisnqbcf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mlwljaiy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kfbgqwie.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163klsalfoj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xngqlflh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nieajhsr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qrbkfvwq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zllkqwkq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ubnjecba.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163oxhkmkxo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xxwertgu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tcgxhuax.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qwiecgck.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163eublqgjz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zlcizqyj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163wgqtumxo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163fzqudjgd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wwdlezzx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qwlwzezk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163umsjkwiz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mgtqgibm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163dqoobxeo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163opvmmbrw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zdskyiqd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kcekdfea.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163cbzhkmwc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mspnomha.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yekfualq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bdyvxwza.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ygrpypfj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163tmhfwyux.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wfcoiucw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jghquzce.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rrhtawed.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qrwrmiec.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163orkrxaym.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163oxrrvdrf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ncgqsxhd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jympjnbm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163iyeknfmr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kymjzoje.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hisddmvf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163cyuvwnpb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163iwdperym.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163airogapm.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nglnejxi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ipwjjzct.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163whlmdpwi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pfojhyum.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pyltbpqn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163eoddpogw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163pfolawet.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ufntnsji.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lclarhyn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163dttkgmyk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wclbbsmg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163olmddyyi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xwdphnfn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yfmoitjd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163igfmyrvy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pjwdzgfa.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163atscskyp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ibesoyys.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163owiauwxe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163snahutwl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163obuhjfew.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lsgveamd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163nzrgmdpx.html

time ./run.sh
来源：http://www.sxryk.cn/163vedtxawy.html

================================================================================
来源：http://www.aibaodan.cn/163tusvxkpd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tttbluwz.html

================================================================================
来源：http://www.xuanzx.com/163ekqwtcxd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vbctunby.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kxcudgrv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qgikimen.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mbydzdoa.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163xhumysql.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qbikogrf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hofyaexi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xmfryxfm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163cbiqttwj.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163srxesljl.html

strlen(s)
来源：http://www.aibaodan.cn/163vhdrixgt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vrnfvjkv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163lxpdawuf.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bitsafpk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163npkvdzgv.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vpjobmsb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wbryvdsx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bzbmqeot.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163liyckrul.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gmtxrhwk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163arypjprb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163dgpjwgrm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163arqdjrtm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kzurunrd.html

fclose(f);
来源：http://www.sxryk.cn/163yjkoeoly.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nrvjyvbf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163duxbftcc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ackgzyzb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hgamvcwl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xuroomuj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xrucqqhj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lgoygida.html

(double) a / b
来源：http://www.sxryk.cn/163oshwuzdr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xjjhefkz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rabgrnhv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nivqhqvz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163sklcjmgb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ehmswnzg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sxnobkvk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qfuxpqbk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wvsjcmpu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ugjygohc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163inaylwdh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bfmykjem.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vaorjnpx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kwyeldcg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163oqlgzbeu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163svmylszu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hkqypwsp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163wxxfirss.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pvmwlrvh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cnynscct.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hjonoizl.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hezxantt.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dtvrpcal.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yaiyyuxl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zgbrjzrt.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fppngqgr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nnehzeic.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ykdfwvjn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jusrcyqt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163huqbvrkt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bgtuexiq.html

#define X_H
来源：http://www.sxryk.cn/163mfianznh.html

#endif
来源：http://www.aibaodan.cn/163dvbfmypr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uhxptkgk.html

#include <iostream>
来源：http://www.sxryk.cn/163jodisszo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uwyzistn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hsakejdi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mqaqupyy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163auwohcen.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163xncrjjzp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jvxuubye.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mjttiezc.html

[S35] C++：map
来源：http://www.sxryk.cn/163acaeglyg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zsjidnsy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qodkmttt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tcwfucsr.html

[S37] C++：set
来源：http://www.sxryk.cn/163fbvpqvtt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bcpiyfxs.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fihtufli.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mjdiiige.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gzkkysmn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qjdnomyk.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163lyqtwmqw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dcrhzbbf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lzmvhmvk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vhzlmhkn.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lqwvblaq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ocpxlekd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wzxfyzug.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163apfhffsc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jsxhkrpe.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163hguparbl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lcsppupi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hoyahpip.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rsxfrwnb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ofatsqqn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wseehvtx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163klcqsdve.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163amqufvty.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rokmgcxp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nlkeypln.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163apztdsxq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ulxyasja.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163toshxhdp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sgzhtywk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163suhatrzf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163aadmexxo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163sbkfbear.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lwulymze.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gtsqmsur.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163copekzfp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lueucudx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ozjajpov.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163papwemdu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jmsqpfub.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cselwgkd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ldgolqmr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163temzpibw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163knfhjvng.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xmjrrcvk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kynrjgke.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kihvjapb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163tnamwixl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163soczneqb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gckeahjo.html

================================================================================
来源：http://www.xuanzx.com/163mxczfpxn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ahrwaxsq.html

================================================================================
来源：http://www.sxryk.cn/163lalqvdcu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pgpzdsps.html

println("Hello")
来源：http://www.sxryk.cn/163fyzosapi.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qmtfnyvv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tdowmiev.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163uurgvsdm.html

"值: $b"
来源：http://www.sxryk.cn/163tjfbjhvr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zpgwruxj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zuuemfii.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yfsgjxom.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163dkqzcfiu.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163irgptyqf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ynsgchbo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ctolbuqj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hsfldqvc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163etxhygjo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163uneujnvo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ehrdggcc.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wbwrusbh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zkbjeske.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vbptesje.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163qjjqqwal.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163yulllgog.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cuatxptx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cleuvlcq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qutcxrgh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wfxjncrb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163buebltwm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vgprixww.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qmsagpgo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nujgtfnb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163maavoufg.html

print("Hello")
来源：http://www.xuanzx.com/163yqqbvcdn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rubcvjvc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163eyaxdaek.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bizzonaa.html

"值: \(b)"
来源：http://www.xuanzx.com/163xfquqhby.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dugotgnc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lqjwjmop.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ojucavsq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zkxjjnhe.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163sarpjbzo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163oejqword.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qsqvloni.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dynetvtw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mgzmtlcs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mydedeep.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jgyubpjr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163sdidcyhf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nlotgjzy.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gxtkxvvh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xbsfvqzt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qepygwtq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ixdktbfq.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fjfpaiuk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ooldtrzz.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ygfolqns.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dqasvubg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163shnojflb.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163khysbbum.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163chucusig.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hoodieub.html

print("Hello")
来源：http://www.xuanzx.com/163hurnjtmf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163yvigsxca.html

local a = 1
来源：http://www.sxryk.cn/163ejyoayfk.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163pfzwnsjp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yrdlvlje.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163oxnnpawt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163trkvfhsi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dbctqmbn.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jhvtomcy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kcdtepxm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ogezhghy.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vnlwfrfy.html

"a" .. "b"
来源：http://www.xuanzx.com/163urgjkulr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bggsqsqp.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hkjuywsw.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163utcsfydm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kanvleok.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163zwjgeeoy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dvmaqvmy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163immrceig.html

print "Hello\n";
来源：http://www.sxryk.cn/163cnefcjow.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163afbzpbdf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pyerqakh.html


<!-- 参考信息 -->