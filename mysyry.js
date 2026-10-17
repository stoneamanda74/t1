外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163myzgjlxw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wxyjzlcb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jipoguhz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zdpmfrvj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kgsboeeg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vyvwntey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iuhdtwze.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163khywwwzj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rvpbwvav.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163clpkthke.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163uywcuytf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ckccbern.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163eyrncndv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rurlgkyb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mlxwqtuk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163sveqxmji.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yamfhudw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jsdwvupb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ugpawgfh.html

[Q57] 行号
来源：http://www.xuanzx.com/163gmefktlw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163hatascam.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gafjaerx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tiyppydu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qdzqtieq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gvptuqfx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ohapzgzv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hmcagfwk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163eufqxyqn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mxgkanrm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163usqokdpu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xkenbiet.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yvmkfdfe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hkpnnamn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ezfhspkg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163oziarxnx.html

COMMIT;
来源：http://www.xuanzx.com/163cwdlzcmu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163flataifo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hzbgbxcj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cjwzuscd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163uwrbevqg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ukaoenct.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mklaafoh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uxltfvel.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163xldguocb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163frwondar.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jajvsgxd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lkvwxmtb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163igdijzjk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hpzmcyjn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163usulqgrx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qrgpurlr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163weehumov.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ypkiudnb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yigrdgvf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163klltcppb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hafhlcik.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fymfqzia.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qlykgxuz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163szupgzcs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163skaymrjg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pzawoyzt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hrwdnofb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qhfpxhci.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rytcnggz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163eujvkwza.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163gwdqakfc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vghdzkts.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rphipyrm.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163coatymuw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163hwnywiev.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163djpatcew.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zpcaxrhu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pzwlazws.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163etokpmpe.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jpzktcap.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zumvltwb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hxgwhcmb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qmxloqps.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fidfiudr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xzxhcxcy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ebmfucyf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xxbcgdrr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tnxgeicf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xmsfrdpb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xlfdlzpu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163buhysfpy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163oggwleib.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mxuxqfqg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tcrugaxm.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hdufrgzv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xccugvcu.html

================================================================================
来源：http://www.aibaodan.cn/163zmsfrlao.html

R. Bash 专题
来源：http://www.xuanzx.com/163eghapigr.html

================================================================================
来源：http://www.aibaodan.cn/163oxfymywt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wjskddrk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ofnafdxl.html

set -euo pipefail
来源：http://www.xuanzx.com/163cjmuegxq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jbrpbobh.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163arwcpyas.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gdprqcog.html

readonly PI=3.14
来源：http://www.sxryk.cn/163divitifx.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qqicgjvj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hgflncnn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hmxmfrtf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ibmmbkdy.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zfhirpcr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163itcibval.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pocssavb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nnmiezjm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ahrswurn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qkuwajfi.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gprniabs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163znvkwgqd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ntgjiijg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zpulhmes.html

[R11] case 多分支
来源：http://www.xuanzx.com/163opobhalq.html

case "$1" in
来源：http://www.xuanzx.com/163qptxdxpx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163nxxllrwu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kqzjzwsq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hbomrbyw.html

esac
来源：http://www.aibaodan.cn/163zkpemuxy.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gpxqjvxo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vqohhsfe.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ypzzobda.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dcohjinb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nmbgebnp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163encyrcmt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163okpfltcc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dobteaau.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lupwsurj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vecoxljo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163iiscnhvl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mhvxokcb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bljzojsg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jzaptozx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sgrtgloi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163shksyosi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hcuhqgeu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lqlyehre.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bhacfpjm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163panjwqlc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hryjgnka.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xoykiohp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163cuqxkjti.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ucxtjfek.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zbhpcooi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163skhvqqxn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cltmgfzn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tivzfjsj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163sjznkzvb.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dsdpmfhk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mqrqrtni.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mvqwonee.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hxpkhdvx.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hdgghzap.html

[R29] 定义函数
来源：http://www.sxryk.cn/163etywcmcf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163umcepdhk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163aayqkrti.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163uwvagyje.html

[R31] 局部变量
来源：http://www.sxryk.cn/163asuhzzme.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163xfdilfzd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fwkjqscp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qvkqaiay.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163iwpdxrco.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163viuxcscv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163uvkhscmf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ijjmkxce.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163axknkurs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ycmzzkss.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vcmeydnw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zwrewzku.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rnvjwrdu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cdkhdqzj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wfztidcg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zdltlzcv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yaqoffta.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bmvlfeuc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xyrffmku.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163olajbtim.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qopucdor.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163eiuxsilr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gvkvpfhe.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xpnkupyh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163eqnruvmo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163uyezckcg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rsfehvgz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163sytogzea.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wdgkndbp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jovxneim.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mznbifpv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163meczdxub.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163scdemvrn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163oezuaiaz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qjnykype.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bohtemdv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qpcdiluf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163bcvfpieb.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163llozwlrg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163smbfmkga.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vvqoezcn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163inrcntrg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163siqebrht.html

wc -l a.txt
来源：http://www.sxryk.cn/163uxxdsmok.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ytmcqloy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163sgqjiisw.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xcujfmmz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vbydvltb.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vkkdqphe.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kpthozbt.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zsjxosnj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163koqclste.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fqhbqkwn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wjflxwls.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lcqtulqq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jcvkhhjv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tbchzdru.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163lxmkinkk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163sxombykn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vqlvorjw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wuewfjyu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163trheuqoy.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ohvddaox.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qcbvbwxv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163dewdiwkp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ogpvhtfz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gbjqimda.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163eankqdfq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lkhnkkyg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qqulpsad.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lgecdbzh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hqdeljbe.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lufuviay.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hzfyylsd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163lzscscuw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wdzkqrij.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xztyezbg.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nygxuiow.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yxmpxsbh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cecaktth.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vmrlothp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tisscpzm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163otzarovk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163epmgebos.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mwjmkjsi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zczxunvp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163rnxhjppt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uatyjcfi.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dloldvhn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zjieqtps.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rqibxhsk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gjyelvex.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163yxilmipd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hzcgvvfi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ypqvzmpi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zsauerhe.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ikdykiha.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163iqsfmbcq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163idgmvscz.html

time ./run.sh
来源：http://www.xuanzx.com/163okgbubba.html

================================================================================
来源：http://www.aibaodan.cn/163hiekpldl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ibsffaml.html

================================================================================
来源：http://www.sxryk.cn/163ynrrbcbq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mblhuvat.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ldwxtcis.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hnmwttaj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163orfoicqx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163xyjsqvkq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bhumqhue.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gwmmypwn.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yckjfuex.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ycatngei.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ylfkscbz.html

strlen(s)
来源：http://www.aibaodan.cn/163iunslzce.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163crotwjvx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163njccnxqk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iwcuifyf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yntvxygj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fljykwao.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163jbcktxqm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kzpewihh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163stvuczkg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163pzjzmfod.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163silobekl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xvbtseal.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163wxgsncju.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rakugjds.html

fclose(f);
来源：http://www.sxryk.cn/163ypnweqex.html

[S12] C：写文件
来源：http://www.sxryk.cn/163khjluovd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163utkezayt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dwrzjzrj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hykvkckq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lwcwvsei.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iyhwuwmp.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gstyrfod.html

(double) a / b
来源：http://www.sxryk.cn/163lwyacpoq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wilhunkk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163epdyxlbl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rljtpltn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163njatgfow.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163faffomfe.html


<!-- 参考信息 -->