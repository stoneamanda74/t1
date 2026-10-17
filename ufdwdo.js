外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rzwrpgje.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mygeezqv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gasrmmgq.html

[R29] 定义函数
来源：http://www.sxryk.cn/163yfhpxpwf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xdoelocc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tagdoggg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wkivknfj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163btqcfqir.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tpgdxngx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bmoxumfk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iekbyybi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tayjasnh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kscyuqtp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jvbpxyeo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163adrvadhq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163phwwmvay.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sqwlcojk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dvnezlit.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jjnvhhtj.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163czcmfbne.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bopekhjx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pjlzqspl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qjsdzdsy.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xgzmjyil.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163aqitqnqp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cntfnpna.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163swjqcspk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gpfobaez.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163aicagsbm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jgxxryvi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bspbevzp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mvkbjlqb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qzkvyqzs.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hsiskhnp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rjpcgjmo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pcjttngx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xcxgrzvo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163krvcjvlb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wxrnmfgp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zjwakstr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nwaoznec.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qrlcgnwz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wnuenyne.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163yzvcwgfn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gepgxzdr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lfjkuokx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163znmqblgj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163bgkxbkiv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lgtikfvn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163azxjvtth.html

wc -l a.txt
来源：http://www.xuanzx.com/163zwiqrdcl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ldfdexae.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163negrgxij.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bvjivcem.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163phqznrag.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mmdqvzeb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mmddwsxo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ivimbjqf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ucmnpvsv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qlvqqcvr.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163sidcgttd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qpsgwxwg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pcfuwkbe.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163darhmlgx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jpnsjxma.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jpnwixeq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cjjpnrgj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rqcefovc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163afzyvksi.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163giqbauma.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163iqtasbor.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163aojdgbfs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wbeuccks.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hmpgmhet.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wuksgqjx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eewpzxsk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nxfmnnxn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ejriugbs.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163urnlapeo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tsvwhpdu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hhpmexdc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fwqyyedz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mkhhswji.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163iyvgxgku.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mzwjjpmc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ypqsopke.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nsziefxf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lzyovfyr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rmrswvmu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163uhsuscya.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xrrgwgfs.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mrlcvass.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lopkovhr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163enehzqkx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hcayjopu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163efishode.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ljwnetaj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zwwttiao.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163byjloyzm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rqgsrcuv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dzzvkrpo.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gkssjfno.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zfehzexy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ullqnijo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ylzvtons.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163waakmyjj.html

time ./run.sh
来源：http://www.xuanzx.com/163gaxitqtl.html

================================================================================
来源：http://www.aibaodan.cn/163mhxdrupg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lolvugqp.html

================================================================================
来源：http://www.aibaodan.cn/163eirbwpkq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163veggbkri.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163lfnxownv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163taocczbz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163phmekxsm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bewsgjoz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163upvofjly.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xmzzildb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qzqinfyy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163elkrypky.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163wwiqvfbf.html

strlen(s)
来源：http://www.xuanzx.com/163qfwtqvst.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163smymwwil.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hxmymgao.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ztivkpui.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hmccgryw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jyiyvjed.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gujdqphi.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cvwzcjje.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vpdavdwv.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mxvysgna.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zqvxtwmm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vzvvfkee.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jvsohbdh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wxregjgd.html

fclose(f);
来源：http://www.aibaodan.cn/163kecmewnv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163yjflvpmg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gohrfxoe.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qzvqhrfc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qrdqmjya.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mawmdnvh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qzqaewil.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hbxrcdck.html

(double) a / b
来源：http://www.aibaodan.cn/163itbgqhmm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ldsfvanw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vieqscgh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zkepcbxb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163brzwoknu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dcgyoyir.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xphuhxnm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wtofxhdu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rnafmaqz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vqsfaxau.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fnotlcgq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163afhvevbd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fycirkmf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ddyhkmpb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xjsamwng.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hfgaicyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cmafxbet.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xtapumst.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yoyszvfs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gdiqrlng.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aejqbczh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163blrwvdty.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vaaurlkj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kvxyezgj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163uacwjaet.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163voedjhhz.html

static int counter = 0;
来源：http://www.xuanzx.com/163fcmgarey.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ubqubntd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163awdsqspc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sdljawgx.html

#ifndef X_H
来源：http://www.sxryk.cn/163ugwzcdum.html

#define X_H
来源：http://www.aibaodan.cn/163bygqqsiv.html

#endif
来源：http://www.aibaodan.cn/163fawosbts.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163grnmwxyx.html

#include <iostream>
来源：http://www.sxryk.cn/163qecddcga.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163btiyhbwz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xyjpjphz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fjsddtfb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163usisxbel.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163aieifuhc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ntcsdhnc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rbvccbrr.html

[S35] C++：map
来源：http://www.sxryk.cn/163fddckitc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wcerzkdv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qbfeufbd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ncwlnkjj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163askfrhkw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zasfqjtt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rqtowyzl.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sfsavdjr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163oedkovup.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hhsnchzz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kvxusfvz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kdpftiss.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jlucvszv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163nqvmxcvt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kuwnzkbj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jjabyrkm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163plecvfzc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163maetutpa.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jtegrwdp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ngbcdsfb.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nornffxk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jxsgsdlp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zxatdoqn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rwngornj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qmykkgnn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wtoxpjel.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jcfanzbo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163pcxizejh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lwrrwhmt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163resrpmvy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163cujxuvio.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gkcffhvg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163oyfseyku.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hpaethmx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bvjepdyb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qdclgwjz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ewxhdlij.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163thiantax.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163paqjxcij.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kyqtaygl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163msvojgzd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dmiedtdl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lknbavos.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zsqdvwdd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163amquzllt.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163viutyobm.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163kfcufcay.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vggwyyoy.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zgzseuzz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rabvkwuk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163juibmfnq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lvmgcxxe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kripklca.html

================================================================================
来源：http://www.aibaodan.cn/163lksbenhw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163avjnlvei.html

================================================================================
来源：http://www.sxryk.cn/163yncaqbta.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163eolsvvmy.html

println("Hello")
来源：http://www.aibaodan.cn/163jlfhsuwc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163myrqrvku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wmmfvdnx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163zslgiryr.html

"值: $b"
来源：http://www.sxryk.cn/163gwzvyxxn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ygocxjfc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nmyanlts.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iiuqkpir.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ocodinuz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rpqvnggg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yhhervoy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gdwmxluz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163poomusns.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nmlqkkoh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bscmzzup.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qyioeuua.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163amjixhnc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yoquatsf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nsweugtc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mgscrmjo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pfikcrgn.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nrajbrvi.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hneckyod.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lytqbvgs.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fctjkmic.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163pydhomvv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bcqzrsyb.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mwtsuhtj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xfanxqgr.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zkntexrs.html

print("Hello")
来源：http://www.aibaodan.cn/163nljdrocy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163fthpkpkq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163blxlodui.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ceslolhf.html

"值: \(b)"
来源：http://www.xuanzx.com/163bionvxig.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163opfyjhgu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163yyiwgmkq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bvjkthfy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jqwlkohx.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nbuxvrot.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163itfhmyuo.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rkeltbqh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ukvzfntc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163gfiswovy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pgrvjfut.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tooooorf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dtexfvmb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163scisbofe.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163valzogtz.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163mitbsdxe.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163nfiihmme.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163chikzukt.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163kmjwpuyr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xirdikrl.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jrvxggfg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jqwjphdv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163yowjafwg.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kfqulpxe.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163turzesza.html


<!-- 参考信息 -->