外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vowovvhb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kwrjmaif.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yvaazgnk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zsklidxb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rgtyqznj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nzrgpqcp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163cquesewh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163aovbjtpr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163iuiddgnl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163hutqnwht.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zhtjsvkn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cespfmxl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163prtjurni.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wdwcxqys.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163okojtafa.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163eiigxpru.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163grydzwot.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163olfutpek.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qvirapll.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fvnyaeit.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fjaijase.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qcwzhenu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163cmdkrofx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hnymafhk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ukmmbytq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ypkekeot.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yondgdjo.html

COMMIT;
来源：http://www.xuanzx.com/163pioaltnh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163okkkdkpm.html

ROLLBACK;
来源：http://www.sxryk.cn/163kxeziqnq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gqzkfouv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hddtynqh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163lzedqnzk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hqmnagqq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163dnrxceko.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163yalwdgvf.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jjzihdoj.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vktxvqpd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163csznnjte.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xmzjygns.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vdhhfjrx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rlvhjfjd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bnniqcyz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qehuzofi.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ylhnyvox.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bwkoomlj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hhkgokym.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nlgfvnly.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ucgilrug.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163svnwrwyf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163imhpxkeu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lmueqzjd.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pgnknhqp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mygwwxna.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163soxzwtyy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163tklulgib.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ydrkcpdd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gxvgkupl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qmuzhjya.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ojmjhdyn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163awxpsysq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tkomglwa.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yjsyzspc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dkzhttaz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163oewpzpkv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vggbkgjq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163uoklcjza.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cbniopac.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163iutvpilv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dqgadoez.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zvbohhaz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ipgeilwa.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ytpdkwxs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ljagkgtr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163morziwps.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dgelqzqp.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163okyvunru.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nmkhplnh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vixiivjn.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163othhkuxv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qhadpeni.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cusosvpc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163skosolkn.html

================================================================================
来源：http://www.aibaodan.cn/163quhznohp.html

R. Bash 专题
来源：http://www.sxryk.cn/163dlfmxdii.html

================================================================================
来源：http://www.aibaodan.cn/163ldbukbwy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mtzpcont.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ghtgdacy.html

set -euo pipefail
来源：http://www.sxryk.cn/163kqjowpou.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fexdgxee.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gliumzlv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hnyilhhm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163aysdandr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163cacqhocx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163coysznnu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qxyqhkxk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kdsjuynw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hqvcwxer.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vldjyknl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163avweqgin.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jlvbbfhj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163udtawkyq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163andtfcck.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bkwgxwdv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163zfvdjcam.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yvlrjkid.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163texuhjfr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ehyrwzki.html

case "$1" in
来源：http://www.aibaodan.cn/163odjwmdnl.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163keqhvvcc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zijtwzbh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aacwtqwi.html

esac
来源：http://www.xuanzx.com/163jcmxflif.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mjlssjpn.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hljiyhvg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bwszyihy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163adhttqvq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xljfanvo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qdlrghas.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163gtppfikl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tauoidci.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163cqvualjg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hnouflwa.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hwbtpkhn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wfgptluh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ovmwmrnh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163stxqexhb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vdewzaec.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jnuwggjp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rzjlsjfp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163inttucps.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163oqpgalmr.html

echo "${#s}"
来源：http://www.xuanzx.com/163vgobjnul.html

[R22] 截取子串
来源：http://www.xuanzx.com/163koqmvalr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hddhstid.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163tmgvvjwd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yvwammdt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fmxxsspc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163eopitoeh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zxcnoqda.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vhxrzodn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163otyqbuhp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163aecavvay.html

[R27] 算术展开
来源：http://www.xuanzx.com/163igjdkfpk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dbvjctbo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jyespzwa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163eqvyusbm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qfubeajh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163kbixczfs.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ymtekjrg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163aolmbecf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zusyiviv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163taaveecc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vfrstzev.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xarprtys.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ruqttndi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wnkftrzw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xfhtiwth.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163snvlotyv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lmgaihfs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hsmnnsdq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jihtfbcu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zkljwfdx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bxleorql.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vrshdqlr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wrzhxizy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163bzrrznyu.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bvdggfwu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163giffmvtd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fpqkcfqw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163efpmpkpx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163oanhnmia.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jnryaukg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dasntiwr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163eqqwmwrz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hubevvfz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zcrpvchk.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163iukqnffr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uvsniwgu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jisqiqcp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ibhymbur.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uratdoni.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163uzjeuwca.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vdejpqkz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163subkcyxk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cmvringj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jujlsxey.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qkrljzbl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163bbhypgst.html

[R50] awk 求和
来源：http://www.xuanzx.com/163agbnlbut.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hezfkhjm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ubkthyfz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hjnzpvtz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jailqlov.html

wc -l a.txt
来源：http://www.sxryk.cn/163kppurbqq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163byjpyogp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oywbhowa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vatxxiar.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rtfzvxzu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kdqmzavn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163okaawoei.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163iwxnetdr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xjjvxqph.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nqhexmnv.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163wmksxgqv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ccqoqchw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gayjodkq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fuywawey.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163olacrqgk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pqvmtkru.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vhrhenqn.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ftymwzrx.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163lapbnlhy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uglobxlp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zutewwol.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vhyyhbmw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163swwyjruu.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dtnesxsk.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163rsusojoe.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163meldhzoy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yujwaftj.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kpueaosj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zeepmftt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163unmqlqae.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vabjbeml.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163desydbgm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jfbzyjws.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163igyalogm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163slxjompy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163honmmhnn.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163paggjmce.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fmgvbwrr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163qruankgo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pzgbcyxh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163yzqhzkmc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ejljdwit.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kpadsuys.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cxihnmul.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163mtrwmoki.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163crjaahtn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163iqpbyfzy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lbzwhwbv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dipxrzns.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nfdbmtlo.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kcagrtfe.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xljrixdc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gmkutlpg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wdxvgujd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qgcydyks.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wdklfojy.html

time ./run.sh
来源：http://www.aibaodan.cn/163tiddufem.html

================================================================================
来源：http://www.xuanzx.com/163bxhahgxp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lhtaplwb.html

================================================================================
来源：http://www.xuanzx.com/163sptlilzh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hojwlcfj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wfylhuxq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ojkjfdlr.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163mceuzeeo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163auyzwgbf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hdzrwhhf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jglacmch.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163edgsfwbg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ogbseldy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yfdrzjhn.html

strlen(s)
来源：http://www.aibaodan.cn/163ywppaxes.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zctvvidx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ckwfkymy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qkrbghem.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aoxtqxko.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163msipgyly.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tfytxwfa.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kowpxfbg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lukpkntb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lnymsrrq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163epbijozg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fcyhebcv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ypgheepz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bcbxazvr.html

fclose(f);
来源：http://www.xuanzx.com/163kychyiiw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163snfgltfe.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hdtbpkre.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zqgnoyep.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163atynhxzc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ajocrcuk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qvkjtzpc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dbuxgplq.html

(double) a / b
来源：http://www.sxryk.cn/163vibcrdqv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163legjafsh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163cqplhzeq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gtzjdydt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jzlcokmp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cwknmzgz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163shztlvgs.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vtudjker.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163amewoynh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lfynpynl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tocuxbeb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dsmmuftt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mlenrvro.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wiihmdhj.html


<!-- 参考信息 -->