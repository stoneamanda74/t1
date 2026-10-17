外链999!wailian999！

readonly PI=3.14
来源：http://www.xuanzx.com/163jvuqqfpq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gxyuqddf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rcqzrvdk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rcqrvfyi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163narafqng.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163intkxhpz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bihugupu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ossleodf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163yxzgrrhm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wwhgapbu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bdbjmkrd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gbtvaxqn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xfvdrmab.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163iwzdkucu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kcscwkga.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eqizohpy.html

case "$1" in
来源：http://www.sxryk.cn/163cymnunkd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jfvwtjao.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ypuwufeb.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163byabecxe.html

esac
来源：http://www.xuanzx.com/163erbuekpe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163anfmjndc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163yuiisakl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wqcxunys.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163iwceewxf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163tcxlwlii.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qpqpswtx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163omlolrek.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vjcvxkfg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163uhewcfip.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ufoepauv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wvhksquv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xytbdezl.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163mpuimxhb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163faibuimp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163opiyzrxw.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qgrsxzwv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163yiopencf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yjnbkben.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xtzuwiuv.html

echo "${#s}"
来源：http://www.xuanzx.com/163ktojcqax.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163auqzixoi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163iwpkiwuq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rsegakma.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hdvrloox.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zdehrqsx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163neqwryns.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xvgsvnpz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wrklifnw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nfnmyakp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163aihfgfnm.html

[R27] 算术展开
来源：http://www.xuanzx.com/163agwcjfwn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ijjryvgz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hdjjyiwl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xeaovkmm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163uvxetgcw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qugevpft.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gziagoid.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163iotbocoi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jwctwqqa.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163vtmnjtoz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ybimegwq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oqjqzguq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ldnarcrj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bdlilcrr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163btbbpiqy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nijhmfet.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zobmwmop.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ykprvkta.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163fvoiwyrn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163erfdgmjj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163htvdutrz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xtyveols.html

[R38] 管道串联
来源：http://www.sxryk.cn/163flsrruzp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163wqfsjvpo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163akjsrlwg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163sdkkwlkt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mfkgezky.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ndyrxftd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163qvgjocjf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vbpazjda.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163txdkscyu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163okqutarm.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kvncchom.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ihezmkcu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163uuklvneu.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uxibriow.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jjenaqej.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qmklonuf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uohhpqyy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163axviryez.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mobqqrtg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163osryhmds.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163cjlwveul.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kwjhzwnr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mcwqcibv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163tmuiocyx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zvhoebwh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ksjmxjsj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ilewnoie.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163uerprqar.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rxkzugua.html

wc -l a.txt
来源：http://www.xuanzx.com/163hitrkast.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mrxfhusr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163smnexpok.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hloikyll.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163fbabtqex.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ulvlciud.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ekifkcza.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163wbhtklel.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fysddlre.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163diblmzcm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163iwtmxetn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rosfhbqd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hovfxwbr.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163eqbenqaj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jfsegtxm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163toylwdak.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163awpucjne.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fpdwvbui.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cwdufnis.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163imkrglcc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zajhfaga.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wpvqagwl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kugiraew.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zarrqhzr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pucqhvpr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163wdflrcja.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163glopopza.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163awcpvfhe.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163uyixozur.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oygicudm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qmsivupg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163aphhjgjp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163riklqcbm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pqxkzpyk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163elcmheaj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163xjysgeey.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163twfipguf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163welofolw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163odwuvfxn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lvflryzz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gdmptkaa.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163llhfxmcv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qveawayt.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lnutjzvj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kgkdiigt.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lpnofqcv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kmoiqhem.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mghwqvpj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kxhzfsii.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qhhjrczr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vcgooneu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pfttvsuu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fxosdmah.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rfqbjttu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163nwvfephp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163keruyxvl.html

time ./run.sh
来源：http://www.xuanzx.com/163gaueeeqa.html

================================================================================
来源：http://www.xuanzx.com/163xnlhhgtc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163nrbgohqf.html

================================================================================
来源：http://www.aibaodan.cn/163qlpjmmzj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163gmubiqsy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qfyxkszk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bwmadors.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hmyjpgpb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163edaoivpd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163cuiyxxqn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dyghncut.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wjsxlagc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jcnodmwk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xzhxpwnn.html

strlen(s)
来源：http://www.aibaodan.cn/163dyytcnps.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eieuomut.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163grcvwnzn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fldesecr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ydmmmfio.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163befhcgcg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vyvbefat.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163moqlzvkg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163knpzpmmv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163oplevfko.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163byrnqbme.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nfegowel.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hmmlxhaf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163viljcdon.html

fclose(f);
来源：http://www.aibaodan.cn/163nsmwycey.html

[S12] C：写文件
来源：http://www.sxryk.cn/163oackzobs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163uubbkhpz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ybitffda.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xyvpnrmj.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dmvyvvdc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163mpqfgpgb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ytbhfemi.html

(double) a / b
来源：http://www.xuanzx.com/163exaaevfy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fkslyfxf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ecvigxnk.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163byteizuh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pgsayhqh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163vuuizlcn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bldzvzuf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hqtwjgha.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dzfkketj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lpstimby.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cfjbwabj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sjagvoyo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jhpyijpk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163utqiigzu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163yvkismyh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hhczyvbd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tnwzlshb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163avwfmqjn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163bnvhzpom.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rffjgeio.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163xrsdbofz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163crcvdggo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163osnpdnvp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fpxpqurq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163aywxqsnr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wdmaasyf.html

static int counter = 0;
来源：http://www.xuanzx.com/163eiolufbh.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qwvglooh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bxriiyhm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cewpvsad.html

#ifndef X_H
来源：http://www.sxryk.cn/163kyvjiwhj.html

#define X_H
来源：http://www.aibaodan.cn/163youbnxgq.html

#endif
来源：http://www.aibaodan.cn/163yscfiolt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mmyijnfe.html

#include <iostream>
来源：http://www.xuanzx.com/163pofpeoor.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163upfyzxaf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ntofiohz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ozraaqnj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163aqilxwhp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gicaplkz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hnafmhmb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ielotied.html

[S35] C++：map
来源：http://www.xuanzx.com/163nyfkuxur.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163arapqehd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rteihqhe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kesxgxqx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163msjignyv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lbjtqcub.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bzvtjbxk.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ffomzyvk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163nvfuyznu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ddvmqjgd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163glbmhjvi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vfavotkn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hbiglflk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163uzjjsvts.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ridajmzq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qdomksta.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xmffocil.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163salozhfh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163shcnhixx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hrhcetwy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163grwimnfv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163afxotxoa.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yystfgfx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163svrkffft.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qdwdkbhj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hoerbkfd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sdsswzym.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163pcuregjc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fiihbtky.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xrnvrblf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zktluejh.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163osktjsxr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vtzctmno.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163puoaypfr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163szurfelv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ppmdltcm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vnplzroy.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jssgmbuz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fvrqmcsl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fydjotke.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163tguqdjkq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163djaqwbxe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dwafpsen.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vsbindea.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163butnheiv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ewcfjlow.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xueeblaf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wjkhdqvy.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ieobwcfz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qerycdrr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mwzejdlv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fbutyaws.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hjvwntnr.html

================================================================================
来源：http://www.sxryk.cn/163pfhsdmhp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lwusefit.html

================================================================================
来源：http://www.sxryk.cn/163sphdxmsk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163febsygyb.html

println("Hello")
来源：http://www.aibaodan.cn/163hsklopzr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lduswdbl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163slbofgla.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kcqyiejr.html

"值: $b"
来源：http://www.aibaodan.cn/163smvkzqmb.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ppvocnks.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ltfwfawu.html


<!-- 参考信息 -->