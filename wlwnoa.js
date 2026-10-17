外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jsdoqyku.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bhyqyjak.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163bwdpsxnh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163auhyzruw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163sqbccvpg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163urbmfhxe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yigvvtcc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pkvuuosy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qdzsseit.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ijnjpmjk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163liuyrinn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163irbbhqls.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jegfdmzd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163eeiaiucc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bzlngrzc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163layqunyd.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nkzvvfxe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wumehowp.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gyfojplu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iehlrfzz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fqpetzwu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163audwbxnb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fyjgvmej.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zcaxbetu.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163swtkdjlh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jfdawddl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xxcqmprw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ezsrgivw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rdkjkhgs.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163owtnkyoe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163viiofcdx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163mmfogwpm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xpnlzlmr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pxweutgk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jxwduxej.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bbxizlxt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fixrpvcx.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rbiwrpct.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dsjslmyt.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fmbjfktt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bfibdfaj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zbgavzsf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163stjfvrth.html

[Q57] 行号
来源：http://www.sxryk.cn/163oebxquye.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uzxmyeip.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wwpakzmy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yuctnhko.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dznejikt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ysnmjukg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ldmbbmdp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wreptjoj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hbqjbiee.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jzbcbexj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yoqhtjyg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ytnxwfew.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163znvwtwni.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gsuuojwd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ffrciiuo.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163judrjnxw.html

COMMIT;
来源：http://www.aibaodan.cn/163hadtsypp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163uavfljvr.html

ROLLBACK;
来源：http://www.xuanzx.com/163ilfppeng.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iuvukesy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nigkbwrx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163frwjrsqz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163lmscnwge.html

[Q68] 保存点
来源：http://www.sxryk.cn/163trkgpqmq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163gtepfqcl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tdhzmqtn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dcmogvxh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163dwuylrue.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163pkgaggnx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vtapiiye.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163czbwmdnb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lwtqcnfp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uuegytft.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163inzzeuon.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qbaxhzat.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hboqlqrl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jpqbsvop.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163oyacjqng.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163sqlvgpix.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bpubzdsv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163yjkludns.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163blvyjqov.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gxhqzbco.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zxrjmkvq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bhcruvop.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qrhzrmnu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fxumksar.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163reffmqbi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163cesvolib.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ienmlhyq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163egnvgvba.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163exlzfzci.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vzucqkse.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163bffhkcsd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163urezjnry.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163trrotnbp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mcuyazbi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dlpkoogg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163voocgrqw.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bfiusxmh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ksdlqmqp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bnuqzjdh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yefnqbil.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ppwjtevh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wzwjinoj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kgdtwfkj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xekpedmn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163elzxtlbd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163odxqycvq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163jeausjvf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zqjxeabl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mehjealz.html

================================================================================
来源：http://www.aibaodan.cn/163tmoxgqsd.html

R. Bash 专题
来源：http://www.sxryk.cn/163pcelotju.html

================================================================================
来源：http://www.aibaodan.cn/163vggpcqvz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tfmfiaid.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ykqfixfp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nhwlgrlb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jraarcqw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163uqpxoyyr.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zoenuobo.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vxzprqkc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tcgqwlnd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fqsgedmi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ouozxozs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163kfiueyga.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163khcnyylj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163rdayiuaz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rcivofxb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nzbbgrur.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163aegczkgc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163aumhxjas.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dwdpovgx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163dbggqbws.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jhprmgwq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dkhimjdk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cvjctwms.html

case "$1" in
来源：http://www.aibaodan.cn/163oeosqzci.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163jjvdalid.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vtyebzmv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gwtlnrvz.html

esac
来源：http://www.sxryk.cn/163oppdwkzt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163niemzexg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nsdqaxii.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tvgxxmcq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163qsaxlemm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cncpwjfm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qfuupxav.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163diwpwemt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xsheghqo.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yhwdfovu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163nhqyolwj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nqelbqtu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sdxgtybk.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cqgqdxlw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jfggbohr.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rhwkcezb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ahwqujyl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wzisjvbc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ykzywhpe.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dccsmeqa.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qwtxoryp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163vfknriwz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qrxpgwvv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rhsqqlbn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zlkdysic.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fkvirecg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mbojuucy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163byugkiei.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lerghnlp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mzgjklya.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cdaspaed.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kdedxiuo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fdrihqno.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163frvyvrhn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zketmblb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fpztddzl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163twxgbxxg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163tzvyniht.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163clmoujwp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163forzaotu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163burdkfcl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163incjshin.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nlqmbohl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fwnqkaxb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163unyzuvmr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hsedrenh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yeoaqlvb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lhgaqkdt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wanztsoj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163bthgxwxc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zqbxvigd.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rqbtcwgx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rfohqagr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gxxvomzf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gspblmxo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163soktdrph.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rjlalewa.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dauqqjni.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qhqmfumk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163shbpvrsp.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163uiuqiqde.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163gdszobrq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gaclplhb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ikqguurg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yvngjoce.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ziluqbix.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ndxyfduv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163prlvxkqc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163joyamsqn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lmccarlb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mlqqxhtf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bjmhoyyq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fsoljruc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163toeysjml.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rmixmvzv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wzlfates.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163mqewfrqe.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qsyxalhb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163athlxpmo.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cmtfpvgd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gmjbkffh.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qbkozkwe.html

wc -l a.txt
来源：http://www.sxryk.cn/163mzatqwsl.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yaglaifj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163sdqcuzcn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lzqnjjdo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163rmgpypyz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ohsyjnuq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163dyiccbgz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ohnhyuzs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zsgbvbkb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163onbdjaqv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ramlzfid.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mxpyirmu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kxpzvnkn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dkxbldeh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163nqlpnscq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cwilgmpi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163krxjxfkd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zdlvwtxu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yvwszokw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xdntudvv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163yhllnyeo.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hwhoxxyq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hqchniyi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jhgtnlxq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163lcevetst.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eggbmrds.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bkninjdt.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kkfwmpkb.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163csgcqpan.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jtltadxu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163oibkqosb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qtnxvbwh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gloatuhu.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wedupacq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xxinlvha.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jbojmxpw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jicmajio.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163gqliqgkh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jlvdfxuw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kdbeyeui.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163spthgvgj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hpbjvqoc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qudhbppp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zqylaehg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kldvbvhq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zmwcqahd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zsimncdz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163sqzsmlut.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163spdfekjo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qbolzvzd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kdpxdlja.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qrtyhfms.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lfpxtncp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dcdumnki.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163revfyllf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163pbbrafli.html

time ./run.sh
来源：http://www.sxryk.cn/163kjcfaesz.html

================================================================================
来源：http://www.sxryk.cn/163sxxssdle.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vbitdthk.html

================================================================================
来源：http://www.sxryk.cn/163jjjsfyfp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163nwdaxozx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fxxfxnfr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163djsklyco.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wpfljwzb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oqqplctt.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163eijlhtfm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163bmbbwtjr.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zuvtvady.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gjreyzmo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sakkutjx.html

strlen(s)
来源：http://www.sxryk.cn/163eonyyglw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qurnynir.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xxbnhtea.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mvgtuasw.html


<!-- 参考信息 -->