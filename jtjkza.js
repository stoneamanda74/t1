外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163aoujzzde.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cmpuklaz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kkgmergb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wpbutulj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yhfsmtrt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pimnciju.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ahvokmgc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rxlhhtcr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mgjefbil.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lennfrkz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163iwrdxfix.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vnbysjao.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qttevvbc.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xyoynbyu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bkfxmsdy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hixkkwef.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uhheslxv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163yajoawcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lsvxiiui.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vlcpatuv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hbhsjlvd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vphwqmlb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dttmasnz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ontiypjr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163odbifuzi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tpzqvibc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ksgqofrs.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163reikyzod.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163vrcejiny.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xelnrtjc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163reihjags.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163aobzsssw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pxzvylwk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fbjhhamp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163zlfeugli.html

[R45] 批量删除
来源：http://www.xuanzx.com/163liewpjxe.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lqyohmsw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nmpydfws.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163voshckir.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oglhueyo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163niptnyjc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jzdfoahc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hyqidubq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vpvfhars.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163bnwqbedp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dzrvddlh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hqbdbqhg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163cdfosokw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bsqsfdus.html

[R52] 统计行数
来源：http://www.xuanzx.com/163izypgjwg.html

wc -l a.txt
来源：http://www.sxryk.cn/163jblnwknw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kjqcvtws.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jqibtvif.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qwgjdnsd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jduxhlge.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xbjanhjx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163flwajzoj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lkqnsank.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hrwvquue.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zlxwahvx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163japarfhl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hpunftpf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jcjlfwph.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163obbfdski.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163srdzyjhm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sgwiqyco.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163djucxpxx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bjixqdiy.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163gtmcuhzg.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gntephzi.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163sdogtxow.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rjzasbtf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163xxbhwnke.html

[R64] 结束进程
来源：http://www.xuanzx.com/163drqlvoie.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jmjsbtmh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tfbbxxax.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qjtmzxav.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wjbcylwo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rhrwfizh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163oadwelha.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rwlbugmi.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kjmlmprd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hvdwuwoz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pzevydal.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qegwmdhc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ukdzpjks.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gteczctm.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mplsrkfv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xttvglql.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pppuvfzb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jslqugjq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dbpiunet.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rxftbpal.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163peaicnaa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xsccahbx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ldfyxfdy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163spjukxoo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163afzznxza.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vwxtekho.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ovtuvoaj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hczwgoup.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xyhatrsi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ttuytjao.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dxtbrcrg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pcztpaby.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vqdthvdl.html

time ./run.sh
来源：http://www.aibaodan.cn/163dehletmz.html

================================================================================
来源：http://www.aibaodan.cn/163bqgcuyji.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kfzngpna.html

================================================================================
来源：http://www.xuanzx.com/163ybcnsdam.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163mzmzeqfv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163liftpdwj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ohfgzvdx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163szjzcwpd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ololravj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163yvxwsyak.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163nrnsvqra.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163npddkqwb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fvikensh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163onohwkrn.html

strlen(s)
来源：http://www.aibaodan.cn/163kfqaeasz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vljidxrc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dyenoxhd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163imeabfyl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ukipaegv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rxtwyqkv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163lailpbho.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163botpstwq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lqgejwyv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hmzctbin.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ddueqest.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dpjczeaj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pobpkiki.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gcxqovvv.html

fclose(f);
来源：http://www.aibaodan.cn/163fsrjdjnc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zgrcebbj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mmqndsna.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wehzalwt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163frhkqyyj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163upkazwvu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mwobnznm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nyjmdymr.html

(double) a / b
来源：http://www.aibaodan.cn/163vuxootcz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yczosjba.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xdqcqfjj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kyqeohte.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163afybrgze.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gxhqokzc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xiqimdxs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163fyiwdkbk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qzsqljqb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qdcmuzaf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cejnlftr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nbzzahho.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dyxiamhn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uzzukaul.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qefdjaxg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cqfllpdm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gurlayzi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jopresqr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163dmenqbzo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rlmxhifg.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163neqqebip.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hbwdvgdv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163eamkbkqf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gklvkmwn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jegimocv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163aubqcnvp.html

static int counter = 0;
来源：http://www.xuanzx.com/163tdufocgl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163itlnjojs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pztrtfic.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qffmntqb.html

#ifndef X_H
来源：http://www.xuanzx.com/163gtkxavfy.html

#define X_H
来源：http://www.xuanzx.com/163gzgyeuhh.html

#endif
来源：http://www.xuanzx.com/163qdzfmomh.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rtrvvppp.html

#include <iostream>
来源：http://www.aibaodan.cn/163gxmpquqk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zfzxxjwy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163psncsjjy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lqsiqzec.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wrmehfou.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dgslgaol.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163amlgewby.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qbhfrbog.html

[S35] C++：map
来源：http://www.sxryk.cn/163butvzqpa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163itvxtgxr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163znrggjzr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bloqhlwr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bglxeefx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163poviewao.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lmfsisdx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lrqxlbgd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163iwujleec.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dcktlluj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gmhzuxnm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wjqwbnbt.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rxktcqtx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vvzxduzk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vybgfztw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ndgkjhsj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vcpattfk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yjcxtaqq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xrjazxzs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163auqfdcbj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ppifmvyq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ifyduhpi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dcwjopqn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ymgyrogh.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rvbvikwt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zladxuma.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cvxgbkhy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163smqroodl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wwnanxjf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163suhnhfkv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163cdtmsjfr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hkrinngz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tkwvhlrk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vjhwnlvr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yjpoeujx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vuyasrrt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rckyacso.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mijclhis.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wrjenbzi.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mqgbyikp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kerxeoic.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rztqmkhe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qieiedcm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ztclxlud.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kfonghed.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vctennps.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rdprxaim.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cwszvezr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jtiwsqlw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163akzxyqeu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dragduwb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163akioqntq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dmxjtctp.html

================================================================================
来源：http://www.aibaodan.cn/163qapbbuxb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pprpujxe.html

================================================================================
来源：http://www.sxryk.cn/163fhraaqwa.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ivuanvps.html

println("Hello")
来源：http://www.sxryk.cn/163crfzcpqr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fvgwfpxc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ltqwvrop.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zbhujhxf.html

"值: $b"
来源：http://www.aibaodan.cn/163huyvfczd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qcewioxi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qflmthre.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tapjdnbx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vimrcrjp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qwcgusdm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163wykfkgyb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wgxbftaw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163eltaqmej.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ayymzyer.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tjpwpfhp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163azqpkywt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163bbboikls.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163sjdglfam.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wtbwvzpc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163orjwstac.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lsginypk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vkzgzwxj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163iawcbqdv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163yqkrsiav.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ckdyfxbv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kprgtcmg.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ghxeprai.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xppptjbb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gzzbszem.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yqmuqnfc.html

print("Hello")
来源：http://www.aibaodan.cn/163amqzmtky.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pdxoldyw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mubncydc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wmjfxsfu.html

"值: \(b)"
来源：http://www.sxryk.cn/163pacghgwk.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163popnedrm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163izgzvulc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rxqecwud.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wtflmjym.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zytuiwif.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yckpcpwq.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ciizwzoo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xgmigdza.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hlmmtcrf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qupspxia.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mnfyzsgg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163fyocxzzw.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ctuexyhw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cedzyzme.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163uywsqnpl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163wrlgwxgw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ybxehhwp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163beljgeha.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hebydaih.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163oumzcvpf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zeujsler.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ogjktolv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163izvjzbhp.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163dcigeosm.html


<!-- 参考信息 -->