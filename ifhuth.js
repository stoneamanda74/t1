外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bgtttgof.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163klzykeia.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163reltkjgs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sctqrgnr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rptrpifn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163yjolfrfv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163oznsyihl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mirqbpul.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hzcgosrs.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jjkzkprx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qmvwowtq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163erlkvclc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163thopqcvz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eflixaxz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163lepqhzuq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163eshmxlyv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mlnzaqkt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163kvyehwof.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zrvhsbxy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163cjtyivqr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vrvdyxfn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qnygwvhj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vldvhckn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163lfkmvbuu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kfymdmmz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rwbwekpz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lvzksifa.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163azkpemwu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bdawskry.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xeabpjbi.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qvzdhtpu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163motqwzil.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rqdtvbho.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163lxugqfxv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oxcykfdt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zaedantk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dtkrwiis.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oetkffke.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163sfufzwse.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mwssfwti.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ygqtyjkq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vbievwsh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163klvjmmou.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vdxbygov.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163azlumczx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163tsiwqalk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xvnuxlvs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xliafwey.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rvffffqm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163eztlqquw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ojjmblcr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163yaptghzd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163plpjewor.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zanwlpzb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163weisbdjr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yhuejuyr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qfutayih.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iqsgqumf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zbtoqpdy.html

[Q57] 行号
来源：http://www.aibaodan.cn/163khejliux.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rkwyaevj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xcdorzwl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vhdagkiq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163sxzzqvbt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zdwnlcju.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nqgdouwp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pfbofccw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aczmpnbw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lnltjhpa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gwkohoyx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bhblqqph.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163awvlmavo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zsuatsbk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163cxvdmwkp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163moqhrems.html

COMMIT;
来源：http://www.xuanzx.com/163dskbpfha.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163uhharepr.html

ROLLBACK;
来源：http://www.sxryk.cn/163nqgsadkx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ekeiqjkq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163gfycofau.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163auiufrim.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sqzevctp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bkbnxdjw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bcbdjozx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kijtswdg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vbnipscx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tkurvfsf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fdwedjqa.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ogssyujs.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ekzhctqj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163phcuwdey.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163icexfpiq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163atyrrstj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163txunkbnz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163gomlxgca.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wglwkutm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163duuotuwo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163umtdkmlo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163awxccbue.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bgmcyjrz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gizdself.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rnttctim.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ylypwocp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nkbkkjvq.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qreneoxu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gizvvjka.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163busabxce.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163thsffnlo.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hdpuvnsg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rrtkwoxn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163kfdlyvss.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rixufexn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kolerclc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163omqbejiy.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bzakramw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163uoykgapg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163efqvxnbl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uxvblrbf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163olypgewi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mxnecrpi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163yoeprjhi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lbezxcjy.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lfinrzuv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nilskreq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zedtduqt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kxcbcusj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163izcpluwn.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wxphiwff.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bykgvcer.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qyoarfea.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mpgaowbj.html

================================================================================
来源：http://www.aibaodan.cn/163anjanaek.html

R. Bash 专题
来源：http://www.xuanzx.com/163thdjaide.html

================================================================================
来源：http://www.sxryk.cn/163ehgrboug.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vpspwhrj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qxhazcpg.html

set -euo pipefail
来源：http://www.sxryk.cn/163rmtdohdn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163seyfcbka.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163havhriir.html

[R03] 只读变量
来源：http://www.xuanzx.com/163msdlzlme.html

readonly PI=3.14
来源：http://www.sxryk.cn/163howeinef.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cvwwinsz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jxpympeq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tqfsdfre.html

name="${1:-default}"
来源：http://www.sxryk.cn/163djqoxnrf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163iezedsgf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nakohbuq.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lfitcywx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jruvhtmb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dwgaohuv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163mkmktndo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163fdflhwlk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ujubfejq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163omeljaom.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163facgttxz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eocxvrbk.html

case "$1" in
来源：http://www.sxryk.cn/163mqexkpbq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163udzsswqs.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163itaqkxzz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rlyppfxn.html

esac
来源：http://www.sxryk.cn/163kafbidce.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dbbzvfze.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bxjbbdsu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vbbifvcr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163pjzfbxqr.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163sfdiekdg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163aqaovuyv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163nbxuwsnn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cincnpae.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qnuhtmya.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zxmozrdg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163izoqvxou.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ppyrhzbl.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jeeusyna.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wfchkrdj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mjjmiksh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163chwkakbs.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nemupshk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gmbfyoyq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uvmcgqdd.html

echo "${#s}"
来源：http://www.sxryk.cn/163stucxtoi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163owkqgtpn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fqahjnfk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mvpbnodu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uurqaudd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163twikigbe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163yjhrouut.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gfmsgwmm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mqfkzsep.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163eqfumlcw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vpubradw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163nnsgugob.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163svaylxxb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pjtfzdwu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dpkvsyqu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163erxconmt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vnxepvep.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ughhbgtb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163muocqxcm.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ltaxkosl.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163egqbfyva.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wntkotnv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163cakcnifm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163lmnhttel.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163odhxttuq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lgkoydkt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fywjjzsc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bjeofmsf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ltflsgab.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mpzdrash.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oqkslavk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163klomdpbo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bpfogsfm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xiokhnfk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163yopsfxjn.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xzikujrb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fzhqtdpb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xiaqqdjy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163itihhtlz.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xamjaeyi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rkbriqsb.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cihquwoz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fedcamqm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hgsifyyd.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dpkvnswf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163odrahzjy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163aiisomxo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cvmrxkoe.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jijspdpd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yfsmugiq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zxwomxnb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xqtlmuzy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xgekwwox.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tlorwwef.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163pzpnegyg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163aypfkvtk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163cviilset.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xtjxibcf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163eitepbbi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tbvnjbuc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163uqqgnxws.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vjrgiusx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bepcbuyh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mhgzshoc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kcliyjgd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uiqzdcrt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163plvaiojp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tsyqjvqo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mclbhjfr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pmizkjcl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zgrdsdgt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163arxijqcf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ldtjggvx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kidiptjf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jvtfjqag.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163aobjgmyn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qlgijxeu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ekqoazoo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163iivxutje.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cifzilok.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163owkunzhc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xckvcuuv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163srifcusn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bhbbkevs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163yvgmraht.html

[R64] 结束进程
来源：http://www.sxryk.cn/163afnsyaup.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qngtxryf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hdwzsdfl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163dfojehxz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gzegezrk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163byjcbsir.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pigmsigu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ybylvlbq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bvyqvkup.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163kgorogvw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lfmtuqmp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zxzabfdr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jgqngjmq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163inxlltxb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ffntvlvb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xnwmhjpn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ajzkxtes.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mzcoldhy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xwthnmyo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tfarstan.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sjuxswso.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ltryhkla.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xtsduavg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lpymkfxl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xuhtpwnb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lupzhqus.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cibvtkdx.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hjpabjjp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sfhwlyvg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xyjifsdp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163awqxkkrg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163maxmcpos.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mghilqci.html

time ./run.sh
来源：http://www.aibaodan.cn/163nzwyhpnr.html

================================================================================
来源：http://www.aibaodan.cn/163plpgfukk.html


<!-- 参考信息 -->