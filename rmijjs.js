外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163hgxxnhnq.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fqwggncm.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qcdrwesz.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rvlkwzkx.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163eibhmhkx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163bfpfkuvh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ormilwsa.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zbmmnmzy.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wlcquvxu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163arsonzdc.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sxxgqjyt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163xkvxvlfu.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oldgllrs.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163nsjhqgwr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uxnpfyhb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rxjzoofp.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dleywyrm.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163drmklpmw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163arxpmlnu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163mjbofzez.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163vrjsrxgw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163xccdttzm.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163cptdnnge.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163qflfflwi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163bzbpjtkm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ezgaqrnq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163pxzuyluw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163lhsnnyja.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163oaglppbp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ahwerqxs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163ywvinzzl.html

[A17] 位运算
来源：http://www.xuanzx.com/163hvtklhml.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qvjgyerf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163kxnnsrlw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fbahryhm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163arpiawqs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163crtmaaoe.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eztdszel.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eoqwrpey.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163txvvoadi.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163mhxkqjqf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163kzgqwojr.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163muobghif.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163aongbirw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vnzhbece.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163cqotpypf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163jaqnxuxl.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163vfspbgmm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163egagjpag.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163uejilybi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163recndrhc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zjlssbas.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163prngsmyx.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163yjioizih.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163hwbnxdbd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163fobiosqp.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gjiqxjyo.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wdwxqzie.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163tllwcefn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163amdxkqqx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ilbjdsxc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163istbpvzx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163odlyadii.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163migaqqhl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163uqruumlk.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163vvkgnrsq.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163uexnijuo.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163unqvlwrm.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163seqazpdf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mfnfhfhx.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tcpfqakt.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ehcdwckr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kakwctye.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zqmiaxte.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wkanfsbr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ywytyjqs.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163kzzhdfvm.html

Py:   len(s)
来源：http://www.xuanzx.com/163uoztzynf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kfquspyh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jpukxwje.html

TS:   s.length
来源：http://www.sxryk.cn/163inumgeyo.html

Java: s.length()
来源：http://www.aibaodan.cn/163utimgzda.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163uhajhcyb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163elgwsqkb.html

C#:   s.Length
来源：http://www.xuanzx.com/163cijovueq.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xpxwiyxo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163aufaatvh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163vidjcyhp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ucomtbab.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dfmruwsf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kqjkngio.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wimrzfqw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163yttmxasi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ftqcpitb.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vsfpdgxd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tykrfkim.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ahedpjsc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163rwjguhlf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kxdyrfvi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163tvfuqbrg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163uoowwpfz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163emuakrxh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163npegazon.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163nloycrwh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lsyqleqk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163eidtlava.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qvymkfrg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zlnhdecp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163bydjxzrm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ujyirbrt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ghhsvcmz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lthfqugk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wowvuich.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163aowjbgqm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163crbgwcxk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jujrsxhu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ondfnqnw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163nprpuoni.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vejxyomt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163mdunvfor.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163frosoiur.html

================================================================================
来源：http://www.xuanzx.com/163nwcmvzzp.html

B. 流程控制
来源：http://www.aibaodan.cn/163kfxvhqxt.html

================================================================================
来源：http://www.sxryk.cn/163shsajbta.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163zirsyjur.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wbmmbrsb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vrzmmdwp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163upcjiobg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wanhsomo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dpwwxosi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163eqkhifzp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ortixpai.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bqwsrlzp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jfyewbkq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bhounrwz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163deejgsde.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163heocwsok.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nnwetgvx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zeaalekb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mdlquuyw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ojmmbyip.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vfclvkxj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163amoebhii.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fueoqkqp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163syylntgq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nlgdsuum.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vytgkopb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163yexlgefu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vldqmlcd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163svvnhglq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cokldfwt.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163eimccfaw.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ueuxfovl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jkyqyojk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rjvobsly.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lsqnwegk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163prueiqfd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pfrxyzpc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bhohrmxp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163bpcblyws.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163uasuboob.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vvpaxnpj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163iqohvdqa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cnrecxto.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bbvixglc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kmzrydyy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wlgpiaqf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163vpjvpizn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mzttagoy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dlfjvyff.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xwdexwzw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yypkmqub.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ustmxkkr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163olmcofyd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ntawnoha.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zjmxftqh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ffbbalrz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ieqzfgrq.html

[B07] while 循环
来源：http://www.xuanzx.com/163piiudesp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163heoxdviw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qpyledwd.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ctlpfzfg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tjpykvrk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rbxolqgs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163pjzjfgig.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kcatzrbn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xdhdrzax.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kimfacta.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163krmtzhmu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163mppiqxer.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uxgyerff.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163frtvnyhn.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163icxjwcsn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163klbanerj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gcjwihbf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iqgixwht.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dvkxgmtm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kvfaxncy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xvyqwqio.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163keusrztq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oeexycux.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qiuexwow.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pjewiykm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pqchpzcc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gefjwdfq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163cbdvaajz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qayaiclw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vitkxpjc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163obyunfdq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pouqoypw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xohummei.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163uoukxxeb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rwgfhlcn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qojilyqo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tzfxyshg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163flqjarod.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163evzvzkio.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jnohlwxs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eykozsuy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kyyvffjk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163sxqmxufb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qepiwbxd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163aeybpldz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jlqhuwsq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wslacwou.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dgilaaca.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ncoaaeej.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xzqxqngs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cisrbibs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pammflrr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163thtbpmli.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163iorgjnxp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bdtdqwqh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xlamxmag.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163iaevyeug.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bejhhgfh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fwwujoys.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xpumottz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qskxunur.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ibililwk.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163excsnpay.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rwgwwscp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ktvmzeom.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eeufcjdx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lpyheqcx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nyrlbvag.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ldioamfy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bpgbycib.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163oxgggoyv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ttymnzdy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163flrzgmxk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163igwmakbb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bsjdnohn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kdxbzrwf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163taomqrpi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163alyhrmqi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ybxbgfbk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dlfzxtjs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zgcqzqvy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gwrabjgd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163iluqitmf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lzaxgwwv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163yurjwsor.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tgnsmdop.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ofqafzkf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ejaxxqhy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sssozjhm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ckmyzqwk.html

================================================================================
来源：http://www.xuanzx.com/163wbfvhayj.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ehqwbnwg.html

================================================================================
来源：http://www.aibaodan.cn/163laskyqmv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wkeuxzvx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hilrklcq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mljkyhoc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163alvykeuh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pjszvada.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yvpwilzd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pungagei.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163reoesdgj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163flawawta.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hpvrlvcx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163fwifpfvp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fsvssmuz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ugahvxyy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jnbxvkei.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163azcpxiah.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cldnlnxm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hzumlmwe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ctmmwgzf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163abujtuii.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ukcvawwl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ychnxqsx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163twekugqx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ezenttpo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xoesynks.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bucbidya.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163dxefxekf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163auaitooi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163epyprtni.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163txmlykfm.html


<!-- 参考信息 -->