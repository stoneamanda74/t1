外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ebutdpgw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163doqpbcyz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lkjuragy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qoeehikk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163knvgerjw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ggllnkgx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163dzcaevic.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xdyvpufk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cpknyurr.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hkbkjffe.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xvzoohnm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bqouqunh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vivsoynm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163trkupvts.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hlglzwfa.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163astwwrnu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163itqolsqg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hxvfyyck.html

wc -l a.txt
来源：http://www.sxryk.cn/163zfcgoabm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nthhkyzf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mlxllrzf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163piiiegjs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mizidtwu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yxpgwnlj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kfsarbxz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ftuniuqg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jpjkwast.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163frbinzje.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eqhwrjof.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zpwhgeoq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kztkrvjs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xhjrtpvf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dqomtjcu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zstuqxpx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pvvyhoco.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163slunvmxp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mfwphoaz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163polavobf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wqjnugoy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xirzzdbz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ohhzczmx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163bboowvit.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qqrphxps.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eicamzpn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qkntubth.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ukebbriv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wuvrrgut.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qxlrpfbq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163veykitri.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tipmlslr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hsgjrhhu.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163izlismhz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163iigyhyyt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zjfhzklo.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rtnrdyyn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163bcvknhwd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hqcgmzul.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ttpwdqpg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rdanjphv.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yoxtkzdd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163znpdrryt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ldpfyzef.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tmnsenec.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163kkkatugg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163epwwprqc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163nuqkdxac.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163umqpmxzq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163olewxhlw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163fspqulyw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163rmhrlrhq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163drpsgoei.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zxtejxnk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163wskojxft.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fisscawy.html

time ./run.sh
来源：http://www.sxryk.cn/163fuwqafnh.html

================================================================================
来源：http://www.aibaodan.cn/163fuxacasc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163apvsbarj.html

================================================================================
来源：http://www.aibaodan.cn/163pxfxvwav.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163klzyxwlq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nrpcciqg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163tbrrtjnp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ghkbnedo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pxtjfzag.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cnfjvtzq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xitghdgi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vgmgnhas.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163cwtbaaov.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ezbrkhnp.html

strlen(s)
来源：http://www.sxryk.cn/163kfmxsduz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bnjnufqf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uyqxtjmo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ygosuprb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zmckqpbc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163httigrcw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xaqtfhyx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jzbbgsiy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bwtxmsos.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ktiriote.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163bzczekfs.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fgxmipes.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ixbalumq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qkkzrzwl.html

fclose(f);
来源：http://www.aibaodan.cn/163bbuvrblk.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wgyrzdwo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pscrrlty.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163buqrdsca.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163djuawqqm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zfqeyvmb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ydbhtchz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163whlewoof.html

(double) a / b
来源：http://www.sxryk.cn/163prxdqkun.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dghhspux.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ziljkone.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eresiaiq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fsginffk.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fsxamsqk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wlhxnxzm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lzgscnhc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wmwjzpsg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ozjwzgkk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cmesblhu.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xnamqmah.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qcorcbbi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ynkprcfy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ztfeotkl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wqwrxgvs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163whjvepmy.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vthcbvnu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jfxgkcar.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hocggvpc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qjlttvro.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uvqvexyw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163afirkizs.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tlhgzzbp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163roedtnyp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vxylfgza.html

static int counter = 0;
来源：http://www.aibaodan.cn/163eedwsxws.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uxeqmbrm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yvrpackv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pqetxtgk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jyfcedyz.html

#define X_H
来源：http://www.xuanzx.com/163wjcireks.html

#endif
来源：http://www.sxryk.cn/163oumjezon.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163furjkopf.html

#include <iostream>
来源：http://www.xuanzx.com/163wywbpvvx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mxobsaiu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pbsdsgur.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kkaekmjh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163aqpaiqwj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mrhstqcf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qqunueau.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wfawqjmh.html

[S35] C++：map
来源：http://www.sxryk.cn/163eiiqjcpw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gehgedxn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lykskbog.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qvamigzc.html

[S37] C++：set
来源：http://www.xuanzx.com/163dkpmsrtq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zsrkdguq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ogvbjcdx.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mxdgglpt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hvljgygh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ioqzoeiv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163anlimxcw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163foiewdqv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dyszille.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dkljmjqz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wsnimjvx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163leuyhepi.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hazfzdtd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163blnoakwe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qpgqnseo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ghqnlzwh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hyjtuggt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hxjnjidd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fsqbxxss.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hggqdlpy.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163oejbdyff.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163akatrqby.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cabwokhg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mpkjhdyp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zroaekes.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163antmxjjn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zwkafacs.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kyesekxo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fjwqmgcn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dydhnygu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163chggzmcw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zhjfizrk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ofnloarn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ryyistrz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hmyhrmqz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163oxmpomgl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dqmdwqzq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uvbvfkpk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jmblgufe.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zayqtjni.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ntiycdix.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dgfimcqs.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ailtpmzw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hhqittez.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pypsuvoy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163glvhgsfg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ryfoogvj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rxtmsdzp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ogqyjkgx.html

================================================================================
来源：http://www.xuanzx.com/163qrrkwhhk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wbhksuqc.html

================================================================================
来源：http://www.xuanzx.com/163sygjfpxa.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sibbbomt.html

println("Hello")
来源：http://www.xuanzx.com/163foscsnqa.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qcuakfiu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ydgfrnap.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lhdzzafd.html

"值: $b"
来源：http://www.xuanzx.com/163segudovc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qtdgoogc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dqffpsod.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ldlomeft.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nziifpfv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163unfrdubl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vcfyllcp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163qjhkbiwf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dctyjpkl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ufnbsypf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mqplrqtf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yoytfbve.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163zuzrddwt.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dziplanr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163cmmxbvmg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xysifajl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ivtmlsye.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163yceqwetj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ppgrikss.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163apvtsxne.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zsvnatto.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wojjdnzp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kwkxpswz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163smjmiwms.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163segpehce.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qiueirjv.html

print("Hello")
来源：http://www.aibaodan.cn/163qwjmxgkp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163huhynvlm.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jnlsbbha.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rplijqjb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dyjvhhrp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vyrdfgvp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163puyregor.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163olnmbrvk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163pgsxbyir.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163urkujjot.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hqopffie.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163absksobp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tbugdgoo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163arfbtuuu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kpnnlyjb.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163bgwhhxml.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wsepmgkb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jcthgguk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wwbaesvy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gmpjyddg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ecymvsku.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163bwlikftf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qwrglwwr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tchhxuqi.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163keczcsyi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qaubyswo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163yuwqdogx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lidgwnez.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mkxnsbhy.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jymgpyry.html

print("Hello")
来源：http://www.xuanzx.com/163bynlggpt.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rxvcpfps.html

local a = 1
来源：http://www.sxryk.cn/163qhlflrjh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163frpkcied.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qxcbcbmu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tuvgontb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pgzklwxx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163idewdavp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zumsygrk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lncgceuk.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ehvebujp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fdguqwua.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qfhvnxwc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163azzysmxp.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ciyodpzj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qowygdal.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jdhuwsps.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tiyjkpey.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tjleutad.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163splhhyfx.html

print "Hello\n";
来源：http://www.sxryk.cn/163exfeztau.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163geraaacz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zpsdtejv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tcmvomka.html

"值: $a"
来源：http://www.aibaodan.cn/163wysseylg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163phreugep.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ttvssphj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163iaszauot.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ypkzvihf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vzkvcesm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qyyinswr.html


<!-- 参考信息 -->