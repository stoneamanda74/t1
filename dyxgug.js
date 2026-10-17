外链999!wailian999！

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jlpsslyr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mkzqrews.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wdxahbed.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xculilzl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163glrzbrpo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wztjrynw.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bmmjwnok.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jxdlombp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gnesucos.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zbaykenb.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rgzzpadi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163agmkeemo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mrlwvuxf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bepqroxm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cdtzfolw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163duamlqvq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163sljlahoq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iezsxpfg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nqetshmp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jlckniah.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163cagnfzli.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163arvvqasc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fwjynokq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wedoeekn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163klumlfrm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zeynondd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ueesvjed.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163vtllvcpn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wrvhijmx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kqslgaye.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pixizmxg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163psrgioba.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zbihiuxg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uutzkybm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yexeztnw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nmdalljo.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vmzjvksv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163agntfuqw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qqtdtjzr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163luszxcel.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jsfqnocr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vwjyshwm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fprqnfvj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mhxzwjnp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dmuktbif.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pvbdaypf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fzsmmgea.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hihvrwws.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jcxvyroi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wszmxdbm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163eflpwmlv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163filncjly.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zhcgxsce.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fcqewwpi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fydebspe.html

[Q57] 行号
来源：http://www.xuanzx.com/163ohpkyibd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fdwraxok.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hlezgrmd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kfseugez.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ppavoejx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qwbcayxa.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bmprhjsc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ceigcain.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xydesaul.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bdspxqvb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163milxhyfa.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fpnnsbtk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163whtjghpc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163oiuwapqw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jxpkfwwq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yxbntywu.html

COMMIT;
来源：http://www.xuanzx.com/163firyrwfg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163acffhyzq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gayeiqwj.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163utnuqjow.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163icocwbia.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163gutebwjn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tltqheyh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ostfnznr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163atuiucyw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jskkivat.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ilcuwnzh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ckwyqpij.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hqlccytu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ssvgoqpe.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fuajovhq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jmdrvfjd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zlqwvdly.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vlckqlpt.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ujikqftv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hbqybrqb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ydmvekwc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ghhlfumt.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nydxsspu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vrvifnhw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ytwxnfum.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rewyaird.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jpoqgizz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lcdyqpts.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rxbteeit.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jwhbsiso.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163urqzvcxw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mzepuoje.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163elpatomj.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ivrazflp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163cjsdwwmo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wuwpaxfq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163iokbxivx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163iwgebqdq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pbxrwoai.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nnizjoic.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bpwpckfv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pqhjewyr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wedeknqw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mnqpzcxx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tvkkcqce.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bgtsemew.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xeibzdib.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jdunakne.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xcdcxgps.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163igfvauat.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zprjynpx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pguxjqil.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163dnkqzbso.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rhpdlmqt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163zblxrnkr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rijltdgp.html

================================================================================
来源：http://www.xuanzx.com/163frficpmi.html

R. Bash 专题
来源：http://www.xuanzx.com/163jyckdnks.html

================================================================================
来源：http://www.xuanzx.com/163howhremr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rfknyrxp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mnwtvuhx.html

set -euo pipefail
来源：http://www.sxryk.cn/163jabnpnhe.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163rndigzgy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163wzhumjzo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yfsxcmey.html

readonly PI=3.14
来源：http://www.xuanzx.com/163uaivouwb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nfkyhnhc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163vrwylpar.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hrtjcwwh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163opfbqkaa.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vbpdlmpo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pdtygaql.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163enpywnew.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ewoiljax.html

[R08] 数值比较
来源：http://www.xuanzx.com/163txureesw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fuyfcjsy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163mgezzkpv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qvhcgvsj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163khgenfoa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163htxjuuse.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qbmdxhis.html

case "$1" in
来源：http://www.sxryk.cn/163jyxcbyim.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ymgnbxrp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163dzmgnwyx.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ldzgxjrv.html

esac
来源：http://www.xuanzx.com/163igglutiy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163regfmsev.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hdxygiza.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tctpyvcr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163inhtzbnb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zmeidzjw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zhsorddh.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rfcmrpjc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163buyyfbqd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163murkyyqd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xdcjljeh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kpmzvyou.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163irayccte.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163edvyhovq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kfymtaty.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tqomfbsa.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ehfurzgn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wixkysvt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163arujsynt.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jgzexgrv.html

echo "${#s}"
来源：http://www.xuanzx.com/163smldhwgb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ubukrvka.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163pwudemys.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163aqkecwel.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163uhzylncg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163gddufwph.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fnovdzsf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163gmyxcrdx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jlrpsywk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mfvfwupm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163andlzkff.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gcujmmhp.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nzqvuxki.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qvyjsvqd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jcykbshg.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ztakoino.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mdudykxn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163rttjypkh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ysdnokoo.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ygknvodf.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dphzkdyq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163xslcxyec.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vqrjjslk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wiveejaz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hvfzzrgj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163mdbrudba.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jqjeuqlv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163aymgjwfr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163marlwfab.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qefoeqxh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163wbufhszj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nyxpqmpz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ijzuymby.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kuvkrpas.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ezmpddhh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kpkzwvpt.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163sseblxid.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ookhufni.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lnambjqk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tzwyybto.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hiwgsxcv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mkgrihvt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jnethpxv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mgjditrk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zwwmajfm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ublroddz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zixmktra.html

[R45] 批量删除
来源：http://www.sxryk.cn/163agtncxpi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qvqnmdwk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pdcjmodj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163guohkeig.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tcxxsbnq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ryzsdrya.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nddwnkqc.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163sgxwgnea.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vaeoszlo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zpvnhtzz.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vrczzsrk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cgjoxnfh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ugkevkfu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163doysciqq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ndbidspq.html

wc -l a.txt
来源：http://www.sxryk.cn/163tfjrjinn.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ltewhnkm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163teuvccoi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163rifqqzig.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gsnnakrq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163bcyjqwyb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163pfqpnzln.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jqtiggww.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fwfspdhx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ztjhvalc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jipwauge.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pemohyvh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cnxqmnav.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nhahxguo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ciwpjqxc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lhojgpbn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zwyghchy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kelzjarh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ntbwpjbm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zenjwvcb.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ngaappjj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cxejaplr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163gmuaejii.html

[R64] 结束进程
来源：http://www.xuanzx.com/163icqpixik.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lgobrvgc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163anhwcpbr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jnutwnje.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kkrblsyt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fdkgpctx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vahvmbuw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163noupvwoq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dvdjrays.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zxzxzmwb.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ckfzjptb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ambhgyvh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ojzeqxbb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163pynobzhf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ysyixnlm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gflkddxn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163agixwqhs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ylsmiwjs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vcsybont.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xvzfzvhb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cnfoewuo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ifqedqwp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gpvdehle.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cthatqrc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163spqalshy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pbowsubp.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ejpofvuo.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kvplvjoy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163dpcqogjb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rjtnhaqo.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oseefaam.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163crqdbykw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163jdmxaaym.html

time ./run.sh
来源：http://www.sxryk.cn/163sazevqwl.html

================================================================================
来源：http://www.xuanzx.com/163hdlgrnmt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dqlolywq.html

================================================================================
来源：http://www.aibaodan.cn/163duxprhoz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hyypdibt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jsvjbuoh.html


<!-- 参考信息 -->