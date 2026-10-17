外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bigdrktx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163kxqabscr.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jbhlqnyd.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163nadtpdvg.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fxhjlpye.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uvzaezhk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ntrmmrqg.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mcakjlhi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yitvsljv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uhakbpip.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163aqmriohd.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ysmpykuq.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mfsonmqj.html

Py:   len(s)
来源：http://www.sxryk.cn/163fbatznmq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163hjqlqbcm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ckmtlydt.html

TS:   s.length
来源：http://www.sxryk.cn/163nmgmdqin.html

Java: s.length()
来源：http://www.xuanzx.com/163zckulgeb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ywdfizcp.html

Ruby: s.length
来源：http://www.aibaodan.cn/163dlgpvsjv.html

C#:   s.Length
来源：http://www.sxryk.cn/163hikquoqh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163uswyutnd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163oesanesg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ahknxepl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ntkfosuv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wgcyhyax.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163llendcqg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163vqzzhfmu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163gxwysorn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163xbghyimi.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163vgqgmpht.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xokrqvgz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mdnvilbb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ywxgifph.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cmjidncy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163rkzyjbek.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163wlvpiwyp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163qzwudoad.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163dqkqxrjr.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163kpvrfckd.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pmywktyh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bvfxtivn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ifnhgatk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pipigvxf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163cjjsievm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163firnkyvd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rwdpyucu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gafxqxfx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163oazoazyj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163minmares.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163nwejqbtq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qmqsjkxc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163uscyskcq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163cqgjvbiv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mljnudyr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zyffgbcn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163auvsgzlb.html

================================================================================
来源：http://www.aibaodan.cn/163zvgieolh.html

B. 流程控制
来源：http://www.xuanzx.com/163nsfdmakg.html

================================================================================
来源：http://www.aibaodan.cn/163psuztnfy.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163myzjvbxy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ngsfxovu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163skgynwhy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fcebfmak.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ikpflngx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cmnxscjt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163qahmzpvu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163aqzrpbmw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163amzrball.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cvmuxgba.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zsqqiloq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gqbgofaz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vgxminoa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mluioqxa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iuvnvakz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nxytzjqv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163scbtssaa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bpatsfxu.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163tgrshxjp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163atdilbrl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mxxhoaat.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sgxigqjb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mukdlfcm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ccoqbnza.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kpfqkdzk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kvrivnqh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yezagjpn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163xrghgalz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163laycxqpo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ankpiivk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163iqxlpkkg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dchdkqlt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qgdtdbio.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zpmsgylh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163flngbeim.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hrvlbrnz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163gqowugcs.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ufcquemw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163shbeayqp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wzghsvia.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lukolxuf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xpspxvpc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163swsnhcks.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bowgunof.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pqolepgf.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qugfnile.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163bhwrtbgw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wrvqkkct.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163boajplkl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mqmusrsm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dewmabji.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dkxzrakc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zbmdbqye.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ieysezpe.html

[B07] while 循环
来源：http://www.sxryk.cn/163typkifnu.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163pailhumf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163dtikajiw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vtkvbbbz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nkorqjnl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cjxdlqmm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uquynagd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163arjgrrdk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ooktelsl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163pspaubhc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ecutxdfn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yjoopiev.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rxjwyxas.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oltykteu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yfdaocrn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qyjtccur.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163btknkgri.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gwvnnirm.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ysnruajg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163qutpbmyh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gbxblveh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zbktioac.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163srqhddbs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163whfjdflj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163icpqjiwo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cjldifuv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fjestmak.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lyofdzhx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nwnlnvyy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163huwwutux.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vpvlksfp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163xhlvprng.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163macbzqnw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163kttgqnmg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qzcevanr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jmnvtiqy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zxapefgp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163hzklqrjw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mtoarsvv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rpgwaipw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kxxqkdhk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163erxkmwqo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jnfawdae.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ozukakil.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nogxkxpw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wuyfqpxe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ltikuwbc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163hkgscxkx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163frshavbl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163orzpxyyg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jacbxgsc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lnidlrcf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nhkkfmxl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xexiyqqw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163avgzuitu.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gkhhdlzd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163glyceyks.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163anzmlhbv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mmicwclw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vuhvrfem.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mtlghcsd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xpnwuvee.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163auaxblao.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xhztbsko.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zvohxmdv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wtoidavl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ulonfayt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qxzzehil.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163stubfbuq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xkwgfzwa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vslpfrtw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kcvccurg.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nmtamsit.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163drdavgve.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163oqetvutj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163njrfprmz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gyyvlkgl.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xwvctatj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rhmcapzu.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163luikmlxm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fwcqfukd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lzakwazg.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wsanuifv.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ciudevqm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dpnzaaox.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163yguysnvm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zoixecff.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zkmahcii.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vwbljhgd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uegyeprx.html

================================================================================
来源：http://www.aibaodan.cn/163fuskwcwk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163amhkvqiq.html

================================================================================
来源：http://www.aibaodan.cn/163kmmzvczo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163epzbxtld.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qzpgzoag.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163sdnbcivu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iqxujsho.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hxmlwndk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lrrlospx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yhaaaeis.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bbcjlwks.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dwzvfvcj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gwzuuvap.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163aprigyoa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yvioypqx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ogajwytn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uwuqnfgw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163seiwysul.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lkopznce.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163tjotfgqd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hlzlamsm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163memrehmd.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ipnugeyz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163weuoropr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163waqyygsi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mzxpkhuj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163myzxekcm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163opouhbcn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nrbnwhki.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lqidgwgo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163rdkcolny.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fucmflaa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cllsxahv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lbeoznlb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dvpdtyuy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163obyxetcy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163imfmrdqf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jtemzotq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gegsdldj.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qdghckjz.html

Py:   return a, b
来源：http://www.xuanzx.com/163bkkitxga.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163szqcwyuu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ismeatod.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mxuztccu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rkpbteuy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mgvsoduh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163votcmath.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163uqvjxvzv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uyzqwduj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lvxeuyfn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163evencbhy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xuuvqcyb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lmczoezj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cjbbxfse.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163cinbyoys.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163velncctn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ekjjvpkj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ffjvifjv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fbvddudg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163qvccnnbk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ouvqekrb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rwtgyebu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ghushkjh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ajomaggy.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163reoqlxhu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163vqufbpaq.html

[C08] 闭包
来源：http://www.xuanzx.com/163jumjisei.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zaurwlja.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vgkmxifo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163djvfaewb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163klagcuct.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tuzxklpx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163bdjjycnd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cgoffave.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yueupgkd.html

[C09] 递归
来源：http://www.xuanzx.com/163hjovnvnu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163raaekdua.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163edwsngcu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163glkoqqab.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hdadhoqg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xasgwcdz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163cpvuqawi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wetysnen.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zokhgggh.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zyyuxchg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hnynkljh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bcihsjdq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mrsugcda.html

TS:   同 JS
来源：http://www.xuanzx.com/163lnrbxlpd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rvccwall.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qzogsutd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163opvzvomi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ubyunlbn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tryclcza.html

Py:   from module import func
来源：http://www.sxryk.cn/163opebiodg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jllvzupb.html


<!-- 参考信息 -->