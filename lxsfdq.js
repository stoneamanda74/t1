外链999!wailian999！

SELECT * FROM users;
来源：http://www.xuanzx.com/163ratxzyxq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fivkixbf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gidhdpsk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hspswsdy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qejkhmdm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ukhxvwyk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jjydgbdz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cttxqrva.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163svvzvikx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163savgehri.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mgsogvxw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xnvmonfu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163otbhjvbq.html

[Q22] 排序
来源：http://www.xuanzx.com/163jntsbmel.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ijirnjnz.html

[Q23] 分页
来源：http://www.xuanzx.com/163abfrblgo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ygtrjvyz.html

[Q24] 去重
来源：http://www.sxryk.cn/163qtebnicu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163txzizldm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tnayyefe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ftsryrlh.html

[Q26] 计数
来源：http://www.sxryk.cn/163byxuswhg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163pnhvgsqj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uhzdfkoo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rtbohccp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163htwutckw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tthfmryu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163dincudzk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163fnfrdywf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163bvlbnzrm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dcwsmzde.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163cmcoqdkl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xoksszah.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vjglwayn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uueqalmn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163oalgplwy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tvioyoch.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163uxfyzkmw.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nywqayfm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163cssikdtk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163akqiujaw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yjcxmbcc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163exgbxglx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ejbqhcyp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gzzltyrb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wzksetlk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163orinmqox.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uqkjhjjs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163vtspnoeo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wvloarcm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163regjakwp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fuensbbr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gohvbhdq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163uvjdtqjl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qovnjyay.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ixvplsbs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lobxrldj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163svvodywe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163pwgthfzl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wkmsuelc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zcmdrqjk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tbccjegg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163clvpfwch.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tvtuiyvt.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fgcthfci.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jnduufvt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hbajzlbm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ftyvhoew.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163dnomsdtk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zvfpjqdn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vxmwevhp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ahkfygdo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ujyefmti.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163zmdefwac.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yjlmguel.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163lqxvgjoj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mzwjknpr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zfqlplem.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gttixojl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tcsgefhl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rfwkxnzj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zjwgqskt.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163kjymjsks.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wiimgrvi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uijgnumk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rfeinmgu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cwrzswku.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ukekywgi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163flzlqteo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tdcpimps.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163yfmhwiic.html

[Q57] 行号
来源：http://www.aibaodan.cn/163jtdpkohk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163uxlzxwic.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163blzatjnb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mqhuozht.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wekqmeae.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163afkwhihm.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ewmjwhrh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mdynfoyx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tmtpyadk.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163owgipjlg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163breadeoi.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jhqtcdix.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dcqzlpyp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fyqklpxs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mmjlvdqb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163waersxoo.html

COMMIT;
来源：http://www.aibaodan.cn/163oqguczxw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pwcwrqfj.html

ROLLBACK;
来源：http://www.xuanzx.com/163vbttupkc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163pjedacpj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163somuxdqq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dcjvufra.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gqiuacos.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yxofqzvh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163pvoggfjw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mtwpfuqf.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hmfwutsq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163mddtaipq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qtqtlqfe.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163spilycat.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lxbgjfml.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163tvieglub.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163atkwnrxn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qckzvzgm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uuwckild.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yvtharlb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dzldgiqw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wxpdxica.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pzwllmnf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mspwtwxr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163klnzbwcm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163bokmlycj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ygmmrwcw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lahhxycz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ixaebefl.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tcwxsqqp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rhuurbfn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jxanbiem.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ivhhkyxg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mevuipkk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163megnltkz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ewezqnep.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mrlraksg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tistumqo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gknokbnm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nvwonwdr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qbahjoly.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qnlvvyck.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lbztbqib.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jpgvuyrt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cpqkjkcd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163dibzhkgm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ppoujmkv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rtfdctjd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jrwutbut.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163lkpqvxnh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hgbkixgt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rmgfnafw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yqpsfipf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mpqztegb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dzsholje.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jtlkrjtl.html

================================================================================
来源：http://www.sxryk.cn/163nnwkzafh.html

R. Bash 专题
来源：http://www.sxryk.cn/163xiwfgwoc.html

================================================================================
来源：http://www.xuanzx.com/163nbenigws.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163roiqvxpa.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163buiptrrs.html

set -euo pipefail
来源：http://www.sxryk.cn/163fedpgpan.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bywjbqzz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163reglhhxc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dvgomids.html

readonly PI=3.14
来源：http://www.xuanzx.com/163oawsbghf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163wucnzizg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gebcdfxp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163eaxhvhik.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163exgeqhcg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zcbytjid.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163viafvheg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163gpggkqxj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rvqbviqp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bgfldcmy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lskgikre.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qoanzubl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xovkjhil.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ijpwuilo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ylpavief.html

[R11] case 多分支
来源：http://www.sxryk.cn/163okzcllpd.html

case "$1" in
来源：http://www.xuanzx.com/163eqolkcpm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gxmsaups.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bnhmfkzu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lgtfkfdd.html

esac
来源：http://www.aibaodan.cn/163jarlglvs.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lpgiqhok.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gmwwjazu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zstdphde.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163twualgqo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163rxvneamd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163puibnzez.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ytzpjksq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163lhlihqfg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163maucvght.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cmcjfymo.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mxocjkpn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xpacsree.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163fjqpbcay.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ewqwzmos.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xetzhuht.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fwzqazia.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163kyxfkvpz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mrxbnbfw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163aunzmtyu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163adqqzwor.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hjatpsws.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cwbyixsx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fwbzfcqy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163iciluyju.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pmrgfqyr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163usdussfp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gipaflea.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nfycjnxy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163sruxgmyg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ouyicxdv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bmbwsftc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163llaenapb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kkxepucr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ecljybsw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163dsizmcnr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163duckffxu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ljctsagv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rwwzoqdh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163pyuqtzii.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hbelzgxy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hvprhfdr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gbkcfvhi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wfaozsjn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163eviuqynh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qbcqsebl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dfzbscbm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tbrffcod.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wcdboybk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rccjtabm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ueqhnkpq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ltcmklvs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163adkecpuc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rvocibpi.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163uvtsqdsy.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163jzfyomow.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hdrkevzf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gtpdsrun.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163zkeraipz.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nvkcfxor.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163temmxjwe.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vtgvekzt.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qdkjthmd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163erlmzdco.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wpmyrrjq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hqyxqvtg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ttktapqx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xjuunjun.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163esqfmrvm.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163xpskowdf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163aonhxmez.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tbhsdonx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xpctspma.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vbbpngyb.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mqxllpii.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163voqnhzqy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163tkabidca.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dtxgdawc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zcjreirl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hywkcpsa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kaixncse.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rnishbso.html

wc -l a.txt
来源：http://www.xuanzx.com/163qorkndwv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rtwjydmb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163degmmarf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zkgmkwbn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ffejtgbu.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kncgsrqb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163efwvhhiw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163unwbolvp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163iwqraztr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bxjlqiws.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dexjpltm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163clgpiiwl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163efublqni.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qzsxapby.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hqavaqfq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163yyxengji.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163amipoikj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ceqelfhc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163svfjudel.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163iqruxuzi.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yixrktlm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163caqclqgf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zjxoznnv.html

[R64] 结束进程
来源：http://www.xuanzx.com/163huewaqzr.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163sbaapjsq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rxkvvnte.html


<!-- 参考信息 -->