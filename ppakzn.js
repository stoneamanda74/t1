外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163aiioldnl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dwfjtsjf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163phpjevss.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qnjfirvi.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nulywwbv.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qibgvebj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163tzaeaqnf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fdkiaeeq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163eejumrux.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163sikbzjow.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163oqggxmle.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hldohahr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163vvahztbc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nykykchh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163iwgfhkpt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163iexfhpfy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163etirckzb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wfdzqlsg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gxkjoryj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163elrgwcaz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163gicvihsw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163yqeaqwzn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lorcoyxd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163blmmyrrf.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vyripavn.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dukdnxzj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rjmclhev.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lolufemg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xkaqgsag.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163idsncfhe.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uzxytxcx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fakewuyu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lsiqfjch.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163soelpaug.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163arzfouik.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163gzwbtdko.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ishhuump.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163zdylwzee.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rynstrwb.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wzvwhzon.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wqpkatgk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uwhytrvl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tghwdiac.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163adwyrrov.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yizboeeb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163exxbieeq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dtixkibi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pkuhfcpk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gyernfdb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dgsxmvlj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163koljpfmv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hafloqos.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ktsffhnc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pkxwtylk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163dsgccaaa.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qghmkile.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rwryyewy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bsmzmvmb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bajooryn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hsdpmvrb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rsuwuxfa.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rssauhua.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yvrjaxcd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vfwsgvgi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163loznnuty.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mhaebjbd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vczscbha.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wlszxcxo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rywtkusy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163yjmncpmy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ohdnfiwh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dumeutls.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zpsegiet.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jmdftdpg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zehmzijw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ppirmpgd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mnyeqwtp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ispyzenx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nioniztq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tztiwdjp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yecpqaak.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yktvxhaw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ognunnsb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vylzmlhq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163oarkwzre.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163crpbvqyx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xohrnhqs.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163akdfydzw.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uhvurjar.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ixwwgvhu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lmmdancz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163infkdbox.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163clybkozt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wajicfze.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eacunluk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lskqhmaw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hfsuarhi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163afzfwpvk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jqitiutt.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rmxhpjxq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qvyxlmha.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dtkjoitv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ctyurfcb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bdihvpyv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163moxqeqhg.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tybxntlm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163eycgmsdn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163olmqfosf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wjamveei.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mjsjsdvw.html

time ./run.sh
来源：http://www.sxryk.cn/163xwzqhbkw.html

================================================================================
来源：http://www.sxryk.cn/163cgeymeug.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fxahjwei.html

================================================================================
来源：http://www.xuanzx.com/163hyglhghp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hglkfdsx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163neykvsfh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163hqsnhjih.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lymwgtes.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bdbctrcl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jcthqizy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ktbjwrwi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fzagizka.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dbzhrrzk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pnkkvmar.html

strlen(s)
来源：http://www.xuanzx.com/163jfycqads.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xeewoili.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163iacpiagz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163feoytour.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zyvepqnx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kuqmrmxm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163erxrsuck.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cibqfnrz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jrizhkwy.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xvuqizgh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ysrqdqvz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ucgocdai.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163brqgevnj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dttzbhwo.html

fclose(f);
来源：http://www.aibaodan.cn/163gdgfedpj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xrfvjpfi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rhxdtpvm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lyumwjhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163uizhkzde.html

[S14] C：枚举
来源：http://www.xuanzx.com/163papayxmu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163smzidixe.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ntcjeiib.html

(double) a / b
来源：http://www.xuanzx.com/163cdxhzkef.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ykiotyol.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kpbagbdg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vayjsyww.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163extiefvp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fjmubuzw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qzulwjlm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zktzlwhj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xgdtvsff.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ytlghbbt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vliudpls.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fdqtvvav.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163clpdfcil.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zgtyzthf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jsiwqhqk.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nertagcg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163whrvxfuq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163azszwvbn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jpmwvanq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163schsaaxd.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pkdurluz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ktnofxin.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gmwmtayi.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jgrhzhfs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hyuercxn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fuuiidcq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zmiuoeqi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lbczjlbi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163spvlkeow.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ttqwdvln.html

#ifndef X_H
来源：http://www.xuanzx.com/163lsbdmisp.html

#define X_H
来源：http://www.aibaodan.cn/163snfcyxmm.html

#endif
来源：http://www.xuanzx.com/163gaytmncw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gbxtorsp.html

#include <iostream>
来源：http://www.xuanzx.com/163omenhpse.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163izemdkmg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163cgowotvb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163yqmezhdi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163teowvyjl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163iaitdyen.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fdtufiky.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ojftkksl.html

[S35] C++：map
来源：http://www.sxryk.cn/163osqnqbgz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cojllhec.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rbmuqzex.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rqsovabe.html

[S37] C++：set
来源：http://www.xuanzx.com/163aekwjbib.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rykobhpv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pjejrpzb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ebmaaiic.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jripzqyv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qtwbeztm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xlmudgax.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fcqkkfkz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163axwkdeid.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163secnvtmp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uoctfwtc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bysgvhcm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jfzzdjcx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zuktudcj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wglmoibe.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tdlwhyvw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cjbsfnbk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163eoygmgre.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tmbcijyn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vpmtnpzf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jgsxhbxl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kgxmuwkt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163pgswqypv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163sjfjnyxk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163intcidej.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ezdjjuew.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163tcrjasnr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ylspdgcv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lvtbsbub.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nskptrjo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rltfcipt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163swljjlri.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ruafargx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bpyossyq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163gkyhdrmc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163usuzboej.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rshnwvga.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163laqrxzts.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yfspjjge.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qrvqztsk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bglnadnz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ogsnajxe.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fprfdhgp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kfkwqdur.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xyuykjkz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163swbnjkvp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lrctwprv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tiwtickb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zslciiip.html

================================================================================
来源：http://www.aibaodan.cn/163iajtglde.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vcnmlshp.html

================================================================================
来源：http://www.aibaodan.cn/163ngqotwxz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gxudfhpz.html

println("Hello")
来源：http://www.xuanzx.com/163gwdbhjkd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zlemftnd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163izhqspwg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dvaunusu.html

"值: $b"
来源：http://www.xuanzx.com/163zajpuevg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163wdpmntlr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nmebhtdy.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tocztmkp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ayhdkqte.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qtnhyfcc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qbjfysjw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163dgharizx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zbfxvbds.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163evzevbvu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gbelzdov.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163djjjrfhj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cqqwetav.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163thjukemx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163afxazgyq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163wgqyvmrd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bvbnsoex.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163faknmzhr.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gkvpnwbd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mvnbngpw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163whpiekle.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163lgrwwzev.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163raxinsqk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163adsatohg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mdbudqeq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163inshgyhd.html

print("Hello")
来源：http://www.sxryk.cn/163fgiazouz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kgcaehgo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163tbnoxtau.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zykzwqkl.html

"值: \(b)"
来源：http://www.aibaodan.cn/163octqcwfz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dijkjoop.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ykoaubuj.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xunxodec.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nnzsilos.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gbgqcebv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qrcoxyqc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xvjytuvu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163uilswrjt.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vedqoszd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163leripkjk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yvepkmel.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163kzmfuqso.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ebpaemzc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163euwunzib.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163axhyivgf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163eoomwydx.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163bvjpttdw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mnefawtg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tzkpkerd.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jzvfdxsv.html


<!-- 参考信息 -->