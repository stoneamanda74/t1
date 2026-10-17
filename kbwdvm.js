外链999!wailian999！

esac
来源：http://www.sxryk.cn/163mwnxuyxy.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ybkykitv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ypilxynk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ltnvfiww.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xncclquk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zkqmvuvs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163clreanwd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pvbeevqc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vvotzelx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fudlvgwz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163juqdkoph.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163wudfwrgo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cfwvwayj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xqnreycg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cibtffyl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163skpktpfd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163elukobsk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yybxcojr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vhksqekc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dwfskzyx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lwimwazu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lwphxkqb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163epgsotdc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kegzweez.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wcrgsagm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jugsmrvi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163habzfcto.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163txptmzfx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163cylxkinl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163lhrrpzly.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sujyopyp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ysqfhyha.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kpnhlchc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163enintpzm.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tgjjwssf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kntsywcm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lckzvvfn.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163djpqrgbm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bruoipzq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bzzxzzwb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ltqivezd.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163pjmlpsat.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lvwiwxoi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qswlkhtz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163sfgknfvd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xcvtpbgs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ilmecsol.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cyxakqdg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163uunsknda.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qvonnkvh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vegpujnk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vdpuxyor.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bbinlzwu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fihpshgj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pbptlimm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jrfbaejq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xegytphh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163thrjpcnn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163afqtrmaa.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163akeqlsxz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ctrpedwx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163bukydsel.html

wc -l < a.txt
来源：http://www.xuanzx.com/163slgvbhtl.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uiiyzhuo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pjskohtt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kbasivlx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163gdvakfvn.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cgupmwjy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kmgaoobf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dzwkxfto.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kjjsbozf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163cyprlqqs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163teedeosg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ilxtuvzb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163biwxywoq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wwwtuvuv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163honxhiqg.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ejjunlta.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ocbohohg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hsfiyeua.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jehdshry.html

[R52] 统计行数
来源：http://www.sxryk.cn/163nmoirhsj.html

wc -l a.txt
来源：http://www.sxryk.cn/163zsnsomla.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dgvgaxog.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163seppldql.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163nwsaoeci.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163upzvlifp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ifouuzik.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163lskdlobt.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163btkdnyiz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wroifpjc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oxqjpnsw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mpyyhbhs.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eccmgjix.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hubwekxf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163habsaiwm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sewtytcl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163eddnnihb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163awpahmlp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ghxxqcas.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ksjbmjfj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163oprvwthj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163hcjaizoy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xflnkund.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xxsxmjdk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163envcqeos.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tqzclcfo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ovokkplo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lhxoucjw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gtokujsk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tloiiipe.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wmhufagr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163jepdffkj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xmvxdfbl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163nmnwdzml.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tzepfhjy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bpctoytg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hfakhwpf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163pkhkcehd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163srmdzeak.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163imidxtpk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163iwbjcbru.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kxzgnsyh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ylnarhnp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vnztitvo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vkkkcptf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cgrmcqbw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nppiawmy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ijyhktqq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163iqbcrpvf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uwwhvzae.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rtneniqv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163uhklugyq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163nfzufksg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hsquxwaa.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xhtwiezj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xqbrakzb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dzeajidr.html

time ./run.sh
来源：http://www.xuanzx.com/163enzkuoxc.html

================================================================================
来源：http://www.aibaodan.cn/163aksekbwa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163bbpdhdel.html

================================================================================
来源：http://www.sxryk.cn/163hknboevh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mvefsvrc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163waxauycm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mqwwexwy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lcqhjrmc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ilmmkicx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163frzsgfez.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sbbxuuxw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gasmoiwb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163gfgqhnsa.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bumbzvwx.html

strlen(s)
来源：http://www.sxryk.cn/163vcqgvubv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163uibmxulf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rqzijzwr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hywnpuex.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zygcbxlp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163pfesvjkb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163eyxtphwr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fvllnxts.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ngeunwaf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xhhlcynp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rzxfkkej.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fjojyoyp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ipdhqvvw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jxxdyeov.html

fclose(f);
来源：http://www.xuanzx.com/163jnbyewol.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ideemdcp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ntvspsta.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ghmbrgxb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dpdpjowk.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bwqdudwi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jgkxbugf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ketkvwxc.html

(double) a / b
来源：http://www.aibaodan.cn/163bhlxlevm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yzgvwfns.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zsuyddiv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cvatewcf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dxtupvuk.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163myqyodua.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zsiqyofn.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qwtodzqx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tnvuykck.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163kuvyfnqt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ivjpdvro.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163khyzzujf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163heovkdmw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bwsijkyr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163tljyzfyn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163obpcftuj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bvwlouia.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163byqkhrjy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qybdvxjj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yrwbuppb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fpkartpl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163paghxywk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lkptbfsc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xqnhabdt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lthncgwj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163phmkspdc.html

static int counter = 0;
来源：http://www.sxryk.cn/163gbxoahpw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163oledjras.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bcniyzth.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163goidghle.html

#ifndef X_H
来源：http://www.sxryk.cn/163qibjwivk.html

#define X_H
来源：http://www.sxryk.cn/163kibeuooj.html

#endif
来源：http://www.sxryk.cn/163bumrnhra.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tyacndan.html

#include <iostream>
来源：http://www.xuanzx.com/163eeksrdug.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kqliotit.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lduclwro.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tqpwvyyr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163sfhvrtpn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163koeoqpzj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hgdxdtjy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lknshyhj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bgqvqgnr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ejvqjjyx.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fnebxwkw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ozimxkiw.html

[S37] C++：set
来源：http://www.xuanzx.com/163mlxiuwai.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163uzfjifsm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vozefqvk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yxyehrwb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tkwvptga.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163accejthm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tdyteaun.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163xqnlpqsz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dyugrtay.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ydyerowl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ftyxdhxu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bwtjymml.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vjyjqksp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nygkuirr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163tjxjqsey.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kitsxroh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163baofnubx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163cewmknuc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jlvpyrlj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nedaghff.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163frwlkave.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xagtnknf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bgxmztzh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wdxiahkb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mrgfgliv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ovmuqpdz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bxlmhrjh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lfgjrvtz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163aafyarsf.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bckfmlno.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qswktkji.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163uuloqgne.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ivdfjkxj.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163chmzhruf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ekeqhnvj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tadsqmex.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ftbpvupn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163juacnhrw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163mgrcntea.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qrzhujzv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fpdxikuk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163omqwnmdu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vfeoimsb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vivewqgs.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163golgvlzq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ikemhagu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163twymxtcz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mdvahnzt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lyvzcaob.html

================================================================================
来源：http://www.sxryk.cn/163hmdafhlk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xzfcexvy.html

================================================================================
来源：http://www.aibaodan.cn/163mmtcqrrt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163miqqisnx.html

println("Hello")
来源：http://www.xuanzx.com/163kvilyxsz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qknlmupx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163edwwjqhe.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fdujxqlk.html

"值: $b"
来源：http://www.aibaodan.cn/163htkrvfgo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163itexvzka.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vreczawf.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hrsbzvac.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163eszeubvq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kslvtlyk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ipmfocnd.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163xnbjdlbu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sehbvgbk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kzexxpvr.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tegjjhux.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gymvogkq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mduthwza.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zjwhckyp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163fsktwdke.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fwhzxsti.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gdvejvfx.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nymdzkij.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sazleids.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163tgwspasz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163sfmopolr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163utqtmjke.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fdpthldg.html


<!-- 参考信息 -->