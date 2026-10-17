外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163trfunkrf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163vyrdzwsa.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gierqiop.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163qkycwtte.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zfgkzzyb.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163rjjxtrya.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163dgdqqszj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163uoayqqsr.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zacpxwod.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hvshwnis.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qfubgbkz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jkihpdde.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163usocbolj.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zfmygbmr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163uordcjpy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163zcilqnvm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163mdtjamyr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xtcyywzh.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163hhhjzkpx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163qmwozlnk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163eqskuubm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163dpsnonay.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163daozmuxj.html

[A17] 位运算
来源：http://www.xuanzx.com/163ywntefhp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cihmbhcj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163jyyzotnn.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fqhkjjhz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ufqyqvfq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163octeajyb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dfwwwhmn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163flboyzvc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bzckzvgo.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163iegyqrfi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mhpuxzca.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163kwbthszm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wiumdgrw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bmbljazd.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163sejwkhky.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163udumjmnn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163eedwaxye.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ovztulez.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163poaefbqy.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163nqaxrbyv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163rvrfdgoc.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ydbvvrwi.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163owbbigdn.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163zjoqxjwb.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bbbwtuyc.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163yxbwatbe.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163prhwqyfx.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ujdxintm.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163dpmgcyrr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rbprpxkb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163amhcmctd.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hdubmtnc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ggpitacf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ukmrecpn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163gyadijjr.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163dcflclst.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zzbheiwy.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163zzxcgeen.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163toavhack.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163fraifbwu.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uqusjdrj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uohxjzzk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163emvmcyrb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bxehlhoh.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163uswetbor.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163wxqoadhf.html

Py:   len(s)
来源：http://www.xuanzx.com/163kgnfsoim.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kstixxcv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163zrfrjbts.html

TS:   s.length
来源：http://www.xuanzx.com/163yzjptgyi.html

Java: s.length()
来源：http://www.aibaodan.cn/163amjdvhjc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hoiyqoap.html

Ruby: s.length
来源：http://www.xuanzx.com/163hhcsigtj.html

C#:   s.Length
来源：http://www.sxryk.cn/163gbcskdki.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163yobsziiw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163khvzplun.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ycwwbxdu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hnjgxwoy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163msxleuwg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163addofygx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163oruhlzaq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163buegcjtm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ibtdchxq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zipkzupo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hwiiuzqq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xnomafss.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163unglclly.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zzlmgqyj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wnimaskz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163fsrikelw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xoqdscok.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hwjwijfq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163uotzbjne.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163pstbouuz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163twtygpfl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hjhcxdae.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163esacpfvj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163khhyaedd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163acdulfqz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jmgcxkww.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hgtnyypw.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163crkslklj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pujgylxi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163nbkbmcui.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163xqhuccwc.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163eexqoonb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163qqwuismi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jhkwcihn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163optekoni.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163yqjueagf.html

================================================================================
来源：http://www.sxryk.cn/163wjiwouwr.html

B. 流程控制
来源：http://www.sxryk.cn/163nnllymex.html

================================================================================
来源：http://www.xuanzx.com/163slcebcmt.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163gzsdgngg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163snwpgdcq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163blznsgle.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jziothrk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ngzsisup.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zgsuwhfg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163bvibibvy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hzbwlfyp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163slfxcorw.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163juquunnv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163nodxmqei.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qxcvbype.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dduoijlr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kszogdws.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kcgnaydl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163stxwysmu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vhqmyznq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dbqxrrsw.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163byhiqtoq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xoirwqys.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163wciduwrw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yxfneqwo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163sorptvgk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163afsxplhz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163typqtnht.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tjlpurca.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163istfcmjt.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vsytiwni.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vtdwzdku.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zrrpkyws.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vcsybbwc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yxregeib.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qykeuuez.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mehvopdp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bvkovruf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163vfueazep.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mfxmbati.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163cbusecgd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wcuvsowp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zxjiexic.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lkqrrqlx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163zahahida.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bqmtqtwq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ckijekwz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rdtmcisk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nxziazrw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wnlqtkuc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rlelnudt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yonvqfcz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jnijicws.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fnamqodu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163dbepbxxr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163tkxhxtgt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cwybbxey.html

[B07] while 循环
来源：http://www.aibaodan.cn/163snnfbkqk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xyuoyrnj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ekfceklf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dyikbtzf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wcqwlrcb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rllvudpk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wgwfhxiz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ibgtmgqc.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cubmzobe.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rvgutltu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xhbpdnjy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ijlgtkxa.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fduqvzfh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kiinilxk.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jkvlrzbz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hzjkmgan.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163hnlccdwy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qfwicvhi.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nztebwiz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bvselczc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zirgwrtb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bupsjdwt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jcfxvomo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qlywwfdc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zzkwlwvb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zbdmfoyb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163shgjuvhg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163znbbewdc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hjfuuahs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163bvpzjaha.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xzzhtnsw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sawtcqav.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybjlemjw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kykmgbup.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ufsjiskd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vfkjvtzz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jybgmmky.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xrdjxryt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xvkcdoay.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pjqqptrb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dochosak.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ckspykxk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lffmtkpa.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163nvozzphp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ioaprqlh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tdlqmagx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163uzaroiot.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fphtqkoy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eeabsqlf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nzamcogg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163avhixuhh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163eoffykuc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163upcoyxuf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163yreljxfy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ijsjqdlq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mkoihpmc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vvtpebyg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kffhqglv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wmupeqhq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163raydbogj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163btojltqv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163horeqtov.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wjfdrzsm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lnjzrkad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xkmqztyl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163orifbjbf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qtczxnrr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pcbtafyb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163srbhtcss.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163txbljqry.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163inwyopvt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fryzprjt.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163egmqtjee.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qxozyche.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163drgnezek.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jwjsyzsd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jvqfzlvz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hryjqypw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jijvibfx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wtsjwviu.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163iaujbvrr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cpsntkxg.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163stwfpmgd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rfzomnuc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hbctkjcr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163aidwbnvq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163bxrtedhp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pejyunvo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ffyfgpub.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wxlhdysy.html

================================================================================
来源：http://www.sxryk.cn/163mmufvguv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wccdtscj.html

================================================================================
来源：http://www.xuanzx.com/163jhswbiyl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mvbaobqi.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163eipqfdqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mpduzyhj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sotmkvkg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ufraqidh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bknwbuwc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jwnyedhv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163idgpqexn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lmplmlkv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hkyszukg.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ztqezfop.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rmydtgly.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163myqhuovg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dqiheqmq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lbnmgugq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xwieauns.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ebqznmak.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163drmrjtad.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hrxibmuw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wtthjqhr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rfzkraux.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nwtawnjo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yzxnvsbo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ieyagozu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rxzznpmv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163psjnonrl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bxfzorqo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uqjmgqcu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163acgbikgp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tszooxhh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pfdxlbmw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163slmgvant.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163cqtlxitb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pcylfzpj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zaxghwhy.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kztbiahv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tvnbqoei.html


<!-- 参考信息 -->