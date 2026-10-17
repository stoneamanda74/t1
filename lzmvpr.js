外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vkwzepjs.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163naxzmdxy.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qhmebmig.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163xhttdygw.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ojyigvom.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163loyjqcew.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163zgoyqdqc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163nugfdlsb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wtrvtxlb.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ddrzhdce.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ukdoxach.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163pmntpawd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ygocbbzv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163pbogynyd.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ecorjxlv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163mjactieo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ykksfoxm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163osxjdski.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163aoblcaqx.html

[A17] 位运算
来源：http://www.sxryk.cn/163qnohhgce.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uuojhxyp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163uthvudcm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fixsveat.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163bfnqvwxp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jspilfzh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rucyiuje.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qsagohby.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mhmmhnaj.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ncrudjia.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163gfzdxwhf.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163qzugdgdl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vuuuatyr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163geesoatk.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163jecrzobq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163dlzbzvav.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163kpofswph.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163hlamyvho.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163logmosda.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163adurxxem.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163yatzxgex.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gvrjfhjz.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dttztrak.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ucvtjpvi.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163fixapqip.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163obhwoqor.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163nwzhkzhu.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163oovkkqkj.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163lsulaaxu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dghmogfo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163vgjmrdmp.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ointcnvr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163vtivwqnr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dymljaez.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163jtnxzycn.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zhuzxhnj.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zpwrniqd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bbgdpfxi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hhqzstgr.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bazexsfw.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bhupkflw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163udkhoemu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ikkulzfv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yhzaafwk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ynibyzab.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ukdbdota.html

Py:   len(s)
来源：http://www.sxryk.cn/163qiwahvxx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163trkitvoo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fmfywsoi.html

TS:   s.length
来源：http://www.sxryk.cn/163hxvzktww.html

Java: s.length()
来源：http://www.xuanzx.com/163fvtshrhd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163qwcmclvq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qgdpyqft.html

C#:   s.Length
来源：http://www.sxryk.cn/163rnapzmfg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hljfmwda.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ldrahqpx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wsobigzy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jvlxhagd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qtekaevx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163glfstruv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163myoubceo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hmbcutfi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163xykoauyx.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163dcyhmwyt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gpnjwnbh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163zkqfzlme.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kthbeqcd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hadzbxoq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ufwvlrvv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ujysvzyz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163eckhgmcg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163diqagpbm.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xfwbadac.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ysnsygdl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qjojdcfo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vwcsgmpy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163izamcrnn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163eszjoeoy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fdtzflij.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163owjdsezg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163efzavads.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fkxezkjo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mtxjpryv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163sdfmjmqd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163futaztem.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xodheanw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163plgiupfp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cuiqvtnw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jfeglpgg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163banptghz.html

================================================================================
来源：http://www.aibaodan.cn/163qiqbtuyk.html

B. 流程控制
来源：http://www.sxryk.cn/163bgjjvdco.html

================================================================================
来源：http://www.xuanzx.com/163qukzpfag.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mfeeiorz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wifdyvux.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hiclrtcs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iozruzdw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sftnfhjg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bmpkhnxl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163fkqoxreb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ykmbnjds.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nhlvavgk.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163qrvmcenp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163soenfiun.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fchgbtrz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hvxhapge.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lrvrbctv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xpphudnz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163dsavndzr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163wcrkitba.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cvtadkkj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163pufnkfou.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wihpnmeb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kbadfrwv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gdbyskdc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ludtoijb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mgkeyqjg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163csuqrnkm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qknfqttl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jtpbmkxt.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tqqoiewq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qqgvinzz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ujmtbrlr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jrovkzny.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nmiebtpt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vflspkpf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ycjrwvlr.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163hivggbmd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fxaylkfu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163agpctbak.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cvdzbeaj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lcvfnwbl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jiyfwpcz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ckkiwnhr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163clfocscw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163soqpxwmm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jbhfxudn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163yxksmpni.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163akrztghr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163shkgkqor.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jlqpakqb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vzmmecvr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lmfsxgvq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vacppkht.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163asnbigob.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163lhatwwfs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163wbmnscwz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ayfbcpcc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xpsnnqbk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wywqrsah.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oahlqktq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163brqifzcg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bmpzkrtn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rqfosodz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tefjqcrh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163altioyiz.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163veacozzm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163horugjax.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ckusitvg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qpyttsxc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163derrypfa.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ceoqzxbf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163aqwcrdhw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163otmukzem.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zidpraaa.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qfcginff.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ttcbcqnz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xmouwmdk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xbcsyyyg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pmmwtkfm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lnyhpbop.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163skqjbijz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163grqhqwzs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bgyqegtc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vizfuzti.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mwsasdrp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wtwoonbo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nqjtinug.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hermlurt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yqarkfeu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tdkshznx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wurhlcuj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qqcdbfsg.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163aflhpdxq.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ujnylghn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fslhyjqz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dgffvqah.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gyhbnukw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hjdfqwwj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zlpeimrl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zbwfelho.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dlqgonsm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163huzqvjgj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163yftwghdd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kgwnxwmg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163crdouwyi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163duitjvfn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mufuuter.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fzpcdjik.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ikjjfsxa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dutyxara.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zejdycyr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163udhxpqfw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163onlxyukk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hzytodwh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vtleemsd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kmpkjiuc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163gesorway.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ainmjleu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ewckyeqs.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fpnvwbyn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xtnmevcg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yztdhuvb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yuvisdny.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zekmwmcw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fmpeqbva.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qumnlbvf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163otwiwkgo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yeaedzyh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163udrjedmo.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dmrgofud.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pqiccpid.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vuqkniny.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163svouauon.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yjcqnufl.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kirizmft.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ypsjdtow.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xvyrxjbn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dtfiwjqu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fywyxpld.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163efyhabws.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ahjhciqb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nlzxewcd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163nrhdskzy.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lbmeedeo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zttqpadw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fjgvlzyr.html

================================================================================
来源：http://www.aibaodan.cn/163uuxktgjd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yfjwfklw.html

================================================================================
来源：http://www.aibaodan.cn/163yxkccfhm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ymvqcwcu.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163stfauvuz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xalohitv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163cjudzong.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xneqiwjj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jdwqgjif.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dhyubxfq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yiznqgxj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jdmegsjt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wuicieqp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vdkzxbym.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eebfggaj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rzyxeipt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kdnqagrn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163kvfgutem.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163trelecru.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wvjkubtz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163plubglkf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163buompfeo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163yyekfipp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163odxtdhle.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qkcbpyjf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163amglkiqm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kehosvly.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kmrtngjv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mcxnwpfg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163veuelxwt.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uuyjeofc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hrtfjqcd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nyrmyqxe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163lotloonv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dxejttqo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163odymhqth.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bjqdjjre.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yfgbdnzq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163khzhnnhb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rrmndgua.html

Py:   return a, b
来源：http://www.sxryk.cn/163nqoluasx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vfxvnvqi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jqzjezwx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yjnueekb.html


<!-- 参考信息 -->