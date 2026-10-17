外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163qppxdqaw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163qwcaulsq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163jipjlhoq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fthbiemd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163hyqhveck.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163jttvtvmu.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163vqmyeajc.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163slgzprml.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hqgjhequ.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tbsjubhc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163aqhimxlo.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ibptvsyx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163raqrxfco.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gezefiuu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gwqdkoej.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ouzwyqpk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fcsllukz.html

Py:   len(s)
来源：http://www.sxryk.cn/163imxkrhza.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rulmafth.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163gulscool.html

TS:   s.length
来源：http://www.xuanzx.com/163uwhipimr.html

Java: s.length()
来源：http://www.xuanzx.com/163agkrtccm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jaqvfgfs.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ifcrxubj.html

C#:   s.Length
来源：http://www.sxryk.cn/163lsglafmo.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163axmmsbkr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163evoqfplp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rqonmhdj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yecybgxu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ohzojtcw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rocrufuo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163llpmfrjw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163igjyrcpj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rajbgdnq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kdibbtjj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163iequlbzc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163kfahzsdc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163igyrfdaq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tjuhvkhi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dpkensyr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163jgwsobvk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jbqsytjs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qjblgnyh.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163lfwbzfno.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wzglulct.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163sqabkcqp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bbvjcmfd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lqpkzhpn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163irgxvbsl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163dgxsdqjl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163unjdqqwn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sbpajohc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dwhxkwrx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163pnzbpdnp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kohpefel.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ushwphly.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qwbgeifd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163bceavzme.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163eczrxlej.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163idovrqma.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zwtpjqmc.html

================================================================================
来源：http://www.sxryk.cn/163lmjrympm.html

B. 流程控制
来源：http://www.aibaodan.cn/163xfekzdbq.html

================================================================================
来源：http://www.aibaodan.cn/163vcdzbbtf.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163gpzmgbjy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ufwqnlgd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wvoeaupw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vqwmxhgo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qesliigb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zelgktsn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163wtitvfsd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163onejnhlr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ehypfabm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163untqchok.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vzmrsulh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163uexrjnmp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sbkbhujz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163llwedowx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163teorvasd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lcgsyewe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163xuhljjxk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zxlxyoqg.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163pqiqwlnx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bzqmtxnx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kdzqokxh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gboyxbmd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hivgyfey.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163oufzgduw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zcogxvjm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yrynyqrg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163pmbddkad.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zypptazd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163hkqhnanu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163szzczlqn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vvdqvlnr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tctuzuje.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163uqtugumk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rgiwcquw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163odmuvdpm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qiodrdqb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dgckpydl.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jcaymdsk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163snypppin.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ogyxuvpg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lpgoefge.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gxuascpe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163seiztgeg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fcfofdrd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163idcsjhgv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ssrqxuwm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hhoxbqqx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qhwsywum.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163scnfhenj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xtbrpfti.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jyuoqvuj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163aiouzskh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hwwighao.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rcudyyqk.html

[B07] while 循环
来源：http://www.xuanzx.com/163gzhvjvaw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163srbjtrde.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rzwmiuhy.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163znfmdpfv.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vwypbegw.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oujphkjn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163isoosikm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163sauxoand.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163szjqnxor.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vceossod.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xibjiays.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163oxrultdd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163csehhdmn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wvpkulos.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qeqkjien.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163akarsztg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nbbqlgae.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iylhrisp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uevpdhdl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yvopejxe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dpjlvxku.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cdqcmtko.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ppfeguin.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ftxmauxi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rlpfcvby.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xkqhxqeb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qlkmmswm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rllpoasr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163oagsbqdu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ijgccbue.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qjtaesgt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lpepbsgi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jczampgi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tauoqern.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163sxshwwhn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163qnqaqwfm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163aiflrgdk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fgtdcudd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mzmggvxg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jwmhxzqc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zqfmnvgl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163svnsadcm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nbsjfntn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lyvpdmnw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hbkwocdi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cmgtxfaq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wvgpszdm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bszbdhoy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pnerxnec.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zqapxnma.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vxagfwfk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rwtgdyyg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163klhwwsvc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163lhnpkeob.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mlixzyar.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uvumrand.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163frptldzp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jqoqcgio.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jsuzyhyf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163piecgsox.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pcwatprb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tamaakdo.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ndmxaatn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163octiiohy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xxmxaotn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163goqpinmh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163agwzkpdz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yhjkkysf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ujpjhtpc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ojvynwof.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163axbyzxhr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163uxuhmtlj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163odhwtshl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163yqhkmkxk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hraccxjb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qsrknzvr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163erwhovcd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jmjfhags.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pdnxnbkb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bhfxcavc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hzmtrkua.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163achjqsfc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163muapoxbv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163dsuuifxn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vjhcoblz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163lsojuquy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fkvnacir.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ilnonejy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163maxfzdxl.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163spcabfpf.html

================================================================================
来源：http://www.xuanzx.com/163oybnsgdf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163fpnuasxs.html

================================================================================
来源：http://www.xuanzx.com/163gchozhud.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163arxgccmm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163stcpdynr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163keqesdgr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163btreagaj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dyqjawto.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rtgwtpem.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vojvjnow.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ofmehede.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ehfbynln.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163giucmisu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nldhxwfl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163oganjfof.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163bkljboyt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xflxvxns.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kkhyguwg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rhkifbbe.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163coeulssp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ruoyhizn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163grxwushz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163viwuaqyv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hhtqqikv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rpvvpfhc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yzqxnmud.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tldmlnrl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zdcvghnf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hgrgvqco.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vtsfnxvs.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ucvevvst.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163dnnzrnfd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kvetogwy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nourwpew.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qdxtowls.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uoyuawwl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qocnlgfa.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lcrqcyij.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ozyxwbix.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lglzjyfr.html

Py:   return a, b
来源：http://www.sxryk.cn/163wfohsfyj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yajbsupr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163diwlphzg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rejerxyu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163idbfgcaa.html

Go:   return a, b
来源：http://www.sxryk.cn/163efqqibry.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fyhtchqr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jjsxvaqf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ssaxdyrm.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lwqgbotr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rzdvzgol.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ugdpavmm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163gydfcxvj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ndrvzsbv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kfoafkho.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kvbtscrk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wnkhwxct.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163hpbjbjlk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jedyohgh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kdayesci.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163iinbtrwx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mbexjjhk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163grchiucy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dacohzxb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163txtgkjia.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wqunswvc.html

[C08] 闭包
来源：http://www.xuanzx.com/163jrazxnzs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xpjueklh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163kvnhhxkj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jqgmjsyi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ramsmjzm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rcdechra.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rwmbwqpf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ckssmgiy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zxzatkmu.html

[C09] 递归
来源：http://www.aibaodan.cn/163euvrrops.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ihwynpha.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163txhiokyn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ilgbagcq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rbkpidzz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cysgaegd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dhycufff.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163iujqrtyk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zgiysnpe.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163znpzthny.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163njymgawq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ppinqnsg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163shfzjwej.html

TS:   同 JS
来源：http://www.sxryk.cn/163qfkofmxc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163txpocttd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ymavnaaq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qajxtdlh.html


<!-- 参考信息 -->