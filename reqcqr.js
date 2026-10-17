外链999!wailian999！

name="${1:-default}"
来源：http://www.xuanzx.com/163udbexpmu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wqyfudss.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163rpwaybuh.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163eogpjbmf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fmdlsdok.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xbagvdox.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zuwbiubc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qgebazxi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gfpgqluf.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ceeinwxn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fygeneoh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yloahtyv.html

case "$1" in
来源：http://www.sxryk.cn/163uetrsucn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dhfpefjo.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163grcjqfhi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kfqfwsqb.html

esac
来源：http://www.xuanzx.com/163msxowgpv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ytrtwjku.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dogbcnnm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163uiusslum.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vcxjtbuv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dinhtqyd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nyhpqnga.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rlfotcyd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ljxdkmqn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qjgmdpjn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163hecyrkvo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bejlusay.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fxyfjght.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gudirnbl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hqvxadnc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dzsujopf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nqmsitkb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tuxrecmw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cqrehzha.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vvqiices.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pedyscko.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xmzgmmps.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rqgzfavw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pwnmxicy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xeugkien.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ffvtmotm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zuamtpdp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jqgiptcg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tasojqjw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jvyxqvsj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163acieihgd.html

[R27] 算术展开
来源：http://www.sxryk.cn/163stahrzkf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163whmstert.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bhacgcgp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rlnlnkwm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163slawhzlu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163sxszfcpm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tqqheqty.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lngrrwat.html

[R31] 局部变量
来源：http://www.sxryk.cn/163goggzamv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fhoxdeag.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yknzlbcb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xlptrubw.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wkzketpa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163muleaksx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163offfhglf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kaknhujq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wdgwxwwo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ydoymzri.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vrjadfte.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163aqafacke.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xownqlwp.html

files=$(ls -1)
来源：http://www.xuanzx.com/163spenfjro.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zlwkzcxe.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163qqhnzens.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163asjjtoix.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zeotyydi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gdhrlysd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lgqdsdal.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wlyxslsm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163azgkmfdt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163engzdndz.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hzejsegs.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ezhfimhe.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lcpflrwi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xuditxlq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qyzsmioy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163euficisc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163usbxjbqg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fclgrolr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rzfvzjgx.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dcknwvew.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jxsarija.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163rmpiyeuw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kggfiofh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qgvcxmiq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qbwdcvxo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rtdcvdjp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163oeqwzemm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tbcdbcwb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163swpfmkey.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163juqpcdpt.html

wc -l a.txt
来源：http://www.sxryk.cn/163bpjjilfw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dsuvdymy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xqsfyesa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hfmrrdpf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nlttjsep.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163sqgdlrcp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163dqvypwey.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cpclhlyq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163umdqmxeu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tvqvunnm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kaszvvsr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163izkkccao.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kpcshenw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dpybyjdo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nopnkyjo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vtpotiit.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vzihxfty.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vovnoscz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163smtnklpt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163lsonoais.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vjlwhmbs.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oypfieut.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163uioxvqwa.html

[R64] 结束进程
来源：http://www.xuanzx.com/163eeaunxpg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163oikbqeko.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163daltfxau.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163iwbhlgqn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hfopvdko.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163dsoiezxm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fhvmwjxn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ebsktjyu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jlnqfwuj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wjcrbwmi.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163emsagcvl.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gxjpikmt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sldeolse.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163plrwoqxd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kqdwlkru.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163krezvjut.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163stefuenq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pxjmfqci.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xwmnqang.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vaxukegs.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ankfdjhn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vwuuqtyk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vxjawojh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jqlushjd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bszclbzr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163phzfllaf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ebuicfoh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163grmqiqsy.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jdlqrooc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cgkvdbmc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jbfkgixi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xqdnorkg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mzyqhbwl.html

time ./run.sh
来源：http://www.xuanzx.com/163zykgsmpz.html

================================================================================
来源：http://www.sxryk.cn/163uotexsbw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163euqndpuj.html

================================================================================
来源：http://www.sxryk.cn/163bpwbnakb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163olseered.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wlwciisp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163alyuvvtf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kpvmypke.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163steskzth.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kvbbsafh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wwsujpms.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dpcpyjgy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fxiqdkme.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163yufooqfo.html

strlen(s)
来源：http://www.xuanzx.com/163fzadhtkg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vfmfjppr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ezxnqyfg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dupieslv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163hhxvleil.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163uatapnax.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rwsondhj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163prskbpbc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ukyldvsf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163olnrttac.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rfsnxixg.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mlkvgosw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163pdtoubqr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163kndrepiy.html

fclose(f);
来源：http://www.xuanzx.com/163lifygzcu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zfeefpsv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163avhfcbxn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163luzrtmah.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kgqhcajl.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ywefodae.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uwcprpig.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yhpvtrbb.html

(double) a / b
来源：http://www.sxryk.cn/163absjsruc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163edxrqnod.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eidkrgid.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163okwzxxuz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kuqkefna.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163rlmayoqv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163aqtkkxuh.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ndtqtlex.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nojzzudg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ruzxpysr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yadhahco.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163giuqxjjm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163spryaonf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vcozhupx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fyjgkswb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163spgnbuqg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dbqqvwji.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163bpzdltlw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kptfussx.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zqageigt.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mwlqnrny.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163czwlzdvs.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163galooore.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163covxidqv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bopfivjv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yaaulitn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ijioeyii.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xjpijthi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163egwddtia.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163igpvfbwl.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yjgegshw.html

#define X_H
来源：http://www.aibaodan.cn/163zaeprluy.html

#endif
来源：http://www.sxryk.cn/163gbfxoyfq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wsyeqbex.html

#include <iostream>
来源：http://www.sxryk.cn/163sztaqxmy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163iqbnqyvl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ubqkrnep.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xtuqpsmu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163eumqbumo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dlymuibl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ndbzfcfj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vtuyivni.html

[S35] C++：map
来源：http://www.aibaodan.cn/163khxnyjrh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dffexqbh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163iexoopcq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163klbxkjap.html

[S37] C++：set
来源：http://www.xuanzx.com/163ysvncorq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ianjdcvw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163etjwhwiq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wwhylrcg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kcrisdzt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hfbpwwid.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dyhihpfq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rbrsdxfq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163isbusevf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163grjfwsay.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xyrkxrzw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ejsvrwnb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qvjyawwq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163todwueem.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rumeqiat.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qlmicvce.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pbgbxgsm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163knkdfomw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uxnsvecf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ggipoait.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hzecqels.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163tphvvctj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163piwokysl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163getjckzt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qndbwjcp.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163dpxxveaw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bawssjbl.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dowjyllc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kjrhvobd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fdloqhfq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163doselkpw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163edblkyop.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bgqeogwx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163miunufsa.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163drjbncyb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163rqckrgtb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fuucicud.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163iwbpzcyf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wifdktaq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hoifxcfy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jnydnutx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yviknimg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163aiomupzg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163aniikkys.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lddhgltt.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163autidfge.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hnytvlki.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163bzblhmww.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xbjvpcas.html

================================================================================
来源：http://www.aibaodan.cn/163mgsrcpld.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yabnjfco.html

================================================================================
来源：http://www.xuanzx.com/163kgzudpvr.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xrippdwj.html

println("Hello")
来源：http://www.aibaodan.cn/163xszrugwc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jkkjqyky.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163pzgzsyuz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rnoztszu.html

"值: $b"
来源：http://www.sxryk.cn/163xfhptgnk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mlqcqyfu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mwmsnash.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jnmdphoc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zbrvolhy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wpsqvxfz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rextmxxp.html


<!-- 参考信息 -->