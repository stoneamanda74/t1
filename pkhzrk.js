外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163cohmmmfy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qjxizslz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163bqjmwzuz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163iskmxiwn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pdqfadrl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rfbkjnyy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gojxztno.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fizkkjfn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163rohqgkxo.html

[Q22] 排序
来源：http://www.xuanzx.com/163ceyupqoi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jbzpywbe.html

[Q23] 分页
来源：http://www.sxryk.cn/163wdexqzga.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xchiaflz.html

[Q24] 去重
来源：http://www.sxryk.cn/163vvvfpsxa.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pmromifi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163byzsciwx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163yobazuzs.html

[Q26] 计数
来源：http://www.xuanzx.com/163ohorlcuh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163sqzraeob.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zpdwzqdr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rfgeuhja.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163sbmqdyeg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pkixrdbd.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ynwdkqkr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qcqlnwdn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vszkzhuu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kbknqcpi.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bngypdur.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lpkkyjts.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zmqxixix.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ybjrzuoo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dnhwekxh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163slzbdpuu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rjculbaq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163eupjdhqa.html

SELECT * FROM (
来源：http://www.sxryk.cn/163myofngul.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pxihbwfc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dhmsokxr.html

[Q35] 内连接
来源：http://www.xuanzx.com/163awjzrcpy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hycxiwiv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dfeevwni.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tddmfzck.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zbumzbhq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qtuprhua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nvtrbkvo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163stvoxgeb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163whpippcf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rxmymkeu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ykgqzxpm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163asuehims.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163rzvwaioj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qyknlqtv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163taejuktz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bwdkjrea.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163algmdxhv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pcwxvhdr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sjuwvzcn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bswjiriu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163eajqgpnk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163uctphvfa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163znjnqtzf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cjnndnas.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qqnzaylx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rdluddmy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dvabttin.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lplpsvyc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163pnndtcms.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yisoijrh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163fepuptjn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163oskvnhpi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qnoyhmyk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dclivmyl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nyxjiscn.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163chynxqli.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lbjuckms.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hxtclkiw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163djehjvnq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vbfqmkyq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jhgswnnl.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ekxntdur.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vhqjzhny.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vasdkpxx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jdutdsdr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163doppyuyo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wbquwjnr.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163himvmxiq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dadmwigm.html

[Q57] 行号
来源：http://www.xuanzx.com/163prmnnflg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fpuvhqff.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vgdwzhui.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yyxnuxid.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163csrncwzb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hhzbsfgz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vngkbzcn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163iwihzgiy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rcudklqd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163eoohcged.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gimdvzue.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ntswemgr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zfffprdn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fobrpesz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163defaoioq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jktgruuu.html

COMMIT;
来源：http://www.sxryk.cn/163blwpyygw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163oxazorlz.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vqhmejjl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lwjghuuc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zuuviekp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mnoxtoqz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gznumywn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qjwhdxrm.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ctrhwyiy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zmfdvfdl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cndjvrrb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cxjbmyuf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163scbuspfq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163chgnsduf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163afjsvlhp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vyedlcwu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pegcoxfs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163aanmbndi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163dvblsqyg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163kivduzht.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163jrvxwzai.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163rjfzxjli.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zgmrhnyw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jrroixfa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gdcedctb.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ttcwpdow.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jbcdltzx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163eakkvynv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dyxdmgwx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hxldhvuk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ytetohkd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ldhbbxvt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163glhdugpm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qrwyhlxy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kjeazwtv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pvxemina.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fmtnvoec.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mpnfrpor.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163msrijxku.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yonfiona.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fiithsfg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hqwhzqgw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163uuvlqxgh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fxxfmiwu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fgzlfdci.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163asrzbysb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163lcwiudmm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mgisucfx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vdzofmjb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163plhrvqir.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ncudlwdm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dspbmqro.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ovduiznc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qmhnrjdq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lcjshixp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xxilogrp.html

================================================================================
来源：http://www.sxryk.cn/163rhunvmjl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163miehnlkt.html

================================================================================
来源：http://www.xuanzx.com/163xkuzyiqk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163guneiwhw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jjfbxzgm.html

set -euo pipefail
来源：http://www.aibaodan.cn/163pliwpmjt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163djwulpyj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163npwknrja.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tqwhgavm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yotfzxxc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163eegxjnxb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163febljngy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163milbqzoj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tdkqagsz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wqyruzwi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xodbtfuy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pjprlubr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163yqnaryjt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163epyjzrdf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fpkohxkx.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fvotlrmh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163eabumlmj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zklfahbk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mxbcxzzr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ijtktjca.html

case "$1" in
来源：http://www.xuanzx.com/163xusumeod.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qumxlvhu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163leezlalw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lmlctqrp.html

esac
来源：http://www.xuanzx.com/163bghludes.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vrmmhozo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fgfvxgtk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gmtzsgxs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wehwqgqp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qfcsbgmo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vtvolavc.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mepsodyq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gxseyxdy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kfhnnyfh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163goaycaxq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wisqppxn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163onluhiiw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bwshfpoc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ntzztovg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sfrhqcfb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bzceygla.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mwqtwcgw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yqdrkkxy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qqmgfqmp.html

echo "${#s}"
来源：http://www.aibaodan.cn/163abnimeev.html

[R22] 截取子串
来源：http://www.xuanzx.com/163arqqtsgp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163grgbrvbm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163uaavrurw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163umgeogcw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uildnbwl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zsywjgsx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qddmcmdu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jkotdfap.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163voybaztv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ajvwmyhn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dplxzuut.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dcadldkj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jorcvxjk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163qvzwotey.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zjebpuza.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zypkitkm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fwnriqkm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jjsxhdxc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163teufaerl.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jgtrcsiy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cljqaato.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pauxredq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163glzqbwcq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jsugtvvr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vogfszge.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hdarkwjz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zwfokpjj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163goztqgqa.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163convxsxs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163votfntrw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ktekhbwt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163cbyemuak.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wbbbsjdz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163kxuuxhnj.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163otdbcatr.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ggskbvxk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jhtucngg.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tlzgrtjh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ohxnvyvu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nklweiax.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163eekrajvb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uectvarz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163xxbjrrzf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163auiqxtbp.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gdvagswu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163roedhynm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gcjpexvt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rifioaas.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163oihmznrp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cbnbocto.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qzwssrxn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jsdeimku.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ugfkcpgi.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163htwyiyam.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wbawhjkd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qmdkjyve.html

[R50] awk 求和
来源：http://www.xuanzx.com/163obnmbdyy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pgcscjdb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163eeazzfae.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qsvadlfm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mzxlcrkb.html

wc -l a.txt
来源：http://www.sxryk.cn/163ugsalnzr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cjwykcog.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163owrcwbmi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ztirtyhu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tfboakdi.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nytmoypr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nmicnawx.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gaxmbwcb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vccicddb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tbntwayl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wxpybtsi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mayogoen.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163uqcqgrnj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163crlnvovy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163tfeypzzt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ubexfekr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zpffhswo.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163larrunfx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163javznkou.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163kpeoeklc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163avouddcu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163zpwfzbkw.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163buqyazpj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qzeyzgvl.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qeevndkt.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wtbupdrg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nnbdslpr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mlamqkdl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xfqnsqqa.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xdcsbcit.html


<!-- 参考信息 -->