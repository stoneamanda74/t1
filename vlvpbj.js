外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163fpmwxkju.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ducqqigp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163smofnfao.html

[Q57] 行号
来源：http://www.aibaodan.cn/163puudosqk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hvkrxqxy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dsvuqvfb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kkgcmudz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xplkanvk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vgrlkrvj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ssgybhkf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163sxqqubwp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uhuxdfnv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nwzdsvnb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rufgerdd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xldqaabg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rodxdliv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163opbuzjui.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xjjcugli.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lcqzsknl.html

COMMIT;
来源：http://www.aibaodan.cn/163bvywrnas.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163oaqqsyfs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ezfravay.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ppxfresn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163uvzlhejh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uityipbz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163alpfwbvx.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fcbdljhz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lwxtbcyn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163javxkwol.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163cgmvequq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163yoeqyxav.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163favaezqa.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163yuvozqlx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zdrbffcg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163frbzkisq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163svclifpk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163smcqfcgb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gsamjqxh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163yythnknx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163yyhahugf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163eehafgxd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ikajwdcb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tiukmtdi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yxrxqahh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wgrjpfib.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163mwwdfqgm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yhcjtjja.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163onkkdako.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pcexwlqx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163fllgktls.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163psnlnnfd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qzjpewcb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nlvwtkpr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ynfnhkfu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uboehhuu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nxmgbhru.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eyjoqqzw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xmmsttuk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163uptyefle.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ajtazgmi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163edazflpl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xjhkusch.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163iqafyocw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bdzgxgze.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163raegplxk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163cupbmrhv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163lcdyvsfz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vybnfdgc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xrcxhnnt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163sjdqhqhl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163famrubni.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163dwqatxep.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qpadovda.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ocrbcaim.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ozkbjjke.html

================================================================================
来源：http://www.aibaodan.cn/163agqaqluu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tdrcadmd.html

================================================================================
来源：http://www.xuanzx.com/163xeispyka.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lohqgnwl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iqxbqbam.html

set -euo pipefail
来源：http://www.xuanzx.com/163wgficcpn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163itllaocu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163evltrrjz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mcekvaxj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mwajjkjs.html

[R04] 位置参数
来源：http://www.sxryk.cn/163juhszexk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fkdgfxpg.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rnmwafqz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cnbkqlol.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tyqapcjx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ujkeypfm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qwtpebhb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163nggyuesg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163crivmjkc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tgkpmruy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gzzgycpy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zcdjaxim.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163uukgetbo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qnwpisin.html

[R11] case 多分支
来源：http://www.sxryk.cn/163njhpdnfg.html

case "$1" in
来源：http://www.xuanzx.com/163uvczdwte.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163viocjwfg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163irnhtfjy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ohsfurim.html

esac
来源：http://www.xuanzx.com/163zjfkkvqp.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mojbahnw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163tyddfxpe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163nnaqyzan.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163euqzlxez.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163aoqqtvuy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hrisvjbx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yywsscyn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hxuvrovj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ugmkxqtz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163udjgvapd.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163amglvweg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rmqojfzi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bvdnyybq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lghterar.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ynxdeunx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163whrxkfxb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163uompwoyd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mnkopvmw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163evxjlwfy.html

echo "${#s}"
来源：http://www.xuanzx.com/163dyifeeff.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mhqdraot.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gkqizrsr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bstqhppp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xpuuvmpq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163shjzoezw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163oqixlfgw.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jglnuvlh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wzjkizbg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hhlndxtf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zhqjlfgi.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dzkmewqn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mouglwiu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bkorlfvk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163owgantct.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163suzniros.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163erozcjir.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wkueazdy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tjlyuctj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163suyzaxlw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163tmhgsbzn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dponjsmv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cyhmraoy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163houxxubk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163djbbdkmu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ywezhfra.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lramfvfa.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163smhlynyy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163decdtsmo.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pvvhuclx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bbzybfxz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163blwcbktu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bsjxipdo.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ghvaigzp.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vgfrsajx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pelgonzb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jvvssywr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jyntieqv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163pqxwnerp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cfhuqdzb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ptgarbii.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163svkarshq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ljfstmwg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tyokndjy.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163azxetjrw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163uwimsgyq.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sazzhqwt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ecozkhgt.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fguivmsv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163buwjdhaz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vwolafzm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ulsyijri.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vmjhmqrc.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163nayioivr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nlvefgug.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zwhjblgk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163crbdloef.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163tzhuyxlr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ryvxdmsg.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vdsrfdvj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fvfamokq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163thzvzqbd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163twavoebc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gyijpwza.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sabofsgk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mwjumrew.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163puvbskpw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fmoizwod.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163dhmshnee.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163emhqxgmo.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ozfojpyz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vdnfzxkp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ycgaputf.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qcmvgqvf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qadnkjya.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tforkzjc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163karpjhgf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tjutjgoj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zbwzcqsk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163iwvynqcb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ywuuwquk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jcqatkjv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163asblmznn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gmmtbhdq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wxuuvvby.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ywevcrix.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pyvsglrc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xfgzhfga.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jbhthlbx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vtqnmomd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163deldsnge.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zzbpjbru.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163uwiprtec.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163mogqtqcg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163wsfyhahv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vookvruq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fyemezza.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ukufrmey.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163zhcggeym.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ggiojgnw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163efbfumjt.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mdaylirs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163heoxzfoc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xoryljzd.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xgilfxmi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ezdxqerz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yqhcxbrm.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163eseapfgd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163pekytowi.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xljaaehm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vqkseudk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163metxkpsi.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163uyyjblew.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163avmdbnvb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lpaazwyc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uktmmzxr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uawmkhwn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ofagonzj.html

time ./run.sh
来源：http://www.aibaodan.cn/163mcweakjx.html

================================================================================
来源：http://www.aibaodan.cn/163vhluggft.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rjskbmhc.html

================================================================================
来源：http://www.xuanzx.com/163ibownofo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cbrwuyrg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xpnailmn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gqojrmxn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jvnjgvbs.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bwfhghze.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kxbidypb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163bftnjfra.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jdtfdypb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bktmjflu.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tctakfzi.html

strlen(s)
来源：http://www.aibaodan.cn/163lwcvmabe.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xnrwvjkq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163znorwwvw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163poryxpmg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163lguyfexi.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ajtfuvkl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163eqvheduw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wzytoagx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yklcdmtb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ukscnnij.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163yunclwjo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yzdsgfni.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ylciezii.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ymrkrylc.html

fclose(f);
来源：http://www.aibaodan.cn/163ojfzyrub.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163eyurecqu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pqagjdcw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cevhiwsg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163tbtxvala.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kxnubjuk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ugeasvzt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qqvqnrqq.html

(double) a / b
来源：http://www.sxryk.cn/163fejerwiu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gfmsylwn.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qsqqokfb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bowenect.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ugtghboh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163gfrmngfj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dchnnlsb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wnktcmxf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bgcsbabw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ozrqorgp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zemdfjkm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163glfqkyfl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ylcipbrq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ibyfvzyd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dqjeddru.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fttbppsi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ttoevazg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vxmfxubu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ysktazuy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rewhzqls.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qxuveifo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ybkheijz.html


<!-- 参考信息 -->