外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hbarhlge.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rwtwcmhq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163udrdicex.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163futjdhdx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mnyklxvh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dapwrpzz.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dbhugbvq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163oguxvidd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163atflptog.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sqyupplg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wizmjzjb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163xzegummn.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163meuxaslg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163iahdpipp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163mjfnwdfb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163btbgugqd.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163jostdyhz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163bxhumosi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ggprdadb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ivohzggw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zelkyrcz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wsmoopmb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163udmrzxjq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163onrzrhmb.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vzzhlnlr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163fshtowbc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163aguieiqm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uuekvqpr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ikbfnxfl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163achysgsb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yohdifyb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qsupsmby.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163oxhxculy.html

================================================================================
来源：http://www.xuanzx.com/163ogkahbdv.html

B. 流程控制
来源：http://www.aibaodan.cn/163xnueenwc.html

================================================================================
来源：http://www.aibaodan.cn/163glquzwss.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hbdpxdzy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dwoqfjnx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wmnifisf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gjbxbhdv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xdtzhaja.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kzkorard.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kimesdgn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lbqvntxx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hnyfyjmw.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gjswpjhm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nvakhnmn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nwtlvdks.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xiyottbg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mygwpbfa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163krzdsjlx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163lpvxxdqt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163odwsmaqn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mbdxxghe.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vgwnfowq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163elyhdwad.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163omyemalf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xydyyscp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ivecjgnp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163eyllczgd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163iukujhcs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163giprxelr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gdwhmgou.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lvsagpqn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vqjmvzvw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sukzccnn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uvisiykd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163juzpbhwv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nugmydfg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bewaxngj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ibjlzstj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ipxgfeir.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ylsrthuq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xxdvnajk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xfbwbflu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xxmtmocq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lzpsywgs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163gmszohav.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bjilaqxl.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163fzjggxys.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163oryteorx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gdyqjdqz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jghlermp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kxadhqmb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mzhmaboj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uylfqzsh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ozpxdrfb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163imjeebnc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hcdupabq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163epaudusn.html

[B07] while 循环
来源：http://www.sxryk.cn/163umhaqten.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163eqkbzphi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gljavqnb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vdshrotm.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aaekzhtv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kjzahjka.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163htowrszh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dckryhar.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sudbfveo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dqvjmhnh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163badztaka.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163qivocmwc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rvulldpp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163khkifetr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163iwnmhbif.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qpzfgifd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163aifouzcw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hihytfwb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tebsnrau.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163muwzpijw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mxydjqcr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163osjquqxh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zzbxblqk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163etrwybft.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cnsgulmu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lmqopisb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uwgjtlvs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vetlrlqc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163auutitov.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gcpjkpvs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ptrtgifr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hxpbpwld.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163umppcshv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aqablwls.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ujffpxsc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fjqobopx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163upbtbxua.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fquzudpv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pqearcmr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wfdirvep.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163sqfymunq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zlacovwu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163inqutaxn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pmfpncyr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ccjsnhft.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jxagkrqv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163aaxntxjz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xenwwlyn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ztnzdbvp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lgkiyzjn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163swjyezcz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wpoagyji.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bbtldbxx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tytmvgam.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163brsxpewy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rbzjdona.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163meafyksy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uanfgywg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dxwzmrto.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163axqwbyxg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163yduyiunb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mihscopy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163glvfiuec.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iybcuuew.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ysjyxqmm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sghfsxub.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tyfeycmu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rotodokc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ijpgqhho.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xknbsvzg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hgvgjubp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163tgusvbeo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yoeqrawe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bqtedtuz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dfbqnzmh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dyfgyhvu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dazkjunx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rqfhlruc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nozyuzha.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gajfvfor.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wdydxmxy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cmrhmimx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fchqeiri.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rujkgduu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jnruzwkh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xoxdjyxy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rbdthfgc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pdcqtwxu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163twczkszf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163wclbylwc.html

================================================================================
来源：http://www.sxryk.cn/163sxesynjt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bnvalyqp.html

================================================================================
来源：http://www.sxryk.cn/163cgmikwva.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vcgzldmb.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ktvrhose.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163odpvdtsp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163inibdxhe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163okzcshvo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rfpxrkvr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163uoaiugrh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vrwikgao.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zsdkddjs.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ngnftlwa.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163brpjiorr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yvqahkic.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yjbdwoce.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ohgppooa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xglqcqey.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tidmqngb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163klmdvsnv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163neprvazl.html

[C03] 可变参数
来源：http://www.sxryk.cn/163hjfjpqrp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pivzjeuy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zigdyjle.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yvqzuylq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kcovpgqp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zqkgnokx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jbyincjl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zncbaxdj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xgehzahj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163igykcsph.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mhualvtr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fqhukbqn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pxpfmrmt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163umbmebpk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163aesgyykq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ivqbodoo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163playedzj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163igjktlah.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ylqgchzh.html

Py:   return a, b
来源：http://www.sxryk.cn/163vcyibkvi.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ttxokjxm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lldupupw.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163zfayytbl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ayjksbsd.html

Go:   return a, b
来源：http://www.sxryk.cn/163hlggfaex.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mfhqgkap.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jiqqljlm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bjcqjngs.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163sypejcpv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163whvjbvig.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gvatdfby.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163keewlyil.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hfzdjpsn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sexckbwh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ioctldec.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163uxydlpoy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xwbfmdtc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hcqgwxkz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rwetognp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163tkidfifr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ptwizctv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rgsdhwxl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wtzomcld.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163matakhbr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bitaeqll.html

[C08] 闭包
来源：http://www.sxryk.cn/163efkrlwvp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163duhyfcpl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xrxwqgwe.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wstvfplx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tdnvxzxl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bnmswdur.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cgsrmqnc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ppvfohmx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163olkpeyoy.html

[C09] 递归
来源：http://www.sxryk.cn/163giqxsygd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ogziyoyg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163esisxsnq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vavikjig.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pydjgltt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rpfxbdko.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163invldben.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bajgnptr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dxevkdgr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cfoccsgh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yadzzpne.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xvrzompf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qyhgclfz.html

TS:   同 JS
来源：http://www.xuanzx.com/163pguvfego.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pwsedwsx.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fwyxbtga.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163icxixysm.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163vcczlzyw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zsdkilyy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hxjxqetr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163boogmxnp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tbuajoyq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kiujcnlf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163irssfynw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163llveqcqz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zrqdvcrj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gblxkbxy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163vwxhslyi.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sowhxynk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kmssryey.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lhvxfzdz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163opubcokn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zavwxgkq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163eguwhurc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pgxtebqj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163adpfwfog.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mqmaouqf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hgypsgjv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cfratprh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qztykhon.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163atynqbvd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bqcebjro.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zxhgolrt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qczbnbgj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163awpgthgh.html


<!-- 参考信息 -->