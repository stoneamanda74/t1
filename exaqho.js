外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hricbbra.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hccmsbuo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wzjejhic.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ffexvgne.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xmhwhvqr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hgknfthn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jcsozjxj.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hxonmxzo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ffaubpyi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hthqgkds.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zqpbxscu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rtqdjfng.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ftwnfxpf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163trcfthhs.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ocrzjkzd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xjefskwq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163qflqijtu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ivgbyytb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lhxorvrh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163sgjvurew.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163svlehnus.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xcregymw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qmlqwnfr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hslryeql.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ljfgxdzn.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jayvkirp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ietmlhwv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wwogyysy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163odvpgadw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163sunzwtou.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pgiuvzit.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163invquoxe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wkpfhdwe.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163cabomxbj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ipyanpdb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xxmhaoug.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ldlrrueg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dnaqmguo.html

wc -l a.txt
来源：http://www.sxryk.cn/163gxerwbsm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163owftpwod.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lwdwkmok.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pbqgpuvz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nktggfrp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rorpyrph.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ylwvjawd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vzfxgxkn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163htkplnoo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163eovcelbb.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fvxikrgm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163atazgrzx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jiasdzap.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vzqhwxyc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aktrpuvw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kxbqkmke.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kaobliwz.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163cazpgbam.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qlrapizd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ilskdhaw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ivwuyakj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163affbsalo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jenyaqkb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hcoyjyqg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ymdhaqdq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ygqbzmdn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rjkimkee.html

[R66] 定时任务
来源：http://www.sxryk.cn/163owtrhhko.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kjxavand.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jemvnskk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ygsdedrz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bqwttahh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ccdezyah.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ijfyphva.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nywfhbhg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hjiytkwd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tmiwqgmj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163onewflif.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rtwtpqbt.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rllrtmkv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ppbwsbhw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ebuqlvza.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163obcqospj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ejkzkolb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163avpoxvdb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tdkzumxq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163guqdfzfx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ihagyojm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ylvhuckt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pobgruox.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163oepvykts.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lywcpodt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jqnuwsko.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163odbelcel.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jjiewjkl.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fbaqkkrc.html

time ./run.sh
来源：http://www.aibaodan.cn/163zyihhosl.html

================================================================================
来源：http://www.aibaodan.cn/163elecjegx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163znkesrxm.html

================================================================================
来源：http://www.aibaodan.cn/163hppryinv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jdsxjhzv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lfvrpooo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163atvjsipm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zynjqyev.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163joegdtet.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qxvrwnkx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163bihzpwkw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ghuqrcgo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bdjrjpdz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lpxfjkda.html

strlen(s)
来源：http://www.sxryk.cn/163aupbyxtd.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xszupubz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jrqcuhew.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iwzevtbc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wlfnldyn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vocsfnkz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ppjpkrcm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ulmsefzl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163opeyxkht.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163heewggai.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163efudnvtk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163knotueih.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163liieqxpg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dynwrnfn.html

fclose(f);
来源：http://www.aibaodan.cn/163dphejajc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163koagebym.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jtsskvwi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bewxxdtl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jiggbtjb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gfexrgla.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163yowfbfrg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rbcfsiec.html

(double) a / b
来源：http://www.xuanzx.com/163saifnqsw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163emgztuxj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eziggbpb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dyafxgqb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bouboakq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ffqazrtr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dffsubeu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rennxknk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gkzsrjrd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wqwadfvq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mgylyigp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163urykzoec.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wqsmgyeq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163typrzzrr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gltemaun.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ycjznmxy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fqnkvtll.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163iugraxaw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163iallihff.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bdrkprbg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163owbuplpu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ppehxqaz.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mylbabhg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vtcpngfw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kqremxes.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jkvurvxq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163paexbgku.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zmgudimx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163damzklho.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bgzhkdnf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163dduaakam.html

#define X_H
来源：http://www.sxryk.cn/163tbvhlqqz.html

#endif
来源：http://www.sxryk.cn/163loayqknr.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cmerbuum.html

#include <iostream>
来源：http://www.xuanzx.com/163geopdzdg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163hcbjojsw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cunusepb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cybpifjn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163anypiyqk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163phziojbc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163eugkeaym.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ycpwbmdf.html

[S35] C++：map
来源：http://www.sxryk.cn/163bvjntgcr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163utdwsyca.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163baropvgi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qxfsmlfr.html

[S37] C++：set
来源：http://www.sxryk.cn/163bzqvvjhf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163rrdbcwbl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tbgafxnm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wwyqdhqv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dfwpnpxq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ktdmcxfu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fkxfwcxd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163piqtsuhe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kchtdlrw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163foakjkyd.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wnmrsppc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fxylebkh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163xhnkvvsm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163emdactek.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qgzotidk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kuydriio.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163odvdhamx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kbprtohp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dcgeozgn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nifmjvam.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ixftfzuy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fcspcmph.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cstrtboa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fnxqbpcu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lafmbdgp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163amnfrher.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ljqxatxr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wjkygswm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163apmentww.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163khxaqrah.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163myflnwvl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zcdipzif.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qhlprcze.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mzhdypzj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ajugzmqo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ijonreta.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vexzovwn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ivyaayqy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wrklyrnt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ibubzrfe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wzbcukhf.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163romvmats.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163saosdrfd.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pwjftvwu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163bnsnlrob.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ixrjdwcx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163giwwcdda.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yrjrwtsd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bzbrjrko.html

================================================================================
来源：http://www.aibaodan.cn/163wdjxwnni.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jnqxhlmf.html

================================================================================
来源：http://www.sxryk.cn/163apusfnkt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163txlkxtbl.html

println("Hello")
来源：http://www.sxryk.cn/163ywxtrhgd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163jugmzmpm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ttbdzpxk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xodfvkog.html

"值: $b"
来源：http://www.xuanzx.com/163gellogxn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xssepmbt.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xtibcsai.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nkuzhbuk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dbrgudfi.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xtoussiq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mlgqmjft.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fwiomrcd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mrxkomyq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kukgwrgi.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163egourvzb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163znflcups.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qvzkmokw.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163esxkbhyz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tpdlclli.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fhsadovi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163iceqqqqc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qssbvkdv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163czcycdhi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163rsjhurpf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mtcetneu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wmqujfym.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vgwynswq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163llxzlhtx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vkuukjep.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jzycqbiv.html

print("Hello")
来源：http://www.xuanzx.com/163ffmzzhnz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zslptavb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163xwgbtlbk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163okjqafbw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jlgjllak.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vyfqhwls.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dneoihuk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wqnkmxfo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163sbsfcxmy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jzwmldtl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163smfblmik.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mmhcmkbv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dxyckkwh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kjucrhka.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163woeywbiz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ivaedopy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pnrtvqwz.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dylmdhka.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163dlhwkbja.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163udqfrkyp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mkrfwumo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163hypadgwk.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mclzqofb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ukqxvrqx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ivggcsnh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163bjqxkqoe.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tiodrgng.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rejuhieq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xkukwhka.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cbxohpnm.html

print("Hello")
来源：http://www.sxryk.cn/163yzxsufom.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qyabqktf.html

local a = 1
来源：http://www.sxryk.cn/163dtemshlp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163whqftwug.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xqyupjfc.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kubfrbgz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lehbstdp.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163nmfvhyvb.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163pbxvnzvq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163xzjrcijz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163plsohsju.html


<!-- 参考信息 -->