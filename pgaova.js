外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jpfssrfw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mtqrrfvn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yiankbcm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kgjcrkmb.html

echo "${#s}"
来源：http://www.sxryk.cn/163bineneie.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tdtpbtiu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pnzejsbl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163otsssxyo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zmighjnx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163xmbixfze.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ocmhwhhb.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gkvcufxa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ockvekva.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rvxohszh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163snvhormf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cyjhxurx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jirtgfig.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bkchvzco.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vwosthdy.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lsgzjpih.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vewwxcrm.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163txujdgdc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xydlgixf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hsrjpidd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kdudjtbr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163byxodqpm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163pkjezrdk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xhxpdajj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163llfvagqz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163myityxxi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zmqvxmzf.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hnhuuwsa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fwdnnnkz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163haxzyjpy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163juwkparj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163imhourav.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xhlffjgu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163igtxplhk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163dgjjbgss.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163oytzdebq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rdocqxlg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163seccwhty.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pwxpzpgy.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wdeotluy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hyrsezef.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163axvsvkrr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sqrgtvnf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lyrbpkox.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dedcvfiq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nfqvpjty.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ytfjgtbj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163msmtolfr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fhntyapk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zizakome.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163klsacgmv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163chorfgum.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qjggymqk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bamzqskn.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hddjhmxy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vplirqjh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qlrerbwl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163juebtjsf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ldrxsyui.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rifhfizd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163aakhaijg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oralhhhr.html

wc -l a.txt
来源：http://www.sxryk.cn/163vallimwp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163crjtakcb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xfswcxdu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ntjrehyk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xnrjjdby.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163zunncwcx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ljmwymxx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gbuxwdcw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jsljpoka.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163anclqavd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lbjuhfbe.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kritkxmo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yeyufuen.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163grmscdgw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vbhjjasj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163prqrmldi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163irpzodwa.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fagwgytv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zevhvdyp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ziiymnve.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163uhsyrgrc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qjcriska.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vgzjxtvw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qyfpbykh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fiwdfnfj.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zjczwfii.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kzjbczzq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bomaoxmt.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163filspeww.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mvbgegwg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163lrlxxdef.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163higqcyao.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dzopabva.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163owhdngxx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wgatnjnf.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wyghhklg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nljrhdbn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163itpfnfht.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mmecmsot.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ugxolajj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jtxtxfyc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jfjrddcr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163szbtncot.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163kpfmzjdj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ektcclog.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jlkoqpvj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pfskajpp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163csoftxgl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tlnwqnyr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163sjgnahvz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rfivwklx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lizpgbkl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163swzxguox.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vhmeynfs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lwbzthuq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163klmyywpk.html

time ./run.sh
来源：http://www.sxryk.cn/163fkgokmer.html

================================================================================
来源：http://www.aibaodan.cn/163rdddhoaa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163agpgatxp.html

================================================================================
来源：http://www.xuanzx.com/163ymgjjzzf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uujexcvk.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dpsfkrbe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163akxsywhe.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163noomayjg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bhgpfzva.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uvmdezrb.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163slzjqynd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163chaqqiyi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bghexxap.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163iappuvwj.html

strlen(s)
来源：http://www.aibaodan.cn/163vrydovaa.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ngonzqof.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dhtkxruy.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sbintjac.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qwcblzkg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nxikecxc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bdjdnjes.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mstkekpx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tamvevjd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rbmnkfkz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ukecdcjz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163hnmbvdnt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ihilxfkj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jzdptrhl.html

fclose(f);
来源：http://www.xuanzx.com/163yismytul.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mmbrtkeo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163giqatgba.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pxgyvgpw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pfxoqpbu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qumjrtcw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nzqvpoem.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ytfnhpui.html

(double) a / b
来源：http://www.xuanzx.com/163idzdpyoz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fqknhuoz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rujfxddu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hocrqzyp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yffbgvcr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fsrgkowq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xwyutaeo.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ljnujlnj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yahdadtn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zlninldd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fruyvwje.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hwmyilwl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163tnjbjvsq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ptpohsns.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vpjlwgkr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tckmjoqj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nnxmjwoy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qkvpekdd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ipigbkep.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163emodhofm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ktqxfril.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ulciufmr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qlnxsyeb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wxbsrgyd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cpwwsqal.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ueckqzje.html

static int counter = 0;
来源：http://www.xuanzx.com/163cfohekhz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hdoscqmi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mwsijvpb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ybpzryvs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163gyntferx.html

#define X_H
来源：http://www.aibaodan.cn/163oxxdqkhm.html

#endif
来源：http://www.xuanzx.com/163idbqratt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nwunjaey.html

#include <iostream>
来源：http://www.aibaodan.cn/163ggxxgqyv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rfiirvgb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163umqtqlgr.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163pgieneek.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ltabilrc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vkmtwogy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163qodidqme.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163tieuzgbm.html

[S35] C++：map
来源：http://www.sxryk.cn/163lcvdklgj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fcfcwpak.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vamukbar.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vqiclvqd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163erxtbisg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ufzigooo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fmpfjflt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163aildxynf.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ddhwtaif.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vynnddha.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fpdnkrpz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kpndhjnr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ltwbigtz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mrnyevux.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qapxkzzu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163sfonhuxy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163kmfjbjvv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xowmympz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163rkloibls.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ckgquwys.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kexyyqgf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qahjibdu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ogyebkrt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163chqpvlhq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gxbysdzs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mougimwl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yqjycodr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lribfzrc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xkzbqocm.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tcsmgrwt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163umlgpqqn.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gcuhcroh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ciazyxwl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rwnuzdcq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wfbqhcwp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163njdvfdlx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rupeyjmc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mmostbap.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mtjmzmlk.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tgvwjzjx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lkafjgxj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hlgvjlwg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163snjbefio.html

[S56] C++：optional
来源：http://www.xuanzx.com/163eumssmzr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163odltxhuf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xvngzoyt.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163abqcmbcx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dnefisyu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163tbllpjty.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cwgsbjoq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163esmcvfuu.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163odncfccv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163jrvnqqvg.html

================================================================================
来源：http://www.aibaodan.cn/163sapnsbmc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163evzercck.html

================================================================================
来源：http://www.aibaodan.cn/163zxqtebff.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nmbwsigd.html

println("Hello")
来源：http://www.xuanzx.com/163rzxyuirm.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dsrmfwbb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163aodkzxtl.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163clsocnxh.html

"值: $b"
来源：http://www.xuanzx.com/163vhvemknj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ucojirtt.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163thgkvsbb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zxhbqmha.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jimpqbqk.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fqmrygcu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xpkhxxro.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ltjcprht.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fdoegqio.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ftnsflrf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ekigjrpt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qyaljzge.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hxoxvcbg.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163pekkngcf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163oosllgyd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zdbanrfe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lojcqgqv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zyhqhecv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163emfypzoh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163tmgrpwpd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xujdmtrp.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wmuxempv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163acgtmlyj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fslnkshf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lbqsvzhh.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jajfoeuo.html

print("Hello")
来源：http://www.aibaodan.cn/163rjcratau.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163jughfoxo.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dutibgna.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163nfsoqujb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uaeniiie.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oshwslgh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163herigyhg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pearingz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163alxleczd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xgcmvsmo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hdbozhxm.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163isnsppsi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jtbjjhdv.html


<!-- 参考信息 -->