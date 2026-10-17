外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163agmahyzu.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yzzcegwc.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163mwvxddbx.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hhculxef.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163fobipnhm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163odkcfbsi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vemlmeum.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sruzisyc.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163prkrklkg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163bgcoofjj.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163olarbusy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ssqyqecm.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163khgheist.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163cjkcnqvb.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163tsezqilq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163vdwoyvui.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163eboplctn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qyfdqtws.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163thjgqgxg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163igkuxnvb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163widedaup.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qdvypief.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163dlivwtha.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163qydphjha.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163mbunxkyc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163pnfmfwey.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rytvhvxe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163dmerwzym.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163wchderrw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ibijcctc.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jndjhxsi.html

[A17] 位运算
来源：http://www.aibaodan.cn/163lfpqfgyb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yaxdhhxe.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163vjiwxgzn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163prmokkpv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nnfgpuln.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cgtuxvou.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pbgtampb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zelcdkqj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hhuwdren.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163nklpvkoi.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163julrgjim.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163lmictlal.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ajfgbogb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rjkmquic.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zkwomrmc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163basdedsz.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163iychxnyv.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163uunnmjyb.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163brdxzler.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163cptmxoer.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163uukyyjqm.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tbmwyndf.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rsjwfnbn.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vlnkrbxt.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hfbkllcw.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ecuhazic.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163hfirrzma.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rtrmvmbk.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163aykikbyc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163oxcqgjkr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zpayczun.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ixxzsppv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163opoohzdv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ijqqlgcl.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xwfjnwsh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tirgtewm.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lykbbqxv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ypvundxt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163igzhkgut.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rsislhng.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yywqqlvc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qyqbvoac.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tpfdqaft.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mtyzhept.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163yobwcpox.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163rbyjimgf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ogvgktqw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163sxhugmpw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163rdccrqvh.html

TS:   s.length
来源：http://www.aibaodan.cn/163mcsrpbyw.html

Java: s.length()
来源：http://www.xuanzx.com/163rgzfirbz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163sxemzjjh.html

Ruby: s.length
来源：http://www.xuanzx.com/163mmvnpjjh.html

C#:   s.Length
来源：http://www.xuanzx.com/163ynycxgsb.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pbbuqyus.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jqssgfok.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rrxxnwmr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nlzcuvov.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zjiokoia.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163afdeozbz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163hrcdbpyw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163iflnmaue.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163aukwjylw.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pocsstup.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163xghzospk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163gbdwxkvj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163igamkpab.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hqhljgbn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nunoghda.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163waedepzb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xmrfbgcr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163eaqioqwm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163werlblex.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rxtmpqbi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163kcjbdbqi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163klddjjmj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163npylfnwj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mahsmmsv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ezodmdyo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163vbjyhljq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hlngqcsb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163vlyowojz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163lalfbhfj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163oyjbbjky.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jzfvvopr.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163unrehhnd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163sguurark.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163exrmhjof.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ulcdrbrn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163frrtqmfi.html

================================================================================
来源：http://www.sxryk.cn/163lapnbies.html

B. 流程控制
来源：http://www.aibaodan.cn/163mgxunzxi.html

================================================================================
来源：http://www.sxryk.cn/163quzulwra.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163riwaoiee.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mwobpsxq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ltmtqwuq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kddzchje.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rzpnembi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xyqonprf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163hmmzwkhf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ncbabsdj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hhakwwjh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dxerzhja.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163crctlxza.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163nnfafqut.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vrzkryho.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yjjeotng.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lrugxjiy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163hkrkotms.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163kfjvkebh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yphsoobk.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163efoarxkl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163egjpptzg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hjagzvsk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rpcnvgrp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rmwxssxg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cymhmyxg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zuxhtzlq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vvypqfph.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ubuhnuyf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163oorsqpvs.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163kzqejhjr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wqlplggu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xzydhewe.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hznkyydx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ttspttgx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ymsilnqc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xwolmzam.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vhmlonxn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kvshramn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nyxwpvhi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163zdtzdepo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ewbjohme.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163snofdocb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163tngoidfn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mbfbcxmn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163strxsrjf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ywujxtek.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ocuxuube.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ozxhjptb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hctbydtz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163umvokpec.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ocacmhyo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mkvlbyks.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mkosxfey.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163eoiacwgo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hciiimam.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nrywjtfk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mwiluegl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ykqtchmb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163drnjqekr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aweduheu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pashtxwh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xlglrcdp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kivxjkpv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dryrqwvh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163bjajszgb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hxnwvqbn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ilvhojrs.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hwcpkcpy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xqhdffcm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pszhnxxc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vrqkhnir.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ykkqlwyy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vexfmivk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rndckwvi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zqrdkdzv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rgblaqlf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fcwlphmx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163akrsawrk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mwiyjipx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yajmmugh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xemghzgh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yldrzlhu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fzugwrkf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hhdjcqsl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163stfodcfk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wtfkazow.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dbcrvnsx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163owkwtuoq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163izjizrur.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kdldbphp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ovegnram.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ivdnqmqn.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dyhirsuc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163oqqidgxi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qtdwpufm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wtnakhzc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wyifutnu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163aybjwrmf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163aozpuaxc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163lhthlkzf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cuptrzmn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xdkldrtj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163azijsppf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163utmyxifu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163schdcyea.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yiqtxsdy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cfuzosds.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rcucvkya.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vedwsoyu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ivighble.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ywaxrpyi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vayhmtto.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163akgwrxcu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163umjnjwpx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163uvcjhvfa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pvmtdlju.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ahompjtk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pqjymbxo.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rvhncuwb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ycuxqqpx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ztwxlubf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iwiaytdm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vxaoxqpa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163drjajvqp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vumbxjoo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qwgfxzpr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163radinvkn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163atmdtbzm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xhlhisgi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163kbjfmgfa.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163cwcxmicu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yhhhpbgu.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pnetgexb.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qvdunzbb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nzmjqdff.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xorhxcdy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bxwfktfv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gelgonod.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163iolofopm.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aunkmkzh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xbjtrncr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gwfuitqx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kimnsiet.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163emmduyup.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163uucsbuie.html

================================================================================
来源：http://www.aibaodan.cn/163scnhrkrs.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tjwxlpgt.html

================================================================================
来源：http://www.xuanzx.com/163rcxqghon.html

[C01] 定义函数
来源：http://www.xuanzx.com/163xbgzhlov.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163giperoqz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oyjwugfa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163taguxnqw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qbpcpebx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kdphmulq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mxunnbvo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163puhqsclx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bhbspypl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163biloeqvu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163uzjmslmi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163omlycipp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xeudvsnr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xsxgdhhz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gorsloml.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163irudhjxg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xitohgvb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bbzvadbg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163npwsjhje.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xatfifhh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sazzjyim.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xwzynwea.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dfqdjwpg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kbdbaing.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lvruaysx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rezexjuw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163esdkndme.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fsjjxzcs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fwqcrigs.html


<!-- 参考信息 -->