外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163sopbokub.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hriqzwqy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bvtfzsqm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163mtugibyb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163phuvlmun.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163oiqgklkr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mbekmige.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mnsyftvh.html

case "$1" in
来源：http://www.aibaodan.cn/163kvhckgfu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163yelzeejs.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163maduxiwt.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gtjlkrac.html

esac
来源：http://www.aibaodan.cn/163paluvbjr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tomwelhl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ehzqamqv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hcazzfvf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163iucmcgxh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ubajsxrt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qcteyowf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vznhihza.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hyacgzzn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tcicswsf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gwtuteti.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163khlxsyff.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fxnkoniy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163eyxblapw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163aynfpkoh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163klduswgt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hblnlqez.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ipdaiedz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tdsxzvir.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163uhwlfqmq.html

echo "${#s}"
来源：http://www.sxryk.cn/163pdvofpud.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rjuettgs.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163twgytwsf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163uqwmnsct.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qfobuoav.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qmbbyjvc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163xpguhfqz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163oisoygur.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bljmbhoo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163guhcoudc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fcieeixv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jbzmvvzt.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mxumaapk.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vuicsugj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zluppzbc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kljcleeu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lnjltjbr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163sfjlugki.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wmwlefab.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rreqfsmf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163whtnoojq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fmydtyrc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163yheopopl.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163fysliyyb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vsfntkiu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xgytiabl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dqarjrmd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nqqxghpi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mtzywukt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tzslhzqf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ewgxcdeg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vjduvbhk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qzzafurq.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zsrbkyiv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zcghdclx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ztojimnh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lqldnmcc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jbohxlmt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kevivsza.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qyfcssdf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fusotepm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tvstapya.html

wc -l < a.txt
来源：http://www.sxryk.cn/163iybnjhqe.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163czdhsftj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163bvxzhcez.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qjebhspd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163kybwmbro.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vzjtnuni.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nhrxnznj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vzkfuhvc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163znajrpeo.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zowjxuzt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163aetytyid.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vkneaodz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zppkilta.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163sjjgsmud.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sfsixxbw.html

[R50] awk 求和
来源：http://www.xuanzx.com/163uysjomyg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ekrxfzlu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lhsvooox.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fbhjnrex.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ndkukikv.html

wc -l a.txt
来源：http://www.sxryk.cn/163urqwoagw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ixnzdtzp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ibjyyvau.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wqczjzew.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lruucvhi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163cxkwzozl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163sqyqwqgy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xpfhiayz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163leaoqfbm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tjvfbiuv.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zwehoaku.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dpfajndh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163inyhjxes.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fjfjudae.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163iudvywvx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ufbjbgkl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gziexhyt.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kzdzidaa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ijjitqeq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zyyrjdzq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163iymyzifv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sbrmwafw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mhlhliny.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vxavbemk.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tmhsximu.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bjjqehzp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hbhhchlw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wstmyynd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163pdqdstgj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yavmjnsi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mtzufivp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163syewwilw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dylzdmpl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ktydoyks.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163otzanptp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ccqfpkvr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163toaibbwr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163shcasvak.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kzoyblgj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ibfxouif.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163aiqbaqtc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tipouyky.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163tsujdyot.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163msctevof.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sdpfexab.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163fqxkcmxn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163hjmxextw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163igsrxcce.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163khxaldsk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fohrilax.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163amvclogl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hoytbmoz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lhfpwant.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163axzgfnxb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qulpzlmf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ishmocsd.html

time ./run.sh
来源：http://www.xuanzx.com/163yxeqlzqo.html

================================================================================
来源：http://www.xuanzx.com/163brabhlgx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vgshcxjp.html

================================================================================
来源：http://www.xuanzx.com/163dswqzoxm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rnkmselk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163klwadbni.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163hyaabvik.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163howhkbkk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jswwuwcw.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ikqqtdxs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tupcztqt.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ecvteedw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163smevweyc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163onlionyr.html

strlen(s)
来源：http://www.xuanzx.com/163ghstjrxp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ymprdqda.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dpzegeji.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xlgcfmeh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lqgzwjdr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ocgjxmkv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pdxslkhz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163stnghoni.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kbxucvey.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163akynlxsk.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qeigobqd.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163oxxdvdfd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wvmokfam.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vtzdqdwh.html

fclose(f);
来源：http://www.sxryk.cn/163jljtvgzz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ijgcukux.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ecmwlpmk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vlturbtw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wfjjuime.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kfdwxsxy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163idkkcrwr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ylbetijq.html

(double) a / b
来源：http://www.xuanzx.com/163ifgxoafe.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ktockeoc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vxxllpft.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wjslrwcq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cwczxzwl.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rdidmcio.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rxhcfwdx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ljnqbmbs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ohrvwymm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lfhhvjqu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bmmibbwu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rikgkghc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gprwzmmi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gyptectu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lcewgqru.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kelvvwsa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ybcbhwui.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cdlchhwl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fcgfwhok.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ifpwrrxe.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vybvgkhb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fkigliys.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ktyfvmfd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nheqymey.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163axqguwuy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163aohmaoaj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mnzneiqw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fkcwqszz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163umwpzvzr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163lznxrqya.html

#ifndef X_H
来源：http://www.sxryk.cn/163lmpohdca.html

#define X_H
来源：http://www.sxryk.cn/163yxbgdbcm.html

#endif
来源：http://www.aibaodan.cn/163yfvkeyea.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zlkhmkau.html

#include <iostream>
来源：http://www.aibaodan.cn/163pxypawxj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rmlpzlqn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163idkwsjne.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kjklpjfz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163htagmjgq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gjadqqvk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163sakktsfn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ynppcuqe.html

[S35] C++：map
来源：http://www.xuanzx.com/163ovfosper.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163immixlkf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163afejkacv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ynkxlmlg.html

[S37] C++：set
来源：http://www.xuanzx.com/163xluvxhdb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ujqdcjkc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zqhxwsnm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jnzjkdvy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163syxehohd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163tewxlpti.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kwasiist.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rtaztozz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rzissvhk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gaajesoe.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qaekvmdp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ywurccyi.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kmdzhqrd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ahevmrjl.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bqrqywjc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qabwesjd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tygyhxyx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fojvlrki.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xzcunhfy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163bjmdxzla.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qmmjvoqp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163qhnxguoa.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tqceefum.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yqysklwx.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163zqyvlksg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hfesvcdg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163nsoazgdd.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oixdyupy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qtevuuew.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cknfvypj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gwrktlsi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xuxdnnnd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xslwfmrt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rgbbiopm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pukjfrkc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163szchczmi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163oktmreeh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163tbgozgvc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163sgplyfjr.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dcccyrsy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163yjtamiia.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163sbwcknfp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ekiitefw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mpdmhhmj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zmeuztfl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xpoyxnta.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tlucmsgk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zfxiocgq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163seocrtuw.html

================================================================================
来源：http://www.aibaodan.cn/163pxsvlnoy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163itbqffel.html

================================================================================
来源：http://www.aibaodan.cn/163iqerdhnx.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qnhvunql.html

println("Hello")
来源：http://www.aibaodan.cn/163yeboddom.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163whgkekei.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vasapsqg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pssacnvx.html

"值: $b"
来源：http://www.aibaodan.cn/163xokrnrrw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qcjscxox.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bxvggfnv.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163hwdqhgpz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163amepvbhs.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uvutkjsl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163krmdzjjt.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nxfirsbo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163seigozdl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cnogzvby.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wjejjswu.html


<!-- 参考信息 -->