外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163nyuovgpe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mubbeplw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163vseipkrm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163tqssnuko.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fdqcxqsv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xufjpvft.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163xdqewhoe.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cxsyvvuj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lghylbkf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163sqwbipvb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163otdzxvif.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163procugnv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163itvnwoeh.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bwksednb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mkyxlegy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nuslacyy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163pfceefzp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ejenivzb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jcrjpihm.html

[Q57] 行号
来源：http://www.sxryk.cn/163twmapati.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163puxabvom.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ijalryae.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ofyxeiai.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163rbgveryg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tbxgcowl.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ylqkxhlw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163evkgxxvu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163efxnoowr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zzstwmkz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163svosfmxb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163yigsvbxh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163safuqzob.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bmyjbjqy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vslescsf.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163grsfwsth.html

COMMIT;
来源：http://www.xuanzx.com/163dclgcmgn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uqafrgbu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xvewhklw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xfmejeun.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kfhabofo.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kiwqyqtd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ixxyijwn.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ldzcmgrw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163iorrzued.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163iacnufnh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163jfiraicl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ojgsitwn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163twuvipjp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ilqfhpci.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mhraocie.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bwbyknnz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163foweprgu.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163msgxpzit.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nabwdmqj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fwcwqoui.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163uvijkugd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ktiizyos.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163bsaykfhw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fflrbmkd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fbujvzcz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163robwcmgg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jqexdenm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fwnkilgh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fgubuqqh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163yoiftfql.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hqsrvhvf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uylyruhe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163drurfadv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163clifxfcx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vpmoeadi.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wbwnbepg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xoycvqnx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hjkbkoeg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sjfbjong.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wmsxymry.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163boduvihu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zkpysxze.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163woofuqav.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wnauixiu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zwikcjwn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qwptbper.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163eeyzjlpa.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163uaogshjb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ghudowhb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cnlwabwz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yioucwwo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zftcrmhp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tdqmrnku.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pqbpailn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cgpvgprz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163svvijhyz.html

================================================================================
来源：http://www.aibaodan.cn/163nvvejxna.html

R. Bash 专题
来源：http://www.sxryk.cn/163vaywxrfc.html

================================================================================
来源：http://www.sxryk.cn/163oadwknix.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lcjlgysr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163noxftmqv.html

set -euo pipefail
来源：http://www.sxryk.cn/163yxaebgiz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qxabwygf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xsfkasln.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mxojjajh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163djsadllf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qeygxvyo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163iprhzmqa.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ijtwzvyp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163egdebebi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163krgcideb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163qluboyox.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163gpqvzlzw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kgfbcrsf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ibzubczz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iddarlyx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pmuavdzn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xeehsrcl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pmtxejiq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ciihgasc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eclruapf.html

case "$1" in
来源：http://www.xuanzx.com/163hscsrfty.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qttiyelu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ltidxxga.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163nqmuqwbl.html

esac
来源：http://www.aibaodan.cn/163ldbcrrki.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ssounwrv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163sfxnkgmp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163stfcawed.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gqfedavr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jvdwgbkw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jmrojgyg.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163sljdocly.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xqgmmcmr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bgbnwuwm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lssqqltm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qsevazkt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pfrxhukn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163oghltiml.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163tjuzydyv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vhmhnssd.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wgotlkvd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vgkjjjmh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xqzvydrm.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163oeyrxkqm.html

echo "${#s}"
来源：http://www.xuanzx.com/163bqngbxtb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hravolvm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uejdtxiu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kyrisszg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ymmhzkup.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bgcthjyu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wpyrfmeq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ydwwjppc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163crlistgd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wetkmiyf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hsdowhyo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ttguaoue.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rwitbncc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163gjywiutw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lppuvekm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163btqkuegd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163voxevsbh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mccjtfey.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jnldtbcl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aygsbgto.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163pbshjkhd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rlbmzjqx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163aadogdao.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tyrrucgl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163aaxxtnhz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163crlayyne.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kssruuon.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qtofzowt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163harkyhcf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163voupvvuh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163slfhwvdw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xmxgvblg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163sykkorwf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163druzpdgv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ihtfajhg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zsjofbzl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uawnwkmp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qkxbhgcs.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nlfedqeu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xkvbekac.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ifpyohyt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qkjnyvej.html

wc -l < a.txt
来源：http://www.xuanzx.com/163plidjphy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163kppgbemg.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gysqhrgz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ytfyavwr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tmvvufbi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uascwwdb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163yljsoyce.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qnehyeov.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163answaiss.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rivjldoj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iknlylww.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bbrgrhwd.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hkucuedo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163uclguflv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ngancqrl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fpnhzcxf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nkgeharu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rnwwbhpe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163exsdymfg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163povxosyv.html

wc -l a.txt
来源：http://www.sxryk.cn/163psfqdgne.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163buvawded.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163beftjdqh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fyfaieaw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fusouinu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kxopnsdq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pzhbkvrm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pqurqgyf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zxfxxtdd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ntfhnoys.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jzvrpmcz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163utnzibnj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163szieeimf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zrksagcq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gfkfhavc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vwybqwlt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vusafpht.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qiicrche.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163inyrkoxp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ilibawlj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mztsfndk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rgtyaklm.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hvcuvheb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ubzyszqn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163uvetieuz.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pmvnyhkl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ssczicbz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mctchgtt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lailrepr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hllmefom.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wasmmzqc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hrhrohkb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vjgjhsxm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mjgwhshx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vtrutppj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gwrnqgvr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jomgcwid.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163nhwcjvli.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163frutexee.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hszmgodj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vkaystky.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zofrenru.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qsqwdyiy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163limznyhp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wsooprxj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tzkbotoa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163niulgelk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163evwscpma.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ifelcbdz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jzsksque.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163szhglcqy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163khedwidf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fjndftnq.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mveaomgm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dkxbsdsf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163snqyrquw.html

time ./run.sh
来源：http://www.aibaodan.cn/163ezunejut.html

================================================================================
来源：http://www.aibaodan.cn/163uosnzzwm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tqldmyeh.html

================================================================================
来源：http://www.aibaodan.cn/163huevcdax.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163giozagme.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xocpalrf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gbqnbflo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163neqnhbxz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rydttrou.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vopjtqjs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fnictegd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lmrezzrf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hffyowmr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wekiqbcp.html

strlen(s)
来源：http://www.xuanzx.com/163rarpagoi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163qbnjovrt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hkyhrmxi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xczvynqc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ixfiwvxu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ipifpuhc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163lfxgqptq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163cffxqjgs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163beuxgjrj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wujgnblb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163edywnpgs.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gzfwtoxh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gdoavufq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wotvbuiu.html

fclose(f);
来源：http://www.aibaodan.cn/163snwvlkky.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163nbjfabbw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hrntxxez.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rqiwkenw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163asmomfdf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yprwrwue.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nlrxuxqh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163cyytuqwr.html

(double) a / b
来源：http://www.aibaodan.cn/163oiatjccc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lomqbtpx.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fwjxathb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163dycbvusm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gaisnqxz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nmexmxpe.html


<!-- 参考信息 -->