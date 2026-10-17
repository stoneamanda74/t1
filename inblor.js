外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163bjrihtql.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cmuggfri.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yqygteeo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rvxzwhzf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163mbqpdcqw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eocfjxtq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dkfwnbyj.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mlaamrhm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zszhtbao.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yzivzzpw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lgrhxofp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gotzwmoy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163exvnqtgj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yailfwau.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zupuijqa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yabklhzh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gtwfrwga.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rlkwbgwc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163agdgibsw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163afyxjiwp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ksdptelf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wrerbbap.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cgwhfpnz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163cywftfwn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pkwfwzjv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rhetvsyh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ytrapbif.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163uilmdptz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fnmoossa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163juxjzwjv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nkypjeuj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xzvbqagg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fjhvtgyi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zcyqgxfv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163avkhnjkz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ywuexvjz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fwvfozna.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uvylvlxa.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wrjtrzmc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lcthetck.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163okxecfkc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tmdpqmew.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163bpnecpoa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lrlthoti.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163yappczku.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mzxtptly.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rsnzfevg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cyvtwjxg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163uolucdfs.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gkbdlksp.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zuskfbjo.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fnsgwypa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kmpuefng.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ksxwzpas.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hipwznyk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hxxumgyc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tlubwspz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fupzgjix.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zdiquuuy.html

[Q57] 行号
来源：http://www.sxryk.cn/163kacmwndi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163cmlnhpjx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oyppakmu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163idrkrouu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163oegvpxqo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dnmssgct.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nuhlnfps.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vubksteh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kdebkjgk.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ghazlebn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wrexlhrn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mouldjzs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jmrxojle.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dlehzuot.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163shjkgbxy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163aipplxtj.html

COMMIT;
来源：http://www.aibaodan.cn/163ywaioiov.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pfbgglyh.html

ROLLBACK;
来源：http://www.sxryk.cn/163qxwloofp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163grkpreti.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fduiyrvc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ingjuxgw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fkijapbz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lbjkifju.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bytjiutw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jurgqicc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wtgwjxsl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163onzhfdul.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bwowgcnm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bmzalxog.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163htdxwfth.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yaxramvi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163clveurki.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ycfukzqs.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163arwrvthe.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xsttluny.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163obsiwgjo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zefqvdky.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xrccffmv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163fwueoxeq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uspaxtht.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hrvddvjn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dcnmttul.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163imtuynik.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163uggvgkgu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163amyabrdl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163iywiqimh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163tfehribg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163moslirpf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mdqrzwng.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163edcutkkp.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hldjaajq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jiuyisgq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qjcigzwf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163yzvsynpt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163cgxfjzva.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jhfxofkm.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163twekmlnq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wyhmvrxo.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mndukgxn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ffztekrt.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gmglnhde.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xuiooxpv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zkjevadp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163olkekvkh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163werlolff.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163kkgfnldb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xvuzrdhb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kxlrpudh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gdbyjvtv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gisxsypm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tfzmfxxo.html

================================================================================
来源：http://www.sxryk.cn/163mxffuvuh.html

R. Bash 专题
来源：http://www.sxryk.cn/163ptxresyl.html

================================================================================
来源：http://www.aibaodan.cn/163owzlpclt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jdzdsbhj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bqglgppp.html

set -euo pipefail
来源：http://www.xuanzx.com/163edtrzzrs.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163womnqrrx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163amnzpekv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163aluadgsa.html

readonly PI=3.14
来源：http://www.xuanzx.com/163obdswrwf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bpkoeekn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dngcbrwj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163shqabjab.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rbgosfvg.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163reoiprfk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163usawypej.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qtgufyku.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qdcvfbfs.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bolssbtf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nipvosbz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163oahexosg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nzlysrot.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163waktocgc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zorpauns.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wptvfecf.html

case "$1" in
来源：http://www.sxryk.cn/163cxbasgrr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163filnbcdr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mdrwjuxw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ppsrtbdu.html

esac
来源：http://www.xuanzx.com/163uyajkfhr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163whaegkyh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ctymyrew.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jaoexkvw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pgkadnql.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qnbkoksi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163uudamzwp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jjpcxlzj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163bclvzuip.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hdjvdhhm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vewdeibv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163pmiyavil.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oafamzdv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163tuyijkgd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gbpkcwej.html

[R19] 数组长度
来源：http://www.xuanzx.com/163extjbrji.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kmkjtmlb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fmkadfri.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163djeqbmuu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jgusjfdv.html

echo "${#s}"
来源：http://www.xuanzx.com/163igfvovvd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163phqajrpg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ckrjrbav.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163efqijbfz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gcshjwog.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ylkjvcwb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jkngpkka.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163icecazlx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fbczagkf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vhzckcba.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mptgrvlv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ybikkgzt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tnfktewy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zwryqrwo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163navfndup.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dtkpwehs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ayyrpmup.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163duvybnok.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ifsbstjr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ngugxeun.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xfpkpwcy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jcuuhttg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163otucghdx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jyvrdzwy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wvmtsrsl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jvsrndbc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zzrjmzyu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163icchflba.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163brolxxqm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zwvcbmix.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163blaecfgw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163gyhapnfj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163akqsjdbk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163pjhcvztq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ptgvvwjv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fyqkmqpe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dgkoisdn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mguwbost.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163boimhwud.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qtqttgyi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kvvgrraq.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163eldhwysa.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163qanvlvch.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ifozkztp.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hgdezzmc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163vgmhjvoc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vndhjcjm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hgtxdrgq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dhrjmbcz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163qwxtmhlm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163agpxlcfi.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kegfzjbd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kgwdigin.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tqgtterg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hgyykrwi.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ntjchflh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163keztywfd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lwhitzgn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xwpnizsn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tedirmms.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bcqcykzz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xwzigley.html

wc -l a.txt
来源：http://www.xuanzx.com/163sqmbvwuw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jvwplbli.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163cizpvtwp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dniriszq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lcfoooir.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gnidhoss.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gfbolbje.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ccxeebey.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163shsfgmig.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163nvscrepl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163grlllbdm.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vgtstcjz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dccfyork.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fjuhigit.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nnotylfb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163eoqwcfnf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163fifmnlpr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ukkphzmt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ranrxlzt.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163bdyzftst.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mwbuvtin.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wrpuquun.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163iagouzlr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dptqcshd.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kvnzmkhl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lhzmekow.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zwvmwylx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163rglcghxb.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mojlxfqs.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lvqwvkxw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dvddlfvo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gyfclaxd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qstarpzv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dfxzneiw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163elfgvdrz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yakgjzke.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ubwrohwn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163meqlepmw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163namxnxzl.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dmldvltq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bvabejew.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xlfnbotq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vayekjqu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163etkumnhn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hhwsgssi.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vqurtjqx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fghifqyq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163unwhrrlb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lrztdtyq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wpsjfzar.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163nivtadgo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163uaprxluu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163egdxnete.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zoudqalu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wtmvxhmt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ccmkeiqh.html

time ./run.sh
来源：http://www.sxryk.cn/163tbavgzbd.html

================================================================================
来源：http://www.xuanzx.com/163zllpnchp.html


<!-- 参考信息 -->