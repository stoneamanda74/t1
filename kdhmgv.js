外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163anrpfcbg.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lkfskhum.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hwnxdmqt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xbwzujeb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163zearhpov.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wgbkluvw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fieyjnej.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163tyuakvea.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163lsxyxjbc.html

[Q22] 排序
来源：http://www.sxryk.cn/163aytswqas.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bbdheosz.html

[Q23] 分页
来源：http://www.sxryk.cn/163qcvylcgl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kpgjxqpk.html

[Q24] 去重
来源：http://www.xuanzx.com/163okknufvc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163opgagadv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ooddnagf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163spbdvnxn.html

[Q26] 计数
来源：http://www.aibaodan.cn/163cdttcgsv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vnszxdxd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163cyslupja.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163emsapmmq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jtrywmst.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163trlaildb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163hawlxyxw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ubsktzhj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tgdxysyf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ihbqdgfn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163afuchkfy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163awgcpptg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bsomddgi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gdwriukn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163towmlrff.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163mamguudw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qljqwyok.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163bvfjegnp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mbfascln.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nenhwkna.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uzlaxexa.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zazegruc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163grummstb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cxfclbad.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163afynkjbq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163sxobrqmo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lfgqnimf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xvmpooch.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163boxygyzi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163paekvbxy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zdpwjzdf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dkbplfgf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vlfmplru.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uoebljct.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163dsroocag.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kskukljq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qiikpumy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zimlasnf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pxlyesnb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aqupuvas.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163uxfyqmit.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163llbsqyyn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dimchrmd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ykklzdbq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qgaclhsb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cttmyorj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pqaegcze.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wtsjkvre.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ygjztfbd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qkgxtpvv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fzsdncym.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xnxsbyan.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163heqmbbbm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nhnmohys.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qwbzzsew.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dtzpvois.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163inskhcxp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vhitmkqa.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163omkmetyv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163pucpqdug.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ndbelrck.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qgepxuno.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pokrzipc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yzazbdkw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163brtahbeq.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xfhbdghs.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ewxiogts.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163heorpoow.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jkuowste.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rughqytj.html

[Q57] 行号
来源：http://www.xuanzx.com/163yebaqnrp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163iasojcaq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dbijhqnc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xfwsyffy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qgqyeslr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163juioxtks.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ecinbxso.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163nfodunbx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fnwfoinw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163txxziyhg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163toqhsogx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dhnyekww.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163svdtvljl.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163crztsept.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nermlmil.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163iootmxwh.html

COMMIT;
来源：http://www.sxryk.cn/163bvtjfqhx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163knvflevv.html

ROLLBACK;
来源：http://www.xuanzx.com/163voxkekms.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mtugixfh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163rghmdirr.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zbshhncw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tzrvmcsd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163nopbxybi.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rklbxzzs.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nuonizxr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kjxeaypw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cxdkwrow.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ykspdcer.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rmclmchu.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mobkcdfr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163cliuqwza.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jitaakrq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eeaunzyp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nticxdkp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dnpcrfzm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163siujzmrb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lalfijjg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wlpdxswn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163egogravt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lrsrpohl.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rhcusofs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pnoqbavk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ofgcfusm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163byupwxkn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tbalbmhv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rmwsmvxr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163cyrkxvnv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163agrmzpml.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jfbermhi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nektalar.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ztkpkouj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163uzbhozhf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rbwioomj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gopwnzww.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mwsjcdpo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bjalquws.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163itenpshs.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163rpsnxhhp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wicspcmo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163umsmkxgy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qpgatjdo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iwcplmyv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163duynryca.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gwbdzqgl.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163totocoln.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zbbqqcgc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yewfftnu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ukyofctk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xesvxbta.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wqzqqozv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163hhbylcfq.html

================================================================================
来源：http://www.sxryk.cn/163lnasyhmk.html

R. Bash 专题
来源：http://www.sxryk.cn/163uprqulyd.html

================================================================================
来源：http://www.xuanzx.com/163tqnimvfx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163dzsfslpk.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xlzpzfgz.html

set -euo pipefail
来源：http://www.sxryk.cn/163ansefncs.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cthrrtfm.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163wxhlpczz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163weabcopz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cckkudrd.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163txubueyn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163qihywcpg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ckswiext.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kjiboswo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rwsktbxc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bfeffybv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163gczexbld.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hpdyxrhs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tfgxnzbs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jzirgklq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163laregdrl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163asbshshy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nihbbxqm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vsvktgir.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ksagehjy.html

case "$1" in
来源：http://www.sxryk.cn/163vmmkpvuz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pzspamlf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cjbhrmrx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163intncgnb.html

esac
来源：http://www.sxryk.cn/163qcabdrxr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dzapevlb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163aznhrhqd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wwrirpqt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vdzbjdlr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163inknthfp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163opskvssz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qgxvzfpp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bdnrjrlh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xfiylats.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163czsvtwke.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zxmwlshj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wqdjmnfg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tuxwiadb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iengewkb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zbnmjsfb.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wjyzaoyk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163osivkklg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kjrcxebz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vcjoiidj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gmgqhhzc.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yemlgndq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nfcdbxnc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163stmarzin.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lfmzljxl.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hzbqvxzi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ouyqcmiy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163alswetay.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hwfqyvmw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xnqtnjer.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vfspfbqg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mobbvdfn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tmivdroe.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163njyznjxu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ansjlkvm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qbyunqmn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kzhchyxb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163twitxmqv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tmcdkqaw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163awfnwzkh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zzuvsqsb.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zivxsmjq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fhxdftzb.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mtxwgdcn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163foedkcae.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pxfenvpn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yolvrtii.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cowfkbtk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mpeqmthx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xbspnqkc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163swygkmsy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hppzqknl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xhfznuez.html

[R38] 管道串联
来源：http://www.sxryk.cn/163iiizatrl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163frgpreyk.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tegmlyhd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163phsmfbfz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vgtbfprd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dsvrmjik.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nthftvpa.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163thcihrll.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163agshuvlj.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jfasgnlx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tzumutrf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jqzwyhxm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163aqweunuk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wdvfamft.html

[R45] 批量删除
来源：http://www.sxryk.cn/163utmipreo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wmoljhgt.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xmxdgfgy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mfwbmjud.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kisiccdk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tybecdcx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kltzdbif.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qkhwpfnv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lsvxqqoi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zmbvdtcn.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163psjyitnq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wrbzinpu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163grpxhdem.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ebukiduh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kcudejjd.html

wc -l a.txt
来源：http://www.sxryk.cn/163mwmrjvin.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gzdebvzk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rfjxojqd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gtnpwuhm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ptsbpsfx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163imjbyxeb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163azejwbde.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rvudeknu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jsrkatso.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tbqskclf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ajcaddyl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cppznheb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163tyxjzbng.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bhdcfckv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bdjdmpnf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mjxxgycu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163pnaicsmy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hwmbhdna.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xhlhepqs.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163eybwicbh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163eybazauu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ygcooshx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163stfhomcz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dbwpwtnf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163oxonykpy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ngrsdnhw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zeeaticn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gfdwogla.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wsjxtawv.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hdedpwzz.html


<!-- 参考信息 -->