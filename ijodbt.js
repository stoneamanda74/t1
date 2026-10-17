外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bxjgdufb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163cfhapdvo.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zfbgsuvz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zxhowggc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tcofokgo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yriuslgu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ldkygvov.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jkofnkqo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163lpgjlcln.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dgrvbvnv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kfcwzjgy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dtdnugwz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lohawsia.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163kefhzpef.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gozfxxsw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163mvphobka.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pkdrhuyv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mpdyrzvy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163pohhhedd.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gspvkjyw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nbwbvdfs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163tqctcrpf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163apspdsxt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nyushmzv.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163sxthexnu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ttqffmxr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eloejbfe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jlxcopiz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163oofeylut.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rmwppxbw.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163emtpbobm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hmcshwlx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nzrlrdug.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163fwenfwfl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ocbbivel.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tnqkxtuk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163aubmhjfd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tafafikb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163uqpqrafs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163kvunbmal.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163haszackm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jdgsszjd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163eanizhee.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163mxewjkhk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mnbhraiy.html

[Q54] 清空表
来源：http://www.sxryk.cn/163krwyhqke.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lbippxij.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zfircokp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163nnvqgdaq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hvchpckl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163eevpgvml.html

[Q57] 行号
来源：http://www.sxryk.cn/163pvuugiif.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jzabprkt.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uilbqpxw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163auwijjlh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163srcbrxom.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lcarwvie.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163umhezqde.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163elljzgcf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163enwsruzm.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mxzhipid.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kmdbydfi.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xjhpxutq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vwtravlu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ijefwyfu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ryqmhese.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yyzfcxwh.html

COMMIT;
来源：http://www.xuanzx.com/163vkmzbaqe.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vfmszrnj.html

ROLLBACK;
来源：http://www.sxryk.cn/163adqjqwqx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ozknfckb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163trtuvvgm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gohormss.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pxnocttc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rtyengfl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hsesfnjd.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163uzldtgko.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163eksclwdr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mflmzwbp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qngxtxas.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bfeodrmj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cmjynmck.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tskasnoa.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ergibjgm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163khecvyqc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qglicreq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qgmcwzou.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vkmzswzy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ondfgzwk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163klnehiiy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163gjhjwyjt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163neagnwyu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jopyraif.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pakoobsn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163anxudqsa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163azcgzzfk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zrybnwsw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163whrypvzc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hbmjnhtq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jdsftcrb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rdfokrhz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ljgsqtci.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fngocaba.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vybujdcl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qjrytsky.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nblhiokg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dcbpsxlv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163voannswr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ttrqrrrm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cwhnlffi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163exmnzajv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ywqiocik.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vtqgtngf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yoxopeof.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qqiwilgh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vngsiwuh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163aqqopoew.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cinljias.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fkguxjiu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163inuhgddg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mkpmpnov.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163biweezwv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ofkeouia.html

================================================================================
来源：http://www.aibaodan.cn/163gmhaarkq.html

R. Bash 专题
来源：http://www.sxryk.cn/163uualtdvo.html

================================================================================
来源：http://www.sxryk.cn/163vinihrnz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gkgjvfun.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ypjvwdgs.html

set -euo pipefail
来源：http://www.xuanzx.com/163uoyjteqx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163otmiwznb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tkaymacb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nvatbhlb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wffvfcdt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163fradfyou.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xzmgzfsn.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163avwiwpbz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wycztzls.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163anxidqea.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vkimpcnq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163giadsfjd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ydthniir.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tkcxqqoz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lispxcpf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163lnbohxtc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163moonyvis.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qhwzqcjw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ffyabfkz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tzdjpdkx.html

case "$1" in
来源：http://www.sxryk.cn/163cyxijprx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163grzdnbka.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163idshfjju.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xvsqfclh.html

esac
来源：http://www.aibaodan.cn/163esjlirte.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163quyaeqem.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ovsszykc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163fbknthkz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163aonwogrl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sbgzpjcl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gbthbwpi.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ffsnmbmd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rucqrkbl.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163msgertbb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wionysif.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uqfxdamx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163sgeqrwit.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163biodkxuz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tmqvqzlh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163nfwubboq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163lkoblyzv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163skraibaf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vlecziwf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kjcfjjhd.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ecsqreqd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ftqfmncl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163wlyslbmo.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ziivovgn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163phlkqtej.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vbuvqvzr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dgtnqggj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163phgbuwew.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163aaljizxb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163eukfamhs.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jqfrxxvl.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kakljgai.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163aqkoueuh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gbegylww.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hhgvxqqe.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163simiipaw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ksumuwoa.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cqognnjf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163feytrubx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ewpnpxsm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163sonqgfcs.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lgjcciar.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163grgruxoq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bryiurmk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ecohswzd.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hjvwsrcf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pkzqwrae.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ywurqcsv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gkwjqwvc.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163rvpsasrd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pnzfikqm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ppjslumt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cferacpz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yaukcpbr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163buhefxjy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hgsqjazz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163shespfgx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gpdspiwl.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lumocqsz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mckayrdd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vulwxebz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hbhlynex.html

wc -l < a.txt
来源：http://www.sxryk.cn/163lqtpntmw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163nyarfjfk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ebvawlih.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nbtxxsip.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163bhohaqqh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163othaqedi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163faflcmlb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lfbluzgm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nekrqcah.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163eyhgpeeg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163icwvrlqm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163wmrhiozx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163upusbhmm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qfjlovnp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kwqmsqda.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ukocetut.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xsospfbn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163uakfzfiz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163atxzqwkp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tdohyrfp.html

wc -l a.txt
来源：http://www.sxryk.cn/163hxbigfks.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fbxvfugz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kqplxbaf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zvxqjtqs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bugcpwvf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163frkctabf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gyprhnaq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163skyuwhew.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163tcgwvdmg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ytkagmcx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jlzbtdoy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163hdwxcgsl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mjaudjnc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vngvdbag.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rgbglihc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cninkapr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gxkecyvu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iqsyysjm.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ochtjdco.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yurlxobm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xnwmimsc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163doogeuih.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hewdcxyq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nlbyygbm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wochdnlu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sdcyseno.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zufirkqs.html

[R66] 定时任务
来源：http://www.xuanzx.com/163oowiptum.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mxazswan.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wcjgjoql.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cvlkqhhh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wrxztnhs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pqiytewu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yluycgyd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bdmswljl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163imswuxbx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jrpzqfwp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cegudzch.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163aqgqdwom.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163aepanvkh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uuqebpxt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mqxfufca.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xbzsvnkz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ohfsufvz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vlobcxrb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zmohslbh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fpvibecw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jabuvjco.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gqmfqvkk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xzjmxbva.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pdculgsr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mjlsikdn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vhzldpmz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163syrdvivl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pagrmgfb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ipegwjae.html

time ./run.sh
来源：http://www.aibaodan.cn/163ifwhaskq.html

================================================================================
来源：http://www.sxryk.cn/163vcxtdrix.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xtawpjwj.html

================================================================================
来源：http://www.xuanzx.com/163acwnvguh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tdnznvab.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ubaxlpss.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bwtvffbh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tbxrhwjh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163phqrgqrv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163alrcmoem.html


<!-- 参考信息 -->