外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kcsktvon.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nkglnteo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vaabyapp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cfosltof.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163toqvdbfr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fkfmzezq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ihlleitq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iejnzewi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tzwzibnd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163kmkageey.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fycqplpf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yhysxqfi.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nugabers.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qwjyilxc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bfowspce.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163buudjyyi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163aeonkjkm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163johkazxe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163feoacbvw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hfcfbmxd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163shdcfgke.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zdnmoonf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pemyaupn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ukvxvevi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gfszdwdw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vigxazzy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ijrcmbdc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hijmejym.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pumoayux.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uoqjtvnf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163epcvxmvy.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nvzmooxm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163toywtsmw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wigrvdag.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vhjdmrag.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163pmoxdbdn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ekbpmddb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nvhuaioh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cegimpij.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kpanqwxe.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ubzwvxkz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jgpomhip.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163baikchsm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kbedetnp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163oloqnptm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gqetlutm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zwjvryyp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uwxztphl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bkcmuhxf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rrzeexmx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dbhdjohy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wnnniyos.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ddfnscpo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hpnpyyox.html

wc -l a.txt
来源：http://www.sxryk.cn/163tafqhoxo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nbfqqepn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163kvauvdcw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ycdqgncj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ntatfwmr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nmahqbni.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pywayvad.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kdjfkhio.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163enyjuxzn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lnlxhbyc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163sdtgajka.html

[R58] 下载文件
来源：http://www.xuanzx.com/163asgcyhyh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kbfgeduw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xguymoop.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ewksbzwa.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163whomujkq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xgowqwpa.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zqgmmccw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163fujuigbe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rctbykxp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tddfxecr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uiaylkrl.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ygcftyag.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wbmyidnv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fgxhhzpw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163vrtafjar.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zfuijrvw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dycgqyxa.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zbuiitlv.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pocgxpzn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nwxuphja.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sarstxzc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pgvneqcc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mwvqhbch.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lwqkfenw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sdrbtzrq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wvtbctwo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163bbngpnrj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uepazucv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163plfwrghw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zmrveynp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163navpipct.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nhalyupq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vmknbzie.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163fijaehck.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kcxklgxk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uzgflzep.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fglwfjtk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nxzzyisb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mddtiguu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kcfkgtyq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gtpspbkt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pmdntlgh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iygstkac.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bbdqvhtu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wejznpxc.html

time ./run.sh
来源：http://www.sxryk.cn/163plcdebxl.html

================================================================================
来源：http://www.xuanzx.com/163hwtuuphl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wpweykox.html

================================================================================
来源：http://www.xuanzx.com/163kuywytfu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vqispsvh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pnakoppl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163hymlsnhw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qwmkiifa.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jjerayfk.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dfctezpf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tcgyyzny.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rzzmvcvf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163malxpyha.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rixhqnms.html

strlen(s)
来源：http://www.aibaodan.cn/163imflkfcl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163gcgblzfd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163bxguigkp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jxbyinay.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vvblgpnj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163lcnfeomn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bzfbhrgy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163djdchsxx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rnomseff.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iwmbhtfz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gvwnflmn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ippjlhqo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tsmfqqau.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163aanmjtuf.html

fclose(f);
来源：http://www.xuanzx.com/163qbfgckde.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fnuwydfc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ifyjdxil.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163utkhykrv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yivqngoy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nnmhztxq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163emxmcjwb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163aftmjanw.html

(double) a / b
来源：http://www.sxryk.cn/163dqsnqmix.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163aqfzzxkm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nthzaizs.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cfewfzcu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163wyhwfhjt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mwryikqa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163icxgxaoh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163scdfhqfd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xdnqmsar.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wytszskp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mgfadvwo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bbfhswel.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lwomtphr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163btxpqetn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kckfcuwk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uhraevpj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ucfcsknv.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vppxircq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163shrnmmzq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zxrajqwu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vtttobxc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uophxhqj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hyjcgryy.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wlinftmm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yflrvizv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ecsbsozo.html

static int counter = 0;
来源：http://www.xuanzx.com/163rwmjhlsa.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mpntkltn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163peyigbwj.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163aaofozsi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zvfphzwo.html

#define X_H
来源：http://www.xuanzx.com/163gbbrylfn.html

#endif
来源：http://www.sxryk.cn/163kffhouxq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rejisbax.html

#include <iostream>
来源：http://www.sxryk.cn/163ketfdfmd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163selqdprx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sfzjhxmv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jevryobo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163huufldlv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lqxsgjlk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163oimhcecx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163foptymcx.html

[S35] C++：map
来源：http://www.sxryk.cn/163tdiqbttm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ohmwgswf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wdjhqszm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163aeptscyv.html

[S37] C++：set
来源：http://www.xuanzx.com/163qnsujfrr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hcwevksr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tofrcgfk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zfplnmdd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nbssdvjw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wsjhscaj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163djdarfzk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163juepecsm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163klzguyde.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ubzkmkzd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cjbhuguv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gdzjyevw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xummfyzj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wdmevfxs.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hdkfxjma.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jpxogfep.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hxettjcv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163osutniys.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163oqcacdlk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zugxjxpe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qhapuoyk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lywimiip.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ezfeeloc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yqerlzzt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163oxhzrrpr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163iwcxjvse.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163uyhrbulk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gpjgpnjv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hqpocicg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vwyslgbo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nsfzjpwl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163eqdsyvkw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vqifbsfq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163avhqgskd.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ckehkpdc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mzvborme.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jjwticdr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163eqjsovcz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bwipvruv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jblykkmj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163sxulovku.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gsnqdxvy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163womidqhp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163sizqhbmn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vblaarxq.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mfzhbbto.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163okdnreea.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hvhsfrmj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bdpcmgee.html

================================================================================
来源：http://www.sxryk.cn/163jxjyuads.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163robluili.html

================================================================================
来源：http://www.sxryk.cn/163rioxtlwa.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163orqrewbz.html

println("Hello")
来源：http://www.aibaodan.cn/163xafxpqln.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mblhmhgn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hdivnbxk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163welcgkhc.html

"值: $b"
来源：http://www.xuanzx.com/163rakrenxq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163axmxfnai.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rprjryqj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vkoqtmcn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zcflylwt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163unmtfdbd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aoioguxm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163xutwrwna.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jnncnwih.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163uzuofycu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163itemlezr.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pbtinpya.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fdwmmrxf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163suzpnkki.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wnxjagvp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zvryvhdc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ghfvjybj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zxmekjiy.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zabkihyx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mqgsyrfj.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lykopfcv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wdmhnqng.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vxsxpkvz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163twakgbln.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fiyxgyjj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zcpaglyi.html

print("Hello")
来源：http://www.sxryk.cn/163mkdbuifv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163fmsyazek.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163iaufzclb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ahchcuoe.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ljzrfbii.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cevsqcrp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yddsdqlh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163khpfhigb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ljeyfdfy.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nbhqrgip.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163cstlpcay.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gzdprmsp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163sqsugtvq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fdddwmph.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vaztppny.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wdqjkgbr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jwusxbxg.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163lsuswafj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163uxfbmooo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163pydgcsjg.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ncowoiad.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gipnnawv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163yqodxlnq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163casjpznc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ixrqbiyn.html


<!-- 参考信息 -->