外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fysdkmle.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tpwuwzpm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163crlfjzgm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yjmybfti.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hwbyzzik.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qnbzlsav.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ksqaqnof.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pnpownbi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zfqybmmz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163npsoyhlw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163effhofcf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163sbfxiacp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163akkbwwov.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qzbpfcnu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qgthwwka.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pbajaoku.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xeydpgfx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pdljkxdm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163swqpbspg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yekgckzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vafsankr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jcvcbusu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zjamzrgg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pzhqxdet.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xedhwcmb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163udjrfrri.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ugexodki.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hheqbepz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jozvprnj.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dxlpkzpn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163whplosgm.html

[Q57] 行号
来源：http://www.xuanzx.com/163zekcfvus.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ywjjavtn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ydshzcmw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163owngcfsp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gvfyosjr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wxeofehb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ayxhzorn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zlvvemgu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nxzvlhkq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gqwakbin.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163uoqfzpza.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ynxuymhg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uwwttkzj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163weszruvh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mvjfsper.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163sfphwgse.html

COMMIT;
来源：http://www.sxryk.cn/163zxrhnyum.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kcxkksad.html

ROLLBACK;
来源：http://www.sxryk.cn/163ptcymxiv.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ynzktfup.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bnzcrgse.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pobbtcdt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163cspxkehq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163dsjjwurr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dlgfnbmx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eimxazfa.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fohktsxp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jckftvce.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qfauhyyk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gfdingec.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fmipmsaa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lecbehte.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163oobefoqp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rxrcjpdu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163agunvqxf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dtmtbudl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163tenkdmpz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xwejtbif.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yzldicea.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163teifides.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163wzygoubq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uzrggnao.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163byekruuc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163weyphwbt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gahwitqh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163oednzrzr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163clxehbce.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163htmvwrdy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vgwfljhw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hfwkhccg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mrattxtu.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163khgurcuj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kbetjtta.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163drzyzwps.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cfjzaspo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ziatirgs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xjossrmo.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jrbvovrw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zatgcqhh.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pbgosqbh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163iujpthls.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yupjdcft.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163knrwbigq.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wfrfnexd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jnoofvrh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163naxhghdm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ogkkwtbp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163nsxcelbf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dpcjqpnc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163esdisxad.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163edyystqz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163srzwdnnd.html

================================================================================
来源：http://www.aibaodan.cn/163cxcaujnk.html

R. Bash 专题
来源：http://www.sxryk.cn/163cizrtbkm.html

================================================================================
来源：http://www.aibaodan.cn/163xqmjwpii.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tzjcszcn.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fytnaboi.html

set -euo pipefail
来源：http://www.sxryk.cn/163zuhlhqzb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jbrstfkv.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cyoxozsv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jokrfpav.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ogkjsucl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qoufzwxm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163vdibdrej.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wiejrzrd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ijtjodjd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nqjyeocb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163adfvrnvm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163aawdzwsy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jwygimdr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bnaxbijh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163uddlplle.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163egteyqnz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jgvfiwdp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ehgpbuaz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qnxbyufd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ukcwyayx.html

case "$1" in
来源：http://www.sxryk.cn/163mmuxwnjs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qenymbuh.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jpggetup.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mkljaxax.html

esac
来源：http://www.aibaodan.cn/163rwzykhaz.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jnyykgll.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mixhlpbx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oiquymqx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sifemlvq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lhxskeor.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ptzlkjjn.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163aaocxtmb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pbjcmfow.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dezvksxy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163uwschwwb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ymzqsdjy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163buxhgxvs.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ybptggzf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163debiqzcl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163daszajsw.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163irnswruk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bbawheqt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tcyohxth.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fglhdisb.html

echo "${#s}"
来源：http://www.sxryk.cn/163hhihckhi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163njjzpwib.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lixfqfbj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dthtiisy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dnugmnge.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kvypcmzu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pswthwdw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dkwaeoje.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kzaswoet.html

[R26] 命令替换
来源：http://www.sxryk.cn/163oukfraah.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ezrmysji.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bahzmxte.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yomebwzl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pfefgptv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163cyuedvbk.html

[R29] 定义函数
来源：http://www.sxryk.cn/163glxiahoq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hduvxwxv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163doavxdzi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ovrbvawz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163uuilqzvx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163grpbjszu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163inoalxbm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pvzadnlp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fowqrysx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tikzcboe.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vjnyscah.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rsnahfxd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163inftatlp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ivjzbgns.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qjmccnos.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ovygfnnl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163cehiqcif.html

files=$(ls -1)
来源：http://www.sxryk.cn/163msqhdeuw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ntixfjvo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rzmarvma.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qwettgpn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163dwpopgqd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163swxidvqs.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rdnishbg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hleylrws.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jkaxlzah.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dyvgwbqr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163sjjkojby.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bsipkdrg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xtiwlxqx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lsjtkqyd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gmfpefao.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mqaqthca.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163chydbvxe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163haktsujk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fbayncmk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163uvlshmmc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xnmheiav.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ihuhzrei.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zaowbkzl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rpkciiur.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163efoxbrug.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vcxwitfp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ndgyvlrl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zykdufhs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kovgvsob.html

[R52] 统计行数
来源：http://www.sxryk.cn/163toqpiquh.html

wc -l a.txt
来源：http://www.sxryk.cn/163shelqhjc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mutyobva.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163arqdnxte.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163iphpbhuw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163pltjfmkv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tyrpqksh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mezahaxs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xrqdwpcu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jvhddlqv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ropkplui.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mcsuhdgo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fwmtosml.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163egkwiifw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163cdoykfss.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mqpackey.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dqpchwzs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163itciuiaq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tlbwkelb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gghvtqvr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hhjczyxj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vfglzdfs.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yqfvtxuo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dtmtvzxx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163aumssxtm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163hwyxdxsu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pmmqstxz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163peinbwrg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wiusgzzp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ghaawxun.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163cxujxpdr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ccsndzhp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rqnbzzes.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lovahxon.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163dnnpidsr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bckkmcbo.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gkrixqhi.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rdwbssuf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163uweuyhgt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163askkxwtb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163akyuzqaa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163njvvkjhs.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163szwvqiqi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cucymwpq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jigkdlrp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ifcwptua.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163uogqahbz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vyqqvrxu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163whmugzks.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163evqiinhg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163rvetxkyh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rjkvbglm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ouurbniv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vzzbcqdc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163lujyxesx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bwiuwpeu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rwvohado.html

time ./run.sh
来源：http://www.sxryk.cn/163lqaytscm.html

================================================================================
来源：http://www.xuanzx.com/163kiknsobg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nvuhzqcp.html

================================================================================
来源：http://www.xuanzx.com/163tzyfbuki.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163sigwapkx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163swiqdhes.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163hjvdtbqj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uukcgohn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vlhygplv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cuyemjll.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ccixsamx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tzxvqwfb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163iympeptb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163uxrazyhr.html

strlen(s)
来源：http://www.xuanzx.com/163zvyzlbwr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wdsddslp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gtwlcuhr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163sjqxfhty.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zmqoiwna.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ugwvuuii.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163oravbyum.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163thketpjk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163sjchdvvo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ltkmldbs.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mszhkymu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zubkhaxe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pyletqxq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fehjillz.html

fclose(f);
来源：http://www.sxryk.cn/163piiawscd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163llbfmunf.html


<!-- 参考信息 -->