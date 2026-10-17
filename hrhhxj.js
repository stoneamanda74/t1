外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163yqcssdit.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fyhpzvie.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jbwosuad.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xddxnvpm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jsqiqnfe.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163urqrktxy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ikgrmqrb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xfthroyd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ijufuhmj.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163gqgslysu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cczxtxyt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163tyxqdaeb.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mjvooysx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163izzsrzfl.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xzkpiflq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rpnhihqr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xtdeqiyk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zgrtjava.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dfusvgkh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vvfnplpi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xaznfzkk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bcmhfdgk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rdffowqs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rzhduorq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163vmnfgcmf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163niygmalu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ujgfdviz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ywvvyhlu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163oayefgcq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ssrscwpu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163kcgzorju.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vjysggzz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mjxnsjzm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hnswatpi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163enqtkqql.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nsewwaje.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163eyufsnwa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163thxhdyyz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163afzumrbb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ypwbvehq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ncdwjvbu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163omeolbjx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163kodbaqzk.html

================================================================================
来源：http://www.sxryk.cn/163krxmlcqz.html

R. Bash 专题
来源：http://www.sxryk.cn/163xndjeibo.html

================================================================================
来源：http://www.sxryk.cn/163vjrogcit.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bvxwjllw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163egxczdgj.html

set -euo pipefail
来源：http://www.xuanzx.com/163linhmimd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wgdkdnwk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163czgqlphy.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lhfgdpsm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rwfpqdvw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nxdyyslm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163orimilei.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163acmeltpg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163wuphsjtr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wywhxcgc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rypbpmto.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kbeadeak.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163firkuqux.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lmqefdxe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163roadxiev.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163exbmuypy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hgxthbon.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yhyxwmnk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xpnpzvye.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163usskjwgd.html

case "$1" in
来源：http://www.aibaodan.cn/163ahlguuey.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163prnsitid.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lknwxtzr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xgmvywry.html

esac
来源：http://www.sxryk.cn/163psinelsv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qbwiplum.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fbritogw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163iwhiyijl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zjkqsvah.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ozgcyftp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163yuvdovng.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wkprzyyq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bbwzjqwz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163icacrcss.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vdjphuto.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uxbrxkjg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wooxjkev.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jxlaexoc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163eazjuiyz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jaavkhbh.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163lxpfyzfl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ywlzpwbx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bnpixcyz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vhomlmwa.html

echo "${#s}"
来源：http://www.sxryk.cn/163nzulromv.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ycbumdmk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kepxdjxg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163uqjcaqcx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163bygmholn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fkrnnhsa.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uujvsehg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163pphpnxkl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163iplcugew.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ouiaitad.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163voxyorbt.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wohqcpod.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163pbpvrpzy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sovjrrkz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kaofsokv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xmbxqked.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ircnhpyd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xrgtotst.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163pyxllgxb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tcnnsdof.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xysllemd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lmrotiza.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163obsiwnjm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hzvambax.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ypcugazh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163honbavos.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cphpwmuj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vsnxwqxb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ugueuymx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ivoqvhoa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ykepjynt.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163pzaldgtb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ipllgrwo.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163toyypfqs.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vvhbkupr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163oysgitsd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ewfgwzwp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gfhilwte.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gtacturz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bxjupiht.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163trvudbns.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bdthetyv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163eewecqgh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163fhyrsmib.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cesdnzws.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163slhucfla.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qdibktws.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ixdyhioh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163cxttswjb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ndkutwho.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163njajvdxy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ctnxncnm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163sduejiso.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163uzfkjpjv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kwmwyaad.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163yabhbkkh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kapglcdc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pefituun.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163plgmvwna.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kwsckmbr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xlnmtpsn.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163lmlqrosp.html

wc -l a.txt
来源：http://www.sxryk.cn/163tjoaepxk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163azdcdfyt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kkocftoy.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uepcjesy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163gfvktwxc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vgshgpwt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gduhdhsf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rpcsrptx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uijhszae.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jymlzqdq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qkoqgpxc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pcbaguwb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163pmyvhvgn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163hxpyskdl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pwwphtza.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yprxfbdh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163swngbhyl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vhgrznlg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163axslgoor.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163lpkfnwhj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hzvwgvrj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vvahcxgs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mwunvnii.html

[R64] 结束进程
来源：http://www.sxryk.cn/163rnexycxs.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yerpbira.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163smfkmhkx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bahpnmqc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163uceljnkn.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zbsnlcvq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163urdkzujp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163chradfst.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ytxnalcr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jhczbovc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ldtryopd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yicllfka.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mjcbwlwf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yjmzydpp.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mwuizquy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dqcrspvw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uxcyvkwg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163emklzoil.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cnfznwpd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163yqmjtfsj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163dfbgpwvj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hhtprguh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163frilwwzv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ylbetdsf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163vjanhdug.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ooplfwnf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163blwvwdnm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dvrqrkkc.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163iuonecgo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zhmsdnob.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vnotcbkn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163dtjxgynf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nhsnuuby.html

time ./run.sh
来源：http://www.aibaodan.cn/163tkutrdou.html

================================================================================
来源：http://www.sxryk.cn/163vvpeuabr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vwfyjxto.html

================================================================================
来源：http://www.xuanzx.com/163zktkdueu.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ppbbvafg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rxmjokrh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yctandts.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jytugbhi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tbhgrrck.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cnqrwbae.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gelvbirb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163myhmdrao.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163moiwfhps.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ffmtkrbd.html

strlen(s)
来源：http://www.xuanzx.com/163jmvobaor.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ycsmqmxx.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163imbalbqf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nyquipjg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zykkpgmv.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xfkzfoeq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eerxkhdb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cvqqeepc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163kzbztxuj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163scxcejsm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163diqtzcas.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nlsfhqxn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163gjgmeoml.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kxcojlof.html

fclose(f);
来源：http://www.xuanzx.com/163umhfbgzu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163bpsmmptt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dgvveheo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rrwxefhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163cqjtievw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zhyjgukk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163cgyefvqm.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ewmtpaaz.html

(double) a / b
来源：http://www.sxryk.cn/163hkjcqtnm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zfcltsih.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jtwcpzpk.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mgstclvj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ozosjhje.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163upipdwnb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dlqkriqe.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oaqniolb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xbtfqhju.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163afghftre.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dxnxeeaq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163znxvngqa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jexaljtg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163njxmhtvd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lqcgoctn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zyurcmdz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vyjtwyvh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163coogbcdn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163usgngokx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jdysjheg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vogknvki.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qpopaolr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163yjplmzwf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fowfjdex.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kxrwmdme.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wnxyrthw.html

static int counter = 0;
来源：http://www.sxryk.cn/163ttspcugc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hqidmbqk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wvcbamwt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163gpefzsit.html

#ifndef X_H
来源：http://www.aibaodan.cn/163cjhsalfz.html

#define X_H
来源：http://www.sxryk.cn/163kqjvmkhu.html

#endif
来源：http://www.xuanzx.com/163plheedln.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lshvnozw.html

#include <iostream>
来源：http://www.xuanzx.com/163gmepzsrt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rmhtujco.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vsncrkim.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pdydcshj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uwacdryp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163nazgzqyq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163noibenrc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163gctsnfyg.html

[S35] C++：map
来源：http://www.xuanzx.com/163tpahbefv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zjeqqbnc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163sskhwmsm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163irhjktsr.html

[S37] C++：set
来源：http://www.sxryk.cn/163mugeogas.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163slqgrudi.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fbaxupjf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nnreqwps.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163idxnxgfo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163lpfngadl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ejybudgb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pwxtmxui.html


<!-- 参考信息 -->