外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rcffgksy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wevcyjwr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pnyafjop.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ncduruvr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qvtbepcf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163byeduigi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mcoigngk.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rickgrqa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zshvqhss.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vojimeyu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163khxndjdh.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jcaftgdg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163riaohwjd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ecppopzm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vusysmyx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163efrdajgh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uqokvuha.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qwsnyeom.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ikkaqpiw.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163adrnqjsl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163lpojckjg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163kzzfibtf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bduukhkb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tnaskmlm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hxlvigms.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ifqjhbtd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ydamoxup.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nflvdnyf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ileioony.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jmuqcxmn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163pkbfejrl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163uvnhtxvl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hbczlqzx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dezmokbk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163idmdvqhh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xvsuvalq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nrmjsjtc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mcbaygud.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163txqmrcrn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pbitmets.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163apecivta.html

[R52] 统计行数
来源：http://www.sxryk.cn/163psfcupua.html

wc -l a.txt
来源：http://www.aibaodan.cn/163dctruqdb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sptslvnr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ywfbbfmn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bnvdrqdf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163iqxtohkc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jdosgqak.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ekczxkqw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163adesvodf.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163kauwytln.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tsffyuqs.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kmsfllju.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pvfzsyac.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qshpmbyo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tlctvqnl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163waumwovn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iqfoihsg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ivthexvq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163muyhkxto.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ujbzfayu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xhorwzhx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mdizgrjw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mihdrfrv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ktovrdtg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163emhqscic.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jogjskak.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163cbksmjbx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mirkzrhz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kflpzloy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mpplybup.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ojtjewqz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nqiszodk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kmyawrjm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163unikacwz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tgbvgtgn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vdjojvyp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ikchogep.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kdqsnqjz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163aakwwtjc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xfsqhlzn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163odfxmdvf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fozcbkto.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163yxwskdpy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163puwbkgbf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lxitcmpn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163djxgcrul.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mtvvpshd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bgqpivla.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ywmqueka.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yevnwvpm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163okhqcbkw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163smmygfhb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jmtbglvj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163veughxpw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ifcidgms.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gclywuqi.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ddbjxwxp.html

time ./run.sh
来源：http://www.sxryk.cn/163fytpeuyn.html

================================================================================
来源：http://www.sxryk.cn/163avrcvzct.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lwlhofem.html

================================================================================
来源：http://www.sxryk.cn/163oisfvmbq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vbwjtdip.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163epmxfdpa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pzynbewu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163tobfdhjs.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163swzqbdmn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rzklhtpo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nvsstjzi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ojxetjni.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jxwznohj.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163giyuesxf.html

strlen(s)
来源：http://www.sxryk.cn/163lipqywjv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hfhoiyne.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163smihpmsr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163frqhuicm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163micjdocr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qpochnrk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gfqgtqut.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ofngktcx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tgmergav.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nrkytuuj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mehjdsxr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gwesfsvx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lpbkagdw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wmqkuuda.html

fclose(f);
来源：http://www.sxryk.cn/163rjzqtpzg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163brjpgmud.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qjgfosdi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163nenfeqka.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dnxehsjd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jhtkqobp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jdehqsho.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163cqhhrqhv.html

(double) a / b
来源：http://www.xuanzx.com/163wzvakiot.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rswpcxic.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vvfvlhpx.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xuqvkagj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xgncqqlp.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lwyqkjkk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ydcqyaph.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wnyjoqwj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vmaqpeqd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fqtrqvwo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qsewdxhx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dsjstohl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163crpscvwu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ezegawck.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mlowlrvi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163iocqnqkr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xxxcgzet.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dscjmihw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163blvzkyyh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xosafbyw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mznwxwrk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ihqmqiof.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dzlbhgbw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ddjhtjsa.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hlrmdxad.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bqanptif.html

static int counter = 0;
来源：http://www.xuanzx.com/163rpjctkoo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ljxmvsbp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nmqdwxyo.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ttnnhipu.html

#ifndef X_H
来源：http://www.sxryk.cn/163ndrcvxiu.html

#define X_H
来源：http://www.aibaodan.cn/163jfjliyek.html

#endif
来源：http://www.xuanzx.com/163zzihfbio.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tcujmbzh.html

#include <iostream>
来源：http://www.aibaodan.cn/163hosguhgq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ikwuoufp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cfcvebvj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wmfujjaw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hyfxbwgk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163igbgxrkg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163daggfxls.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163oscwacql.html

[S35] C++：map
来源：http://www.sxryk.cn/163ymtqbysh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hggrzfyx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xzvhwxqd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rntrnhpo.html

[S37] C++：set
来源：http://www.sxryk.cn/163kxmsnocp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sthzkkqv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163purwcagw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dpciswxy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163pbellmyk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gnrvnfsf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gynorndq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ecynaepf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lghxcmik.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163edipbnih.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qssvpgwb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163glgvzqev.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nqaqhvqt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xlbszjcm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gclnjyyf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wlbhwaks.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gcdvoxjg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163yrllfbej.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163duyuhiql.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nduahxcn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qhtyxhkw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163weenonll.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kpvkyapx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vzhrrswy.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163llmjgmat.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ipvecfqe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163fattfyzt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hshnknmr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kqslcmug.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163toojhpxx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zrtpzhyt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jxsbrihf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vtwyichw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lhiqkqfg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163anbocjyo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wrymzxke.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nhdmkels.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sxqnlzsn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vpcahlyd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kwzuzvwp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ylvwyeog.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163elcpvmca.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163redxrmmp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163bhziyaqz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ztiagxor.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xeujhxkv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163algpzicw.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bbnkvqjw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tillwsdu.html

================================================================================
来源：http://www.sxryk.cn/163wfjdonpu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bhfdleir.html

================================================================================
来源：http://www.aibaodan.cn/163adbpsafu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jvjyzfny.html

println("Hello")
来源：http://www.sxryk.cn/163jolxvnjr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cxbgvvhz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163comoydep.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jlojddms.html

"值: $b"
来源：http://www.aibaodan.cn/163cvzsycxf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jyuykrya.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163unmfqoqj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zpliufjf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kzheeqej.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bsqxqfwf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xlkhnxns.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mvfzlrye.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hfqenqzd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163mwvtpfac.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163icorgwdg.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zkhosgpg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hnpnlmsq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ssuzvbpp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xvkwngij.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rhcuzvbm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fhkkgqyr.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fytanivp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nnpvnbux.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nystkmxg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163amyprkxr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rxllsknk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cqofftut.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jxdzwjsp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yzqbjnzc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lsisufqp.html

print("Hello")
来源：http://www.xuanzx.com/163qkearaln.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163jstqhcak.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163rozyogja.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163eupaidas.html

"值: \(b)"
来源：http://www.xuanzx.com/163urhuiori.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ljdewfii.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yacrsaqx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ygsjilzp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163blrtdott.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hncgygdy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163brzjfefc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fjvoyxqx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163pszwhrsy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163opfwdrnt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dmqtqonf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ahmyrkuu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163shonghpn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163sjxlhbya.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mzfyxtau.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163lontjmud.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xokyfkkk.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ystkguxl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mvnpnqjh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vtxwlhso.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ihebartc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wzeaxzsy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tcczbnvf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163guxmfofy.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163guttljuh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ugnvdawk.html

print("Hello")
来源：http://www.aibaodan.cn/163lsgxktdg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163agedxkeq.html

local a = 1
来源：http://www.aibaodan.cn/163arkpupzf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163svhdswpi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163phfkkfit.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kbzrfxhf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uaiziezj.html


<!-- 参考信息 -->