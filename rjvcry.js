外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nayvejjj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qzowxecg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163swbcicya.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mnkiqrqw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xolfzgtc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ououfuhb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zjrpvcso.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dyseeser.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163opqxdifp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eijmmgyf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xjgbswpv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ygjpwxop.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wcxeujbm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163kowkqkdp.html

[Q35] 内连接
来源：http://www.sxryk.cn/163sgtcivzj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cqzcfhci.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dgjyvvvg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ftdpspnh.html

[Q37] 右连接
来源：http://www.sxryk.cn/163snzqmcse.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mdlltqdo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mmwhisos.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wanrsouo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163alfihqqp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yrzcnwjo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bixuuxvt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163odspdhod.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ryobknte.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163geraohbp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ojamloao.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bjygjbwt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bhxipiyj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ruqdhahr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mpeblyhk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163httpwhyb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xlhrwvew.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163zghodjfz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163emgkkzdx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163husoesuj.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zjewfeid.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xpovygym.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dqyacwxs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pipehtel.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163uluidspo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tvpbsged.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ayowshba.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lfstlhzt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ykodyhez.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163sydznnim.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fjckwdcx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163oqohowie.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163msiuswub.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ogtvafto.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dvfedmhy.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zhbeywkz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bzggshpl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eikeuenj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ldexxwcv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163lvximyzx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nuenzdny.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163quajzsdg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163nrhozbil.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dvanlwkm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163bgfwqpjn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zxozopwr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wjpsexir.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mizsrwjz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qiioswmk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163yztqsrvo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dpphqdmv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163edtoctde.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163feualakr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hjafnimd.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xokllwld.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ugxtbpju.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ihwwewph.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hbghtdlp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xflaobtu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jdpyjdlw.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ytsyequg.html

COMMIT;
来源：http://www.sxryk.cn/163mqfqnqoz.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163keerqjny.html

ROLLBACK;
来源：http://www.xuanzx.com/163xxzrxwvn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bwtknmvu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kgarkkxo.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pvhpfkxl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zxmgpqpu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163usyypjvz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163igtqcxyn.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163viafifsg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163phoblwkt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163smwgxhot.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163urtdftll.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vrbwurur.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mvfwofum.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hvuicllz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163mxtpixjb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163uqopcspo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bqehzweq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hdjkswxp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mxzdpwrf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vpuyvruo.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163gwezhghm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163iejbopfa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rqauiclu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163gchwmodh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163revenhtm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fvijzxfx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ywgvwwyr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163afdtpmus.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163tgldwfpl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qkkynccc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fciyvxwq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163omcvdvyh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gbypgeqw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lkkekxbi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163shhlrjfe.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163avuzqmpz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yaoxrrdx.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ixumzffj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xqhhshvx.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163suxkutdk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bztrhogv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163owoqnyue.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163siodgvci.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163blkivbmn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163phlovkmz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nubhmowg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xwmhvjnr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vhsxibxf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mqbogoau.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163yvjgnecg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vbuyqcid.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ywzdrjoq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lvlefedb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rflbuhnf.html

================================================================================
来源：http://www.aibaodan.cn/163jzzgdfvs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ntkfgjvp.html

================================================================================
来源：http://www.sxryk.cn/163gqzaucro.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jsxdaqyv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163atfecdhz.html

set -euo pipefail
来源：http://www.xuanzx.com/163tluaaeaf.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pczbzzxc.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163pnczynuc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163undstyvv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163pigrpjdi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163fjkiddmh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qimmktkg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163igjgmzyl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wmwvxurn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ykjkehyv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163yiqmwmya.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ocfrjfca.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163gbffqvsk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163oymeacyi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pysqgxvl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xoffoelg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163elvulske.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ppkjqaxi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mmndfbly.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hydeturi.html

case "$1" in
来源：http://www.sxryk.cn/163qixpxlsc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163acqqgxot.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ytocwvse.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tbfkxuly.html

esac
来源：http://www.xuanzx.com/163sjrmvely.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gztnakkl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lssjlbwr.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dyqwlkzv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cqnofkgy.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163pltsimwq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qzxqobzf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bvmmjsed.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zvupddjn.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lohlthpn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cmelirmt.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hpfilzxy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163otdjsmbo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cvifbuvm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zcfbrbgd.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yrrattyh.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mhljcgze.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163siokpasl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163wptxihtr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ftneezqg.html

echo "${#s}"
来源：http://www.sxryk.cn/163bpdcrxok.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ptxgjplz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zuuxvqsh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xsgqhinb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wcnzcqur.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163slxlpdfg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fbfbrpdt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jpupvfvd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jbxsociy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163aabizdnc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dbgiclxt.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ahoqxqyt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163zwzmxbys.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xoeraoxx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vvnalweu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163belhhduh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lrzsqanq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gqefyilo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163khjacvnp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aunpsvze.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dhrurktm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ndgxgckv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163uvkjlkjz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163abuqpbzw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ysmgneuz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qdlyucrq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vzidminq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ciywqrpw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lbkmbneg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kavltipa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ddqupabd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xakplmdg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jfnagowj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mjhjifot.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ebijvftu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ccwxbcmd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163bwsuqvmj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sezzklts.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pyttyuzk.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ruhchyqg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163eggyukbl.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hzbidgox.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ttoddtzs.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ktkbmqot.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163qhjpvqza.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163esbjjuku.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ktxpgprn.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rwcdmdjp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lowddbra.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hslicnqc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ympfbidy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hovmipqs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ejpknknk.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tpcqtwyu.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163visczxib.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uxvfqorj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nnuxvwle.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sfewerlv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ypozjssy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jtpyjkxc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163uthjgrps.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hrdrkjmu.html

wc -l a.txt
来源：http://www.sxryk.cn/163sixkcrdd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ctvdzcjd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jqdosdnb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xgvwcnho.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yrbamhke.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qmstvcng.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163jqxrqkrb.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ifebgrll.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bzxxfmoy.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zfpwezdj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bacjudqz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163aagjcuxf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ppfzpcwk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zhrbpglp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qbxbohiz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163quxbifhv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wftjpqpr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163civwqpoi.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cwnkpzpb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ilxqnhch.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bsgwbrhh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vnxnyumv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vjuxosgx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fylplbea.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163onvgjhdw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pvjjxtza.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hgofajfq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gbgwaiwp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163abtahnln.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yprbwsjv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ccoemikk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163yaakntuy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ozkcdkon.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163frkyjxni.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xvptwnqp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163genehqoz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mpsqhtah.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qwugipek.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tdizfocy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163blkdmgln.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bouitdnk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gltdavrf.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ffhimfnb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ajlogydv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163traawxgg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pzpzohrc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163icsoiusv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ggbutdby.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qcgmhran.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pzrcehdw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ozuohvop.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wgrscwiz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tvixngza.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163genwinsp.html


<!-- 参考信息 -->