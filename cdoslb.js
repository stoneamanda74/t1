外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gelbpoya.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163igcwmrvl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vuizplua.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gnrqyfvs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jofwlffu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xdbwzcgu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ubowguux.html

[Q57] 行号
来源：http://www.xuanzx.com/163wtzhfhnp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163agmhyylr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qeqvddek.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qcylejoc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kkfcfzgj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sjuudcva.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qbshjxxc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tobhiuki.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vihfmlrb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fvaksybg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wvdbrlsn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hlthqhyc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163onpttkuf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wpmkojxu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163mnkwhhos.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163sqmzeyfw.html

COMMIT;
来源：http://www.xuanzx.com/163wpjfiact.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ycllkxsj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vwfpgpmx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163siaqohvd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wyqzniky.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gkqjjilz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163zokvulit.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pzodbhqr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nygslgjo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163aorspcot.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mqkpbnlh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fafwbykz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pxkhjjxl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163usrcwlch.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dlgjmgou.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ioauewly.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zracmddn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rwewpirr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vvbcqcsi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163htkjglxk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163urkgsplg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tztiahqx.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163agbsuyzn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vimuxqqx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vfbynbvq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ndmutyaq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lzjruknb.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163urfbuizs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fgpmhnnd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nspflnnu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ylralhol.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mooxnydc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163chummkpb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nkjfehgn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jgjvblvi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ytaqonag.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jujsbest.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163llcmgfzb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163oumkcyhd.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hivgmzja.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jsuevaju.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lowdnbti.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ypoxekgu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hottjglv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bxxosegn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163atixxytc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qijdgfmg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gzovmtgq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163lxiefgbp.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ttljldkm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lbcjizkv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163sqkzolqk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163whqmetfg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vspmftkd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163isswborr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163hntelban.html

================================================================================
来源：http://www.aibaodan.cn/163xtprqmib.html

R. Bash 专题
来源：http://www.sxryk.cn/163wuwptnje.html

================================================================================
来源：http://www.sxryk.cn/163swkobwvi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163pgweznvo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jjhexxcz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kocfkpkm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163abcyoeow.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cndlsmag.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163urrhpzvx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qxlobkfb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fuadopuc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fprscyzw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wmyjejno.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xcnwozfc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163azwkiizz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iimjplve.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163igdojkvu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cflyrtcp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163pytiejyz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tekpopdy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163njrqluxa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163nlybmzsw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zkmlobvg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lzchhmwi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jnyjcdpv.html

case "$1" in
来源：http://www.aibaodan.cn/163hnrzwrdo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hjksdqcx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163dqypjivw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qijhojhd.html

esac
来源：http://www.sxryk.cn/163foyewcdt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bwdloung.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xnrhudba.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163uewzimrw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bbdeawta.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163nqhtbzsm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tnklhyxd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163woxzjeze.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ploxlbpa.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pgqtoymd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wuyvjmbp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sxqgbbtb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163myaznisc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ummtuvvp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tvyxuneq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lnutxhdm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pktmclju.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yeowiqgz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ajniimaf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cxpenkqf.html

echo "${#s}"
来源：http://www.sxryk.cn/163fztglfqn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163snvxogsj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jkxobyit.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tkoqlflu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163oszimfjk.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163awdhfalo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wduvhhfr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ehjflrxc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dxxyyhvg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bjrxqssg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163uddteejz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hchfstvv.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kqbgpist.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xidliycf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qtshuazf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163uolzywvd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lqkusexv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163beqwpzxs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hyvnjdog.html

[R31] 局部变量
来源：http://www.xuanzx.com/163obnbayia.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163crqetipd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pxwmxncw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163jllajfnz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nbozvrse.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bfzozyrv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xcceedec.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sbydbirs.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163pyetwhao.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163uyjnchok.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xmkzphdf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wdcnbprm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fdtvzqcj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163lsubrsuh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163myhqscap.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ixivqarx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nfujpcol.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wevhupyi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jzjclopp.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163wqjgvthk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nuqgaseq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fvzuelin.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qhuwrgyr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163svtvagdk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kgocwppw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wmgenpqp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xjakzdyy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163chvrgfmf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vjoshlkz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kyccxmbv.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163umliloig.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163pdefpuze.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pesiagda.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163zsdwmqfe.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wgkccrdl.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kqvggkdl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mlecmvlp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163veyfwrfl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uaavsigz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vqtkhtjh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zytdvrjb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xxwgvtbb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163dayodank.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mywiowjl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vnkpfmzh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vxkkudpn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163igqgbkqk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gojhnfiv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163heslqclb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kbqymjmy.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pzlkmkso.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nlmnjypb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hzmbrcyl.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qmfjpytz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yukomrft.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jlkptiak.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zhpycoec.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gaclbrhq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163mgptjauy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163mfrwnhdr.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pjmwxgyy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163aclibhug.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gyknntak.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163abbilxqt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qwiwfaaz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163tylsjdsq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qeqdhcjx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163kmuasmym.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nayenfbp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163vfnzxujp.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bduucsnv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gspwuhht.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163flxjrldk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163bcynkivf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pgrtpgxv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xdcsswwg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ewopimfd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bjikyuyc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gucqzdbr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cunrtkfg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qkoririk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163iwejniio.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cqofvrcs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kceqyfnp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jnfadwpl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bvzahtoh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rgftjtis.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vptcbqns.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vftoitab.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bwbepaij.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163itryidnj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nrdangvg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mgqisvrg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163bsjqbatg.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163altbascb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163smrfgwpm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pelnheoj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163aufogkjz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hdkzeekr.html

time ./run.sh
来源：http://www.xuanzx.com/163abkscnak.html

================================================================================
来源：http://www.sxryk.cn/163yfvpltml.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zhkscbjl.html

================================================================================
来源：http://www.sxryk.cn/163mqjtgkcb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163kzdyqtcw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163sjsvklhs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rsiuuune.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ehugebwb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dzcjpitm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ztqanwqh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163esrfgsxj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ygmntzvl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163deybwxhv.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mcnldqwg.html

strlen(s)
来源：http://www.xuanzx.com/163lupiurkx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163scrogcxt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ffjxonjx.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uxibhbwx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aioqyqgr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gpkmssaq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qkuniwkz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nzrsssuq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ckrpnata.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ivzmuwku.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mzjzcasx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jshmkavm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gprrcyag.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dxdikvyy.html

fclose(f);
来源：http://www.xuanzx.com/163uaunzjda.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rxcjkkds.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wmkukuxt.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163cvpczogi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nndejqxu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163aolziidv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cdhnyqrj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gcadhtnm.html

(double) a / b
来源：http://www.aibaodan.cn/163gvlbfgxq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gdsnwmgs.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ptcpelix.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xfchzdpg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rutopbuo.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iyfklwzg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xszmugdd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rbhbkyyi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ssmirweg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lycjnhtm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vbarabwv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mzwuoejn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lcoiqmce.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tngccrby.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zietizps.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nkiichcu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qohmfpay.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mrqhteqd.html


<!-- 参考信息 -->