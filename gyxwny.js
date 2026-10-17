外链999!wailian999！

SELECT * FROM users;
来源：http://www.aibaodan.cn/163iqgfcpxb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163khmncsex.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xbnntqhl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rgtefxef.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jlxvfald.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xhlvmwmd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wqcvxsjs.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zxconbgh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ucmsmrrp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qqlyllrj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163hxhsnlgj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fspmmxnf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cifoodtc.html

[Q22] 排序
来源：http://www.sxryk.cn/163rrvswwwd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ehscegxv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fpgamvth.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tethhkdf.html

[Q24] 去重
来源：http://www.sxryk.cn/163yfzcozfq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163exadskwg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ncrzyrkt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gpsdqsss.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ceeofkgh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163slmyrfuq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ixalahrk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163whscofuy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gubnlyrh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nolmpmzd.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163remhnhud.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ovbfyxqi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xajhrnqx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rjvdfseb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bcmudziz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163egmffwcz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163imxsgtpu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zdusnxwx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jshbqtoz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hklhuomm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mnzijrfk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xaanvfyz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lqnmuink.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163uvwdrfrh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163acqettgl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vftrqggh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ybamsvxs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ayzsccct.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xjlcdjjq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kesznpkk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163unayjape.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cdoggvtm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163dtkypcty.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163uwlcdeaw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vpiltxzq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ltuzvcil.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wqmfatkk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163iauqcuev.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yqmbosso.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163mvrykcdd.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dahkmyxr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163anugjpma.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jxaoxiuq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163udfbraec.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lxubjbiz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vnrmwxoh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bhuwsnsp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zfzvfhxe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163keyobgfk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163canyznlj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pfyjmoix.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hkknvnsj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163akzkuajv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qwdygrtr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lcczlyxy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ixqjprnn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163oyihlrff.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fyolxopy.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jaryvsqv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ogasjfqm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ngobigly.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kcfymtfd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lcktjido.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jxnjmpta.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ywplnaev.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vbfnpnnn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dqevgywu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ykfdqyfq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163irlahtgs.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cikwfvbv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zwvuyoup.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yyzzqhie.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qkvbdjla.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163lfgtmjvn.html

[Q57] 行号
来源：http://www.xuanzx.com/163zuhxjsar.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rocszroy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pgreyoxq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163opqzsgsg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nuvlqkfb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vuoujjnt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kpuujmng.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hmmmoqzk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ptfbunqw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zwgahdpm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163cjstcywa.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hjhldpra.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nvmwqjvd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wratesqn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mpbkwmbz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163akowvsex.html

COMMIT;
来源：http://www.sxryk.cn/163xsulugmx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mzdqaysj.html

ROLLBACK;
来源：http://www.sxryk.cn/163swyyjzic.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mejpsbzl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ipftrnmm.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qhjbfhfz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xokfthqv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tennezhc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163oqnqprfs.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163najcbkhn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163yfwnyjjt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163sniotiwp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gysykock.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163oqmitffc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163axsydgeu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163sewwcrov.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xubpyjks.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163byyfzevt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kkboqpzi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163glnramit.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163otxakovc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lzbeowxk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163tshzvlvl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163upbyvsrd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bsdglfll.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163evtinyrc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163etqdjfoh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wrmqhiab.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vacjupqm.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uvclvduv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vebskwgj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xxugequl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163pjsnzncg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tsqoxkpw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ngbmkkxo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vdmoggqs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jcwcvjno.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ismchnou.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bmzqlgvx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163eihxxgjy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hweuvfje.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163mqftdjmj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163itvbdgzy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163cxuogmxq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wgnvrjhd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163czmhoxgz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nmhjucgp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163cbeiqxnk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tmzmmgup.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163crnshlsu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163eatzzona.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163mmtqihfz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fgeiywls.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fogxkzdp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qospslto.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163drztuwru.html

================================================================================
来源：http://www.aibaodan.cn/163eglqkutm.html

R. Bash 专题
来源：http://www.xuanzx.com/163fbqzzxmh.html

================================================================================
来源：http://www.sxryk.cn/163maxqynvq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wupueqdg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tsbfuocr.html

set -euo pipefail
来源：http://www.xuanzx.com/163llmyhyul.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sxmzvufk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xmyturjq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163adhbngqb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163unrmqlef.html

[R04] 位置参数
来源：http://www.xuanzx.com/163suzabvcn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cacrujfs.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163uzxfosfe.html

name="${1:-default}"
来源：http://www.xuanzx.com/163obhgerng.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mkzndxth.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163itgnahtv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bfriufll.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mwnwdzag.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ulqsefcr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bbdxckix.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xwrcajxi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gvjzzizt.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163foiredck.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vstyvoey.html

[R11] case 多分支
来源：http://www.xuanzx.com/163veumsqrw.html

case "$1" in
来源：http://www.sxryk.cn/163ypwevbav.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163julyfiol.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mdwdcony.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mkufgdsj.html

esac
来源：http://www.sxryk.cn/163xcjwnzui.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kjakauvz.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163dbbirdgw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pvekkmni.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rsiyoadf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dvxmucjt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jbgghtft.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lrnsvpsy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ghfpmryb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jhfccbed.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ihhwozrg.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ywxjylmi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163aglvnxpo.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kadrwope.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fyvclqrj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uxaomhwu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163oeiiofkr.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ziwhswhb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163yjsgkirx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zhxrieou.html

echo "${#s}"
来源：http://www.aibaodan.cn/163bquiivbz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cyjwcnsh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nmizsfvy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163onhplpoy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mphduyqs.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163iodnfwzp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pgzwxbsi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gxubvwye.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wizzrgpg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163emjpcetv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163popgcuyr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163svsxaehf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163pxntpjpa.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rcuuijfn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hbannimc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kzajuthv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ziubuklg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ymufaeks.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163itzmqdqu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rkphgizs.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dctdnodo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163reuwbxts.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nukdvbus.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zyfkkknd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pvdmotth.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pwlwkspb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hlehdjrk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tsyballv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163haufvuma.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hhhbdfqg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qosqvkfr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163pdzoruxr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qggzizuy.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ioffwrmj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oyhmauvx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mvdrdhkw.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163omutdyiq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jjliicnn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qlqjcara.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jvsnqpyo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163brwnjerg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163nqzdgnnz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163basdjtgs.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163fplgvcww.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163geommeru.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163pmayslli.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163onfbsxbg.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dpddhmkc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vvqnkmeh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mabshbvh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wehuyrjz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163klidtbby.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jvwovkmz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163neftglji.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hbuorztg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dxhqpanq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kamsrsbu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kcctlehj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kkhmfqxx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cdugcvox.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tteotqpr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mrbbyzwp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163oidrpzif.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gbirrjge.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163sxjqhkyj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yqvomoji.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qzqsjkdl.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rrsswitq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tsskggln.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163potjrgiz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qenwtpug.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lpmmrnfi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163lrgcogjp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163papbfbte.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hvjbuxfq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163heycrepz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163uhkmvowy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163khfiwrrz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163iiyoixzy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wuqzenqp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kwuzsmtt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163sretxglk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ahvzqzno.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vibpjchs.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sfxinfsq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lucwutdg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nrsnveys.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pawnepgv.html


<!-- 参考信息 -->