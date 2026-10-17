外链999!wailian999！

readonly PI=3.14
来源：http://www.sxryk.cn/163qejxbdzs.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fbgpojdc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kzgppmda.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lsibtpvh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163orqpxjfq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hnsumrhm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ettyxeen.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gpjgwovz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vcrlacqs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dbnxjdjp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163uxrespfq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163iybwkvpw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gnisgcck.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xmkltvzr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163djlpgwur.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ctnyuzns.html

case "$1" in
来源：http://www.sxryk.cn/163zztdmseo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cgdafnsr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163dzmvcmqq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jmfqllla.html

esac
来源：http://www.xuanzx.com/163ewarkbph.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ntlvsvde.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bwqwxevh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cbtzemeh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163oayxwqld.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ccscxfyl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wemekvhp.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xcfbsvbx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hfilggrd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fpjlwwji.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hgcqdvsn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zwkcvhjv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163yyysdzed.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tbsajtod.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163czvdovyb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aleahxrb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fhhqkrpm.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163oyueaidu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lnjntvhk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163moarrkpd.html

echo "${#s}"
来源：http://www.xuanzx.com/163obdgpubn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wjvhukbh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163imuwkalt.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163lfdjesaj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ioqfirzp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163byszoseu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ulskjqxa.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ximyrhqj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rboxtgav.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fvdrcuqr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163munztlha.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jfmallis.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ayirutcv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hepnubyf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163onphvizx.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rjxlrkph.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163emljeyts.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163sutsytmy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163eqvisqzn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zaynzzwx.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xuvjczem.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xsbdgmdg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qqvvlwgr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vukujnci.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kdfuobgz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bgouafcj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fvgporbi.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nczirvsv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kjdernhr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163gruotjxt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163svdojcnh.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tocvktsi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yfxvznvv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ekfalglt.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nkuxoavq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xdfznsnp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163towcdbds.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cjxqymye.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163gwyvccfs.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163djnnmabb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163frvvjjbl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163huuxntmt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163oplenjcl.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ixhvnyem.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163auuayjmz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hupxiuxx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rgmrdptq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ioqqnehq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163olwkosny.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163djyhqgzv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kkzwaefw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xrtvbnzx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163evddkmkh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163nrxkvjbc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ksdvkdif.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163tgvzfjkr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mdlhgpyf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pogdvqeu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163syqtmrko.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163yryhrrtk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163igwgjofd.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ecytprek.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jetxaieg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163frdueprm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yirsldin.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zumuwaix.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163mrwbrcfy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lmnjcivo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bktgmuso.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nyejajxq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sgudwyep.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kfjrmfaf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jjzjbrsr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xbmxycpg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163pekysfkq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vegygglp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163flhaqrmf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163cowjmkfg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xqdshwdn.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uxrglvxu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rigwzyks.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lrqjwoic.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ilofgame.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nshxqebo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hsucosag.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163fhzbfxlf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aiuvlgnd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163oxflflst.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wpidfxtx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163rtojtrmf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hjnlwtko.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wnghdkyb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nrdvrvdl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wzlmmdws.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gnzvlwja.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163feyswbop.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hhmtdhkt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bwcsgzlr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kervkchg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fsmbaglq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sgdyikfc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zieiixmk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uaxenvev.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zmtgqbmc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lqqvgrof.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zfzemghf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hvosfhmw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vpbyznfs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mgzvodom.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163bjjqnaow.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tytcsakq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lvrpgups.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163eponvzxc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lrqyfjvz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uxtukopr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jxxpzvbe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xcdvoohu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kxjxdeaa.html

time ./run.sh
来源：http://www.aibaodan.cn/163upwwytkd.html

================================================================================
来源：http://www.xuanzx.com/163jmapicxz.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dnrsftpz.html

================================================================================
来源：http://www.aibaodan.cn/163patsvdmo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163amakkdwz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bhfwbezs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jfolmlve.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nlutajas.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fsfaxrkv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eoshdicn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163gdmmtdhb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163yjrqhhti.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ofngtsbi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qflxkkyc.html

strlen(s)
来源：http://www.aibaodan.cn/163qowkwcfj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wbkqxoqz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163yxysnhhh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163shokojlz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163gttwyqrn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nxtgchbn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bajeoars.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163iyhujaqb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jzzomauv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ssaemqgn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163glrxrtkw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163qmjmhpws.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163uxumwkcl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sifaenew.html

fclose(f);
来源：http://www.xuanzx.com/163yquczzqf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ypzeptqy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163gswvtung.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qhvgnkao.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yhguytes.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xqbnhydw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ihxqpero.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nvkhclkj.html

(double) a / b
来源：http://www.sxryk.cn/163uwhnddho.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163glkwqsya.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ttigjgib.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163oayplqsj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163fbxubvir.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lzkhsnos.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nkuabnor.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cxkmrxoy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tjyfnlxd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gpqueuha.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kbxnhwna.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vxdgplms.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ecfydckn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wfryjpwf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jdlglgtg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hkjvqvlt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jtkzkuee.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vdfzesrx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xtixgqau.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ebqybukt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163frsarebd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wulpldyv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kbiwverq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wheqfxfh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yplrbxxq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ffivamzj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mskhumrv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163snzzuiel.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163poljzxcv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aznkjjnk.html

#ifndef X_H
来源：http://www.xuanzx.com/163bemmyrxd.html

#define X_H
来源：http://www.xuanzx.com/163npvbhojr.html

#endif
来源：http://www.aibaodan.cn/163sdipqovm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rxtszgvw.html

#include <iostream>
来源：http://www.xuanzx.com/163rnwzljnr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163cmbweqar.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163frshhkra.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gsdudiib.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163enaxsixn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vlkfgsbs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xgyccjwz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163kjezosfp.html

[S35] C++：map
来源：http://www.sxryk.cn/163pazbhtci.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ytyfklyu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163islkgdxt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163slnxaoyl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ycumozua.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gqpddqtv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rcyrwsmf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fwydjcpv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163czzjusbx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163onxhfsvw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163linamfin.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nuqazsnc.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mvpxhcyl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vatytjmg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163eydewpqg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ztmrmfzc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163smmsgdkr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163kimllknt.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cyrjawtr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163symaohbj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qgiszomo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163guzjrgqv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163chiglncn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163dmqmownq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vfzavzkb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163raxwiyqh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163uvrdgyjq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163usxicltn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pykgoasw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163njkktwnf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jpnaqdyp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ykdebkvl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xbzizgmf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kbhexllu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qbzejogq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rgzmbtze.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ezsxkili.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163btqbknfc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qlqcgebm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vaaouwsp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dxsqvccy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163guolneae.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163usrvitqq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163milxfuox.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ibixrqpw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163pofwcfqe.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pxwcadpg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163krcscyqt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rlcedxxs.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163quvstslf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qqnpwzxt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yoruseam.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nztjjqbg.html

================================================================================
来源：http://www.sxryk.cn/163ocibfxaw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qlzuivyn.html

================================================================================
来源：http://www.aibaodan.cn/163jjspvwks.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lujviaye.html

println("Hello")
来源：http://www.aibaodan.cn/163bexgotcy.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ezlbxdug.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pechqwxu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ocevnjzp.html

"值: $b"
来源：http://www.sxryk.cn/163wfyfiwzw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163olonubkk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163abtfuqsa.html


<!-- 参考信息 -->