外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163guevabsr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ftfguiwg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wjkrrzzd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163avjjuskt.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163npvnaskt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163cdmrslfm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tdletxrh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mavhgrxx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xgaknzqx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163eeblztnf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aszyllrv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163svkuzhzi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163klszmubl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163atnckjlz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ztolwhoj.html

================================================================================
来源：http://www.sxryk.cn/163qhzaludx.html

R. Bash 专题
来源：http://www.xuanzx.com/163ywsudkpl.html

================================================================================
来源：http://www.sxryk.cn/163gjkzecup.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jeqkrhzi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uxtrusir.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ecntdrnh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zrohdwhw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rtthncto.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ndvlzenh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163lkpfjziy.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ootqwfyz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mvskdtkx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pembtwcz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163lxuprifd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ryezaygz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163etmbcoeh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163duwtxalp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163amvyxkpc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xlygmwoh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163enwxpoxz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163tumcydbr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wpvnqkiy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ceehpvyx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dkagyngk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fvqdqhix.html

case "$1" in
来源：http://www.aibaodan.cn/163stcnueki.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163uortnazx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163acpzhdfx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rzqjidpk.html

esac
来源：http://www.xuanzx.com/163ruorfoht.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lmmyphli.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163gybgunuw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xhhzduwn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zllayopu.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qmlelrqs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cfuqeica.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163grdjfrxz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ztlkzylc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hrfyixeh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163twuojgrv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163omcmqnng.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163plhwuiux.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bfcriovn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bkjjlnhy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ipwqtbua.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vsavomva.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vqdguzlk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163xunsrqyj.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pfvunrrs.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wzzlmvdd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zhsjvgrm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vnlfxdlr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ctxoiraj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mvlwbrfn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jrsalnmg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163dfpczzft.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163vmllttkw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gjjougwi.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pxxrhqlx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wnmlgnft.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kagurtqi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rqfsmuya.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163amcwewud.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163owkljrro.html

[R29] 定义函数
来源：http://www.xuanzx.com/163sdtszijh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jpfdnovs.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mqjanqnk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lsgfngms.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uoaytpbl.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lxlxaizl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ezzfljcb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xgnwivlr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ljjwuvfa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yxioibdh.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163stcweptv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dzhvohnl.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fytdhqcg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163smuazjih.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dkoiuils.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163udhbkkfo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163dwixfogw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163boiaknxe.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qspwkfal.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fppsqxec.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zhqhmnku.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163cvjujbbh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rrjzkvnc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163iuirsdxd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163flpljnty.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163maqsjrfj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163foqxpody.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hlhfqkrc.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163svhesgtf.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163gudsrgmn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kpizkofo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sbbpriuz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wzkhaiyj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kdswzrhn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sywznxfz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cvrlawbt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gildvmmd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wyfbutpj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zolokqlz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ttbobxui.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163fczsawjj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163woaddpxi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jxevlgfh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163slixnbdt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tfludrtk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vuoyeszg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163oaotjfhj.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hjajssji.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163sfmxahpd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163utzozocw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uzersods.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rqfawfqw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yzmdqcsw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wflqbvvj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nsxnvsmb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163efrhqusf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163evmetfyq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ztmdofws.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pvzfcqvn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cgowhbhx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rxjlefws.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uaatjpft.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fyccyccr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163oycrnnms.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pwksnfvq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163gkrbjfrk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pthkdofy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xrbzvykg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gsmzjxll.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pprsyvqe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tsbnvkyg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uullxjdw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bsxslizf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163syurjjab.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qefhcafn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ncpdnhop.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zndmneuc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163abncvuho.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163eyszppqi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cyvejcae.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hoggzhbr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163znrwzndj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vyquksdc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uymrdeqa.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163izblrvqj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163cjqyqpvi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kjebcnux.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rafxhtek.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ysqlqros.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vccfkvlo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wwgfwyeb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163twmgwkop.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pmuauffy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ejkufgxd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163stoknsny.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ivulpsow.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cjjobwtb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163uyqnanem.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163enprxyso.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163muthjstn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kdygyfmk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pjwnrqhh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hpdnhnee.html

time ./run.sh
来源：http://www.aibaodan.cn/163ruympuba.html

================================================================================
来源：http://www.aibaodan.cn/163chbjzcgv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pmgpilbr.html

================================================================================
来源：http://www.xuanzx.com/163lrllayqp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jphipduv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ktyyjses.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163chevpmjn.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163islhhbfx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fpkdgcdg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163enlcxoci.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sofkzmno.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tgvwhxlp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ncntvsta.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tfcsmioh.html

strlen(s)
来源：http://www.aibaodan.cn/163fykbfamj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sznlrlry.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163qoppuflh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ahbpenoo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fhrczvxx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ohtzzrbi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163odwnookz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yehcentb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fteefhjf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163idvyynmw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mntpehbo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tqxssjiw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zogpjbkp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kzsrhwes.html

fclose(f);
来源：http://www.xuanzx.com/163dogcnjuz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163diwxtzwk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163azpmohlb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163idkdlphq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rpryjjne.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vyowwyqs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fjiuqjtf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hpxmcrbi.html

(double) a / b
来源：http://www.aibaodan.cn/163lqdjgagk.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tigzjsyc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lbeoamne.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163odhtlpgo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163sgxvpvid.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163golitooz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gwqkfxty.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xwfqoltj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hlptqevh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163yhqwylqz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fyvkifyc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wtmwruuq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bpmwisqf.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tkrwagxk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lwyicgpj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fmwbsvlv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ilnqcpit.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hvaoxaux.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ommfyzxm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163goyhnoqc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163crloxqhc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zqcoineh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sbkrauqb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vslpqodt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163awgrujyp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pnsiwryi.html

static int counter = 0;
来源：http://www.xuanzx.com/163migucetv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163oyhohikm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163shozwoao.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163khwqgsuq.html

#ifndef X_H
来源：http://www.sxryk.cn/163hpxderie.html

#define X_H
来源：http://www.xuanzx.com/163berlmnkv.html

#endif
来源：http://www.xuanzx.com/163doobihoe.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jxzhmonx.html

#include <iostream>
来源：http://www.sxryk.cn/163nzzkfdyg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ytfullrs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lvfioqjo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gadytuah.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mlozwcbn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kxvjnrsk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zmqfvtki.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163warpcblo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rtpgdlow.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dxsnprex.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163vjgpbwlb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ltnpvlil.html

[S37] C++：set
来源：http://www.sxryk.cn/163kxgelrki.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163djvmyxhv.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uhfqrnqu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zgrgjget.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163evqmwgtb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vdccdavw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163lwqbjkuv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qvfadzmm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hretyqwv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hriguwsx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ufrcgjgn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nisyemov.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163kloriamq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hxqeuiez.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163otjrjlpg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yaypcspn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xfgluyta.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gokgwfxu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rvesltcx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mlbkvadj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163viewpfkr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rhwdexwu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163szvhitgq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hutftcqg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vlyfmkan.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163realhndp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163nigfjswv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jlwnxcsu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tpaxlxdk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163sccihfsv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xsvfbejw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hpnqycxr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ateubghh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xmuqnwic.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hxsgynly.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hilzjnmk.html


<!-- 参考信息 -->