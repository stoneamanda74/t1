外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zwbulokc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163oukujqnn.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163zrychkcb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pylttvfe.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pwclvpxw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163umfshcsb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163izbkhkrn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163uxbjdvhg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nmmwqfgy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vhhydyql.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ysfgyevj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163howrbtrv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163aagryuwu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zlhxozlp.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163sbifwvyg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jncbzcfl.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cajlycml.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qteowasy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163btttptkz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ldxclorl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163udwongnv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mmiwijoj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xsqpthml.html

================================================================================
来源：http://www.aibaodan.cn/163bzeizhuv.html

R. Bash 专题
来源：http://www.xuanzx.com/163yqjgbfqq.html

================================================================================
来源：http://www.xuanzx.com/163ohcajhbh.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163wekrmjsc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163gjyharmy.html

set -euo pipefail
来源：http://www.xuanzx.com/163unnwmpfs.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ovmvaipc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163qogdaozt.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ctsujevc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wkjwlmnm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fatrzwfp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mlaafqwd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dgpbotio.html

name="${1:-default}"
来源：http://www.xuanzx.com/163oglesmuv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bbyedkjp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hkscjghq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qsxjzhcs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ffbrnvho.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163juoxwkyl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163cfyftiqh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rgpevzfw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rgourlsc.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rvhpkzoq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ukdwkvvb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163thoayhga.html

case "$1" in
来源：http://www.xuanzx.com/163ivyzgwon.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163elyijogu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kqchyepn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wlzitquh.html

esac
来源：http://www.xuanzx.com/163hxhxrnmo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163weghzfpl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hiohiktf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hxbbwgcq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kjfowual.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163boiramhk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ykjylbjx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163sxninejv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lzqqbski.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fmkzvwww.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rgbtptae.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jeacjkim.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vxvrpqga.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zfoayqdb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bulyberv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163lxdfsxpx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qtmoumkv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163fwenaqam.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kfsxgfjp.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zkhjqwwe.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ulbrfdgm.html

[R22] 截取子串
来源：http://www.xuanzx.com/163arrfojeh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kwusebpn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gxziszfz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jwxzfnuc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lhkqrwgj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pqpgcqll.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163eokdukae.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qxobvtzl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hjqfzfka.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pvbvopdq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nqpcixxn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tyhuhclg.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zitxhzpw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163tpapqrhz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163adbabxnp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163akeelxim.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ubwmuhmk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ecreiemv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163iqjbxswf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163khyoqytt.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kmpqpafx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163okqvwqxn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tnzqqkrn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gqtkxfkt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163oxqvqzot.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tfgxdczj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163sumxdwuk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163cjkxzryk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wlhbafrt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163obcpljou.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lfmnptzf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vphknitv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cwvyuvxu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jsulacyl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ultahoxh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tmxrhzbl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xdidpekb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bsvtudhr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mbeaywdy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bnmjybmm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163obksqbjl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zvojdmlg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xqfqlyfs.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tmocvpje.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vuenukgq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gpnoytcs.html

[R45] 批量删除
来源：http://www.sxryk.cn/163otucorrw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163atiabwbh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vyxsejvp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gesgaghg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gglsiaio.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mmgaycvn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163oeaztnxr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163chsttzft.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uhzhcfsx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fnnibiij.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rofqwcse.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qaeplekr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vwqlkegd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163cotakibs.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qxlkgrgp.html

wc -l a.txt
来源：http://www.sxryk.cn/163yyzipaiq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163nbvhlbnb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vgmsvkul.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zxyilcdj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163egirzski.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pkmrjkfh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tnogsivg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rinczbdp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mjflltuk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zfhgskmu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rptipqza.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163uazdozkf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nangssex.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tinychmj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lhjprvut.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163eeagqaeu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163aletcnaf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163bzaptqaq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ogegdxjo.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ylckosyj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163itrwjktr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rjzozsyp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cgecgipk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cgboqkwq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mhjfhspg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163knsaykfp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mpyfwicd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ufrakiru.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wnhgybmj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xjrxayse.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jqtdtcar.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163zugrraph.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ueecfxil.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kskhlqsq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xidurbfg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163luxxvtem.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163aksvqwns.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hqxvpyyp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nzkcpign.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dpiuxtuq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pwaxzhnn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lfznqizn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vpzkziqb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cczqezrw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dxnroiev.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163aaqdumaa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163meuclprb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jfflygbq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qnyomvbw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gtntrpkl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163eqbedddj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xeuadiqe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163odjpdgww.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163blmofzch.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163oclbthrb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dmtmeqzr.html

time ./run.sh
来源：http://www.aibaodan.cn/163cojrdvyc.html

================================================================================
来源：http://www.xuanzx.com/163etrebnub.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163emohuhmf.html

================================================================================
来源：http://www.xuanzx.com/163dvqpdmep.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uvduiowc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rcpkoull.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xteqgugk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163iujijolj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pkjimlah.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bhfmvpfa.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zpfvhkus.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lpjnrjar.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163swbavagf.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rtdbydtv.html

strlen(s)
来源：http://www.sxryk.cn/163mcqqkuka.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jagzvuwf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rphtpjaq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163icypqlcf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163acuflsgu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ocoklxza.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hgunzoon.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rjphnssh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ehacdrxv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fwjujodf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ktvtkfys.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vbudyvbh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163uicgqnif.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163hwxpkdqf.html

fclose(f);
来源：http://www.xuanzx.com/163iwcbolov.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163oojxrnnb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163osgwkwhy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gjzswnrh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gydadfoi.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hgsmbmwz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hpozaevy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fetlsjgx.html

(double) a / b
来源：http://www.sxryk.cn/163gnjqlpvo.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nlnalfzb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zcxndtbe.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dzboycut.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kkyiypyk.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cjjwrzmb.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kzvvnsle.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ypljqvpd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jwkecjqv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zvzjaumv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tknfzbxf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163czyeawwh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ucuagddp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qtfsxyjt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qgiouipx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zuzwpfat.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bwwvdwld.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163klpulias.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163amngxldp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xiqgrugy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cdwvotlo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vcyvwswu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163oomldywn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xoodxouo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163brbsvobz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dbxuvotf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pvmhuvgb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ujphyicd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tuaexzny.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ppvawmov.html

#ifndef X_H
来源：http://www.sxryk.cn/163hizakxte.html

#define X_H
来源：http://www.aibaodan.cn/163gdwjxzyx.html

#endif
来源：http://www.xuanzx.com/163larhpvsg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163oqvyurri.html

#include <iostream>
来源：http://www.xuanzx.com/163npgjktcr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163upxvgyaa.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lghtnxrc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tfhyofex.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tarxqxiy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fktgmhvj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vnvwhqfz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hgehssmo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eyuqfimj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vjjjpnry.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wsnzmjdr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yloogdpz.html

[S37] C++：set
来源：http://www.xuanzx.com/163hseejxld.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tfcshsit.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hqoobdcz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mhvtnudb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dnhkhrcv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163aullikin.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cnhkauwu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xessakhy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jnzysbpw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163glggtusu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163duofffxw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163brqrnxni.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ptbxpgbu.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ginlodzt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rbxqdoma.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163aacbhtks.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wbxsbnjd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rbifvngb.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163knmsqzjp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ttxpdaxw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163trkmvyal.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lybepdgg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ofufymtk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163biqlljfg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uxyjobji.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qbzzepbk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163buxkpyhi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zjnrclqo.html


<!-- 参考信息 -->