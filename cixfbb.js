外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qonuuqzl.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ezbungdd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sstpidwa.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qltudjph.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hsmwtvgm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jqyjcebk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wkjvwdga.html

[Q57] 行号
来源：http://www.aibaodan.cn/163llzrggqb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fmezwwih.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rbxztayr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163syrtymsj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xogwybxe.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kjflkywj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xalbxgoh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163unkkpngp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hujsjttt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ebwcpgjs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vidqsaim.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xmworgyd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163skrecpud.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163pygpuvhz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zinefmlb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163pmkrihyt.html

COMMIT;
来源：http://www.aibaodan.cn/163ukxhdvln.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vzxkzlhl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jfvxuxqq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163koqzbxhz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ftqhxyjz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mwyzotvj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163klhcgjat.html

[Q68] 保存点
来源：http://www.sxryk.cn/163snwsqccm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vqrzobjz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163iqczimgy.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rupmtybt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163isyhoyjw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rhmkwxnb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zmrlghjd.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163uzdnuyqb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lsdqzjdv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163voymynrl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ozquncao.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hhavnxhj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rletpktu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pxpukzgl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jpkpzgmw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163cgrarllb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hdmzkzij.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163echdyxub.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cqkiddeu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hbavktle.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163paagubkj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ufuuoegg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pszcrrtk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163dwcktepw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mtsowmwe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sfitcznd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fnoihjgb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ieffvnqg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hhiimjaz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zcttbfow.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lnhokofy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vaeecive.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qflauduc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ucwxhzps.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aqphjuuy.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tydrhtxc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xvbfgfvj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zxnxnzyb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jxdjvull.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wfnuqkki.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kwubfhlc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gxnwybwc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dmbwaogy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zrrqgqtd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163olylixhq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zzftsurl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163harvfzix.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163larzxcbf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163atxsekfa.html

================================================================================
来源：http://www.xuanzx.com/163devjgmya.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qanitgoq.html

================================================================================
来源：http://www.xuanzx.com/163gbctulle.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ebdzchds.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rgtuccjn.html

set -euo pipefail
来源：http://www.sxryk.cn/163lddypptr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163iizhfnqd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163oyvozbqy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163drfakmsb.html

readonly PI=3.14
来源：http://www.xuanzx.com/163iytchrir.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163inopwhcq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163nuwxjiph.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ofrjfysi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163iiuzaeyn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kxgwbofb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163scbesisn.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163igwhqxgf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ypurhdjq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gdsecbot.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lbelfiel.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ikspkbep.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zqfmmiil.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ctcqxjlo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hrtxrijb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163twesodhv.html

case "$1" in
来源：http://www.xuanzx.com/163gwmwssyp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163frwwecfn.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ugzylqrv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163owplblkz.html

esac
来源：http://www.aibaodan.cn/163mhhzuvem.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xovnjmcg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xswjdrmv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zhtdlrts.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gujupuin.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nprrklfy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163uusmfpxa.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qwpysrjl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163piiqhfse.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hounruao.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qgkkllmq.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jpbpcinl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163arvqonpm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tahfwvxq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ojmluajf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hgmiexmw.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163grcweulp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163slmefazo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163bgeoqvcl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xsvpdctr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163njansgtc.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uakypvhn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dzfwgqcv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hpyffsxr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xxwowfsf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mdzcycyi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jivqcylj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ozyralur.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nvsbkegw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wcemozwi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vvtvjrib.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ztigzweg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vhdzfukv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163uhmisicb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xqvwjtjo.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mgacurjp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163afzgoehl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163eaisoehp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hwxzpyrl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163gadylhqo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163phvwlxim.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163pqleicab.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163faydiqwv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163qanwcjzq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163fyfzaufc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163iuhdvrxd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rzvvtlim.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163cmuekxtl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bsvqvxsz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tywhqwzo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kcdrdxtl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163asafawtn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163upluxota.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fcebtdmi.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xwlcpeaa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pvxfscbw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163kvztgxxz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vivwgqfx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163lwjbkjxw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cxkfhdzr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dtsujnrw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163sgjplxjt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163npgngnax.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bpfzuwbw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nlbntksp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lssupcbh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163yvvrcnvt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163byfcrslg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vyckystn.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mxzqtvdu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fdluorne.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163lslmryww.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zkkrzgbk.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mpqauhzg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163uhbpixgz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bvtfdztx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vuumayko.html

[R50] awk 求和
来源：http://www.xuanzx.com/163buhhurmm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ykfkqcwz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163atwrasgi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ovcmeyjg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163tovwqsps.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zicsvnuz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163phwjmfkn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163tpcutdrv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ncpzbgpe.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ntwcumge.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163eglldwao.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163yzuptsrk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cpgagsbt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163edoxlfzq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fzlpttuj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zjhzwjgk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yytlfpxh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ajavpiyq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vpzeigyu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163evvkrlpl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uxciypsr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kwolehvg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qhsbrhmb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lwaeektr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vfldbfwv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nrcuwjyg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wglycmuw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mdqaynxv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qbrzxjai.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vdtrqgua.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yyjeodap.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jqdxitql.html

[R66] 定时任务
来源：http://www.xuanzx.com/163enwbqtuf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qlucbopq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163sywbluwz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nkrcpzye.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163mzqtodkh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vkbkzmtl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163sackxadx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rawqdzkk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ahqzmnna.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mkycegpb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163acaitnky.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ipoghpje.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ftxxnrdu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gergnpat.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qblppzzg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cnwxzkmj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mzgwuplv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xaguvlux.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163footnqao.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pdisgyyp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zjstnvrf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163svpgcizt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wpmldygr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163twoxcmpv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163homjnzhx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wmgwbzxh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xjkggodg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ivipetgr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163aurcovsc.html

time ./run.sh
来源：http://www.sxryk.cn/163keyqjzrz.html

================================================================================
来源：http://www.sxryk.cn/163tfcbexih.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163huotqyay.html

================================================================================
来源：http://www.aibaodan.cn/163hwmhidxh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pwrdtnky.html

#include <stdio.h>
来源：http://www.sxryk.cn/163eyhwokzc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lqaphxpo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163zblsaowu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vgoenatm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vgvcwmpn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pjqgkfnh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vonysgyo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zfplrdcm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163cscrntzi.html

strlen(s)
来源：http://www.sxryk.cn/163vygotlqw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gblqbfgs.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jczcewai.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163psqfuuoq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cammyyxb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163gzfpxyys.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gbevjktu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163npxvtjwe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vxagurve.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vrfphswv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sodqiayb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163snavvpqw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vgxwmbiv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163phzrqizw.html

fclose(f);
来源：http://www.xuanzx.com/163mvsblszi.html

[S12] C：写文件
来源：http://www.xuanzx.com/163oocaitze.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ukxvukmp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xrhnsyup.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nsbpdaao.html

[S14] C：枚举
来源：http://www.xuanzx.com/163pulqyvnf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fjfiyfaj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ggtnsiiu.html

(double) a / b
来源：http://www.xuanzx.com/163yacikdnk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163msbmdclb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tthuumzn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zwlypyik.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nlayeute.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rihwqgbv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163yrxpxgee.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zyictecj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pstceiwm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163twvhgkef.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jazjjghs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wqgrskkc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hhvcuihb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yqbsdffs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163flkuedfq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ccifjukd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cqzuhvga.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qehjtjyh.html


<!-- 参考信息 -->