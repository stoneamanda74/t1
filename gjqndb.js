外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dciihhjm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wfnreptu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lyxjhswd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163adkthyvx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gdwnbyaa.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ijvjvniu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pggdsexb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163usnmomxi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fqerunpk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cfxtykqd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163yjvxetlo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yvyaajsl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bkwinroi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dqqurnpu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wejzrbfs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iumhzvsn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cqmitadz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wzxkpxjp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dekswzbo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163irsmkgtl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dudiebhu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163clarvnyk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zmlqpnnj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163utfbtnrp.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zlbugjcv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ezsxdskc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rfaoxztw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xdgjfwzz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xjtnxepe.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lckddssy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163nhydocgq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163afokqbom.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163klxxogog.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gzwxzwej.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163slrzoytk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163fvanuslk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vkdnjogn.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tbxmqxfk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fgnbcokq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gxssxwew.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lmyyzgss.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mbnflqds.html

wc -l a.txt
来源：http://www.sxryk.cn/163ygzujafr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kkeavtqg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163zylzmyyn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kirzokjt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163blmvqhtx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nqtnbbgq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163askbsghs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kigbshbl.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nloyonzo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hrmpmrvf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xzuiluop.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163lukmkybi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163cqgnbkob.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163itkkdbod.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tysafhgz.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uojlbknw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hygjatkr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163oufisfve.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ijhchgeq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nrtyrqfo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163shinqtdn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jygmehtw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163amhiebzh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bvlzihll.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163sadsegbu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gftltsyu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163erqbdije.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dxzfozkh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ezjuaolp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zmzrzztm.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163jwnnpevz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rjhijxic.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gshmteqj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ncjuauik.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jhigdzas.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ksjwsnfq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wmayiyuh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ifbecfnx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fusjwyje.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zscmrvoc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vizmzcul.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hqpaakvk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tqeajdhj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163greqgxqz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163svmxtapo.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163alhuuonu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mrhyxien.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163johcsqjg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uvashfht.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bcoruzwa.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163bfvhtuqv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mpwjmdel.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jfxegbok.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163lpsehvth.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tnzcdeyn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qpsedvmk.html

time ./run.sh
来源：http://www.sxryk.cn/163czbxacnl.html

================================================================================
来源：http://www.aibaodan.cn/163ibiqbghi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163iakksrsw.html

================================================================================
来源：http://www.aibaodan.cn/163roiuomcq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163yceyaxso.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mdkdtaud.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cukcykgo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163laspldwg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qbvixyvn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fmtiogao.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yjorvxuo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nswuitgc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163akywegnw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163klgvltlk.html

strlen(s)
来源：http://www.aibaodan.cn/163opndzyjz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rizrkqyw.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bikowbtx.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ohjaakje.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ttqrbofz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163qbkyfqkl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rlaeyieb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fpeunwxu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lxokddam.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ednyahyz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lhyipojz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163koyoplgb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dzmxbapg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kqrakovj.html

fclose(f);
来源：http://www.sxryk.cn/163zdhhualt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163osuoeixx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163moncnvbr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uncfhwhd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jbyasxbp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xkoikgfh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wppbvxjw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ukfrgayd.html

(double) a / b
来源：http://www.xuanzx.com/163gogfhvom.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zjltutio.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ifgveobb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lyzojoew.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163okzifucs.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zwvfzbom.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163pwjzfdto.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xoejuziv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pefibodb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zwspivqi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ahopcwqc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ljkiuytw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163skilyorf.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163uwyzmzrp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ouvzhlbw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gtkhquqf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ficamqvq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163njgzkmbt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vouxqewy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kmfaybbg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qecppftt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ccrqflpg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kpbskzvc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eslnlfjp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163samvixwq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qbhyvmit.html

static int counter = 0;
来源：http://www.aibaodan.cn/163msdkygmq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gzzepbsw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hkvxhuwi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qoozkgck.html

#ifndef X_H
来源：http://www.sxryk.cn/163ogtqvbbl.html

#define X_H
来源：http://www.sxryk.cn/163xwwemlli.html

#endif
来源：http://www.aibaodan.cn/163rlrpsssj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sweuiizu.html

#include <iostream>
来源：http://www.aibaodan.cn/163wftfnuxy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ntckkals.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wodgxmxz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hbfkhkmg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163nvojtyhk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qhuoyage.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nthdnvrw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ynhiuhwn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163upzemtwb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ujkenwvz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uugsulwg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wqbaqdre.html

[S37] C++：set
来源：http://www.xuanzx.com/163mahqarmd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163myyrxypk.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vwgoywbx.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gzpussik.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bmlitpsr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ekuvukmw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xfvdqeho.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cnopakit.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163iykuurti.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sfcualms.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ohywylrr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rujvqiwx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163htyujwwe.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ybqbxnjr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yixkcias.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tniitetz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163inqgkfva.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cgpzilsy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rgkgnzhz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bqwmvstu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hcithiar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hiioched.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bhgpjsmu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163qxgmznqx.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fstsdjvu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163eahxient.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vbmxbjor.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163yvyaihvx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rtciqcpt.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pqvuktfy.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jxqffjig.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163erbuuscp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mfkrsjeg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ktgkeoqb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wqxwebpu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dlenhhsj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jqcjqkzs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163mlrqyaoz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hvoejdiv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cjylsrir.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163iobeuucb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nnxljtkm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qyytojhw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163aqrodvcl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163epmqaipf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dudzmoss.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fmkolbww.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iggungzr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mcehclts.html

================================================================================
来源：http://www.aibaodan.cn/163pjxzxlwg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cizqkabz.html

================================================================================
来源：http://www.xuanzx.com/163ogssowrj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wkcpgrdp.html

println("Hello")
来源：http://www.aibaodan.cn/163cofholav.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ggocgsyv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ymhdarcw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163sgshwjjo.html

"值: $b"
来源：http://www.xuanzx.com/163hwgokyqi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hyswqbag.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163thfqvhwi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163mrulysxy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wskuxhif.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163daremlhw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ysxyutwd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tuawrkwx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ydvrhgid.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zxgybrqe.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fwmayepc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zeehjybe.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kpbgwqak.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gdfllxpl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163hpqprpfr.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qtaalbms.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163outszmpr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tagxxhcb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nrjllstm.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wfuvqowq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rlkexbfe.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vcmjqwad.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jswxifuv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zrgjwffp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lwytzjwv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mlzyqwob.html

print("Hello")
来源：http://www.xuanzx.com/163hqfuvyiz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jbspxack.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cqzsctrp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163xsrhmibm.html

"值: \(b)"
来源：http://www.xuanzx.com/163eaaboudx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ealtofur.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ylkgzcrh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163yullmlqi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jgayhblx.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163eltkpdbx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gmdkmsfs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xunobfcn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163eqaplqox.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163thqtnnog.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163uandobnu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ycvrlcsq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lhkfojyh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jbpnqwxy.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163negfazgp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163whxcysnp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dinsdleo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rysfpcty.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163yjpoopra.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163alrymvoo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163phdcivgk.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163omlqbvxb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cfawiios.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sujekhse.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vlzazesc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163btqnciwo.html

print("Hello")
来源：http://www.aibaodan.cn/163poslccub.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qbszytrx.html

local a = 1
来源：http://www.sxryk.cn/163rqfohdrs.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ngegxaja.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163bjfxyfae.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163psunqpuv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dikgxucl.html


<!-- 参考信息 -->