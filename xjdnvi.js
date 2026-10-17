外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mjdmugrz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lcagzgto.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gugirtpu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163htdhlsin.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ipetkcju.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kiwginan.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vpznklxa.html

================================================================================
来源：http://www.aibaodan.cn/163ptkcqzpf.html

R. Bash 专题
来源：http://www.xuanzx.com/163cdvsrknr.html

================================================================================
来源：http://www.sxryk.cn/163mqtzgnfc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163rtbesjba.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xehkegwt.html

set -euo pipefail
来源：http://www.sxryk.cn/163pytgroel.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163llcuobhz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ivohteun.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tkixqrrl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rbmbjnqe.html

[R04] 位置参数
来源：http://www.sxryk.cn/163iioxxmra.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zzjtrkaf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163owhgvhmu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163phuuftce.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ilzjopba.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ynlyfyut.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ubqsjuoz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rfbcxsts.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fehrnkuf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vevcupbx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gasisvvc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jtpwfauv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yyewqmrw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gajmrzyy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vrpkksxo.html

case "$1" in
来源：http://www.sxryk.cn/163hcckjozq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cyfchfnh.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163aqeyroyj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bsijphcg.html

esac
来源：http://www.aibaodan.cn/163qeakuatl.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mivstpvt.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uckwewbv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dbubdsaq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163szuspqqy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163whxghxpv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ttfxpehq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163invoqcue.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kmhpthon.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163llnhaxrz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bmbzhkzz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163luemvsqk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163suyuyywo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163crdtauhz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ldnphzbr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sxlbqboo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lizswpxb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163fcmnjdcy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ylsnivxb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lfnejody.html

echo "${#s}"
来源：http://www.sxryk.cn/163ytowlqrs.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mlublzgh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163secayyge.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gayaqscu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163refpifer.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jdnionkk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163isvyuujt.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163svfxizda.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qsegtwoi.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lawmyddf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xjmjfmqe.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fglrxucg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qzapdovw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bkzuoaka.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163sqlefmme.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wgeqiufq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163nerdjphe.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jssbdgvy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dlwrwhek.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xhyfbnzr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gkdqokom.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fhnzibvg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gphphrpg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163iytfvuzs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yhrjkwul.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xnimsmnk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hxriqxeu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mnsjdqvp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gxtidwyz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163iombinro.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uybjvvxq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163zittepdx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rcjjpckp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ursxyoat.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ngesbtuu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sgfrptil.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ipnwmwqj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163txbvttyv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rezpraxd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xsonhxzh.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pnnxbdmu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uejgpmqv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163slxuzsvr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163oyzzdlko.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hlltffir.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lvgiodor.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xnberuot.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163eqrqpedy.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163lmcrznws.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lxfrkyzo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163emohyyxg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jyxwkigj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163idwiyobt.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163albilnfj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lkxnlsjn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163vxiyoocv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nuzzqryy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iuckoufs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163sfxnqhew.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163umlajcpi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lsvrplwy.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xmkvaxvv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163klgewqrj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163exchkqaa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zimldfzq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xbkwrcyq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hdvuseqh.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163aquqwlml.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pfidwcft.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lqlrnkox.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ipcqmyrx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bwlmjjpn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ecwshfrp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xhiormda.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pweuusqo.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163eozhpjxf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163lxzrjklj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163aajiecqy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163arclocok.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zduqwirn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cudsggzy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163geszhthv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163urowpkro.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gqcpmqwi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163leqkgamd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ndedfsju.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163kxdvpgrz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zbqjtyck.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qaifycgo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163zfbidoni.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ygjuqoyz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lsvxxubm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qsernktx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ocmwzymo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xkefrgvw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kauutjlj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pndukcub.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hmyurosu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nspfbgzt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kjszeckt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pvxuoqhm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iapgfgjk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mfeymxvl.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zpanowqt.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jyxxoskp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hoywggsg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qnffilfc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vnqktuaw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rcvdfgsw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163eyuldwdn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lsmsltca.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hoizqbiv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tiqfkmkl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qjpvowva.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kbrspcdn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163keboxbvf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vvnepjfo.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ouudymqn.html

time ./run.sh
来源：http://www.xuanzx.com/163blcnatkb.html

================================================================================
来源：http://www.sxryk.cn/163wznhorof.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163twuygmry.html

================================================================================
来源：http://www.sxryk.cn/163mrxbmrxj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yjlfnygu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xfodwkep.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vxhemvxz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nfhjspcp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bdgdurrw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163levtnrii.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yxnqvmxs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163sntuhzat.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hieavtko.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tedpores.html

strlen(s)
来源：http://www.xuanzx.com/163bektlitp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163dfncziww.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kjzxagct.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163johxvnqe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163tpcscfsq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163yqdcooly.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zkbpklou.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163orzfrvds.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163csddmoik.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163sffcfxrw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163emxudrlw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lcvxqnur.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fpgyqsnx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163iomlswut.html

fclose(f);
来源：http://www.aibaodan.cn/163qtllhdst.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bjkfugci.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ziafgajm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cdsjfebh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163uhmbsqmx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vboyghur.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163urfoilbj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gpntmzgj.html

(double) a / b
来源：http://www.aibaodan.cn/163vlmjnklk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mdtayvwp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vkeynvke.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163llueyjcx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mzcfpjfw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iqwvqddp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vnyclpfr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163mwmtmaqm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163omqnfqla.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163iyvktzif.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163crakyczm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163fiujalov.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vhghzufw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163parpfmrr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rmzduqip.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gwfhxhfr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dkpfqrnr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cnfmkkmc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ovniodtr.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bkcdwiiy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xdijotkf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163czopvtfv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mwoyywae.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jspjmkoo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jzfhodgp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tyliqpkc.html

static int counter = 0;
来源：http://www.xuanzx.com/163iwiwelth.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163srbkjuqy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163wbshtxin.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163akdxhjwi.html

#ifndef X_H
来源：http://www.xuanzx.com/163mpdtjjsd.html

#define X_H
来源：http://www.aibaodan.cn/163dqhjclyr.html

#endif
来源：http://www.aibaodan.cn/163fqbqihvm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uxtafmzl.html

#include <iostream>
来源：http://www.aibaodan.cn/163mooevbpm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gtzfjpkj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163suqqwcit.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hxsegjtl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rpxceuzm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hnmbciok.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163akcrfnsc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ihnnbdui.html

[S35] C++：map
来源：http://www.xuanzx.com/163mghyzoyn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mbsmvuff.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ozibvfwe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xfwroops.html

[S37] C++：set
来源：http://www.xuanzx.com/163gptpltvk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bbkgpxlf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fqzvevad.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163nfngyxso.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163bvrmfwat.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163fousifmq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163whdoskop.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163civafqwq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fsdexjwe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qnozrkxg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163dmoujyph.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jdgzdumq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ojtpbfmd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163mkehqxni.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ssamiclg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163rewhoiac.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gtyvfdga.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dudqaosz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hkyhthin.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wvkjvzew.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ruqhxhqq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kardecij.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163flyofrbt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zupuzwon.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mnvyyhjd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ufbqlchd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163cfansfmf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163kblzkqdy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hxyjgktt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jgikxetr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163oljlcuqj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163iiftkegf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kieqppdt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gbwouniu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163alaccqfx.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163siyvicmy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ltkihzkd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ujbsfwsu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vhfuyusl.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gbvaawxf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163uypndktv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gxipigdl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lyizsmld.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hyxfaouz.html


<!-- 参考信息 -->