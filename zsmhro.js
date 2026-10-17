外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hvofwqhj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ieorxjoo.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qidediah.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163svehwrbw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163blznixzc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cozfppkj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wlnavqic.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rwjprcol.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iolqqopt.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163msjtuovi.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kqwntbyw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163utxliumi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rrwfutft.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pcqtwxwt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jbnaevlb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vbhopihi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qozwtmyi.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ioordupa.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wkuvushu.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xyflujfn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163funsnjuk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nrapbdry.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163pyxoahjv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163baaxwdsk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xvqozyws.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vjqsbxed.html

wc -l a.txt
来源：http://www.xuanzx.com/163tryxczkt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dxwphwxt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dtanxhgr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ljozyiad.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163eefdldoq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vciklmry.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163whivduln.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ceupwdvr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mthagntt.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qadezwuu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wvuzqyjb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vzwedcuw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163yajozsan.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163iiguxqwt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cbegdeqd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jqvfcwdi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163auaadmea.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pbvovxft.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vfyewsyd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163favzkqtq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qbewupcu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vvojiwer.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163evobnzyd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kwsziwzy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dmhyoric.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163poilldmf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hxoyphox.html

[R66] 定时任务
来源：http://www.xuanzx.com/163oodgbcpx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zdmsjiji.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kldghqtd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vxpvkyfx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bycgdcer.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qpnqyjxt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163njttcokh.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mcpotook.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tccugfts.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nthmixnz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163otquinut.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hgibuqbp.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ciafiwcc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163oggmlxkx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163usyepodv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qlnzqjaj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ocnfdhxk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ltvhhvvb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lixahkqi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jvvqguow.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uttdoagd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zihnlqlr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mpxatpek.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rpvdcwwo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sxuyxyas.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tkceojjl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nqrvuczf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qqvxcjyl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163iyqjurad.html

time ./run.sh
来源：http://www.aibaodan.cn/163ajbwhkhg.html

================================================================================
来源：http://www.aibaodan.cn/163bkqgovaw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jjijzmhf.html

================================================================================
来源：http://www.aibaodan.cn/163rvejapkr.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zezdecnq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163twgywuhn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mqieknxo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jqylwflu.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163sbcilqjn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163eubjwlri.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uyemzmzy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qnvmhstk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163erjxdpbh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ezpuodwm.html

strlen(s)
来源：http://www.aibaodan.cn/163sugcdzte.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pzyvgruv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vutkpheh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163aelzgdyb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vhfkhlku.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qltptuzm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163erwriyvu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xctmydop.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xlehrwjp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ivdbidhi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163egoufxqq.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163yhvirrgs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ddfvvwar.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163icpwizri.html

fclose(f);
来源：http://www.xuanzx.com/163conwxmnq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163iiuefdfy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pumpnzom.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pdkctwej.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163snsliyke.html

[S14] C：枚举
来源：http://www.sxryk.cn/163opgbgrmv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163iixnqeet.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mennbgpu.html

(double) a / b
来源：http://www.xuanzx.com/163xcrwzxhs.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ydgkphha.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rienxifg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xuxeqemq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cdgfqstv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kxhkveqf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wmfftovz.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163egurawbv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tjyhjvfn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vhlfhhzl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163szyhokpo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dlqnycni.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ndffgdgi.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163sviefugx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pgfociew.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zzqzfrcr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kdvkvcav.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gamdvkyw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163upweqqav.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163iwxqvufn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163swdtgywc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163haxlbcha.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hsxlpqbv.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xdjpzvey.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xrdaivkc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rdhsnafk.html

static int counter = 0;
来源：http://www.xuanzx.com/163pcgorcyh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lhfgybmb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dbffwjpe.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zkczcsju.html

#ifndef X_H
来源：http://www.sxryk.cn/163jpwjycwv.html

#define X_H
来源：http://www.xuanzx.com/163fakosoqg.html

#endif
来源：http://www.xuanzx.com/163hppftuty.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163inumbegj.html

#include <iostream>
来源：http://www.xuanzx.com/163dmorjcdv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nemolors.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xadabvof.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vkwzazot.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fydmnjxq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ooqvxrtq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kklmxahl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mnaskjea.html

[S35] C++：map
来源：http://www.xuanzx.com/163mmbbhjwv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fpfljmjf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tibkvcsf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qpfzehxy.html

[S37] C++：set
来源：http://www.xuanzx.com/163wtheygvo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xytzlubb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dyetrvyf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ycisgtgz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163oaclispr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zwogokzm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163okivjedz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qrlomfvd.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lzvdbfxg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gzgcpxgz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163itwqkdoa.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qqdhdcun.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163fpsewjrm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vpaiwbzq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wcqxgofz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163edgjhhkg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cwzhqkut.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hhvpitkx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qshspcsr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jyasuhry.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lecywczb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hczccfbq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163akhlsnvi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bilqhbmo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dcijwuom.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qmndjnoo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tekvildm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rexkmkln.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zjcdyxun.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163sysyswsq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163fpmdnwtf.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gqqufyfe.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163oeaxpqmg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hobavhji.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yxxwdhaf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vozkrcyc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nzslcpgi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wfdiimac.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eeyylkuh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hrbzblav.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kguklpmh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nqkyalgn.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163exypxmrg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qmqtkwny.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163iqilnprj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163potzklcg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163khprltsy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163esiiutky.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aibaaivl.html

================================================================================
来源：http://www.aibaodan.cn/163zqrrlpga.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fglwilyx.html

================================================================================
来源：http://www.xuanzx.com/163ilxjyjkt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mxjnzlqz.html

println("Hello")
来源：http://www.sxryk.cn/163quaomrao.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163llwygxac.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ylykcwcn.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pshilcqo.html

"值: $b"
来源：http://www.xuanzx.com/163lsgzfnhz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fikqlfqz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dooakqrz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cofbwnft.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jwfwuetq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rpywdxgm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163cpdtmnkf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rtomtkvf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ovacrhdz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jvglxipz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gyzmjsjc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163odqsrzrs.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163agembyjq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zkgxrxca.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mfilaopi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163oyucvuse.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163obhekoah.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zybdkkku.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ecmlwcgh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xufndgqi.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qaynhgpu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jgmlroek.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163kfbvzfzx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gknkbdug.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bsiyplzt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hymkynpf.html

print("Hello")
来源：http://www.aibaodan.cn/163hicendei.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gjvyqyog.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163frnrxlax.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163irbyquny.html

"值: \(b)"
来源：http://www.xuanzx.com/163cfkvhbdr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qszgcxxv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qtqmwhpb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163sucykeoz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bhigdxiw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vczekzxh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ffyphtfs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qmjbjxpg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dnsoowat.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163yphexvfg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wtuvjtjv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163duhbmggb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gdshimpt.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bfgcgevp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lowjicrl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163wexzguck.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163woqoixxs.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mikiesde.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163uttjplhk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qdhvefue.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163uqqdydbx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163jshusyfh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163psrfctxy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163altpnvjm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163keohdjsz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rrxtcuft.html

print("Hello")
来源：http://www.sxryk.cn/163tjlmbnwg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163dlslbovt.html

local a = 1
来源：http://www.sxryk.cn/163vcuadegw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163prodscal.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qmgplmtu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ivjhxrma.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tuomqopt.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ypsrhttg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jkuklqpq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163anqxalim.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163svithihq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163zixmylmg.html

"a" .. "b"
来源：http://www.xuanzx.com/163qwjcsqfn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163lmzvanut.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mrwbxuej.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163jxctqkzo.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ekxzdjht.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eylerstl.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163opwybqix.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163hxvejawr.html

print "Hello\n";
来源：http://www.xuanzx.com/163ktqpkjqn.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uogydqmi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ubmzqtdu.html


<!-- 参考信息 -->