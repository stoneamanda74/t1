外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hiiwmnnr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xlqstgyu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lfcnpwwb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163slyimqxi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zypymqsc.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rqbbmgaj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163aiglrqma.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xzxycmoa.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xuqiexkt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rurxqyui.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163rbtbuwlr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163soglgfwc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pnuuseox.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bbeuctlj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163syludpqm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qxpelabq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163knrtutyu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wtbvzmup.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163poxhbgpk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rzynazmq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fpswbaya.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ziqppeff.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hylerkgw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xktfxkaa.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163nqqnfehh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kiudtjpy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cpfzmury.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ibqnczcd.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jabryoxi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163pigssrfq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163goosgric.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ddbarzgl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163crutrmzi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163rytnwymc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rrfpsezz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hpdbhewh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ghdtzzub.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163acvjwvur.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163bpaqprta.html

================================================================================
来源：http://www.xuanzx.com/163buexodsc.html

R. Bash 专题
来源：http://www.sxryk.cn/163qlfbgwpf.html

================================================================================
来源：http://www.aibaodan.cn/163ltdpunzi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163whrrfllu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163asbyznnx.html

set -euo pipefail
来源：http://www.xuanzx.com/163udjacgca.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ksnjnivr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dvbonhia.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yhctpgua.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vcuysnvm.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nyceixte.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eaejtvaw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bubpwdwv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163nldqerro.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163cydgltce.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hoijdsbf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163orsfeykf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ordwphvb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xwvlcmjw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uaqbcwxy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fijzluyb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163zypipszr.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rebiqxfa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zffnglgk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yvvpekdr.html

case "$1" in
来源：http://www.xuanzx.com/163ezdqliwj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163octevxxk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163cfjiujjp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163chdbmeat.html

esac
来源：http://www.sxryk.cn/163rggogtzx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hgqsjytz.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ldvwgpkz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lexawjsk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gspfucwx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nhduypef.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hpkwpqou.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163czkpfmfy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163jeebntwh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163luyvhocc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tpztyids.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ebqkvvsy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kdlnwzhc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ntesuohj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gdgjrqxp.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xujsoqtb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qtgkeyld.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ayqgexsv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uzvgoact.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ljhlyqul.html

echo "${#s}"
来源：http://www.xuanzx.com/163cbmltbef.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ojeidrvq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lnrjatlz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163glwyggcn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163otsklztw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163agriawet.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tmaaulld.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163cwxqhexq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ukkjoqow.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kunaizxd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ljiodrrc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pszpbqpo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jclvwomq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163messwtrl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tqglwmel.html

[R29] 定义函数
来源：http://www.sxryk.cn/163plkvhpeh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vwzzlppq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dtaecpwq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163qaghrgiu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uxlcqilv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mdzppkkb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163yhbgdhov.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rxcmmyrb.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tsueokkg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vmxpejwi.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163afraclrn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fvnvknds.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hynywbpo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163dmkzmnpx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lxswtjil.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fjecxtyk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163edkxmash.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ithtpysf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163djbhoybj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163siathpay.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hufdkuvc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ljyjhajb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xivbijrc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jduzgprc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163escgvkbz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mldanyxx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163eamlvfov.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163bsgpcegq.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qojjcsbz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163bonhraup.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ejesrrpk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sppsivvo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163vdeuoubi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jdzaswqz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yyfriwox.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163slgopxlf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vblgvqhw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rdynmmrv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jfhcguac.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bpzczdbh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wsuzvfpb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mlzrfyfj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163aadxmczs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163aeeozziy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hznfqxzo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163beagkopg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tygjjauy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163nrocwjij.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163qevkmjqe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163nforngqa.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zakdppxj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163umkhmwzf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ujcpvpmv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xibfmbno.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163npwmzolw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gdxpwfow.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vkecbpks.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yzxtgkls.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zmqzugtb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163sctefzqw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ydiwwwgq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163strqpqgn.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163njuxaxdf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163bdkdvbph.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gklczqpl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ipfieext.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163woinkrbr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163aoyqbbzy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163sybmjpok.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ytpioava.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xiegmegy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zrihvwpx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163gxezajru.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zftapgyk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cwyqnrdu.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xlkqdpox.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ehkslnrm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163irgiyfse.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qmerbsea.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163knhlpwnv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tesaynoa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163igzysxsc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mwandzij.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xejtclck.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163imwhldly.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mickuabo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qwdcwtwy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163enljerbu.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fchnrdco.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jhhbxigi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163bnhzgave.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dhezwgbb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163szlxzlhp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xaenvgpe.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uaiuoelh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163irxemnac.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jhrrjcrs.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tvaflukb.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163luvlorvr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ysztrodn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163juwjkdbd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kzhsvcpl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ooahkvtb.html

time ./run.sh
来源：http://www.xuanzx.com/163pkgtxqcu.html

================================================================================
来源：http://www.aibaodan.cn/163amjmvjyb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uafsfefo.html

================================================================================
来源：http://www.xuanzx.com/163ouqtlmeg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cnbmeywf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163nfopftef.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vladkebz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rflqdjsa.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163apumkrrt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vgqicjjd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hryokooq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xsywjspd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uszrmrru.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ynrvmfbd.html

strlen(s)
来源：http://www.xuanzx.com/163lsottqrg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cyznmdkf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pejbkrpm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ymxpqkvw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163eosdgyig.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wbpfndcn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dyehriim.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yfgotnxb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tterhhhl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qicsnvjh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dzmsqdfv.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jqkyijqb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rlyhjqpu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zsmywxgf.html

fclose(f);
来源：http://www.sxryk.cn/163bidujcgv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163usvytlvh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xmqpxvdo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163whttagnj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163lqurzqvv.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ufeeyrps.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fxfpzrhx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xoijxjzj.html

(double) a / b
来源：http://www.sxryk.cn/163fbzgcfrq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ajoxfbxj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ydmuzokt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mexrhknc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jkuayprb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163flihxqjb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vcdgvirm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zkqbwesf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163suazqwdi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rrsgffuv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ndiapdbi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mscwohob.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kassyurh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163antrcape.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163sdofphwf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qisytmqi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nrtdkkwd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163umhspysi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163irxlipsi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ajpwjxoo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gvjjwcbv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fssxmorv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fxtxqsxy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gdpmaaig.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tfmiyylx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163dnihsvrv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zatxgkva.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fkjxhqsw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mpezzqes.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zcsmoqou.html

#ifndef X_H
来源：http://www.aibaodan.cn/163npgrnsnz.html

#define X_H
来源：http://www.sxryk.cn/163qthotvbr.html

#endif
来源：http://www.xuanzx.com/163nvzbmhnt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qonysoeq.html

#include <iostream>
来源：http://www.sxryk.cn/163ouvuuytr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xprgcgpv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zdubxllb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mqlqpssu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jloxaufp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163tnrojjyn.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wwijsbxn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zzawektk.html

[S35] C++：map
来源：http://www.xuanzx.com/163vrywmlmj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wdtmxtjb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fejhfnfe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qkjyfyit.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vhyklswt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vrzceeje.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xntilrjs.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gosaahwf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163arorylom.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163oagitnye.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jerdobce.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ikdumnvu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163redtrkwv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qlewjxqj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163eimvclho.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gswlpjst.html


<!-- 参考信息 -->