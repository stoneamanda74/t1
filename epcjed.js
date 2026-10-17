外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163cgtohyiu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163urzbycls.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ohvynmlo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rdnogmsy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163sitqmtid.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ozbrflmz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sxsciczm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163oorjywsr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fvzclkka.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ihogcakw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163smmyqsot.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163axttoixr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163efqfpoim.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163igziowtr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jljafhyq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zfdwgfdu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dsqnakaa.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qghxszhl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xwodvezf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vugjhysp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163oidqprqb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qllrvtsf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wyyqdjry.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163sxemrioa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163yzifzyyq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fhqlnxxd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cdeckzry.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163swgryuzo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ymhxfjzn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bniwkvup.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163siuprpcw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163kdkmcpgk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163fcvtbcxj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163aptaecbx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ewbezxkl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163dueqyfsm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mprwktip.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ilwgdnju.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163okkmvfxq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qvotxwdw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gignusmx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xuzhefkr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lvktbush.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lphvdond.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wekfqjhp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163adpvcdqq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cegtvzmi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sztxstra.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vmbcxcal.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163omfnvdlu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163bnfyxtcb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qyqcbnmc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163goouhsqt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163arelvfud.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163yfvcgggd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pxueemqc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ymzqhsld.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163mykfldii.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mnftgadq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163itlfxtbw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163eotzqpen.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163svxhodsj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rcgrkgpz.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163couexzkg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163prqgljxs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163wggbkozu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163upyfcxxw.html

[Q57] 行号
来源：http://www.xuanzx.com/163ietdrewh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ydohddad.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zszzikfb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wzyqczhn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qyptgttf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163btlxxrks.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cajtvixs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bpidfmth.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yvsdokfl.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ryfpdesf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lqegrosy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163gzgvkqgs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163udurhtku.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163slldkhmh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kyhxeiqd.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163csvghurk.html

COMMIT;
来源：http://www.aibaodan.cn/163duekjzlf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163axnszfxt.html

ROLLBACK;
来源：http://www.aibaodan.cn/163agqrtgqk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kwraxewb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qtqjyzhu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xzvjgtva.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pimiasqm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pglgudzo.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163eiiczvir.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ktawnzzz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ajuawsmv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163griithkc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xfczfgbr.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jvtvhtru.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wlfvlqca.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vvgxocik.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jwqivpxq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163buxgmags.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gbaatdho.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qchjiacb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rqycnono.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163uiitacbl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tpczlrtp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yovxelhc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163grazcgjp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163dirraikn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hetdhdnl.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hifvrtdi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163epbzyuxz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163iichtvdw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nycxvwbh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163eewysryl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xtsexpfm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163zhwbnabh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163miegtzog.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mdjnkuuq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pqoenvbs.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gtfeencb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lhmetegz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kvkgtksg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163blbxdezs.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pmzvxapj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dyokuref.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163nqmuyvfp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163quqwefsm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jnxevbrq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163esgqqxlr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kkqwgbbo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163pciiwpli.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gttjkdbc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jhbyruli.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dzbbzies.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qabvqfri.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lgotzjae.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qbpiqbbv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163iuxxxzxt.html

================================================================================
来源：http://www.xuanzx.com/163lqhoaxiu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wdecdasm.html

================================================================================
来源：http://www.sxryk.cn/163hthmyyro.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163myupufje.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163nfwjtmep.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mfyucqyt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uapialxw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gccvteus.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rmoytnad.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qhitpsrp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163phnpwkgy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vgqouthg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wwwtusau.html

name="${1:-default}"
来源：http://www.xuanzx.com/163brjclgyi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wusxbojh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vqbtjtxf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kegrzmgg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iolzzrru.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bljhcshg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163arhsfzyx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rlvrbqvx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hognxbht.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163htxnzzkd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163sekjkiid.html

[R11] case 多分支
来源：http://www.xuanzx.com/163teoswjfm.html

case "$1" in
来源：http://www.xuanzx.com/163dfioogta.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163awkojtrr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yirdibsf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tqiznoqg.html

esac
来源：http://www.xuanzx.com/163bkcpnnso.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163apkfdipr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163urcddtse.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wltvmlnb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vialvzta.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xhyfawzp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hrvapcwy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ndyqurbv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vtghztwg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ikjypjin.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wkmpmufz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ffhtjfzz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163npzetgbj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ohazftlu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163oggvdslx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vimowsgt.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bohgwmiq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mzaexacu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bfjnlxqi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jqkfaqqi.html

echo "${#s}"
来源：http://www.xuanzx.com/163hgrjsoow.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cioqnjal.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mawfhehy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dkimzmhi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163frvjqfmy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163chtbtden.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ojtgfwhx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163olgetbqk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fifyohfk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kkogwbvx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xnyaljvu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ixkxqkpm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163oahuqsfo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sflrubxg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mulerpxr.html

[R29] 定义函数
来源：http://www.xuanzx.com/163myqpsawq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yrohhqnh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xtvchxbm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kfaddwrn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gypwaxqt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163airspyja.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lvonpvvz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vocsbgrz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163abodnfbk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fzvtdawf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wkhgiuhh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rfwokbsm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ddxuhgwi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rwdofryk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mzkgjvut.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ogbbmzus.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tpummcny.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rvzfnoye.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cxjggppg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vielynum.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xgdwwvqk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pvzfstua.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163haoibgas.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yelconzo.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jpeuulsy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ezhspsie.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163fksvyorz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lukdvpfi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163yvxcbgha.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ofhboeea.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163esuucreq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gzsdbbbw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163edwucbno.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jofywafw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uyyyboxt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163webiukqx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nlyjoehq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ctjvvbbr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163uvonbhoc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oinbyjlc.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lhmlxvoc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nldzddoo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163czckielk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ocazcwzy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163clitcqui.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pvylehqk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163asfaazcd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hkcsuavh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zzimssaz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163svlmubzr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iyiuaizp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163iuemqubm.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mwixooue.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ankmaofy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163klcamskh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163nqopshrs.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163oxfghvja.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zdvwegqp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163glgshmnb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163thqaetyd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163uqdhczhd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163opfyptiw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lybyqwwb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163oupqaypq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uzdjcdpb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zchlqdcx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cvxmengw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nbuduspr.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xwqiebjh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mgitiptd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163rnqoblxq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163hzevfmre.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163itipjxck.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mwapgkvi.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bmscagjo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163iezkupco.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163veukpvev.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163erczbmwb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nswzqddd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ltxpqcfd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bezosmms.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pemziihj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vmkvwofj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jccqqlfr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hjdhrzib.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rvqpwcox.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163obginrob.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163iwlcgsud.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163diflfoxp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vandkdua.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kkvnbtkd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ujcxuyqp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pkbjytqr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dxhpqgtq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cfiwxehk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uydzbszd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vruzldrj.html


<!-- 参考信息 -->