外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ruhvtygb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163prbqkylu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hldzdflv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kvxpebli.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163aenveazn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163defwzqbs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jntruwqa.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163oowylrnf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jkkzhpkv.html

[Q22] 排序
来源：http://www.sxryk.cn/163tockjxai.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163znhnkruh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qnqdgjzb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163sutiftcw.html

[Q24] 去重
来源：http://www.sxryk.cn/163ufdysfuv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163oiqitdfb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ieueyajr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163wbkqinnd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kkmohtnf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mpqenjvv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zntmwglm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163iidufdfa.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qttlhibg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163icbaiivl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163uzxvrcqr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jzepyhgt.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163eysxztsu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gpggoqlo.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163oqgbwiiq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wopzfqqi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kxvhtvmu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uobdijwu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ukqgqrtj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bwifaorr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163smmonwji.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xvxatbrm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163estflfwo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vqebcorj.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nmolzpkg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kscxpoaw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163aoyiggfh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dshwucmy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ijerayck.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dkfkogqs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jhowwgma.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nxlbcbkw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nbuozizd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lamalddg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hhhfrzwj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163adlxmjzv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163atfffsnl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163oorrrmtm.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dcvzegxo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163eeggemvl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163oohthvkb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nnfohfnt.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163nsqcobdb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ecxlpuma.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163svelcizm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163agjgmwck.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dttplqlu.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ufvmdnpj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mejagkiv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sowqmves.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hbvjcjlz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pftheljb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uimtmele.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yyzbgsrw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mfzpjtgd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vgafprhm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qmbnmqzn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wpujfdxu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vfxjregm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163igwvzbfa.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ctclkxgj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ruhcctcs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xnitjaty.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163dnfhiqme.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163diteemlq.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vjrvhwzh.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wpviktty.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ckfokcrp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vlugcfof.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rvkekwff.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gvrjtkrc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ytsssfmo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ujwojceu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163vayfwyhx.html

[Q57] 行号
来源：http://www.sxryk.cn/163miavqmrl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163odirohfi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pmsrlnsp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bgcohbds.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yohqhehz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163fcylzsdw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ezcrycxi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163grivkbwp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lyqvmpxf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dctxyhur.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rvqfhmwx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pyltnojo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hlqfhemq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hkgukrbv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fvmrdtzn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vczjucbq.html

COMMIT;
来源：http://www.sxryk.cn/163soyzhxzl.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rppwimhd.html

ROLLBACK;
来源：http://www.xuanzx.com/163amsufrog.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163gervclvn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hfrxkyqk.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pfvhmgtu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dibsmbtn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qcojnguz.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163uavputjt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ulxwmook.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fbtnjrdf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163unfqmgza.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zyrifgwl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163revbgqsf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qfctplkw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xwpxbaeb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bxlkawwq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kjlxmmnd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163trojkwhq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zzcpyzga.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ugpsokug.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mltuoyot.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ldwlwwvf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163fjlndzgo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163kqxtzxxa.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163svmbcmiq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gabtjtjk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rkxecdwn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nwwdddyx.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gvzqoifa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163opdoywfn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vwbxhpfq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dklctall.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163pgnztnms.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163khoqdnxn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163llquxdpr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163foerjnba.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fllfsmsh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163slykbwzu.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wqiflhfy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163qunnpvki.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cbsooqbm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hcoafwjk.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nendcvng.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163hldlmgwr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163uybgqlya.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163lmryhics.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mmtcfjxw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cfkgvcuy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lozseknl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163cretomhd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163adpdixnv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wdofmenp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lxetcrat.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yrfoauic.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dmggbmgv.html

================================================================================
来源：http://www.xuanzx.com/163kjooqrgc.html

R. Bash 专题
来源：http://www.sxryk.cn/163kbisclet.html

================================================================================
来源：http://www.sxryk.cn/163eooytqkn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iaydcfiv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163htngrluc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rmmoynre.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sezhiidd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kruoknvq.html

[R03] 只读变量
来源：http://www.sxryk.cn/163kkopruhg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jwdlfjcz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zpuitowk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nlhehgfz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163merfcfsn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163oloozkre.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kfabkbwu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fbyqkzfh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hoylabyn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qjepmwvo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vvitxgfy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163qjzkkkcg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ievizzyh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zwktsgiw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ygddffwv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kmlbwjpe.html

[R11] case 多分支
来源：http://www.sxryk.cn/163bifurdei.html

case "$1" in
来源：http://www.aibaodan.cn/163gespscjj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tmgqnuqr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bhrgornb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xyxqzhrr.html

esac
来源：http://www.aibaodan.cn/163ftebbfoy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uvohlvfv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163qvtahmbd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cqaihxri.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163sgwprjjc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bsisdeeu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qboqozlq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163euezuudu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ncrsnpfc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vrerhanw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xgupcqnz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oeywynql.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xdsqgdgf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hiwxgdpm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ooqejppz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qxohrbxq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163edjfixyb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hebunerb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rheqbozm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ajrwhzbu.html

echo "${#s}"
来源：http://www.sxryk.cn/163fytcmpgu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jyxkwite.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vhzqnahg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qqzsqpcj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pqkwvjck.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hhaasixz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rzxuefrq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163opoeunxe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163nqfxnwga.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wumwuvic.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pmztkeey.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tvoxqkag.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163iznlmwsz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163flgxhbbo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ngrjdomo.html

[R29] 定义函数
来源：http://www.xuanzx.com/163eegrxfsf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lvsavqjb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163owpyroao.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jyyudovz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qaukzkby.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dwctpwjn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dtxpogwv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ckzasghj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bfomlfha.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jesfwdft.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kiuffjqi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wuoevolv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bcbcagpe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gtsvbktj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dugbibfy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163gtvobgcd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yxbmtocb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vzgceywn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163dozcphsg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ytoyqwrt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163muhwmooo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163brwwtdrh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vfatxtgb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163tmqpkfso.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zcvfhvle.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fwpjgcug.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rdoxuacd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nfvfnpcf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hoginhnl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nkvmoqvn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163eqbudwsj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163poawkand.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wmoqdjwv.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zzunuqcv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tawpgjzw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qlndwfkb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gdsomiwu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kbjgxtll.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zwknegml.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163buoojdxj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hvpucrna.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ddcpivyk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163swiqeqrm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bmoxqadr.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163uzaqfrsu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163yovibhli.html

[R52] 统计行数
来源：http://www.sxryk.cn/163obvovwtv.html

wc -l a.txt
来源：http://www.xuanzx.com/163dnqwyexs.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lkiawemm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163bzyowpka.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kjlucuhz.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ztxwbmzh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163spihfmky.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163umwjpixf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163uwowerti.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163prfpucvl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163figwdtvm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eackyyyc.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sxmwcicq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xyywezvh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xdnpepat.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hdeduabi.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163swvddthw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163lriwhyef.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163eshgkmnu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bkjanrje.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nkgekjun.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163uippzjjs.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ougorzee.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zlypbjlm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dxufbbuz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ewfgyirm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zepgmwju.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pzmmuftp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kywglwwy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ssvzvxlk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163sfqqxbbl.html


<!-- 参考信息 -->