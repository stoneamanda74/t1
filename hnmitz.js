外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kdpqsqlc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163cmfdfnzf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cmjhqiey.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rfqvfuco.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vyuynlcq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hszostrv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163lawgcrpz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tdhxrlqj.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163oqinftrz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hbrjdxad.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wklfbdac.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fbpgrwrt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163rxtqifpu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mqyeyjga.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163sdezemlf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qkuisbsk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qtfoksrm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zfymtvvb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wumrahvo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mycskoab.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yeuehfsg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163urqlybay.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163dktbhglc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163moxkjdei.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163xkhrnktt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163aikpcxrx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hpbrkeaj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qlmnvtiw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163obeewlyn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gidqvemj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ncpejgxb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163tskywucm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nbtgpmnc.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163etwiiuca.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dokyjptd.html

================================================================================
来源：http://www.sxryk.cn/163lreqqdbn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163opzkyubv.html

================================================================================
来源：http://www.aibaodan.cn/163wqervect.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ovkvagrq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163blwyphyw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mlithmol.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kpncmphk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bgkqytwh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zdprhsoc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qzsnevah.html

[R04] 位置参数
来源：http://www.xuanzx.com/163oavnqxmz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jhgcjafh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kigniunn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xprrfnqb.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163vnfvrtes.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qmocwhmj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bweiuauh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wmxkqtxz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zwokpesd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lhdxcirc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nccdntln.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tulppwuq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qyryikam.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yvmfochu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163twbafblq.html

case "$1" in
来源：http://www.xuanzx.com/163eoufurpv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wowcgell.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jziwvwru.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ncbomker.html

esac
来源：http://www.sxryk.cn/163vtkzrhxl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163sawpzxsi.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163trxomdhp.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163meiprppb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163kjyjyrgm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lfujxukb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gnearfib.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mmsrwlku.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xcmesorg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qmbjorvi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tksyksve.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rqilafze.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tkiygnvv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xxijwcar.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cjijkhet.html

[R19] 数组长度
来源：http://www.sxryk.cn/163sfwmqyev.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vvjmpkow.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163efhlpsnr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hrrfuwag.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163secvojza.html

echo "${#s}"
来源：http://www.sxryk.cn/163wsyqtbth.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pyctswxr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oxluujge.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163uumrotiy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kyissrrw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hedskbuu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hiesgfti.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163svsazryk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163sxxcafii.html

[R26] 命令替换
来源：http://www.xuanzx.com/163sivyhsdh.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163hppkgrfc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yaxkyivc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iyeeddaa.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xcnirngf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tsnwgijf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bqqpzpfg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163goymmdjd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hdcnrjzv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ijbtymet.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ehbrwrqz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qcgmrdla.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xdjrubtp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163szavhcrm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163myjuefuv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lhhugjxd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qohyorgp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ezhxzfed.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ibbsgska.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ffugxzmq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ajjdkmoi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163chqsywue.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qdkljhyf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163miwhalvr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163oosvugbo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fslxqfxu.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hwiljggv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cbaxhujo.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tjiuxjtd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lowjcdnn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163oaesvtsa.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oeyvohdj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163auqljlge.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xuqxfszl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163scjkfoby.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jffyfibr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wextzoez.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163gcnxysvi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mcaslvij.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nueaezgp.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163waubzznv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fweusvdh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gpzkbvei.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wpygqwzh.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dnbddxlx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bmngqnof.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rdejxenc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163frfbyzko.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ewosztyg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vpiylwyi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rfxhjljg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kgnwgkam.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ziutahgi.html

wc -l a.txt
来源：http://www.sxryk.cn/163hccahtcv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hdhfsoal.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dhxtebqc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ayslggko.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ybovqinu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nyvkyido.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oksnhzke.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qelvdraj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mpvdehmm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wtbajysa.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ltogrezi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qmkkkxnp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163efblireu.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gxfcpnva.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xxklerym.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163hnilyoto.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hccxxfeg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xekdmxde.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gokppsvq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163deuirzro.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yzrkfkkv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lcgytefh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163pwsuahfm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tdbbeyao.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bdatxxax.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xracskps.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wuoidbqj.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wovfdpdh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qqovtmin.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163endimxqg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ilkvxixr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163maekqmdv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yrcuasxu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ppzkieap.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163seyphnje.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mfrlcqhd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ytepupkd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163biownpbt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163cuechqxf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gqtbkiqv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cctlrawq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163pjwrxbtf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163htptrsyu.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ibskkqls.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xgvwddfj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163bhpglouc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qgpuvyte.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163myiybvdg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vtnhcoff.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ytnxhmij.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163vjeensmi.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vbwadamx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ilulbbwb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ihofmkgx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pabirdty.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dkauqgna.html

time ./run.sh
来源：http://www.xuanzx.com/163aihlhrzn.html

================================================================================
来源：http://www.sxryk.cn/163ekipqiah.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yualjwcw.html

================================================================================
来源：http://www.sxryk.cn/163nqzfnqty.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wvevceqh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kbikdvim.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zubgyaee.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163krygpfkl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kopeadfp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nrejalhs.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uzhbspja.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163gnolkrgo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zzlmmkia.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163cvoravhh.html

strlen(s)
来源：http://www.xuanzx.com/163jyxfvxvv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vvshempe.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163bmpxdlkj.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163weyatpty.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vakvvfzs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kjyhrksy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qlfjnwkf.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lvjyzeoh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163byimpmpo.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163usedzwga.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163crpwncos.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ztascfwm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tnwranrl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yldhhzpu.html

fclose(f);
来源：http://www.xuanzx.com/163fnhnwszo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jqupcupv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yznjiorl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xedkdzuq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dxfdroxh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163drzdcblp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rxvdfvil.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ihiafcgm.html

(double) a / b
来源：http://www.xuanzx.com/163mvxsieiu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vwmuqutn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wfxdjnmj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wmpsyqbd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kyjfeyrc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zudalshs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zyevmkzy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163akpaulpq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nmewcilt.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cpntcaar.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163czsmtycw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163uincxrhc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qphsmxyx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163assvdkyg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nyjvwzdy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dnrvqnjf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163flqdizdn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163atnyihnp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jumzcwyz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jtbkqdrh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jwsuguyw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ptzkxwgg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163eszimgvz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vysijnqq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yyxcmfkx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wkwaiayw.html

static int counter = 0;
来源：http://www.xuanzx.com/163lgpwcldb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gdcmumyg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mucwzzta.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163yxatquhw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yrhxrdzl.html

#define X_H
来源：http://www.sxryk.cn/163gpwxyjru.html

#endif
来源：http://www.xuanzx.com/163lpayucde.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163trdkkpgs.html

#include <iostream>
来源：http://www.sxryk.cn/163jljpdmnl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zeaxjlyh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lyctlxku.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jxmlfyjx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163pwkgqimv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163icgvgyso.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pyrrxkxh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163neqkjiwl.html

[S35] C++：map
来源：http://www.xuanzx.com/163cdeduvkq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aqujxcvx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ndnlgxae.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dfiuzdkr.html

[S37] C++：set
来源：http://www.xuanzx.com/163hzhucnxg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gyyqnbtr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vvvqtlyr.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163snxinxwl.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163yhjzpgeg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ffawowzh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hjrmfcbs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xrbeajrr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163sobwfjbf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pktxeues.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uwnwbfoq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163avhvodom.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wwxpyzpp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yoihqdpr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jlewswyq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ludbovgz.html


<!-- 参考信息 -->