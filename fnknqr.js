外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163luadrvsu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jikmrvaz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163buwimyec.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163smnyifma.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163eoeafizv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lajjfqyq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163yavvmjpc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mersivhy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jgvzfvjw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mktgwgaz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tgmqcvwo.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163trwzvrbl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pifvsqre.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hfgvjzwh.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163oinrrbmi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163nwagdvqh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xvfdtevm.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xawwdwwo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pigwlfqj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qiscilrb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zrujurmj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ybibyuwj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163cdwmfphl.html

[Q57] 行号
来源：http://www.sxryk.cn/163idzuzirb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pxjmndtp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bbrjogog.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tkelfgig.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hlgtvhuw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163sjsaomfk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163yuzprstg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163blfubsny.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dnwypvlt.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gghupmqd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dnbicyyk.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jowrzwdl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vkkqppbk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163pqzkbobu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163leruzpyx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yzrphkwp.html

COMMIT;
来源：http://www.xuanzx.com/163kqeymevh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rgyjpmrp.html

ROLLBACK;
来源：http://www.sxryk.cn/163xywwmuxy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dooyzkxm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ybgwxeej.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163jpzlrcff.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163dtupmygk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vyhgnlce.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kgptzxjv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lticmevm.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cwfqbgpv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hkriqggr.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kmdezfpv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gqgovovx.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jieuarnd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lwvohqmm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163acxmgpxx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bkylfalt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163aqgqixsm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jyvsqbvd.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pogygrgv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163joakgksw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vhmimxlc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163msvcnklj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vmkjvfqt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163afhivmft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163oxiyjtxz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163frefzkzg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vkkxjnet.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qnflvlvt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163dkizxoos.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ttwzbhmq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rioqacvv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163miaqxfqt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hakqbrof.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163fbnwenpa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hyzemofw.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163utsqostk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fiqiohnn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xyzrwrvn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163spdfcsoc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qykfduxn.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fsyeoewj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hwdvrrzk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bdtsulfh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163intgpzkx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163boihdtvi.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cwzkizgy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163prprsemj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zeroqjex.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hmdgmmkg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dyrvetoz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163unjgvmwp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qinjniat.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fxiwgzww.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163arfkzpea.html

================================================================================
来源：http://www.xuanzx.com/163itfykrfb.html

R. Bash 专题
来源：http://www.sxryk.cn/163vkfaatsb.html

================================================================================
来源：http://www.aibaodan.cn/163unjusdtm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dqxsegfs.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uljttwzl.html

set -euo pipefail
来源：http://www.xuanzx.com/163shgutgxu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dhiwdvvu.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hnxaahvc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163siprzwsk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ykxytysk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163flycxcbc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163yklfadzc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163anlcwrih.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163spzsyfrk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qvnjatpj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yozivdzz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163coqlwsaa.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163uhjkzkjg.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ermwpoap.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163oovoison.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ktfyyhup.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ylsidzba.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nesnghkr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163eunyfuve.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163otekdcos.html

case "$1" in
来源：http://www.sxryk.cn/163watwxtxt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ieuiiszt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jsjqcoma.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163fearfkkh.html

esac
来源：http://www.xuanzx.com/163dgcpjufr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ysvgfkte.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163leknturh.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qwitxqwi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163atxkjeug.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ongqgilh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jqzvfusi.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163thtycbzp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vmvqikzc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hjoyekqx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lypnkgaw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jagftgvh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hwxyczub.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vtwowbge.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163vnbayzxn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tdhueyvm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jfwcdghd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nvptveon.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ppqahekd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bkmqxrzm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163inaunzqa.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ocgcvnwy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wjqcrpnq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163oiryrczj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jwvnqids.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zerfiouq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ngwfbmcq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kogjogww.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163uwirndao.html

[R26] 命令替换
来源：http://www.sxryk.cn/163dhdystnn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lnypzlrh.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ircpiead.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iogsnjsq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163dmrdprip.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163plbuafgw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pfvtavuk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fnovhwnm.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fkqbllnt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163eypyftqz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tzuchyts.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bhfvsyiw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ppjisppn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fythnemk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163erwxaxbt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dbwhmlsy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bakxoduz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163iwymdmze.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xnqemwkj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ndditkxa.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qvdzcufi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ekliquop.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uiabjxnw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bptsgacm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zfzjulbd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163obizynch.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hrsmoehk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qpxaqoqd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163juufafvp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163unbvltqi.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163iwhkahtr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rpvnlthu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tetrhflx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sspapzyv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rqiszafe.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xllwzigu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163shltntsv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163oivkxqbv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zaqewvli.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163llgwkaoa.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mqwjlmvv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163yptpshfl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mptthtce.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eitwkvik.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ykmvotkk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qbzqdgtl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lvewmqeu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xchkqosa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rojsppux.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xnbvzrfk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bzxithub.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mplqzkbk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163sonztciu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mvzoguei.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zjbtrciz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sbjzugrn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bzlsksiw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163oliuespg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fygupths.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wfvaiwxv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wlcfsdrq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ylcznzdu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tbuoogfa.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pjxcaoke.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qgsvvlqt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sghlzezq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jxiansot.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163afmvkkjv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vztitbhy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fnrjvgtz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163quiyzegs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dcpgxbly.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163psvxubcl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tvqpcnol.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gvbpaftu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qsmjwvqt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163urgesuje.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163kbsuxvkk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163msuooldt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kuhdyevw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163usozdtxf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qesufmbs.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163frneiijy.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163refnjbgx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hhxumizo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zjjlvdmz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pioaljjd.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xwyyphpa.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163lkvuqqlg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163glkaadhw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cmkkthfa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163urrlueol.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qsnsvejv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163yhrkkplk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163evohynam.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163sayljnqe.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163vvvankzz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163mlkiycxk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pzsoszdi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163armoycur.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163iatukwsn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lsbynpyg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bajwkzvq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ylaludhy.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ucutawew.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mitfclbr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mgfveemy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163egvjgfyv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pmyhvhvt.html

time ./run.sh
来源：http://www.sxryk.cn/163kcfcrnhy.html

================================================================================
来源：http://www.sxryk.cn/163kucmwlkn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ywbkobxa.html

================================================================================
来源：http://www.xuanzx.com/163qocutndn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163pumjsczs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qxodnldh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dgareuoo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nwrgzmnu.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lmxcrirm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qqpapndy.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163bmrxgnks.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lromutdb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163mbwtcthi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163yckgsngo.html

strlen(s)
来源：http://www.sxryk.cn/163xerbywcz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ngbhmtmg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ewqkzpnx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163peccztzl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163axmemtfp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zymojwsg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163beiljvth.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oxfivcbt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qxezqkwo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163uhtprwbg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dlslemco.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163hyzmbiqg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rynzhqhw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gsleieou.html

fclose(f);
来源：http://www.xuanzx.com/163ubnjszwt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163iuhaxdjb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163smmiqjhr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yzqsfytx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ntvcesdw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lpvolmki.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tbausfkf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fvoilsbr.html

(double) a / b
来源：http://www.xuanzx.com/163xnrynpxe.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hzsyerkt.html


<!-- 参考信息 -->