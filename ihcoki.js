外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163guustmjj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jnfhkuco.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163psgnwlzl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vwzzhdnc.html

echo "${#s}"
来源：http://www.sxryk.cn/163fxhckxpg.html

[R22] 截取子串
来源：http://www.xuanzx.com/163usbpfmqd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163imdzqntg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rhndruyk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163valialmc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rftpwjty.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nbboqrhc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163knpwtowj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163abswdgdd.html

[R26] 命令替换
来源：http://www.xuanzx.com/163amolxhbg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kcxiwcmq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gnoufwsi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wbrlazsp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dajwpvub.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vhrxmvxq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163itvofjkh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vxvnvnsf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qgotjokp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gzkucbcy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lsuvzhak.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gmqwhwux.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163usuwdigk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iijxqsco.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ztadjdtc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mfqntgmz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163osuzkhlx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163buhjwngi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qmxfptfn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yykbqcnl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dignqwmi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163aswgulyg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vzbgaifx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xyuqfqxh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163azehexqb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rrotrdir.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163djfryswd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ybjeviuu.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ktsxeyua.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wbirvyvm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qknwmswq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163eufahmlk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ynttilqp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jywcbjpy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163btzwmeqb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163uizjtgzl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163iwfjmbzg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163aersgoee.html

[R45] 批量删除
来源：http://www.sxryk.cn/163slmosnok.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kycpugbz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kejzggex.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lwoqngoz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163nutztyzw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163knncemhu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zavrtgwi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rvjotslz.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jzuldawd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163fcrfcqho.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dwfdiopc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xvaobxqw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ykmzftad.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hgcjlnhg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bfucvvgs.html

wc -l a.txt
来源：http://www.xuanzx.com/163orttpdgv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163irvfcxrb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163kzjhpsqf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kvisaxma.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163iytpkxsw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qysrrfvl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jjjwatvl.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hndshppx.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lxojwpyl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nginknym.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dmbefkms.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yqjvwbzs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gcoetymp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163huddjwsz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163exloukqj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163nufrrsqc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tbpbuxnh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mvxpxccq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jckebywb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tpzpeigz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kevsatcv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163eticgvwa.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pqbrspmc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kqqhzakj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lzrchtsd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163akhqnxgn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jyuiinxt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163umkbucaj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hdjnfrjr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163gqeihyaw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yfqwwgkz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163esqqxhhl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gyusogdj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bufonevu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ysehwuig.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163fyllkueb.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uealtxjp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tnmkljgf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hvxpepoy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bwygdxwt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mpfkgndz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hlftkppw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rdwigbfx.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ayuaebrn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wvurcxrx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fcwafdrq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bfaxmnzu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wvqnseps.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oeurnadb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gqqqdgbk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tddpwoer.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163mntwemgm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mignbrsw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qrisqhxv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163yxupiher.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fbhfrepd.html

time ./run.sh
来源：http://www.xuanzx.com/163rlbsbdzv.html

================================================================================
来源：http://www.xuanzx.com/163urlkyekn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yolcqggd.html

================================================================================
来源：http://www.sxryk.cn/163iqijukms.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ythwhtmo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163oknvsyqh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163thorujkh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163yrhxdsxf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jimwbxgo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jwuicdui.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163oircujmu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163cnrndsxn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163juoknbux.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163njgwddzb.html

strlen(s)
来源：http://www.aibaodan.cn/163iagmvmiu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yeemevzi.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wbvaoqjh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163twpvvcxx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163nbxccmts.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rvpbvveg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wphjmgpo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ezdwodua.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lvfnihnc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ldiokqyv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163kfzbpwvp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ucbgwlkg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rudlqjhs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163psuvxefo.html

fclose(f);
来源：http://www.sxryk.cn/163shpgkvut.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lzqblyge.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lrerrccb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163iapczdjv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jkeihhba.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wumujjdp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hieqwjke.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fydkezwf.html

(double) a / b
来源：http://www.xuanzx.com/163jybznaap.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163umdmbids.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163iaaeusuo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163itteejpm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cfispxpo.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163suijcxqn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163tmpmychx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163mmffznuk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zzgtgxxo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rdcewxgy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qvfiobza.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163nfoejhzy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wnfrfbrp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xzqatxqm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163eazpsmcf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163whomuntn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163eglxklvi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163msebmsqo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163lkrzxjss.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jptwbika.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uccfpzrg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uwolzpsw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rqxqpxnq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vifdsnlo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pvuemnri.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xjwmgcco.html

static int counter = 0;
来源：http://www.xuanzx.com/163axrncahp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163heqrtsbh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tbhawgrv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tqdikmgc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vdfbifre.html

#define X_H
来源：http://www.sxryk.cn/163oypnpxvg.html

#endif
来源：http://www.aibaodan.cn/163hxaavbcb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xhhneyqo.html

#include <iostream>
来源：http://www.aibaodan.cn/163bpjnrsag.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rnyrdrhm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ondcfwvf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cthzmole.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163gpdjolwi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lwssahvg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163scmvlkjv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zofsquob.html

[S35] C++：map
来源：http://www.xuanzx.com/163exbozixs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163duotutdm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163muvgydbj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vuhgkope.html

[S37] C++：set
来源：http://www.aibaodan.cn/163yrjdpprd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mqxyvwlt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vaqlwwpf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163trabfhsh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eyncpihy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hvhbegqq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xdauyang.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ubipqnpo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xaflpwsj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163phubhrca.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xwxvkjjv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wyljzcxv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mfpbdvwn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fmegsbtu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fbrfgxbf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163toxnnqnn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tlayfesp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sfebhzuw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163azedeorv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ncogsmld.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lafsokun.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vxmmapie.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vwvspnbu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163twinajvw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vmrwbkwa.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ciqpyuei.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hfrxuhil.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163iuxnewvd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hdvhpxfa.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vutobdrd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163uvbufeqq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163znjdccit.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pdhjjbsu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rqydczuh.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tlxxweow.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hlnetwrz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gquvoqye.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bjmfmtme.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pvpahwbe.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163khejclsh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ubdrjcgy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qrquwpxc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163iowppwea.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dxucnwwj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163uonlnmmx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ejrfzapk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rtlvmgiw.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163euyenotr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163plwdjqeo.html

================================================================================
来源：http://www.aibaodan.cn/163dcssviip.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zvhtcycr.html

================================================================================
来源：http://www.sxryk.cn/163stbulbai.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ligmqfwd.html

println("Hello")
来源：http://www.aibaodan.cn/163ynmadhja.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hmxfavtq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163versiufq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qgtbiejp.html

"值: $b"
来源：http://www.xuanzx.com/163tughiwhp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lfoprszz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163uvxksvwp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gvvuykhl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163varpluld.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163upxbuklv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qozqcbxs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163udvlhmdz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qxodompn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jzfgnypz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ymzjhuys.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mtzxocsf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ukwrtuqy.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nisrltqo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163lxsoklsx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nzwnpiie.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163iopryofn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163whryidor.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cplproel.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163utzhtgps.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163scikaalz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xznjakjr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wipplahi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163npjqbzqe.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ykmhydvm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163pseeazkb.html

print("Hello")
来源：http://www.xuanzx.com/163reisphpj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qyxsksqb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mpheyjdq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163gipeprew.html

"值: \(b)"
来源：http://www.sxryk.cn/163ogltejim.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163trygwvwc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fogtgwts.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oxtealig.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163igmbpqzx.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ndzttzcs.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163wpllwwdu.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tqcdffpe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xinqfowm.html


<!-- 参考信息 -->