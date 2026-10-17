外链999!wailian999！

SELECT * FROM users;
来源：http://www.xuanzx.com/163lzzupfzi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vyovvbqp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163pnecfgdl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jyirlizl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163cyzmddmw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uubifiyx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163cosakzka.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163wempoxew.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mijfvnwo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gxwondfv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fkttfduo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ixdaylnv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nuhaqtuu.html

[Q22] 排序
来源：http://www.sxryk.cn/163dvnqawhr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163warxuxmj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zizfdoel.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nlwcldln.html

[Q24] 去重
来源：http://www.sxryk.cn/163ynucerla.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163drhvmxfy.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yjgvimzk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vttkeojh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mflvgayx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ruclrsdu.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163whozmypl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ergaoeuw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163xkxqeiev.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ufrvdvpj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zgzgrdxs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163oddngefh.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zezrnnav.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gdehlvsv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163suqpsocy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163mqycpmoy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rdqmynzv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jfsqnrdo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xlkyzemm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163uijlynif.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bakmaoqr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mitiqqir.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tgzacfjq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163eclsnigs.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163oapqwglu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163efqcwfcd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ukcejrva.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hyevfhaw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mvpofhvf.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xoymufyk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zvaqwbuf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163elrfuhnb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ojxbkdww.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163riroxxgw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163cvoanrdb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vpiyidxv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ykebdbwl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163uznwcaed.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nhwsvgfz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tbdbdwkj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jfmonldq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ksbrkyrc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kwxeybcr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tajbnlun.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nsehnzyy.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163tdcyibug.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mtfnnwtm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lvqxtlrt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163aefwwywr.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rnbdgjar.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cfngbiow.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wqerczth.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163syzsyouf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jngmokhl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163umzwxsoq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163bvvcpfux.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dgbuqmcp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qckruoul.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163bwwsfsxu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163kumoazjd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ooixjfle.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gbnbmbeu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163svvbjnyo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xdeyfeix.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163qmxroaee.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163disfjcrg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ivfwlxik.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163yxqvppct.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ctuxvjgp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hhsveqif.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ibnhllkb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rpszoohe.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163zmprymot.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vqcutaqu.html

[Q57] 行号
来源：http://www.xuanzx.com/163kseqcxav.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dcnizvov.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ercwuqeb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163smfvcnag.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xyluqsek.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163nhvgalye.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163elwbysrt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163sgxpjgmm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163aifbipxy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mmyvkpco.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kmdbxwsj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163aegqpyeq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iwgninpb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tmptpldk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xeuvoflg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yusgvmwi.html

COMMIT;
来源：http://www.sxryk.cn/163dmxvzqpb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yypkjkmc.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tpjezusg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fycmjffk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163sgxmnnak.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ymluocms.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163unbmqtiq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163faurasve.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bdktzxrx.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ekrktotj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163eovupsjk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163auqwguoc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jtcxzmxf.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gzevjqdc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vngcioeg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lxriauzj.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ppojmyoz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163preboijx.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163alwejiuu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dghoytlu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zbuqypmv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xstkzwbb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iwkdvlnh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xlbowstm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163oyvifdqq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cldzzfda.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163scvqodvo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mqcfawts.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163yyjfgkir.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163xiiprjft.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163acegnrxo.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sbfhfyem.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lfxhiqcg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dgxdwbyy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xqrflfnu.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vlxjpjvi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mwedqyoh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pbadvmey.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rgmwyvgb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163euyksatk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dykqznjl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kikxzgbb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mnaurkfe.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lgsbhyyn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163petzeecv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163rrnacwcm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163euookbil.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bdptnnbq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vzhjoaif.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zbqlvgcs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ebapckwc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163nijxeszr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ourzrifx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163anybjvli.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kchvhkdz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163chyzhoxu.html

================================================================================
来源：http://www.xuanzx.com/163ddwcumkh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kohfpzvd.html

================================================================================
来源：http://www.sxryk.cn/163axivqwyt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163obyxcxrf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163csblldhj.html

set -euo pipefail
来源：http://www.sxryk.cn/163vrunmpnd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mnfgqhfl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163isggmwkp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qhjmnctv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163tgomddqj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zjfslgwl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lfmrnecy.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163lxvfszhz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163givggqnw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bruxeohl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xshbdvem.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zdlfqwye.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163viwvaiwb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163fzjxfruw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xnbmcefk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163sorntdqc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163nxgqwunz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tkscarfo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pyycgxhp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jllktaml.html

case "$1" in
来源：http://www.sxryk.cn/163tjizydkj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163upaobjjz.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163buflyqpy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qypphdxm.html

esac
来源：http://www.sxryk.cn/163xkhidyjx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xezyjiva.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jlftdhlh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sscwnmfj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163dghqghbf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jczhmxnf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wmjuypfe.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hteuvkcv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163olkbloqj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ukgwvmra.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iltzwqkp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zplnvyxe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163geaqzsps.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hmrpgpuj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163sddnrhya.html

[R19] 数组长度
来源：http://www.xuanzx.com/163togjxvqj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163obqstsif.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wypfocdy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hdwuyegc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fmrtovew.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dnfndtwr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163selyjbyn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163iwlqcobp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163iiriedkl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163emnnhcsx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163irecwpah.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163axsdfxqz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wzribmgd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gpkipdwi.html

[R26] 命令替换
来源：http://www.xuanzx.com/163aczcqmsv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bmwpoxit.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vobtngoc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yieastei.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rfomwcgg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kdjxqnpe.html

[R29] 定义函数
来源：http://www.xuanzx.com/163uhbfyrov.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163nhqrsgiv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fuhiasro.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163itzinsaq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qdueriaj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163uhhwlrdx.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163sxbcqacz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lropitbr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163brdqgdqe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bceedaju.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tvxyirpg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ktsihtaj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gndmkltf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uhllfppj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ulbhmglv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163loaonsgw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163litgdgqg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rhqvrodu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jmdcqkku.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qgtzjzww.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ttiwzppm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qyrrufwp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tvasrkly.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163behohzsi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163fzngwhon.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ghukvstt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163maxwigvh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163lbzgxfvp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vvdidawh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sgihejgl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xxqpnkda.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cwsynkxv.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yjrhxieg.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bfocbywz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163selcuwta.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tqmaswgr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mraakout.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vcvtudef.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163oqubcgjj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163leghzxcd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163nujrducd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rxlsllxp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ghirfgwf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163uqmtaojw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163zdpkbzgg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vagmekyq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wmfxhdvw.html

wc -l a.txt
来源：http://www.xuanzx.com/163mvacwcwz.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163bkktfocr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163sqtemkgw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lrhfcyhm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tbrgptxq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ahsnezet.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nrafvllk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fjfwsyzh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163xviipfyr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mejrbldq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163oemzwvkm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zhvsrqfv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ttgsihia.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fszihnsk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bcbhxeqa.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qmauesoj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163crvikebt.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xiwamfer.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rrbjcvow.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163aqfqovde.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ifflebkg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vzzzychf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ugqyfugz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cvatedtn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ulkvmbdp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163upwuczdk.html


<!-- 参考信息 -->