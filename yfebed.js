外链999!wailian999！

[Q78] 当前时间
来源：http://www.xuanzx.com/163fmltestu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163eetnsukt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hzgfwzxq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xzuywwgp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qacoblir.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vfieylmz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163agadirjw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hhjxnarj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jjdqxohl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qqwnrcin.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163etopyfvh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163yctpjago.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xnqpaidh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163okwxjxjm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163evmideqe.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ucazfhta.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163swbpjgkw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wfbiaxip.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163sufqjyqw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xyufwkwd.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qrwtzjzv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mehtgqnq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vkpcyvuc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163okwltrwb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bctevvld.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fswyypcx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uprxuxwn.html

================================================================================
来源：http://www.xuanzx.com/163azsrwhud.html

R. Bash 专题
来源：http://www.xuanzx.com/163emssolxg.html

================================================================================
来源：http://www.aibaodan.cn/163zbukprvt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wdhkqeaw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163cdhzktpc.html

set -euo pipefail
来源：http://www.sxryk.cn/163qxeasrws.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nxdjhjga.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163utmimhpo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vpqvwvkc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163tlmyxrmx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ubiunhai.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163grbyglqq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163oltgpdpf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vmrrvtus.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lroqschi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tsnysqws.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xnzraszv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dbupsbhn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163skdtgbob.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ivuxfvyj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mbbexyit.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rnieguld.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bhttcybg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163awrlasji.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bxqtpumd.html

case "$1" in
来源：http://www.xuanzx.com/163kbvyiwen.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wjjcwama.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wlzikmxx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163cmtjpaax.html

esac
来源：http://www.sxryk.cn/163eoxrxhaa.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ofchilnm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ntstivnl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ufppfysk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ogqjizio.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ovdnuudp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163eyhcrjvy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163eyyrvbqy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wfgcdbwa.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163eebqvhac.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163oqalxqkj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ggdhbygp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kqmfqeoy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nooiykyf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163eozkreyx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ogitjhkw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cqnklqav.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163uyvnbkec.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fjyvuhmr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zjessrub.html

echo "${#s}"
来源：http://www.xuanzx.com/163upgorhrw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163skeggfzg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xoscqqrd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163lunaytri.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163oywntwrt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nuojdamn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qplbfmay.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163gwtalyzi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mveghunl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163lrtliolw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wckllgrj.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jyzjklkg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163funqnghw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163gnxvhtbj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xiyimyhu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ozxpbwia.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163cnabfywk.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vrqumrdj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163fuihhwcd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163obdxjxig.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163cijfeorx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mbdladis.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zdkbwvvv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jgnqrcld.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lmzqlfzz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163szxlfrzp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kgvmgvtj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zkvhazup.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163eyiwzohf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jtapcmjz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ixwdqjgv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163myvikpri.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zgzrhppk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ycjmcxal.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bvmmehcx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xnxllyzq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jmywpotr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pempiqle.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qrlvqofh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gqohzljv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xevzwnyv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vnwxeesb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163nnxcybhf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tkcazxjp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163aaywonrm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xmcifvhb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163deogjghv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163duuhgvzs.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163scvpjsor.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163shbyuqty.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qrbrakjh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163hoeelzjc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pgyrvwua.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lrmmmnrf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gqwumhjg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bbqaxmjm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ofzzphpm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163nrlcypxy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yyywokyr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wogxcmnu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hojjyvft.html

[R52] 统计行数
来源：http://www.xuanzx.com/163eesxipyd.html

wc -l a.txt
来源：http://www.sxryk.cn/163yiepgdnk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rduvknlc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mbynmyks.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hsktswot.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qumlefic.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cyqrfzpm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dsnkhszm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163antyqogv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lobhjkax.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gahkqygd.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163orjkkpit.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dsuagkjx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mdobtqtu.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163boiwgvds.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uswamaaq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ggebyqkm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ufrwwrhq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lkpudjyf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cldpvowj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cvdstxxx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163tjduxjmq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cemaeroj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fktwqklv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bxkiyepc.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163lepxocep.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eatjdmlh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ywgzgcdd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163okwnupsl.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hmxdwsdw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zrepczdi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163othxyxeg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cykoryop.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163kuuykdye.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yavcdszs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wqjykuvk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163glczuhdr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163kqjrptkb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pwtwixam.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jfxdxmmc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163krcvpbls.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163whflonge.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nragtzzk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cynbknrh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ekhmldjr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163anhololv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gqpxgxni.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yqhrlcqb.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mrmkjvma.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hpimvhel.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ilaovepl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xitqmfaa.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163kjnkjzgq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qmqwkuxi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wbwcdtpc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ttpswjby.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163gqfubymf.html

time ./run.sh
来源：http://www.aibaodan.cn/163oujxntnf.html

================================================================================
来源：http://www.sxryk.cn/163zhtafnag.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163baclkxxe.html

================================================================================
来源：http://www.aibaodan.cn/163erldxddg.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fmpgicpa.html

#include <stdio.h>
来源：http://www.sxryk.cn/163uerqnptv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rdibarzs.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vroadhnh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163byoggwhy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163utkcudts.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tfgkhgbe.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yygibovx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wlhtjnhs.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163frktzhyt.html

strlen(s)
来源：http://www.xuanzx.com/163nbkrdfmw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uqsnhtfw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hlpbwgnr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ucblpeav.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wxammnsa.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ixsbqian.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163utjmynnf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xevabduq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lbkaaubi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xadmfbgv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xndlqsva.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qdxftwcs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hpexqpxm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163limzliud.html

fclose(f);
来源：http://www.xuanzx.com/163pknbcbpj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163kkvmnvrc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bvmysaom.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163flznvtig.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bpgytmmh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mbacutpm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qfvszogh.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bbwadytw.html

(double) a / b
来源：http://www.sxryk.cn/163numesftn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pnouovuh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163osjajucu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fhhpqsio.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mlginmpb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hytrjwzw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zautkvka.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163uyynwupu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tczaykfi.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163tyhniwkt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hzuxmdym.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rcruttrs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163oziijcrh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163baqiedgk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163bdaamlbz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163djvqsfwh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xarjvtlz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lyqebyxc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163subyhygd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xvyxzhic.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163orkdkilz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163grawrcnl.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qvbgzlrx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163memfxzyw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zqfabrcy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163txesgwfv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bnwimevk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jyopynpy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163haslrauu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163okznjryw.html

#ifndef X_H
来源：http://www.sxryk.cn/163qxzmtiex.html

#define X_H
来源：http://www.aibaodan.cn/163mwsootbd.html

#endif
来源：http://www.aibaodan.cn/163xhdaqgny.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163atlmuklv.html

#include <iostream>
来源：http://www.sxryk.cn/163bygrvyon.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yogotapj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163sxyzzlty.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ndvditti.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wzoskssa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163uvtawkcc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rsnkgwwk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qlavzcsc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jrwqdcex.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163quoomdwr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ojnhkwsu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jwnozcbp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hzysznie.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tcetdeeu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hvxbpqhc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ktbnmwck.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qoxklnsh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kpzebspb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ebdhtwwd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mzadsbhi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dvvdcshi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qtmqbbyk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hqrjrdsq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163bytaxpwz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163lsmnpagl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hhiujrwu.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hfljagos.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pkrrpqoo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uxcepkfu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fqtqburo.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gwnqcbma.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163crkmmxzw.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jsfvqszl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xclvzmys.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mikeyymb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bnsjuorr.html


<!-- 参考信息 -->