外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163elfnnqik.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163zyiyxyvj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kxgjcrhm.html

================================================================================
来源：http://www.aibaodan.cn/163lqksafqk.html

R. Bash 专题
来源：http://www.sxryk.cn/163tlgajzlz.html

================================================================================
来源：http://www.sxryk.cn/163ydcsduyn.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lsuiilmt.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163scgdekjz.html

set -euo pipefail
来源：http://www.xuanzx.com/163xsowakjl.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163swvgqkwl.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163stnrdsum.html

[R03] 只读变量
来源：http://www.xuanzx.com/163npwsvezz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gfasrggg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nilqveix.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mvxhpaku.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wxnplaki.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xmctyetz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lhffbcnu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163adkuumdk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fpkhvdmh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cxbgsmhy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bxrjmoxy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dfoihrla.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xoyutqse.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163oninopoa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163styzuulh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bxpnveau.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tyqlmeag.html

case "$1" in
来源：http://www.sxryk.cn/163rqkcfrgh.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bifjxgbh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163svqpwggo.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163mwplwnkr.html

esac
来源：http://www.sxryk.cn/163drsyzkqh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ykxopyqi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bcuxwmhp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163srcpdzbe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gmlvbuwf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163sekrweqp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ltlzoyct.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ibweisdl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dvymxcpo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ctsgpxyk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163prqrcuay.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cfqpfytp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vepzshcv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nqccsfjr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ogvuwkoe.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vrowtxzt.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xaszlixb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pmrxyzvh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163eyjwlfia.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bszdnxpl.html

echo "${#s}"
来源：http://www.sxryk.cn/163xncqjtbv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dpiijioz.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163pngwhoyu.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ccarxpcp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rumsqfot.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163elnqxedt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163csyiofeu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cewdbzys.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fawpshyn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gruxyaal.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nainlayj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ftqqvkyo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ffkdleaz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163evhehdbp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hzwvuvhw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ttcwuzue.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xqvynwur.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iyfyiciw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163omngfrgh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163yuokxfkp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rrztpize.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kglvajeo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nydnsqnk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163suyhfpgd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sybzanhl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163knkjspbw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dunnvtfw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ojzllrna.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163eilxjmzt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cfzlvnnm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163szaliigj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rvsorzcq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mwbfpwqn.html

[R38] 管道串联
来源：http://www.xuanzx.com/163aydmtemg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163iyvlztiv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jakffzxv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163kaoyypxv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lmwznzhw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163asaqedod.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hzupbnsm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163icpbtwue.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zhqdfnqu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dduhhsgu.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dqcwombq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mycfhwdp.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bsoxcygm.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rrldjofd.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rxikqbjm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wnosbmse.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mfyygcnd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xglxhxpw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163iqczgjpw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gxflwzur.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163sgxikzzp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hefdsssz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163eaydzyow.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163urltrhtd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ykahwstu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wdnyhurd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163npsikrmw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zeweoumc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163smbeynlf.html

wc -l a.txt
来源：http://www.xuanzx.com/163jrcifvrm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qkjvifeu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163orqswoqm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zwxyglmg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nmretmxd.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nueznspa.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yysvumsh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163evoymidz.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cvqivkiw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xzndshvu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163zxkqebmr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163gcmpfeyi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hbgiwprf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163hoaqsmdn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rreekowd.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vrulonfr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wcfhrkto.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163thaftbgb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pspciyob.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163nbcwxnml.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gufnbzwx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qgmhwjpf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nzlievvx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qqwyyfoz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jjiogadz.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163roojwhck.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bllzvwtt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xinmzefn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163oplflolt.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163akdtrapg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ratjwwhp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163stvsfuxy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ezqrxqmz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hvxdcxds.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lgwtbkre.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163nupxwsrc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wveaccnh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qiduapat.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lfdawnli.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163xqwngiur.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163riymuldm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dpnbqzhv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mwallgvz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xjqfhloj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163stobqeqa.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163khszpczc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pvgjibkl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163giinnjjo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pvoxtdkz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hldcrqpz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ioxphgar.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163kxmleogh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kntirnvk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xiqgkeph.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cairafmg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ocftgnau.html

time ./run.sh
来源：http://www.xuanzx.com/163btfmfnjr.html

================================================================================
来源：http://www.xuanzx.com/163bghqmscr.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163sdeewjdq.html

================================================================================
来源：http://www.xuanzx.com/163qgdgedgd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163uzdgdpxi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ypkqhdle.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163usqpwaol.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nzboldqa.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ohqzcgub.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xidvlouj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163btawdjbf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163axsuawyo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163khslxpjb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sobdhjjx.html

strlen(s)
来源：http://www.xuanzx.com/163rzczorhq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pabznjmw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163navdpeno.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lxkoxgmr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163amgaufmo.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hfxvwhlc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dgpzrwlm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ueeatdmo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ntbnpdzc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vxyrclwn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163llmhwxyf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163megbtbfa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163caldcnyl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uyhregdx.html

fclose(f);
来源：http://www.sxryk.cn/163jjlbjubj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vigpnxwq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bhhejdma.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uwbxyigx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kpoxrhwb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uvciuqmn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cldmcbep.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wtvpyaev.html

(double) a / b
来源：http://www.aibaodan.cn/163vsnnixpy.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hrngoiqf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163apnheotn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rcwrkymj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gosgoisr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xgxcwsrr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163efihneuv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163kivaiyhe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bivkypxi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tffjmeog.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nwphbsjl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163evhsqyoq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pcokghkl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qothaclb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163polcezdj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ilnvkwqv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yilxlxos.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163czjktnlq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lemlardj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hvmkrckt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cxfmvzwu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fdnrtzos.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163jbigbbuk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163zwyqmcrn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lnqhzezl.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163cbrmmkug.html

static int counter = 0;
来源：http://www.xuanzx.com/163iyioagdg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163oxqwkivl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163sgetdvcc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163webnwqwd.html

#ifndef X_H
来源：http://www.sxryk.cn/163xtfgucvr.html

#define X_H
来源：http://www.xuanzx.com/163ymraiidb.html

#endif
来源：http://www.aibaodan.cn/163soxxvvvw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xylfdxqq.html

#include <iostream>
来源：http://www.aibaodan.cn/163zmibnowo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163umidryjs.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fpoylmxy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vjiuygfv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nlotnzxd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163iuisyvng.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kuxeuhnb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jbkbupzm.html

[S35] C++：map
来源：http://www.xuanzx.com/163zdyyzqvx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mkbynypq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lyprgupd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vahxknab.html

[S37] C++：set
来源：http://www.sxryk.cn/163genlgjov.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ggzpdewg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vuoiamih.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tfdyfkmu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163cbfpvcex.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mgxapakb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ltmcgctc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cjfayiby.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cqvsxcuh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bxbunihu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zbhkimtb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fusptctd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lorqyzpe.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ojtlqwky.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wyopsuji.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ndpqbcww.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163vyftfrbl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hgsysbbr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tcmnsjfe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xhhsfwnm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163tfnnvjzb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rhtnbxwr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lcfsyhdc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vxkzorbv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vrgqhkef.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ivbuuqjc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wfbmukpz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xrtwkrue.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163edxnofvw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nxmhgqzq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rxdzkzlx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163duludgws.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hpfytcok.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hioyyacy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fyjkyoyw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wkisoziy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hsdjynic.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ypoqmrfv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lbdhirbk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gpcavigm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xoyeamqi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vmbonbxy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pbynwgus.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vfsmvgsr.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163glafqwfz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163omaxxege.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163soxfcxzm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163sovqxkgl.html


<!-- 参考信息 -->