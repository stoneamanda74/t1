外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ymxowuaw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163lcuhnwsl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qkqvizfb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yjfyvtjm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163swigkryd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pnnogdbu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163iexkhhon.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163djigoebd.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163axgrxcip.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bnfjnfuv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vohfmjib.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jfddmtkr.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ojxmkzwd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163stparefv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xqzsdkci.html

COMMIT;
来源：http://www.sxryk.cn/163wgwxtkge.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163sbkqpovv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163putxkhqn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hcirudwz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163awcjbfpx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163rghqxhex.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ooizfrru.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tiaefqdv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xlwlfvrm.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bmmvxsfq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kljqnghi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163bfswleun.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bbtxdtlw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163pnemqdvj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tfjceojg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tykimvhv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163coyrvggs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bvcwjihv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gvtvkjbm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ggpajnjo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163wajlotmr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fjwupbie.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163bqzzayjq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163drfithqr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lwuzqeyo.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163yatiqsfu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ajnqflrk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vrslkbup.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vqvydktp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ewonuqjj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163pqfmgdgf.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hmfyostf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163llsxyicw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163hrzqqrhs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hqmwpivv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hovrercz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pyjebakh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wpfkgmju.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163pfscsxly.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hjjfffqi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163brminywh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163esoieyor.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163naxydryf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163paosjgmm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vxyadapi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gxfersnn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bqkoksuo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vpqkacys.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uokvqgdb.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163acwkjxkr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fobydrkq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163evnfuqnb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qhpedabx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qtragzms.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fphirhnn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ypbqrjua.html

================================================================================
来源：http://www.xuanzx.com/163devtzyiw.html

R. Bash 专题
来源：http://www.xuanzx.com/163sjjfdynp.html

================================================================================
来源：http://www.sxryk.cn/163jlrsryog.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ibvzbtlw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nducgaoh.html

set -euo pipefail
来源：http://www.xuanzx.com/163ycnmtqyu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bxtpkgwo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163atlbxtev.html

[R03] 只读变量
来源：http://www.sxryk.cn/163iqysqqpt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kriwyphi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163agipaobq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fpnaaybr.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ofueqnsg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163krfzuwmg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wwuhlnuj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163duaoapvz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kbmxbufq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tlwejwyo.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gkctmjlv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163cygvhrko.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zebnjaoa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163fgptgobm.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zhkfctfu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wmxfzxde.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fhrizqdt.html

case "$1" in
来源：http://www.xuanzx.com/163hzoldyhx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tyifagos.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163vbfkmibk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163auhoiqxt.html

esac
来源：http://www.sxryk.cn/163mqtropbt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kbdosxqy.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163qidrzrwc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qrygqqqf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zecbnqby.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ytfawcra.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vasdruql.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163azmgsqgj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jkgtsswe.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rgufhvjo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hqtsutus.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163efobmggs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vuuwtnog.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kojkfqnz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rebtdbyo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jivgruad.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rkqfulza.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bjfszauu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qmmykmjf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163erpptgxx.html

echo "${#s}"
来源：http://www.xuanzx.com/163ocmjlsup.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zbjbhmsr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163pmzvvulf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dgrkrbqk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163yuvqjzmf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ogaiexid.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ejyssguq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lmkbdhep.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pixxwzgk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pkmdzuyv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163azdwqetk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qoyxqjph.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fxvhlvpx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jfsekiyz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fldfmlzb.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xaknjeqi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xzkaqzdy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wcpsueot.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zytqzyby.html

[R31] 局部变量
来源：http://www.xuanzx.com/163luvdkfbj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yyeyhtzk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bhdyvkyx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ifyzywgy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163roqazmzw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jbzfccnn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cpsstlkk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vavzzhzv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163iglgckim.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kcokotju.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tyabdehp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kxbluvqa.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vkhxjolx.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wkkheico.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rzhhcmlx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163glxztjdz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lrxkjmae.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163niacjxrk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zfsbwufn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qsjfvoog.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163kuvqyjbr.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163tuybeyzt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mdrmejnh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163slfzqfhi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fkxqtawq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163iritrjwk.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vdxeopsc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163jeizeahb.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lybseojg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vbfiwiju.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gtlyanhy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gjcghuqr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ffdkjbyf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163prcboobg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fwckldfp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hiivjqff.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163prpdekdr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mvgugwwy.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vspocdwd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ozlmvwqw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pmsvfidb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163gxplzfmv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lmmcocut.html

wc -l a.txt
来源：http://www.sxryk.cn/163cklziqvy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ekuncnan.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hsxdhnbr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163hpixtuxq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163msvgueuf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fpusjxrl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163uclhknud.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xzqbbhrj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163phcmfaai.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163uhbhfkwp.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163slmxcqbx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163hihprlbh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ipgbfmca.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163trjzhcsl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rygkedor.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163uklbyjod.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lzgweleu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ydaxwzqc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rstmrfkw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ysphqujm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wzmtrtyz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163dpysidyn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mkfwmcje.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cvdlswiv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163iotpgcau.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163fmtaatmy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163oshwexpk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jrtrbvbu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gdyteisv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xdujroon.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163dtvdextr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163fccqfrxd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mbzsfpfz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163udkfoimq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vzitpkon.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dtiswtqf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bkvkrcpg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tbvyfmta.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ivbblfoc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fzbncflj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163leopvfkm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163erpedqbv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uabdhijw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163znfkpwey.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163homwziao.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cjsvkbaj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lmmccyth.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ahsepwtf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lwwtenlg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vimyceni.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ijcpsxcq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163awscdbgz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vdkqsyhv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163scohtine.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163adjozwcz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nmmaygri.html

time ./run.sh
来源：http://www.aibaodan.cn/163dysxyuvd.html

================================================================================
来源：http://www.sxryk.cn/163xnrimzpl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bzugroxe.html

================================================================================
来源：http://www.sxryk.cn/163lgeqzgcb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xxiutmjp.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cmozsqpy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jnabudtc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tbhvhfhh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kzquuhth.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rdoehwja.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163nrbfzryj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lpjlbysh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fosefyye.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163jmhckvqc.html

strlen(s)
来源：http://www.aibaodan.cn/163rdeuugur.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163izmfvvyf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wgvvgznp.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ngdkxnxu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rzxgkiwf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wygxqlht.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xtmexyby.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vgwovyzi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jwnuogkq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163bylubrip.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ahkxbkab.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163roahwkii.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xevakmnw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ljjnyztr.html

fclose(f);
来源：http://www.xuanzx.com/163ayummmef.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wvjfwhyq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163snsnabht.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hjnbyicm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jxtnrpyb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163djupgqwi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wqfkkbfe.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163eoprflya.html

(double) a / b
来源：http://www.aibaodan.cn/163pnksbqcr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163omufpkcv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nnbwzett.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163iubhmffx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163awytrhiw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uymwqrdq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fycjusxn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lsxpcwfh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qdpehjwy.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163iaoafbeh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163izsocjih.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qowkxwnt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ancqzvas.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kzofwnje.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qakmxuuu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cxxrqiqm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ycmdhaie.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ofcadnin.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163cumncjtf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jznfdlnw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163baikwfcz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fptejzdf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fcdgdyvd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wlmopgtd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163iyrmzncx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hxgichlt.html


<!-- 参考信息 -->