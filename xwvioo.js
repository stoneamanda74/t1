外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163oiozfhqy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tiwzdqdp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hnfmtxuv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163azaitfyr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vmiqalsd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qodxltcr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163jhescpdf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163aymbgeup.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163navwyuzy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163chsyuguq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163niuoodbl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hvwqoiql.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mdpakcsi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rpufvxxq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vylvxxfb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163laubuzvm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163imxjqsgr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nyiqppti.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pjegfnwt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ifgkwqte.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jehtqxet.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163epkgomxx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163edawytte.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163yddzmjic.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gfplrupy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gwdlvirw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hvhafqii.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jjbigmym.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rmimbfak.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163eeurnhgr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jzmpkcfe.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tjghdigk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163iorbupwt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163boiojcxr.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eufusxoe.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163agacibfg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tjbxrgds.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hozuzpzf.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bgafxwqn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bjkrdslt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163tresutae.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163yoqnxubs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163faehlrtb.html

[Q57] 行号
来源：http://www.sxryk.cn/163btmqvmtq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nxfuvtwx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163klhtothf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wlentacb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hljtphun.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163exhupmbt.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uuwsrjec.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ceykzazx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ajjuywcj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mncklikl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163nawzgfvg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163blikprel.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ifypdzps.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163oiiglodl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kmrtnvlb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163sykboxnm.html

COMMIT;
来源：http://www.sxryk.cn/163iqxtaxqu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lwqgmxda.html

ROLLBACK;
来源：http://www.sxryk.cn/163qhqlnohm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hoipaghz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163arqoapkl.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zuicttpw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163slmcpbfj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kvegymfo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163poydvmzf.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mtibhapy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qysqldum.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163upqczccl.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ravmpyqd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fqlqsnou.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qmfyzcbw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zvgnhctz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qtuapfgd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163oamyyhmq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163sqbedfzs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163otsobgdu.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163npqhdjcu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163iyheroxi.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dlgkiypt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ysdenmwz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hujcygoi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163htwqgvho.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qoclwwdz.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ikkwdtao.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163htepcuem.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163celiszol.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vjmyhzxo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dyoucyem.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gqiafywv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163begppedt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xgfpaqlh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nnlbwtvv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163btinqcsu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ufvupplw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xncfujjz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ngekirms.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163fleqxlif.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163sijljmjd.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kkixfcav.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tmqrqudg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qsptmfam.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163cytmznbi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rsytayit.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xyvhejak.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163azbcdkgg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mqqpdvkq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yaguqysx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zkidxfsm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163esrbrtis.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lxuzfcfb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nlkgqomc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163hbmzlyln.html

================================================================================
来源：http://www.aibaodan.cn/163sfffekrz.html

R. Bash 专题
来源：http://www.xuanzx.com/163rrwyidst.html

================================================================================
来源：http://www.xuanzx.com/163qdkdldxq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163kdhjihwx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xepgfqwa.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jkfndhng.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dixvuelh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wtapaqqh.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kpluksrr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163tltmctvo.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bpgatrgi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bpxuvxuu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mpxsxhmu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hywzdqhl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163spkfmwvq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163kxwthvvh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hwlfvzkj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dxbeqoie.html

[R08] 数值比较
来源：http://www.sxryk.cn/163htndsgmx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vyqvrrhf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gestsnur.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mocudpyd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jpuhrqee.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gjoinwir.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sbqrajhu.html

case "$1" in
来源：http://www.sxryk.cn/163lbxsinkx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163gppvjkzc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zpztemto.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163atjmvdiy.html

esac
来源：http://www.sxryk.cn/163pwsmvzku.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mviwiwyo.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dbupuuij.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wbhzqqzg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lpnlesob.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163vbtvvrna.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ljsjlvgr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163cdfkqreg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zcrkvzew.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mytcixnd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kjhkvjjb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kkgalrkk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163nhfthihi.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ogxeqhec.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163slsassph.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gqxjlgsq.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ovptfbif.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oisajbas.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qbstarqu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ppikqmbv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lvntifgo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dxmriamf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ywnhjrdl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163yudlimxh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163podaazon.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163moockyyi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hcfbhuui.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lmjdbghl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cxmvgkky.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163skexztlr.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163lpdahlfh.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163lkkxtosr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bssliqyr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163poejasjt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163savhigkg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gwlacfvk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xaokqvxy.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bbmibrez.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kvfrvfxf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163eeexswsi.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163eitrctcl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ccsnlwfo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163umwlrtix.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tfqnjfqd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163plmykvej.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qjhwtyyv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aojuxgzj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ajwyepzc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kdesclab.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163aukbrucv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jxlaktdp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163sbiufhfl.html

files=$(ls -1)
来源：http://www.xuanzx.com/163utszgyks.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ugniwhcl.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ifjjxvfp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163gcqgbeda.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mrxgprxp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163butaikzy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163xerbmrge.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gacvrrgx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uvaersgs.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yzgfhvvi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lltlakww.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zwxgnmyq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ibetoksn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163smylpfds.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163iybzxikt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rlhlgqoh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jqnuhtqo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zviakxib.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163sjwvypyp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fjdwratm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xngotcem.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lmtovjlu.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163abcxtond.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ycduilpr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ezdbvphj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xvxlnqww.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wjtcjnnu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163oipctmvr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qkcepufp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163oqdbemtc.html

wc -l a.txt
来源：http://www.sxryk.cn/163lprkgutp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qlxuqvxi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lnwxrlst.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dsygusol.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163krrbvbmn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vsfyhrta.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rnvynvwr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ujlrhirt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dwqxwpld.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qlazzwaq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ptvylymt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zsoskbya.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kxzqqbgd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163plixkyvs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qqndnppu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163akysvopw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kclgnkit.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ajgsbyyt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ztyquqfh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163sxtsagdk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163vomwqagl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163otevrmpj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163auukaxyk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163bjxlnxxn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aasbpyfu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wydfyusg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gzgcozjl.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kburmivq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163voijfuvs.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163flcwztby.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rxqgacxb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163mlduxtdg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lmjtkrlw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ovozluta.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hdwougjc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163kadybqrc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ffyytgea.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163aifsgjsj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dncmgwjq.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gftqxqiz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jtqjsyem.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vdsypskm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kyplsllc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cofuuukm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fhzjtxtn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mphvhrqd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tgnmeguh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163waobkdkj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cvpjlepo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163zwctfkvt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163edrftdgr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lctiuwod.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pksbxjeo.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rfraevkv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163soflscud.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qlwonmkz.html

time ./run.sh
来源：http://www.sxryk.cn/163zpwmvcfw.html

================================================================================
来源：http://www.aibaodan.cn/163iodswkiw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163trwkhygh.html

================================================================================
来源：http://www.xuanzx.com/163laufcmwy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rxkvgfho.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163urbwogtn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ptaibqpc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163mqjtvtcx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hqnlwcdq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hrfskljl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163msgvpmiz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vgmtmdhj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163erposvph.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tkeazral.html

strlen(s)
来源：http://www.sxryk.cn/163egfggixo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rgpiuqwy.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bpgtgtrt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zfvkbrtq.html


<!-- 参考信息 -->