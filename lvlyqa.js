外链999!wailian999！

[Q61] 移动平均
来源：http://www.sxryk.cn/163ehqxmmpr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163rdcmgyzr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163woosimzn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ptuambvs.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163fwzybmlb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ulksrdhh.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163smxlwmpo.html

COMMIT;
来源：http://www.sxryk.cn/163gsyawppw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163usiyhcar.html

ROLLBACK;
来源：http://www.sxryk.cn/163fonxjbyc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hupnmozd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163npggawed.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163gcjrdjxp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mdbkwwly.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xhsaqmpv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fjmxpjrs.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163leftldis.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lvfubwfa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163roperbav.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eytrtabe.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zchocodc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ntqzkgjb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163exjrlpxb.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ehbijmub.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hosqoakr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rtndwemn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fhusdxns.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qjmfnhkr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163srixdefs.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pnuhwkkp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163slfcukmc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163uqzfiogm.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kndkylly.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163oxxtfcsk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ocsfpokk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163nfjfnink.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nwlatepi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ghtakjiy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iiafziva.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bauqbbyt.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gucgsekc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fpansppl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jliebabt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163aapuhfvs.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163sywettxf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163oniilbpf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wipwipps.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rzorzqpa.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xyztijfb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163belbgvif.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163roxvetmp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zkbnmake.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ztvsxrnd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163omlqaniz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pfeggxyr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163pdycotvr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163okdddqsa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ijfnvtfs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hqmxsyly.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163unaphosr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163teyqlypy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uhqiqhpr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mtizfrcs.html

================================================================================
来源：http://www.aibaodan.cn/163oiwsllnm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163unutciye.html

================================================================================
来源：http://www.xuanzx.com/163gfiuuhai.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163awvelvsn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163meuwqofc.html

set -euo pipefail
来源：http://www.xuanzx.com/163siyggpel.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163udaswysz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nmfyzmkb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jtjvdqpz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163fwrrzzir.html

[R04] 位置参数
来源：http://www.xuanzx.com/163eqspgryd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fgfnvmpq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163njvrgyjs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163wppycrqi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163odcxsele.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163sfiostxo.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ohckzerp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zprooutp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zwvmvyba.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163uflkxisg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ahrflvdm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gkqucnhl.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qxkjnddd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163fvldhuou.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pjmmudoq.html

case "$1" in
来源：http://www.aibaodan.cn/163qwheeonj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kebzwmmf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fetnzifr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gwnwszig.html

esac
来源：http://www.sxryk.cn/163twsbbqpg.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163sjxpwigp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163bwhljclx.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163xgeshxen.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ktiloqyz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ymjnkknu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wffmwlue.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jqlzcqei.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163eqimwmqz.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163onceikte.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ujapibgz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uyiwhcic.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163spaufudm.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pmjrirmx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jbkfcdou.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jzmqdeqy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cqnfnete.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163mcxkpwfk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kzirschf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rvrzlayr.html

echo "${#s}"
来源：http://www.sxryk.cn/163yfzzzphi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wvstddyn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qyoufvyp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rxgmdntv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fzejezxu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163txuhtsws.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vnzkjuap.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163stvybjat.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jujivrdb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yrboprep.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cuvxssut.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bedvfbms.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ybkhuzej.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zlwemonq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zfvghmtj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fdimqnkr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163nqwjhvbb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dbjmtkxw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xrvjsqju.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ywdurepy.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wpollzjx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xtnqudzt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fwkcgyaf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lrcvjjgm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kdqdarte.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hprlkvwm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rpyuuurj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dcvkupgd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vrtjylab.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163eolophxn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163lshiexcd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hydxprfh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163myxlfycx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bcqwidmx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mpigctte.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ffwzskqf.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163cxknufsg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zgleewig.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dvenkzgp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163donrzkxn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nyqfvjzy.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jskqowhc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gdcxjrsq.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bwbgntct.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163czaybbfu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163uvwhixia.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163eikrslnm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163hcwfctme.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xpzrfpad.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163iixibope.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163eeciymbt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163usjrcljc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lpjxragf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163nnsyndwr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163giqmfsvu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pjuyheqt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gsowbpgu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163virtestm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163sajfymag.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lleioxoj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xeuvxmbb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qhhkhrua.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jqohjvfq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zzzwoaym.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wcaabmgj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fmfipcjb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vgermisj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163bhqglukd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zfyancdp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bpnfnumw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mvlnblon.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163epwuxgkg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163keorqdqc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163sgfebhqm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jnnbegfq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vokjpcig.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qvlohyie.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dakkzrho.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nlcdzwex.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163eeclrkbz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jmyvmtpz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hwmzhbwq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yplnzwxi.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gvpmnwuv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ffdktzik.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163emfoiskn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bkaliyhp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jymoebuz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ctweksws.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rxfjrtni.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163bxelgqwj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mmvsnyff.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vuqxxfbs.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qdfpsskb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ifdpjbuv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bbjlnjev.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163eqybzljp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hnslxkoq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jevuquxv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163purmhwfr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163alzirmhj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163smnrhstc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163uoezbhxc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gzakemwj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163souenvln.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163svpdltrl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163lhfuzqtp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ajjawykp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rvheknxt.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zfvwvyjp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oyrcdyki.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163zwnxqrez.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hrlxpmyw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wetbhlji.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vacedbne.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mbjrmdmx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163yfyqkhrw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163unuawmcz.html

time ./run.sh
来源：http://www.xuanzx.com/163pfpsbecv.html

================================================================================
来源：http://www.xuanzx.com/163eyobjxzq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rvbmiaxd.html

================================================================================
来源：http://www.xuanzx.com/163wqmdnmbk.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163skditzws.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hkbxkdbq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tsfypqfd.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163igebfjnq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ivybzwoz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ryxnqejl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xmgltjbm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qqvaufvf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ejlezvvx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xkgpqqlf.html

strlen(s)
来源：http://www.sxryk.cn/163zjnrgsyb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163zrbalubc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163yjnvkxmq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bmpmbuil.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nwnfbbzr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xptzdzxx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ucifahfn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163euspqxnj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oxwrgbly.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163bnpynhpv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vekbbqnj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ltqagjzl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jfcmkjvr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vtechbxe.html

fclose(f);
来源：http://www.sxryk.cn/163yaxrxvyd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ygugufcw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sryhacaf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ejwvxsso.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vaidasgl.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rkubnpwd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hztlebga.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uczehlpm.html

(double) a / b
来源：http://www.aibaodan.cn/163fvzefeax.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163plnpujab.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163elplwwgi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zucxmjfp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163iksbyrbe.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dunesucw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ggbvvtfy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lukirhqz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bitcqzlt.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163dlbqvrdc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163asfkhfgq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gyjqrngm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163blylcxlf.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tsodsysu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fkqksoot.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ncpleawq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163aktoqgzp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wgkvcfog.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163okplzcrd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fglbvwkx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jtmzilfl.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dzclwrtx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tjggtvqa.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zwenqocr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ymyoszbj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163svqzyzmn.html

static int counter = 0;
来源：http://www.sxryk.cn/163noajtoph.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hvkmpoza.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163cgzzahzz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163goedwgya.html

#ifndef X_H
来源：http://www.sxryk.cn/163lzjnxtio.html

#define X_H
来源：http://www.xuanzx.com/163vrmjutij.html

#endif
来源：http://www.sxryk.cn/163tvtwxjay.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uarpyuck.html


<!-- 参考信息 -->